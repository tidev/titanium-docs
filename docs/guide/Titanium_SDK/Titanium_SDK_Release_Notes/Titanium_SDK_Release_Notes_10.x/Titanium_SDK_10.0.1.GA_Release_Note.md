---
title: Titanium SDK 10.0.1.GA - 28 July 2021
weight: '30'
---

# Titanium SDK 10.0.1.GA - 28 July 2021

## About this release

Titanium SDK 10.0.1 is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release (10.0.0) is no longer supported. Axway support for this version and prior versions released by Axway will be discontinued after March 1, 2022.

## Bug Fixes

### Multiple platforms

* [TIMOB-28398](https://jira.appcelerator.org/browse/TIMOB-28398) - convertPointToView() to apply ScrollView contentOffset ([a9d6c7d](https://github.com/tidev/titanium_mobile/commit/a9d6c7de2c31db12a39ed01bb57d617d9092f458))

### Android platform

* [TIMOB-28464](https://jira.appcelerator.org/browse/TIMOB-28464) - ECONNREFUSED error when starting emulator with Node.js 14 ([3bd1b4e](https://github.com/tidev/titanium_mobile/commit/3bd1b4e8af543cb1bd77a45171e3d1f5f8834951))

* [TIMOB-28397](https://jira.appcelerator.org/browse/TIMOB-28397) - ScrollView contentOffset ignores units ([906b6aa](https://github.com/tidev/titanium_mobile/commit/906b6aa4e1bbe21fca9599314e1d61dc4d9c95a9))

* [TIMOB-28463](https://jira.appcelerator.org/browse/TIMOB-28463) - Incorrect handling of paths on Windows when generating bootstrap.jsons ([a54296e](https://github.com/tidev/titanium_mobile/commit/a54296e31f74cc7905c42f9d0f1769222bc387f4))

* [TIMOB-28448](https://jira.appcelerator.org/browse/TIMOB-28448) - Ti.UI.Notifications logs errors because of alignment, margins and gravity ([765a1ec](https://github.com/tidev/titanium_mobile/commit/765a1ec2a5a4d38a9741b3046ccde25a065a4672))

* [TIMOB-28439](https://jira.appcelerator.org/browse/TIMOB-28439) - Improve ListView initial load performance ([35d2b16](https://github.com/tidev/titanium_mobile/commit/35d2b160aa95074154d363f14c6d14ae4c46ea40))

* [TIMOB-28454](https://jira.appcelerator.org/browse/TIMOB-28454) - longpress event wrongly fires on a tapped view with touch disabled ([5ac477c](https://github.com/tidev/titanium_mobile/commit/5ac477c9d427bdda1b11ae6b72e57aa7cdfefb09))

* [TIMOB-28460](https://jira.appcelerator.org/browse/TIMOB-28460) - Picker "change" event's "selectedValue" property does not provide row titles ([d527d0f](https://github.com/tidev/titanium_mobile/commit/d527d0f8b820a0957a6a5a6ea688ffd1977a151b))

* [TIMOB-28485](https://jira.appcelerator.org/browse/TIMOB-28485) - ProgressBar "tintColor" and "trackTintColor" are ignored ([5d362b7](https://github.com/tidev/titanium_mobile/commit/5d362b768fc4ee758aded9e99ac32a805853cfdb))

* [TIMOB-28434](https://jira.appcelerator.org/browse/TIMOB-28434) - Toolbar "items" do not update when changing dark/light theme ([babc993](https://github.com/tidev/titanium_mobile/commit/babc993cc731b830546e25fbc08af9e30a3479cc))

* [TIMOB-28358](https://jira.appcelerator.org/browse/TIMOB-28358) - "ti.map" module logs theme errors ([87211bc](https://github.com/tidev/titanium_mobile/commit/87211bc659b0a0989a99031b4a4bc131d58b0bc8))

* [TIMOB-28459](https://jira.appcelerator.org/browse/TIMOB-28459) - ScrollableView with databinding in Footer/HeaderView not showing up ([ea41474](https://github.com/tidev/titanium_mobile/commit/ea414748e4b9ccbab6c7f103d9ee1deb7c2234d6))

* [TIMOB-28462](https://jira.appcelerator.org/browse/TIMOB-28462) - ListView marked items may not be detected correctly ([7ee3fd1](https://github.com/tidev/titanium_mobile/commit/7ee3fd1d9133753b2b9f2e624052fe1cc083d774))

* [TIMOB-28501](https://jira.appcelerator.org/browse/TIMOB-28501) - Crash with MapView in TabGroup ([6fe46e3](https://github.com/tidev/titanium_mobile/commit/6fe46e33b68b333fdb0b1b26253a07a9cd407bf8))

* [TIMOB-28504](https://jira.appcelerator.org/browse/TIMOB-28504) - ScrollableView "views" property is wrongly empty before window open ([743475a](https://github.com/tidev/titanium_mobile/commit/743475a903c588421e7e1240907f03f5d48d763a))

### iOS platform

* [TIMOB-27236](https://jira.appcelerator.org/browse/TIMOB-27236) - Animating view width/height from 0 doesn't work ([9624472](https://github.com/tidev/titanium_mobile/commit/962447258a22bbaa20abd5ec07acffba47d7a7b6))

* [TIMOB-28483](https://jira.appcelerator.org/browse/TIMOB-28483) - Crash on startup when launching app on iOS 15 ([8daea84](https://github.com/tidev/titanium_mobile/commit/8daea8454fed2cbd24c55a639002e4b93e1a36bd))

* [TIMOB-28160](https://jira.appcelerator.org/browse/TIMOB-28160) - "unrecognized selector sent to instance" logged for errors from native side ([b5d97f2](https://github.com/tidev/titanium_mobile/commit/b5d97f21eede776d461f5356e5d5558c80ce7b17))

* [TIMOB-28145](https://jira.appcelerator.org/browse/TIMOB-28145) - Support string values with units for property values ([8c9b3eb](https://github.com/tidev/titanium_mobile/commit/8c9b3eb367800fe78e731ace7296aaeefad653f8))

* [TIMOB-28491](https://jira.appcelerator.org/browse/TIMOB-28491) - Setter not called properly anymore ([cf4073a](https://github.com/tidev/titanium_mobile/commit/cf4073ae6dfc78d163c4be479485536a26aba829))

* [TIMOB-28428](https://jira.appcelerator.org/browse/TIMOB-28428) - LargeTitle (animation) is not rendered correctly ([2624c81](https://github.com/tidev/titanium_mobile/commit/2624c8142b59570908182a78e7da997987774b73))

* [TIMOB-28458](https://jira.appcelerator.org/browse/TIMOB-28458) - Hyperloop defineClass() crash ([90aec65](https://github.com/tidev/titanium_mobile/commit/90aec6570c25e5335f4ce85db9cdb6634bf3ab5d))

* [TIMOB-28109](https://jira.appcelerator.org/browse/TIMOB-28109) - Top section in grouped ListView disappears when tapping SearchBar or on orientation change([4101958](https://github.com/tidev/titanium_mobile/commit/410195878a9c14968b6e6b686afc6fbeb8b38427))

* [TIMOB-28420](https://jira.appcelerator.org/browse/TIMOB-28420) - Unhandled native exceptions should show error dialog ([965705c](https://github.com/tidev/titanium_mobile/commit/965705caa0e55520962071415604a42ae7085f18))

* [TIMOB-28492](https://jira.appcelerator.org/browse/TIMOB-28492) - Properly dismiss search controller after editing ([52248c1](https://github.com/tidev/titanium_mobile/commit/52248c104d2e6627e146841adad8cb370328e7bd))

* [TIMOB-28497](https://jira.appcelerator.org/browse/TIMOB-28497) - Hierarchy error when using SplitWindow and NavigationWindow ([8e5b149](https://github.com/tidev/titanium_mobile/commit/8e5b149942d1de58be9c6362305c9e388c67feb4))

* [TIMOB-28507](https://jira.appcelerator.org/browse/TIMOB-28507) - Ti.App "arguments" property and getArguments() method are not defined ([034afee](https://github.com/tidev/titanium_mobile/commit/034afeeecea399caf10d15006a369d10104d17a6))

* [TIMOB-28509](https://jira.appcelerator.org/browse/TIMOB-28509) - Revert modules targeting iOS 11 ([4a0153f](https://github.com/tidev/titanium_mobile/commit/4a0153f9017a11401662cdff63f8f2eb966c97e6))

## Features

### Android platform

* [TIMOB-28370](https://jira.appcelerator.org/browse/TIMOB-28370) - Add title support to Ti.UI.Switch slider style ([1c41606](https://github.com/tidev/titanium_mobile/commit/1c41606a1ffe024e67fc6a507d5daab1bb8f4ebf))

* [TIMOB-27801](https://jira.appcelerator.org/browse/TIMOB-27801) - Building the SDK should auto-download NDK if not installed ([8c44bb4](https://github.com/tidev/titanium_mobile/commit/8c44bb4792162d2aed34a1bbdbf018bcc9223c09))

* [TIMOB-28241](https://jira.appcelerator.org/browse/TIMOB-28241) - Remove "WebViewClient.jar" from SDK ([502f17e](https://github.com/tidev/titanium_mobile/commit/502f17e647996cfe33c76fbcf586009e7bd443ae))

* [TIMOB-28377](https://jira.appcelerator.org/browse/TIMOB-28377) - Remove deprecated usage of "ndk.dir" in "local.properties" file ([8c44bb4](https://github.com/tidev/titanium_mobile/commit/8c44bb4792162d2aed34a1bbdbf018bcc9223c09))

* [TIMOB-28425](https://jira.appcelerator.org/browse/TIMOB-28425) - Change "plain" Ti.UI.Picker to use native spinners ([007f333](https://github.com/tidev/titanium_mobile/commit/007f3334361688bac583164765ab93c9abcd7794))

* [TIMOB-28426](https://jira.appcelerator.org/browse/TIMOB-28426) - Add "datePickerStyle" support to Ti.UI.Picker ([007f333](https://github.com/tidev/titanium_mobile/commit/007f3334361688bac583164765ab93c9abcd7794))

* [TIMOB-28427](https://jira.appcelerator.org/browse/TIMOB-28427) - Add "borderStyle" and "hintText" properties to Ti.UI.Picker ([007f333](https://github.com/tidev/titanium_mobile/commit/007f3334361688bac583164765ab93c9abcd7794))

* [TIMOB-28441](https://jira.appcelerator.org/browse/TIMOB-28441) - Remove unneeded 10.0.0 deprecation warnings ([76f9993](https://github.com/tidev/titanium_mobile/commit/76f9993c3211016caa3d57e20bdf9e0b676ab39e), [0792f50](https://github.com/tidev/titanium_mobile/commit/0792f50cb12a1820ed0efcc6f1e031f7143f2413))

* [TIMOB-28455](https://jira.appcelerator.org/browse/TIMOB-28455) - Update gradle build tools to 4.2.x ([8afbb23](https://github.com/tidev/titanium_mobile/commit/8afbb232044f04472232957474e232f3114451c5))

* [TIMOB-28456](https://jira.appcelerator.org/browse/TIMOB-28456) - Remove deprecated usage of jcenter() repo from gradle ([805722e](https://github.com/tidev/titanium_mobile/commit/805722e84c2b7ac605bd1a2e39d6986f9dc25284))

* [TIMOB-28457](https://jira.appcelerator.org/browse/TIMOB-28457) - Update module Kotlin language support to 1.5.x ([d360bd8](https://github.com/tidev/titanium_mobile/commit/d360bd8a14c06d3566ad4d3555d5e968f8adb34c))

### iOS

* [TIMOB-28412](https://jira.appcelerator.org/browse/TIMOB-28412) - Optimize JS Promise creation on iOS 12 ([a07c56c](https://github.com/tidev/titanium_mobile/commit/a07c56c8fd293aa7ca68a00e36c3983237ed1996))

* [TIMOB-28461](https://jira.appcelerator.org/browse/TIMOB-28461) - Support running LiveView with Hyperloop ([98847ff](https://github.com/tidev/titanium_mobile/commit/98847ff103dea01c56b274e3e857c6ac8a956331))

### Multiple platforms

* [TIMOB-28367](https://jira.appcelerator.org/browse/TIMOB-28367) - Add animation support to Ti.UI.ProgressBar ([387d6be](https://github.com/tidev/titanium_mobile/commit/387d6be1db0b2e047e20ab200048325de4a969e6))

* [TIMOB-25705](https://jira.appcelerator.org/browse/TIMOB-25705) - Add "enableCopy" property to TextField/TextArea ([f8610c9](https://github.com/tidev/titanium_mobile/commit/f8610c99c043acd03df095214f9dac623c1769b5))

* [TIMOB-28369](https://jira.appcelerator.org/browse/TIMOB-28369) - Add Ti.UI.overrideUserInterfaceStyle property ([2a32030](https://github.com/tidev/titanium_mobile/commit/2a32030fcb89232599bc2f7975703f3d3d6d2895))

## SDK Module Versions

| Module | Android version | iOS Version |
| --- | --- | --- |
| facebook | 11.0.2 | 11.0.1 |
| ti.cloudpush | 7.1.0 | n/a |
| ti.map | 5.3.2 | 5.1.1 |
| ti.webdialog | 2.0.0 | 3.0.1 |
| ti.playservices | 17.5.0 | n/a |
| ti.identity | 3.0.2 | 4.0.1 |
| urlSession | n/a | 4.0.1 |
| ti.coremotion | n/a | 4.0.1 |
| ti.applesignin | n/a | 3.1.1 |
| ti.cloud | 3.2.11 | 3.2.11 |
| hyperloop | 7.0.4 |  |
