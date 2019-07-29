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
                link: 'https://ti-slack.slack.com'
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

    sidebar: getSidebar(),

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
}

function getSidebar() {
  return {
    '/guide/': [
      '',
      'getting-started',
      'first-app'
    ],
    '/api/': [
      {
        title: 'User Interface',
        children: [
          'titanium/ui',
          'titanium/ui/2dmatrix',
          'titanium/ui/3dmatrix',
          'titanium/ui/activityindicator',
          'titanium/ui/activityindicatorstyle',
          'titanium/ui/alertdialog',
          'titanium/ui/animation',
          'titanium/ui/attributedstring',
          'titanium/ui/button',
          'titanium/ui/buttonbar',
          'titanium/ui/clipboard',
          'titanium/ui/coverflowview',
          'titanium/ui/dashboarditem',
          'titanium/ui/dashboardview',
          'titanium/ui/emaildialog',
          'titanium/ui/imageview',
          'titanium/ui/label',
          'titanium/ui/listitem',
          'titanium/ui/listsection',
          'titanium/ui/listview',
          'titanium/ui/maskedimage',
          'titanium/ui/notification',
          'titanium/ui/optiondialog',
          'titanium/ui/picker',
          'titanium/ui/pickercolumn',
          'titanium/ui/pickerrow',
          'titanium/ui/progressbar',
          'titanium/ui/refreshcontrol',
          'titanium/ui/scrollableview',
          'titanium/ui/scrollview',
          'titanium/ui/searchbar',
          'titanium/ui/shortcutitem',
          'titanium/ui/slider',
          'titanium/ui/switch',
          'titanium/ui/tab',
          'titanium/ui/tabbedbar',
          'titanium/ui/tabgroup',
          'titanium/ui/tableview',
          'titanium/ui/tableviewrow',
          'titanium/ui/tableviewsection',
          'titanium/ui/textarea',
          'titanium/ui/textfield',
          'titanium/ui/toolbar',
          'titanium/ui/view',
          'titanium/ui/webview',
          'titanium/ui/window',
        ]
      },
      {
        title: 'User Interface (Android)',
        children: [
          'titanium/ui/android',
          'titanium/ui/android/cardview',
          'titanium/ui/android/drawerlayout',
          'titanium/ui/android/progressindicator',
          'titanium/ui/android/searchview',
        ]
      },
      {
        title: 'User Interface (iOS)',
        children: [
          'titanium/ui/ios',
          'titanium/ui/ios/adview',
          'titanium/ui/ios/alertdialogstyle',
          'titanium/ui/ios/anchorattachmentbehavior',
          'titanium/ui/ios/animationstyle',
          'titanium/ui/ios/animator',
          'titanium/ui/ios/applicationshortcuts',
          'titanium/ui/ios/blurview',
          'titanium/ui/ios/collisionbehavior',
          'titanium/ui/ios/coverflowview',
          'titanium/ui/ios/documentviewer',
          'titanium/ui/ios/dynamicitembehavior',
          'titanium/ui/ios/feedbackgenerator',
          'titanium/ui/ios/gravitybehavior',
          'titanium/ui/ios/listviewcellselectionstyle',
          'titanium/ui/ios/listviewscrollposition',
          'titanium/ui/ios/listviewstyle',
          'titanium/ui/ios/livephoto',
          'titanium/ui/ios/livephotoview',
          'titanium/ui/ios/menupopup',
          'titanium/ui/ios/navigationwindow',
          'titanium/ui/ios/previewaction',
          'titanium/ui/ios/previewactiongroup',
          'titanium/ui/ios/previewcontext',
          'titanium/ui/ios/progressbarstyle',
          'titanium/ui/ios/pushbehavior',
          'titanium/ui/ios/rowanimationstyle',
          'titanium/ui/ios/scrollindicatorstyle',
          'titanium/ui/ios/snapbehavior',
          'titanium/ui/ios/splitwindow',
          'titanium/ui/ios/statusbar',
          'titanium/ui/ios/stepper',
          'titanium/ui/ios/systembutton',
          'titanium/ui/ios/systembuttonstyle',
          'titanium/ui/ios/systemicon',
          'titanium/ui/ios/tabbedbar',
          'titanium/ui/ios/tableviewcellselectionstyle',
          'titanium/ui/ios/tableviewscrollposition',
          'titanium/ui/ios/tableviewstyle',
          'titanium/ui/ios/toolbar',
          'titanium/ui/ios/viewattachmentbehavior',
          'titanium/ui/ipad',
          'titanium/ui/ipad/popover',
        ]
      },
      {
        title: 'User Interface (Windows)',
        children: [
          'titanium/ui/windows',
          'titanium/ui/windows/appbarbutton',
          'titanium/ui/windows/appbarseparator',
          'titanium/ui/windows/appbartogglebutton',
          'titanium/ui/windows/commandbar',
          'titanium/ui/windows/listviewscrollposition',
          'titanium/ui/windows/style',
          'titanium/ui/windows/systemicon',
        ]
      },
      {
        title: 'App & Platform',
        children: [
          'titanium/app',
          'titanium/app/android',
          'titanium/app/android/r',
          'titanium/app/ios',
          'titanium/app/ios/backgroundservice',
          'titanium/app/ios/localnotification',
          'titanium/app/ios/searchableindex',
          'titanium/app/ios/searchableitem',
          'titanium/app/ios/searchableitemattributeset',
          'titanium/app/ios/searchquery',
          'titanium/app/ios/useractivity',
          'titanium/app/ios/userdefaults',
          'titanium/app/ios/usernotificationaction',
          'titanium/app/ios/usernotificationcategory',
          'titanium/app/ios/usernotificationcenter',
          'titanium/app/properties',
          'titanium/app/windows',
          'titanium/app/windows/backgroundservice',
          'titanium/app/windows/backgroundservicetask',
          'titanium/platform',
          'titanium/platform/android',
          'titanium/platform/displaycaps',
        ]
      },
      {
        title: 'Calendar',
        children: [
          'titanium/calendar',
          'titanium/calendar/alert',
          'titanium/calendar/attendee',
          'titanium/calendar/calendar',
          'titanium/calendar/event',
          'titanium/calendar/recurrencerule',
          'titanium/calendar/reminder',
        ]
      },
      {
        title: 'Contacts',
        children: [
          'titanium/contacts',
          'titanium/contacts/group',
          'titanium/contacts/person',
        ]
      },
      {
        title: 'I/O',
        children: [
          'titanium/codec',
          'titanium/blob',
          'titanium/blobstream',
          'titanium/buffer',
          'titanium/bufferstream',
          'titanium/filesystem',
          'titanium/filesystem/file',
          'titanium/filesystem/filestream',
          'titanium/iostream',
          'titanium/stream',
        ]
      },
      {
        title: 'Media',
        children: [
          'titanium/media',
          'titanium/media/android',
          'titanium/media/audioplayer',
          'titanium/media/audiorecorder',
          'titanium/media/item',
          'titanium/media/musicplayer',
          'titanium/media/sound',
          'titanium/media/systemalert',
          'titanium/media/videoplayer',
        ]
      },
      {
        title: 'Network',
        children: [
          'titanium/network',
          'titanium/network/bonjourbrowser',
          'titanium/network/bonjourservice',
          'titanium/network/cookie',
          'titanium/network/httpclient',
          'titanium/network/socket',
          'titanium/network/socket/tcp',
          'titanium/network/socket/udp',
          'titanium/network/tcpsocket',
        ]
      },
      {
        title: 'Sensors',
        children: [
          'titanium/accelerometer',
          'titanium/geolocation',
          'titanium/geolocation/android',
          'titanium/geolocation/android/locationprovider',
          'titanium/geolocation/android/locationrule',
        ]
      },
      {
        title: 'SQLite Database',
        children: [
          'titanium/database',
          'titanium/database/db',
          'titanium/database/resultset',
        ]
      },
      {
        title: 'XML',
        children: [
          'titanium/xml',
          'titanium/xml/attr',
          'titanium/xml/cdatasection',
          'titanium/xml/characterdata',
          'titanium/xml/comment',
          'titanium/xml/document',
          'titanium/xml/documentfragment',
          'titanium/xml/documenttype',
          'titanium/xml/domimplementation',
          'titanium/xml/element',
          'titanium/xml/entity',
          'titanium/xml/entityreference',
          'titanium/xml/namednodemap',
          'titanium/xml/node',
          'titanium/xml/nodelist',
          'titanium/xml/notation',
          'titanium/xml/processinginstruction',
          'titanium/xml/text',
        ]
      },
      {
        title: 'Android',
        children: [
          'titanium/android',
          'titanium/android/actionbar',
          'titanium/android/activity',
          'titanium/android/bigpicturestyle',
          'titanium/android/bigtextstyle',
          'titanium/android/broadcastreceiver',
          'titanium/android/intent',
          'titanium/android/menu',
          'titanium/android/menuitem',
          'titanium/android/notification',
          'titanium/android/notificationchannel',
          'titanium/android/notificationmanager',
          'titanium/android/pendingintent',
          'titanium/android/quicksettingsservice',
          'titanium/android/r',
          'titanium/android/remoteviews',
          'titanium/android/service',
        ]
      },
      {
        title: 'Miscellaneous',
        children: [
          'titanium/analytics',
          'titanium/gesture',
          'titanium/locale',
          'titanium/utils',
          'titanium/watchsession'
        ]
      },
      {
        title: 'Base',
        children: [
          'titanium',
          'titanium/api',
          'titanium/proxy',
          'titanium/module',
        ]
      },
      {
        title: 'Other',
        children: [
          'global',
          'global/console',
          'global/json',
          'global/string',
        ]
      },
    ]
  }
}
