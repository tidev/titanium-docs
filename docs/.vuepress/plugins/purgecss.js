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

  /**
   * Ensure default resets and normalised classes are not removed by PurgeCSS
   */
  const whitelistPatterns = [
    /^(h\d|p$|ul|li$|div|ol|table|td$|th$|thead|tbody|main|input|button|form|md-|hljs)/
  ]
  const purgecss = require('@fullhuman/postcss-purgecss')
  siteConfig.postcss.plugins.push(purgecss({
    content: [
      `${sourceDir}/**/*.md`,
      `${sourceDir}/**/*.vue`,
      `${sourceDir}/../website/pages/**/*.md`,
      `${sourceDir}/../website/pages/**/*.vue`
    ],
    whitelistPatterns,
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
