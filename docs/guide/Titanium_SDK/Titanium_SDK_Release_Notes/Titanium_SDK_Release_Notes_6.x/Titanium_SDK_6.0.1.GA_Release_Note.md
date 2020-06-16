---
title: Titanium SDK 6.0.1.GA - 21 December 2016
weight: '190'
---

# Titanium SDK 6.0.1.GA - 21 December 2016

## Contents

## About this release

Titanium SDK 6.0.1.GA is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Fixed issues

* [TIMOB-23313](https://jira.appcelerator.org/browse/TIMOB-23313) - iOS app rejected because "Invalid Swift Support - The SwiftSupport folder is missing"

* [TIMOB-24018](https://jira.appcelerator.org/browse/TIMOB-24018) - iOS: Calling Titanium.Media.hasAudioPermissions() is crashing the app

* [TIMOB-24069](https://jira.appcelerator.org/browse/TIMOB-24069) - iOS: Unable to build for Apple Watch Series 2 WatchOS 3.1 sim

* [TIMOB-24136](https://jira.appcelerator.org/browse/TIMOB-24136) - iOS: Simulator won't install and launch app using Xcode 8.2 / iOS 10.2

* [TIMOB-24140](https://jira.appcelerator.org/browse/TIMOB-24140) - iOS: Ti.Media.audioSessionCategory not working with Ti.Media.Sound

* [TIMOB-24142](https://jira.appcelerator.org/browse/TIMOB-24142) - iOS: Custom Ti.Facebook entitlements-file overrides CLI-generated entitlements

* [TIMOB-24148](https://jira.appcelerator.org/browse/TIMOB-24148) - iOS: CommonJS modules/Library code cannot share names with native classes

* [TIMOB-24152](https://jira.appcelerator.org/browse/TIMOB-24152) - iOS: Ti.Media.saveToPhotoGallery crashes on device in SDK 6.0.0.GA

* [TIMOB-24154](https://jira.appcelerator.org/browse/TIMOB-24154) - CLI: Lack of iOS adhoc provision warns with bad verbiage

* [TIMOB-24157](https://jira.appcelerator.org/browse/TIMOB-24157) - Windows: CLI doesn't run ws-local app

* [TIMOB-24169](https://jira.appcelerator.org/browse/TIMOB-24169) - iOS: backgroundTopCap + backgroundLeftCap broken on Ti.UI.Button in 6.0.0.GA (Regression)

* [TIMOB-24204](https://jira.appcelerator.org/browse/TIMOB-24204) - Android: require() not working with Android if path has ../ after Titanium SDK 6.0.0+

* [TIMOB-24205](https://jira.appcelerator.org/browse/TIMOB-24205) - Ti.Media.CAMERA\_AUTHORIZATION\_\* permissions are \`undefined\` in some 6.0.0.GA cases

* [TIMOB-24209](https://jira.appcelerator.org/browse/TIMOB-24209) - Android: <WebView> with link to video does not play after upgrade to TiSDK 6.0.0 (Regression)

* [TIMOB-24219](https://jira.appcelerator.org/browse/TIMOB-24219) - iOS: "--device-family" expects values other than help describes

* [TIMOB-24227](https://jira.appcelerator.org/browse/TIMOB-24227) - iOS: New simulator is launched for subsequent builds to same sim

* [TIMOB-24241](https://jira.appcelerator.org/browse/TIMOB-24241) \- iOS: Building to dist-appstore does not add the application to Xcode.

## Improvements

* [TIMOB-24041](https://jira.appcelerator.org/browse/TIMOB-24041) - Include module hooks in packaged zip

    * The "hooks" folder now gets included in the packaged module

* [TIMOB-24229](https://jira.appcelerator.org/browse/TIMOB-24229) - iOS: Add deprecation notice when --platform is "ipad "

    * Added a depreciation notice with --platform is set to "ipad"

## API changes

There we no changes to the API in this release.
