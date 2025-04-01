---
title: Titanium SDK 12.5.0.GA - 16 Sepember 2024
weight: '27'
---

# Titanium SDK 12.5.0.GA Release Note

## Titanium SDK 12.5.0.GA - 16 September 2024

## About this release

Titanium SDK 12.5.0 is a minor release of the SDK, adding new features and platform updates. It also adds stable support for
iOS 18 and Xcode 16, the latest software in the Apple ecosystem.

## Community Credits

* Michael Gangolf
  * forward --sdk in module build process ([07f435d](https://github.com/tidev/titanium_mobile/commit/07f435d836f644ec469f9f7485682b74d25e0699))
  * more log output ([694766b](https://github.com/tidev/titanium_mobile/commit/694766b63323e3fee70e64abee07841b267fdce7))
  * statusBarColor for Window ([91499ef](https://github.com/tidev/titanium_mobile/commit/91499efadc6cc1c9a8fd2c82cdddf4ddd340f213))
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
  * add “interactiveDismissModeEnabled” API ([1d2cdd5](https://github.com/tidev/titanium_mobile/commit/1d2cdd5ff802fcc628ab67cd1a882117b1e74c00))
  * textfield padding ([d75fc9e](https://github.com/tidev/titanium_mobile/commit/d75fc9efb225aa798101388d6ba50d9751a2847a))
  * Revert "fix(ios): fix unbalanced view controller transitions causing issues on iOS 16+ (#13586)" ([b9932b2](https://github.com/tidev/titanium_mobile/commit/b9932b2f3929a19523a29a453710afecb84ea7f7))
  * bump master to 12.5.0 ([52cab42](https://github.com/tidev/titanium_mobile/commit/52cab4293d6c9a0472428f4ed0d0fb7566ebb530))
  * add 12.5.0 changelog ([e5e3f33](https://github.com/tidev/titanium_mobile/commit/e5e3f33323e65593f69eda2fc56f750e7611ec7a))

* Abdullah Al-Faqeir
  * pause returns false ([e577bce](https://github.com/tidev/titanium_mobile/commit/e577bce9b640974ce92a9ad209846fa2f5b7915b))

## Bug Fixes

### Android platform

* fix Actionbar backgroundImage doc and improve setter ([803bd04](https://github.com/tidev/titanium_mobile/commit/803bd04350df89f2197842d110ad3c0384a97c7f))
* fix tintColor and activeTintColor in a TabbedBar ([2e92f1d](https://github.com/tidev/titanium_mobile/commit/2e92f1ddd00b9610ff9a6fc14775545b7cdf089e))
* fix titleAttribute when it's not a creation parameter ([017c052](https://github.com/tidev/titanium_mobile/commit/017c0524dc1a76527a8ba342964ea881633492d5))
* keep Tab tintColor when changing icons ([51be366](https://github.com/tidev/titanium_mobile/commit/51be36662445ad4755438a7f1b511a837196df69))
* textfield padding ([d75fc9e](https://github.com/tidev/titanium_mobile/commit/d75fc9efb225aa798101388d6ba50d9751a2847a))

### iOS platform

* pause returns false ([e577bce](https://github.com/tidev/titanium_mobile/commit/e577bce9b640974ce92a9ad209846fa2f5b7915b))

### Multiple platforms

* sdk build on windows needs shell: true to run batch files ([f3e5a0b](https://github.com/tidev/titanium_mobile/commit/f3e5a0bd90eb75dfa7ec0c5e6a4b4cc39ac4b95a))

## Features

### Multiple platforms

* add 12.5.0 changelog ([e5e3f33](https://github.com/tidev/titanium_mobile/commit/e5e3f33323e65593f69eda2fc56f750e7611ec7a))

### Android platform

* add maxImages and pathOnly to openPhotoGallery ([3eda594](https://github.com/tidev/titanium_mobile/commit/3eda594e2721651a412a9557f6a05830c19efb29))
* enable Signature Scheme v3 ([c719bcd](https://github.com/tidev/titanium_mobile/commit/c719bcd5cd061cccaefe888b8edaf7f25143f412))
* fire `selected` event again when clicking the same Tab again ([dfb1b5c](https://github.com/tidev/titanium_mobile/commit/dfb1b5c312cbfac159fbae4d7277330dad71d6e0))
* flatten ListView layout ([b9fd683](https://github.com/tidev/titanium_mobile/commit/b9fd68326f1dca7f7dc4eeb20e9fffa881dbce6d))
* more log output ([694766b](https://github.com/tidev/titanium_mobile/commit/694766b63323e3fee70e64abee07841b267fdce7))
* set targetSDK to Android 34 ([5fc81f0](https://github.com/tidev/titanium_mobile/commit/5fc81f08bdb3f9ba64d9cb4972848c8523f2d190))
* statusBarColor for Window ([91499ef](https://github.com/tidev/titanium_mobile/commit/91499efadc6cc1c9a8fd2c82cdddf4ddd340f213))

### iOS platform

* add “interactiveDismissModeEnabled” API ([1d2cdd5](https://github.com/tidev/titanium_mobile/commit/1d2cdd5ff802fcc628ab67cd1a882117b1e74c00))

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
