module.exports = {
  base: '/titanium-vuepress-docs/',
  title: 'Titanium Mobile',
  description: 'Native iOS-, Android- and Windows Apps with JavaScript',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/titanium-logo.png',
    // Top navigation bar
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API Reference', link: '/api/' }
    ],

    sidebar: {},

    // Repo settings
    docsDir: 'docs',
    repo: 'appcelerator/titanium_mobile',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub'
  },
  plugins: [
    require('./plugins/webpack-entry'),
    require('./plugins/markdown'),
    require('./plugins/version'),
    require('./plugins/metadata'),
    require('./plugins/type-links'),
    '@vuepress/back-to-top'
  ]
}