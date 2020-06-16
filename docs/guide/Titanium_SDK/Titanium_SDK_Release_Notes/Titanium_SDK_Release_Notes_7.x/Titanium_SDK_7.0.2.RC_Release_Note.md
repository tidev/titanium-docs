---
title: Titanium SDK 7.0.2.RC 25 January 2018
weight: '260'
---

# Titanium SDK 7.0.2.RC 25 January 2018

## About this release

Titanium SDK 7.0.2.RC is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Community credits

* [Richard Lustemberg](https://github.com/rlustemberg) - Ensuring usage of macros bundled core utilities and shells when adding to iOS buildPhases ([TIMOB-25576](https://jira.appcelerator.org/browse/TIMOB-25576))

* [Aleksey Gureiev](https://github.com/alg)

    * Android: EmailDialog file attachments not working on Android 7 and higher ([TIMOB-25541](https://jira.appcelerator.org/browse/TIMOB-25541))

    * Android: EmailDialog fails to attach files when using Outlook ([TIMOB-23482](https://jira.appcelerator.org/browse/TIMOB-23482))

## Fixed issues

* [TIMOB-17572](https://jira.appcelerator.org/browse/TIMOB-17572) - iOS: ActivityIndicator does not reset when used in ListView

* [TIMOB-23482](https://jira.appcelerator.org/browse/TIMOB-23482) - Android: EmailDialog fails to attach files when using Outlook

* [TIMOB-23634](https://jira.appcelerator.org/browse/TIMOB-23634) - iOS: Toolbar on TextField doesn't hide smoothly when calling blur

* [TIMOB-25259](https://jira.appcelerator.org/browse/TIMOB-25259) - Android: Runtime error "exposed beyond app through Intent.getData()" on API 24 & higher when using Ti.Media.previewImage()

* [TIMOB-25506](https://jira.appcelerator.org/browse/TIMOB-25506) - Android: ImageView sometimes crashes when loading via URL

* [TIMOB-25518](https://jira.appcelerator.org/browse/TIMOB-25518) - Android App Crash due to Attempt to invoke virtual method 'void [java.net](http://java.net).HttpURLConnection.disconnect()' on a null object reference

* [TIMOB-25540](https://jira.appcelerator.org/browse/TIMOB-25540) - Android: onTrimMemory can cause crash

* [TIMOB-25541](https://jira.appcelerator.org/browse/TIMOB-25541) - Android: EmailDialog file attachments not working on Android 7 and higher

* [TIMOB-25565](https://jira.appcelerator.org/browse/TIMOB-25565) - Android: Ti.Media.showCamera with an overlay fires success callback multiple times on some devices

* [TIMOB-25576](https://jira.appcelerator.org/browse/TIMOB-25576) - Ensuring usage of macros bundled core utilities and shells when adding to iOS buildPhases

* [TIMOB-25597](https://jira.appcelerator.org/browse/TIMOB-25597) - Android: Multidexed apps crash on startup on Android 4.x

* [TIMOB-25617](https://jira.appcelerator.org/browse/TIMOB-25617) - Android: Push notifications not shown in statusbar on Android 8 if app is backgrounded

* [TIMOB-25620](https://jira.appcelerator.org/browse/TIMOB-25620) - Android: SOASTA breaks Android 8.0+ WebView events

* [TIMOB-25621](https://jira.appcelerator.org/browse/TIMOB-25621) - Android: Native libraries are not included with compiled Titanium modules

* [TIMOB-25637](https://jira.appcelerator.org/browse/TIMOB-25637) - iOS: Window toolbar animates when opening window

* [TIMOB-25640](https://jira.appcelerator.org/browse/TIMOB-25640) - iOS: Ti.Media.VideoPlayer "playbackState" constants are undefined

* [TIMOB-25646](https://jira.appcelerator.org/browse/TIMOB-25646) - iOS: After Listview Search overlay not appearing

* [TIMOB-25652](https://jira.appcelerator.org/browse/TIMOB-25652) - iOS: Ad-hoc build fails when packaging with WatchApp

* [TIMOB-25656](https://jira.appcelerator.org/browse/TIMOB-25656) - Android. TiViewProxy.getOrCreateView returns null on Titanium 7.0.0+

* [TIMOB-25660](https://jira.appcelerator.org/browse/TIMOB-25660) - Android: ListView 'canScroll' property cannot be set dynamically

* [TIMOB-25661](https://jira.appcelerator.org/browse/TIMOB-25661) - Android: Animation is not behaving properly in Android v7.0.0

* [TIMOB-25672](https://jira.appcelerator.org/browse/TIMOB-25672) - iOS: Address 10+ compiler warnings and general issues in source project

* [TIMOB-25674](https://jira.appcelerator.org/browse/TIMOB-25674) - iOS Build: Folders beginning with a platform name are excluded from app

* [TIMOB-25677](https://jira.appcelerator.org/browse/TIMOB-25677) - iOS: Ti.Map - App crashes when re-assigning annotations with clustering enabled

* [TIMOB-25680](https://jira.appcelerator.org/browse/TIMOB-25680) - iOS 11.2: DocumentViewer not displaying PDF files (Apple regression)

## API changes

There were no API changes in this release.
