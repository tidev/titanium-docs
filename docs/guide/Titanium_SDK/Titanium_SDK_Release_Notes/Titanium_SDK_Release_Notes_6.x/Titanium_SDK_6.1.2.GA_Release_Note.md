---
title: Titanium SDK 6.1.2.GA -  3 August 2017
weight: '70'
---

# Titanium SDK 6.1.2.GA - 3 August 2017

## Contents

## About this release

Titanium SDK 6.1.2.GA is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Fixed issues

* [TIMOB-24710](https://jira.appcelerator.org/browse/TIMOB-24710) - Android: V8 crashes on Android N

* [TIMOB-24814](https://jira.appcelerator.org/browse/TIMOB-24814) - Windows: Label's width/height doesn't recalculate right when it contained in View with set width/height

* [TIMOB-24819](https://jira.appcelerator.org/browse/TIMOB-24819) - Windows: Uncaught Error: undefined when a label is wrapped in a view that has a fixed width

* [TIMOB-24830](https://jira.appcelerator.org/browse/TIMOB-24830) - IOS: Cache module after the first require() call (regression to 5.x)

* [TIMOB-24840](https://jira.appcelerator.org/browse/TIMOB-24840) - Windows: Calling setData on a tableview that already has data errors out

* [TIMOB-24868](https://jira.appcelerator.org/browse/TIMOB-24868) - Android: Duplicate build steps during module builds

* [TIMOB-24872](https://jira.appcelerator.org/browse/TIMOB-24872) - \[Android\] Unable to destroy activity when exiting application has a TableView

* [TIMOB-24906](https://jira.appcelerator.org/browse/TIMOB-24906) - Windows: Get an "Error device not found" error now and again when building to an Android emulator

* [TIMOB-24911](https://jira.appcelerator.org/browse/TIMOB-24911) \- Android: Filtering R. files when building Android modules does not work on Windows

* [TIMOB-24926](https://jira.appcelerator.org/browse/TIMOB-24926) - Android: Prevent fireEvent when proxy has been released

* [TIMOB-24932](https://jira.appcelerator.org/browse/TIMOB-24932) - Android Hybrid modules: cannot instantiate a proxy in a js file that is packaged in the same module

* [TIMOB-24960](https://jira.appcelerator.org/browse/TIMOB-24960) - Android: TiHTTPClient credentials encoding issue

* [TIMOB-24966](https://jira.appcelerator.org/browse/TIMOB-24966) \- Windows: Ti.UI.SearchBar's showCancel=false is ignored

* [TIMOB-24987](https://jira.appcelerator.org/browse/TIMOB-24987) - Android: TextField and TextView elements in SDK 6.1.1.GA do not fire focus events / trigger keyboard when using custom theme

* [TIMOB-25004](https://jira.appcelerator.org/browse/TIMOB-25004) - Build: ioslib is getting removed in the 6\_1\_X build process

## Improvements

* [TIMOB-24174](https://jira.appcelerator.org/browse/TIMOB-24174) - Android: Update TableView/ListView accessory images, fix spacing

    * Added `xxxhigh` images and revised the size for the other icons. The revised sizes are as follows:

        | Icon | Size |
        | --- | --- |
        | low | 36px |
        | medium | 48px |
        | high | 72px |
        | xhigh | 96px |
        | xxhigh | 144px |
        | xxxhigh | 192px |

## API changes

There were no API changes in this release.
