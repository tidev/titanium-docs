---
title: Titanium SDK 12.6.2.GA - 03 February 2025
weight: '32'
---

# Titanium SDK 12.6.2.GA Release Note

## Titanium SDK 12.6.2.GA - 03 February 2025

## About this release

Titanium SDK 12.6.2 is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release (12.6.1) is no longer supported.

## Community Credits

* Michael Gangolf
  * fix crash when using window.add([]) with a null object ([506bad4](https://github.com/tidev/titanium_mobile/commit/506bad4d8de3b2111daf7557ee051f648bae1905))
  * make android mocha tests run again ([31ae72d](https://github.com/tidev/titanium_mobile/commit/31ae72dfc73389f7977d08a4afd5d812f42be803))
  * missing null checks in Ti.UI.Label methods ([0015ff1](https://github.com/tidev/titanium_mobile/commit/0015ff1bdbc8df99b775d6355d7ac7295a099213))
  * fix tableView parent ([9d419d8](https://github.com/tidev/titanium_mobile/commit/9d419d89ba92c86cb30d90c36607cada56d04fd9))
  * fix path error on Windows module builds ([73e4120](https://github.com/tidev/titanium_mobile/commit/73e4120ef88e28b2435aa52c8a79d440feb28a81))
  * expose uiFlags ([cbb0998](https://github.com/tidev/titanium_mobile/commit/cbb099811b6a687b78f5ec592dc024a6f6fa4b7b))

* Prashant Saini
  * fix global header/footer title in ListView ([1cac525](https://github.com/tidev/titanium_mobile/commit/1cac525fef9b518e4146ef77ec73eb4fbd39db0f))

* Hans Knöchel
  * restore old scons dependencies to fix local Xcode build ([14d054a](https://github.com/tidev/titanium_mobile/commit/14d054a7b09ea128ffe2917b7853e7fbbda1d14d))
  * fix plist entry entry for non-existing fonts ([2cf5a8e](https://github.com/tidev/titanium_mobile/commit/2cf5a8e89cda4848111cbefae99c00036dca2069))


## Bug Fixes

### Android platform

* fix crash when using window.add([]) with a null object ([506bad4](https://github.com/tidev/titanium_mobile/commit/506bad4d8de3b2111daf7557ee051f648bae1905))
* fix global header/footer title in ListView ([1cac525](https://github.com/tidev/titanium_mobile/commit/1cac525fef9b518e4146ef77ec73eb4fbd39db0f))
* fix path error on Windows module builds ([73e4120](https://github.com/tidev/titanium_mobile/commit/73e4120ef88e28b2435aa52c8a79d440feb28a81))
* fix tableView parent ([9d419d8](https://github.com/tidev/titanium_mobile/commit/9d419d89ba92c86cb30d90c36607cada56d04fd9))
* missing null checks in Ti.UI.Label methods ([0015ff1](https://github.com/tidev/titanium_mobile/commit/0015ff1bdbc8df99b775d6355d7ac7295a099213))

### Multiple platforms

* restore old scons dependencies to fix local Xcode build ([14d054a](https://github.com/tidev/titanium_mobile/commit/14d054a7b09ea128ffe2917b7853e7fbbda1d14d))
* fix plist entry entry for non-existing fonts ([2cf5a8e](https://github.com/tidev/titanium_mobile/commit/2cf5a8e89cda4848111cbefae99c00036dca2069))
* make android mocha tests run again ([31ae72d](https://github.com/tidev/titanium_mobile/commit/31ae72dfc73389f7977d08a4afd5d812f42be803))

## Features

### Android platform

* expose uiFlags ([cbb0998](https://github.com/tidev/titanium_mobile/commit/cbb099811b6a687b78f5ec592dc024a6f6fa4b7b))


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
