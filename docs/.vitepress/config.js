import { defineConfig } from 'vitepress';
import sidebar from './sidebar.mjs';

export default defineConfig({
  title: 'Titanium SDK',
  description: 'Titanium SDK API Reference',
  base: process.env.BASE || '/',
  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    html: true,
  },

  ignoreDeadLinks: true,

  themeConfig: {
    outline: [2, 3],

    nav: [
      { text: 'Home', link: '/' },
      { text: 'API Reference', link: '/api/titanium/' },
      {
        text: 'Guides',
        items: [
          { text: 'Compatibility Matrix', link: '/compatibility-matrix' },
          { text: 'FAQ', link: '/faq' },
        ]
      },
      { text: 'Download', link: 'https://downloads.titaniumsdk.com/' },
      { text: 'Native Modules', link: 'https://modules.titaniumsdk.com/' },
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
                link: 'https://github.com/tidev/titanium-sdk/discussions'
              },
              {
                text: 'Reddit',
                link: 'https://www.reddit.com/r/TitaniumSDK/'
              },
              {
                text: 'Tutorials: From zero to app',
                link: 'https://fromzerotoapp.com'
              }
            ]
          },
          {
            text: 'News',
            items: [
              {
                text: 'Blog',
                link: 'https://tidev.io/blog'
              },
              {
                text: 'Bluesky - @titaniumsdk.com',
                link: 'https://bsky.app/profile/titaniumsdk.com'
              },
              {
                text: 'X - @TitaniumSDK',
                link: 'https://x.com/TitaniumSDK'
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
                text: 'X - @tidevio',
                link: 'https://x.com/tidevio'
              },
              {
                text: 'GitHub Sponsors',
                link: 'https://github.com/sponsors/tidev/'
              },
              {
                text: 'Liberapay Donations',
                link: 'https://en.liberapay.com/tidev'
              }
            ]
          }
        ]
      }
    ],

    sidebar: {
      '/api/': sidebar,
    },

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tidev/titanium-sdk' },
    ],

    footer: {
      message: 'Titanium SDK Documentation',
      copyright: 'Copyright © TiDev, Inc.',
    },
  },
});
