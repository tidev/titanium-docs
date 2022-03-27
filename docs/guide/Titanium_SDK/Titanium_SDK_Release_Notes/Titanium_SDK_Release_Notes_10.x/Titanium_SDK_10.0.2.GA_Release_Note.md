---
title: Titanium SDK 10.0.2.GA - 10 August 2021
weight: '40'
---

# Titanium SDK 10.0.2.GA - 10 August 2021

## About this release

Titanium SDK 10.0.2 is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release (10.0.1) is no longer supported. Axway support for this version and prior versions released by Axway will be discontinued after March 1, 2022.

## Community Credits

* Hans Knöchel

    * [TIMOB-28514](https://jira-archive.titaniumsdk.com/TIMOB-28514) - Properly map user activity for cold starts ([f0ee118](https://github.com/appcelerator/titanium_mobile/commit/f0ee1185174d19b2b95268e2c12e7a0f164b2020))

## Bug Fixes

### Android platform

* [TIMOB-28503](https://jira-archive.titaniumsdk.com/TIMOB-28503) - Views added to ScrollableView can be lost upon window open ([2dabc8d](https://github.com/appcelerator/titanium_mobile/commit/2dabc8d627ec8b4743fa1d37ee6636f34c7ec4f8))

* [TIMOB-28496](https://jira-archive.titaniumsdk.com/TIMOB-28496) - Build fails on 64-bit Linux if 32-bit libraries not available ([38dd6a3](https://github.com/appcelerator/titanium_mobile/commit/38dd6a395d46c8a21cdd8e0cee8352606acef7f6))

* [TIMOB-28516](https://jira-archive.titaniumsdk.com/TIMOB-28516) - Optimize ScrollableView "views" property assignment ([459679a](https://github.com/appcelerator/titanium_mobile/commit/459679af1d180a759e23cea0ac17ad5e9a2a389f))

* [TIMOB-28517](https://jira-archive.titaniumsdk.com/TIMOB-28517) - Support CardView touchFeedbackColor property ([7b9c488](https://github.com/appcelerator/titanium_mobile/commit/7b9c4889b7e957a6862393ee9c78d5ddeb5a5c3c))

### iOS platform

* [TIMOB-28510](https://jira-archive.titaniumsdk.com/TIMOB-28510) - Do not create invalid swift compiler flags from symbol usage ([14985f1](https://github.com/appcelerator/titanium_mobile/commit/14985f1c6213e9d6609189d0b10b9c6f2a44114d))

* [TIMOB-28514](https://jira-archive.titaniumsdk.com/TIMOB-28514)/[TIMOB-28513](https://jira-archive.titaniumsdk.com/TIMOB-28513) - Properly map user activity for cold starts ([f0ee118](https://github.com/appcelerator/titanium_mobile/commit/f0ee1185174d19b2b95268e2c12e7a0f164b2020))

* [TIMOB-28506](https://jira-archive.titaniumsdk.com/TIMOB-28506) - Xcode project change detection causing unnecessary rebuilds ([89773aa](https://github.com/appcelerator/titanium_mobile/commit/89773aa46eb2017d5c80b9aab0595d4397940bd4))

## SDK Module Versions

| Module | Android version | iOS Version |
| --- | --- | --- |
| facebook | 11.0.2 | 11.0.1 |
| ti.cloudpush | 7.1.0 | n/a |
| ti.map | 5.3.2 | 5.1.1 |
| ti.webdialog | 2.0.0 | 3.0.1 |
| ti.playservices | 17.5.0 | n/a |
| ti.identity | 3.0.2 | 4.0.1 |
| urlSession | n/a | 4.0.1 |
| ti.coremotion | n/a | 4.0.1 |
| ti.applesignin | n/a | 3.1.1 |
| ti.cloud | 3.2.11 | 3.2.11 |
| hyperloop | 7.0.4 | 7.0.4 |
