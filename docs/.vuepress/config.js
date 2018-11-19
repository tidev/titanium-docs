module.exports = {
  base: '/titanium-vuepress-docs/',
  title: 'Titanium Mobile',
  description: 'Native iOS-, Android- and Windows Apps with JavaScript',
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
          title: 'Core API',
          collapsable: false,
          children: [
            'titanium',
            'titanium/blob',
            'titanium/buffer',
            'titanium/module',
            'titanium/proxy',
            'titanium/ui',
            'titanium/ui/view'
          ]
        },
        {
          title: 'Modules',
          collapsable: false,
          children: [
            '/'
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
    require('./plugins/metadata')
  ]
}