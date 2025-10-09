---
title: Titanium SDK 12.8.0.GA - 17 July 2025
weight: '19'
---

# Titanium SDK 12.8.0.GA Release Note

## About this release

Titanium SDK 12.8.0 is a minor release of the SDK, adding target compatibility for Android SDK level 35 as well as several bug fixes
and improvements around iOS and Android.

## Community Credits

* Prashant Saini
  * apply required null checks on TiUIEditText ([33fa05a](https://github.com/tidev/titanium_mobile/commit/33fa05a77fddcd6f78ba345e71318caad987126f))
  * try to fix the tab-group crash on some devices ([d21e7ae](https://github.com/tidev/titanium_mobile/commit/d21e7ae1da3a27859d5b43e811faeb07eef027aa))

* Michael Gangolf
  * target Android SDK level 35 ([92f6826](https://github.com/tidev/titanium_mobile/commit/92f682649a55c4af940510694b68c21c0a5166fb))
  * option to remove X-Titanium-Id in request header ([6b2d33b](https://github.com/tidev/titanium_mobile/commit/6b2d33b0a9cde1adff15ba3864a505a9a0d54719))
  * skip building module parameter ([6b447e4](https://github.com/tidev/titanium_mobile/commit/6b447e4bd51e8795b8ffc8b1d1b57c730c444f8d))
  * rotation value ([db91edf](https://github.com/tidev/titanium_mobile/commit/db91edf813e8986168452fbb4e6bf49519b776ab))

* Hans Knöchel
  * remove outdated iOS SDK macros, add iOS 26+ macro ([ef1c67a](https://github.com/tidev/titanium_mobile/commit/ef1c67a5ce2d6954e8620b2053bfdef48259cafb))
  * bump main to 12.8.0 ([284d274](https://github.com/tidev/titanium_mobile/commit/284d2744db849aa43e36b718ec0bc33e527ba92b))

## Bug Fixes

### Android platform

* apply required null checks on TiUIEditText ([33fa05a](https://github.com/tidev/titanium_mobile/commit/33fa05a77fddcd6f78ba345e71318caad987126f))
* rotation value ([db91edf](https://github.com/tidev/titanium_mobile/commit/db91edf813e8986168452fbb4e6bf49519b776ab))
* try to fix the tab-group crash on some devices ([d21e7ae](https://github.com/tidev/titanium_mobile/commit/d21e7ae1da3a27859d5b43e811faeb07eef027aa))

## Features

### Android platform

* skip building module parameter ([6b447e4](https://github.com/tidev/titanium_mobile/commit/6b447e4bd51e8795b8ffc8b1d1b57c730c444f8d))
* target Android SDK level 35 ([92f6826](https://github.com/tidev/titanium_mobile/commit/92f682649a55c4af940510694b68c21c0a5166fb))

### Multiple platforms

* option to remove X-Titanium-Id in request header ([6b2d33b](https://github.com/tidev/titanium_mobile/commit/6b2d33b0a9cde1adff15ba3864a505a9a0d54719))

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