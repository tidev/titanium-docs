---
title: Titanium SDK 6.1.1.GA - 27 June 2017
weight: '90'
---

# Titanium SDK 6.1.1.GA - 27 June 2017

## Contents

## About this release

Titanium SDK 6.1.1.GA is a patch release of the SDK which addresses important fixes for 6.1.0.

As of this GA release, the previous Titanium SDK patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Fixed issues

### Android

* [TIMOB-13895](https://jira.appcelerator.org/browse/TIMOB-13895) - Android: Text wrapping in a label is not showing ellipsis (regression)

* [TIMOB-24608](https://jira.appcelerator.org/browse/TIMOB-24608) - Android: respackage value in native module's manifest is ignored

* [TIMOB-24665](https://jira.appcelerator.org/browse/TIMOB-24665) - Android: Fix inaccessible Ti.Media constants

* [TIMOB-24670](https://jira.appcelerator.org/browse/TIMOB-24670) - lines in label doesn't work on Android

* [TIMOB-24741](https://jira.appcelerator.org/browse/TIMOB-24741) - Android: Using "transparent" as a color crashes the app (Regression)

* [TIMOB-24745](https://jira.appcelerator.org/browse/TIMOB-24745) - Android: Cannot build CommonJS modules with multiple JS files

* [TIMOB-24748](https://jira.appcelerator.org/browse/TIMOB-24748) - Android: HTTPClient - can't use streaming mode with authentication

* [TIMOB-24756](https://jira.appcelerator.org/browse/TIMOB-24756) - Android: Ti.UI.ImageView with "images" property causes crash

* [TIMOB-24778](https://jira.appcelerator.org/browse/TIMOB-24778) - CLI: Minimum android build tools is incorrect

* [TIMOB-24792](https://jira.appcelerator.org/browse/TIMOB-24792) - Android: Horizontal layouts do not behave correctly with 'right'

* [TIMOB-24793](https://jira.appcelerator.org/browse/TIMOB-24793) - Android: Ti.UI.View.center is incorrectly calculated

* [TIMOB-24799](https://jira.appcelerator.org/browse/TIMOB-24799) - Android: Theme Causing Issues in SDK 6.2.2.GA

* [TIMOB-24809](https://jira.appcelerator.org/browse/TIMOB-24809) - Android: HTTPClient - "onload" not dispatched

* [TIMOB-24839](https://jira.appcelerator.org/browse/TIMOB-24839) - Android: Reopening a closed window crashes the app

* [TIMOB-24842](https://jira.appcelerator.org/browse/TIMOB-24842) - Android: Setting opacity property using the view's object after creation does not work

* [TIMOB-24870](https://jira.appcelerator.org/browse/TIMOB-24870) - Android: Reopening a closed window causes all components in the window to be lost

### iOS

* [TIMOB-24680](https://jira.appcelerator.org/browse/TIMOB-24680) - iOS: Enterprise ad hoc provisioning profiles not validating properly for watch extensions

* [TIMOB-24753](https://jira.appcelerator.org/browse/TIMOB-24753) - iOS: View sizes are incorrect in 6.1.0.GA (regression)

* [TIMOB-24770](https://jira.appcelerator.org/browse/TIMOB-24770) - iOS: Incorrect badge display on Ti.UI.DashboardView (no background image)

* [TIMOB-24796](https://jira.appcelerator.org/browse/TIMOB-24796) - iOS: Hybrid CommonJS and Native modules don't handle multiple js files

* [TIMOB-24837](https://jira.appcelerator.org/browse/TIMOB-24837) - ioslib: Unable to autoselect iOS 10.3.1 sim with Xcode 8.3.3

* [TIMOB-24884](https://jira.appcelerator.org/browse/TIMOB-24884) - CLI: Minification produces invalid code

### Windows

* [TIMOB-24751](https://jira.appcelerator.org/browse/TIMOB-24751) - Windows: Cannot build for Android if Windows SDK is not installed

## Improvements

* [TIMOB-24853](https://jira.appcelerator.org/browse/TIMOB-24853) - Windows: Update module apiversion in manifest

    * Bumped apiversion in manifest to 3

* [TIMOB-24750](https://jira.appcelerator.org/browse/TIMOB-24750) - Only configure platforms that are deployment targets

    * Allows for configuring builds for specific platforms. For example, if you wish to configure an app for Android only, use the following command: `appc run -p android --build-only`

## Known issues

Hyperloop 2.1.2 is required for Windows users who use SDK 6.1.1. The ti.paint module was rebuilt as well and this updated version should be used if SDK 6.1.1 is utilized.

## API changes

There are no API changes in this release.
