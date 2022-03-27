---
title: Titanium SDK 9.2.2.GA - 29 October 2020
weight: '50'
---

# Titanium SDK 9.2.2.GA - 29 October 2020

## About this release

Titanium SDK 9.2.2 is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release (9.2.1) is no longer supported. End of support for this version will be 2021-04-29 or until the next patch release. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_deprecation_policy.html) and [Nominal Lifetimes](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_product_lifecycle.html#AxwayAppceleratorProductLifecycle-NominalLifetimes) documents for details.

::: danger ❗️ Warning
With the release of Titanium SDK 9.0.0, we will no longer support Node.js 8.X. Node 10.13.0 is the new minimum supported version.
:::

## Community Credits

* Hans Knöchel

    * [TIMOB-28181](https://jira-archive.titaniumsdk.com/TIMOB-28181) - fix 'dateTimeColor' for iOS 14+ ([88005a3](https://github.com/appcelerator/titanium_mobile/commit/88005a3ae86b2f1904b528eaa3e16eb7e4fdaa3c))

    * [TIMOB-28203](https://jira-archive.titaniumsdk.com/TIMOB-28203) \- Remove deprecated frameworks (AddressBook, AddressBookUI, OpenGLES)

## Bug Fixes

### Multiple platforms

* [TIMOB-28210](https://jira-archive.titaniumsdk.com/TIMOB-28210) - silence aca load failure ([f9e00fd](https://github.com/appcelerator/titanium_mobile/commit/f9e00fdfb58779adafaf2a3042029010ab9f39ff))

* [TIMOB-28200](https://jira-archive.titaniumsdk.com/TIMOB-28200) - declare missing nodejs namespace for zone.js ([35f59c4](https://github.com/appcelerator/titanium_mobile/commit/35f59c433108c201a4a633d34d25af45a1fd4248))

* [TIMOB-28079](https://jira-archive.titaniumsdk.com/TIMOB-28079) - always load aca module first on startup ([f911623](https://github.com/appcelerator/titanium_mobile/commit/f911623670c39028c039891c1217be1a675319a7))

* [TIMOB-28185](https://jira-archive.titaniumsdk.com/TIMOB-28185) - generate missing macOS asset catalog icons ([b242902](https://github.com/appcelerator/titanium_mobile/commit/b242902a9009f77a1ec227bd5c609a945ef6cc00))

* [TIMOB-28200](https://jira-archive.titaniumsdk.com/TIMOB-28200) - update dependencies of angular template ([701bcec](https://github.com/appcelerator/titanium_mobile/commit/701bcec93f73a1de843ae4518659e2b30cdef933))

* [TIMOB-28174](https://jira-archive.titaniumsdk.com/TIMOB-28174) \- Analytics: Exception can occur when constructing payload

### Android platform

* [TIMOB-28193](https://jira-archive.titaniumsdk.com/TIMOB-28193) - openPhotoGallery() crash selecting multiple files ([29b4116](https://github.com/appcelerator/titanium_mobile/commit/29b41167184ce7a7f9b6bfc102e203a9d0cf000b))

### iOS platform

* [TIMOB-28202](https://jira-archive.titaniumsdk.com/TIMOB-28202) - fix MediaModule compile error ([b8d2cd1](https://github.com/appcelerator/titanium_mobile/commit/b8d2cd1d414abb27f0a29c913e476f7d2f028029))

* [TIMOB-28207](https://jira-archive.titaniumsdk.com/TIMOB-28207) - handle spaces in xcode path ([f8c8172](https://github.com/appcelerator/titanium_mobile/commit/f8c8172f372948aed3397bc1d7ca31b5cf0b49e0))

* make Ti.UI.PickerColumn.rowCount NSNumber\*, not NSInteger ([026fe12](https://github.com/appcelerator/titanium_mobile/commit/026fe120fb6829059fadbb6447964cfb81af76f1))

* make Ti.UI.TableViewSection.rowCount NSNumber\*, not NSInteger ([c25a9dd](https://github.com/appcelerator/titanium_mobile/commit/c25a9dd951dbf277dfeb73889e1300edbcc7cd05))

* [TIMOB-13903](https://jira-archive.titaniumsdk.com/TIMOB-13903) - tableview "sectionCount" property crash ([3b0d8a4](https://github.com/appcelerator/titanium_mobile/commit/3b0d8a4f27bbfe01cfc042e14e83781f30f92c35))

## SDK Module Versions

| Module | Android version | iOS Version |
| --- | --- | --- |
| facebook | 10.0.0 | 9.0.0 |
| ti.cloudpush | 7.1.0 | n/a |
| ti.map | 5.0.1 | 4.0.1 |
| ti.webdialog | 2.0.0 | 2.0.0 |
| ti.playservices | 17.1.1 | n/a |
| ti.identity | 3.0.2 | 2.0.0 |
| urlSession | n/a | 3.0.0 |
| ti.coremotion | n/a | 3.0.0 |
| ti.applesignin | n/a | 2.0.0 |
| ti.cloud | 3.2.11 | 3.2.11 |
| hyperloop | 6.0.2 | 6.0.2 |
