module.exports = {
  extend: '@vuepress/theme-default',
  plugins: [
    ['@vuepress/active-header-links', false], // Slowing things down on large pages
    '@vuepress/search'
  ]
}