---
title: Alloy 1.12.0 - 20 April 2018
weight: '30'
---

# Alloy 1.12.0 - 20 April 2018

Alloy 1.12.0 is a minor release that includes several improvements and bug fixes.

As of this release, Alloy 1.10.x will not be supported six months from 1.12.0's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](#undefined) documents for details.

## Improvements

* [ALOY-1603](https://jira.appcelerator.org/browse/ALOY-1603) : Update momentjs to 2.21.0

    * Updated Moment.js to 2.21.0

    * View the Moment.js release notes [here](https://github.com/moment/moment/blob/d0a45f0390c108cc18d71a3d3f38d040392483c5/CHANGELOG.md), previous version was 2.16.0

## Fixed issues

* [ALOY-1606](https://jira.appcelerator.org/browse/ALOY-1606): Android: Debugger not hitting breakpoints on Windows

* [ALOY-1602](https://jira.appcelerator.org/browse/ALOY-1602): Avoid some global variables to be only available in parent controller

* [ALOY-1607](https://jira.appcelerator.org/browse/ALOY-1607): Fix BaseController.removeListener

* [ALOY-1609](https://jira.appcelerator.org/browse/ALOY-1609): Add plugins/ti.alloy to gitignore

* [ALOY-1599](https://jira.appcelerator.org/browse/ALOY-1599): Model Data binding problem with the first upper case in the model src

* [ALOY-1595](https://jira.appcelerator.org/browse/ALOY-1595): alloy compile broken on node 9.3.0

* [PR-878](https://github.com/tidev/alloy/pull/878): Fix links in README
