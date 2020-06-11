module.exports = {
  base: '/titanium-docs/',
  title: 'Titanium Mobile',
  description: 'Native iOS-, Android- and Windows Apps with JavaScript',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  theme: 'titanium',
  themeConfig: {
    logo: '/titanium-logo.png',
    footerCopyright: 'Copyright © 2019-present Axway Appcelerator',
    footerLogo: '/images/axway-appcelerator-logo.png',
    footerSitemap: {
      'Docs': [
        { text: 'Alloy', link: 'https://docs.appcelerator.com/' }
      ],
      'Other': [
        { text: 'Some link', link: 'https://docs.appcelerator.com/' }
      ],
      'Social': [
        { text: 'Twitter', link: 'https://twitter.com/appcelerator' }
      ]
    },
    // Top navigation bar
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API Reference', link: '/api/' },
      {
        text: 'Ecosystem',
        items: [
          {
            text: 'Help',
            items: [
              {
                text: 'Slack',
                link: 'https://tislack.org'
              },
              {
                text: 'Contribution Guide',
                link: '/contribute.md'
              },
              {
                text: 'TDoc Specificiation',
                link: '/tdoc-spec.md'
              }
            ]
          },
          {
            text: 'Core',
            items: [
              {
                text: 'SDK',
                link: '/'
              },
              {
                text: 'Hyperloop',
                link: 'https://docs.appcelerator.com/platform/latest/#!/guide/Hyperloop'
              }
            ]
          },
          {
            text: 'Frameworks',
            items: [
              {
                text: 'Alloy',
                link: 'https://docs.appcelerator.com/platform/latest/#!/guide/Alloy_Framework'
              },
              {
                text: 'Vue.js',
                link: 'https://github.com/appcelerator/titanium-vue'
              },
              {
                text: 'Angular',
                link: 'https://docs.appcelerator.com/platform/latest/#!/guide/Titanium_and_Angular'
              }
            ]
          },
          {
            text: 'News',
            items: [
              {
                text: 'Blog',
                link: 'https://appcelerator.com/blog'
              },
              {
                text: 'Twitter',
                link: 'https://twitter.com/appcelerator'
              }
            ]
          }
        ]
      }
    ],

    sidebar: {
      '/guide/': require('./guide.json'),
      '/api/': require('./api.json')
    },

    // Repo settings
    docsDir: 'docs',
    repo: 'appcelerator/titanium_mobile',
    docsRepo: 'appcelerator/titanium-vuepress-docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub'
  },
  plugins: [
    'versioning',
    'apidocs',
    '@vuepress/back-to-top'
  ]
};
