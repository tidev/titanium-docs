---
title: Titanium SDK 7.2.1.RC 27 July 2018
weight: '180'
---

# Titanium SDK 7.2.1.RC 27 July 2018

## About this release

Titanium SDK 7.2.1.RC is a patch release of the SDK, addressing internal and a few bug issues from previous releases.

As of this GA release, the previous Titanium SDK patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Community credits

* [Sergey Volkov](https://github.com/drauggres) - [TIMOB-26239](https://jira.appcelerator.org/browse/TIMOB-26239) - Android: Window leak in Ti.UI.currentWindow

## Fixed issues

* [TIMOB-26222](https://jira.appcelerator.org/browse/TIMOB-26222) - Android: App crashes when trying to re-open a closed window

* [TIMOB-26225](https://jira.appcelerator.org/browse/TIMOB-26225) - Android: TableView leaks memory when overwriting "data" property

* [TIMOB-26239](https://jira.appcelerator.org/browse/TIMOB-26239) - Android: Window leak in Ti.UI.currentWindow

## API changes

### New APIs

The following APIs are new or have expanded platform support in Release 7.2.1 as of August 17th, 2018.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Analytics.getOptedOut | method | Gets the value of the Titanium.Analytics.optedOut property. (New API, supported on Android, iPhone, iPad and Windows Phone.) |
| Titanium.Analytics.optedOut | property | Allows the user to opt out from Analytics during runtime to comply to GPDR. (New API, supported on Android, iPhone, iPad and Windows Phone.) |
| Titanium.Analytics.setOptedOut | method | Sets the value of the Titanium.Analytics.optedOut property. (New API, supported on Android, iPhone, iPad and Windows Phone.) |
