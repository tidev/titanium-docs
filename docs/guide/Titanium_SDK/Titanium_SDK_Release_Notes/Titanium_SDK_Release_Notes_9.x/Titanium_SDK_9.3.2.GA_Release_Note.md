---
title: Titanium SDK 9.3.2.GA - 11 February 2021
weight: '10'
---

# Titanium SDK 9.3.2.GA - 11 February 2021

## About this release

Titanium SDK 9.3.2 is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release (9.3.1) is no longer supported. End of support for this version will be 2021-08-11 or until the next patch release. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_deprecation_policy.html) and [Nominal Lifetimes](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_product_lifecycle.html#AxwayAppceleratorProductLifecycle-NominalLifetimes) documents for details.

::: danger ❗️ Warning
With the release of Titanium SDK 9.0.0, we no longer support Node.js 8.X. Node 10.13.0 is the new minimum supported version.
:::

## Community Credits

* Michael Gangolf

    * [TIMOB-28333](https://jira-archive.titaniumsdk.com/TIMOB-28333) - rgba(int,int,int) parity with iOS ([925f6f2](https://github.com/tidev/titanium-sdk/commit/925f6f26ab2eabbff43eaffef8622f4e305d6360))

## Bug Fixes

### Android platform

* [TIMOB-28337](https://jira-archive.titaniumsdk.com/TIMOB-28337) - ListView properties missing in "longpress" event in Alloy as of 9.3.0 ([0935358](https://github.com/tidev/titanium-sdk/commit/093535877cadf38e48efa840c7902bfa7a12f902))

* [TIMOB-28330](https://jira-archive.titaniumsdk.com/TIMOB-28330) - Application crashes when scrolling a listview with zero items in the first section ([a92bea2](https://github.com/tidev/titanium-sdk/commit/a92bea2353c31001b27313f366c255403a719f57))

* [TIMOB-28341](https://jira-archive.titaniumsdk.com/TIMOB-28341) - webview url sends repeated sections of encrypted url ([f5f8f67](https://github.com/tidev/titanium-sdk/commit/f5f8f6786715b7877dd29189a14f5893fd2ea256))

* [TIMOB-28333](https://jira-archive.titaniumsdk.com/TIMOB-28333) - rgba(int,int,int) parity with iOS ([925f6f2](https://github.com/tidev/titanium-sdk/commit/925f6f26ab2eabbff43eaffef8622f4e305d6360))

### iOS platform

* [TIMOB-28325](https://jira-archive.titaniumsdk.com/TIMOB-28325) - Calculate proper row width for UITableViewStyleInsetGrouped ([a34e964](https://github.com/tidev/titanium-sdk/commit/a34e9643c6a9c9686e76e3893ce501a3f9073413))

* [TIMOB-28297](https://jira-archive.titaniumsdk.com/TIMOB-28297) - Swift files doesn't recognize macros defined in defines.h ([d135466](https://github.com/tidev/titanium-sdk/commit/d1354664a768a122caa7c7e06bbe8b2eab27e5f8))

* [TIMOB-28304](https://jira-archive.titaniumsdk.com/TIMOB-28304) - Swift enabling in Objc module should build ([1d1f174](https://github.com/tidev/titanium-sdk/commit/1d1f174cfd0f73ed267e0659b76d9da67edcebfa))

* [TIMOB-28282](https://jira-archive.titaniumsdk.com/TIMOB-28282) - Use supportedInterfaceOrientations of UINavigationController.topViewController instead of UINavigationController ([1f1127a](https://github.com/tidev/titanium-sdk/commit/1f1127abc35288a296e9b68c206a622a4cbcf8bd))

* Expose Ti.Media.AudioPlayer.externalPlaybackActive as boolean properly ([2712dc6](https://github.com/tidev/titanium-sdk/commit/2712dc6be533b9752b9b62dccc7e022596a03558))

### Multiple platforms

* declare i18n function before its usage ([e4bc8a9](https://github.com/tidev/titanium-sdk/commit/e4bc8a9265f6e6ba2cb801612c65dbe49a953b05))

## SDK Module Versions

| Module | Android version | iOS Version |
| --- | --- | --- |
| facebook | 11.0.2 | 10.0.0 |
| ti.cloudpush | 7.1.0 | n/a |
| ti.map | 5.0.1 | 4.0.1 |
| ti.webdialog | 2.0.0 | 2.0.0 |
| ti.playservices | 17.5.0 | n/a |
| ti.identity | 3.0.2 | 3.0.0 |
| urlSession | n/a | 3.0.0 |
| ti.coremotion | n/a | 3.0.0 |
| ti.applesignin | n/a | 2.0.0 |
| ti.cloud | 3.2.11 | 3.2.11 |
| hyperloop | 6.0.2 |  |
