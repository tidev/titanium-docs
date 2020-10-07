---
title: Titanium SDK 8.2.1.GA - 25 October 2019
weight: '40'
---

# Titanium SDK 8.2.1.GA - 25 October 2019

## About this release

Titanium SDK 8.2.1 is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release is no longer supported. End of support for this version will be 2020-04-25 or until the next patch release. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

::: danger ❗️ Warning
The latest version of Xcode (11.2.1) has introduced a breaking change to our CLI, we recommend waiting with updating Xcode until we have solved that problem, or downgrade Xcode in case you already updated. You can download Xcode 11.1 from the [Apple Developer site](https://developer.apple.com).
:::
::: danger ❗️ Warning
With the release of Titanium SDK 9.0.0, we will no longer support Node.js 8.X. Node 10.13.0 will be the new minimum supported version with SDK 9.0.0.
:::

## New features

* [MOD-2545](https://jira.appcelerator.org/browse/MOD-2545) - ti.map: update to 3.3.0-ios, 4.5.0-android module releases ([e1156a0](https://github.com/appcelerator/titanium_mobile/commit/e1156a09c06a902826c03a5b3ffc2ef31e3c0811))

## Community credits

* teunklijn

    * [TIMOB-27165](https://jira.appcelerator.org/browse/TIMOB-27165) - localnotificationaction event contains notification id instead of the action id ([3a42ee4](https://github.com/appcelerator/titanium_mobile/commit/3a42ee478fd387db28e23c761527720d23c3ffea))

## Fixed issues

### Android platform

* [TIMOB-27431](https://jira.appcelerator.org/browse/TIMOB-27431), [TIMOB-27434](https://jira.appcelerator.org/browse/TIMOB-27434) - Re-layout of deeply nested views can cause performance issues as of 7.5.0 ([38dc352](https://github.com/appcelerator/titanium_mobile/commit/38dc3523699fe3e1e81162aa564658365fd23126))

* [TIMOB-27398](https://jira.appcelerator.org/browse/TIMOB-27398) - Random assets missing after compiling

### iOS platform

* [TIMOB-27403](https://jira.appcelerator.org/browse/TIMOB-27403) - Semantic colors file lookup does not work correctly in classic applications ([df39a91](https://github.com/appcelerator/titanium_mobile/commit/df39a91fd4586f9e3dbcb12a70e607944b1128df))

* [TIMOB-27435](https://jira.appcelerator.org/browse/TIMOB-27435) - Building using Xcode 10.3 and 8\_2\_X Throws a Compile Error ([ca3f3e3](https://github.com/appcelerator/titanium_mobile/commit/ca3f3e3d32dc5e64f9da9357da39029c5151ef41))

* [TIMOB-27354](https://jira.appcelerator.org/browse/TIMOB-27354) - Ti.App.getArguments().url undefined when resuming ([44074a8](https://github.com/appcelerator/titanium_mobile/commit/44074a80683cb91ca3e7433fd066ad4f6a0f8f69))

* [TIMOB-27413](https://jira.appcelerator.org/browse/TIMOB-27413) - Window hideShadow and shadowImage property doesn't works on iOS 13 ([c6a4ba7](https://github.com/appcelerator/titanium_mobile/commit/c6a4ba78c83aea52877c77becc583ad4e47ba7de))

* [TIMOB-27165](https://jira.appcelerator.org/browse/TIMOB-27165) - The localnotificationaction event always contains the notification identifier instead of the action identifier ([3a42ee4](https://github.com/appcelerator/titanium_mobile/commit/3a42ee478fd387db28e23c761527720d23c3ffea))

* [TIMOB-27267](https://jira.appcelerator.org/browse/TIMOB-27267) - Image tintColor is not always applied if image is remote ([1a47522](https://github.com/appcelerator/titanium_mobile/commit/1a4752270427cf0be5a40ecde564e21b2bdd18d2))

* [TIMOB-27419](https://jira.appcelerator.org/browse/TIMOB-27419) - Ti.Contacts.getAllPeople() fails on iOS 13: support new property to remove note ([8f1b2a6](https://github.com/appcelerator/titanium_mobile/commit/8f1b2a6385b4839ae99b38897426c3a12ef76db9))

* [MOD-2542](https://jira.appcelerator.org/browse/MOD-2542) - update ti.applesignin module to 1.1.1 ([51ea381](https://github.com/appcelerator/titanium_mobile/commit/51ea3817cef54b24b1e8cae1d0118195e4cb406d))

* [TIMOB-27383](https://jira.appcelerator.org/browse/TIMOB-27383) - Volume event is not firing on SDK 8.1.1.GA ([6d4e417](https://github.com/appcelerator/titanium_mobile/commit/6d4e41741329d73b9bcd145b82924843b2a4b48d))

* [TIMOB-20487](https://jira.appcelerator.org/browse/TIMOB-20487), [TIMOB-26963](https://jira.appcelerator.org/browse/TIMOB-26963) - Require'ing a JSON file appends file path to resulting JSON string

* [TIMOB-27207](https://jira.appcelerator.org/browse/TIMOB-27207) - TableView / TableViewRow memory leak

* [TIMOB-27338](https://jira.appcelerator.org/browse/TIMOB-27338) - Invalid iOS simulator error is shown when doing concurrent builds with iOS 13

* [TIMOB-27365](https://jira.appcelerator.org/browse/TIMOB-27365) - Logger sometimes does not connect on concurrent builds (Xcode 11)

* [TIMOB-27394](https://jira.appcelerator.org/browse/TIMOB-27394) - Application Shortcuts cannot handle SF Symbols

* [TIMOB-27427](https://jira.appcelerator.org/browse/TIMOB-27427) - iOS 13: Natively presented modal windows are not dismissed properly

* [TIMOB-27446](https://jira.appcelerator.org/browse/TIMOB-27446) - When blurring SearchBar with ListView overlay doesn't behave well on iOS 13

* Native Modules cannot compile if count method defined on type: fix TiBase header to order macros properly, re-use macros ([94d29f2](https://github.com/appcelerator/titanium_mobile/commit/94d29f21e87053e90f54102db8d92b5ef2ae170e))
