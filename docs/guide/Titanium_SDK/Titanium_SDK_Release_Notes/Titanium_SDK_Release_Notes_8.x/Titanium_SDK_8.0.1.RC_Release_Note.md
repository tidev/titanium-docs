---
title: Titanium SDK 8.0.1.RC - 1 May 2019
weight: '120'
---

# Titanium SDK 8.0.1.RC - 1 May 2019

## About this release

Titanium SDK 8.0.1 is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release is no longer supported. End of support for this version will be 2019-11-01 or until the next patch release. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](#undefined) documents for details.

## Community credits

* [Sergey Volkov](https://github.com/drauggres) - [TIMOB-26239](https://jira.appcelerator.org/browse/TIMOB-26239)

* Sebastian Klaus - [TIMOB-26681](https://jira.appcelerator.org/browse/TIMOB-26681)

* Hans Knöchel - [TIMOB-26758](https://jira.appcelerator.org/browse/TIMOB-26758), [TIMOB-26852](https://jira.appcelerator.org/browse/TIMOB-26852), [TIMOB-26908](https://jira.appcelerator.org/browse/TIMOB-26908), [TIMOB-26917](https://jira.appcelerator.org/browse/TIMOB-26917)

* Luke Lu - [TIMOB-26811](https://jira.appcelerator.org/browse/TIMOB-26811)

* Andreas Pingas - [TIMOB-26889](https://jira.appcelerator.org/browse/TIMOB-26889), [TIMOB-26890](https://jira.appcelerator.org/browse/TIMOB-26890)

* [Michael Gangolf](https://github.com/m1ga) - [TIMOB-26914](https://jira.appcelerator.org/browse/TIMOB-26914)

* [grebulon](https://github.com/grebulon) - [TIMOB-17089](https://jira.appcelerator.org/browse/TIMOB-17089)

## Fixed issues

### Android platform

* [TIMOB-15829](https://jira.appcelerator.org/browse/TIMOB-15829) - Android: Calling Ti.UI.Android.ProgressIndicator.hide() twice crashes app on next show()

* [TIMOB-17089](https://jira.appcelerator.org/browse/TIMOB-17089) - Android: Activity/Fragment restore can sometimes crash app due to view ID collision

* [TIMOB-24594](https://jira.appcelerator.org/browse/TIMOB-24594) - Android: Loading images via HTTPS TLS 1.1 or newer fails on Android 4.x

* [TIMOB-25678](https://jira.appcelerator.org/browse/TIMOB-25678) - Android: Window transitions are not enabled unless a shared element exists

* [TIMOB-25832](https://jira.appcelerator.org/browse/TIMOB-25832) - Android: Setting Ti.UI.SearchBar "hintText" property after creation causes a crash as of 7.0.0

* [TIMOB-26239](https://jira.appcelerator.org/browse/TIMOB-26239) - Android: Window leak in Ti.UI.currentWindow

* [TIMOB-26698](https://jira.appcelerator.org/browse/TIMOB-26698) - Android: Launching TabGroup in landscape and then rotating to portrait won't resize tabs as of 8.0.0

* [TIMOB-26715](https://jira.appcelerator.org/browse/TIMOB-26715) - Android: App starts without animation when launched with data intent as of 8.0.0

* [TIMOB-26746](https://jira.appcelerator.org/browse/TIMOB-26746) - Android: Ti.App wrongly fires pause/resume event when opening/closing child windows

* [TIMOB-26758](https://jira.appcelerator.org/browse/TIMOB-26758) - Android: Changing TabbedBar properties "labels" and "index" before opening window causes a crash

* [TIMOB-26779](https://jira.appcelerator.org/browse/TIMOB-26779) - Android: Ti.UI.Android.SearchView only icon responds to search

* [TIMOB-26789](https://jira.appcelerator.org/browse/TIMOB-26789) - android: Ti.Buffer#clone() will copy over null type/value properties to cloned Buffer when undefined on original

* [TIMOB-26799](https://jira.appcelerator.org/browse/TIMOB-26799) - Android: Recurrence rule is not properly fetched for events received by Id

* [TIMOB-26826](https://jira.appcelerator.org/browse/TIMOB-26826) - Android: Cannot dynamically change TabGroup "title" property as of 8.0.0

* [TIMOB-26834](https://jira.appcelerator.org/browse/TIMOB-26834) - Android: NavigationView root window displays back button

* [TIMOB-26847](https://jira.appcelerator.org/browse/TIMOB-26847) - Android: Fix stringify of custom TableView row

* [TIMOB-26889](https://jira.appcelerator.org/browse/TIMOB-26889) - At android devices when a Window has its own title in a tabGroup the title never appears

* [TIMOB-26890](https://jira.appcelerator.org/browse/TIMOB-26890) - Android: Switch between TabGroup tabs 1 and 4 sometimes crashes the app as of 8.0.0

* [TIMOB-26901](https://jira.appcelerator.org/browse/TIMOB-26901) - Android: Launcher icon uses Titanium's default icon instead of "appicon.png" as of 8.0.0

* [TIMOB-26914](https://jira.appcelerator.org/browse/TIMOB-26914) - Android: An OS forced-quit app displays a blank window upon relaunch as of 8.0.0

* [TIMOB-26964](https://jira.appcelerator.org/browse/TIMOB-26964) - Android: Calling child window's close() method back to TabGroup fails if "Don't keep activities" is enabled

* [TIMOB-26966](https://jira.appcelerator.org/browse/TIMOB-26966) - Android: Back navigating from child window causes app to exit when "Don't keep activities" is enabled as of 7.2.1

* [TIMOB-26975](https://jira.appcelerator.org/browse/TIMOB-26975) - Android: LiveView does not reload app if "Don't keep activities" is enabled as of 8.0.0

* [TIMOB-26978](https://jira.appcelerator.org/browse/TIMOB-26978) - Android: Showing/hiding dialog while window is being destroyed by "Don't keep activities" sometimes crashes

* [TIMOB-26980](https://jira.appcelerator.org/browse/TIMOB-26980) - Android: module clean command deletes too much of libs folder

* [TIMOB-26989](https://jira.appcelerator.org/browse/TIMOB-26989) - Android: TableView having SearchBar/SearchView will crash upon resume while "Don't keep activities" is enabled as of 7.2.1

* [TIMOB-26996](https://jira.appcelerator.org/browse/TIMOB-26996) - Android: Window/TabGroup close() method call is ignored until "open" event has been fired

### iOS platform

* [TIMOB-26655](https://jira.appcelerator.org/browse/TIMOB-26655) - iOS: Shortcut-item ID does not has to be unique

* [TIMOB-26681](https://jira.appcelerator.org/browse/TIMOB-26681) - iOS: App rejected because of using NSAppleMusicUsageDescription key

* [TIMOB-26783](https://jira.appcelerator.org/browse/TIMOB-26783) - iOS: Memory leak in require

* [TIMOB-26811](https://jira.appcelerator.org/browse/TIMOB-26811) - iOS: Memory leak in Ti.Network.HTTPClient

* [TIMOB-26835](https://jira.appcelerator.org/browse/TIMOB-26835) - iOS: Unable to get call pop menu from a webView

* [TIMOB-26903](https://jira.appcelerator.org/browse/TIMOB-26903) - iOS: Webview Cookies is not working with 8.0.0.GA

* [TIMOB-26908](https://jira.appcelerator.org/browse/TIMOB-26908) - iOS: Focussed text-field freezes parent window

* [TIMOB-26917](https://jira.appcelerator.org/browse/TIMOB-26917) - iOS: App builds containing large amounts of JS files are extremely slow

* [TIMOB-26943](https://jira.appcelerator.org/browse/TIMOB-26943) - iOS: WebView.setHtml() fails to load inner contents with "file://" URLs and relative paths if "baseURL" uses "app://" URL as of 8.0.0

* [TIMOB-26948](https://jira.appcelerator.org/browse/TIMOB-26948) - CLI: File provider extension capability not appropriately set

* [TIMOB-26976](https://jira.appcelerator.org/browse/TIMOB-26976) - Html having links with target="\_blank" is not working

* [TIMOB-26981](https://jira.appcelerator.org/browse/TIMOB-26981) - iOS: Module builds broken

* [TIMOB-26985](https://jira.appcelerator.org/browse/TIMOB-26985) \- iOS: Native modules are not protected

### Multiple platforms

* [TIMOB-26788](https://jira.appcelerator.org/browse/TIMOB-26788) - require fails on directory with package.json whose 'main' field points at another directory

## Improvements

* [TIMOB-26695](https://jira.appcelerator.org/browse/TIMOB-26695) - iOS: Do not show Node.js path-tracking in console

    * Revised the debug logs

* [TIMOB-26767](https://jira.appcelerator.org/browse/TIMOB-26767) - Auto-select only valid certificate and/or provisioning profile when building to device

    * Auto select certificate and/or provisioning profile (iOS) if there is only one valid entry

## API changes

There were no API changes in this release.

## SDK modules versions

### Android and iOS

| Module | Android version | iOS version |
| --- | --- | --- |
| urlSession | n/a | 2.1.0 |
| facebook | 8.0.0 | 6.0.0 |
| ti\_coremotion | n/a | 2.0.1 |
| ti\_map | 4.3.1 | 3.1.0 |
| ti\_safaridialog | n/a | 1.1.1 |
| ti\_webdialog | 1.1.0 | 1.1.0 |
| ti\_touchid | 3.0.1 | 2.1.4 |
| ti\_identity | 2.1.0 | 1.0.5 |
| ti\_cloudpush | 6.0.1 | n/a |
| ti\_playservices | 16.1.3 | n/a |

### CommonJS

| Module | Version |
| --- | --- |
| ti.cloud | 3.2.11 |

### Hyperloop

| Module | Version |
| --- | --- |
| Hyperloop | 4.0.2 |
