---
title: Titanium SDK 12.3.1.GA - 12 June 2024
weight: '19'
---

# Titanium SDK 12.3.1.GA Release Note

## Titanium SDK 12.3.1.GA - 12 June 2024

## About this release

Titanium SDK 12.3.1 is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release (12.3.0) is no longer supported.

## Community Credits

* Hans Knöchel
  * fix(ios): fix privacy-related Filesystem APIs (#14063) ([ff0bd64](https://github.com/tidev/titanium_mobile/commit/ff0bd64f9f4c8d44247a028f5a266481bfa82f78))
  * add 12.3.1 changelog ([f92e4e0](https://github.com/tidev/titanium_mobile/commit/f92e4e02509cb045b46db4ea2f67bc25495d096a))
  * update package-lock.json after merge conflicts ([eadd4fe](https://github.com/tidev/titanium_mobile/commit/eadd4fece5f8ac77c0a1b35e7af18d131ecc416d))
  * handle first privacy manifest changes ([a6f8ed4](https://github.com/tidev/titanium_mobile/commit/a6f8ed48843334686ab6ace07c52066c4a74dbfc))
  * Revert "feat(ios): support multi-scene applications (#13941)" ([8570d92](https://github.com/tidev/titanium_mobile/commit/8570d922175ba60f2554249d75fdf4505471c110))

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
