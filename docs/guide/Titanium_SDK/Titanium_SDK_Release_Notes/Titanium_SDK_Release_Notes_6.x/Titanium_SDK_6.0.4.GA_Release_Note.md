---
title: Titanium SDK 6.0.4.GA - 28 April 2017
weight: '130'
---

# Titanium SDK 6.0.4.GA - 28 April 2017

## Contents

## About this release

Titanium SDK 6.0.4.GA is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Fixed issues

* [TIMOB-24165](https://jira.appcelerator.org/browse/TIMOB-24165) - Android: Unable remove action bar using custom theme when the window background color is transparent.

* [TIMOB-24265](https://jira.appcelerator.org/browse/TIMOB-24265) - Android: Application can't recover from storage permission change

* [TIMOB-24316](https://jira.appcelerator.org/browse/TIMOB-24316) - Android: Can't get the right URL if app resume by URL for the second time

* [TIMOB-24451](https://jira.appcelerator.org/browse/TIMOB-24451) - Android: ListView Template get varying sectionCount and sections array when it is inside a ScrollableView

* [TIMOB-24497](https://jira.appcelerator.org/browse/TIMOB-24497) - Android: Resuming app from intent does not provide EXTRA

* [TIMOB-24527](https://jira.appcelerator.org/browse/TIMOB-24527) - Android: Intents using FLAG\_ACTIVITY\_NEW\_DOCUMENT can cause issues with KrollRuntime

* [TIMOB-24531](https://jira.appcelerator.org/browse/TIMOB-24531) - Android: onBackPressed behaviour does not work correctly

* [TIMOB-24555](https://jira.appcelerator.org/browse/TIMOB-24555) - Android: Latest Android Tools breaks development with Titanium

* [TIMOB-24625](https://jira.appcelerator.org/browse/TIMOB-24625) - Android: Change help text for "--device-id" to use "id" instead of "name"

* [TIMOB-23613](https://jira.appcelerator.org/browse/TIMOB-23613) - CLI: Encryption process fails on Windows with spawn ENAMETOOLONG on a large amount of files

* [TIMOB-23313](https://jira.appcelerator.org/browse/TIMOB-23313) - iOS app rejected because "Invalid Swift Support - The SwiftSupport folder is missing"

* [TIMOB-23542](https://jira.appcelerator.org/browse/TIMOB-23542) - Memory-leaks and warnings across the iOS-project

* [TIMOB-24364](https://jira.appcelerator.org/browse/TIMOB-24364) - iOS: HTTP Client leaks memory during upload using kroll-thread, eventually causing a force close

* [TIMOB-24380](https://jira.appcelerator.org/browse/TIMOB-24380) - iOS: Cannot package for iOS iTunes Store; PhaseScriptExecution error

* [TIMOB-24580](https://jira.appcelerator.org/browse/TIMOB-24580) - iOS: SDK upgrade to 6.0.3.GA broke push notification registration

* [TIMOB-24561](https://jira.appcelerator.org/browse/TIMOB-24561) - UniversalWindowsApp: Ti.Network change event crashes the app

## API changes

There were no API changes in this release.
