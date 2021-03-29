---
title: Titanium SDK 8.0.0.RC - 20 February 2019
weight: '140'
---

# Titanium SDK 8.0.0.RC - 20 February 2019

## About this release

Titanium SDK 8.0.0 is a major release of the SDK, addressing high-priority issues from previous releases.

### LiveView

Integrating LiveView into the SDK allows us to provide a better experience to users who use the Atom and VS Code editor plugins or use the CLI by itself.

If you're using Studio, you'll need to download Studio 5.1.2.201812191857 from the Beta stream on [https://preview.appcelerator.com/appc-studio/](https://preview.appcelerator.com/appc-studio/). This beta contains an updated LiveView that accounts for the LiveView integration in SDK 8.0.0.

If you are installing the LiveView package from npm and installing the hook in that package, you will need to remove the path from the `paths.hooks` array in `~/.titanium/config.json`. This install method has never been officially supported and conflicts with the LiveView installation in the SDK.

### SOASTA Module

SOASTA Module is not included in this version. Users using Soasta module for their automated testing are advised to use version 7.x of the SDK.

### Parity for Ti.UI.NavigationWindow

Moved from `Ti.UI.iOS.NavigationWindow` to `Ti.UI.NavigationWindow` in order to make it cross platform and deprecated `Ti.UI.iOS.NavigationWindow`

### Support

As of this release, Titanium SDK 8.x will not be supported one calendar year (2020-02-20) from 8.0.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](#undefined) documents for details.

## Notice of feature and behavior changes

### Android platform

* [TIMOB-24851](https://jira.appcelerator.org/browse/TIMOB-24851) - Android: Deprecate Label "wordWrap" property (it's not needed)

    * Deprecated `wordWrap` property of `Ti.UI.Label`

* [TIMOB-26075](https://jira.appcelerator.org/browse/TIMOB-26075) - Android: Refactor app resume and "newintent" handling

    * Fixed bug where an intent can create a 2nd app instance stuck at the splash screen if an app instance already exists.

        * This hanging event typically happens when app is launch via URLs, tapping notifications, and so on

        * Resolve this issue by immediately destroying second instance, resuming existing activity, and firing a `newintent` event which simulates Android `singleTask` handling

* [TIMOB-26132](https://jira.appcelerator.org/browse/TIMOB-26132) - Android: Remove Ti.Geolocation "legacy" mode

    * Removed `ACCURACY_*` constants and the `frequency + preferredProvider` property

* [TIMOB-26340](https://jira.appcelerator.org/browse/TIMOB-26340) - Android: Update V8 runtime to 7.0.276.42

    * updated V8 runtime to 7.0.276.42

* [TIMOB-26227](https://jira.appcelerator.org/browse/TIMOB-26227) - Android: Remove kroll-thread

    * Removed deprecated kroll thread

* [TIMOB-26633](https://jira.appcelerator.org/browse/TIMOB-26633) - Android: Change min supported version to Android 4.4 (API Level 19)

    * Pushed the minimum Android OS supported version to Android 4.4 (API Level 19)

* [TIMOB-26638](https://jira.appcelerator.org/browse/TIMOB-26638) - Android: Root Ti.Android.Activity "intent" property should be updated when "newintent" event is fired

    * `intent` property used to be assigned the intent that originally launched/created the activity and would never change

    * This is needed in case `newintent` event gets fired before the `app.js` has a chance to set up a listener for it. Can happen when receiving a URL intent during a cold start of the app.

* [TIMOB-26560](https://jira.appcelerator.org/browse/TIMOB-26560) - Android: Remove deprecated Ti.UI.KEYBOARD\_\* constants in favor of TI.UI.KEYBOARD\_TYPE\_\*

    * Removed deprecated `Ti.UI.KEYBOARD_*` constants. Use `TI.UI.KEYBOARD_TYPE_*` in its place

### iOS platform

* [TIMOB-17887](https://jira.appcelerator.org/browse/TIMOB-17887) - iOS: Add Swift modules support

    * Added support for Swift modules

* [TIMOB-25008](https://jira.appcelerator.org/browse/TIMOB-25008) - iOS: Remove deprecated Ti.UI.KEYBOARD\_\* constants in favor of TI.UI.KEYBOARD\_TYPE\_\*

    * Deprecated `Ti.UI.KEYBOARD_*` constants in favor of `TI.UI.KEYBOARD_TYPE_*`

* [TIMOB-25748](https://jira.appcelerator.org/browse/TIMOB-25748) - iOS: Remove TiCore

    * Removed TiCore in favor of built-in JavaScriptCore

* [TIMOB-25927](https://jira.appcelerator.org/browse/TIMOB-25927) - iOS: Move SDK-core to own framework

    * Moved SDK-core into `TitaniumKit.framework`

* [TIMOB-26095](https://jira.appcelerator.org/browse/TIMOB-26095) - iOS 12: UIWebView deprecated in favor of WKWebView

    * Replaced UIWebView API in favor of WKWebView

* [TIMOB-26123](https://jira.appcelerator.org/browse/TIMOB-26123) - iOS: Drop iOS 8 support, use iOS 9 as the minimum target

    * Set iOS9 as the minimum supported versions

* [TIMOB-26226](https://jira.appcelerator.org/browse/TIMOB-26226) - iOS: Remove kroll-thread

    * Removed deprecated kroll thread

### Windows platform

* [TIMOB-25582](https://jira.appcelerator.org/browse/TIMOB-25582) - Windows: Support for dp in ti.ui.defaultunit

    * Added support for dp unit for `ti.ui.defaultunit`

    * Previously, Windows default unit was "px". As of this release, the default value will be "dp". In order to keep consistency between previous versions, you will need to explicitly set `<property name="ti.ui.defaultunit" type="string">px</property>` in `tiapp.xml`.

* [TIMOB-26503](https://jira.appcelerator.org/browse/TIMOB-26503) - Windows: Touch event coordinate units do not match between platforms

    * Parity for touch event coordinate units

* [TIMOB-26562](https://jira.appcelerator.org/browse/TIMOB-26562) - Windows: Remove deprecated Ti.UI.KEYBOARD\_\* constants in favor of TI.UI.KEYBOARD\_TYPE\_\*

    * Removed deprecated `Ti.UI.KEYBOARD_*` constants. Use `TI.UI.KEYBOARD_TYPE_*` in its place

### Multiple platforms

* [TIMOB-23496](https://jira.appcelerator.org/browse/TIMOB-23496) - TiAPI: Deprecate old Geolocation properties, add more parity

    * Throw deprecation notices when `Ti.Geolocation.reverseGeocode` is returned (with suggested replacements)

    * Deprecated `country_code`, `displayAddress` and `zipcode` properties in favor of `countryCode`, `address` and `postalCode`,respectively

    * Breaking change: `latitude` and `longitude` are returned as numbers and not string on Android (parity with iOS and Windows behavior)

* [TIMOB-24589](https://jira.appcelerator.org/browse/TIMOB-24589) - TiAPI: Remove Ti.Yahoo from SDK-core

    * Removed `Ti.Yahoo` from SDK core and moved it into it's own module

* [TIMOB-25650](https://jira.appcelerator.org/browse/TIMOB-25650) - Upgrade to babel 7

    * Updated to Babel 7

* [TIMOB-26119](https://jira.appcelerator.org/browse/TIMOB-26119) - TiAPI: Deprecate getter/setter accessor methods for properties

    * Deprecated getter/setter accessor methods

* [TIMOB-26153](https://jira.appcelerator.org/browse/TIMOB-26153) - CLI: Remove Node 4 as a supported version

    * Removed node 6 from supported versions

* [TIMOB-26410](https://jira.appcelerator.org/browse/TIMOB-26410) - LiveView: Integrate liveview into the SDK

    * Integrated LiveView in the SDK

* [TIMOB-26137](https://jira.appcelerator.org/browse/TIMOB-26137) - TiAPI: Move 2DMatrix and 3DMatrix to Matrix2D and Matrix3D

    * Renamed 2DMatrix and 3DMatrix to Matrix2D and Matrix3D to address ES6 imports and Angular and View support

* [TIMOB-26140](https://jira.appcelerator.org/browse/TIMOB-26140) - Windows: Move 2DMatrix and 3DMatrix to Matrix2D and Matrix3D

    * Renamed 2DMatrix and 3DMatrix to Matrix2D and Matrix3D to address ES6 imports and Angular and View support

* [TIMOB-26661](https://jira.appcelerator.org/browse/TIMOB-26661) - Update Hyperloop to 4.0.0

    * Updated the SDK's bundled Hyperloop version to 4.0.0

* [TIMOB-26740](https://jira.appcelerator.org/browse/TIMOB-26740) - Update Hyperloop to 4.0.1

    * Updated the SDK's bundled Hyperloop version to 4.0.1

## New features

### Android platform

* [TIMOB-16789](https://jira.appcelerator.org/browse/TIMOB-16789) - Android: Add animation "curve" support

    * Parity for `Ti.UI.Animation` animation curves

* [TIMOB-17389](https://jira.appcelerator.org/browse/TIMOB-17389) - Android: Implement FastScroll capability on ListView

    * Added fastScroll to ListViews

* [TIMOB-24582](https://jira.appcelerator.org/browse/TIMOB-24582) - Android: Navigation parity for a cross-platform Ti.UI.NavigationWindow

    * Implemented `Ti.UI.NavigationWindow`

* [TIMOB-25953](https://jira.appcelerator.org/browse/TIMOB-25953) - Android: Add "Ti.UI.TabbedBar" support

    * Parity for Android adding `Ti.UI.TabbedBar`

* [TIMOB-26354](https://jira.appcelerator.org/browse/TIMOB-26354) - Android: Refactor TabGroup and introduce new style

    * Refactored TabGroup by replacing ActionBar with TabLayout and introduced a new style for using BottomNavigationView

* [TIMOB-26636](https://jira.appcelerator.org/browse/TIMOB-26636) - Android: Remove deprecated "newIntent" event in favor of "newintent"

    * Removed deprecated `newIntent` event in favor of `newintent`

* [TIMOB-26637](https://jira.appcelerator.org/browse/TIMOB-26637) - Android: Add "rootActivity" property to Ti.Android module

    * Improved intent-filter usability since only the root activity will receive the new intent

    * The `currentActivity` property always references the top-most activity opened by `Ti.UI.Window`

### iOS platform

* [TIMOB-26060](https://jira.appcelerator.org/browse/TIMOB-26060) - iOS: Move iOS-only Ti.UI.iOS.NavigationWindow to cross-platform Ti.UI.NavigationWindow

    * Parity: Moved from `Ti.UI.iOS.NavigationWindow` to `Ti.UI.NavigationWindow` in order to make it cross platform and deprecated `Ti.UI.iOS.NavigationWindow`

* [TIMOB-26461](https://jira.appcelerator.org/browse/TIMOB-26461) - iOS: Add "safeAreaPadding" property to Ti.UI.Window

    * Parity for iOS of `Ti.UI.Window`'s `safeAreaPadding` property

* [TIMOB-26674](https://jira.appcelerator.org/browse/TIMOB-26674) - iOS: Un-deprecate "Ti.UI.TabbedBar" and deprecate "Ti.UI.iOS.TabbedBar"

    * `Ti.UI.TabbedBar` support was added to Android in 8.0.0

    * Re-added `Ti.UI.TabbedBar` support to iOS

    * Calling `Ti.UI.iOS.createTabbedBar()` now logs a deprecation warning

### Windows platform

* [TIMOB-25537](https://jira.appcelerator.org/browse/TIMOB-25537) - Windows: Navigation parity for a cross-platform Ti.UI.NavigationWindow

    * Parity for `Ti.UI.NavigationWindow`

* [TIMOB-26415](https://jira.appcelerator.org/browse/TIMOB-26415) - Windows: Added Ti.App event "userinteraction" and property "trackUserInteraction"

    * Added `userinteraction` and `trackuserInteraction` to `Ti.App`

* [TIMOB-26464](https://jira.appcelerator.org/browse/TIMOB-26464) - Windows: Add Ti.UI.Window property "safeAreaPadding"

    * Parity for Windows of `Ti.UI.Window`'s `safeAreaPadding` property

* [TIMOB-26498](https://jira.appcelerator.org/browse/TIMOB-26498) - Windows: ListView item template support CommonJS modules and Alloy widgets

    * Added feature that allows ListView template to support CommonJS modules and Alloy widgets

### Multiple platforms

* [TIMOB-13966](https://jira.appcelerator.org/browse/TIMOB-13966) - TiAPI: Select Locale for L() at runtime

    * Modified localized string ID properties such as `titleid` and `textid` to load from the same context as the `L()` function

* [TIMOB-18582](https://jira.appcelerator.org/browse/TIMOB-18582) - TiAPI: Create Node-compatible path module API

    * Added feature that allows some of the core Node modules in Titanium to port/re-use node codebases on mobile devices

* [TIMOB-18584](https://jira.appcelerator.org/browse/TIMOB-18584) - TiAPI: Create Node-compatible os module API

    * Added feature that allows some of the core Node modules in Titanium to port/re-use node codebases on mobile devices

* [TIMOB-18597](https://jira.appcelerator.org/browse/TIMOB-18597) - LiveView: Support selective compilation for Alloy

    * Updated LiveView to latest version

* [TIMOB-25861](https://jira.appcelerator.org/browse/TIMOB-25861) - Liveview: Support transpiling user code

    * Added support for transpiling user code

* [TIMOB-26703](https://jira.appcelerator.org/browse/TIMOB-26703) - TiAPI: Add Ti.App "started" event

    * Added Ti.App event `started`

* [TIMOB-26146](https://jira.appcelerator.org/browse/TIMOB-26146) - Enable ES6 transpile/polyfill by default

    * Made transpiling an opt-out by default

## Community credits

* Ken Rucker - [TIMOB-26370](https://jira.appcelerator.org/browse/TIMOB-26370)

* Ma Wenli - [TIMOB-26453](https://jira.appcelerator.org/browse/TIMOB-26453)

* [David van de Meer](https://github.com/dieskim) - [TIMOB-26480](https://jira.appcelerator.org/browse/TIMOB-26480)

* Teun Klijn - [TIMOB-26594](https://jira.appcelerator.org/browse/TIMOB-26594)

* Alka Gurung - [TIMOB-25760](https://jira.appcelerator.org/browse/TIMOB-25760)

* Andreas Pingas - [TIMOB-26639](https://jira.appcelerator.org/browse/TIMOB-26639)

* [Timan Rebel](https://github.com/timanrebel) - [TIMOB-17931](https://jira.appcelerator.org/browse/TIMOB-17931)

* Adam Armstrong - [TIMOB-26657](https://jira.appcelerator.org/browse/TIMOB-26657)

* Luc-Edmond Gaspard - [TIMOB-24659](https://jira.appcelerator.org/browse/TIMOB-24659)

## Fixed issues

### Android platform

* [TIMOB-19695](https://jira.appcelerator.org/browse/TIMOB-19695) - Android: TabGroup cannot use "NoTitleBar" themes

* [TIMOB-20266](https://jira.appcelerator.org/browse/TIMOB-20266) - Android: ListView with attributed strings are not rendering sometimes

* [TIMOB-26370](https://jira.appcelerator.org/browse/TIMOB-26370) - Android: "Failed to create external storage directory" when download image and save to camera roll

* [TIMOB-26453](https://jira.appcelerator.org/browse/TIMOB-26453) - Android: default value of borderWidth of view is not respected, if borderRadius is set (but no borderColor)

* [TIMOB-26480](https://jira.appcelerator.org/browse/TIMOB-26480) - Android: Titanium.UI.ProgressBar 'color' setting portion of progressBar - should be text only

* [TIMOB-26488](https://jira.appcelerator.org/browse/TIMOB-26488) - Android: Fix Ti.Filesystem.requestStoragePermissions for Android 8 and above

* [TIMOB-26535](https://jira.appcelerator.org/browse/TIMOB-26535) - Android: Fix analytics session events

* [TIMOB-26537](https://jira.appcelerator.org/browse/TIMOB-26537) - Android: Module "AndroidManifest.xml" `<uses>` elements overwrites "tiapp.xml" elements

* [TIMOB-26538](https://jira.appcelerator.org/browse/TIMOB-26538) - Android: Services should be stopped when exiting the app

* [TIMOB-26539](https://jira.appcelerator.org/browse/TIMOB-26539) - Android: Label's default font size should be "dp" unless explicitly set

* [TIMOB-26541](https://jira.appcelerator.org/browse/TIMOB-26541) - Android: setTimeout and setInterval do not support calls without interval specified

* [TIMOB-26545](https://jira.appcelerator.org/browse/TIMOB-26545) - Android: Using global L() method for localization does not work if second argument is not supplied

* [TIMOB-26555](https://jira.appcelerator.org/browse/TIMOB-26555) - Android: Broadcast receivers should be unregistered when exiting the app

* [TIMOB-26580](https://jira.appcelerator.org/browse/TIMOB-26580) - Android: ListView templates not compatible with native modules

* [TIMOB-26585](https://jira.appcelerator.org/browse/TIMOB-26585) - Android: Liveview throws exception due to null object reference with latest 8.0.0

* [TIMOB-26601](https://jira.appcelerator.org/browse/TIMOB-26601) \- Android: Cannot apply theme with "windowTranslucentNavigation" or "windowTranslucentStatus" to splash screen as of 7.5.0

* [TIMOB-26713](https://jira.appcelerator.org/browse/TIMOB-26713) - Android: TabGroup "tabsBackgroundColor" property ignored when landscape

* [TIMOB-26714](https://jira.appcelerator.org/browse/TIMOB-26714) - Android: TabGroup "tabsBackgroundSelectedColor" property is ignored

* [TIMOB-26716](https://jira.appcelerator.org/browse/TIMOB-26716) - Android: 'Error while reading asset' Can be seen intermittently when running certain Android applications

* [TIMOB-26719](https://jira.appcelerator.org/browse/TIMOB-26719) - Android: ListView no longer applying default row height

* [TIMOB-26725](https://jira.appcelerator.org/browse/TIMOB-26725) - Android: Liveview closes file/event server process after the first app reload & stops working

* [TIMOB-26824](https://jira.appcelerator.org/browse/TIMOB-26824) - Android: Build resources can fail to copy correctly

### iOS platform

* [TIMOB-26113](https://jira.appcelerator.org/browse/TIMOB-26113) - iOS: Ti.UI.convertUnits does not consult ti.ui.defaultunit property

* [TIMOB-26117](https://jira.appcelerator.org/browse/TIMOB-26117) - iOS: ES6 promises not supported on iOS 9. (Works on iOS 8 and 10.)

* [TIMOB-26341](https://jira.appcelerator.org/browse/TIMOB-26341) - iOS: Remove Ti.UI.ButtonBar "index" property

* [TIMOB-26371](https://jira.appcelerator.org/browse/TIMOB-26371) - iOS: Build throws ENOENT when building to iOS device

* [TIMOB-26445](https://jira.appcelerator.org/browse/TIMOB-26445) - iOS: Default framework header search paths should be injected by template

* [TIMOB-26520](https://jira.appcelerator.org/browse/TIMOB-26520) - iOS: App fails to install on device using a build from Master

* [TIMOB-26551](https://jira.appcelerator.org/browse/TIMOB-26551) - iOS: "Cannot read property 'code' of undefined" error thrown if log server connection times out

* [TIMOB-26586](https://jira.appcelerator.org/browse/TIMOB-26586) - iOS: Animation curve ease-in/ease-out does not auto-reverse correctly

* [TIMOB-26587](https://jira.appcelerator.org/browse/TIMOB-26587) - Babel throwing an error on build

* [TIMOB-26590](https://jira.appcelerator.org/browse/TIMOB-26590) - iOS: Animation never rotates counter-clockwise when set to -180 degrees

* [TIMOB-26594](https://jira.appcelerator.org/browse/TIMOB-26594) - iOS: Exception when canceling local notifications with removePendingNotifications

* [TIMOB-26597](https://jira.appcelerator.org/browse/TIMOB-26597) - CLI: Prompted for ios code base type when creating an android module

* [TIMOB-26639](https://jira.appcelerator.org/browse/TIMOB-26639) - iOS: hasText() does not work

* [TIMOB-26641](https://jira.appcelerator.org/browse/TIMOB-26641) - iOS: On main thread openWindow and closeWindow in sequence from NavigationWindow is not working properly

* [TIMOB-26657](https://jira.appcelerator.org/browse/TIMOB-26657) - iOS: 'masterIsOverlayed' not working when app is in Split View Mode & Landscape

* [TIMOB-26668](https://jira.appcelerator.org/browse/TIMOB-26668) - iOS: Using ScrollView without RefreshControl breaks build

* [TIMOB-26671](https://jira.appcelerator.org/browse/TIMOB-26671) - Hyperloop does not load in TitaniumKit

* [TIMOB-26672](https://jira.appcelerator.org/browse/TIMOB-26672) - iOS: Application crashes on launch on iOS9

* [TIMOB-26673](https://jira.appcelerator.org/browse/TIMOB-26673) - iOS: Race conditions in async APIs (e.g. timers)

* [TIMOB-26687](https://jira.appcelerator.org/browse/TIMOB-26687) - iOS: URL-handling does not work if the app is booted from cold-start

* [TIMOB-26688](https://jira.appcelerator.org/browse/TIMOB-26688) - iOS: Proxy objects created in timers aren't released properly

* [TIMOB-26694](https://jira.appcelerator.org/browse/TIMOB-26694) - \[iOS\] Runtime errors are not shown in console

* [TIMOB-26705](https://jira.appcelerator.org/browse/TIMOB-26705) - iOS: Ti.App.\_restart() crashes application

* [TIMOB-26710](https://jira.appcelerator.org/browse/TIMOB-26710) - \[iOS\] Example app.js is incorrect when creating a iOS Swift module

* [TIMOB-26738](https://jira.appcelerator.org/browse/TIMOB-26738) - iOS: Using punctuation in a featureEvent name throws an error

* [TIMOB-26742](https://jira.appcelerator.org/browse/TIMOB-26742) - TiAPI: App launch slowed down by 2-5 seconds in SDK 8

* [TIMOB-26745](https://jira.appcelerator.org/browse/TIMOB-26745) - IOS: Build fails with "ld: symbol(s) not found for architecture x86\_64"

### Windows platform

* [TIMOB-24401](https://jira.appcelerator.org/browse/TIMOB-24401) - Windows: View.visible="false" does not work.

* [TIMOB-24422](https://jira.appcelerator.org/browse/TIMOB-24422) - Windows: Deployment fails with "violates pattern constraint of bms-resource"

* [TIMOB-25760](https://jira.appcelerator.org/browse/TIMOB-25760) - Windows: Titanium.Network.HTTPClient Location doesn't return the redirected URL

* [TIMOB-25789](https://jira.appcelerator.org/browse/TIMOB-25789) - Windows: HttpClient.onreadystatechange should be called right after ondatastream/onsendstream

* [TIMOB-26159](https://jira.appcelerator.org/browse/TIMOB-26159) - Windows: File.getDirectoryListing() returns empty array for file or non-existent directory.

* [TIMOB-26524](https://jira.appcelerator.org/browse/TIMOB-26524) - Windows: Can not compile folder with spaces

* [TIMOB-26549](https://jira.appcelerator.org/browse/TIMOB-26549) - Windows: HTTPClient: Invalid Status Codes returned

* [TIMOB-26564](https://jira.appcelerator.org/browse/TIMOB-26564) - Windows: Cannot find module 'babylon' error thrown on build

* [TIMOB-26565](https://jira.appcelerator.org/browse/TIMOB-26565) - Windows: Building with hyperloop fails with "traverse is not a function"

* [TIMOB-26577](https://jira.appcelerator.org/browse/TIMOB-26577) - Windows: ScrollView sizing incorrectly in a vertical layout

* [TIMOB-26578](https://jira.appcelerator.org/browse/TIMOB-26578) - Windows: Missing trailing separator for directory in Ti.Filesystem.File#nativePath

* [TIMOB-26579](https://jira.appcelerator.org/browse/TIMOB-26579) - Windows: Ti.UI.ImageView's load event object has no state property

* [TIMOB-26667](https://jira.appcelerator.org/browse/TIMOB-26667) - Windows: Ti.Locale.getString should ignore non-string default value

* [TIMOB-26748](https://jira.appcelerator.org/browse/TIMOB-26748) - Windows: Always send full analytics payload

* [TIMOB-26766](https://jira.appcelerator.org/browse/TIMOB-26766) - Windows: Error thrown when installing to wp-device

* [TIMOB-26776](https://jira.appcelerator.org/browse/TIMOB-26776) - Windows: App launch failed with "cyclic redundancy check" error on device

* [TIMOB-26781](https://jira.appcelerator.org/browse/TIMOB-26781) - Windows: When using Liveview: 'alloy' is not recognized as an internal or external command' error is shown

### Multiple platforms

* [TIMOB-25839](https://jira.appcelerator.org/browse/TIMOB-25839) - TiAPI: Touch event coordinate units do not match between platforms

* [TIMOB-26563](https://jira.appcelerator.org/browse/TIMOB-26563) - TiAPI: 2DMatrix translate() coordinate units do not match between platforms

* [TIMOB-26595](https://jira.appcelerator.org/browse/TIMOB-26595) - CLI: Unable to create module using latest the build from Master

* [TIMOB-26704](https://jira.appcelerator.org/browse/TIMOB-26704) - LiveView: Transpilation does not work if not set in tiapp

* [TIMOB-26727](https://jira.appcelerator.org/browse/TIMOB-26727) - Hyperloop: Android app using hyperloop 4.0.0 hangs on splash when built with 7.5.0.GA & latest 7.5.1

* [TIMOB-26764](https://jira.appcelerator.org/browse/TIMOB-26764) - Change minsdk of ACA module to 8.0.0

* [TIMOB-26785](https://jira.appcelerator.org/browse/TIMOB-26785) - Cease the inclusion of SOASTA in the SDK from 8.0.0+

## Improvements

### Android platform

* [TIMOB-17931](https://jira.appcelerator.org/browse/TIMOB-17931) - Android: support the theme property for TabGroups

    * Added support for theme properties for `TabGroups`

* [TIMOB-25200](https://jira.appcelerator.org/browse/TIMOB-25200) - Android: Expose BottomNavigationView as new Android Ti.UI.TabGroup

    * Added support for `BottomNavigationView` in `Ti.UI.TabGroup`

* [TIMOB-26288](https://jira.appcelerator.org/browse/TIMOB-26288) - Android: Add ability to hide/show back button on Window

    * Added ability to toggle back button on window

* [TIMOB-26355](https://jira.appcelerator.org/browse/TIMOB-26355) - Android: Implement V4 Analytics specification

    * Implemented V4 payload specification

* [TIMOB-26402](https://jira.appcelerator.org/browse/TIMOB-26402) - Android: Maintain native module compatibility with Titanium 7.0.0

    * Updated V8 to `7.0.276.13`

    * Maintain backwards compatibility with existing Titanium 7.X.X native modules

    * Included missing/deprecated methods from previous V8 versions to maintain backwards compatibility with Titanium 7.0.0

* [TIMOB-26518](https://jira.appcelerator.org/browse/TIMOB-26518) - Android: Webview FireEvent not get fired in correct sequence

    * Fixed WebView code execution order

* [TIMOB-26645](https://jira.appcelerator.org/browse/TIMOB-26645) - Android: Calling finish() on root splash screen activity should exit the app

    * This makes it easier for Titanium apps launched via `startActivityForResult()` since the app needs to call `setResult()` and `finish()` methods on root activity to return a result

* [TIMOB-24659](https://jira.appcelerator.org/browse/TIMOB-24659) - Android: Add support for the roundIcon attribute

    * Added support for the `roundIcon` attribute

### iOS platform

* [TIMOB-26505](https://jira.appcelerator.org/browse/TIMOB-26505) - IOS: Include reverted changes form PR 10411

    * Reverted module zip path for studio compatibility

* [TIMOB-26197](https://jira.appcelerator.org/browse/TIMOB-26197) - iOS: Deprecate Ti.Media.createSystemAlert, move to own "Ti.SystemAlert" module

    * Deprecated `Ti.Media.createSystemAlert` and implemented `Ti.SystemAlert` module

* [TIMOB-26356](https://jira.appcelerator.org/browse/TIMOB-26356) - iOS: Implement V4 Analytics specification

    * Implemented V4 payload specification

### Windows platform

* [TIMOB-26357](https://jira.appcelerator.org/browse/TIMOB-26357) - Windows: Implement V4 Analytics specification

    * Implemented V4 payload specification

* [TIMOB-26508](https://jira.appcelerator.org/browse/TIMOB-26508) - Windows: Setting undefined should clear layout value

    * Setting `undefined` to layout property clears layout value. Example, setting both `left` and `top` disables `center` property.

* [TIMOB-26648](https://jira.appcelerator.org/browse/TIMOB-26648) - Windows: ability to override global functions

    * Windows parity to allow to override global functions like `setTimeout`

### Multiple platforms

* [TIMOB-26023](https://jira.appcelerator.org/browse/TIMOB-26023) - TiAPI: Add Ti.Blob parity across platforms

    * Parity for `Ti.Blob`

* [TIMOB-26411](https://jira.appcelerator.org/browse/TIMOB-26411) - API: Support async variants of Ti.IOStream methods

    * Changed the synchronous nature of Ti.IOStream to asynchronous

* [TIMOB-26556](https://jira.appcelerator.org/browse/TIMOB-26556) - TiAPI: Modify SDK JS files to not use deprecated property get/set methods

    * Throw warning message if deprecated getter/setter methods are used

* [TIMOB-26613](https://jira.appcelerator.org/browse/TIMOB-26613) - node-ios-device: Add Node.js 11 support

    * Added support for Node.js version 11

* [TIMOB-26726](https://jira.appcelerator.org/browse/TIMOB-26726) - Liveview: Autokill server after a period of time

    * Added feature that kills LiveView server after 10 seconds of inactivity

* [TIMOB-26823](https://jira.appcelerator.org/browse/TIMOB-26823) - Update Facebook module to latest version

    * Updated Facebook module to Android (8.0.0) and iOS (6.0.0)

    * This is a breaking change as the Facebook module removed the like button

## Hyperloop

::: warning ⚠️ Warning
Hyperloop 4.0.0 is only compatible with SDK 8.0.0 and newer.
:::

### Android

* Fixed overriding methods that may receive null values as arguments

### iOS

* Added support for dotted enums (like in Swift)

    ```
    // before
    import { UIControlStateNormal, UIControlStateSelected } from 'UIKit';
    alert(UIControlStateNormal);

    // now
    import { UIControlState } from 'UIKit';
    alert(UIControlState.Normal);
    ```

* Refactored iOS metabase generation to improve build time

    * Store system frameworks globally (in `~/.hyperloop`) to be reused by different apps

    * Only generate required frameworks

    * Cache CocoaPods builds across builds

* Internal refactoring and optimization

* Exclude types that are unavailable on iOS from metabase

* Removed support for TiCore runtime

### Windows

* Added support for namespace-based imports like Android

    ```
    import { UICommand, MessageDialog } from 'Windows.UI.Popups.*';
    ```

## API changes

### New APIs

### Deprecated APIs

### Removed APIs

## SDK modules versions

### Android and iOS

| Module | iOS version | Android version |
| --- | --- | --- |
| urlSession | 2.1.0 | n/a |
| facebook | 6.0.0 | 8.0.0 |
| ti.coremotion | 2.1.0 | n/a |
| ti.map | 3.1.0 | 4.3.1 |
| ti.safaridialog | 1.1.1 | n/a |
| ti.webdialog | 1.1.0 | 1.1.0 |
| ti.touchid | 2.1.4 | 3.0.1 |
| ti.identity | 1.0.5 | 2.0.1 |
| ti.cloudpush | n/a | 5.2.0 |
| ti.playservices | n/a | 11.0.40 |

### CommonJS

| Module | Version |
| --- | --- |
| ti.cloud | 3.2.11 |

### Hyperloop

| Module | Version |
| --- | --- |
| hyperloop | 4.0.1 |
