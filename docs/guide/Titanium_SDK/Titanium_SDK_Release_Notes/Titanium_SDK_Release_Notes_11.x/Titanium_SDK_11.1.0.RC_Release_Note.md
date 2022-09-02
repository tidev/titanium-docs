---
title: Titanium SDK 11.1.0.RC - 29 August 2022
weight: '10'
---

# Titanium SDK 11.1.0.RC Release Note

## Titanium SDK 11.1.0.RC - 29 August 2022

## About this release

Titanium SDK 11.1.0 is a minor release of the SDK, addressing high-priority issues from previous releases.


## Community Credits

* Michael Gangolf
  * add autoSize to label ([703c760](https://github.com/tidev/titanium_mobile/commit/703c760aa64799cfed49926af2af46cea1e4261a))
  * snackbar ([59fd9fe](https://github.com/tidev/titanium_mobile/commit/59fd9fe764a0299f781ce0b6d30c8cb824bd983b))
  * continuous update for ListView scrolling event ([74b00ce](https://github.com/tidev/titanium_mobile/commit/74b00ce2b37f3fab45d5fe0c53b0033a2b999b53))
  * add headingTime, fix headingFilter ([6170a1e](https://github.com/tidev/titanium_mobile/commit/6170a1e007ca76cf017e8459afa16c5567234ef1))
  * add position to TableView scrollToIndex ([bed6382](https://github.com/tidev/titanium_mobile/commit/bed638257360ae8f4ef0079930f3717f6e3b01b6))
  * add Slider style example ([9aeff5d](https://github.com/tidev/titanium_mobile/commit/9aeff5d8abece7d4258af66912b9c66166aeb62a))
  * textfield padding ([dcdfce5](https://github.com/tidev/titanium_mobile/commit/dcdfce50f823b90dd7fff4dc92a74e798acf86e7))
  * null check in DisplayCapsProxy ([d60baec](https://github.com/tidev/titanium_mobile/commit/d60baeca1cd105b74c2ca225c370458ba4dcfe7c))
  * add install failed error message ([e5c8391](https://github.com/tidev/titanium_mobile/commit/e5c83912ffe83ef4e67a12954869957d15b771cf))
  * Parity for Ti.UI.ListViewScrollPosition.* / Ti.UI.TableViewScrollPosition.* on iOS/Android ([8cea843](https://github.com/tidev/titanium_mobile/commit/8cea843e92c439e28e165d22fea51e874d0b3cf0))
  * fix some tests ([8dac17b](https://github.com/tidev/titanium_mobile/commit/8dac17bd087a50988b577cda2e1df5a360c9242d))
  * update support libraries ([2958575](https://github.com/tidev/titanium_mobile/commit/29585759c29e524a531c3af2f7b4a23462d5ea28))
  * viewShadowColor parity ([63b70fd](https://github.com/tidev/titanium_mobile/commit/63b70fdde57c7453653f8e10ae2b9955632fe5ee))
  * update node-appc ([10c2332](https://github.com/tidev/titanium_mobile/commit/10c2332060a884b813aa38e605a519053a28d4d1))

* Hans Knöchel
  * require “canMove” property to be true ([f202a6e](https://github.com/tidev/titanium_mobile/commit/f202a6edba1292bcfcead562274f3319ec868edc))
  * move “movestart” event call to a better place ([be725e2](https://github.com/tidev/titanium_mobile/commit/be725e204b7f0141d45ccc09e3149c8830307c79))
  * fix navigation items in tab group layout ([d02580b](https://github.com/tidev/titanium_mobile/commit/d02580b2cf3b57e436840b09b4a6e09c4e6cd4c9))
  * fix tabgroup layout on iOS 16+ ([5afeee0](https://github.com/tidev/titanium_mobile/commit/5afeee071c1e95de03290fa25c28e48a6a2a1d59))
  * add more context to list view cell warning ([43faca2](https://github.com/tidev/titanium_mobile/commit/43faca25468de87664996998db91ce3b78368d37))
  * Revert "fix(android): textfield padding (#13279)" (#13512) ([918388a](https://github.com/tidev/titanium_mobile/commit/918388a75a98c3f5458d27f6ed035f11883b303e))
  * add „movestart“ and "moveend" events to drag and drop ([31d8194](https://github.com/tidev/titanium_mobile/commit/31d819496b5d8ec95d4e5df250de487697786df1))
  * fix asset catalog regression ([48208e3](https://github.com/tidev/titanium_mobile/commit/48208e3647ab6ac7b33fefa6e3a692ddc589d548))
  * be able to drag and drop without explicit editing mode ([a742403](https://github.com/tidev/titanium_mobile/commit/a7424036b8316ba4c8cb1cce37eafee7a444262a))
  * fix nil-check for remote cache ([2e2cff4](https://github.com/tidev/titanium_mobile/commit/2e2cff4a5f7e1cec0b4eefcc0e841e6cc49c4fe8))
  * fix Ti.UI.ListView scroll state restoration ([6f96424](https://github.com/tidev/titanium_mobile/commit/6f964247458bbb86528ca037d9582a6bde3004b9))
  * update facebook SDK’s ([879be32](https://github.com/tidev/titanium_mobile/commit/879be32dbad2962d8bd1d3be5bbaa21a6314f108))
  * update ioslib to 1.7.29 ([293152e](https://github.com/tidev/titanium_mobile/commit/293152ed85784317363a92686f1f1df0a1f817e4))
  * bump master to 11.1.0 ([e6a8f43](https://github.com/tidev/titanium_mobile/commit/e6a8f438a4e7e1ba2ef1d38c91de65951a1cd608))

* Marc Bender
  * add option to exclude dir(s) from compiling to assests catalog … ([d0ab654](https://github.com/tidev/titanium_mobile/commit/d0ab6546c69533e4be4bf988c437f0d77cddcff5))

## Bug Fixes

### iOS platform

* require “canMove” property to be true ([f202a6e](https://github.com/tidev/titanium_mobile/commit/f202a6edba1292bcfcead562274f3319ec868edc))
* fix asset catalog regression ([48208e3](https://github.com/tidev/titanium_mobile/commit/48208e3647ab6ac7b33fefa6e3a692ddc589d548))
* fix tabgroup layout on iOS 16+ ([5afeee0](https://github.com/tidev/titanium_mobile/commit/5afeee071c1e95de03290fa25c28e48a6a2a1d59))

### Multiple platforms

* move “movestart” event call to a better place ([be725e2](https://github.com/tidev/titanium_mobile/commit/be725e204b7f0141d45ccc09e3149c8830307c79))
* fix navigation items in tab group layout ([d02580b](https://github.com/tidev/titanium_mobile/commit/d02580b2cf3b57e436840b09b4a6e09c4e6cd4c9))
* fix nil-check for remote cache ([2e2cff4](https://github.com/tidev/titanium_mobile/commit/2e2cff4a5f7e1cec0b4eefcc0e841e6cc49c4fe8))
* fix some tests ([8dac17b](https://github.com/tidev/titanium_mobile/commit/8dac17bd087a50988b577cda2e1df5a360c9242d))

### Android platform

* fix Ti.UI.ListView scroll state restoration ([6f96424](https://github.com/tidev/titanium_mobile/commit/6f964247458bbb86528ca037d9582a6bde3004b9))
* null check in DisplayCapsProxy ([d60baec](https://github.com/tidev/titanium_mobile/commit/d60baeca1cd105b74c2ca225c370458ba4dcfe7c))
* textfield padding ([dcdfce5](https://github.com/tidev/titanium_mobile/commit/dcdfce50f823b90dd7fff4dc92a74e798acf86e7))

## Features

### Multiple platforms

* update node-appc ([10c2332](https://github.com/tidev/titanium_mobile/commit/10c2332060a884b813aa38e605a519053a28d4d1))
* continuous update for ListView scrolling event ([74b00ce](https://github.com/tidev/titanium_mobile/commit/74b00ce2b37f3fab45d5fe0c53b0033a2b999b53))
* be able to drag and drop without explicit editing mode ([a742403](https://github.com/tidev/titanium_mobile/commit/a7424036b8316ba4c8cb1cce37eafee7a444262a))
* add option to exclude dir(s) from compiling to assests catalog … ([d0ab654](https://github.com/tidev/titanium_mobile/commit/d0ab6546c69533e4be4bf988c437f0d77cddcff5))
* Parity for Ti.UI.ListViewScrollPosition.* / Ti.UI.TableViewScrollPosition.* on iOS/Android ([8cea843](https://github.com/tidev/titanium_mobile/commit/8cea843e92c439e28e165d22fea51e874d0b3cf0))
* update facebook SDK’s ([879be32](https://github.com/tidev/titanium_mobile/commit/879be32dbad2962d8bd1d3be5bbaa21a6314f108))

### Android platform

* add autoSize to label ([703c760](https://github.com/tidev/titanium_mobile/commit/703c760aa64799cfed49926af2af46cea1e4261a))
* add headingTime, fix headingFilter ([6170a1e](https://github.com/tidev/titanium_mobile/commit/6170a1e007ca76cf017e8459afa16c5567234ef1))
* add position to TableView scrollToIndex ([bed6382](https://github.com/tidev/titanium_mobile/commit/bed638257360ae8f4ef0079930f3717f6e3b01b6))
* snackbar ([59fd9fe](https://github.com/tidev/titanium_mobile/commit/59fd9fe764a0299f781ce0b6d30c8cb824bd983b))
* update support libraries ([2958575](https://github.com/tidev/titanium_mobile/commit/29585759c29e524a531c3af2f7b4a23462d5ea28))
* viewShadowColor parity ([63b70fd](https://github.com/tidev/titanium_mobile/commit/63b70fdde57c7453653f8e10ae2b9955632fe5ee))

### iOS platform

* add install failed error message ([e5c8391](https://github.com/tidev/titanium_mobile/commit/e5c83912ffe83ef4e67a12954869957d15b771cf))
* redesigned error view ([b8a14b3](https://github.com/tidev/titanium_mobile/commit/b8a14b3d6af920694a2bf0837d2e741a6ae13d19))

## BREAKING CHANGES


## SDK Module Versions

| Module      | Android version | iOS Version |
| ----------- | --------------- | ----------- |
| facebook | 11.2.0 | 12.1.0 |
| ti.map | 5.3.4 | 6.0.1 |
| ti.webdialog | 2.2.0 | 3.0.2 |
| ti.playservices | 17.5.0 | n/a |
| ti.identity | 3.1.0 | 4.0.1 |
| urlSession | n/a | 4.0.1 |
| ti.coremotion | n/a | 4.0.1 |
| ti.applesignin | n/a | 3.1.1 |
| hyperloop | 7.0.4 | 7.0.4 |
