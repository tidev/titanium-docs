const fs = require('fs');
const path = require('path');

const metadataFilePath = path.resolve(__dirname, '..', '..', 'api', 'api.json');
const titaniumMetadata = JSON.parse(fs.readFileSync(metadataFilePath).toString());

module.exports = {
  name: 'titanium/convert-type-link',

  chainMarkdown: config => {
    config
      .plugin('convert-type-link')
      .use(linkConverterPlugin);
  }
}

function linkConverterPlugin(md) {
  const defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    const token = tokens[idx]
    const hrefIndex = token.attrIndex('href');
    if (hrefIndex === -1) {
      return defaultRender(tokens, idx, options, env, self);
    }

    const href = token.attrs[hrefIndex][1];
    const isExternal = /^https?:/.test(href);
    const isSourceLink = /(\/|\.md|\.html)(#.*)?$/.test(href);
    if (!isExternal && !isSourceLink) {
      const link = getTypeLinkForKeyPath(href);
      if (link) {
        token.attrs[hrefIndex][1] = link.relativeUrl;
      }
    }

    return defaultRender(tokens, idx, options, env, self);
  };
}

function getTypeLinkForKeyPath(keyPath) {
  const prefix = 'api';

  if (titaniumMetadata[keyPath]) {
    const metadata = titaniumMetadata[keyPath];
    return {
      name: metadata.name,
      relativeUrl: `/${prefix}/${metadata.name.toLowerCase().replace(/\./g, '/')}.md`
    }
  }

  const parentKeyPath = keyPath.substring(0, keyPath.lastIndexOf('.'));
  const memberName = keyPath.substring(parentKeyPath.length + 1);
  const parentMetadata = titaniumMetadata[parentKeyPath];
  if (!parentMetadata) {
    return null;
  }

  const memberTypeCandidates = ['properties', 'methods', 'events'];
  for (let i = 0; i < memberTypeCandidates.length; i++) {
    const members = parentMetadata[memberTypeCandidates[i]];
    if (!members) {
      continue;
    }

    const match = members.find(memberMetadata => memberMetadata.name === memberName);
    if (match) {
      return {
        name: match.name,
        relativeUrl: `/${prefix}/${parentMetadata.name.toLowerCase().replace(/\./g, '/')}.md#${match.name.toLowerCase()}`
      }
    }
  }

  return null;
}