---
title: Titanium SDK 13.0.0.GA - 15 September 2025
weight: '11'
---

# Titanium SDK 13.0.0.GA Release Note

## Titanium SDK 13.0.0.GA - 15 September 2025

## About this release

Titanium SDK 13.0.0 is a major release of the SDK, providing full support for iOS 26 and Xcode 26. It is also compatible with the latest Android 16kb page size requirement by Google and all included first party Android modules support 16kb page size too. Many community modules like the Firebase modules are also already updated.
If you need help with other modules make sure to join our [Slack group](https://slack.tidev.io/) and ask for support.

## Community Credits

* Jan Vennemann
  * use proxy viewCount in ScrollableView to prevent empty display ([bc0b7d3](https://github.com/tidev/titanium_mobile/commit/bc0b7d3c4fd2b12cddce37e00f542d9b6fa48524))
  * correct safe area for standalone windows ([c471606](https://github.com/tidev/titanium_mobile/commit/c471606fc7c4421be26851861f696bd9f1c95c21))
  * improve safe area layout lifecycle ([4a13546](https://github.com/tidev/titanium_mobile/commit/4a1354683817584259b4e3bd493068f50f153869))
  * include top safe area inset in navigation window ([e859350](https://github.com/tidev/titanium_mobile/commit/e85935055104070831690397fb88d66e3d4815b8))
  * improve safe area detection and trigger relayout ([3c86467](https://github.com/tidev/titanium_mobile/commit/3c864672ed2e91d25cd6b12a589b2cbd7d0c656f))

* Hans Knöchel
  * Revert "feat(ios): support iOS 26+ source views for non-iPad devices (#14258)" (#14276) ([6ae5a29](https://github.com/tidev/titanium_mobile/commit/6ae5a290588e8252ace96f3bbd5758699f3897cd))
  * update xcode/ios/watchos compatibility versions ([f1922f7](https://github.com/tidev/titanium_mobile/commit/f1922f786090cbd797e25c7651f20bc841b123d4))
  * remove interactive dismiss mode ([97dcc32](https://github.com/tidev/titanium_mobile/commit/97dcc32f3b171dca8c028503ec3dcaeb86a5ae38))
  * update changelog ([9034457](https://github.com/tidev/titanium_mobile/commit/903445773268ea7fb2bc635c632f7fe05ce01839))
  * update ioslib to 5.1.0 to support Xcode 26 ([c36edc4](https://github.com/tidev/titanium_mobile/commit/c36edc443dd44b9b0e5e3a9e9f51c74538f05504))
  * update changelog ([519b817](https://github.com/tidev/titanium_mobile/commit/519b817d36abc0380e37cb4f0b733e73322d9fd5))
  * Revert "fix: properly handle containment of tab group (#14261)" (#14266) ([6023d7e](https://github.com/tidev/titanium_mobile/commit/6023d7ee0db716fa0b051bbeebe866595f894146))
  * properly handle containment of tab group ([2894f9f](https://github.com/tidev/titanium_mobile/commit/2894f9f68bf16af39f7fbd32b232de21de4dbfdd))
  * properly clean build folder ([5347cc5](https://github.com/tidev/titanium_mobile/commit/5347cc5be569ff1365e6c0eb3b8ce47de6e37f5c))
  * add 13.0.0 changelog ([f678a93](https://github.com/tidev/titanium_mobile/commit/f678a93c184ba46269814ea9d7d6bf0ec40ca203))
  * build with Xcode 26 ([4d9d041](https://github.com/tidev/titanium_mobile/commit/4d9d0419e00b3c9add07af3487c1d74d664afc92))
  * bump master to 13.0.0 ([8e92123](https://github.com/tidev/titanium_mobile/commit/8e9212326c736c3187a4a86a6a56d61afde6b076))
  * add support for modern button configuration ([a7ab5bd](https://github.com/tidev/titanium_mobile/commit/a7ab5bd26af2100e83b00644dbe882087233dda7))
  * add support for iOS 26+ glass effects ([26a1a86](https://github.com/tidev/titanium_mobile/commit/26a1a8631fdebb3863108588f2cbc5875ec934d9))
  * support for iOS 26+ bottomAccessoryView API ([99461f5](https://github.com/tidev/titanium_mobile/commit/99461f571cf0d3e5844366d7ba80b1af8b26db2a))
  * support iOS 26+ source views for non-iPad devices ([ce3752b](https://github.com/tidev/titanium_mobile/commit/ce3752bcfddc5e1139a73ff2344cf4910c5b3a29))
  * make sure the scrollable view child view is a Ti view ([6549100](https://github.com/tidev/titanium_mobile/commit/65491002402faa05f1cc6a605edcf41c3dd15755))
  * fix possible build issues related to dsym generation ([98acc26](https://github.com/tidev/titanium_mobile/commit/98acc262d34eb06ff9a46e7f7be38ebfb0d5459c))
  * disable debug dylib for more stable dev builds ([ac53981](https://github.com/tidev/titanium_mobile/commit/ac539813c5ff4d48b9a586e20aafb95cdf4aa279))
  * trim trailing new line on html text areas ([8c39dc7](https://github.com/tidev/titanium_mobile/commit/8c39dc72d1b65a2b20a260ee043f02709908d3bc))
  * trim trailing new line on html labels ([64e0632](https://github.com/tidev/titanium_mobile/commit/64e06321d96d5dc24bdc972db6f0d9ff187270f7))
  * Revert "fix: fix all docs warnings (#14253)" (#14254) ([ad12a80](https://github.com/tidev/titanium_mobile/commit/ad12a80444c79b121569f5bb7e5be93065e8b637))
  * fix all docs warnings ([0d0f2d0](https://github.com/tidev/titanium_mobile/commit/0d0f2d06f43c56520ae7cb59e56393887dfabdab))
  * use Xcode 16.4 for building the SDK ([85b7048](https://github.com/tidev/titanium_mobile/commit/85b7048a67db448c6de1a1cbd949d401faafb7d8))

* Michael Gangolf
  * update hyperloop.next to 7.1.0 to support 16 KB page size ([219f6bc](https://github.com/tidev/titanium_mobile/commit/219f6bcd0872e82e813d54a9ee56a531a8581c45))
  * update module versions ([ffb3607](https://github.com/tidev/titanium_mobile/commit/ffb36078a25f11a02dc454bbef55acf12f27fd1f))
  * keep TableView search results on enter ([0ed2b8d](https://github.com/tidev/titanium_mobile/commit/0ed2b8dce0637c007952b53789b3a973332c073a))
  * fix transparent TextField backgroundColor ([8906cd5](https://github.com/tidev/titanium_mobile/commit/8906cd51997fe3e181e033aa54739ce2d5faac8f))
  * fix hidding actionbar in drawerLayout ([d42adf2](https://github.com/tidev/titanium_mobile/commit/d42adf26b86d749b6d037109c9932038a1ca8e2f))
  * code refactor and cleanup ([6c87189](https://github.com/tidev/titanium_mobile/commit/6c87189a2e01f14ec68ed3920eea2907be1259be))
  * update ndk, camerax for 16kb page sizes support ([22720c4](https://github.com/tidev/titanium_mobile/commit/22720c465a19a8b3b94a3d1c8506ee14cfd12f6f))

## Bug Fixes

### Android platform

* fix hidding actionbar in drawerLayout ([d42adf2](https://github.com/tidev/titanium_mobile/commit/d42adf26b86d749b6d037109c9932038a1ca8e2f))
* fix transparent TextField backgroundColor ([8906cd5](https://github.com/tidev/titanium_mobile/commit/8906cd51997fe3e181e033aa54739ce2d5faac8f))

### Multiple platforms

* fix all docs warnings ([0d0f2d0](https://github.com/tidev/titanium_mobile/commit/0d0f2d06f43c56520ae7cb59e56393887dfabdab))
* properly clean build folder ([5347cc5](https://github.com/tidev/titanium_mobile/commit/5347cc5be569ff1365e6c0eb3b8ce47de6e37f5c))
* properly handle containment of tab group ([2894f9f](https://github.com/tidev/titanium_mobile/commit/2894f9f68bf16af39f7fbd32b232de21de4dbfdd))

### iOS platform

* correct safe area for standalone windows ([c471606](https://github.com/tidev/titanium_mobile/commit/c471606fc7c4421be26851861f696bd9f1c95c21))
* fix possible build issues related to dsym generation ([98acc26](https://github.com/tidev/titanium_mobile/commit/98acc262d34eb06ff9a46e7f7be38ebfb0d5459c))
* improve safe area detection and trigger relayout ([3c86467](https://github.com/tidev/titanium_mobile/commit/3c864672ed2e91d25cd6b12a589b2cbd7d0c656f))
* improve safe area layout lifecycle ([4a13546](https://github.com/tidev/titanium_mobile/commit/4a1354683817584259b4e3bd493068f50f153869))
* include top safe area inset in navigation window ([e859350](https://github.com/tidev/titanium_mobile/commit/e85935055104070831690397fb88d66e3d4815b8))
* keep TableView search results on enter ([0ed2b8d](https://github.com/tidev/titanium_mobile/commit/0ed2b8dce0637c007952b53789b3a973332c073a))
* make sure the scrollable view child view is a Ti view ([6549100](https://github.com/tidev/titanium_mobile/commit/65491002402faa05f1cc6a605edcf41c3dd15755))
* trim trailing new line on html labels ([64e0632](https://github.com/tidev/titanium_mobile/commit/64e06321d96d5dc24bdc972db6f0d9ff187270f7))
* trim trailing new line on html text areas ([8c39dc7](https://github.com/tidev/titanium_mobile/commit/8c39dc72d1b65a2b20a260ee043f02709908d3bc))
* use proxy viewCount in ScrollableView to prevent empty display ([bc0b7d3](https://github.com/tidev/titanium_mobile/commit/bc0b7d3c4fd2b12cddce37e00f542d9b6fa48524))

## Features

### Android platform

* update ndk, camerax for 16kb page sizes support ([22720c4](https://github.com/tidev/titanium_mobile/commit/22720c465a19a8b3b94a3d1c8506ee14cfd12f6f))

### iOS platform

* add support for iOS 26+ glass effects ([26a1a86](https://github.com/tidev/titanium_mobile/commit/26a1a8631fdebb3863108588f2cbc5875ec934d9))
* add support for modern button configuration ([a7ab5bd](https://github.com/tidev/titanium_mobile/commit/a7ab5bd26af2100e83b00644dbe882087233dda7))
* support for iOS 26+ bottomAccessoryView API ([99461f5](https://github.com/tidev/titanium_mobile/commit/99461f571cf0d3e5844366d7ba80b1af8b26db2a))
* support iOS 26+ source views for non-iPad devices ([ce3752b](https://github.com/tidev/titanium_mobile/commit/ce3752bcfddc5e1139a73ff2344cf4910c5b3a29))

## BREAKING CHANGES

*  iOS: The safe area padding is now always set to the native safe area padding and not manually to "`0`" anymore if navBarHidden or tabBarHidden are set

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
