---
title: Titanium SDK 7.5.1.RC - 13 December 2018
weight: '40'
---

# Titanium SDK 7.5.1.RC - 13 December 2018

## About this release

Titanium SDK 7.5.1 is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release is no longer supported. End of support for this version will be 2019-06-13 or until the next patch release. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Community credits

* Jorge Macias Garcia - [TIMOB-26625](https://jira.appcelerator.org/browse/TIMOB-26625)

* Joe Finnigan - [TIMOB-26628](https://jira.appcelerator.org/browse/TIMOB-26628)

## Fixed issues

* [TIMOB-26452](https://jira.appcelerator.org/browse/TIMOB-26452) - iOS: Object.hasProperty incorrectly reports false when a property's value is null

* [TIMOB-26580](https://jira.appcelerator.org/browse/TIMOB-26580) - Android: ListView templates not compatible with native modules

* [TIMOB-26625](https://jira.appcelerator.org/browse/TIMOB-26625) - Android: Can't open Titanium app through intent (7.5.0 regression)

* [TIMOB-26628](https://jira.appcelerator.org/browse/TIMOB-26628) - iOS 11.0: App crashes on launch

## Improvements

* [TIMOB-26632](https://jira.appcelerator.org/browse/TIMOB-26632) - App is crushing in Ti-SDK 7.5.0.GA java.lang.NullPointerException

    * Added feature that validates `getKrollObject` result before use

## API changes

There were no API changes in this release.
