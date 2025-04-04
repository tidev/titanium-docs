---
title: Titanium SDK 12.5.0.RC - 27 August 2024
weight: '19'
---

# Titanium SDK 12.5.0.RC Release Note

## Titanium SDK 12.5.0.RC - 27 August 2024

## About this release

Titanium SDK 12.5.0 is a minor release of the SDK, adding new features and platform updates.

## Community Credits

* Michael Gangolf
  * flatten ListView layout ([b9fd683](https://github.com/tidev/titanium_mobile/commit/b9fd68326f1dca7f7dc4eeb20e9fffa881dbce6d))
  * add maxImages and pathOnly to openPhotoGallery ([3eda594](https://github.com/tidev/titanium_mobile/commit/3eda594e2721651a412a9557f6a05830c19efb29))
  * fire `selected` event again when clicking the same Tab again ([dfb1b5c](https://github.com/tidev/titanium_mobile/commit/dfb1b5c312cbfac159fbae4d7277330dad71d6e0))
  * enable Signature Scheme v3 ([c719bcd](https://github.com/tidev/titanium_mobile/commit/c719bcd5cd061cccaefe888b8edaf7f25143f412))
  * update cmake, checkstyle ([8846f07](https://github.com/tidev/titanium_mobile/commit/8846f07955e0157ff134c122bd544f66c2fdb501))
  * fix tintColor and activeTintColor in a TabbedBar ([2e92f1d](https://github.com/tidev/titanium_mobile/commit/2e92f1ddd00b9610ff9a6fc14775545b7cdf089e))
  * set targetSDK to Android 34 ([5fc81f0](https://github.com/tidev/titanium_mobile/commit/5fc81f08bdb3f9ba64d9cb4972848c8523f2d190))
  * fix Actionbar backgroundImage doc and improve setter ([803bd04](https://github.com/tidev/titanium_mobile/commit/803bd04350df89f2197842d110ad3c0384a97c7f))
  * keep Tab tintColor when changing icons ([51be366](https://github.com/tidev/titanium_mobile/commit/51be36662445ad4755438a7f1b511a837196df69))
  * fix titleAttribute when it's not a creation parameter ([017c052](https://github.com/tidev/titanium_mobile/commit/017c0524dc1a76527a8ba342964ea881633492d5))

* Hans Knöchel
  * add 12.4.0.GA changelog ([9388600](https://github.com/tidev/titanium_mobile/commit/9388600a951db750e188eaca6c14b6e1683ffd7c))
  * bump master to 12.5.0 ([52cab42](https://github.com/tidev/titanium_mobile/commit/52cab4293d6c9a0472428f4ed0d0fb7566ebb530))
  * add support for iOS 18 and Xcode 16

## Bug Fixes

### Android platform

* fix Actionbar backgroundImage doc and improve setter ([803bd04](https://github.com/tidev/titanium_mobile/commit/803bd04350df89f2197842d110ad3c0384a97c7f))
* fix tintColor and activeTintColor in a TabbedBar ([2e92f1d](https://github.com/tidev/titanium_mobile/commit/2e92f1ddd00b9610ff9a6fc14775545b7cdf089e))
* fix titleAttribute when it's not a creation parameter ([017c052](https://github.com/tidev/titanium_mobile/commit/017c0524dc1a76527a8ba342964ea881633492d5))
* keep Tab tintColor when changing icons ([51be366](https://github.com/tidev/titanium_mobile/commit/51be36662445ad4755438a7f1b511a837196df69))

### Multiple platforms

* sdk build on windows needs shell: true to run batch files ([f3e5a0b](https://github.com/tidev/titanium_mobile/commit/f3e5a0bd90eb75dfa7ec0c5e6a4b4cc39ac4b95a))

## Features

### Android platform

* add maxImages and pathOnly to openPhotoGallery ([3eda594](https://github.com/tidev/titanium_mobile/commit/3eda594e2721651a412a9557f6a05830c19efb29))
* enable Signature Scheme v3 ([c719bcd](https://github.com/tidev/titanium_mobile/commit/c719bcd5cd061cccaefe888b8edaf7f25143f412))
* fire `selected` event again when clicking the same Tab again ([dfb1b5c](https://github.com/tidev/titanium_mobile/commit/dfb1b5c312cbfac159fbae4d7277330dad71d6e0))
* flatten ListView layout ([b9fd683](https://github.com/tidev/titanium_mobile/commit/b9fd68326f1dca7f7dc4eeb20e9fffa881dbce6d))
* set targetSDK to Android 34 ([5fc81f0](https://github.com/tidev/titanium_mobile/commit/5fc81f08bdb3f9ba64d9cb4972848c8523f2d190))

## SDK Module Versions

| Module      | Android version | iOS Version |
| ----------- | --------------- | ----------- |
| facebook | 12.1.0 | 14.0.0 |
| ti.map | 5.6.1 | 7.3.1 |
| ti.webdialog | 2.3.0 | 3.0.2 |
| ti.playservices | 18.3.0 | n/a |
| ti.identity | 3.1.0 | 5.0.0 |
| urlSession | n/a | 4.0.1 |
| ti.coremotion | n/a | 4.0.1 |
| ti.applesignin | n/a | 3.1.2 |
| hyperloop | 7.0.6 | 7.0.6 |
