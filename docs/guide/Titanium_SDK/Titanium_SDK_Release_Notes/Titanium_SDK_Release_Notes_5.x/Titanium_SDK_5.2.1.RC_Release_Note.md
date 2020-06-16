---
title: Titanium SDK 5.2.1.RC - 10 March 2016
weight: '150'
---

# Titanium SDK 5.2.1.RC - 10 March 2016

## About This Release

Titanium SDK 5.2.1.RC is a patch release candidate of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Fixed Issues

* [TIMOB-16355](https://jira.appcelerator.org/browse/TIMOB-16355) - iOS: separatorInsets should not be used for header/section titles

* [TIMOB-17998](https://jira.appcelerator.org/browse/TIMOB-17998) - Android 5.0: In a two column picker the selection indicator does not match the postion of the selected item

* [TIMOB-19165](https://jira.appcelerator.org/browse/TIMOB-19165) - Cannot style links in Attributed Strings

* [TIMOB-19891](https://jira.appcelerator.org/browse/TIMOB-19891) - Android: Memory Leak on Window

* [TIMOB-20229](https://jira.appcelerator.org/browse/TIMOB-20229) - Android: Titanium.Network."Cookie" API is not Working.

* [TIMOB-20405](https://jira.appcelerator.org/browse/TIMOB-20405) - iconInsets: Weird behaviour when not repositioning but also enlarging icon

* [TIMOB-20453](https://jira.appcelerator.org/browse/TIMOB-20453) - 5.2.0 Regression: "rendering artifact" between launch image and first view

* [TIMOB-20489](https://jira.appcelerator.org/browse/TIMOB-20489) - iOS modules unable to write to product

* [TIMOB-20495](https://jira.appcelerator.org/browse/TIMOB-20495) - iOS: Build error caused by missing define statements

* [TIMOB-20511](https://jira.appcelerator.org/browse/TIMOB-20511) - iOS: TableView touchend and touchstart event property index is null after upgrading to 5.2.0 SDK

* [TIMOB-20519](https://jira.appcelerator.org/browse/TIMOB-20519) - '--project dir .' causes module build to fail

* [TIMOB-20526](https://jira.appcelerator.org/browse/TIMOB-20526) - iOS Module: metadata.json file is written outside iphone module folder

## Improvements

When there is a Arrow version mismatch, you will be see the following error message:

```bash
ERROR | This connector requires at least version 1.2.53 of Arrow; please run `appc use latest`.
```
