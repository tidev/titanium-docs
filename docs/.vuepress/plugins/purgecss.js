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
      `${sourceDir}/**/*.md`,
      `${sourceDir}/**/*.vue`,
      `${sourceDir}/.vuepress/**/*.vue`,
      `${sourceDir}/../website/pages/**/*.md`,
      `${sourceDir}/../website/pages/**/*.vue`,
      `node_modules/@vuepress/plugin-*/**/*.vue`,
      `node_modules/@vuepress/core/lib/**/*.vue`,
      `node_modules/vuepress-plugin-*/**/*.vue`,
      `node_modules/vuepress-theme-*/**/*.vue`
    ],
    defaultExtractor: content => {
      // Capture as liberally as possible, including things like `h-(screen-1.5)`
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

      // Capture classes within other delimiters like .block(class="w-1/2") in Pug
      const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

      return broadMatches.concat(innerMatches)
    }
  }))

  return plugin
}
