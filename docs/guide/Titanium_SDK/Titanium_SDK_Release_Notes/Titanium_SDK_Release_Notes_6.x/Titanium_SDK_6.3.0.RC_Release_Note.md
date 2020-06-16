---
title: Titanium SDK 6.3.0.RC -  17 October 2017
weight: '20'
---

# Titanium SDK 6.3.0.RC - 17 October 2017

## About this release

Titanium SDK 6.3.0.RC is a minor release of the SDK, addressing high-priority issues from previous releases.

As of this release, Titanium SDK 6.2.x will not be supported six months from 6.3.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

::: danger ❗️ Warning
Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA.
:::

## New features

### Android platform

* [TIMOB-25197](https://jira.appcelerator.org/browse/TIMOB-25197) - Android: Support RefreshControl in Ti.UI.ScrollView

    * Added RefreshControl support to vertical and horizontal ScrollViews

### iOS platform

* [TIMOB-24780](https://jira.appcelerator.org/browse/TIMOB-24780) - iOS 11: Expose new API's to Ti.SafariDialog

    * Added support for iOS 11's APIs

* [TIMOB-24805](https://jira.appcelerator.org/browse/TIMOB-24805) - iOS: Support large window-titles

    * Added support for large window titles

* [TIMOB-24808](https://jira.appcelerator.org/browse/TIMOB-24808) - iOS 11 / Android O: Add support for Password AutoFill

    * Added support for Password AutoFill

* [TIMOB-25076](https://jira.appcelerator.org/browse/TIMOB-25076) - iOS 11: Add new MapKit API's

    * Added support of iOS 11 MapKit APIs

* [TIMOB-25270](https://jira.appcelerator.org/browse/TIMOB-25270) - iPhone X: Support for FaceID

    * Created the new `Ti.Identity` module to support touch-id, face-id, and keychain-access

    * Note: Ti.TouchID will be deprecated

## Fixed issues

### Android

* [TIMOB-12153](https://jira.appcelerator.org/browse/TIMOB-12153) - Android : Scrollview with a tableview does not scroll if contentHeight is set to 'auto'

* [TIMOB-25238](https://jira.appcelerator.org/browse/TIMOB-25238) - Android: View with a border can cause a significant performance deficit

* [TIMOB-25258](https://jira.appcelerator.org/browse/TIMOB-25258) - Android: TableView bottom border extends past the last table row

    * This was introduced in 6.2.0

* [TIMOB-25266](https://jira.appcelerator.org/browse/TIMOB-25266) - Android: Loading url in WebView crashes on Android 4.1

* [TIMOB-25347](https://jira.appcelerator.org/browse/TIMOB-25347) - Android: Build fails with No resource found that matches the given name (at 'background' with value '@color/primary')

* [TIMOB-25359](https://jira.appcelerator.org/browse/TIMOB-25359) - Android: ScrollView not scrolling when keyboard is showing

* [TIMOB-25360](https://jira.appcelerator.org/browse/TIMOB-25360) - Android: Height Ti.UI.FILL inside ScrollView should match iOS

* [TIMOB-25363](https://jira.appcelerator.org/browse/TIMOB-25363) - Android: Intents should use ContentProvider

* [TIMOB-25376](https://jira.appcelerator.org/browse/TIMOB-25376) - Android:List item is not rendering properly with 6.2.X and above

* [TIMOB-25377](https://jira.appcelerator.org/browse/TIMOB-25377) - Android: ScrollView child percent size should be relative to container size

### iOS

* [TIMOB-25287](https://jira.appcelerator.org/browse/TIMOB-25287) - iPhone X: Ti.UI.SearchBar in list-view get wrongly positioned

* [TIMOB-25300](https://jira.appcelerator.org/browse/TIMOB-25300) - iOS 11: Window titleControls are not centered in Landscape Orientation

* [TIMOB-25301](https://jira.appcelerator.org/browse/TIMOB-25301) - iPhone X: Need to be able to control the Insets / Layout Margins

* [TIMOB-25309](https://jira.appcelerator.org/browse/TIMOB-25309) - Xcode 9 / iPhone X: Simulator is killed everytime, app-session terminated

* [TIMOB-25318](https://jira.appcelerator.org/browse/TIMOB-25318) - iOS: Cannot build for devices with 6.2.0.GA

* [TIMOB-25319](https://jira.appcelerator.org/browse/TIMOB-25319) - iOS: Fails to package app when using CloudKit

* [TIMOB-25332](https://jira.appcelerator.org/browse/TIMOB-25332) - iOS 11: ListView broken due to behavior-changes in UITableView

* [TIMOB-25334](https://jira.appcelerator.org/browse/TIMOB-25334) - iOS 11: TableViews are sliding up when opening from navigation-window

* [TIMOB-25346](https://jira.appcelerator.org/browse/TIMOB-25346) - JSON parse error with Ti.App.fireEvent in 6.2.0.GA plus

* [TIMOB-25358](https://jira.appcelerator.org/browse/TIMOB-25358) - iOS: Problem with Ti.UI.SearchBar in SDK 6.2.0+ when not filling the screen

* [TIMOB-25361](https://jira.appcelerator.org/browse/TIMOB-25361) - iOS: Ti.UI.Slider.setValue not updating the slider

* [TIMOB-25373](https://jira.appcelerator.org/browse/TIMOB-25373) - iOS: Search result view of List did not close when widow containing list view get closed.

* [TIMOB-25393](https://jira.appcelerator.org/browse/TIMOB-25393) - Adding Third-Party iOS Framework causes build error with 6.2.x

### Windows

* [TIMOB-24934](https://jira.appcelerator.org/browse/TIMOB-24934) - Windows: App fails to install to device if newer VCLibs package exists

* [TIMOB-25175](https://jira.appcelerator.org/browse/TIMOB-25175) - Windows: Ti.UI.SIZE for height of ListView does not work as expected

* [TIMOB-25245](https://jira.appcelerator.org/browse/TIMOB-25245) - Windows: Calling picker.reloadColumn removes all other columns

* [TIMOB-25246](https://jira.appcelerator.org/browse/TIMOB-25246) - Windows: PickerColumn shrinks after reload

* [TIMOB-25247](https://jira.appcelerator.org/browse/TIMOB-25247) - Windows: Picker.setSelectedRow doesn't work

* [TIMOB-25263](https://jira.appcelerator.org/browse/TIMOB-25263) - Windows: remove back button from top bar

* [TIMOB-25273](https://jira.appcelerator.org/browse/TIMOB-25273) - Windows: TableViewRow does not fill size of TableView

* [TIMOB-25298](https://jira.appcelerator.org/browse/TIMOB-25298) - Windows: ListItem is not occupying the full width of ListView

* [TIMOB-25325](https://jira.appcelerator.org/browse/TIMOB-25325) - Windows: Click event of Button does not provide X, Y coordinates

* [TIMOB-25385](https://jira.appcelerator.org/browse/TIMOB-25385) - Windows: Broken display text after 6.2.2.GA updated

## Improvements patch releases

* [TIMOB-8898](https://jira.appcelerator.org/browse/TIMOB-8898) - Android: Support FILL behavior on contentWidth/contentHeight property of scroll view

    * Added Ti.UI.Fill and Ti.UI.SIZE support to ScrollView "contentWidth" and "contentHeight" properties

* [TIMOB-25064](https://jira.appcelerator.org/browse/TIMOB-25064) - Windows: Hyperloop does not pick DLL in lib folders

    * Added capability to managed DLL with Hyperloop

* [TIMOB-25322](https://jira.appcelerator.org/browse/TIMOB-25322) - iOS: Geolocation should be able to handle iOS 11 permission upgrade, Media should warn when writing to gallery

    * Updated geolocation to handle iOS 11 permission upgrade

* [TIMOB-25355](https://jira.appcelerator.org/browse/TIMOB-25355) - iOS 11: Update Ti.Facebook iOS to 4.27.0

    * Updated Ti.Facebook iOS to 5.6.0

## API changes

### New APIs

The following APIs are new or have expanded platform support in Release 6.3.0 as of November 1st, 2017.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.UI.Window.extendSafeArea | property | Specifies whether the content (subviews) of the window will render inside the safe-area or not. Only used in iOS 11 and later. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.getExtendSafeArea | method | Gets the value of the Titanium.UI.Window.extendSafeArea property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.getLargeTitleDisplayMode | method | Gets the value of the Titanium.UI.Window.largeTitleDisplayMode property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.getLargeTitleEnabled | method | Gets the value of the Titanium.UI.Window.largeTitleEnabled property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.largeTitleDisplayMode | property | The mode to use when displaying the title of the navigation bar. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.largeTitleEnabled | property | A Boolean value indicating whether the title should be displayed in a large format. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setExtendSafeArea | method | Sets the value of the Titanium.UI.Window.extendSafeArea property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setLargeTitleDisplayMode | method | Sets the value of the Titanium.UI.Window.largeTitleDisplayMode property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setLargeTitleEnabled | method | Sets the value of the Titanium.UI.Window.largeTitleEnabled property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.LARGE\_TITLE\_DISPLAY\_MODE\_ALWAYS | property | Always use a larger title when this item is top most. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.LARGE\_TITLE\_DISPLAY\_MODE\_AUTOMATIC | property | Automatically use the large out-of-line title based on the state of the p revious item in the navigation bar. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.LARGE\_TITLE\_DISPLAY\_MODE\_NEVER | property | Never use a larger title when this item is top most. (New API, supported on iPhone and iPad.) |
