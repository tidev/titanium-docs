---
title: Titanium SDK 13.3.0.GA - 01 July 2026
weight: '10'
---

## About this release

Titanium SDK 13.3.0 is a minor release of the SDK with support for Xcode 27 and iOS 27, Hyperloop 8.0.0, and iOS multi-scene applications. It also includes Android UI, media, WebView and debugging fixes, improved ImageView zooming and Ti.Preferences performance, plus module packaging and iOS TabGroup/background handling fixes.

## Community Credits

* Hans Knöchel
  * support Xcode 27 and iOS 27 ([f648aea](https://github.com/tidev/titanium_mobile/commit/f648aea4f69ccb363c7c01fc37bee64772615889))
  * emit tab focus separately from selected ([289599e](https://github.com/tidev/titanium_mobile/commit/289599ef809746999a889ae019b4830b204cb199))
  * avoid reusing background completion handlers ([8ed9170](https://github.com/tidev/titanium_mobile/commit/8ed917063054e6a0ae2902fddd46ac9b0990e1e4))
  * bump master to 13.3.0 ([847778f](https://github.com/tidev/titanium_mobile/commit/847778f867f786f89effd0210fc8ecbd803374bc))

* Michael Gangolf
  * validate sessionid in Chrome debug session ([df7635f](https://github.com/tidev/titanium_mobile/commit/df7635f5e76e89b3e9754cc8e40494eec038172c))
  * update Hyperloop to 8.0.0 ([b4681df](https://github.com/tidev/titanium_mobile/commit/b4681df8e228944ac066ce35b1b683a16935c52a))
  * support multi-scene applications ([14ee083](https://github.com/tidev/titanium_mobile/commit/14ee08339d0a6294c8a526fafbf1903c094d98bb))
  * github workflow ([f684178](https://github.com/tidev/titanium_mobile/commit/f6841789ceca76ecf842661dd5fc3e65120cbb30))
  * github workflows ([e6d56a9](https://github.com/tidev/titanium_mobile/commit/e6d56a93202e48b1e41e93354055b2845746dfb2))
  * update gradle ([c9119ea](https://github.com/tidev/titanium_mobile/commit/c9119ea30667ed98da4441f411effa9116d4347f))
  * update ti.facebook version ([dcf1413](https://github.com/tidev/titanium_mobile/commit/dcf14135b832c90e708d41ea5997db076fa1ce19))
  * remove dead code ([f868b64](https://github.com/tidev/titanium_mobile/commit/f868b644b93a8731ab50de4cfd083273d554b6f5))
  * webview URL with large GET data ([95aafb4](https://github.com/tidev/titanium_mobile/commit/95aafb4978366bbc8e7cdbb785559e8ac6a4e1cb))
  * optimize Ti.Preferences ([5a978f7](https://github.com/tidev/titanium_mobile/commit/5a978f7b1ba0edbd9bd980a427db6e487f1af7e0))
  * move MimeTypeHelper log from error to debug ([885f413](https://github.com/tidev/titanium_mobile/commit/885f413e88d6dcd2b09e499b7b28483a0452cb93))
  * fix TableView search field position ([951667a](https://github.com/tidev/titanium_mobile/commit/951667a360ce83ed09388aeb7c9f8a68b61fb419))
  * github actions ([146479a](https://github.com/tidev/titanium_mobile/commit/146479a3f264576ce4c7a80d776638c7ef8b4d33))
  * cameraX rotation fix for orientation-lock enabled ([3ec8c79](https://github.com/tidev/titanium_mobile/commit/3ec8c790c194f5e449dc52ba2d25b59b318c7125))
  * disable ripple in M3 BottomNavigation ([9e6cfa0](https://github.com/tidev/titanium_mobile/commit/9e6cfa0d28e01867a22a80991838263d92f13782))
  * update npm packages ([4326ff5](https://github.com/tidev/titanium_mobile/commit/4326ff5ace5dff342fd94061e5d4b96c6f8f7d31))
  * opening M3 theme could load wrong theme ([823d721](https://github.com/tidev/titanium_mobile/commit/823d7217cd456430069e55ca043c2c8755d6caef))
  * apply dark/light mode switch to experimenta BottomNavigation ([48d5761](https://github.com/tidev/titanium_mobile/commit/48d5761e0779683f3987efdf5a9d53c3a681726e))
  * remove ImageView remote image fade-in animation ([9ed25bc](https://github.com/tidev/titanium_mobile/commit/9ed25bc6a19b4f81ae8fc680247eb55921fb9bd6))
  * avoid WindowLeaked error when closing VideoPlayer windows ([2632d06](https://github.com/tidev/titanium_mobile/commit/2632d06e181ed20d72dcc28ae5c38028ef0e2375))
  * improve ImageView pinch & zoom ([5a7da1f](https://github.com/tidev/titanium_mobile/commit/5a7da1f1c7941dff07d5b22a9517380a61d72f56))
  * some code clean up and null checkes ([dff9f54](https://github.com/tidev/titanium_mobile/commit/dff9f54bc7f0b759a772925d67bbf42c21322eed))
  * prevent icon animation in TabGroup when closing modal windows ([5588ea5](https://github.com/tidev/titanium_mobile/commit/5588ea5474a5d358f1ff79e4dc40c2a34b9f1078))
  * use DisplayManager in OrientationMonitor ([79d9a6a](https://github.com/tidev/titanium_mobile/commit/79d9a6a79e314d75b0c27d3fa8236ebb5ade87d9))
  * add deprecation note for old events in ScrollableView ([d8ea0fd](https://github.com/tidev/titanium_mobile/commit/d8ea0fd20bf9abae654d6087b970e26e844d0431))

* Prashant Saini
  * fix module packaging process ([133d72c](https://github.com/tidev/titanium_mobile/commit/133d72c034ae18bb1b4f2288e2e1485e0aa6eddf))
  * fix remote URL handling in video player ([9725f92](https://github.com/tidev/titanium_mobile/commit/9725f92947b535dcc5aef35a7e48c550a7bd83d8))

* Abdullah Al-Faqeir
  * borderWidth renders at double thickness when borderRadius is an array ([aa5634a](https://github.com/tidev/titanium_mobile/commit/aa5634a355fc6e0cf87084ea1cd8459238a53d2e))

* Marc Bender
  * tabgroup navigationwindow fix ([b07c4fa](https://github.com/tidev/titanium_mobile/commit/b07c4fa2dab7af58b4e62a7f8dd81a7cab5f6c56))
  * textarea fix and feature enhancement ([0a6697b](https://github.com/tidev/titanium_mobile/commit/0a6697bede1615808bcbf8064c76100778361577))
  * scrollview optimisation ([3e7142d](https://github.com/tidev/titanium_mobile/commit/3e7142dbcbd703bfc9ae299430b8d79c7f5014a3))


## Bug Fixes

### Android platform

* apply dark/light mode switch to experimenta BottomNavigation ([48d5761](https://github.com/tidev/titanium_mobile/commit/48d5761e0779683f3987efdf5a9d53c3a681726e))
* avoid WindowLeaked error when closing VideoPlayer windows ([2632d06](https://github.com/tidev/titanium_mobile/commit/2632d06e181ed20d72dcc28ae5c38028ef0e2375))
* cameraX rotation fix for orientation-lock enabled ([3ec8c79](https://github.com/tidev/titanium_mobile/commit/3ec8c790c194f5e449dc52ba2d25b59b318c7125))
* disable ripple in M3 BottomNavigation ([9e6cfa0](https://github.com/tidev/titanium_mobile/commit/9e6cfa0d28e01867a22a80991838263d92f13782))
* fix remote URL handling in video player ([9725f92](https://github.com/tidev/titanium_mobile/commit/9725f92947b535dcc5aef35a7e48c550a7bd83d8))
* move MimeTypeHelper log from error to debug ([885f413](https://github.com/tidev/titanium_mobile/commit/885f413e88d6dcd2b09e499b7b28483a0452cb93))
* opening M3 theme could load wrong theme ([823d721](https://github.com/tidev/titanium_mobile/commit/823d7217cd456430069e55ca043c2c8755d6caef))
* scrollview optimisation ([3e7142d](https://github.com/tidev/titanium_mobile/commit/3e7142dbcbd703bfc9ae299430b8d79c7f5014a3))
* some code clean up and null checkes ([dff9f54](https://github.com/tidev/titanium_mobile/commit/dff9f54bc7f0b759a772925d67bbf42c21322eed))
* validate sessionid in Chrome debug session ([df7635f](https://github.com/tidev/titanium_mobile/commit/df7635f5e76e89b3e9754cc8e40494eec038172c))
* webview URL with large GET data ([95aafb4](https://github.com/tidev/titanium_mobile/commit/95aafb4978366bbc8e7cdbb785559e8ac6a4e1cb))

### Multiple platforms

* fix module packaging process ([133d72c](https://github.com/tidev/titanium_mobile/commit/133d72c034ae18bb1b4f2288e2e1485e0aa6eddf))

### iOS platform

* avoid reusing background completion handlers ([8ed9170](https://github.com/tidev/titanium_mobile/commit/8ed917063054e6a0ae2902fddd46ac9b0990e1e4))
* borderWidth renders at double thickness when borderRadius is an array ([aa5634a](https://github.com/tidev/titanium_mobile/commit/aa5634a355fc6e0cf87084ea1cd8459238a53d2e))
* emit tab focus separately from selected ([289599e](https://github.com/tidev/titanium_mobile/commit/289599ef809746999a889ae019b4830b204cb199))
* fix TableView search field position ([951667a](https://github.com/tidev/titanium_mobile/commit/951667a360ce83ed09388aeb7c9f8a68b61fb419))
* prevent icon animation in TabGroup when closing modal windows ([5588ea5](https://github.com/tidev/titanium_mobile/commit/5588ea5474a5d358f1ff79e4dc40c2a34b9f1078))
* tabgroup navigationwindow fix ([b07c4fa](https://github.com/tidev/titanium_mobile/commit/b07c4fa2dab7af58b4e62a7f8dd81a7cab5f6c56))
* textarea fix and feature enhancement ([0a6697b](https://github.com/tidev/titanium_mobile/commit/0a6697bede1615808bcbf8064c76100778361577))

## Features

### Android platform

* add deprecation note for old events in ScrollableView ([d8ea0fd](https://github.com/tidev/titanium_mobile/commit/d8ea0fd20bf9abae654d6087b970e26e844d0431))
* improve ImageView pinch & zoom ([5a7da1f](https://github.com/tidev/titanium_mobile/commit/5a7da1f1c7941dff07d5b22a9517380a61d72f56))
* optimize Ti.Preferences ([5a978f7](https://github.com/tidev/titanium_mobile/commit/5a978f7b1ba0edbd9bd980a427db6e487f1af7e0))
* use DisplayManager in OrientationMonitor ([79d9a6a](https://github.com/tidev/titanium_mobile/commit/79d9a6a79e314d75b0c27d3fa8236ebb5ade87d9))

### iOS platform

* remove ImageView remote image fade-in animation ([9ed25bc](https://github.com/tidev/titanium_mobile/commit/9ed25bc6a19b4f81ae8fc680247eb55921fb9bd6))
* support multi-scene applications ([14ee083](https://github.com/tidev/titanium_mobile/commit/14ee08339d0a6294c8a526fafbf1903c094d98bb))

### Multiple platforms

* support Xcode 27 and iOS 27 ([f648aea](https://github.com/tidev/titanium_mobile/commit/f648aea4f69ccb363c7c01fc37bee64772615889))

## SDK Module Versions

| Module      | Android version | iOS Version |
| ----------- | --------------- | ----------- |
| facebook | 15.0.0 | 16.0.0 |
| ti.map | 5.7.0 | 7.3.1 |
| ti.webdialog | 2.5.0 | 3.0.2 |
| ti.playservices | 18.6.0 | n/a |
| ti.identity | 3.2.0 | 5.0.0 |
| urlSession | n/a | 4.0.1 |
| ti.coremotion | n/a | 4.0.1 |
| ti.applesignin | n/a | 3.1.2 |
| hyperloop | 8.0.0 | 8.0.0 |