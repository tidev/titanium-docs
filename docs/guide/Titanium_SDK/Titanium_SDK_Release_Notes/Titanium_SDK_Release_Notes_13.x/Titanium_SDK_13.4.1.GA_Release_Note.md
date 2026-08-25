---
title: Titanium SDK 13.4.1.GA - 25 August 2026
weight: '10'
---

## About this release

Titanium SDK 13.4.1 is a patch release of the SDK, addressing high-priority issues from previous releases, including keyboard issues in BottomNavigation on Android and a possible deadlock when opening windows on iOS.

As of this GA release, the previous Titanium SDK patch release (13.4.0) is no longer supported.

## Community Credits

* Michael Gangolf
  * keyboard issues in BottomNavigation and `androidback` issue ([ef44640](https://github.com/tidev/titanium_mobile/commit/ef44640f9501807decc70377d1b8ff246d9fa554))

* Hans Knöchel
  * fix possible deadlock when opening window ([2957c43](https://github.com/tidev/titanium_mobile/commit/2957c4361b67709fb5131811c87e4c7c17429869))
  * bump version ([98531c3](https://github.com/tidev/titanium_mobile/commit/98531c3962aa7b0b0b31db21821dba0acb7a5f03))

## Bug Fixes

### Android platform

* keyboard issues in BottomNavigation and `androidback` issue ([ef44640](https://github.com/tidev/titanium_mobile/commit/ef44640f9501807decc70377d1b8ff246d9fa554))

### iOS platform

* fix possible deadlock when opening window ([2957c43](https://github.com/tidev/titanium_mobile/commit/2957c4361b67709fb5131811c87e4c7c17429869))

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
