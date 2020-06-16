---
title: Titanium SDK 7.0.0.Beta - 17 November 2017
weight: '310'
---

# Titanium SDK 7.0.0.Beta - 17 November 2017

## About this release

Titanium SDK 7.0.0.Beta is a major release of the SDK, addressing high-priority issues from previous releases. Highlights for this release include integration of Hyperloop in the SDK core and introduction of Appcelerator Daemon.

As of this release, Titanium SDK 6.x will not be supported one calendar year from 7.0.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

::: danger ❗️ Warning
Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA
:::

## Appcelerator Daemon

The Appcelerator Daemon is a server that runs on the developer's computer and hosts services which power the tooling for Axway products such as Titanium SDK. The Appcelerator Daemon aims to solve tooling issues by introducing a robust, flexible, and consistent foundation for implementing product tooling. It does this by providing plugins that define services which are exposed via the built-in web server to any HTTP, WebSocket, Node.js client, or shell script. The Appcelerator Daemon is designed to be highly decoupled. All product-specific logic is run inside a plugin while the Appcelerator Daemon provides core functionality to plugins such as file system watching and spawning subprocesses.

## Notice of feature and behavior Changes

* Integrated Hyperloop into SDK core

    * [TIMOB-25058](https://jira.appcelerator.org/browse/TIMOB-25058) - Begin making hyperloop part of the core SDK (and using it for SDK development)

    * [TIMOB-25059](https://jira.appcelerator.org/browse/TIMOB-25059) - Add Hyperloop to pre-packaged native modules listing in the SDK

    * [TIMOB-25060](https://jira.appcelerator.org/browse/TIMOB-25060) - Build Android hyperloop against SDK 7.0.0 / v8 5.7+

* [TIMOB-25459](https://jira.appcelerator.org/browse/TIMOB-25459) - Android: toImage method needs parity with iOS

    * The `toImage` method has changed for iOS with this release. Test case:

        ```javascript
        var win = Ti.UI.createWindow();
        var view = Ti.UI.createView({backgroundColor: 'green', width: 150, height: 150, top: 100});
        var content = Ti.UI.createView({backgroundColor: 'blue', width: 45, height: 45});
        var imageView = Ti.UI.createImageView({width: 150, height: 150, top: 300});

        view.add(content);
        win.add(view);
        win.addEventListener('postlayout', function() {
          view.toImage(function(blob) {
            imageView.setImage(blob);
          });
        });

        win.add(imageView);
        win.open();
        ```

* [TIMOB-23958](https://jira.appcelerator.org/browse/TIMOB-23958) - Remove deprecated Python and unused files

    * Removed Python dependency

* [TIMOB-24593](https://jira.appcelerator.org/browse/TIMOB-24593) - TiAPI: Update Facebook-SDKs to 4.22, support Graph v2.9

    * Update Android Facebook SDK to 4.20.0 and iOS Facebook SDK to 4.20.2

## New features

### Android platform

* [TIMOB-17340](https://jira.appcelerator.org/browse/TIMOB-17340) - TiAPI: Text - Add lineHeight property to Ti.UI.Label and Ti.Ui.TextArea

    * Added `Ti.UI.ATTRIBUTE_BASELINE_OFFSET` support to `AttributedString` (controls line height in Labels, TextFields, and TextAreas)

* [TIMOB-23802](https://jira.appcelerator.org/browse/TIMOB-23802) - Android N: Expose Sustained Performance API for Nexus devices

    * Added support for `sustainedPerformancemode`

* [TIMOB-23903](https://jira.appcelerator.org/browse/TIMOB-23903) - Android: Update V8 runtime to 5.7.492.71

    * Updated Android's runtime to build against V8 5.7.492.71. Details about the V8 update can be found here: [https://v8project.blogspot.com](https://v8project.blogspot.com/).

* [TIMOB-24510](https://jira.appcelerator.org/browse/TIMOB-24510) - Android N: Implement support for Custom quick settings tiles

    * Add support for custom quick settings tiles in Android N and above

* [TIMOB-24639](https://jira.appcelerator.org/browse/TIMOB-24639) - Android: Support TextInputLayout

    * Allow animated hintType to be set using `attributedHintText` although attributes will be ignored (Android limitation)

    * Always respect `height` property

    * Set `EditText` background color to transparent

* [TIMOB-24723](https://jira.appcelerator.org/browse/TIMOB-24723) - Android: Support V8 inspector API for debugging to replace "legacy" debugger protocol

    * Added support for V8 inspector for debugging

* [TIMOB-24963](https://jira.appcelerator.org/browse/TIMOB-24963) - Android: Add scrollToTop() to ScrollView

    * Added `scrollToTop()` to `ScrollView`

### iOS platform

* [TIMOB-10787](https://jira.appcelerator.org/browse/TIMOB-10787) - iOS: Expose UDID replacements available in iOS6

    * Added support for UDID replacement

### Windows platform

* [TIMOB-24964](https://jira.appcelerator.org/browse/TIMOB-24964) - Windows: Add scrollToTop() to ScrollView

    * Added `scrollToTop()` to `ScrollView`

* [TIMOB-25233](https://jira.appcelerator.org/browse/TIMOB-25233) - Windows: Feature request - Ti.UI.TextField setSelection method

    * Added Windows parity for `setSelection` of `Ti.UI.TextFields`

* [TIMOB-25234](https://jira.appcelerator.org/browse/TIMOB-25234) - Windows: Feature request - Ti.UI.TextField clearButtonMode

    * Added Windows parity for `clearButtonMode` of `Ti.UI.TextFields`

* [TIMOB-25235](https://jira.appcelerator.org/browse/TIMOB-25235) - Windows: Feature request - Ti.UI.TextField blur method

    * Added Windows parity for `blur` of `Ti.UI.TextField`

* [TIMOB-25236](https://jira.appcelerator.org/browse/TIMOB-25236) - Windows: Feature request - Ti.UI.TEXT\_ALIGNMENT\_JUSTIFY

    * Added Windows parity for `Ti.UI.TEXT_ALIGNMENT_JUSTIFY`

* [TIMOB-25237](https://jira.appcelerator.org/browse/TIMOB-25237) - Windows: Feature request - Ti.UI.Picker borderColor property

    * Added Windows parity for `borderColor` of `Ti.UI.Picker`

* [TIMOB-25250](https://jira.appcelerator.org/browse/TIMOB-25250) - Windows: Feature request - Ti.UI.ActivityIndicator.style/ Titanium.UI.ActivityIndicator.indicatorDiameter

    * Added Windows parity for `Ti.UI.ActivityIndicator.style` and `Titanium.UI.ActivityIndicator.indicatorDiameter`

* [TIMOB-25303](https://jira.appcelerator.org/browse/TIMOB-25303) - Windows: Feature request - Ti.UI.Picker font property[TIMOB-25345](https://jira.appcelerator.org/browse/TIMOB-25345) - Windows: Prevent app from suspension

    * Added Windows parity for `Ti.UI.Picker` of `Ti.UI.PICKER_TYPE_DATE`

* [TIMOB-25345](https://jira.appcelerator.org/browse/TIMOB-25345) - Windows: Prevent app from suspension

    * Implemened extended execution to prevent suspension

### Multiple platforms

* [TIMOB-14795](https://jira.appcelerator.org/browse/TIMOB-14795) - TiAPI: Add "parent" property for all Ti.UI.View subclasses

    * Added support for `parent` property for `Ti.UI.View`

## Community credits

We would like to thank the community for their assistance on the following tickets:

* [Luc-Edmond Gaspard](https://github.com/gaspardle)

    * TIMOB-25382 - Android: Wrong thread error in DrawerLayout when not running on main thread

* [David van de Meer](https://github.com/dieskim)

    * TIMOB-23645 - Android notification: allow to set color of background

* [Sergey Volkov](https://github.com/drauggres)

    * TIMOB-25051 - Android. persistentObjects leak

* [Michael Gangolf](https://github.com/m1ga)

    * [TIMOB-24963](https://jira.appcelerator.org/browse/TIMOB-24963) - Android: Add scrollToTop() to ScrollView

    * [TIMOB-17340](https://jira.appcelerator.org/browse/TIMOB-17340) - TiAPI: Text - Add lineHeight property to Ti.UI.Label and Ti.Ui.TextArea

* [Brian G Galvez](https://github.com/Brianggalvez)

    * [TIMOB-24327](https://jira.appcelerator.org/browse/TIMOB-24327) - iOS: Implement AllowsMultipleSelectionWhenEditing and getSelectedRow in ListView

## Fixed issues

### Android

* [TIMOB-6392](https://jira.appcelerator.org/browse/TIMOB-6392) - Android: Ti.UI.Button text values with too many displayable characters draw improperly

* [TIMOB-9680](https://jira.appcelerator.org/browse/TIMOB-9680) - Android: Textfield: The focus on textfield does not happen through textfield focus method

* [TIMOB-10070](https://jira.appcelerator.org/browse/TIMOB-10070) - Android: Landscape Left/Right handling is backwards

* [TIMOB-11709](https://jira.appcelerator.org/browse/TIMOB-11709) - Android: String.formatTime causes app crash when date is string.

* [TIMOB-18500](https://jira.appcelerator.org/browse/TIMOB-18500) - Android: event.cancel not set properly for optionsDialog

* [TIMOB-19878](https://jira.appcelerator.org/browse/TIMOB-19878) - Orientation Change is not correctly detected on Android

* [TIMOB-20439](https://jira.appcelerator.org/browse/TIMOB-20439) - Android: Using camera bloats app storage

* [TIMOB-23996](https://jira.appcelerator.org/browse/TIMOB-23996) - Android: Can't package android modules with NDK r13 & r14

* [TIMOB-24297](https://jira.appcelerator.org/browse/TIMOB-24297) - Android native modules build is getting failed with Android NDK r13b

* [TIMOB-24537](https://jira.appcelerator.org/browse/TIMOB-24537) - TI Gestures not firing even on orientation change on Android

* [TIMOB-24679](https://jira.appcelerator.org/browse/TIMOB-24679) - Android: Deprecate invalid proxy constants in 7.0.0

* [TIMOB-24866](https://jira.appcelerator.org/browse/TIMOB-24866) - Android: Setting a TextField's "padding" resets its alignment to left/center

* [TIMOB-24937](https://jira.appcelerator.org/browse/TIMOB-24937) - Android: Default module manifest template uses wrong API version

* [TIMOB-25021](https://jira.appcelerator.org/browse/TIMOB-25021) - Android: Unable to release weak global references

* [TIMOB-25051](https://jira.appcelerator.org/browse/TIMOB-25051) - Android. persistentObjects leak

* [TIMOB-25160](https://jira.appcelerator.org/browse/TIMOB-25160) - Android O : CLI does not detect android O device's model & shows "android device" when "appc ti info" is run

* [TIMOB-25225](https://jira.appcelerator.org/browse/TIMOB-25225) - Android: Touch Id authentication issue

* [TIMOB-25241](https://jira.appcelerator.org/browse/TIMOB-25241) - Android: Ti.Network.createHTTPClient log 404 : Not Found error in application log

* [TIMOB-25242](https://jira.appcelerator.org/browse/TIMOB-25242) - Android: V8Exception on launch

* [TIMOB-25323](https://jira.appcelerator.org/browse/TIMOB-25323) - Android: Application can crash after exiting

* [TIMOB-25324](https://jira.appcelerator.org/browse/TIMOB-25324) - Android: AssetManager will release when suspended to background

* [TIMOB-25374](https://jira.appcelerator.org/browse/TIMOB-25374) - borderColor not visible on Android tiSDK 6.2.2

* [TIMOB-25382](https://jira.appcelerator.org/browse/TIMOB-25382) - Android: Wrong thread error in DrawerLayout when not running on main thread

* [TIMOB-25384](https://jira.appcelerator.org/browse/TIMOB-25384) - Android: extendBackground extends the screen below soft system navigation

* [TIMOB-25456](https://jira.appcelerator.org/browse/TIMOB-25456) - Android: Crash after calling Stringify on Ti.UI.Window

* [TIMOB-25462](https://jira.appcelerator.org/browse/TIMOB-25462) - Android: webview userAgent doesn't change

* [TIMOB-25467](https://jira.appcelerator.org/browse/TIMOB-25467) - Android: "Ti.UI.Window.orientation" should return screen orientation in split-screen mode

* [TIMOB-25471](https://jira.appcelerator.org/browse/TIMOB-25471) - TableView : java.lang.NullPointerException: Attempt to invoke virtual method 'boolean java.util.HashMap.containsKey(java.lang.Object)' on a null object reference

* [TIMOB-25487](https://jira.appcelerator.org/browse/TIMOB-25487) - Android: Prevent kroll from removing null proxy object pointer

* [TIMOB-25501](https://jira.appcelerator.org/browse/TIMOB-25501) - Android: App crash on receiving notification if app in background

* [TIMOB-25514](https://jira.appcelerator.org/browse/TIMOB-25514) - Android: Vertical ScrollView.scrollTo() goes to wrong position when animated as of 6.2.2

* [TIMOB-25515](https://jira.appcelerator.org/browse/TIMOB-25515) - Android: ScrollView.scrollTo() ignores "ti.ui.defaultunit" when animated

* [TIMOB-25525](https://jira.appcelerator.org/browse/TIMOB-25525) \- Android: Textfield focus issue with multiple textfields

### iOS

* [TIMOB-9111](https://jira.appcelerator.org/browse/TIMOB-9111) - TiAPI: Ti.Utils.base64encode() modified to not insert newlines in returned result

* [TIMOB-19040](https://jira.appcelerator.org/browse/TIMOB-19040) - iOS9: Replace MPMoviePlayerController in Ti.Media.VideoPlayer with AVPlayerViewController

* [TIMOB-20404](https://jira.appcelerator.org/browse/TIMOB-20404) - iOS: ProgressBar gets clipped in parent with height Ti.UI.SIZE

* [TIMOB-24994](https://jira.appcelerator.org/browse/TIMOB-24994) - iOS: Remove Ti.UI.iOS.AdView

* [TIMOB-25005](https://jira.appcelerator.org/browse/TIMOB-25005) - iOS: Remove Ti.UI.iPhone namespace

* [TIMOB-25024](https://jira.appcelerator.org/browse/TIMOB-25024) - iOS: Remove <iphone> section from tiapp.xml

* [TIMOB-25449](https://jira.appcelerator.org/browse/TIMOB-25449) - iOS: WebView content offset of 20 pixels when positioned at the top

* [TIMOB-25459](https://jira.appcelerator.org/browse/TIMOB-25459) - iOS: toImage method needs parity with Android & Windows

* [TIMOB-25466](https://jira.appcelerator.org/browse/TIMOB-25466) - setLargeTitleEnabled - unrecognized selector sent to instance

* [TIMOB-25504](https://jira.appcelerator.org/browse/TIMOB-25504) -2436h@3x Images on iPhone X are not used when -736h@3x exists

### Windows

* [TIMOB-23291](https://jira.appcelerator.org/browse/TIMOB-23291) - Windows: Random Values while trying to decrypt value using AES encryption on device

* [TIMOB-24124](https://jira.appcelerator.org/browse/TIMOB-24124) - Windows: Updating a tableView section with a headerView causes a layout issue

* [TIMOB-24832](https://jira.appcelerator.org/browse/TIMOB-24832) - Windows: Unable to set a footerView or headerView on a TableView after data has been set

* [TIMOB-24858](https://jira.appcelerator.org/browse/TIMOB-24858) - Windows: TableViewRow defaults to horizontal layout

* [TIMOB-24863](https://jira.appcelerator.org/browse/TIMOB-24863) - Windows: TableView.filterAttribute does not work

* [TIMOB-25013](https://jira.appcelerator.org/browse/TIMOB-25013) - Windows: Asserting the value returned from getPersonByIdentifier crashes an application

* [TIMOB-25027](https://jira.appcelerator.org/browse/TIMOB-25027) - Windows: Remove deprecated property Ti.UI.View.enabled

* [TIMOB-25038](https://jira.appcelerator.org/browse/TIMOB-25038) - (Windows) When "SearchBar.showCancel" Is used and the "X" is pressed text is removed but not "X"

* [TIMOB-25255](https://jira.appcelerator.org/browse/TIMOB-25255) - Windows: Setting label.color to null causes label text to become transparent

* [TIMOB-25257](https://jira.appcelerator.org/browse/TIMOB-25257) - Windows: Crash when adding tableview back to window

* [TIMOB-25275](https://jira.appcelerator.org/browse/TIMOB-25275) - Windows: index property of TableView click event should be index of whole TableView and not section

* [TIMOB-25281](https://jira.appcelerator.org/browse/TIMOB-25281) - Windows: Ti.Media.saveToPhotoGallery does not accept a blob

* [TIMOB-25282](https://jira.appcelerator.org/browse/TIMOB-25282) - Windows: saveToPhotoGallery throws exception

* [TIMOB-25291](https://jira.appcelerator.org/browse/TIMOB-25291) - Windows: Calling send with data will upgrade from a GET to a POST

* [TIMOB-25325](https://jira.appcelerator.org/browse/TIMOB-25325) - Windows: Click event of Button does not provide X, Y coordinates

* [TIMOB-25326](https://jira.appcelerator.org/browse/TIMOB-25326) - Windows: image property of ListItem should not overlay text

* [TIMOB-25327](https://jira.appcelerator.org/browse/TIMOB-25327) - Windows: currentPage property of scrollableview.scrollend event is always 0

* [TIMOB-25460](https://jira.appcelerator.org/browse/TIMOB-25460) - Windows: picker height not working

### Multiple platforms

* [TIMOB-25010](https://jira.appcelerator.org/browse/TIMOB-25010) - nodejs build script: npm install failing on linux and windows

* [TIMOB-25016](https://jira.appcelerator.org/browse/TIMOB-25016) - Allow node-ios-device to be installed on Windows and Linux

* [TIMOB-25176](https://jira.appcelerator.org/browse/TIMOB-25176) - CLI: SDK 7 broken on node 4

* [TIMOB-25328](https://jira.appcelerator.org/browse/TIMOB-25328) - CLI: Option "Enable Javascript Minification" break code from SDK >= 6.1.1.G.A

## Improvements

### Android

* [TIMOB-10724](https://jira.appcelerator.org/browse/TIMOB-10724) - Android: Modules: remove gperf as a build dependency[TIMOB-18441](https://jira.appcelerator.org/browse/TIMOB-18441) - Android: Add CLI option to override keystore signature algorithm

    * Removed gperf as an Android build dependency on Windows 7

    * Added `--sigalg` option in the CLI for overriding keystore signing algorithm

* [TIMOB-23645](https://jira.appcelerator.org/browse/TIMOB-23645) - Android notification: allow to set color of background

    * Added `Color` to Android notification color behind icon

* [TIMOB-25353](https://jira.appcelerator.org/browse/TIMOB-25353) - Android: Move Play Services into a module

    * Moved Google Play Services to `ti.playservices` module

* [TIMOB-25441](https://jira.appcelerator.org/browse/TIMOB-25441) - Android: Support ARM64

    * Added native support for ARM64

* [TIMOB-25448](https://jira.appcelerator.org/browse/TIMOB-25448) - Android: Update module build tools to compile with Java 7

    * Updated module build tools to support Java 7 language features

* [TIMOB-25483](https://jira.appcelerator.org/browse/TIMOB-25483) - Android: Add FACE\_UP/FACE\_DOWN support to Ti.Gesture

    * Added support for `FACE_UP` and `FACE_DOWN` for Android

* [TIMOB-25498](https://jira.appcelerator.org/browse/TIMOB-25498) - Android: Deprecate `getEventsInYear` and `getEventsInMonth`

    * Deprecated `getEventsInYear()` and `getEventsInMonth()` methods from `Ti.Calendar.Calendar`

* [TIMOB-25510](https://jira.appcelerator.org/browse/TIMOB-25510) - Android: Lower min "targetSdkVersion" from 25 to 23

    * Due to file permission issues, this release pushed the targetSdkVersion back to 23

### iOS

* [TIMOB-23136](https://jira.appcelerator.org/browse/TIMOB-23136) - iOS: Deprecate TiJScore / Kroll-Thread in SDK-Core

    * Deprecated TiJSCore. TiJSCore will be removed in SDK 8.0.0.

* [TIMOB-23495](https://jira.appcelerator.org/browse/TIMOB-23495) - iOS: Support parent property on Ti.Filesystem.File

    * Added iOS parity for `Ti.Filesystem.File.parent` property

* [TIMOB-24327](https://jira.appcelerator.org/browse/TIMOB-24327) - iOS: Implement AllowsMultipleSelectionWhenEditing and getSelectedRow in ListView

    * Implemented `AllowMultipleSelectionWhenEditing` property and `getSelectedRows` method

* [TIMOB-25279](https://jira.appcelerator.org/browse/TIMOB-25279) - iOS: Clean-up Titanium core, resolve all compiler warnings

    * Improved on the following Xcode 9 features:

        * Static analyser warnings

        * Fix some "missing localization" warnings by using NSLocalizedString

        * Fix unreachable code

### Windows

* [TIMOB-24975](https://jira.appcelerator.org/browse/TIMOB-24975) - Windows: SearchBar should show No Results text if there are no results in a search

    * SearchBar now displays "No Results" if there are no results from a search

* [TIMOB-25433](https://jira.appcelerator.org/browse/TIMOB-25433) - Windows: Auto-detect requirement of cmake needing to be rerun in module build

    * Added feature that automatically builds the `cmake` directory if it doesn't exist. Use the `--run-cmake` command.

### Multiple platforms

* [TIMOB-24000](https://jira.appcelerator.org/browse/TIMOB-24000) - CLI: Module build should error if the apiversion in manifest does not match the SDKs apiversion

    * Added feature that the module build will announce an error if the apiversion in the manifest does not match the SDK's apiversion

## API changes

### New APIs

The following APIs are new or have expanded platform support in Release 7.0.0 as of December 8th, 2017.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Android.IMPORTANCE\_DEFAULT | property | Used with NotificationChannel to specify an importance level. (New API, supported on Android.) |
| Titanium.Android.IMPORTANCE\_HIGH | property | Used with NotificationChannel to specify an importance level. (New API, supported on Android.) |
| Titanium.Android.IMPORTANCE\_LOW | property | Used with NotificationChannel to specify an importance level. (New API, supported on Android.) |
| Titanium.Android.IMPORTANCE\_MAX | property | Used with NotificationChannel to specify an importance level. (New API, supported on Android.) |
| Titanium.Android.IMPORTANCE\_MIN | property | Used with NotificationChannel to specify an importance level. (New API, supported on Android.) |
| Titanium.Android.IMPORTANCE\_NONE | property | Used with NotificationChannel to specify an importance level. (New API, supported on Android.) |
| Titanium.Android.IMPORTANCE\_UNSPECIFIED | property | Used with NotificationChannel to specify an importance level. (New API, supported on Android.) |
| Titanium.Android.Notification.color | property | Accent color used behind icon. (New API, supported on Android.) |
| Titanium.Android.Notification.getColor | method | Gets the value of the Titanium.Android.Notification.color property. (New API, supported on Android.) |
| Titanium.Android.Notification.setColor | method | Sets the value of the Titanium.Android.Notification.color property. (New API, supported on Android.) |
| Titanium.Android.NotificationChannel | object | Module for notification channels. (New API, supported on Android.) |
| Titanium.Android.QuickSettingsService | object | Android service for creating custom quick settings tiles and handling user's interaction with them. (New API, supported on Android.) |
| Titanium.Android.TILE\_STATE\_ACTIVE | property | QuickSettings tile is active. (New API, supported on Android.) |
| Titanium.Android.TILE\_STATE\_INACTIVE | property | QuickSettings tile is inactive. (New API, supported on Android.) |
| Titanium.Android.TILE\_STATE\_UNAVAILABLE | property | QuickSettings tile is unavailble. (New API, supported on Android.) |
| Titanium.Media.VIDEO\_SCALING\_RESIZE | property | Specifies that the video should be stretched to fill the bounds of layer. (New API, supported on iPhone and iPad.) |
| Titanium.Media.VIDEO\_SCALING\_RESIZE\_ASPECT | property | Specifies that the player should preserve the aspect ratio of video and fit the video within the bounds of layer. (New API, supported on iPhone and iPad.) |
| Titanium.Media.VIDEO\_SCALING\_RESIZE\_ASPECT\_FILL | property | Specifies that the player should preserve the aspect ratio of video and fill the bounds of layer. (New API, supported on iPhone and iPad.) |
| Titanium.Media.VideoPlayer.getShowsControls | method | Gets the value of the Titanium.Media.VideoPlayer.showsControls property. (Added support for iPhone and iPad.) |
| Titanium.Media.VideoPlayer.setShowsControls | method | Sets the value of the Titanium.Media.VideoPlayer.showsControls property. (Added support for iPhone and iPad.) |
| Titanium.Media.VideoPlayer.showsControls | property | Whether or not the receiver shows playback controls. Default is true. (Added support for iPhone and iPad.) |
| Titanium.Platform.getIdentifierForAdvertising | method | Gets the value of the Titanium.Platform.identifierForAdvertising property. (New API, supported on iPhone and iPad.) |
| Titanium.Platform.getIdentifierForVendor | method | Gets the value of the Titanium.Platform.identifierForVendor property. (New API, supported on iPhone and iPad.) |
| Titanium.Platform.getIsAdvertisingTrackingEnabled | method | Gets the value of the Titanium.Platform.isAdvertisingTrackingEnabled property. (New API, supported on iPhone and iPad.) |
| Titanium.Platform.identifierForAdvertising | property | An alphanumeric string unique to each device, used only for serving advertisements. (New API, supported on iPhone and iPad.) |
| Titanium.Platform.identifierForVendor | property | An alphanumeric string that uniquely identifies a device to the app's vendor. (New API, supported on iPhone and iPad.) |
| Titanium.Platform.isAdvertisingTrackingEnabled | property | A Boolean value that indicates whether the user has limited ad tracking. (New API, supported on iPhone and iPad.) |
| Titanium.Platform.setIdentifierForAdvertising | method | Sets the value of the Titanium.Platform.identifierForAdvertising property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ATTRIBUTE\_BASELINE\_OFFSET | property | Use with Attribute.type to apply a different baseline to the text. (Added support for Android.) |
| Titanium.UI.AUTOFILL\_TYPE\_ADDRESS | property | Specifies the expectation of an address. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_ADDRESS\_CITY | property | Specifies the expectation of a city name. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_ADDRESS\_CITY\_STATE | property | Specifies the expectation of a city name combined with a state name. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_ADDRESS\_LINE1 | property | Specifies the expectation of the first line of a street address. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_ADDRESS\_LINE2 | property | Specifies the expectation of the second line of a street address. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_ADDRESS\_STATE | property | Specifies the expectation of a state name. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_CARD\_EXPIRATION\_DATE | property | Specifies the expectation of a card expiration date. (New API, supported on Android.) |
| Titanium.UI.AUTOFILL\_TYPE\_CARD\_EXPIRATION\_DAY | property | Specifies the expectation of a card expiration day. (New API, supported on Android.) |
| Titanium.UI.AUTOFILL\_TYPE\_CARD\_EXPIRATION\_MONTH | property | Specifies the expectation of a card expiration month. (New API, supported on Android.) |
| Titanium.UI.AUTOFILL\_TYPE\_CARD\_EXPIRATION\_YEAR | property | Specifies the expectation of a card expiration year. (New API, supported on Android.) |
| Titanium.UI.AUTOFILL\_TYPE\_CARD\_NUMBER | property | Specifies the expectation of a card number. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_CARD\_SECURITY\_CODE | property | Specifies the expectation of a card security code. (New API, supported on Android.) |
| Titanium.UI.AUTOFILL\_TYPE\_COUNTRY\_NAME | property | Specifies the expectation of a country name. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_EMAIL | property | Specifies the expectation of an email address. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_FAMILY\_NAME | property | Specifies the expectation of a family name. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_GIVEN\_NAME | property | Specifies the expectation of a given name. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_JOB\_TITLE | property | Specifies the expectation of a job title. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_LOCATION | property | Specifies the expectation of a location, such as a point of interest, an address, or another way to identify a location. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_MIDDLE\_NAME | property | Specifies the expectation of a middle name. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_NAME | property | Specifies the expectation of a name. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_NAME\_PREFIX | property | Specifies the expectation of a prefix or title, such as 'Dr.' (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_NAME\_SUFFIX | property | Specifies the expectation of a suffix, such as 'Jr.' (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_NICKNAME | property | Specifies the expectation of a nickname. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_ORGANIZATION\_NAME | property | Specifies the expectation of an organization name. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_PASSWORD | property | Specifies the expectation of a password. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_PHONE | property | Specifies the expectation of a telephone number. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_POSTAL\_CODE | property | Specifies the expectation of a postal code. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_SUBLOCALITY | property | Specifies the expectation of a sublocality. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_URL | property | Specifies the expectation of a URL. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AUTOFILL\_TYPE\_USERNAME | property | Specifies the expectation of an account or login name. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.ListView.allowsMultipleSelectionDuringEditing | property | Determines whether multiple items of this list view can be selected at the same time while editing the table. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.getAllowsMultipleSelectionDuringEditing | method | Gets the value of the Titanium.UI.ListView.allowsMultipleSelectionDuringEditing property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.getSelectedItems | method | Gets the value of the Titanium.UI.ListView.selectedItems property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.selectedItems | property | Returns the selected list view items. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.setAllowsMultipleSelectionDuringEditing | method | Sets the value of the Titanium.UI.ListView.allowsMultipleSelectionDuringEditing property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.setSelectedItems | method | Sets the value of the Titanium.UI.ListView.selectedItems property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollView.getRefreshControl | method | Gets the value of the Titanium.UI.ScrollView.refreshControl property. (Added support for Android.) |
| Titanium.UI.ScrollView.refreshControl | property | View positioned above the first row that is only revealed when the user drags the scroll view contents down. (Added support for Android.) |
| Titanium.UI.ScrollView.scrollToTop | method | Moves the top of the scrollable region into the viewable area. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.ScrollView.setRefreshControl | method | Sets the value of the Titanium.UI.ScrollView.refreshControl property. (Added support for Android.) |
| Titanium.UI.TextArea.autofillType | property | Sets the autofill type for the text area. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TextArea.getAutofillType | method | Gets the value of the Titanium.UI.TextArea.autofillType property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TextArea.getHintType | method | Gets the value of the Titanium.UI.TextArea.hintType property. (New API, supported on Android.) |
| Titanium.UI.TextArea.hintType | property | Hint type to display on the text field. (New API, supported on Android.) |
| Titanium.UI.TextArea.setAutofillType | method | Sets the value of the Titanium.UI.TextArea.autofillType property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TextArea.setHintType | method | Sets the value of the Titanium.UI.TextArea.hintType property. (New API, supported on Android.) |
| Titanium.UI.TextField.autofillType | property | Sets the autofill type for the text field. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TextField.getAutofillType | method | Gets the value of the Titanium.UI.TextField.autofillType property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TextField.getHintType | method | Gets the value of the Titanium.UI.TextField.hintType property. (New API, supported on Android.) |
| Titanium.UI.TextField.hintType | property | Hint type to display on the text field. (New API, supported on Android.) |
| Titanium.UI.TextField.setAutofillType | method | Sets the value of the Titanium.UI.TextField.autofillType property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TextField.setHintType | method | Sets the value of the Titanium.UI.TextField.hintType property. (New API, supported on Android.) |
| Titanium.UI.Window.extendSafeArea | property | Specifies whether the content (subviews) of the window will render inside the safe-area or not.Only used in iOS 11.0 and later. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.getExtendSafeArea | method | Gets the value of the Titanium.UI.Window.extendSafeArea property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.getLargeTitleDisplayMode | method | Gets the value of the Titanium.UI.Window.largeTitleDisplayMode property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.getLargeTitleEnabled | method | Gets the value of the Titanium.UI.Window.largeTitleEnabled property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.getSustainedPerformanceMode | method | Gets the value of the Titanium.UI.Window.sustainedPerformanceMode property. (New API, supported on Android.) |
| Titanium.UI.Window.largeTitleDisplayMode | property | The mode to use when displaying the title of the navigation bar. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.largeTitleEnabled | property | A Boolean value indicating whether the title should be displayed in a large format. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setExtendSafeArea | method | Sets the value of the Titanium.UI.Window.extendSafeArea property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setLargeTitleDisplayMode | method | Sets the value of the Titanium.UI.Window.largeTitleDisplayMode property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setLargeTitleEnabled | method | Sets the value of the Titanium.UI.Window.largeTitleEnabled property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setSustainedPerformanceMode | method | Sets the value of the Titanium.UI.Window.sustainedPerformanceMode property. (New API, supported on Android.) |
| Titanium.UI.Window.sustainedPerformanceMode | property | Maintain a sustainable level of performance. (New API, supported on Android.) |
| Titanium.UI.iOS.LARGE\_TITLE\_DISPLAY\_MODE\_ALWAYS | property | Always use a larger title when this item is top most. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.LARGE\_TITLE\_DISPLAY\_MODE\_AUTOMATIC | property | Automatically use the large out-of-line title based on the state of the previous item in the navigation bar. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.LARGE\_TITLE\_DISPLAY\_MODE\_NEVER | property | Never use a larger title when this item is top most. (New API, supported on iPhone and iPad.) |

### Deprecated APIs

The following APIs are deprecated in Release 7.0.0 as of December 8th, 2017.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Calendar.Calendar.getEventsInMonth | method | Use Titanium.Calendar.Calendar.getEventsBetweenDates instead. |
| Titanium.Calendar.Calendar.getEventsInYear | method | Use Titanium.Calendar.Calendar.getEventsBetweenDates instead. |
| Titanium.Filesystem.File.getParent | method | Use the Titanium.Filesystem.File.parent property to receive a `File`reference instead. If you wish to receive the path, use the `nativePath`property of that reference instead. |
| Titanium.Geolocation.AUTHORIZATION\_AUTHORIZED | property | Use Titanium.Geolocation.AUTHORIZATION\_ALWAYS as advised by Apple. |
| Titanium.Media.VideoPlayer.backgroundView | property | Use Titanium.Media.VideoPlayer.overlayView instead. |
| Titanium.Media.VideoPlayer.getBackgroundView | method | Use Titanium.Media.VideoPlayer.overlayView instead. |
| Titanium.Media.VideoPlayer.getLoadState | method | On iOS, use Titanium.Media.VideoPlayer.moviePlayerStatus instead. |
| Titanium.Media.VideoPlayer.loadState | property | On iOS, use Titanium.Media.VideoPlayer.moviePlayerStatus instead. |
| Titanium.Media.VideoPlayer.setBackgroundView | method | Use Titanium.Media.VideoPlayer.overlayView instead. |

### Removed APIs

The following APIs have been removed in Release 7.0.0 as of December 8th, 2017.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Calendar.STATUS\_CANCELLED | property | Use Titanium.Calendar.STATUS\_CANCELED instead. |
| Titanium.Media.CAMERA\_AUTHORIZATION\_NOT\_DETERMINED | property | Use Titanium.Media.CAMERA\_AUTHORIZATION\_UNKNOWN instead. |
| Titanium.Media.VIDEO\_CONTROL\_DEFAULT | property | This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_CONTROL\_EMBEDDED | property | This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_CONTROL\_FULLSCREEN | property | This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_LOAD\_STATE\_PLAYTHROUGH\_OK | property | This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_LOAD\_STATE\_STALLED | property | This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_MEDIA\_TYPE\_AUDIO | property | This property has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_MEDIA\_TYPE\_NONE | property | This property has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_MEDIA\_TYPE\_VIDEO | property | This property has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_PLAYBACK\_STATE\_SEEKING\_BACKWARD | property | This constant has been removed on iOS by using the official Apple AVPlayer that does not expose this functionality so far. |
| Titanium.Media.VIDEO\_PLAYBACK\_STATE\_SEEKING\_FORWARD | property | This constant has been removed on iOS by using the official Apple AVPlayer that does not expose this functionality so far. |
| Titanium.Media.VIDEO\_SCALING\_ASPECT\_FILL | property | This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_SCALING\_ASPECT\_FIT | property | This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_SCALING\_MODE\_FILL | property | This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_SCALING\_NONE | property | This property has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_SOURCE\_TYPE\_FILE | property | This property has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_SOURCE\_TYPE\_STREAMING | property | This property has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VIDEO\_SOURCE\_TYPE\_UNKNOWN | property | This property has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VideoPlayer.fullscreen | event | This event has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VideoPlayer.fullscreen | property | This method has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VideoPlayer.getFullscreen | method | This method has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VideoPlayer.getMediaControlStyle | method | On iOS, use Titanium.Media.VideoPlayer.showsControls instead. |
| Titanium.Media.VideoPlayer.getSourceType | method | This method has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VideoPlayer.mediaControlStyle | property | On iOS, use Titanium.Media.VideoPlayer.showsControls instead. |
| Titanium.Media.VideoPlayer.mediatypesavailable | event | This event has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VideoPlayer.setFullscreen | method | This method has been removed for iOS in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VideoPlayer.setMediaControlStyle | method | On iOS, use Titanium.Media.VideoPlayer.showsControls instead. |
| Titanium.Media.VideoPlayer.setSourceType | method | This method has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VideoPlayer.sourcechange | event | This event has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Media.VideoPlayer.sourceType | property | This method has been removed in Titanium SDK 7.0.0 as of the official deprecation by Apple. |
| Titanium.Network.INADDR\_ANY | property |  |
| Titanium.UI.iPhone | object | Use the unified Titanium.UI.iOS namespace instead. |
| Titanium.UI.iPhone.ActivityIndicatorStyle | object | Use the Titanium.UI.ActivityIndicatorStyle constants instead (without the iPhone namespace). |
| Titanium.UI.iPhone.AlertDialogStyle | object | Use Titanium.UI.iOS.AlertDialogStyle instead. |
| Titanium.UI.iPhone.AnimationStyle | object | Use Titanium.UI.iOS.AnimationStyle instead. |
| Titanium.UI.iPhone.ListViewCellSelectionStyle | object | Use Titanium.UI.iOS.ListViewCellSelectionStyle instead. |
| Titanium.UI.iPhone.ListViewScrollPosition | object | Use Titanium.UI.iOS.ListViewScrollPosition instead. |
| Titanium.UI.iPhone.ListViewSeparatorStyle | object | Use Titanium.UI.TABLE\_VIEW\_SEPARATOR\_STYLE\_SINGLE\_LINE and Titanium.UI.TABLE\_VIEW\_SEPARATOR\_STYLE\_NONE instead. |
| Titanium.UI.iPhone.ListViewStyle | object | Use Titanium.UI.iOS.ListViewStyle instead. |
| Titanium.UI.iPhone.ProgressBarStyle | object | Use Titanium.UI.iOS.ProgressBarStyle instead. |
| Titanium.UI.iPhone.RowAnimationStyle | object | Use Titanium.UI.iOS.RowAnimationStyle instead. |
| Titanium.UI.iPhone.ScrollIndicatorStyle | object | Use Titanium.UI.iOS.ScrollIndicatorStyle instead. |
| Titanium.UI.iPhone.SystemButton | object | Use Titanium.UI.iOS.SystemButton instead. |
| Titanium.UI.iPhone.SystemButtonStyle | object | Use Titanium.UI.iOS.SystemButtonStyle instead. |
| Titanium.UI.iPhone.SystemIcon | object | Use Titanium.UI.iOS.SystemIcon instead. |
| Titanium.UI.iPhone.TableViewCellSelectionStyle | object | Use Titanium.UI.iOS.TableViewCellSelectionStyle instead. |
| Titanium.UI.iPhone.TableViewScrollPosition | object | Use Titanium.UI.iOS.TableViewScrollPosition instead. |
| Titanium.UI.iPhone.TableViewSeparatorStyle | object | Use Titanium.UI.TABLE\_VIEW\_SEPARATOR\_STYLE\_SINGLE\_LINE and Titanium.UI.TABLE\_VIEW\_SEPARATOR\_STYLE\_NONE instead. |
| Titanium.UI.iPhone.TableViewStyle | object | Use Titanium.UI.iOS.TableViewStyle instead. |
