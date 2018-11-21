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
      { text: 'API', link: '/api/' }
    ],

    // Left sidebar
    sidebar: {
      '/guide/': [
        {
          title: 'Titanium Guides',
          collapsable: false,
          children: [
            '',
            'getting-started',
            'first-app'
          ]
        }
      ],
      '/api/': [
        {
          title: 'Base',
          children: [
            'titanium',
            'titanium/module',
            'titanium/proxy'
          ]
        },
        {
          title: 'Other',
          collapsable: false,
          children: [
            'global'
          ]
        },
      ]
    },

    // Repo settings
    docsDir: 'docs',
    repo: 'appcelerator/titanium_mobile',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub'
  },
  plugins: [
    require('./plugins/webpack-entry'),
    require('./plugins/dynamic-content'),
    require('./plugins/markdown'),
    require('./plugins/metadata'),
    '@vuepress/back-to-top'
  ]
}