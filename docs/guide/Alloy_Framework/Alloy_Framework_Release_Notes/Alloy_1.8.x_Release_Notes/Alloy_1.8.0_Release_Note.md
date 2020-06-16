---
title: Alloy 1.8.0 - 15 March 2015
weight: '70'
---

# Alloy 1.8.0 - 15 March 2015

Alloy 1.8.0 is a minor release that includes new, improvements, and bug fixes.

As of this release, Alloy 1.7.x will not be supported six months from 1.8.0's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Improvements

* [ALOY-1365](https://jira.appcelerator.org/browse/ALOY-1365) - Improve how Alloy works with i18n and platform folders

    * Alloy has improved i18n and platform-specific resources support. You can now add `i18n` and `platform` directories in your `/app` directory and in your active theme's directory. Additionally, widgets may also have an `i18n` directory.

    * When you build your app, Alloy will delete the `/i18n` and `/platform/<platform>` directories in the project's root directory. Next it will copy and merge the `i18n` and `platform/<platform>` directories from the Alloy app's directory into the project's root directory. For platform-specific files, it starts by copying all files from `/app/platform/<platform>`, then overrides with files from `/app/themes/<theme name>/platform/<platform>`. i18n files are copied from the `/app/i18n` and `/app/themes/<theme name>/i18n` directories followed by the each widget's `/app/widgets/<widget name>/i18n` directory.

    * It's important to reiterate that the `/i18n`, `/platform/<platform>`, and `/Resources` directories are regenerated each time you build. Any manual change to files in these directories will be lost during the next build.

    * When creating a new Alloy project, it will automatically move existing `/i18n` and `/platform` directories into the `/app` directory. Existing Alloy apps that already have `/i18n` or `/platform` directories in the project's root directory will fail to build until these directories into the `/app` directory.

* [ALOY-86](https://jira.appcelerator.org/browse/ALOY-86) - Add support for distributing widgets via NPM

## Fixed Issues

* [ALOY-1361](https://jira.appcelerator.org/browse/ALOY-1361) - Destroy calling off on variables that may be undefined

* [ALOY-1369](https://jira.appcelerator.org/browse/ALOY-1369) - Complex data binding for collection doesn't work with transform
