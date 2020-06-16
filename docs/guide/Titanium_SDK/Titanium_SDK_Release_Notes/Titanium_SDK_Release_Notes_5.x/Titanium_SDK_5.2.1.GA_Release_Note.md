---
title: Titanium SDK 5.2.1.GA - 23 March 2016
weight: '140'
---

# Titanium SDK 5.2.1.GA - 23 March 2016

## Contents

## About This Release

Titanium SDK 5.2.1.GA is a patch release candidate of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Fixed Issues

* [API-1166](https://jira.appcelerator.org/browse/API-1166) - Arrow SOAP Connector does not expose complex data types

* [API-1205](https://jira.appcelerator.org/browse/API-1205) - Regression: AppC Publish "randomly" fails after npm pack and extract

* [CLI-928](https://jira.appcelerator.org/browse/CLI-928) - 9.2.1 iPhone crashes when jailbreak-detect is enabled

* [CLI-943](https://jira.appcelerator.org/browse/CLI-943) - Core 5.2.0 displays incorrect/confusing warning if NPM is still < 4.2.3

* [CLI-949](https://jira.appcelerator.org/browse/CLI-949) - Windows: config files are written to different drive than process.env.HOME

* [CLI-950](https://jira.appcelerator.org/browse/CLI-950) - Process doesn't cleanup children in certain scenarios

* [CLI-957](https://jira.appcelerator.org/browse/CLI-957) - Unable to build modules from Appc CLI

* [CLI-967](https://jira.appcelerator.org/browse/CLI-967)\- iOS: Arguments to path.join must be strings

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

* [TIMOB-20537](https://jira.appcelerator.org/browse/TIMOB-20537) - Regression: Alloy-themed i18n and platform folders no longer work since Ti 5.2.0.GA

* [TIMOB-20548](https://jira.appcelerator.org/browse/TIMOB-20548) - Android x86 emulator is detected as a device by appc CLI with android SDK tools 25.0.9 rc10

* [TIMOB-20564](https://jira.appcelerator.org/browse/TIMOB-20564) - Android: java.lang.NoSuchMethodError: android.app.Activity.startActivity

* [TIMOB-20577](https://jira.appcelerator.org/browse/TIMOB-20577) - Windows: App crashes when calling fetch() on any collection that has data

## Improvements

When there is a Arrow version mismatch, you will be see the following error message:

```bash
ERROR | This connector requires at least version 1.2.53 of Arrow; please run `appc use latest`.
```

CLI 5.2.1 now supports the creation of test applications without the need to create a classic project ([CLI-687](https://jira.appcelerator.org/browse/CLI-687)). You can now use the `--testapp` flag with `appc new` to do the same thing in one step. Previously, you had to run the following steps:

```bash
appc new -t titanium --classic -i com.appc.picker -n AlloyPicker
cd AlloyPicker
appc alloy new --testapp ui/picker
```

With this version, you can use this one command:

```bash
appc new -t titanium -i com.appc.picker -n AlloyPicker --testapp ui/picker
```

## API Changes

No APIs were modified for this release.

## Known Issues

* [TIMOB-20627](https://jira.appcelerator.org/browse/TIMOB-20627) - App rejected by Apple due to use of the nativeObject API
