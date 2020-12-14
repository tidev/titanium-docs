---
title: Titanium SDK 9.2.0.GA - 23 September 2020
weight: '50'
---

# Titanium SDK 9.2.0.GA - 23 September 2020

## About this release

Titanium SDK 9.2.0 is a minor release of the SDK, addressing high-priority issues from previous releases.

As of this release, Titanium SDK 9.1.x will not receive updates more than six months after the release of 9.2.0 (2021-03-15). Any needed fixes will be in 9.2.x or later supported releases within the 9.x branch. See [Axway Appcelerator Deprecation Policy](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_deprecation_policy.html) and [Nominal Lifetimes](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_product_lifecycle.html#AxwayAppceleratorProductLifecycle-NominalLifetimes) documents for details.

::: danger ❗️ Warning
With the release of Titanium SDK 9.0.0, we no longer support Node.js 8.X. Node 10.13.0 is the new minimum supported version.
:::

## Overview

Titanium SDK 9.2.0 is primarily focused on providing support for iOS 14 and Xcode 12. Fixing high priority issues, adding support for new APIs, support for using xcframeworks in native modules, as well as a beta for macOS support via Mac Catalyst.

### macOS support

This release includes an initial beta for supporting macOS applications via [Mac Catalyst](https://developer.apple.com/mac-catalyst/), which allows you to run your iOS application on Mac as if they were apps built for the Mac.

This initial beta mostly focuses on enabling the target and necessary build changes, but most of the core SDK APIs work out of the box however there are a some items worth mentioning:

* As the application is run in a sandbox, we inject entitlements for certain sandboxed APIs by default. In a future release we will look to detect API usage and inject these automatically

* Most core modules have been rebuilt for macOS support, with the notable exception of ti.facebook

* Certain APIs that require custom entitlements, such as the KeyChain access in ti.identity or ti.applesignin, currently will not work with the macOS target

* Currently there are no new APIs exposed for macOS development such as Menu APIs. As a result apps will feel more like an iPad app currently.

* Appcelerator Studio and our editor plugins currently do not expose macOS as a build target, currently the only way to build is to using the CLI via `[appc run|ti build] -p ios -T macos`

We will iterate on the macOS support in the coming releases and when we feel that it's stable enough we will remove it from beta. But we encourage you to give it a spin, and report any issues you might find to us on our [JIRA](http://jira.appcelerator.org/).

### Rebuilding iOS modules

It is not required, but it is heavily recommended to rebuild your native modules with SDK 9.2.0. Not doing so will produce a warning during application build and will lead to build failures when Apple ships the upcoming "Silicon Macs". To build your application to macOS it's also required to rebuild the module.

To update your module:

1. Update the **titanium.xcconfig** file with the following

    1. Ensure the **TITANIUM\_SDK\_VERSION** is pointed to a 9.2.0 SDK

    2. Edit the **FRAMEWORK\_SEARCH\_PATHS** value to be **$(inherited) "$(TITANIUM\_SDK)/iphone/Frameworks/\*\*"**

2. Update the **manifest** file

    1. **minsdk** should be 9.2.0

    2. We recommend bumping the **version** to the next semver major

For an example of the changes required, see the [PR to update ti.coremotion](https://github.com/appcelerator-modules/ti.coremotion/pull/27)

## Community Credits

* Hans Knöchel

    * [TIMOB-28147](https://jira.appcelerator.org/browse/TIMOB-28147) - support app clips ([56b8da4](https://github.com/appcelerator/titanium_mobile/commit/56b8da4407e44a64da69d6e32e6eb4a1b696772f))

    * add since version for Ti.UI.Picker.datePickerStyle ([ab250c3](https://github.com/appcelerator/titanium_mobile/commit/ab250c32cb52d8a6a0c2aa301a1fcd719ca84868))

    * [TIMOB-28104](https://jira.appcelerator.org/browse/TIMOB-28104) - support new date picker styles ([d3cdfc5](https://github.com/appcelerator/titanium_mobile/commit/d3cdfc59bd7707ca2d5a1c27420e91f85019cf3f))

* Michael Gangolf

    * add missing line in scrollableview example ([dbdb869](https://github.com/appcelerator/titanium_mobile/commit/dbdb869e6fd9003d6801fc2516239f2547b8af90))

    * fix Ti.UI.Window.extendSafeArea default value text ([136620c](https://github.com/appcelerator/titanium_mobile/commit/136620c668e4a2eb4501331d97cd228c5bca4aed))

## Bug Fixes

### Android platform

* [TIMOB-28090](https://jira.appcelerator.org/browse/TIMOB-28090) - allow node to clear event loop ([d6d9a5b](https://github.com/appcelerator/titanium_mobile/commit/d6d9a5b8333425366fef96333c51942b0f28d799))

### iOS platform

* [TIMOB-27132](https://jira.appcelerator.org/browse/TIMOB-27132) - fix location of Ti.Filesystem.applicationDataDirectory on macos ([9caf847](https://github.com/appcelerator/titanium_mobile/commit/9caf8475b5c55ffac256c181896809d01a5b62e3))

* [TIMOB-28138](https://jira.appcelerator.org/browse/TIMOB-28138) - optionally build macos and/or ios arm64 sim ([ed7d149](https://github.com/appcelerator/titanium_mobile/commit/ed7d149314e7c0efaa5a3150f87d81c104f6c591))

* [TIMOB-28130](https://jira.appcelerator.org/browse/TIMOB-28130) - remove Frameworks directory prior to copying ([405e179](https://github.com/appcelerator/titanium_mobile/commit/405e1799ac15b2a3983d5af55df11543b241a447))

* [TIMOB-28099](https://jira.appcelerator.org/browse/TIMOB-28099) - remove old tiverify.xcframework references from project ([cd7c270](https://github.com/appcelerator/titanium_mobile/commit/cd7c270d538c71deb02c1df8c0be42391b806033))

* tweak titanium.xcconfig template to use variables in sdk path ([7da6dbd](https://github.com/appcelerator/titanium_mobile/commit/7da6dbd54696a004940a0ce4146f7598624eaade))

* [TIMOB-28130](https://jira.appcelerator.org/browse/TIMOB-28130) - unmark product directory to prevent removing required files ([635d08c](https://github.com/appcelerator/titanium_mobile/commit/635d08cc843e098b95e181f792af3ec6993a5df5))

* [TIMOB-28143](https://jira.appcelerator.org/browse/TIMOB-28143) - use TITANIUM\_SDK variable to point at xcframework path in xcode project ([559b5bc](https://github.com/appcelerator/titanium_mobile/commit/559b5bca4a2d2f3d58a41018fb61074d157e08dd))

* use xcodeTargetOS of 'iphoneos' for mac catalyst ([60220c7](https://github.com/appcelerator/titanium_mobile/commit/60220c72a5d35f6ef231d833d911cc2b7408062e))

* [TIMOB-28142](https://jira.appcelerator.org/browse/TIMOB-28142) - when building module test project, unzip via spawn to avoid max buffer error ([345eee1](https://github.com/appcelerator/titanium_mobile/commit/345eee1a3a902f812e461ca9aa9906cd84409993))

* added missing left (“) ([ff27c9b](https://github.com/appcelerator/titanium_mobile/commit/ff27c9b01f44fee1517ef566af2166f450f07bcd))

* [TIMOB-28108](https://jira.appcelerator.org/browse/TIMOB-28108) - allow Ti.UI.RefreshControl.tintColor to accept a semantic color ([815a0fc](https://github.com/appcelerator/titanium_mobile/commit/815a0fcceeda984578b3451e5688e7dcac429376))

* [TIMOB-28113](https://jira.appcelerator.org/browse/TIMOB-28113) - do not update properties if transition animation ([4a835fd](https://github.com/appcelerator/titanium_mobile/commit/4a835fd1581c7f949a0e05a2ff23b22112b6b7e3))

* [TIMOB-28062](https://jira.appcelerator.org/browse/TIMOB-28062) - enable swift development in Titanium ([2b4aa7b](https://github.com/appcelerator/titanium_mobile/commit/2b4aa7b3a0b7a7ef18c0824a2900db5945206871))

* [TIMOB-28116](https://jira.appcelerator.org/browse/TIMOB-28116) - exclude arm64 arch for sim target if native modules aren't xcframeworks ([faba6e1](https://github.com/appcelerator/titanium_mobile/commit/faba6e1c06c8d468b43189c7422ef326617d0585))

* [TIMOB-28042](https://jira.appcelerator.org/browse/TIMOB-28042) - exclude arm64 architecture from simulator build ([178bf92](https://github.com/appcelerator/titanium_mobile/commit/178bf926f2ba4955a4e4b0939e47e48d7a64e238))

* fix Ti.Filesystem.getAsset and getFile on devices ([f57e938](https://github.com/appcelerator/titanium_mobile/commit/f57e9381402f87347447231fd140cf7277fedaf3))

* [TIMOB-27985](https://jira.appcelerator.org/browse/TIMOB-27985) - fix to add resources and sources file in widget extension ([4b97cec](https://github.com/appcelerator/titanium_mobile/commit/4b97cec8ec74d7760c3eff0031ef9b75c2fcaa95))

* gaurd code for MediaModule on xcode 11 to avoid compile issues ([a9dae74](https://github.com/appcelerator/titanium_mobile/commit/a9dae74ca9a993803bdfef52e261fcae2f0c967d))

* [TIMOB-28112](https://jira.appcelerator.org/browse/TIMOB-28112) - guard new picker types ([fa8f547](https://github.com/appcelerator/titanium_mobile/commit/fa8f5475e9588e91eebfd3c0a10c0f663c74e8d2))

* handle adding Ti.UI.Shortcut when existing array is nil ([82e011a](https://github.com/appcelerator/titanium_mobile/commit/82e011aa1bfff059415ff181e5e4f607ca9fa9b5))

* modify BOOL to bool for return types to fix JS representation ([0b251e2](https://github.com/appcelerator/titanium_mobile/commit/0b251e28075eba2685efd30a18f8d1df915f5647))

* [TIMOB-28100](https://jira.appcelerator.org/browse/TIMOB-28100) - only include presentationControllerDidDismiss when photogallery is used ([14a5e5b](https://github.com/appcelerator/titanium_mobile/commit/14a5e5ba65de2c5b2d656d0aae4b30c4b6b57ef9))

* [TIMOB-28126](https://jira.appcelerator.org/browse/TIMOB-28126) - rely on flush interval ([0c83fab](https://github.com/appcelerator/titanium_mobile/commit/0c83fabf6bd8abff5370dfb5208ec35b32cc890b))

* [TIMOB-28091](https://jira.appcelerator.org/browse/TIMOB-28091) - update liveview for ios 14 compatibility ([e89065b](https://github.com/appcelerator/titanium_mobile/commit/e89065bad920d25df94f144390912a3bc65190d8))

* [TIMOB-28101](https://jira.appcelerator.org/browse/TIMOB-28101) - use arc to create corner radius instead of qudratic curve ([b5ed723](https://github.com/appcelerator/titanium_mobile/commit/b5ed72357f697293a3d2e2a3ff957ff47bb13fa1))

* [TIMOB-28103](https://jira.appcelerator.org/browse/TIMOB-28103) [TIMOB-28110](https://jira.appcelerator.org/browse/TIMOB-28110) - view shadow missing with multiple borderRadius values ([2a38bf3](https://github.com/appcelerator/titanium_mobile/commit/2a38bf33e06831c0c58d489686153acdbf057225))

* fix location of Ti.Filesystem.applicationDataDirectory on macos ([9caf847](https://github.com/appcelerator/titanium_mobile/commit/9caf8475b5c55ffac256c181896809d01a5b62e3))

### Multiple platforms

* [TIMOB-28094](https://jira.appcelerator.org/browse/TIMOB-28094) - process.toString() ([a15f7f6](https://github.com/appcelerator/titanium_mobile/commit/a15f7f65a6c738ab444570c7236435245e72d6b2))

## Features

### iOS platform

* [TIMOB-27986](https://jira.appcelerator.org/browse/TIMOB-27986) - support xcframeworks in modules/platform folders ([b2ccfbf](https://github.com/appcelerator/titanium_mobile/commit/b2ccfbf7fb44d5ffa03dd358ad8d5930258be838))

* [TIMOB-28077](https://jira.appcelerator.org/browse/TIMOB-28077) - added new error constant and updated doc for local network privacy ([f8de8c0](https://github.com/appcelerator/titanium_mobile/commit/f8de8c08c68398b5b5b871e655455f6d8c529d6e))

* add Ti.Blob.toArrayBuffer() ([e42bbcb](https://github.com/appcelerator/titanium_mobile/commit/e42bbcbf1295123c3a0f7d8fb94179df89358a28))

* [TIMOB-28098](https://jira.appcelerator.org/browse/TIMOB-28098) - add Ti.Platform.versionPatch ([a78e9cc](https://github.com/appcelerator/titanium_mobile/commit/a78e9ccf9b937fd9066ba13bbc855f3a37557482))

* [TIMOB-27984](https://jira.appcelerator.org/browse/TIMOB-27984) - allow multiple photo selection ([04b4292](https://github.com/appcelerator/titanium_mobile/commit/04b42929d71cef4abc9c6f891caf78da2f714b81))

* build modules as xcframeworks (w/ macos support) ([5b766ae](https://github.com/appcelerator/titanium_mobile/commit/5b766ae9207255dcc60ee4c04b154cc4b0de04e9))

* [TIMOB-28012](https://jira.appcelerator.org/browse/TIMOB-28012) - expose new APIs to customize paging control ([6acad54](https://github.com/appcelerator/titanium_mobile/commit/6acad54cd44535a5efcb1556a8cce9e73032fb65))

* [TIMOB-27976](https://jira.appcelerator.org/browse/TIMOB-27976) - expose new APIs to use location AccuracyAuthorization ([a55f9a3](https://github.com/appcelerator/titanium_mobile/commit/a55f9a3fc21bd21c4e610e909d9039748b8b05e1))

* [TIMOB-27987](https://jira.appcelerator.org/browse/TIMOB-27987) - expose new iOS 14 APIs in Ti.UI.WebView ([840b0d2](https://github.com/appcelerator/titanium_mobile/commit/840b0d279f79248d1511fc518fa28fda9573be73))

* [TIMOB-27132](https://jira.appcelerator.org/browse/TIMOB-27132) - support macos/dist-macappstore targets ([cfac6e4](https://github.com/appcelerator/titanium_mobile/commit/cfac6e4bf1c6926c3727dcbff5c79221bfb651a2))

* [TIMOB-28078](https://jira.appcelerator.org/browse/TIMOB-28078) - support new APIs timeoutForResource and waitsForConnectivity ([09f20d2](https://github.com/appcelerator/titanium_mobile/commit/09f20d28bcfe8b610291f73dad7bb716cd3ac7d3))

* [TIMOB-28116](https://jira.appcelerator.org/browse/TIMOB-28116) - use/support/build xcframeworks ([133527e](https://github.com/appcelerator/titanium_mobile/commit/133527ed517518b13a64cd50a8dd65d61c8b76b7))

### Multiple platforms

* [TIMOB-28061](https://jira.appcelerator.org/browse/TIMOB-28061) - add os version major/minor int constants ([3fd8535](https://github.com/appcelerator/titanium_mobile/commit/3fd8535013797129fbe6ca381692fce5b7ae55da))

* [TIMOB-28061](https://jira.appcelerator.org/browse/TIMOB-28061) - add OS\_ANDROID/OS\_IOS for non-transpiled builds ([b21c5d7](https://github.com/appcelerator/titanium_mobile/commit/b21c5d79d00e6efad06fcea441712f57c3bbaa01))

* [TIMOB-28098](https://jira.appcelerator.org/browse/TIMOB-28098) - add OS\_VERSION\_PATCH global ([86d33df](https://github.com/appcelerator/titanium_mobile/commit/86d33df7d7ce85ff596f392e702095c04b3ca296))

* [TIMOB-28093](https://jira.appcelerator.org/browse/TIMOB-28093) - add uprightWidth/uprightHeight props to Ti.Blob ([09b4591](https://github.com/appcelerator/titanium_mobile/commit/09b4591804f3c15a1854c2d5a48a6c55645af26d))

* [TIMOB-28070](https://jira.appcelerator.org/browse/TIMOB-28070) - add vscode config files to app templates ([f8ef53a](https://github.com/appcelerator/titanium_mobile/commit/f8ef53ac276dace006cd40e65f7ffb798c38eb6e))

* [TIMOB-28030](https://jira.appcelerator.org/browse/TIMOB-28030) - add WebView blockedURLs property ([9006c00](https://github.com/appcelerator/titanium_mobile/commit/9006c0044c6657976951ebb5fb1ede4dde0e2d35))

### Android platform

* add Ti.Blob.toArrayBuffer() ([36e7244](https://github.com/appcelerator/titanium_mobile/commit/36e7244f5333f40b108eb7847403e629f98ff57f))

* [TIMOB-28098](https://jira.appcelerator.org/browse/TIMOB-28098) - add Ti.Platform.versionPatch ([587ddea](https://github.com/appcelerator/titanium_mobile/commit/587ddea90acf9a5660f6f5499186a09366aaf26c))

* support converting byte\[\] to ArrayBuffer ([9e77600](https://github.com/appcelerator/titanium_mobile/commit/9e77600acbaed9dd7d2d301c9fec3687bcf6a77b))

## Performance Improvements

### Multiple platforms

* make buffer shim more efficient ([9efe874](https://github.com/appcelerator/titanium_mobile/commit/9efe8742508abc1ce40f35d8add9100e675cbab3))

## SDK Module Versions

| Module | Android version | iOS Version |
| --- | --- | --- |
| facebook | 10.0.0 | 9.0.0 |
| ti.cloudpush | 7.1.0 | n/a |
| ti.map | 5.0.1 | 4.0.0 |
| ti.webdialog | 2.0.0 | 2.0.0 |
| ti.playservices | 17.1.1 | n/a |
| ti.identity | 3.0.2 | 2.0.0 |
| urlSession | n/a | 3.0.0 |
| ti.coremotion | n/a | 3.0.0 |
| ti.applesignin | n/a | 2.0.0 |
| ti.cloud | 3.2.11 | 3.2.11 |
| hyperloop | 6.0.0 | 6.0.0 |
