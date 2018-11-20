module.exports = (options, context) => {
  return {
    name: 'titanium/dynamic-content',

    // @TODO: generate components for all metadata that contains markdown

    clientDynamicModules() {
      return {
        name: 'content-components.js',
        content: `export default {}`
      }
    }
  }
}
