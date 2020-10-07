---
title: Titanium SDK 8.1.1.GA - 29 August 2019
weight: '70'
---

# Titanium SDK 8.1.1.GA - 29 August 2019

## About this release

Titanium SDK 8.1.1 is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release is no longer supported. End of support for this version will be 2019-02-29 or until the next patch release. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

::: danger ❗️ Warning
With the release of Titanium SDK 9.0.0, we will no longer support Node.js 8.X. Node 10.13.0 will be the new minimum supported version with SDK 9.0.0.
:::

## Community credits

* Hans Knöchel - [TIMOB-27104](https://jira.appcelerator.org/browse/TIMOB-27104)

* Ardy Wongso - [TIMOB-27256](https://jira.appcelerator.org/browse/TIMOB-27256)

* Francisco Antonio Duran Ramirez - [TIMOB-27261](https://jira.appcelerator.org/browse/TIMOB-27261)

* Yahya Uddin - [TIMOB-27266](https://jira.appcelerator.org/browse/TIMOB-27266)

## Fixed issues

### Android

* [TIMOB-27104](https://jira.appcelerator.org/browse/TIMOB-27104) - Android: ProgressIndicator logs "WindowLeaked" exception when hiding dialog and closing window at same time as of 8.0.2

* [TIMOB-27177](https://jira.appcelerator.org/browse/TIMOB-27177) - Android: Closing root window from child causes app exit issues as of 8.0.1

* [TIMOB-27256](https://jira.appcelerator.org/browse/TIMOB-27256) - Android: AlertDialog cannot be re-shown in a different window as of 8.0.1

* [TIMOB-27271](https://jira.appcelerator.org/browse/TIMOB-27271) \- Android: Resuming with intent using "FLAG\_ACTIVITY\_MULTIPLE\_TASK" can hang the app

* [TIMOB-27304](https://jira.appcelerator.org/browse/TIMOB-27304) \- Android: Setting <uses-feature/> required "true" in "tiapp.xml" should override "false" setting in libraries

* [TIMOB-27308](https://jira.appcelerator.org/browse/TIMOB-27308) \- Android: Determinant "ProgressIndicator" ignores "value" property before shown

* [TIMOB-27309](https://jira.appcelerator.org/browse/TIMOB-27309) \- Android: Cannot re-show "ProgressIndicator" dialog if auto-hidden by closed window

* [TIMOB-27328](https://jira.appcelerator.org/browse/TIMOB-27328) \- Android: Splash screen open animation sometimes stutters on cold start

### iOS

* [TIMOB-27097](https://jira.appcelerator.org/browse/TIMOB-27097) - iOS: Incremental builds fail to install app when using dynamic frameworks

* [TIMOB-27253](https://jira.appcelerator.org/browse/TIMOB-27253) - iOS Titanium APIs are able to be used for remote webviews

* [TIMOB-27261](https://jira.appcelerator.org/browse/TIMOB-27261) - iOS Unsupported Architecture x86\_64, i386

* [TIMOB-27279](https://jira.appcelerator.org/browse/TIMOB-27279) - iOS: App rejected when using Swift module

* [TIMOB-27342](https://jira.appcelerator.org/browse/TIMOB-27342) - iOS regression: Console.warn/error don't log all parameters

### Windows

* [TIMOB-27266](https://jira.appcelerator.org/browse/TIMOB-27266) - Titanium "Failed to encrypt JavaScript files" error on >=8.0.1.GA on Windows when using 32 bit java

### Multiple platforms

* [TIMOB-27352](https://jira.appcelerator.org/browse/TIMOB-27352) - Analytics: Improve event batching

## Improvements

* [TIMOB-27249](https://jira.appcelerator.org/browse/TIMOB-27249) - Android: OptionDialog without radio buttons should not auto-set "selectedIndex" property after clicking option

    * Added feature that prevents a dialog to be displayed with the wrong type of buttons if reused

## API changes

There were no API changes in this release.
