---
title: Titanium SDK 12.3.1.RC - 30 May 2024
weight: '19'
---

# Titanium SDK 12.3.1.RC Release Note

## Titanium SDK 12.3.1.RC - 30 May 2024

## About this release

Titanium SDK 12.3.1 is a patch release of the SDK, addressing high-priority issues from previous releases.

We also also added support and documentation for the new Apple privacy manifest files that are required starting May 1, 2024. You can read more about it in [Adhere to the iOS 17+ Privacy Requirements](/guide/Titanium_SDK/Titanium_SDK_How-tos/Adhere_to_the_iOS17_Privacy_Requirements.html).

## Community Credits

* Hans Knöchel
  * handle first privacy manifest changes ([a6f8ed4](https://github.com/tidev/titanium_mobile/commit/a6f8ed48843334686ab6ace07c52066c4a74dbfc))
  * Revert "feat(ios): support multi-scene applications (#13941)" ([8570d92](https://github.com/tidev/titanium_mobile/commit/8570d922175ba60f2554249d75fdf4505471c110))
  * bump version ([570442b](https://github.com/tidev/titanium_mobile/commit/570442bc1d144b230cb4ecf58ae5dfa4052966ab))

* Michael Gangolf
  * node-appc update ([54acc65](https://github.com/tidev/titanium_mobile/commit/54acc65fc870754b4eb869abd9a3328584752464))
  * fix noresults event in ListView width custom query ([d9ecad7](https://github.com/tidev/titanium_mobile/commit/d9ecad760b6ea2be6089a00939bc95ba6527202f))
  * node-titanium-sdk update ([feffa23](https://github.com/tidev/titanium_mobile/commit/feffa239ca35c5fbf208583e3c78299631bfca66))
  * Ti.UI.Tab selected event returns no data ([abc9e81](https://github.com/tidev/titanium_mobile/commit/abc9e81bd38c01bc3de48219707aa4d1d06e94fe))
  * touchFeedbackColor not working for a bottomNavigation tab ([4639ced](https://github.com/tidev/titanium_mobile/commit/4639cede2baeca7e2f7670595bf376ef94bd77fa))
  * switchCamera method was missing ([5fc9115](https://github.com/tidev/titanium_mobile/commit/5fc91157528805bc984ad05eba851328162c0797))

## Bug Fixes

### Android platform

* fix noresults event in ListView width custom query ([d9ecad7](https://github.com/tidev/titanium_mobile/commit/d9ecad760b6ea2be6089a00939bc95ba6527202f))
* switchCamera method was missing ([5fc9115](https://github.com/tidev/titanium_mobile/commit/5fc91157528805bc984ad05eba851328162c0797))
* Ti.UI.Tab selected event returns no data ([abc9e81](https://github.com/tidev/titanium_mobile/commit/abc9e81bd38c01bc3de48219707aa4d1d06e94fe))
* touchFeedbackColor not working for a bottomNavigation tab ([4639ced](https://github.com/tidev/titanium_mobile/commit/4639cede2baeca7e2f7670595bf376ef94bd77fa))

## SDK Module Versions

| Module      | Android version | iOS Version |
| ----------- | --------------- | ----------- |
| facebook | 12.1.0 | 14.0.0 |
| ti.map | 5.6.0 | 7.3.1 |
| ti.webdialog | 2.3.0 | 3.0.2 |
| ti.playservices | 18.2.0 | n/a |
| ti.identity | 3.1.0 | 5.0.0 |
| urlSession | n/a | 4.0.1 |
| ti.coremotion | n/a | 4.0.1 |
| ti.applesignin | n/a | 3.1.2 |
| hyperloop | 7.0.6 | 7.0.6 |
