---
title: Titanium SDK 12.2.0.GA - 15 September 2023
weight: '19'
---

# Titanium SDK 12.2.0.GA Release Note

## Titanium SDK 12.2.0.GA - 15 September 2023

## About this release

Titanium SDK 12.2.0 is a minor release of the SDK, adding new features to the platform. The focus of this release is the full support of Xcode 15
and iOS 17, as well as several performance improvements across both platforms (iOS & Android).

## Community Credits

* Michael Gangolf
  * update ti.webdialog ([07f10b8](https://github.com/tidev/titanium_mobile/commit/07f10b8395bd7fded4c17ff8ce82b6868062b181))
  * update ioslib to 1.7.34 ([07f464f](https://github.com/tidev/titanium_mobile/commit/07f464f6c29a9dda00447e632e26cd7f307667cf))
  * reduce tableView updates ([c76535a](https://github.com/tidev/titanium_mobile/commit/c76535a4e7714dd01d7dadfddf7606c1d3a9fac9))
  * make tabBarVisible work at creation ([5d07f5c](https://github.com/tidev/titanium_mobile/commit/5d07f5c430f3f1cc4832a6df4e939270831e781f))
  * add `forceUpdates` propterty to listView to improve scrolling event ([f954ae7](https://github.com/tidev/titanium_mobile/commit/f954ae76fe531ea8dc08ff3865decdb5e5cc7cbb))
  * add rotation to blob ([56bd00c](https://github.com/tidev/titanium_mobile/commit/56bd00c98be372558b27e520ce2c0f86cb030656))
  * ioslib update ([c7154f7](https://github.com/tidev/titanium_mobile/commit/c7154f7c54f878cae335fb4bfb09648c010c57d0))
  * fix some tests ([8b998f4](https://github.com/tidev/titanium_mobile/commit/8b998f4ec8f1e76bb53f970ff4239efcbbabf175))
  * add tabMode to TabGroup ([322b78d](https://github.com/tidev/titanium_mobile/commit/322b78dd01623d957c68455383940134a308efac))
  * badgeTextColor property ([c591f9c](https://github.com/tidev/titanium_mobile/commit/c591f9c26fe8d3c25406ec6767c73ef12804e406))
  * enable webview inspection ([8061acd](https://github.com/tidev/titanium_mobile/commit/8061acdc2a985c43e4396c715eaa061c3f4770bc))
  * clean up propertyAccessors ([5f33b2f](https://github.com/tidev/titanium_mobile/commit/5f33b2f42cc0577b4b587ce701db8f9de981f610))
  * update ti.map (android) ([18f087d](https://github.com/tidev/titanium_mobile/commit/18f087d7df6d5900c0f40679dbd422cb3d371745))
  * secure Ti.Network.Socket ([0f5743d](https://github.com/tidev/titanium_mobile/commit/0f5743d8975c219cfdf0753e23c4e0c4315ac4b4))
  * replace titanium_mobile URLs ([ffebf85](https://github.com/tidev/titanium_mobile/commit/ffebf853b033a1ac5085433a2a85391f240c80cd))
  * remove X-Requested-With header from HTTP requests ([67ba7a6](https://github.com/tidev/titanium_mobile/commit/67ba7a63b9c9c713631d710986f6d93147939fec))
  * optimize test output ([8c67faf](https://github.com/tidev/titanium_mobile/commit/8c67fafb8b2b97524f2c7daef086ba17215ef390))
  * update android dependencies ([a30b031](https://github.com/tidev/titanium_mobile/commit/a30b03121dee67a7ced8e23db7a027a10fa7cf0d))
  * fixed rows in filtered results ([bb23609](https://github.com/tidev/titanium_mobile/commit/bb23609362479ea51deab620e830b6d5c851f52b))
  * make rotationX, rotationY animatable ([bfa2bc5](https://github.com/tidev/titanium_mobile/commit/bfa2bc536c779a3c111d96cc39d42752d40e45fc))
  * use cameraX ([e68d33a](https://github.com/tidev/titanium_mobile/commit/e68d33a86c05ec0dcff173128e2b3b05817fec41))
  * remove old example ([a58a7f8](https://github.com/tidev/titanium_mobile/commit/a58a7f8a31493d929cbb8f0719c6f3009da42c9a))
  * fix Android clipboard test ([58932b1](https://github.com/tidev/titanium_mobile/commit/58932b195fc0751476db0fa1af3bbc9759f734e2))
  * github actions ([0457e2c](https://github.com/tidev/titanium_mobile/commit/0457e2c49f6cb45d19b092c79f381e235f735c45))
  * update ubuntu in github action ([6f50bc3](https://github.com/tidev/titanium_mobile/commit/6f50bc38965cd8d7cf8d57a01e0bbff1d8d933d4))

* Hans Knöchel
  * update ti.map (iOS & Android) ([4f34fb1](https://github.com/tidev/titanium_mobile/commit/4f34fb18276ffbfa8c5be0a9ac188719e5a8d333))
  * update ioslib to 1.7.33 ([aef7a34](https://github.com/tidev/titanium_mobile/commit/aef7a3438e130677ade2f9cd773a99f72815b7d7))
  * modernize Apple Script to open Xcode ([44e7651](https://github.com/tidev/titanium_mobile/commit/44e7651822fa7ab6a6b572f7353a3a8b596861f7))
  * fix catalyst build ([552b835](https://github.com/tidev/titanium_mobile/commit/552b835b7e34fa628d4b43061b98504911cf3004))
  * update Facebook SDKs ([521a3ee](https://github.com/tidev/titanium_mobile/commit/521a3eed1eda85c531ba7869720faecb2d5effd1))
  * add changelog ([a75fcc5](https://github.com/tidev/titanium_mobile/commit/a75fcc5342a85e8fce8b8300a61ef48f1c203595))
  * support DRM-encrypted video assets ([d4cd040](https://github.com/tidev/titanium_mobile/commit/d4cd0402d3c0250aae589f57e62a8249210e63e1))
  * fix iOS log crash ([af732d9](https://github.com/tidev/titanium_mobile/commit/af732d91fb905388152013b0888a3b78a238274f))
  * expose keyboardDismissMode to Ti.UI.TableView as well ([4202779](https://github.com/tidev/titanium_mobile/commit/4202779b6105bd729ef5df9769aa2a0e553d866d))
  * properly attach / detach child video controller ([6195261](https://github.com/tidev/titanium_mobile/commit/619526165caa6efee82e017334c9eaf71538c98b))
  * guard and re-throw native exception ([9308d2b](https://github.com/tidev/titanium_mobile/commit/9308d2b4e3a82c3af53a58b6f477b6fb4537734e))
  * add sponsors action ([dc8a338](https://github.com/tidev/titanium_mobile/commit/dc8a33869c7aa434d91930c5666f4955dbf4647b))
  * bump version ([6350ce5](https://github.com/tidev/titanium_mobile/commit/6350ce5ca1b4dc79af3d40630c05584776a4d53a))

* Marc Bender
  * building for MacOS (Catalyst) now works with that fix ([02dc740](https://github.com/tidev/titanium_mobile/commit/02dc740c360b74b79b51b65322a4cff2e1c306a3))

* narbs
  * ensure default icon is not flattened during maccatalyst builds to void white background ([ae2674d](https://github.com/tidev/titanium_mobile/commit/ae2674dc10c8fd1e88e255594cf9dd54f7e635d9))

* Alessandro La Rocca
  * Update TiMediaVideoPlayerProxy.m (#13859) ([70e0393](https://github.com/tidev/titanium_mobile/commit/70e0393a87357e3b3d7cb53fcf4301cbab55849c))

* Jórdan Luiz Bisato
  * remove injection of "appcelerator.com" on whitelist when ATS is enabled ([6e658f7](https://github.com/tidev/titanium_mobile/commit/6e658f71e73dd9ac34fa0553f8413113b47e0790))

* cb1kenobi
  * Apply automatic changes ([84f0144](https://github.com/tidev/titanium_mobile/commit/84f01440242eb6626cca4ddf452862206368a849))


## Bug Fixes

### Android platform

* make tabBarVisible work at creation ([5d07f5c](https://github.com/tidev/titanium_mobile/commit/5d07f5c430f3f1cc4832a6df4e939270831e781f))
* reduce tableView updates ([c76535a](https://github.com/tidev/titanium_mobile/commit/c76535a4e7714dd01d7dadfddf7606c1d3a9fac9))

### Multiple platforms

* fix iOS log crash ([af732d9](https://github.com/tidev/titanium_mobile/commit/af732d91fb905388152013b0888a3b78a238274f))
* fix catalyst build ([552b835](https://github.com/tidev/titanium_mobile/commit/552b835b7e34fa628d4b43061b98504911cf3004))

### iOS platform

* support Xcode 17 and iOS 17
* building for MacOS (Catalyst) now works with that fix ([02dc740](https://github.com/tidev/titanium_mobile/commit/02dc740c360b74b79b51b65322a4cff2e1c306a3))
* enable webview inspection ([8061acd](https://github.com/tidev/titanium_mobile/commit/8061acdc2a985c43e4396c715eaa061c3f4770bc))
* ensure default icon is not flattened during maccatalyst builds to void white background ([ae2674d](https://github.com/tidev/titanium_mobile/commit/ae2674dc10c8fd1e88e255594cf9dd54f7e635d9))
* guard and re-throw native exception ([9308d2b](https://github.com/tidev/titanium_mobile/commit/9308d2b4e3a82c3af53a58b6f477b6fb4537734e))
* properly attach / detach child video controller ([6195261](https://github.com/tidev/titanium_mobile/commit/619526165caa6efee82e017334c9eaf71538c98b))

## Features

### Multiple platforms

* add sponsors action ([dc8a338](https://github.com/tidev/titanium_mobile/commit/dc8a33869c7aa434d91930c5666f4955dbf4647b))
* add `forceUpdates` propterty to listView to improve scrolling event ([f954ae7](https://github.com/tidev/titanium_mobile/commit/f954ae76fe531ea8dc08ff3865decdb5e5cc7cbb))
* fixed rows in filtered results ([bb23609](https://github.com/tidev/titanium_mobile/commit/bb23609362479ea51deab620e830b6d5c851f52b))
* remove X-Requested-With header from HTTP requests ([67ba7a6](https://github.com/tidev/titanium_mobile/commit/67ba7a63b9c9c713631d710986f6d93147939fec))
* update Facebook SDKs ([521a3ee](https://github.com/tidev/titanium_mobile/commit/521a3eed1eda85c531ba7869720faecb2d5effd1))

### Android platform

* add rotation to blob ([56bd00c](https://github.com/tidev/titanium_mobile/commit/56bd00c98be372558b27e520ce2c0f86cb030656))
* add tabMode to TabGroup ([322b78d](https://github.com/tidev/titanium_mobile/commit/322b78dd01623d957c68455383940134a308efac))
* badgeTextColor property ([c591f9c](https://github.com/tidev/titanium_mobile/commit/c591f9c26fe8d3c25406ec6767c73ef12804e406))
* clean up propertyAccessors ([5f33b2f](https://github.com/tidev/titanium_mobile/commit/5f33b2f42cc0577b4b587ce701db8f9de981f610))
* make rotationX, rotationY animatable ([bfa2bc5](https://github.com/tidev/titanium_mobile/commit/bfa2bc536c779a3c111d96cc39d42752d40e45fc))
* secure Ti.Network.Socket ([0f5743d](https://github.com/tidev/titanium_mobile/commit/0f5743d8975c219cfdf0753e23c4e0c4315ac4b4))
* use cameraX ([e68d33a](https://github.com/tidev/titanium_mobile/commit/e68d33a86c05ec0dcff173128e2b3b05817fec41))

### iOS platform

* expose keyboardDismissMode to Ti.UI.TableView as well ([4202779](https://github.com/tidev/titanium_mobile/commit/4202779b6105bd729ef5df9769aa2a0e553d866d))
* support DRM-encrypted video assets ([d4cd040](https://github.com/tidev/titanium_mobile/commit/d4cd0402d3c0250aae589f57e62a8249210e63e1))

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
