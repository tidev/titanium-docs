---
title: Titanium SDK 5.0.0 Release Note
weight: '230'
---

# Titanium SDK 5.0.0 Release Note

## Titanium SDK 5.0.0 General Availability - 16 September 2015

### Contents

## About This Release

This is a general availability (GA) version of Titanium SDK 5.0.0.

Note that this release includes feature and behavior changes. See [Notice of Feature and Behavior Changes](#changes) for details.

This Release introduces a number of new features. See [New Features](#features) for a summary of new features in this release. Notable issues include support for Android 6.0 (Marshmallow), iOS 9.0, watchOS 2 and direct API access for Windows.

This Release includes over 150 bug fixes and improvements, see the [full list of issues that were addressed in Release 5.0.0](https://jira.appcelerator.org/issues/?filter=16923).

As of this release, Titanium SDK 4.x will not be supported one calendar year from 5.0.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

### Android Support

This Release includes support to build your application with the Android 6.0 (Marshmallow) SDK.

Note there is a [known issue](#camera_crash) where the application will crash if the camera is used

### CLI 5.0.0

This Release coincides with the release of Appcelerator CLI 5.0.0, which includes [Alloy 1.7.8](https://github.com/appcelerator/alloy/releases) and [Titanium CLI 5.0.3](https://github.com/appcelerator/titanium/releases).

For more details, see the [CLI Release Notes](/guide/Appcelerator_CLI/Appcelerator_CLI_Release_Notes/).

### iOS and watchOS Support

This Release includes support for iOS 9.0, watchOS 2 and Xcode 7.0.

Note there is a [known issue](#one_ios_9_device) that the SDK can only detect one iOS 9.0 device when multiple devices are plugged in.

Note that this Release only supports watchOS 2 applications built with Xcode; iOS app extensions and watchOS 1 applications are not supported in this Release.

To get started with watchOS 2, see:

* [Integrate a WatchKit App Built in Xcode](/guide/Titanium_SDK/Titanium_SDK_How-tos/Platform_API_Deep_Dives/iOS_API_Deep_Dives/Integrate_a_WatchKit_App_Built_in_Xcode/)

* [appc-sample-watchos2](https://github.com/appcelerator-developer-relations/appc-sample-watchos2)

### Studio 4.3.0

This Release coincides with the release of Studio 4.3.0, which includes support for building, running and packaging watchOS 2 applications built in Xcode.

For more details, see the [Studio Release Notes](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Release_Notes/Studio_Release_Notes_4.x/Studio_4.3.0_Release_Note/).

## Notice of Feature and Behavior Changes

### Android Platform

#### Cookie Expiration

Due to the switch from the Apache HTTP Client library to the [java.net](http://java.net/) package for network support, you can no longer set the expiration date of the cookie using the`expiryDate` property.

Instead, set the [maxAge](#!/api/Titanium.Network.Cookie-property-maxAge) property of the Cookie object on the Android platform.

### iOS Platform

#### Application Transport Security

Starting with iOS 9.0, Apple introduced new security guidelines for network connections, which requires TLS 1.2 or greater, and specific cipher criteria. If a connection does not meet the guidelines, Apple will refuse the connection and an error will be returned in the network response.

Because of the strict guidelines, the Titanium SDK disables ATS by default. If you wish to re-enable ATS, add the [`NSAppTransportSecurity` dict](https://developer.apple.com/library/prerelease/ios/technotes/App-Transport-Security-Technote/index.html) to the `ios plist`section of the `tiapp.xml` file, then add the `NSAllowArbitraryLoads` key and set it to true.

Note that you may need to whitelist URLs in order to connect to the web services.

For more information, see the _iOS 9 Application Note_ in the [Titanium.Network API reference](#!/api/Titanium.Network).

#### Contacts

Starting with iOS 9.0, to get the ID of a `Titanium.Contacts.Person` object use the `identifier` property.

Prior to iOS 9.0, use the `recordId` property.

#### Icons and Launch Images

Icons (app, settings and spotlight) and launch images are now added to the Asset Catalog. Due to the change, you can no longer reference these assets from the filesystem. For example, you can no longer set the `backgroundImage` property to a launch image.

Also all app icons are required to be added to the project in order to build an iOS application. If any application icon is missing, the build will fail. The build will not fail if you omit spotlight or settings icons.

All icons must be square, that is, the height and width must be equal, and in PNG format. If an icon does not meet the requirements, it will be ignored during the build process.

You are recommended to add a 1024 x 1024 PNG image, named `DefaultIcon.png` placed in the project's root folder, which is used to generate all or only omitted icons for the project. New Titanium projects will have the `DefaultIcon.png` file.

#### IPv6 DNS64/NAT64 Compatibility

If you submit an iOS 9 application to the iTunes App Store, your application must be compatible with IPv6 DNS64/NAT64 networks as part of App Store submissions.

Apple recommends not to include hard-coded IPv4 address literals in your application, for example, 127.0.0.1, and to test the application with an IPv6 DNS64/NAT64 network.

For more information, see the _iOS 9 Application Note_ in the [Titanium.Network API reference](#!/api/Titanium.Network).

#### ListView Edit Actions

The ListView `rowAction` event was renamed to the `editaction` event, which is fired when a user interacts with a custom edit action in a list item. Update your application to listen for the [`editaction`](#!/api/Titanium.UI.ListView-event-editaction) event.

### Windows Platform

#### Windows Publisher ID

Starting with this Release, to build Windows Phone or Store applications with the CLI, add the `--win-publisher-id <WINDOW_PUBLISHER_ID>` option to `appc run`command. If prompting is turned on, the CLI will prompt you for your Windows Publisher ID. You may also set the Titanium CLI configuration variable`windows.publisherId` rather than using the command-line option.

If you are using Studio, set the Windows Publisher ID in Studio Preferences.

The Windows Publisher ID can be retrieved from the [Windows Dev Center Dashboard](https://dev.windows.com/).

## New Features

This section describes new features introduced in Release 5.0.0.

### Android Platform

This section lists new features and improvements only available on the Android platform.

#### Large Icon Support for Notifications

This Release supports adding a large icon to be shown in the content area of a notificaiton. Set the [largeIcon](#!/api/Titanium.Android.Notification-property-largeIcon) property of the Ti.Android.Notification object.

#### Network Support

On Android, the [java.net](http://java.net/) package replaces the Apache HTTP Client library for network support. Google removed support the Apache HTTP Client library in Android 6.0 in favor of using the [java.net](http://java.net/).HttpURLConnection class, which is "more efficient because it reduces network use through transparent compression and response caching, and minimizes power consumption."

#### Titanium Themes

This Release introduces new predefined Titanium themes for Android to hide the action bar and optionally the status bar.

Set the `android:theme` attribute of the Android manifest `application` element or set a Window object's `theme` property to one of the following new themes:

* `Theme.AppCompat.NoTitleBar`: hides the action and title bar

* `Theme.AppCompat.NoTitleBar.Fullscreen`: Same as Theme.AppCompat.NoTitleBar with a fullscreen window (covers the status bar).

### iOS Platform

This section lists new features and improvements only available on the iOS platform.

#### Attributed String Line Break

iOS now supports changing the line break behavior with AttributedStrings. Set the attribute type to [`ATTRIBUTE_LINE_BREAK`](#!/api/Titanium.UI-property-ATTRIBUTE_LINE_BREAK) and the attribute value to an`ATTRIBUTE_LINE_BREAK_*` constant.

#### Handoff

This Release supports Handoff, a feature introduced in iOS 8 that allows a user to transfer an in-progress activity from one Apple device to another. For example, if a user starts reading a book on an iPad, they can use Handoff to read the same book on an iPhone from where they stopped reading.

For more information, see:

* [Titanium.App.iOS.UserActivity API reference](#!/api/Titanium.App.iOS.UserActivity)

* [Handoff User Activites guide](/guide/Titanium_SDK/Titanium_SDK_How-tos/Platform_API_Deep_Dives/iOS_API_Deep_Dives/Handoff_User_Activities/)

#### Icons and Launch Images

The Titanium SDK now uses the Asset Catalog to support icons and launch images, allowing the SDK to support App Thinning.

You are recommended to add a 1024 x 1024 PNG image, named `DefaultIcon.png` placed in the project's root folder, which is used to generate all or only omitted icons for the project. New Titanium projects will have the `DefaultIcon.png` file.

Note that the localized launch images in the `i18n` folder are not supported by Asset Catalog.

For more details, see the [Icons and Splash Screens guide](/guide/Titanium_SDK/Titanium_SDK_How-tos/User_Interface_Fundamentals/Icons_and_Splash_Screens/).

#### Spotlight Search

Starting with iOS 9, you can add your application's content, user activities and web content to either the private on-device index or public Apple server-side index so the user can find it using iOS Spotlight.

For more information, see:

* _Index Application Content_ section in [Titanium.App.iOS API reference](#!/api/Titanium.App.iOS)

* [Spotlight Search guide](/guide/Titanium_SDK/Titanium_SDK_How-tos/Platform_API_Deep_Dives/iOS_API_Deep_Dives/Spotlight_Search/)

* [appc-sample-appsearch](https://github.com/appcelerator-developer-relations/appc-sample-appsearch)

#### Watch Connectivity

To communicate with watchOS 2 applications, use the [Titanum.WatchSession API](#!/api/Titanium.WatchSession) to exchange data and files.

Note that the application must run on an iOS 9 iPhone that supports watch apps and a watchOS 2 watch, and needs to be built with iOS 9 and Xcode 7.

To get started with Watch Connectivity, see:

* [Integrate a WatchKit App Built in Xcode](/guide/Titanium_SDK/Titanium_SDK_How-tos/Platform_API_Deep_Dives/iOS_API_Deep_Dives/Integrate_a_WatchKit_App_Built_in_Xcode/)

* [appc-sample-watchos2](https://github.com/appcelerator-developer-relations/appc-sample-watchos2)

### Windows Platform

This section lists new features and improvements only available on the Windows platform.

#### API Parity

The Windows Platform expands support for several APIs, including:

* Support for [Titanium.UI.Clipboard](#!/api/Titanium.UI.Clipboard)

* Events for [Titanium.Media.AudioPlayer](#!/api/Titanium.Media.AudioPlayer), [Titanium.Media.Sound](#!/api/Titanium.Media.Sound) and [Titanium.Media.VideoPlayer](#!/api/Titanium.Media.VideoPlayer)

* Expanded support for [Titanium.UI.Button](#!/api/Titanium.UI.Button) [Titanium.UI.ScrollView](#!/api/Titanium.UI.ScrollView) and [Titanium.UI.View](#!/api/Titanium.UI.View)

For details, see the [New APIs section below](#new_apis).

#### Direct API Access

This Release supports using the [Windows Runtime C++ APIs](https://msdn.microsoft.com/en-us/library/windows/apps/br211377.aspx) directly in JavaScript. Note that the Windows C#, VB and JavaScript APIs are not supported as well as any Windows 10 API. Check the Windows API reference to see if it supports the C++ API and Windows 8 and 8.1 before using it.

To use the WinRT APIs, pass the `require()` method the fully qualified name of the class you want to use, then invoke API calls on the object.

For details, see the [Window Runtime Direct API Access](/guide/Titanium_SDK/Titanium_SDK_How-tos/Extending_Titanium_Mobile/Windows_Runtime_Direct_API_Access/).

## Known Issues

### Camera Causes Application to Crash with Android SDK 6.0

The application crashes when the camera is shown and built against Android SDK 6.0 ([TIMOB-19422](https://jira.appcelerator.org/browse/TIMOB-19422)).

If you want to deploy to Android 6.0 devices with camera support, change the target SDK to version 22 (Android SDK 5.1).

### Can Only Detect One iOS 9.0 Device

When using Xcode 7, the Titanium SDK can only detect one iOS 9.0 if multiple devices are plugged in. ([TIMOB-19468](https://jira.appcelerator.org/browse/TIMOB-19468)).

## API Changes

### New APIs

The following APIs are new or have expanded platform support in Release 5.0.0 as of September 16th, 2015.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Android.Notification.getLargeIcon | method | Gets the value of the Titanium.Android.Notification.largeIcon property. (New API, supported on Android.) |
| Titanium.Android.Notification.largeIcon | property | Add a large icon to the notification (and the ticker on some devices) specified as an Android resource ID, or a local URL to a density-specific image. (New API, supported on Android.) |
| Titanium.Android.Notification.setLargeIcon | method | Sets the value of the Titanium.Android.Notification.largeIcon property. (New API, supported on Android.) |
| Titanium.App.iOS.SearchableIndex | object | The SearchableIndex module is used to add or remove Ti.App.iOS.SearchableItem objects from the device search index. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItem | object | Used to create a unique object containing all of the search information that will appear in the device search index. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.SearchableItemAttributeSet | object | The SearchableItemAttributeSet module defines metadata properties for SearchItem and UserActivity objects. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_APPLE\_ICNS | property | Uniform type identifier for Mac OS icon images. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_APPLE\_PROTECTED\_MPEG4\_AUDIO | property | Uniform type identifier for protected MPEG-4 audio (iTunes music store format). (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_AUDIO | property | Uniform type identifier for all audio content. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_BMP | property | Uniform type identifier for Windows bitmap images. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_FLAT\_RTFD | property | Uniform type identifier for Rich Text with content embedding, pasteboard format. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_GIF | property | Uniform type identifier for GIF images. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_HTML | property | Uniform type identifier for HTML. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_ICO | property | Uniform type identifier for Windows icon images. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_IMAGE | property | Uniform type identifier for all image types. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_JPEG | property | Uniform type identifier for JPEG images. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_JPEG2000 | property | Uniform type identifier for JPEG 2000 images. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_MOVIE | property | Uniform type identifier for all audiovisual content. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_MP3 | property | Uniform type identifier for MP3 audio. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_MPEG | property | Uniform type identifier for MPEG-1 and MPEG-2 content. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_MPEG4 | property | Uniform type identifier for MPEG-4 content. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_MPEG4\_AUDIO | property | Uniform type identifier for MPEG-4 audio. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_PDF | property | Uniform type identifier for PDF data. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_PICT | property | Uniform type identifier for PICT images. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_PLAIN\_TEXT | property | Uniform type identifier for a plain text type, equivalent to MIME type text/plain. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_PNG | property | Uniform type identifier for PNG images. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_QUICKTIME\_IMAGE | property | Uniform type identifier for QuickTime images. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_QUICKTIME\_MOVIE | property | Uniform type identifier for QuickTime movies. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_RTF | property | Uniform type identifier for Rich Text. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_RTFD | property | Uniform type identifier for Rich Text Format Directory, that is, Rich Text with content embedding, on-disk format. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_TEXT | property | Uniform type identifier for all text types. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_TIFF | property | Uniform type identifier for TIFF images. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_TXN\_TEXT\_AND\_MULTIMEDIA\_DATA | property | Uniform type identifier for MLTE (Textension) format for mixed text and multimedia data. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_UTF16\_EXTERNAL\_PLAIN\_TEXT | property | Uniform type identifier for Unicode-16 with byte-order mark (BOM), or if BOM is not present, an external representation byte order (big-endian). (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_UTF16\_PLAIN\_TEXT | property | Uniform type identifier for Unicode-16, native byte order, with an optional byte-order mark (BOM). (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_UTF8\_PLAIN\_TEXT | property | Uniform type identifier for Unicode-8 plain text type. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_VIDEO | property | Uniform type identifier for all video content without audio. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_WEB\_ARCHIVE | property | Uniform type identifier for WebKit webarchive format. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UTTYPE\_XML | property | Uniform type identifier for XML. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserActivity | object | The UserActivity module is used to enable device Handoff and to create User Activities. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.continueactivity | event | Fired when iOS continueactivity calls `continueUserActivity`. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.createSearchableIndex | method | Creates and returns an instance of Titanium.App.iOS.SearchableIndex. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.createSearchableItem | method | Creates and returns an instance of Titanium.App.iOS.SearchableItem. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.createSearchableItemAttributeSet | method | Creates and returns an instance of Titanium.App.iOS.SearchableItemAttributeSet. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.createUserActivity | method | Creates and returns an instance of Titanium.App.iOS.UserActivity. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.getSupportedUserActivityTypes | method | Gets the value of the Titanium.App.iOS.supportedUserActivityTypes property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.supportedUserActivityTypes | property | Provides an Array of the NSUserActivityTypes keys defined within your Titanium project. (available on iOS 8 and later). (New API, supported on iPhone and iPad.) |
| Titanium.Contacts.getGroupByIdentifier | method | Gets the group with the specified identifier. (New API, supported on iPhone and iPad.) |
| Titanium.Contacts.getPersonByIdentifier | method | Gets the person with the specified identifier. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Contacts.Person.identifier | property | Identifier of the person. (New API, supported on iPhone and iPad.) |
| Titanium.Geolocation.allowsBackgroundLocationUpdates | property | Determines if the app can do background location updates. (New API, supported on iPhone and iPad.) |
| Titanium.Geolocation.getAllowsBackgroundLocationUpdates | method | Gets the value of the Titanium.Geolocation.allowsBackgroundLocationUpdates property. (New API, supported on iPhone and iPad.) |
| Titanium.Geolocation.setAllowsBackgroundLocationUpdates | method | Sets the value of the Titanium.Geolocation.allowsBackgroundLocationUpdates property. (New API, supported on iPhone and iPad.) |
| Titanium.Media.AudioPlayer.change | event | Fired when the state of the playback changes. (Added support for Windows Phone.) |
| Titanium.Media.AudioPlayer.complete | event | Fired when the audio has finished playing. (Added support for Windows Phone.) |
| Titanium.Media.AudioPlayer.error | event | Fired when there's an error. (Added support for Windows Phone.) |
| Titanium.Media.Sound.change | event | Fired when the state of the playback changes. (Added support for Windows Phone.) |
| Titanium.Media.Sound.complete | event | Fired when the audio has finished playing. (Added support for Windows Phone.) |
| Titanium.Media.Sound.error | event | Fired when an error occurs while playing the audio. (Added support for Windows Phone.) |
| Titanium.Media.VideoPlayer.complete | event | Fired when movie playback ends or a user exits playback. (Added support for Windows Phone.) |
| Titanium.Media.VideoPlayer.error | event | Fired when movie playback encounters an error. (Added support for Windows Phone.) |
| Titanium.Network.Cookie.getMaxAge | method | Gets the value of the Titanium.Network.Cookie.maxAge property. (New API, supported on Android.) |
| Titanium.Network.Cookie.maxAge | property | Sets the Max-Age attribute of a Cookie, in delta-seconds. (New API, supported on Android.) |
| Titanium.Network.Cookie.setMaxAge | method | Sets the value of the Titanium.Network.Cookie.maxAge property. (New API, supported on Android.) |
| Titanium.UI.ATTRIBUTE\_LINE\_BREAK | property | Use with Attribute.type to wrap and truncate the text. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ATTRIBUTE\_LINE\_BREAK\_BY\_CHAR\_WRAPPING | property | Use with Attribute.value to wrap words at word boundaries. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ATTRIBUTE\_LINE\_BREAK\_BY\_CLIPPING | property | Use with Attribute.value to set lines to not draw past the edge of the text container. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ATTRIBUTE\_LINE\_BREAK\_BY\_TRUNCATING\_HEAD | property | Use with Attribute.value to use ellipsis glyph at the beginning of the line for missing text. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ATTRIBUTE\_LINE\_BREAK\_BY\_TRUNCATING\_MIDDLE | property | Use with Attribute.value to use ellipsis glyph at the middle of the line for missing text. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ATTRIBUTE\_LINE\_BREAK\_BY\_TRUNCATING\_TAIL | property | Use with Attribute.value to use ellipsis glyph at the end of the line for missing text. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ATTRIBUTE\_LINE\_BREAK\_BY\_WORD\_WRAPPING | property | Use with Attribute.value to wrap words at word boundaries. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Clipboard | object | A module used for accessing clipboard data. (Added support for Windows Phone.) |
| Titanium.UI.ListView.noresults | event | Fired when the search using either searchView or searchText has no results. (Added support for Android.) |
| Titanium.UI.ListView.editaction | event | Fired when the user interacts with one of the custom edit actions. |
| Titanium.UI.Picker.getSelectionOpens | method | Gets the value of the Titanium.UI.Picker.selectionOpens property. (New API, supported on Android.) |
| Titanium.UI.Picker.selectionOpens | property | Determines whether calling the method `setSelectedRow` opens when called (New API, supported on Android.) |
| Titanium.UI.ScrollView.canCancelEvents | property | Determines whether this scroll view can cancel subview touches in order to scroll instead. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.contentOffset | property | X and Y coordinates to which to reposition the top-left point of the scrollable region. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.decelerationRate | property | The deceleration rate of the ScrollView. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.disableBounce | property | Determines whether scroll bounce of the scrollable region is enabled. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getCanCancelEvents | method | Gets the value of the Titanium.UI.ScrollView.canCancelEvents property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getContentOffset | method | Gets the value of the Titanium.UI.ScrollView.contentOffset property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getDecelerationRate | method | Gets the value of the Titanium.UI.ScrollView.decelerationRate property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getDisableBounce | method | Gets the value of the Titanium.UI.ScrollView.disableBounce property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getHorizontalBounce | method | Gets the value of the Titanium.UI.ScrollView.horizontalBounce property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getMaxZoomScale | method | Gets the value of the Titanium.UI.ScrollView.maxZoomScale property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getMinZoomScale | method | Gets the value of the Titanium.UI.ScrollView.minZoomScale property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getOverScrollMode | method | Gets the value of the Titanium.UI.ScrollView.overScrollMode property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getScrollIndicatorStyle | method | Gets the value of the Titanium.UI.ScrollView.scrollIndicatorStyle property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getScrollType | method | Gets the value of the Titanium.UI.ScrollView.scrollType property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getScrollsToTop | method | Gets the value of the Titanium.UI.ScrollView.scrollsToTop property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getVerticalBounce | method | Gets the value of the Titanium.UI.ScrollView.verticalBounce property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.getZoomScale | method | Gets the value of the Titanium.UI.ScrollView.zoomScale property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.horizontalBounce | property | Determines whether horizontal scroll bounce of the scrollable region is enabled. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.maxZoomScale | property | Maximum scaling factor of the scrollable region and its content. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.minZoomScale | property | Minimum scaling factor of the scrollable region and its content. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.overScrollMode | property | Determines the behavior when the user overscolls the view. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.scrollIndicatorStyle | property | Style of the scrollbar. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.scrollType | property | Limits the direction of the scrollable region, overriding the deduced setting. Set to`horizontal` or `vertical`. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.scrollsToTop | property | Controls whether the scroll-to-top gesture is effective. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setCanCancelEvents | method | Sets the value of the Titanium.UI.ScrollView.canCancelEvents property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setContentOffset | method | Sets the value of the Titanium.UI.ScrollView.contentOffset property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setDecelerationRate | method | Sets the value of the Titanium.UI.ScrollView.decelerationRate property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setDisableBounce | method | Sets the value of the Titanium.UI.ScrollView.disableBounce property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setHorizontalBounce | method | Sets the value of the Titanium.UI.ScrollView.horizontalBounce property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setMaxZoomScale | method | Sets the value of the Titanium.UI.ScrollView.maxZoomScale property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setMinZoomScale | method | Sets the value of the Titanium.UI.ScrollView.minZoomScale property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setOverScrollMode | method | Sets the value of the Titanium.UI.ScrollView.overScrollMode property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setScrollIndicatorStyle | method | Sets the value of the Titanium.UI.ScrollView.scrollIndicatorStyle property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setScrollType | method | Sets the value of the Titanium.UI.ScrollView.scrollType property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setScrollsToTop | method | Sets the value of the Titanium.UI.ScrollView.scrollsToTop property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setVerticalBounce | method | Sets the value of the Titanium.UI.ScrollView.verticalBounce property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.setZoomScale | method | Sets the value of the Titanium.UI.ScrollView.zoomScale property. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.verticalBounce | property | Determines whether vertical scroll bounce of the scrollable region is enabled. (Added support for Windows Phone.) |
| Titanium.UI.ScrollView.zoomScale | property | Scaling factor of the scroll view's content. (Added support for Windows Phone.) |
| Titanium.UI.Switch.color | property | Color to use for switch text, as a color name or hex triplet. (Added support for Windows Phone.) |
| Titanium.UI.Switch.enabled | property | Determines whether the switch is enabled. (Added support for Windows Phone.) |
| Titanium.UI.Switch.getColor | method | Gets the value of the Titanium.UI.Switch.color property. (Added support for Windows Phone.) |
| Titanium.UI.Switch.getEnabled | method | Gets the value of the Titanium.UI.Switch.enabled property. (Added support for Windows Phone.) |
| Titanium.UI.Switch.getTitleOff | method | Gets the value of the Titanium.UI.Switch.titleOff property. (Added support for Windows Phone.) |
| Titanium.UI.Switch.getTitleOn | method | Gets the value of the Titanium.UI.Switch.titleOn property. (Added support for Windows Phone.) |
| Titanium.UI.Switch.setColor | method | Sets the value of the Titanium.UI.Switch.color property. (Added support for Windows Phone.) |
| Titanium.UI.Switch.setEnabled | method | Sets the value of the Titanium.UI.Switch.enabled property. (Added support for Windows Phone.) |
| Titanium.UI.Switch.setTitleOff | method | Sets the value of the Titanium.UI.Switch.titleOff property. (Added support for Windows Phone.) |
| Titanium.UI.Switch.setTitleOn | method | Sets the value of the Titanium.UI.Switch.titleOn property. (Added support for Windows Phone.) |
| Titanium.UI.Switch.titleOff | property | Text to display on the switch in its "off" state, when the toggle button style is in use. (Added support for Windows Phone.) |
| Titanium.UI.Switch.titleOn | property | Text to display on the switch in its "on" state, when the toggle button style is in use. (Added support for Windows Phone.) |
| Titanium.UI.TextArea.getShowUndoRedoActions | method | Gets the value of the Titanium.UI.TextArea.showUndoRedoActions property. (New API, supported on iPad.) |
| Titanium.UI.TextArea.setShowUndoRedoActions | method | Sets the value of the Titanium.UI.TextArea.showUndoRedoActions property. (New API, supported on iPad.) |
| Titanium.UI.TextArea.showUndoRedoActions | property | Determinates if the undo and redo buttons on the left side of the keyboard should be displayed or not. Only valid on iOS9 and above. (New API, supported on iPad.) |
| Titanium.UI.TextField.getShowUndoRedoActions | method | Gets the value of the Titanium.UI.TextField.showUndoRedoActions property. (New API, supported on iPad.) |
| Titanium.UI.TextField.setShowUndoRedoActions | method | Sets the value of the Titanium.UI.TextField.showUndoRedoActions property. (New API, supported on iPad.) |
| Titanium.UI.TextField.showUndoRedoActions | property | Determinates if the undo and redo buttons on the left side of the keyboard should be displayed or not. Only valid on iOS9 and above. (New API, supported on iPad.) |
| Titanium.UI.View.backgroundImage | property | Background image for the view, specified as a local file path or URL. (Added support for Windows Phone.) |
| Titanium.UI.View.getBackgroundImage | method | Gets the value of the Titanium.UI.View.backgroundImage property. (Added support for Windows Phone.) |
| Titanium.UI.View.getZIndex | method | Gets the value of the Titanium.UI.View.zIndex property. (Added support for Windows Phone.) |
| Titanium.UI.View.setBackgroundImage | method | Sets the value of the Titanium.UI.View.backgroundImage property. (Added support for Windows Phone.) |
| Titanium.UI.View.setZIndex | method | Sets the value of the Titanium.UI.View.zIndex property. (Added support for Windows Phone.) |
| Titanium.UI.View.zIndex | property | Z-index stack order position, relative to other sibling views. (Added support for Windows Phone.) |
| Titanium.WatchSession | object | Used to enable data and file transfers between a watchOS and iOS application. (New API, supported on iPhone.) |

### Deprecated APIs

The following APIs are deprecated in Release 5.0.0 as of September 16th, 2015.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.App.iOS.sendWatchExtensionReply | method | Use Titanium.App.iOS.WatchConnectivity instead, which is supported on iOS 9 and later. |
| Titanium.App.iOS.watchkitextensionrequest | event | Use Titanium.App.iOS.WatchConnectivity instead, which is supported on iOS9 and later. |

### Removed APIs

The following APIs have been removed in Release 5.0.0 as of September 16th, 2015 .

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Network.HTTPClient.addAuthFactory | method |  |
| Titanium.UI.ListView.rowAction | event | Event renamed to editaction |
