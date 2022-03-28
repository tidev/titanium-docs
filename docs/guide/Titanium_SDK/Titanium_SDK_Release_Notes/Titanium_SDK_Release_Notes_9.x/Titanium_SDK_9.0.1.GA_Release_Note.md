---
title: Titanium SDK 9.0.1.GA - 16 April 2020
weight: '130'
---

# Titanium SDK 9.0.1.GA - 16 April 2020

## About this release

Titanium SDK 9.0.1 is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release (9.0.0) is no longer supported. End of support for this version will be 2020-10-16 or until the next patch release. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_deprecation_policy.html) and [Nominal Lifetimes](https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_product_lifecycle.html#AxwayAppceleratorProductLifecycle-NominalLifetimes)documents for details.

::: danger ❗️ Warning
With the release of Titanium SDK 9.0.0, we will no longer support Node.js 8.X. Node 10.13.0 is the new minimum supported version.
:::
::: danger ❗️ Warning
Deprecation Notice: The next major release of the Titanium CLI, version 6.0.0, will no longer support plugins and hooks for commands other than "appc ti clean", "ti clean", "appc run", and "ti build". Titanium CLI v6 will have a new plugin system with a new hook system and it will be incompatible with Titanium CLI v5 plugins and hooks. Please refer to [TIMOB-27233](https://jira.appcelerator.org/browse/TIMOB-27233) and [TIMOB-27255](https://jira.appcelerator.org/browse/TIMOB-27255) for more information.
:::
::: danger ❗️ Warning
With the release of Titanium SDK 9.0.0, Windows platform will no longer be supported and has been removed from distribution in the SDK. Customers on Pro and Enterprise plans may continue to request critical fixes on SDK 8.x releases until August 18, 2020.
:::

## Bug Fixes

### Android platform

* [TIMOB-17203](https://jira.appcelerator.org/browse/TIMOB-17203) - TextField keyboardType: parity issues between iOS and Android

* [TIMOB-26678](https://jira.appcelerator.org/browse/TIMOB-26678) - Unnecessary default notification channel created when using a custom one ([1652d08](https://github.com/tidev/titanium_mobile/commit/1652d0878f5735db2a1673d46af1254e91147937))

* [TIMOB-27493](https://jira.appcelerator.org/browse/TIMOB-27493) - Videos do not play correctly on Android 5.1 (API 22) ([960d208](https://github.com/tidev/titanium_mobile/commit/960d208898939f37c9a11621e3e6a2ce267e50a8)) ([5a5c0f5](https://github.com/tidev/titanium_mobile/commit/5a5c0f5201d1d2209273196348968e3d94088f2c))

* [TIMOB-27530](https://jira.appcelerator.org/browse/TIMOB-27530) - UI glitches out when using 'applyProperties' with Scroll View Touch Listeners

* [TIMOB-27695](https://jira.appcelerator.org/browse/TIMOB-27695) - Heavy image processing methods do not trigger GC ([26982f3](https://github.com/tidev/titanium_mobile/commit/26982f304121cd235cc6b04b9dc3a3c87614a8bd))

* [TIMOB-27741](https://jira.appcelerator.org/browse/TIMOB-27741) - fall through request permissions ([7bede6f](https://github.com/tidev/titanium_mobile/commit/7bede6f7cf52ca78bec65d514ec3e930cc9428c3))

* [TIMOB-27742](https://jira.appcelerator.org/browse/TIMOB-27742) - Minor camera focus issues ([ab3d8c6](https://github.com/tidev/titanium_mobile/commit/ab3d8c6083d549d42a1b48ca401086fa074e0374))

* [TIMOB-27777](https://jira.appcelerator.org/browse/TIMOB-27777) - Obtain holder for module references ([764f024](https://github.com/tidev/titanium_mobile/commit/764f024daf5b95a288104d5e374c2eb35b80d641))

* [TIMOB-27780](https://jira.appcelerator.org/browse/TIMOB-27780) - Hyperloop builds fail if JDK 12 or higher is installed ([#11510](https://github.com/tidev/titanium_mobile/pull/11510))

* [TIMOB-27781](https://jira.appcelerator.org/browse/TIMOB-27781) - App/Module builds fail with JDK 13 as of 9.0.0 ([caaaa04](https://github.com/tidev/titanium_mobile/commit/caaaa0480d3d2ad52e637b34b92e36f0d2195c3e))

* [TIMOB-27784](https://jira.appcelerator.org/browse/TIMOB-27784) - Running "clean" on a module will error if "libs" folder does not exist ([e90b8af](https://github.com/tidev/titanium_mobile/commit/e90b8af9304a4911edc50fed3b325f7d2504bdc7))

* [TIMOB-27823](https://jira.appcelerator.org/browse/TIMOB-27823) - javascript files/content assumed to be binary for Ti.Blob on apilevel 29+ ([efa3c64](https://github.com/tidev/titanium_mobile/commit/efa3c64e75752ea3b1ea082a41e78584df838462))

* [TIMOB-27837](https://jira.appcelerator.org/browse/TIMOB-27837) - Custom theme ignored by modal/translucent windows as of 9.0.0 ([8e3ce4d](https://github.com/tidev/titanium_mobile/commit/8e3ce4da0d1f83ac7f258cb9e1c9092250191951))

### iOS platform

* [TIMOB-27751](https://jira.appcelerator.org/browse/TIMOB-27751) - WKWebView cookies issue ([aab53e7](https://github.com/tidev/titanium_mobile/commit/aab53e701ad1f4d50698283ffdb3e2f161624585))

* [TIMOB-27754](https://jira.appcelerator.org/browse/TIMOB-27754) - SearchBar text color and hinTextColor does not work properly. ([f881591](https://github.com/tidev/titanium_mobile/commit/f88159142a52a8acf6b6b933fd7e5bd8789d40ab))

* [TIMOB-27768](https://jira.appcelerator.org/browse/TIMOB-27768) - TypeError: Cannot read property 'logger' of undefined ([1c0d85f](https://github.com/tidev/titanium_mobile/commit/1c0d85f865a11b935ed86e49e963da54274be823))

* [TIMOB-27799](https://jira.appcelerator.org/browse/TIMOB-27799) - App crashes when setting video player url to null ([01e5798](https://github.com/tidev/titanium_mobile/commit/01e57985826b7552e1e23c63f4a31c61b622156e))

* [TIMOB-27820](https://jira.appcelerator.org/browse/TIMOB-27820) - iOS 10: SearchBar color property does not work with showCancel property ([e013135](https://github.com/tidev/titanium_mobile/commit/e013135988dc00436c5da9cfc690bd965240306e))

* [TIMOB-27822](https://jira.appcelerator.org/browse/TIMOB-27822) - Ti.UI.iPad.Popover including arrow in content view on iOS 13 ([9b349fb](https://github.com/tidev/titanium_mobile/commit/9b349fbe312774a5f25d6f11aac85db36d41bf15))

* [TIMOB-27824](https://jira.appcelerator.org/browse/TIMOB-27824) - Hyperloop: iOS - build fails after updating XCode to 11.4 ([14f7bb5](https://github.com/tidev/titanium_mobile/commit/14f7bb5b666534342aa5c8afefab53e61d7b5729))

* [TIMOB-27827](https://jira.appcelerator.org/browse/TIMOB-27827) - Error reporting is broken after updating to Xcode 11.4 / iOS 13.4 ([3e06680](https://github.com/tidev/titanium_mobile/commit/3e0668000ef1baac5dff3570cf2a36c61ee91d8e))

## Improvements

### Android platform

* [TIMOB-27574](https://jira.appcelerator.org/browse/TIMOB-27574) - Replace SDK "build.properties" with gradle generated "BuildConfig" class

* [TIMOB-27745](https://jira.appcelerator.org/browse/TIMOB-27745) - Add "google-services.json" support for Firebase ([5422e25](https://github.com/tidev/titanium_mobile/commit/5422e25d415f77e62486d1fde839ebdffb6de523))

* [TIMOB-27755](https://jira.appcelerator.org/browse/TIMOB-27755) - Add NDK side-by-side support ([0935163](https://github.com/tidev/titanium_mobile/commit/0935163c97cd247e35b6a6546c49aa4084f9e3ed))

* [TIMOB-27778](https://jira.appcelerator.org/browse/TIMOB-27778) - Update gradle build tools to 3.6.x

* improve sdk kroll-apt incremental build times ([558b6ed](https://github.com/tidev/titanium_mobile/commit/558b6ed670dc376811ecda6d26d1aaeffaccadfd))

* build should auto-download NDK if not installed ([6c1a206](https://github.com/tidev/titanium_mobile/commit/6c1a206c6b66de3bf53578be3f0547e2956944c7))

## SDK Module Versions

| Module | Android version | iOS Version |
| --- | --- | --- |
| facebook | 9.0.0 | 7.0.1 |
| ti.cloudpush | 7.0.0 | n/a |
| ti.map | 5.0.1 | 3.3.0 |
| ti.webdialog | 2.0.0 | 1.1.0 |
| ti.playservices | 17.1.1 | n/a |
| ti.identity | 3.0.1 | 1.1.0 |
| urlSession | n/a | 2.2.0 |
| ti.coremotion | n/a | 2.1.0 |
| ti.applesignin | n/a | 1.1.1 |
| ti.cloud | 3.2.11 | 3.2.11 |
| hyperloop | 5.0.3 | 5.0.3 |
