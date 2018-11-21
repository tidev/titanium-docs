const fs = require('fs-extra');
const path = require('path');

const metadataFilePath = path.resolve(__dirname, '..', 'docs', 'api', 'api.json');
const titaniumMetadata = JSON.parse(fs.readFileSync(metadataFilePath).toString());
const createdTypes = [];

for (let typeName in titaniumMetadata) {
  const metadata = titaniumMetadata[typeName];
  if (metadata.type === 'pseudo') {
    // @FIXME: What to do with pseudo types?
    continue;
  }
  let description = metadata.description || '';
  description = description.replace(/^(#{4,})/gm, (match, heading) => heading.substring(0, heading.length - 1));
  description = rewriteTypeLinks(description);
  const overview = description.length > 0 ? `\n\n## Overview\n\n${description.trim().replace(/^\s+|\s+$/g, '')}\n\n` : '\n\n'
  const destPath = path.join(__dirname, '..', 'docs', 'api', metadata.name.toLowerCase().split('.').join('/') + '.md');
  const mdContent =
`---
title: ${metadata.name}
breadcrumbLabel: ${metadata.name.substring(metadata.name.lastIndexOf('.') + 1)}
sidebar: auto
---

<Breadcrumb/>

# ${metadata.name}

<ProxySummary/>${overview}<ApiDocs/>
  `;

  fs.ensureDirSync(path.dirname(destPath));
  fs.writeFileSync(destPath, mdContent);
  createdTypes.push(metadata.name);
}

console.log(`Created the initial markdown files for ${createdTypes.length} types.`);
console.log(`Update the sidebar config if required.`);
createdTypes.sort((a, b) => {
  return a.localeCompare(b);
});
console.log(JSON.stringify(createdTypes.map(typeName => typeName.toLowerCase().replace(/\./g, '/')), null, 2));

function rewriteTypeLinks(markdownString) {
  const customLinkPattern = /<([^>\/]+)>/g;

  markdownString = markdownString.replace(customLinkPattern, (match, linkValue) => {
    const link = getTypeLinkForKeyPath(linkValue);
    if (link) {
      return `[${link.name}](${linkValue})`;
    }
    return match;
  });

  return markdownString;
}

function getTypeLinkForKeyPath(keyPath) {
  if (titaniumMetadata[keyPath]) {
    const metadata = titaniumMetadata[keyPath];
    return {
      name: metadata.name
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
        name: match.name
      }
    }
  }

  return null;
}