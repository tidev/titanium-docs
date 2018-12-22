const { metadataService, getLinkForKeyPath } = require('../utils/metadata');

module.exports = (options, context) => {
  return {
    name: 'titanium/type-links',

    clientDynamicModules() {
      const typeLinks = {};
      for (const version of metadataService.versions) {
        Object.keys(metadataService.metadata[version]).forEach(name => {
          if (!typeLinks[name]) {
            typeLinks[name] = getLinkForKeyPath(name, '/').path;
          }
        });
      }
      return {
        name: 'type-links.js',
        content: `export default ${JSON.stringify(typeLinks)}`
      }
    }
  }
}
