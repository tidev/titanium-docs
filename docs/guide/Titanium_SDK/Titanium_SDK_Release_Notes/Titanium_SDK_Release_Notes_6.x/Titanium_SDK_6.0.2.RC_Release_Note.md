---
title: Titanium SDK 6.0.2.RC - 17 February 2017
weight: '180'
---

# Titanium SDK 6.0.2.RC - 17 February 2017

## Contents

## About This Release

Titanium SDK 6.0.2.RC is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## New features

### iOS platform

* [TIMOB-11278](https://jira.appcelerator.org/browse/TIMOB-11278) - iOS: Add method to ignore invalid SSL certificate

    * Added support for `ignoreSslError` property for `Titanium.UI.WebView` API

## Fixed issues patch releases

* [TIMOB-19540](https://jira.appcelerator.org/browse/TIMOB-19540) - iOS: Ti.Network.HTTPClient does not work in synchronous mode in SDK 3.3.0+

* [TIMOB-20206](https://jira.appcelerator.org/browse/TIMOB-20206) - Android : TiCompositeLayout's viewSorter does not abide by Comparator's contract

* [TIMOB-20459](https://jira.appcelerator.org/browse/TIMOB-20459) - Android newintent event not fired

* [TIMOB-23502](https://jira.appcelerator.org/browse/TIMOB-23502) - Android: Duplicate entry: org/appcelerator/titanium/gen/bindings.json in custom module

* [TIMOB-24135](https://jira.appcelerator.org/browse/TIMOB-24135) - Windows: eventListener not maintained when a list is filtered based off a search

* [TIMOB-24183](https://jira.appcelerator.org/browse/TIMOB-24183) - Windows Unable to build to Windows device with SDK 6.1.0

* [TIMOB-24208](https://jira.appcelerator.org/browse/TIMOB-24208) - Android: GoogleMaps markers and routing are invisible in Ti.UI.WebView (Regression)

* [TIMOB-24243](https://jira.appcelerator.org/browse/TIMOB-24243) - Android-Ti.UI.SIZE doesn't work properly with horizontal layouts

* [TIMOB-24253](https://jira.appcelerator.org/browse/TIMOB-24253) - Android: androidback event not working in Ti SDK 6.0.0.GA

* [TIMOB-24256](https://jira.appcelerator.org/browse/TIMOB-24256) - Android: openPhotoGallery is not working at all on SDK 6.0.0.GA,6.0.1.GA

* [TIMOB-24261](https://jira.appcelerator.org/browse/TIMOB-24261) - iOS: App rejected because of missing NSPhotoLibraryUsageDescription key

* [TIMOB-24304](https://jira.appcelerator.org/browse/TIMOB-24304) - Android: Fetching Geolocation from background service causes crash on SDK > 22

* [TIMOB-24308](https://jira.appcelerator.org/browse/TIMOB-24308) - Android: Child view's percent width incorrect of horizontal layout parent view (6.1.0 regression)

* [TIMOB-24311](https://jira.appcelerator.org/browse/TIMOB-24311) - Android: Log always shows non-titanium logs

* [TIMOB-24314](https://jira.appcelerator.org/browse/TIMOB-24314) - iOS: Ti.UI.iOS.FeedbackGenerator crashes on kroll-thread

* [TIMOB-24325](https://jira.appcelerator.org/browse/TIMOB-24325) - iOS: Build fails when using only Ti.Media.openMusicLibrary

* [TIMOB-24337](https://jira.appcelerator.org/browse/TIMOB-24337) - iOS: Using Ti.App.iOS.createSearchQuery without other UserActivity API's causes build to fail on device

* [TIMOB-24358](https://jira.appcelerator.org/browse/TIMOB-24358) - iOS: Ti.Media.systemMusicPlayer crashes with Apple Music

* [TIMOB-24362](https://jira.appcelerator.org/browse/TIMOB-24362) - iOS: Unable to package for Ad Hoc with Xcode 8.3 Beta

* [TIMOB-24394](https://jira.appcelerator.org/browse/TIMOB-24394) - iOS: "Unable to locate iOS Package Application tool" using Xcode 8.3 for device builds

* [TIMOB-24395](https://jira.appcelerator.org/browse/TIMOB-24395) - iOS: subsequent dist builds fail

## API changes

No APIs were changed for this release.
