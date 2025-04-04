---
title: Titanium SDK 12.2.1.GA - 9 October 2023
weight: '18'
---

# Titanium SDK 12.2.1.GA Release Note

## Titanium SDK 12.2.1.GA - 9 October 2023

## About this release

Titanium SDK 12.2.1 is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release (12.2.0) is no longer supported.

## Community Credits

* Ahmed Eissa
  * (iOS) Fix app freezing when trying to hide & show popover repeatedly and popover layout issues ([f9fe9b7](https://github.com/tidev/titanium_mobile/commit/f9fe9b76a83415656079b724bca57b166ae6f5ff))

* narbs
  * [13922] fix(ios): request full access to calendar on ios17 to retain backward compatibility with ios16 (#13923) ([25ab480](https://github.com/tidev/titanium_mobile/commit/25ab480e676591cbb635fa41bf4364ce7614ce82))

* Michael Gangolf
  * ioslib 1.7.35 ([c6678d8](https://github.com/tidev/titanium_mobile/commit/c6678d849393bf6c0e8ca876a40ba502761d450e))
  * fix Android camera with overlay issues ([d56de28](https://github.com/tidev/titanium_mobile/commit/d56de28d2da32fe4adc174a5f527d163c55910b5))
  * update to new V8Snapshot generator ([ece412a](https://github.com/tidev/titanium_mobile/commit/ece412aff7c0c9ccccea59dbf0f67345f1bf0035))

* Hans Knöchel
  * fix crash in “backgroundRepeat”, replace deprecated API ([5ccea28](https://github.com/tidev/titanium_mobile/commit/5ccea2815a770c2b78d07017748049129a51f738))
  * fix crash when setting navTinColor during a view transition ([951877b](https://github.com/tidev/titanium_mobile/commit/951877b29c0655a2f2e9d053d25ddfcdf464c7dd))
  * revert video player change ([1a7e84b](https://github.com/tidev/titanium_mobile/commit/1a7e84b4e969f4afa0c2108f76b35f5b61146942))
  * bump version ([798523f](https://github.com/tidev/titanium_mobile/commit/798523f86b01fe8e5c1f47169d8c4d30838abb15))

## Bug Fixes

### Android platform

* fix Android camera with overlay issues ([d56de28](https://github.com/tidev/titanium_mobile/commit/d56de28d2da32fe4adc174a5f527d163c55910b5))

### iOS platform

* fix app freezing when trying to hide & show popover repeatedly and popover layout issues ([f9fe9b7](https://github.com/tidev/titanium_mobile/commit/f9fe9b76a83415656079b724bca57b166ae6f5ff))
* fix crash in “backgroundRepeat”, replace deprecated API ([5ccea28](https://github.com/tidev/titanium_mobile/commit/5ccea2815a770c2b78d07017748049129a51f738))
* fix crash when setting navTinColor during a view transition ([951877b](https://github.com/tidev/titanium_mobile/commit/951877b29c0655a2f2e9d053d25ddfcdf464c7dd))
* revert video player change ([1a7e84b](https://github.com/tidev/titanium_mobile/commit/1a7e84b4e969f4afa0c2108f76b35f5b61146942))

## SDK Module Versions

| Module      | Android version | iOS Version |
| ----------- | --------------- | ----------- |
| facebook | 12.1.0 | 14.0.0 |
| ti.map | 5.5.3 | 7.2.0 |
| ti.webdialog | 2.3.0 | 3.0.2 |
| ti.playservices | 18.2.0 | n/a |
| ti.identity | 3.1.0 | 5.0.0 |
| urlSession | n/a | 4.0.1 |
| ti.coremotion | n/a | 4.0.1 |
| ti.applesignin | n/a | 3.1.2 |
| hyperloop | 7.0.5 | 7.0.5 |
