---
title: Titanium SDK 8.3.1.GA - 17 January 2020
weight: '10'
---

# Titanium SDK 8.3.1.GA - 17 January 2020

## About this release

Titanium SDK 8.3.1 is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release (8.3.0) is no longer supported. End of support for this version will be 2020-07-17 or until the next patch release. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_deprecation_policy.html) and [Nominal Lifetimes](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_product_lifecycle.html#AxwayAppceleratorProductLifecycle-NominalLifetimes) documents for details.

::: danger ❗️ Warning
With the release of Titanium SDK 9.0.0, we will no longer support Node.js 8.X. Node 10.13.0 will be the new minimum supported version with SDK 9.0.0.
:::

## Bug Fixes

### Android platform

* [TIMOB-27694](https://jira.appcelerator.org/browse/TIMOB-27694) - default Ti.Ui.TextField.editable is true in #focus() ([243afd0](https://github.com/tidev/titanium_mobile/commit/243afd00e0760f2060e797312942ee65d47b9f5f))

* [TIMOB-25945](https://jira.appcelerator.org/browse/TIMOB-25945) - fix losing elevation effect after dimensions change ([4b8b22a](https://github.com/tidev/titanium_mobile/commit/4b8b22a296cab1174917a0a672150f75bcecdcf0))

* [TIMOB-27572](https://jira.appcelerator.org/browse/TIMOB-27572) - getCurrentPosition() compatibility with some Samsung devices ([1e832a6](https://github.com/tidev/titanium_mobile/commit/1e832a6720aeddbfeec4442efaf02267bf8e1ca7))

### iOS platform

* [TIMOB-27158](https://jira.appcelerator.org/browse/TIMOB-27158) - ui glitch in lazyloading fixed ([a32f713](https://github.com/tidev/titanium_mobile/commit/a32f71313139e6a75fcc7ad99c284a3b6839c65e))

* [TIMOB-27622](https://jira.appcelerator.org/browse/TIMOB-27622) - expose TiApp singleton accessor to swift ([981869a](https://github.com/tidev/titanium_mobile/commit/981869a4d40fa5e1aa8c4e34db2f1a096fc11407))

* [TIMOB-27623](https://jira.appcelerator.org/browse/TIMOB-27623) - server is receiving two consecutive calls for the same url and cookies updated while reloading webview ([8646a46](https://github.com/tidev/titanium_mobile/commit/8646a4606dac6ff8d554593708d2b29bb17d4d62))

* [TIMOB-27609](https://jira.appcelerator.org/browse/TIMOB-27609) - status bar background color crash fix ios13 ([0e0220c](https://github.com/tidev/titanium_mobile/commit/0e0220c6f349e55763acd28053b7f4ce9e4d01a6))

* [TIMOB-27350](https://jira.appcelerator.org/browse/TIMOB-27350) - updated Ti.Blob.toString() behaviour to original ([cbb82a6](https://github.com/tidev/titanium_mobile/commit/cbb82a6a97062b47c7a482f50d221027576215e7))

## SDK modules versions

### Android and iOS

| Module | Android version | iOS version |
| --- | --- | --- |
| urlSession | n/a | 2.2.0 |
| facebook | 8.0.0 | 7.0.0 |
| ti.coremotion | n/a | 2.0.1 |
| ti.map | 4.5.0 | 3.3.0 |
| ti.safaridialog | n/a | 1.1.1 |
| ti.webdialog | 1.1.0 | 1.1.0 |
| ti.touchid | 3.0.1 | 2.1.4 |
| ti.identity | 2.1.0 | 1.0.6 |
| ti.applesignin | n/a | 1.1.1 |
| ti.cloudpush | 6.0.1 | n/a |
| ti.playservices | 16.1.3 | n/a |

### CommonJS

| Module | Version |
| --- | --- |
| ti.cloud | 3.2.11 |

### Hyperloop

| Module | Version |
| --- | --- |
| hyperloop | 4.0.4 |
