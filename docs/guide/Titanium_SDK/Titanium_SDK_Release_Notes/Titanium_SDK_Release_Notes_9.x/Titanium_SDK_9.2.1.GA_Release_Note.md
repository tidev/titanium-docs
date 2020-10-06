---
title: Titanium SDK 9.2.1.GA - 5 October 2020
weight: '10'
---

# Titanium SDK 9.2.1.GA - 5 October 2020

## About this release

Titanium SDK 9.2.1 is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK minor release (9.2.0) is no longer supported. End of support for this version will be 2021-04-05 or until the next patch release. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_deprecation_policy.html) and [Nominal Lifetimes](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_product_lifecycle.html#AxwayAppceleratorProductLifecycle-NominalLifetimes) documents for details.

::: danger ❗️ Warning
With the release of Titanium SDK 9.0.0, we will no longer support Node.js 8.X. Node 10.13.0 is the new minimum supported version.
:::

## Bug Fixes

### iOS platform

* [TIMOB-28127](https://jira.appcelerator.org/browse/TIMOB-28127) - TiUIListItemProxy overreleased causing intermittent crashing w/ macOS ([6d22e29](https://github.com/appcelerator/titanium_mobile/commit/6d22e297bb686afa974c0701c578265557acc2e0))

* [TIMOB-28156](https://jira.appcelerator.org/browse/TIMOB-28156) - Module build failing for modules not having platform directory ([c4d90fe](https://github.com/appcelerator/titanium_mobile/commit/c4d90fe0e1cc65f7481c5e715182f0f73f28048f))

* [TIMOB-28150](https://jira.appcelerator.org/browse/TIMOB-28150) - Updating backgroundImage displays irrelavant image inbetween change ([de88803](https://github.com/appcelerator/titanium_mobile/commit/de88803637c7956aba8160fff7e6e1489830bf1b))

* [TIMOB-28152](https://jira.appcelerator.org/browse/TIMOB-28152) - Compile error when SDK forces a rebuild ([9b516e4](https://github.com/appcelerator/titanium_mobile/commit/9b516e4e0163f89187b3ab1ddd2b0f750fad0893))

* [TIMOB-27812](https://jira.appcelerator.org/browse/TIMOB-27812) - format js errors in cli output ([bc32947](https://github.com/appcelerator/titanium_mobile/commit/bc32947554f94acd51561e0bba4585c5a74c56b5))

* [TIMOB-28151](https://jira.appcelerator.org/browse/TIMOB-28151) - Compile error if using Ti.Media APIs without openPhotoGallery ([c5d6d8d](https://github.com/appcelerator/titanium_mobile/commit/c5d6d8d2083db0cc18d03a7c67158101bafcae35))

* [TIMOB-28158](https://jira.appcelerator.org/browse/TIMOB-28158) - Duplicate framework search paths ([35e4058](https://github.com/appcelerator/titanium_mobile/commit/35e4058784e5ad6c104cf6ea2b16f3887e8f58b9))

* [TIMOB-28148](https://jira.appcelerator.org/browse/TIMOB-28148) - app crashes when updating tableview ([23c01db](https://github.com/appcelerator/titanium_mobile/commit/23c01db715a486898f401f68c2aa032550528176))

* [TIMOB-28154](https://jira.appcelerator.org/browse/TIMOB-28154) - Build failing on 9.2.0 with Hyperloop

* [TIMOB-28159](https://jira.appcelerator.org/browse/TIMOB-28159) - Building Swift module created with sdk < [9.2.0.GA](http://9.2.0.ga/) fails

* [TIMOB-27812](https://jira.appcelerator.org/browse/TIMOB-27812) - Improve display of uncaught errors

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
