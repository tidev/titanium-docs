
const path = require('path');

const guideSidebar = require('./guide');
const apiSidebar = {
  '/api/': require('./api')
};
const sidebar = Object.assign({}, guideSidebar, apiSidebar);

const docSections = [
  { text: 'Titanium SDK', link: '/guide/Titanium_SDK/' },
  { text: 'Alloy', link: '/guide/Alloy_Framework/' },
  { text: 'Editor / IDE', link: '/guide/Editor_IDE/' }
];

module.exports = {
  base: '/',
  title: 'Titanium SDK',
  description: 'Native iOS and Android Apps with JavaScript',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' } ]
  ],
  theme: 'titanium',
  themeConfig: {
    logo: '/images/icons/icon-titanium-red.svg',
    footerCopyright: `Copyright © ${new Date().getFullYear()} TiDev`,
    footerLogo: '/images/tidev-logo-inverted.png',
    footerLogoLink: 'https://tidev.io',
    footerSitemap: {
      'Docs': docSections,
      'Social': [
        // { text: 'Blog', link: 'https://appcelerator.com/blog' },
        { text: 'Slack', link: 'https://tidev.slack.com' },
        { text: 'Twitter', link: 'https://twitter.com/titaniumsdk' }
      ]
    },
    // Top navigation bar
    nav: [
      {
        text: 'Guide',
        items: docSections
      },
      { text: 'API Reference', link: '/api/' },
      {
        text: 'Ecosystem',
        items: [
          {
            text: 'Help',
            items: [
              {
                text: 'Slack',
                link: 'https://tidev.slack.com'
              },
              {
                text: 'GitHub Discussions',
                link: 'https://github.com/tidev/titanium_mobile/discussions'
              }
            ]
          },
          {
            text: 'Contribute',
            items: [
              {
                text: 'Contribution Guide',
                link: '/contribute.md'
              },
              {
                text: 'TDoc Specificiation',
                link: '/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Specs/TDoc_Specification'
              }
            ]
          },
          {
            text: 'Frameworks',
            items: [
              {
                text: 'Alloy',
                link: '/guide/Alloy_Framework/'
              },
              {
                text: 'Vue.js',
                link: 'https://github.com/tidev/titanium-vue'
              },
              {
                text: 'Angular',
                link: '/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_and_Angular/'
              }
            ]
          },
          {
            text: 'News',
            items: [
              // {
              //   text: 'Blog',
              //   link: 'https://appcelerator.com/blog'
              // },
              {
                text: 'Titanium SDK Twitter',
                link: 'https://twitter.com/titaniumsdk'
              }
            ]
          },
          {
            text: 'TiDev',
            items: [
              {
                text: 'Foundation',
                link: 'https://tidev.io'
              },
              {
                text: 'TiDev Twitter',
                link: 'https://twitter.com/tidevio'
              },
              {
                text: 'Donate',
                link: 'https://en.liberapay.com/tidev'
              }
            ]
          }
        ]
      }
    ],

    sidebar,
    sidebarDepth: 5,

    // Repo settings
    docsDir: 'docs',
    repo: 'tidev/titanium_mobile',
    docsRepo: 'tidev/titanium-docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub'
  },
  plugins: [
    'versioning',
    'apidocs',
    '@vuepress/back-to-top',
    ['@silvanite/tailwind', {
      purgecss: { enabled: false }
    }],
    '@titanium-sdk/fontawesome',
    require('./plugins/guides-content-sidebar'), // Show right-hand sidebar for in-page headers in guides
    require('./plugins/purgecss'),
    process.env.NODE_ENV === 'production' && ['@vuepress/plugin-google-analytics', { ga: 'G-455PF3Q982' }]
  ],
  chainWebpack(config) {
    config.resolve.alias.set('@components', path.resolve(__dirname, 'local-components'));
  }
}
