const path = require('path');

module.exports = (options, context) => {

  return {
    name: 'titanium/webpack-entry',

    chainWebpack (config, isServer) {
      if (isServer) {
        config
        .entry('app')
          .clear()
          .add(path.resolve(__dirname, '../app/serverEntry.js'));
      } else {
        config
        .entry('app')
          .clear()
          .add(path.resolve(__dirname, '../app/clientEntry.js'));
      }
    }
  }
}
