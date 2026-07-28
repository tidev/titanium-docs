---
title: Titanium SDK 13.4.0.GA - 28 July 2026
weight: '10'
---

## About this release

Titanium SDK 13.4.0 is a minor release of the SDK, preparing the SDK for Android target SDK 36 and addressing high-priority issues from previous releases, including v8 memory cleanup, Windows build path fixes and an iOS TableView SearchBar fix.

As of this GA release, the previous Titanium SDK patch release (13.3.1) is no longer supported.

## Community Credits

* Michael Gangolf
  * v8 memory cleanup ([3a36752](https://github.com/tidev/titanium_mobile/commit/3a367526a2bb90060d9eae80912edace680f68c7))
  * adjust paths for Windows builds ([82ed118](https://github.com/tidev/titanium_mobile/commit/82ed1180c08cc99b024bedab68a204f97b376fcf))
  * fix dimming area in TableView Searchbar ([defb08e](https://github.com/tidev/titanium_mobile/commit/defb08e36d24d2b0b41698a18b49fa35aa7ad531))
  * prepare SDK for Android target SDK 36 ([c999ec6](https://github.com/tidev/titanium_mobile/commit/c999ec62f3c7a5865d517ab6f9c59a89f37e5d71))

* Marc Bender
  * override Window.rect to reflect pre-open left/top ([0f64874](https://github.com/tidev/titanium_mobile/commit/0f6487495191042839b02871e16f625e8d7b5ab8))

* Hans Knöchel
  * remove debug-only selector for Ti.App._restart() method ([236c9a0](https://github.com/tidev/titanium_mobile/commit/236c9a0704199d46dbfac926281edf8be712075e))
  * bump to 13.4.0 ([4cbb961](https://github.com/tidev/titanium_mobile/commit/4cbb9615cafe4e8c045bea3bb74f8a89aacd4646))

## Bug Fixes

### Android platform

* adjust paths for Windows builds ([82ed118](https://github.com/tidev/titanium_mobile/commit/82ed1180c08cc99b024bedab68a204f97b376fcf))
* override Window.rect to reflect pre-open left/top ([0f64874](https://github.com/tidev/titanium_mobile/commit/0f6487495191042839b02871e16f625e8d7b5ab8))
* v8 memory cleanup ([3a36752](https://github.com/tidev/titanium_mobile/commit/3a367526a2bb90060d9eae80912edace680f68c7))

### iOS platform

* fix dimming area in TableView Searchbar ([defb08e](https://github.com/tidev/titanium_mobile/commit/defb08e36d24d2b0b41698a18b49fa35aa7ad531))

### Multiple platforms

* remove debug-only selector for Ti.App._restart() method ([236c9a0](https://github.com/tidev/titanium_mobile/commit/236c9a0704199d46dbfac926281edf8be712075e))

## Features

### Android platform

* prepare SDK for Android target SDK 36 ([c999ec6](https://github.com/tidev/titanium_mobile/commit/c999ec62f3c7a5865d517ab6f9c59a89f37e5d71))

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
| hyperloop | 8.0.1 | 8.0.1 |
