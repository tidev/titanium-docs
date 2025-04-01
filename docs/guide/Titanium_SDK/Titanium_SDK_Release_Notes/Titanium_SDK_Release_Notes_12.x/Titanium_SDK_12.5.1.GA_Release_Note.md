---
title: Titanium SDK 12.5.1.GA - 02 October 2024
weight: '28'
---

# Titanium SDK 12.5.1.GA Release Note

## Titanium SDK 12.5.1.GA - 02 October 2024

## About this release

Titanium SDK 12.5.1 is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release (12.5.0) is no longer supported.

## Community Credits

* Hans Knöchel
  * update ioslib to 1.7.38 to fix incremental builds in Xcode 16 ([a72b174](https://github.com/tidev/titanium_mobile/commit/a72b174030844f48b3bc173a13cb55ad639d31b9))
  * update ioslib to 1.7.39 to support Xcode 16 provisioning profile handling ([a762523](https://github.com/tidev/titanium_mobile/commit/a762523f887c458f4312db8d664dbe33abb45d65))
  * update compatibility for iOS 18+ and Xcode 16+ ([a55e6a8](https://github.com/tidev/titanium_mobile/commit/a55e6a8929a654dc8fbba53f810930f75b9c9891))

* Prashant Saini
  * marker event was only triggered for first and last visible section items ([edc6163](https://github.com/tidev/titanium_mobile/commit/edc6163ed1a6e267e3022d6f8aa1e0ff09999013))
  * ListView has empty cells while scrolling up/down (#14119) ([d4abe90](https://github.com/tidev/titanium_mobile/commit/d4abe90817a7b971c9b3ac77149635277c4923c2))

* Michael Gangolf
  * allow ignoreLog to be a single string ([15b0eb6](https://github.com/tidev/titanium_mobile/commit/15b0eb64f8fec642b51895ccca7f7922704f1f33))
  * fix ListView layout with header and footer only ([3012280](https://github.com/tidev/titanium_mobile/commit/3012280a418bc354bbfb7c1762ca0a241e696131))

## Bug Fixes

### Multiple platforms

* allow ignoreLog to be a single string ([15b0eb6](https://github.com/tidev/titanium_mobile/commit/15b0eb64f8fec642b51895ccca7f7922704f1f33))
* update ioslib to 1.7.38 to fix incremental builds in Xcode 16 ([a72b174](https://github.com/tidev/titanium_mobile/commit/a72b174030844f48b3bc173a13cb55ad639d31b9))

### Android platform

* fix ListView layout with header and footer only ([3012280](https://github.com/tidev/titanium_mobile/commit/3012280a418bc354bbfb7c1762ca0a241e696131))
* fix toString() call when adb devices fails ([a6870b9](https://github.com/tidev/titanium_mobile/commit/a6870b9eca47f3e78f96f6c3c11f42dc7f42ffa4))

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
