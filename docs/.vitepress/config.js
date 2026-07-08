import { defineConfig } from 'vitepress';
import { existsSync, readFileSync } from 'fs';
import { createRequire } from 'module';
import sidebar from './sidebar.mjs';

const __require = createRequire(import.meta.url);
let releaseNotesSidebar = [];
if (existsSync(new URL('./releasenotes-sidebar.mjs', import.meta.url))) {
  releaseNotesSidebar = __require('./releasenotes-sidebar.mjs').default;
}

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
          { text: 'Release Notes', link: '/guides/releasenotes/' },
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
      '/guides/': releaseNotesSidebar,
    },

    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          return md.renderAsync(src, env).then((html) => {
            const fm = env.frontmatter;
            if (!fm) return html;
            let extra = '';
            const used = new Set();
            const injectItem = (name, type) => {
              let aid = name.toLowerCase().replace(/\s+/g, '-');
              while (used.has(aid)) {
                aid += '-' + type;
              }
              used.add(aid);
              return aid;
            };
            if (fm.properties) {
              extra += '\n<h2 id="properties">Properties <a href="#properties">#</a></h2>\n';
              const sortedProps = [...fm.properties].sort((a, b) => a.name.localeCompare(b.name));
              for (const p of sortedProps) {
                const aid = injectItem(p.name, 'prop');
                extra += `<h3 id="${aid}">${p.name} <a href="#${aid}">#</a></h3>\n`;
                if (p.type) extra += `<p><strong>Type:</strong> <code>${p.type}</code></p>\n`;
                if (p.summary) extra += `<p>${p.summary}</p>\n`;
              }
            }
            if (fm.methods) {
              extra += '\n<h2 id="methods">Methods <a href="#methods">#</a></h2>\n';
              const sortedMethods = [...fm.methods].sort((a, b) => a.name.localeCompare(b.name));
              for (const m of sortedMethods) {
                const aid = injectItem(m.name, 'method');
                extra += `<h3 id="${aid}">${m.name} <a href="#${aid}">#</a></h3>\n`;
                if (m.summary) extra += `<p>${m.summary}</p>\n`;
              }
            }
            if (fm.events) {
              extra += '\n<h2 id="events">Events <a href="#events">#</a></h2>\n';
              const sortedEvents = [...fm.events].sort((a, b) => a.name.localeCompare(b.name));
              for (const e of sortedEvents) {
                const aid = injectItem(e.name, 'event');
                extra += `<h3 id="${aid}">${e.name} <a href="#${aid}">#</a></h3>\n`;
                if (e.summary) extra += `<p>${e.summary}</p>\n`;
              }
            }
            if (extra) {
              return html + '\n' + extra + '\n';
            }
            return html;
          });
        },
        miniSearch: {
          _splitIntoSections(file, html) {
            const headingRegex = /<h(\d*).*?>(.*?<a.*? href="#.*?".*?>.*?<\/a>)<\/h\1>/gi;
            const headingContentRegex = /(.*)<a.*? href="#(.*?)".*?>.*?<\/a>/i;
            const result = html.split(headingRegex);
            result.shift();
            const seen = new Set();
            const sections = [];
            let parentTitles = [];
            for (let i = 0; i < result.length; i += 3) {
              const level = parseInt(result[i]) - 1;
              const heading = result[i + 1];
              const headingResult = headingContentRegex.exec(heading);
              const title = headingResult?.[1] ? headingResult[1].replace(/<[^>]*>/g, '').trim() : '';
              const anchor = headingResult?.[2] ?? '';
              const content = result[i + 2];
              if (!title || !content) continue;
              if (seen.has(anchor)) continue;
              seen.add(anchor);
              let titles = parentTitles.slice(0, level);
              titles[level] = title;
              titles = titles.filter(Boolean);
              sections.push({ anchor, titles, text: content.replace(/<[^>]*>/g, '') });
              if (level === 0) {
                parentTitles = [title];
              } else {
                parentTitles[level] = title;
              }
            }
            return sections;
          }
        }
      }
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
