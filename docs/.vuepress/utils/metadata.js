const fs = require('fs-extra');
const path = require('path');

const metadataFilePath = path.resolve(__dirname, '..', '..', 'api', 'api.json');
const typesMetadata = JSON.parse(fs.readFileSync(metadataFilePath).toString());

function isValidType(keyPath) {
  const metadata = typesMetadata[keyPath];
  if (metadata) {
    return true;
  }

  const parentKeyPath = keyPath.substring(0, keyPath.lastIndexOf('.'));
  const memberName = keyPath.substring(parentKeyPath.length + 1);
  const parentMetadata = typesMetadata[parentKeyPath];

  if (!parentMetadata) {
    return false;
  }

  const memberTypeCandidates = ['properties', 'methods', 'events', 'constants'];
  return memberTypeCandidates.some(memberType => {
    const members = parentMetadata[memberType];
    if (!members) {
      return false;
    }

    return members.some(memberMetadata => memberMetadata.name = memberName);
  });
}

/**
 * Generates a friendly name and path to the docs for the given key path.
 *
 * The key path can euther point directly to a type (Titanium.UI.View) or to
 * a member of a type (Titanium.UI.View.add).
 *
 * @param {String} keyPath Key path to the type which to generate the link for
 * @param {String} basePath Optional base path used as a prefix in the returned path
 */
function getLinkForKeyPath(keyPath, basePath) {
  let prefix = basePath ? `${basePath}api` : 'api';

  if (typesMetadata[keyPath]) {
    const metadata = typesMetadata[keyPath];
    if (metadata.type === 'pseudo') {
      prefix += '/structs';
    }
    return {
      name: metadata.name,
      path: `${prefix}/${metadata.name.toLowerCase().replace(/\./g, '/')}.html`
    }
  }

  const parentKeyPath = keyPath.substring(0, keyPath.lastIndexOf('.'));
  const memberName = keyPath.substring(parentKeyPath.length + 1);
  const parentMetadata = typesMetadata[parentKeyPath];
  if (!parentMetadata) {
    return null;
  }

  const memberTypeCandidates = ['properties', 'methods', 'events', 'constants'];
  for (let i = 0; i < memberTypeCandidates.length; i++) {
    const members = parentMetadata[memberTypeCandidates[i]];
    if (!members) {
      continue;
    }

    const match = members.find(memberMetadata => memberMetadata.name === memberName);
    if (match) {
      if (parentMetadata.type === 'pseudo') {
        prefix += '/structs';
      }
      return {
        name: match.name,
        path: `${prefix}/${parentMetadata.name.toLowerCase().replace(/\./g, '/')}.html#${match.name.toLowerCase()}`
      }
    }
  }

  return null;
}

module.exports = {
  typesMetadata,
  isValidType,
  getLinkForKeyPath
}