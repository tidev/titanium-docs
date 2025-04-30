---
title: Titanium SDK 12.7.0.GA - 30 April 2025
weight: '19'
---

# Titanium SDK 12.7.0.GA Release Note

## About this release

Titanium SDK 12.7.0 is a minor release of the SDK, adding new features and enhancements for iOS and Android.

## Community Credits

* Michael Gangolf
  * move WebView contants into correct file ([f88c009](https://github.com/tidev/titanium_mobile/commit/f88c009c5d80a7738c1e8b2be64dfb7f04b4d0c4))
  * fix some typos ([a283e0a](https://github.com/tidev/titanium_mobile/commit/a283e0a82368c2dcab520de75d49052ff15b0fc3))
  * parity for keyboardframechanged and keyboardVisible ([b947362](https://github.com/tidev/titanium_mobile/commit/b947362f4f312f27083021be1cc05d373ea27ef3))
  * parity for Tab.popToRootWindow() ([18088a2](https://github.com/tidev/titanium_mobile/commit/18088a2fb8b9e9f327c4f783ab895eb8f2ca09b6))
  * Add rotate event ([9f7d712](https://github.com/tidev/titanium_mobile/commit/9f7d7122ab5d3514d4c84f821e7bd8ae18ec5033))
  * add letterSpacing to Label ([ee8b04c](https://github.com/tidev/titanium_mobile/commit/ee8b04c29e4a2179a33f58a5115bf983b4f777b8))
  * return 0 for recycled images when clearing cache ([b97c971](https://github.com/tidev/titanium_mobile/commit/b97c971f68b0e14b1d23a6b8a67b4460e2200f8a))
  * update gradle to 8.10.2 and ndk to 27 ([513cc07](https://github.com/tidev/titanium_mobile/commit/513cc075f014d3560cec1d2c1b7168170d67c6e8))
  * support html in text areas ([42fd915](https://github.com/tidev/titanium_mobile/commit/42fd915b36a28b139b9804d313cedefc622e08bd))
  * add networkMode ethernet to networkType ([ba8d567](https://github.com/tidev/titanium_mobile/commit/ba8d5673eb987eb08be669fac1dcd7670046aed0))
  * iOS systemImage example ([356b4a2](https://github.com/tidev/titanium_mobile/commit/356b4a29de4c449450cf6a9c16ce19e23b30f122))
  * improve BottomNavigation (experimental feature) ([86e22ce](https://github.com/tidev/titanium_mobile/commit/86e22ce067fd8cb8d3e67a4de3b2247ee6d70f15))
  * layerType property for WebView ([93c6adb](https://github.com/tidev/titanium_mobile/commit/93c6adbc3146f0dea29054bfa49bfb368cedf3af))
  * textTransform for Label ([b498e20](https://github.com/tidev/titanium_mobile/commit/b498e2076787f38647e87080e5f4b8fb42cbc28d))
  * update canOpenURL test ([d7a40c0](https://github.com/tidev/titanium_mobile/commit/d7a40c0c600cc1d22c87917cba82bec6d7c4b2b6))
  * make scrollToTop and scrollToBottom animatable ([d6751aa](https://github.com/tidev/titanium_mobile/commit/d6751aa04061fd7f166600fd08ce2914a4a8f7d0))
  * library updates ([6352c27](https://github.com/tidev/titanium_mobile/commit/6352c2790f51e70016a073af7560402ad29be5cb))
  * refreshControl offset property ([06248ec](https://github.com/tidev/titanium_mobile/commit/06248ecf7eb424e3584b9733f5c0703ba8e3a0d9))

* Prashant Saini
  * fix crash when calling `TabGroup.open()` ([3438520](https://github.com/tidev/titanium_mobile/commit/3438520b19062f0c377802d38b701dd9088bf5c8))
  * revert method signatures for compatibility ([be955f6](https://github.com/tidev/titanium_mobile/commit/be955f68e66a14bc45b1f57c520856520c4bb4ac))
  * add error code when http-client request is timed out ([e665815](https://github.com/tidev/titanium_mobile/commit/e665815dfe05fa06aa32ddf7ea279d5b69f8eaac))
  * add null checks on recycler view proxy ([fb7d039](https://github.com/tidev/titanium_mobile/commit/fb7d0392ef634a0adedb675b4685009b548f9ad6))
  * lifecycle listeners and states ([b08788f](https://github.com/tidev/titanium_mobile/commit/b08788fa0ea2d2e488151b2899cd9f381d9708f0))
  * TabGroup show/hide support, iOS 18+ elevated tab bar ([d84bb4d](https://github.com/tidev/titanium_mobile/commit/d84bb4d21be5c5ae60fb4faa7d4cf80e5c8dbdd8))

* Hans Knöchel
  * support html in text areas ([8cfa968](https://github.com/tidev/titanium_mobile/commit/8cfa968477cae724efe2737f6ce138f8ed5be8ed))
  * expose document title to Ti.UI.iOS.DocumentViewer ([51abfe7](https://github.com/tidev/titanium_mobile/commit/51abfe7d7d359cf9366ab6a7e9589468e44dadce))
  * bump to 12.7.0 ([e3a9364](https://github.com/tidev/titanium_mobile/commit/e3a93643c23c3a1769beb64f04cc7b7e1e0af506))

## Bug Fixes

### Android platform

* add error code when http-client request is timed out ([e665815](https://github.com/tidev/titanium_mobile/commit/e665815dfe05fa06aa32ddf7ea279d5b69f8eaac))
* add networkMode ethernet to networkType ([ba8d567](https://github.com/tidev/titanium_mobile/commit/ba8d5673eb987eb08be669fac1dcd7670046aed0))
* add null checks on recycler view proxy ([fb7d039](https://github.com/tidev/titanium_mobile/commit/fb7d0392ef634a0adedb675b4685009b548f9ad6))
* fix crash when calling `TabGroup.open()` ([3438520](https://github.com/tidev/titanium_mobile/commit/3438520b19062f0c377802d38b701dd9088bf5c8))
* lifecycle listeners and states ([b08788f](https://github.com/tidev/titanium_mobile/commit/b08788fa0ea2d2e488151b2899cd9f381d9708f0))
* move WebView contants into correct file ([f88c009](https://github.com/tidev/titanium_mobile/commit/f88c009c5d80a7738c1e8b2be64dfb7f04b4d0c4))
* return 0 for recycled images when clearing cache ([b97c971](https://github.com/tidev/titanium_mobile/commit/b97c971f68b0e14b1d23a6b8a67b4460e2200f8a))

### Multiple platforms

* update canOpenURL test ([d7a40c0](https://github.com/tidev/titanium_mobile/commit/d7a40c0c600cc1d22c87917cba82bec6d7c4b2b6))

## Features

### Multiple platforms

* Add rotate event ([9f7d712](https://github.com/tidev/titanium_mobile/commit/9f7d7122ab5d3514d4c84f821e7bd8ae18ec5033))
* expose document title to Ti.UI.iOS.DocumentViewer ([51abfe7](https://github.com/tidev/titanium_mobile/commit/51abfe7d7d359cf9366ab6a7e9589468e44dadce))
* TabGroup show/hide support, iOS 18+ elevated tab bar ([d84bb4d](https://github.com/tidev/titanium_mobile/commit/d84bb4d21be5c5ae60fb4faa7d4cf80e5c8dbdd8))

### Android platform

* add letterSpacing to Label ([ee8b04c](https://github.com/tidev/titanium_mobile/commit/ee8b04c29e4a2179a33f58a5115bf983b4f777b8))
* layerType property for WebView ([93c6adb](https://github.com/tidev/titanium_mobile/commit/93c6adbc3146f0dea29054bfa49bfb368cedf3af))
* make scrollToTop and scrollToBottom animatable ([d6751aa](https://github.com/tidev/titanium_mobile/commit/d6751aa04061fd7f166600fd08ce2914a4a8f7d0))
* parity for keyboardframechanged and keyboardVisible ([b947362](https://github.com/tidev/titanium_mobile/commit/b947362f4f312f27083021be1cc05d373ea27ef3))
* parity for Tab.popToRootWindow() ([18088a2](https://github.com/tidev/titanium_mobile/commit/18088a2fb8b9e9f327c4f783ab895eb8f2ca09b6))
* refreshControl offset property ([06248ec](https://github.com/tidev/titanium_mobile/commit/06248ecf7eb424e3584b9733f5c0703ba8e3a0d9))
* support html in text areas ([42fd915](https://github.com/tidev/titanium_mobile/commit/42fd915b36a28b139b9804d313cedefc622e08bd))
* textTransform for Label ([b498e20](https://github.com/tidev/titanium_mobile/commit/b498e2076787f38647e87080e5f4b8fb42cbc28d))

### iOS platform

* support html in text areas ([8cfa968](https://github.com/tidev/titanium_mobile/commit/8cfa968477cae724efe2737f6ce138f8ed5be8ed))

## SDK Module Versions

| Module      | Android version | iOS Version |
| ----------- | --------------- | ----------- |
| facebook | 13.0.0 | 15.0.0 |
| ti.map | 5.6.1 | 7.3.1 |
| ti.webdialog | 2.3.0 | 3.0.2 |
| ti.playservices | 18.3.0 | n/a |
| ti.identity | 3.1.0 | 5.0.0 |
| urlSession | n/a | 4.0.1 |
| ti.coremotion | n/a | 4.0.1 |
| ti.applesignin | n/a | 3.1.2 |
| hyperloop | 7.0.9 | 7.0.9 |
