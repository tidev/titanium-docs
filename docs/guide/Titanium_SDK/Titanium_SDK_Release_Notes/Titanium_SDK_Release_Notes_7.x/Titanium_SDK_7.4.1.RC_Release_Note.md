---
title: Titanium SDK 7.4.1.RC - 12 October 2018
weight: '100'
---

# Titanium SDK 7.4.1.RC - 12 October 2018

## About this release

Titanium SDK 7.4.1.RC is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Community credits

* Carlos Henrique Zinato - [TIMOB-26391](https://jira.appcelerator.org/browse/TIMOB-26391)

* Joe Falcone - [TIMOB-26404](https://jira.appcelerator.org/browse/TIMOB-26404)

* Tom Giessel - [TIMOB-26413](https://jira.appcelerator.org/browse/TIMOB-26413)

* Greg Balmer - [TIMOB-26399](https://jira.appcelerator.org/browse/TIMOB-26399)

* Richard Lustemberg - [TIMOB-26444](https://jira.appcelerator.org/browse/TIMOB-26444)

* Alejandro Capel - [TIMOB-26433](https://jira.appcelerator.org/browse/TIMOB-26433)

* Christy Thomas - [TIMOB-26425](https://jira.appcelerator.org/browse/TIMOB-26425)

## Fixed issues

* [TIMOB-26391](https://jira.appcelerator.org/browse/TIMOB-26391) - iOS: App randomly freezes on iOS 12 beta when using built-in JSCore

* [TIMOB-26404](https://jira.appcelerator.org/browse/TIMOB-26404) - iOS: Cannot build hyperloop-examples app with Xcode 10 and 7.4.0 SDK

* [TIMOB-26413](https://jira.appcelerator.org/browse/TIMOB-26413) - iPhone XS Max showing launch-screen images for both iPhone XS Max and iPhone XR

* [TIMOB-26425](https://jira.appcelerator.org/browse/TIMOB-26425) - iOS: Crash in unregisterTimer with 'pointer being freed was not allocated'

* [TIMOB-26433](https://jira.appcelerator.org/browse/TIMOB-26433) - same error with sdk 7.4.0 GA --> TIMOB-26109 Xcode 10: Cannot build modules with the new (default) build system

* [TIMOB-26444](https://jira.appcelerator.org/browse/TIMOB-26444) - Calling Titanium.App.iOS.UserNotificationCenter.getDeliveredNotifications causes 'NSInvalidArgumentException

## Improvements

* [TIMOB-26399](https://jira.appcelerator.org/browse/TIMOB-26399) - iOS: Several issues with push-notifications since 7.3.x

    * Fixed notification categories on iOS 11+

## Known issues

* [TIMOB-26391](https://jira.appcelerator.org/browse/TIMOB-26391)

    * This release addresses compatibility issues with iOS 12 that could lead to an app crash or freeze under heavy load.

    * We created a special debug build which is linked in this JIRA ticket. If you experience this issue, build and run your app using the debug build and post your logs in this JIRA ticket.

## API changes

There were no API changes in this release.
