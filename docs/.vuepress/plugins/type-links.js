const { typesMetadata, getLinkForKeyPath } = require('../utils/metadata');

module.exports = (options, context) => {
  return {
    name: 'titanium/type-links',

    clientDynamicModules() {
      const typeLinks = {};
      Object.keys(typesMetadata).forEach(name => typeLinks[name] = getLinkForKeyPath(name, '/').path);
      return {
        name: 'type-links.js',
        content: `export default ${JSON.stringify(typeLinks)}`
      }
    }
  }
}
