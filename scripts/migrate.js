const fs = require('fs-extra');
const path = require('path');
const semver = require('semver');
const { typesMetadata, getLinkForKeyPath } = require('../docs/.vuepress/utils/metadata.js');

const createdTypes = [];
const createdPseudoTypes = [];

const targetVersion = '8.0.0';

console.log(`Generating missing markdown files (Version: ${targetVersion})`);

for (let typeName in typesMetadata) {
  const metadata = typesMetadata[typeName];
  if (metadata.deprecated && metadata.deprecated.removed && semver.lte(metadata.deprecated.removed, targetVersion)) {
    continue;
  }
  let description = metadata.description || '';
  description = description.replace(/^(#{4,})/gm, (match, heading) => heading.substring(0, heading.length - 1));
  const typeNameParts = metadata.name.split('.');
  const breadcrumbLabel = typeNameParts[typeNameParts.length -1];
  const overview = description.length > 0 ? `\n\n## Overview\n\n${description.trim().replace(/^\s+|\s+$/g, '')}\n\n` : '\n\n'
  let examples = '';
  if (metadata.examples && metadata.examples.length > 0) {
    examples += `## Examples\n\n`;
    examples += metadata.examples.map(example => {
      return `### ${example.description}\n\n${example.code.trim().replace(/^\s+|\s+$/g, '')}`;
    }).join('\n\n');
    examples += '\n\n';
  }
  const apiDocsPath = path.join(__dirname, '..', 'docs', 'api');
  const basePath = metadata.type === 'pseudo' ? path.join(apiDocsPath, 'structs') : apiDocsPath;
  const destPath = path.join(basePath, metadata.name.toLowerCase().split('.').join('/') + '.md');
  const mdContent =
`# ${metadata.name}

<ProxySummary/>${overview}${examples}<ApiDocs/>
`;

  //if (!fs.existsSync(destPath)) {
    fs.ensureDirSync(path.dirname(destPath));
    fs.writeFileSync(destPath, mdContent);
    if (metadata.type !== 'pseudo') {
      createdTypes.push(metadata.name);
    } else {
      createdPseudoTypes.push(metadata.name);
    }
  //}
}

console.log(`Created the initial markdown files for ${createdTypes.length} actual types and ${createdPseudoTypes.length} pseudo types.`);
console.log(`Update the sidebar config if required.`);
createdTypes.sort((a, b) => {
  return a.localeCompare(b);
});
console.log(JSON.stringify(createdTypes.map(typeName => typeName.toLowerCase().replace(/\./g, '/')), null, 2));