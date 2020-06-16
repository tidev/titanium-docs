---
title: Titanium SDK 5.1.2.GA - General Availability 12 January 2016
weight: '180'
---

# Titanium SDK 5.1.2.GA - General Availability 12 January 2016

## Contents

## About This Release

Titanium SDK 5.1.2.GA is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Fixed Issues

* [TIMOB-19796](https://jira.appcelerator.org/browse/TIMOB-19796): Android: CardView Layout property not working as expected

* [TIMOB-19798](https://jira.appcelerator.org/browse/TIMOB-19798): CardView: contentPadding(X) and cardCornerRadius should use default unit

* [TIMOB-19821](https://jira.appcelerator.org/browse/TIMOB-19821): Android 6.0: Device & emulator logs don't show up in studio console

* [TIMOB-19843](https://jira.appcelerator.org/browse/TIMOB-19843): Android: CardView's cardMaxElevation should (marked as) be creation-only

* [TIMOB-19892](https://jira.appcelerator.org/browse/TIMOB-19892): 5.1 RC can't install APK with cloud push on device

* [TIMOB-20061](https://jira.appcelerator.org/browse/TIMOB-20061): TLS Version set in Android ignored on Publish

* [TIMOB-20003](https://jira.appcelerator.org/browse/TIMOB-20003): Permission request error response message prefixed with namespace

* [TIMOB-20090](https://jira.appcelerator.org/browse/TIMOB-20090): Android: Cardview doc requires changes

* [TIMOB-20100](https://jira.appcelerator.org/browse/TIMOB-20100): Android: CardView backgroundImage & borderColor properties don't work

* [MOD-2148](https://jira.appcelerator.org/browse/MOD-2148): Ti.CloudPush is not working on Android 6

* [TIMOB-2908](https://jira.appcelerator.org/browse/TIMOB-2908): iOS: Switch - Disable animation on init and allow developer to disable for setValue

* [TIMOB-19741](https://jira.appcelerator.org/browse/TIMOB-19741): iOS: webViews within a scrollableView disappear

* [TIMOB-19772](https://jira.appcelerator.org/browse/TIMOB-19772): Prompt user to accept Xcode license agreement in response to "Error 69" in debug log

* [TIMOB-19967](https://jira.appcelerator.org/browse/TIMOB-19967): Ti.SafariDialog: Huge list of warnings after GenerateDSYMFile

* [TIMOB-20002](https://jira.appcelerator.org/browse/TIMOB-20002): iOS: Ti.Geolocation.requestLocationPermissions is not always called?

* [TIMOB-20013](https://jira.appcelerator.org/browse/TIMOB-20013): iOS8: Ti.Contacts - relatedNames property causes crash

* [TIMOB-20048](https://jira.appcelerator.org/browse/TIMOB-20048): iOS: Revert APSHTTPClient library to use back NSURLConnection

* [TIMOB-20087](https://jira.appcelerator.org/browse/TIMOB-20087): 5.1.X breaks ability to bind one collection to different views / reset collection

* [TIMOB-20118](https://jira.appcelerator.org/browse/TIMOB-20118): iOS9: Contacts property fullName does not return appropriate values

* [TIMOB-20133](https://jira.appcelerator.org/browse/TIMOB-20133): Map annotations crash in 5.1.1

* [MOD-2178](https://jira.appcelerator.org/browse/MOD-2178): iOS: Selecting annotations crashes the app

* [TIMOB-19116](https://jira.appcelerator.org/browse/TIMOB-19116): Windows: Alloy compile errors not visible when ran via \`appc run\`

* [TIMOB-19886](https://jira.appcelerator.org/browse/TIMOB-19886): Windows: Some unit tests failed for Windows Store app

* [TIMOB-20054](https://jira.appcelerator.org/browse/TIMOB-20054): Windows: Use and generate correct Main\_class.h when compiling

* [TIMOB-20110](https://jira.appcelerator.org/browse/TIMOB-20110): Windows: Ti.UI.Textfield passwordMask=true doesn't work

## Improvements

* [TIMOB-19842](https://jira.appcelerator.org/browse/TIMOB-19842): Android: CardView cardPreventCornerOverlap and cardUseCompatPadding should not start with card

    * Deprecating cardPreventCornerOverlap and cardUseCompatPadding in favor or preventCornerOverlap and useCompatPadding. Developers will see a depreciation notice.

* [TIMOB-19802](https://jira.appcelerator.org/browse/TIMOB-19802): Android: CardView should use standard property names

    * Deprecating non-standard property names in favor of Android's CardView property names.

    * | Old Property Name | New Property Name |
        | --- | --- |
        | cardBackgroundColor | backgroundColor |
        | cardCornerRadius | borderRadius |
        | cardElevation | elevation |
        | cardMaxElevation | maxElevation |
        | contentPadding | padding |
        | contentPadding<side> | padding<side> |

* [TIMOB-19045](https://jira.appcelerator.org/browse/TIMOB-19045): Windows: Add -t windows to ti info command

    * You can now specify `windows` output with the `-t` flag with the `ti info` command.

## API Changes

No APIs were modified for this release.
