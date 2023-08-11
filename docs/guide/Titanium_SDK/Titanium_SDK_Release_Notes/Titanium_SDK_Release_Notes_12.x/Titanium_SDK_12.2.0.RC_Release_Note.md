---
title: Titanium SDK 12.2.0.RC - 11 August 2023
weight: '10'
---

# Titanium SDK 12.2.0.RC Release Note

## Titanium SDK 12.2.0.RC - 11 August 2023

## About this release

The release candidate of the next Titanium SDK is available: <b>12.2.0.RC</b>. Titanium SDK 12.2.0 is a minor release of the SDK, adding new features as well as addressing high-priority issues from previous releases. Highlights of this release are:

- Support for iOS 17 and Xcode 15
- New Android APIs
- iOS stability improvements

### iOS 17 and Xcode 15 Support

Starting with this release, we are adding early support for the iOS 17 and Xcode 15 SDKs, which are currently in Beta
and planned to released by September this year. Using Titanium SDK 12.2.0.RC and later, you will be able to not only run your
currently bundled apps in the iOS 17 Simulator, but also target the iOS 17 platform by default, making sure that your apps
will run smoothly when the release comes out soon.

In addition, if you are interested in new APIs that haven't been covered, yet, make sure to let us know via [TiSlack](https://tislack.org)
and the community will try to add them for you.

Finally, we encourage all developers to their apps sooner than later to prevent disruptions and platform specific bugs. Also, please make sure
to report all issues via [TiSlack](https://tislack.org), so we can fix them for the GA version of Titanium SDK 12.2.0, which is planned
for September as well.

## Community Credits

* Hans Knöchel
  * support DRM-encrypted video assets ([d4cd040](https://github.com/tidev/titanium_mobile/commit/d4cd0402d3c0250aae589f57e62a8249210e63e1))
  * fix iOS log crash ([af732d9](https://github.com/tidev/titanium_mobile/commit/af732d91fb905388152013b0888a3b78a238274f))
  * expose keyboardDismissMode to Ti.UI.TableView as well ([4202779](https://github.com/tidev/titanium_mobile/commit/4202779b6105bd729ef5df9769aa2a0e553d866d))
  * properly attach / detach child video controller ([6195261](https://github.com/tidev/titanium_mobile/commit/619526165caa6efee82e017334c9eaf71538c98b))
  * guard and re-throw native exception ([9308d2b](https://github.com/tidev/titanium_mobile/commit/9308d2b4e3a82c3af53a58b6f477b6fb4537734e))
  * add sponsors action ([dc8a338](https://github.com/tidev/titanium_mobile/commit/dc8a33869c7aa434d91930c5666f4955dbf4647b))
  * bump version ([6350ce5](https://github.com/tidev/titanium_mobile/commit/6350ce5ca1b4dc79af3d40630c05584776a4d53a))

* Michael Gangolf
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

* Alessandro La Rocca
  * Update TiMediaVideoPlayerProxy.m (#13859) ([70e0393](https://github.com/tidev/titanium_mobile/commit/70e0393a87357e3b3d7cb53fcf4301cbab55849c))

* Jórdan Luiz Bisato
  * remove injection of "appcelerator.com" on whitelist when ATS is enabled ([6e658f7](https://github.com/tidev/titanium_mobile/commit/6e658f71e73dd9ac34fa0553f8413113b47e0790))

## Bug Fixes

### Multiple platforms

* fix iOS log crash ([af732d9](https://github.com/tidev/titanium_mobile/commit/af732d91fb905388152013b0888a3b78a238274f))

### iOS platform

* enable webview inspection ([8061acd](https://github.com/tidev/titanium_mobile/commit/8061acdc2a985c43e4396c715eaa061c3f4770bc))
* guard and re-throw native exception ([9308d2b](https://github.com/tidev/titanium_mobile/commit/9308d2b4e3a82c3af53a58b6f477b6fb4537734e))
* properly attach / detach child video controller ([6195261](https://github.com/tidev/titanium_mobile/commit/619526165caa6efee82e017334c9eaf71538c98b))

## Features

### Multiple platforms

* add sponsors action ([dc8a338](https://github.com/tidev/titanium_mobile/commit/dc8a33869c7aa434d91930c5666f4955dbf4647b))
* fixed rows in filtered results ([bb23609](https://github.com/tidev/titanium_mobile/commit/bb23609362479ea51deab620e830b6d5c851f52b))
* remove X-Requested-With header from HTTP requests ([67ba7a6](https://github.com/tidev/titanium_mobile/commit/67ba7a63b9c9c713631d710986f6d93147939fec))

### Android platform

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
| facebook | 12.0.0 | 13.0.0 |
| ti.map | 5.5.2 | 7.0.0 |
| ti.webdialog | 2.2.0 | 3.0.2 |
| ti.playservices | 18.2.0 | n/a |
| ti.identity | 3.1.0 | 5.0.0 |
| urlSession | n/a | 4.0.1 |
| ti.coremotion | n/a | 4.0.1 |
| ti.applesignin | n/a | 3.1.2 |
| hyperloop | 7.0.5 | 7.0.5 |