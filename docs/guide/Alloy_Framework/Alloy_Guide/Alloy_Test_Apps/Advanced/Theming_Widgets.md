---
title: Theming Widgets
weight: '170'
---

# Theming Widgets

Demonstrates how to apply themes to widgets. Theme settings override default styles and assets defined within the widget itself.

::: tip 💡 App Folder Location
alloy/test/apps/**advanced/theming\_widgets**
:::

To create a widget them, inside your Alloy project's themes/ folder create a new folder named "widgets". With that folder, create a new folder whose name matches the widget ID, such as com.somecompany.widgetname. Within that folder, create assets/ and styles/ folders that contain assets and TSS files, as usual. The contents of these folder override the assets and styles declared by the original widget.

![theme_widgets](./theme_widgets.png)

For example, the sample application defines a widget named "starrating" whose and assets and styles are overridden by those found in the app/themes/widgets/assets and app/themes/widgets/assets folders, respectively. The sample also specifies a theme named "plusminus" that is specified as the global style by the application's config.json file. The global styles, theme styles, and widget styles are combined during compilation according to well-defined style priorities (see [Style Priorities](/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Alloy_Styles_and_Themes/#style-priorities)).

**App folder structure**

```
app
├──config.json
├──styles
│  ├──app.tss
│  └──index.tss
├──themes
│   └──plusminus
│       ├──styles
│       │  ├── app.tss
│       │  └── index.tss
│       └──widgets
│           └──starrating
│               ├──assets
│               │  ├──foo.png
│               │  ├──ios
│               │  │  └── star_half.png
│               │  ├──star.png
│               │  └──star_off.png
│               └──styles
│                   ├──ios
│                   │   └── star.tss
│                   └──star.tss
├── views
│   ├──index.xml
│   └──row.xml
└── widgets
    └──starrating
        ├──assets
        │  ├──ios
        │  │  └── star.png
        │  ├──star.png
        │  ├──star_half.png
        │  └──star_off.png
        ├──controllers
        │  ├──star.js
        │  └──widget.js
        ├──styles
        │  ├──star.tss
        │  └──widget.tss
        ├──views
        │  ├──star.xml
        │  └──widget.xml
        └──widget.json
```

::: tip 💡 Hint
Platform-specific assets and style selectors in the widget override non-platform-specific assets and styles in your theme. See [Style priorities](/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Alloy_Styles_and_Themes/#style-priorities) for details.
:::

## See also

* [Alloy Styles and Themes](/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Alloy_Styles_and_Themes/)

* [Style priorities](/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Alloy_Styles_and_Themes/#style-priorities)
