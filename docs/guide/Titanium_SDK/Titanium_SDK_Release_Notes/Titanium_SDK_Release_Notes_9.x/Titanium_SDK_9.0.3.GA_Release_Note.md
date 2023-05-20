---
title: Titanium SDK 9.0.3.GA - 10 June 2020
weight: '110'
---

# Titanium SDK 9.0.3.GA - 10 June 2020

## About this release

Titanium SDK 9.0.3 is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release (9.0.2) is no longer supported. End of support for this version will be 2020-12-10 or until the next patch release. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_deprecation_policy.html) and [Nominal Lifetimes](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_product_lifecycle.html#AxwayAppceleratorProductLifecycle-NominalLifetimes)documents for details.

::: danger ❗️ Warning
With the release of Titanium SDK 9.0.0, we will no longer support Node.js 8.X. Node 10.13.0 is the new minimum supported version.
:::
::: danger ❗️ Warning
Deprecation Notice: The next major release of the Titanium CLI, version 6.0.0, will no longer support plugins and hooks for commands other than "appc ti clean", "ti clean", "appc run", and "ti build". Titanium CLI v6 will have a new plugin system with a new hook system and it will be incompatible with Titanium CLI v5 plugins and hooks. Please refer to [TIMOB-27233](https://jira-archive.titaniumsdk.com/TIMOB-27233) and [TIMOB-27255](https://jira-archive.titaniumsdk.com/TIMOB-27255) for more information.
:::
::: danger ❗️ Warning
With the release of Titanium SDK 9.0.0, Windows platform will no longer be supported and has been removed from distribution in the SDK. Customers on Pro and Enterprise plans may continue to request critical fixes on SDK 8.x releases until August 18, 2020.
:::

## Bug Fixes

### Android platform

* [TIMOB-27573](https://jira-archive.titaniumsdk.com/TIMOB-27573) - Hiding/Showing progress indicator back-to-back puts it in a bad state as of 8.1.1 ([4e4b509](https://github.com/tidev/titanium-sdk/commit/4e4b5094a2d3bc2cabdf46798543fb4b291fa5ed))

* [TIMOB-27776](https://jira-archive.titaniumsdk.com/TIMOB-27776) - NDK version 21 outputs "Bad file descriptor"

* [TIMOB-27795](https://jira-archive.titaniumsdk.com/TIMOB-27795) - WebView crashes when given local HTML URL with parameters as of 8.1.0 ([5038295](https://github.com/tidev/titanium-sdk/commit/50382954eacaf5f7a30f2915a3cd1f7f549cef55))

* [TIMOB-27830](https://jira-archive.titaniumsdk.com/TIMOB-27830) - TabGroup.titleColor has no effect ([#11741](https://github.com/tidev/titanium-sdk/pull/11741))

* [TIMOB-27831](https://jira-archive.titaniumsdk.com/TIMOB-27831) - Implement TabGroup.tintColor ([#11741](https://github.com/tidev/titanium-sdk/pull/11741))

* [TIMOB-27904](https://jira-archive.titaniumsdk.com/TIMOB-27904) - Incremental build duplicates "bootstrap.json" entries as of 8.1.0 ([5ab9a5a](https://github.com/tidev/titanium-sdk/commit/5ab9a5a54f88922fc233c221ccafb1389d7e3854))

* [TIMOB-27911](https://jira-archive.titaniumsdk.com/TIMOB-27911) - ActiveTab not highlighted ([#11741](https://github.com/tidev/titanium-sdk/pull/11741))

* [TIMOB-27912](https://jira-archive.titaniumsdk.com/TIMOB-27912) - chrome devtools URL is no longer valid ([edcb376](https://github.com/tidev/titanium-sdk/commit/edcb37672b058678819b3a3e6efdf03205e770f0))

* [TIMOB-27939](https://jira-archive.titaniumsdk.com/TIMOB-27939) - Module builds should auto-download NDK r21c by default if needed

* allow Tab barColor to be set ([98718ac](https://github.com/tidev/titanium-sdk/commit/98718acd44f71c074e6dbd83ee9d27a4ef6ac95f))

### iOS platform

* [TIMOB-27847](https://jira-archive.titaniumsdk.com/TIMOB-27847) - Implement Tab tintColor and activeTintColor ([#11741](https://github.com/tidev/titanium-sdk/pull/11741))

* [TIMOB-27898](https://jira-archive.titaniumsdk.com/TIMOB-27898) - Race condition in setTimeout/clearTimeout (regression) ([bbba4cd](https://github.com/tidev/titanium-sdk/commit/bbba4cd46aa0a4d5b3ca94c939db176efe27652c))

* [TIMOB-27903](https://jira-archive.titaniumsdk.com/TIMOB-27903) - APSHTTPRequest dealloc logged when using http calls ([14c98df](https://github.com/tidev/titanium-sdk/commit/14c98dfb1b316d33aa9daeb1cbacdcde348dd4a8))

## SDK Module Versions

| Module | Android version | iOS Version |
| --- | --- | --- |
| facebook | 9.0.0 | 7.0.1 |
| ti.cloudpush | 7.0.0 | n/a |
| ti.map | 5.0.1 | 3.3.0 |
| ti.webdialog | 2.0.0 | 1.2.0 |
| ti.playservices | 17.1.1 | n/a |
| ti.identity | 3.0.1 | 1.1.0 |
| urlSession | n/a | 2.2.0 |
| ti.coremotion | n/a | 2.1.0 |
| ti.applesignin | n/a | 1.1.1 |
| ti.cloud | 3.2.11 | 3.2.11 |
| hyperloop | 5.0.3 | 5.0.3 |
