const fs = require('fs-extra');
const path = require('path');
const semver = require('semver');
const glob = require('glob');
const { metadataService } = require('vuepress-plugin-apidocs/lib/metadata/service.js');

const targetVersion = '8.1.0'; // TODO: Allow passing in as an argument

const sourceDir = path.resolve(__dirname, '..', 'docs');
const apiDocsPath = path.join(sourceDir, 'api');

/**
 * 
 * @param {string[]} apiDocDirs 
 */
async function main(apiDocDirs) {
  await generateMarkdown(targetVersion);
  return Promise.all(
    apiDocDirs.map(dir => copyAPIDocImages(dir))
  );
}

/**
 * Copy images from inside apidoc folder and try to retain folder structure
 * NOTE: This will likely fall apart if the folder sturcture doesn't match the type namespace
 * i.e. for modules!
 * @param {string} apiDocInputDir path to apidoc/ dir of sdk or module
 */
async function copyAPIDocImages(apiDocInputDir) {
  const dir =  path.resolve(process.cwd(), apiDocInputDir);
  const imagePaths = glob.sync(`**/*.{png,gif,jpg}`, { cwd: dir });
  return Promise.all(
    imagePaths.map(async imgPath => fs.copy(path.join(dir, imgPath), path.join(apiDocsPath, imgPath.toLowerCase())))
  );
}

/**
 * Generates markdown files for API types that have not been removed by the target version - only if they didn't already exist
 * @param {string} targetVersion i.e. '8.1.0', or '9.0.2'
 */
async function generateMarkdown(targetVersion) {
  const createdTypes = [];
  const createdPseudoTypes = [];

  metadataService.loadMetadata({}, { sourceDir }, []);
  
  console.log(`Generating missing markdown files (Version: ${targetVersion})`);
  
  // Run them all async
  const typeGenerations = [];
  for (let typeName in metadataService.metadata.next) {
    const metadata = metadataService.metadata.next[typeName];
    typeGenerations.push((async () => {
      if (await generateMarkDownForType(metadata, targetVersion)) {
        if (metadata.type !== 'pseudo') {
          createdTypes.push(metadata.name);
        } else {
          createdPseudoTypes.push(metadata.name);
        }
      }
    })());
  }
  await Promise.all(typeGenerations);
  
  console.log(`Created the initial markdown files for ${createdTypes.length} actual types and ${createdPseudoTypes.length} pseudo types.`);
  console.log(`Update the sidebar config if required.`);
  createdTypes.sort((a, b) => a.localeCompare(b));
  console.log(JSON.stringify(createdTypes.map(typeName => typeName.toLowerCase().replace(/\./g, '/')), null, 2));
}

/**
 * Returns whether we generated the markdown file or not
 * @param {object} metadata
 * @returns {boolean} true if new markdown file was created. false otherwise
 */
async function generateMarkDownForType(metadata, targetVersion) {
  // has it been removed before our target version?
  if (metadata.deprecated && metadata.deprecated.removed && semver.lte(metadata.deprecated.removed, targetVersion)) {
    return false;
  }

  const basePath = metadata.type === 'pseudo' ? path.join(apiDocsPath, 'structs') : apiDocsPath;
  const destPath = path.join(basePath, metadata.name.toLowerCase().split('.').join('/') + '.md');
  if (await fs.exists(destPath)) {
    return false;
  }

  let description = metadata.description || '';
  description = description.replace(/^(#{4,})/gm, (match, heading) => heading.substring(0, heading.length - 1));
  const overview = description.length > 0 ? `\n\n## Overview\n\n${description.trim().replace(/^\s+|\s+$/g, '')}\n\n` : '\n\n'
  let examples = '';
  if (metadata.examples && metadata.examples.length > 0) {
    examples += `## Examples\n\n`;
    examples += metadata.examples.map(example => {
      return `### ${example.description}\n\n${example.code.trim().replace(/^\s+|\s+$/g, '')}`;
    }).join('\n\n');
    examples += '\n\n';
  }

  const mdContent =
`# ${metadata.name}

<TypeHeader/>${overview}${examples}<ApiDocs/>
`;

  await fs.ensureDir(path.dirname(destPath));
  await fs.writeFile(destPath, mdContent);
  return true;
}

main(process.argv.slice(2))
  .then(() => process.exit(0))
  .catch(err => {
	  console.error(err);
	  process.exit(1);
});