/**
 * Manually configure purgecss options since the options added by the
 * Tailwind CSS plugin don't work in our setup by default.
 */

module.exports = (options, context) => {
  const plugin = { name: 'purgecss' }
  const { isProd, siteConfig, sourceDir } = context

  if (!isProd) {
    return plugin
  }

  const purgecss = require('@fullhuman/postcss-purgecss')
  siteConfig.postcss.plugins.push(purgecss({
    content: [
      // Retain any css classes from any vue component used
      `${sourceDir}/.vuepress/components/*.vue`,
      `${sourceDir}/.vuepress/local-components/**/*.vue`,
      `${sourceDir}/../website/pages/**/*.vue`,
      `node_modules/@vuepress/plugin-*/**/*.vue`,
      `node_modules/@vuepress/core/lib/**/*.vue`,
      `node_modules/vuepress-plugin-*/**/*.vue`,
      `node_modules/vuepress-theme-*/**/*.vue`,
      // Retain all styles from the theme
      `node_modules/vuepress-theme-titanium/styles/*.styl`,
      // and local override(s)
      `${sourceDir}/.vuepress/styles/*.styl`
    ],
    extractors: [
      {
        extractor: content => {
          const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, "");
          return (
            contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
          );
        },
        extensions: [ 'vue' ],
      },
    ],
    defaultExtractor: content => {
      // Capture as liberally as possible, including things like `h-(screen-1.5)`
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

      // Capture classes within other delimiters like .block(class="w-1/2") in Pug
      const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

      return broadMatches.concat(innerMatches)
    },
    safelist: [
      /-(leave|enter|appear)(|-(to|from|active))$/,
      /^(?!(|.*?:)cursor-move).+-move$/,
      /^router-link(|-exact)-active$/,
      /data-v-.*/,
    ],
    rejected: true
  }))

  return plugin
}
