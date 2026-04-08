---
title: Titanium SDK 13.2.0.GA - 08 April 2026
weight: '10'
---

## About this release

Titanium SDK 13.2.0 is a minor release of the SDK, focusing on quality-of-life improvements, e.g. iOS core changes, Node.js 24 support and several Android bug fixes!

As of this GA release, the previous Titanium SDK patch release (13.1.1) is no longer supported.

## Community Credits

* César Estrada
  * fix Ti.UI.Button styling and events on Mac Catalyst ([1897d79](https://github.com/tidev/titanium_mobile/commit/1897d7961436ac0f36b0aacb495b2097a62dd949))
  * support module builds with mac=true on Catalyst ([dd2899b](https://github.com/tidev/titanium_mobile/commit/dd2899b9de0e37acbd5f1ce56fc3110a51b82f2c))

* Michael Gangolf
  * null pointer check in cpp files ([76aff13](https://github.com/tidev/titanium_mobile/commit/76aff13943084d6eef936be0686937498c6d76f6))
  * fix endless loop in setLanguage pre API 33 ([c48cf78](https://github.com/tidev/titanium_mobile/commit/c48cf780bf3ce7835d4c58fc10efaff2e6aa489f))
  * keepHardwareMode property in Ti.UI.View ([3d03db0](https://github.com/tidev/titanium_mobile/commit/3d03db0baa533328deead4c698314a12c84e9fc8))
  * cache ListView searchText ([2e7fa1f](https://github.com/tidev/titanium_mobile/commit/2e7fa1fc9a64fc81714598bd96973b16da41aeef))
  * move ScrollableView to ViewPager2 ([8f2359b](https://github.com/tidev/titanium_mobile/commit/8f2359b9b093c32ed96befc9c6dc967a02ce131b))
  * update internal Android libraries ([2f7ed0c](https://github.com/tidev/titanium_mobile/commit/2f7ed0cc1ea8e5cf11ff2ed383baf2181772f0b0))
  * support for AttributedString objects ([a753fc2](https://github.com/tidev/titanium_mobile/commit/a753fc2d362a44658dfcec2f57f3250b078b0a5e))
  * use ConcurrentHashMap in TiRhelper and TiUIHelper ([5198d50](https://github.com/tidev/titanium_mobile/commit/5198d501da074b10a4cd5acd55b70b666d7d9fa5))
  * pre-compile regex patterns ([2653a62](https://github.com/tidev/titanium_mobile/commit/2653a62e8e1e396b20635e826994276547052384))
  * use i18n app name in AndroidManifest ([ce0dc80](https://github.com/tidev/titanium_mobile/commit/ce0dc8017994d5b35d09231e0204463e73a54839))
  * upgrade core-js to remove baseline-browser-mapping warning ([de4eb55](https://github.com/tidev/titanium_mobile/commit/de4eb55af06c6c86bf47e4844de2758b1845d0fc))
  * doc github worklow ([5dd1d65](https://github.com/tidev/titanium_mobile/commit/5dd1d6511847b2b625a3bebd20239cbf636e02f9))
  * add Alloy app to create menu ([3016623](https://github.com/tidev/titanium_mobile/commit/30166236297d6002dcffa42514ac54a92726b859))

* Hans Knöchel
  * modernize kroll core with GCD ([6c24372](https://github.com/tidev/titanium_mobile/commit/6c24372fb056cc33f2dffc04674e3725ee6e4374))
  * fix image blob memory issues ([cef7d46](https://github.com/tidev/titanium_mobile/commit/cef7d465cf1c3cd6bfaa0ab960e88eabc911db66))
  * add AGENTS.md and CLAUDE.md ([e7d7edf](https://github.com/tidev/titanium_mobile/commit/e7d7edf1742f35eb06d34e595f59d4ec88bf8454))
  * add web view API to hide input accessory views ([b48b6d1](https://github.com/tidev/titanium_mobile/commit/b48b6d14212661f8bd359423f8dd7a6193c223cf))
  * bump master to 13.2.0 ([75ebb28](https://github.com/tidev/titanium_mobile/commit/75ebb2806bfee677fd4dd626f0ba1610f5f61ebc))

* Prashant Saini
  * allow image to drag horizontally inside a ScrollableView ([3929e28](https://github.com/tidev/titanium_mobile/commit/3929e28ead6d436c9f51755633bbe2692ab287f8))

* Chris Barber
  * Switch to oxlint (#14394) ([b8e2b3c](https://github.com/tidev/titanium_mobile/commit/b8e2b3c078148d41b93976ee9f40d745ea19c378))


## Bug Fixes

### Android platform

* allow image to drag horizontally inside a ScrollableView ([3929e28](https://github.com/tidev/titanium_mobile/commit/3929e28ead6d436c9f51755633bbe2692ab287f8))
* fix endless loop in setLanguage pre API 33 ([c48cf78](https://github.com/tidev/titanium_mobile/commit/c48cf780bf3ce7835d4c58fc10efaff2e6aa489f))
* fix image blob memory issues ([cef7d46](https://github.com/tidev/titanium_mobile/commit/cef7d465cf1c3cd6bfaa0ab960e88eabc911db66))
* null pointer check in cpp files ([76aff13](https://github.com/tidev/titanium_mobile/commit/76aff13943084d6eef936be0686937498c6d76f6))
* use i18n app name in AndroidManifest ([ce0dc80](https://github.com/tidev/titanium_mobile/commit/ce0dc8017994d5b35d09231e0204463e73a54839))

### iOS platform

* fix Ti.UI.Button styling and events on Mac Catalyst ([1897d79](https://github.com/tidev/titanium_mobile/commit/1897d7961436ac0f36b0aacb495b2097a62dd949))
* support module builds with mac=true on Catalyst ([dd2899b](https://github.com/tidev/titanium_mobile/commit/dd2899b9de0e37acbd5f1ce56fc3110a51b82f2c))

### Multiple platforms

* upgrade core-js to remove baseline-browser-mapping warning ([de4eb55](https://github.com/tidev/titanium_mobile/commit/de4eb55af06c6c86bf47e4844de2758b1845d0fc))

## Features

### Multiple platforms

* add web view API to hide input accessory views ([b48b6d1](https://github.com/tidev/titanium_mobile/commit/b48b6d14212661f8bd359423f8dd7a6193c223cf))
* add Alloy app to create menu ([3016623](https://github.com/tidev/titanium_mobile/commit/30166236297d6002dcffa42514ac54a92726b859))
* support for AttributedString objects ([a753fc2](https://github.com/tidev/titanium_mobile/commit/a753fc2d362a44658dfcec2f57f3250b078b0a5e))

### Android platform

* cache ListView searchText ([2e7fa1f](https://github.com/tidev/titanium_mobile/commit/2e7fa1fc9a64fc81714598bd96973b16da41aeef))
* keepHardwareMode property in Ti.UI.View ([3d03db0](https://github.com/tidev/titanium_mobile/commit/3d03db0baa533328deead4c698314a12c84e9fc8))
* move ScrollableView to ViewPager2 ([8f2359b](https://github.com/tidev/titanium_mobile/commit/8f2359b9b093c32ed96befc9c6dc967a02ce131b))
* pre-compile regex patterns ([2653a62](https://github.com/tidev/titanium_mobile/commit/2653a62e8e1e396b20635e826994276547052384))
* use ConcurrentHashMap in TiRhelper and TiUIHelper ([5198d50](https://github.com/tidev/titanium_mobile/commit/5198d501da074b10a4cd5acd55b70b666d7d9fa5))

## SDK Module Versions

| Module      | Android version | iOS Version |
| ----------- | --------------- | ----------- |
| facebook | 14.0.0 | 15.0.0 |
| ti.map | 5.7.0 | 7.3.1 |
| ti.webdialog | 2.5.0 | 3.0.2 |
| ti.playservices | 18.6.0 | n/a |
| ti.identity | 3.2.0 | 5.0.0 |
| urlSession | n/a | 4.0.1 |
| ti.coremotion | n/a | 4.0.1 |
| ti.applesignin | n/a | 3.1.2 |
| hyperloop | 7.1.0 | 7.1.0 |