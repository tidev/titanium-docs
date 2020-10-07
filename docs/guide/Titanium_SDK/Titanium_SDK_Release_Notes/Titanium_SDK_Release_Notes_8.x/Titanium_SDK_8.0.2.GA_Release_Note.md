---
title: Titanium SDK 8.0.2.GA - 18 June 2019
weight: '100'
---

# Titanium SDK 8.0.2.GA - 18 June 2019

## About this release

Titanium SDK 8.0.2 is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release is no longer supported. End of support for this version will be 2019-12-18 or until the next patch release. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Community credits

* Hans Knöchel - [TIMOB-27080](https://jira.appcelerator.org/browse/TIMOB-27080), [TIMOB-26852](https://jira.appcelerator.org/browse/TIMOB-26852), [TIMOB-27080](https://jira.appcelerator.org/browse/TIMOB-27080)

* Ray Belisle - [TIMOB-27075](https://jira.appcelerator.org/browse/TIMOB-27075)

* David Bankier - [TIMOB-27106](https://jira.appcelerator.org/browse/TIMOB-27106)

## Fixed issues

* [TIMOB-26777](https://jira.appcelerator.org/browse/TIMOB-26777) - Android: Window UI disappears when connecting/disconnecting keyboard

* [TIMOB-26778](https://jira.appcelerator.org/browse/TIMOB-26778) - Android: Default "configChanges" settings are lost when overriding root activity in "tiapp.xml"

* [TIMOB-26852](https://jira.appcelerator.org/browse/TIMOB-26852) - iOS: Random JSCore crashes in SDK 8+

* [TIMOB-26895](https://jira.appcelerator.org/browse/TIMOB-26895) - Android: APK signing will fail when using MD5 keystore and JDK 8 or newer

* [TIMOB-27054](https://jira.appcelerator.org/browse/TIMOB-27054) - iOS: Ti.API.log() function no longer works within WebView's HTML JS code as of 8.0.0

* [TIMOB-27056](https://jira.appcelerator.org/browse/TIMOB-27056) - iOS: WebView HTML JS code can no longer access "Titanium." API (but "Ti." exists) as of 8.0.0

* [TIMOB-27067](https://jira.appcelerator.org/browse/TIMOB-27067) - Android: UI sometimes disappears on Android 9.0 and higher when battery saver turns on/off

* [TIMOB-27075](https://jira.appcelerator.org/browse/TIMOB-27075) - Android: Cannot change TabGroup tab icon or title after creation

* [TIMOB-27080](https://jira.appcelerator.org/browse/TIMOB-27080) - iOS: Memory leak and deadlock in SDK 8+

* [TIMOB-27084](https://jira.appcelerator.org/browse/TIMOB-27084) - Android: "tiapp.xml" is unable to override "AndroidManifest.xml" settings defined in AAR or "timodule.xml"

* [TIMOB-27099](https://jira.appcelerator.org/browse/TIMOB-27099) - iOS Debug: Error in console on variable view refresh during debug when using 8.1 Ti SDK

* [TIMOB-27101](https://jira.appcelerator.org/browse/TIMOB-27101) - Android: Window open() wrongly does a shared-element fade-in animation by default as of 8.0.1

* [TIMOB-27102](https://jira.appcelerator.org/browse/TIMOB-27102) - iOS: "appc run" wrongly edits a Titanium SDK installed file causing studio to beachball and rebuild its workspace

* [TIMOB-27106](https://jira.appcelerator.org/browse/TIMOB-27106) - iOS: MusicLibrary compilation error in 8.0.1.GA

* [TIMOB-27112](https://jira.appcelerator.org/browse/TIMOB-27112) - iOS: No javascript trace on IOS for requiring an unavailable module

* [TIMOB-27117](https://jira.appcelerator.org/browse/TIMOB-27117) - Android: TabGroup bar's background color is wrongly transparent on Android 4.4 as of 8.0.0

## API changes

There were no API changes for this release.

## SDK modules versions

### Android and iOS

| Module | Android version | iOS version |
| --- | --- | --- |
| urlSession | n/a | 2.1.0 |
| facebook | 8.0.0 | 6.0.0 |
| ti\_coremotion | n/a | 2.0.1 |
| ti\_map | 4.3.1 | 3.1.0 |
| ti\_safaridialog | n/a | 1.1.1 |
| ti\_webdialog | 1.1.0 | 1.1.0 |
| ti\_touchid | 3.0.1 | 2.1.4 |
| ti\_identity | 2.1.0 | 1.0.5 |
| ti\_cloudpush | 6.0.1 | n/a |
| ti\_playservices | 16.1.3 | n/a |

### CommonJS

| Module | Version |
| --- | --- |
| ti.cloud | 3.2.11 |

### Hyperloop

| Module | Version |
| --- | --- |
| Hyperloop | 4.0.2 |
