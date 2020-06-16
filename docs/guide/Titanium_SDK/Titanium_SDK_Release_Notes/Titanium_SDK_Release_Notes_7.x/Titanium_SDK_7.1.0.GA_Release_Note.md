---
title: Titanium SDK 7.1.0.GA - 14 March 2018
weight: '230'
---

# Titanium SDK 7.1.0.GA - 14 March 2018

## About this release

Titanium SDK 7.1.0.GA is a minor release of the SDK, addressing high-priority issues from previous releases.

As of this release, Titanium SDK 7.0.x will not be supported six months from 7.1.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Notice of feature and behavior Changes

### Android platform

* [TIMOB-25607](https://jira.appcelerator.org/browse/TIMOB-25607) - Remove deprecated Ti.map API

    * Deprecated Ti.map

## New features

### Android platform

* [TIMOB-9366](https://jira.appcelerator.org/browse/TIMOB-9366) - Android: Add "radial" support to view "backgroundGradient" property

    * Added radial gradient support

* [TIMOB-20126](https://jira.appcelerator.org/browse/TIMOB-20126) - Android: Not able to see the multiline notification on the android device

    * Added support for multiline notifications

* [TIMOB-20522](https://jira.appcelerator.org/browse/TIMOB-20522) - FusedLocationProvider on Android

    * Added support for `FusedLocationProviderClient` for Ti.Geolocation

* [TIMOB-24248](https://jira.appcelerator.org/browse/TIMOB-24248) - Android: Ti.Calendar Recurring Events are not clearly exposed

    * Implemented `Ti.Calendar.RecurrenceRule`

* [TIMOB-25591](https://jira.appcelerator.org/browse/TIMOB-25591) - Android: Programmatically check whether app has notification permission on Android

    * Exposed `NotificationManagerCompat.areNotificationsEnabled` method

### iOS platform

* [TIMOB-10368](https://jira.appcelerator.org/browse/TIMOB-10368) - iOS: Implement support for custom color/hintTextColor in SearchBar

    * Added support for custom `color` and `hintTextColor` in SearchBar

### Windows platform

* [TIMOB-25648](https://jira.appcelerator.org/browse/TIMOB-25648) - Windows: Implement Ti.UI.Label.minimumFontSize

    * Added parity for Windows platform of Ti.UI.Label.minimumFontSize and maxLines

* [TIMOB-25743](https://jira.appcelerator.org/browse/TIMOB-25743) - Windows: Auto-increment version numbering

    * Implemented automatic version increment. If you omit the build number, it will be generated behind scenes (available only on `development` and `test` build).

    * For instance when you have 1.0 version in tiapp.xml, we generate the 4th segment 1.0.0.x version number and increment this build number on each build. (numbering spec: Major.Minor.Build.Revision>). For example: `<version>1.0<version>`

    * If you set build number explicitly in `tiapp.xml`, it won't generate the build number. In this case you need to bump up the build number manually in order to prevent deployment issue like this: `<version>1.0.1.1<version>`

    * This feature can be disabled by setting false on use-auto-versioning in windows section:

        ```xml
        <windows>
          <use-auto-versioning>false</use-auto-versioning>
        </windows>
        ```

### Multiple platforms

* [TIMOB-24610](https://jira.appcelerator.org/browse/TIMOB-24610) - Support ES6 by transpiling to ES5 via new tiapp.xml "transpile" property

    * Added transpiling user JavaScript code to ES5 or minimum target OS/JS engine support

        ```xml
        <tiapp>
          <transpile>true</transpile>
        </tiapp>
        ```

    * Adding this property and having it set to true will enable transpilation during the build process using `babel-preset-env` to target the underlying JS engine version. For Android we target the version of v8 we build with. For iOS we target the version of iOS's included JavaScriptCore engine for the minimum iOS version the SDK targets.

        When using the flag be aware of the following this causes code to run in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode), which has the potential to cause errors to be thrown. Review [Transitioning to strict mode on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode) to become familiar with some common issues.

## Community credits

* [Michael Gangolf](https://github.com/m1ga) - Android: View rect x and y are inconsistent ([TIMOB-25557](https://jira.appcelerator.org/browse/TIMOB-25557))

* [Sergey Volkov](https://github.com/drauggres) - Android. TiResponseCache. Permission ([TIMOB-25507](https://jira.appcelerator.org/browse/TIMOB-25507))

## Fixed issues

### Android platforms

* [TIMOB-17210](https://jira.appcelerator.org/browse/TIMOB-17210) - Android: TextField/TextArea "change" event should not trigger when setting "value" or "attributedString" properties

* [TIMOB-23135](https://jira.appcelerator.org/browse/TIMOB-23135) - Android: "locationServicesEnabled" returns false when available on device

* [TIMOB-24404](https://jira.appcelerator.org/browse/TIMOB-24404) - Titanium projects specify "global.global != global" different

* [TIMOB-25507](https://jira.appcelerator.org/browse/TIMOB-25507) - Android. TiResponseCache. Permission

* [TIMOB-25552](https://jira.appcelerator.org/browse/TIMOB-25552) - Android: Nested scrolling within disabled ScrollView are not propagated to parent

* [TIMOB-25557](https://jira.appcelerator.org/browse/TIMOB-25557) - Android: View rect x and y are inconsistent

* [TIMOB-25585](https://jira.appcelerator.org/browse/TIMOB-25585) - Android: MediaModule creates temporary files that don't delete on app exit

* [TIMOB-25599](https://jira.appcelerator.org/browse/TIMOB-25599) - Android: V8 crash can occur when attempting to move weak Java ref to strong

* [TIMOB-25600](https://jira.appcelerator.org/browse/TIMOB-25600) - Android : SDK 7.0.0.GA not applying custom theme attributes properly on TableViewRow, but SDK 5.5.1 or below works properly

* [TIMOB-25619](https://jira.appcelerator.org/browse/TIMOB-25619) - Android: previewImage() crashes when given a non-file based blob

* [TIMOB-25679](https://jira.appcelerator.org/browse/TIMOB-25679) - Android: Crash when setting wrong accuracy in Ti.Geolocation

* [TIMOB-25687](https://jira.appcelerator.org/browse/TIMOB-25687) - Android: Picker change listener doesn't work the first time

* [TIMOB-25693](https://jira.appcelerator.org/browse/TIMOB-25693) - Android: Possible memory leak when setting ListSections on a ListView

* [TIMOB-25728](https://jira.appcelerator.org/browse/TIMOB-25728) - Android: TableView can crash using setData()

* [TIMOB-25742](https://jira.appcelerator.org/browse/TIMOB-25742) - CLI: Fails to install APK to Android 4.1 devices

* [TIMOB-25749](https://jira.appcelerator.org/browse/TIMOB-25749) - Android: Incompatible types: `Class<KrollExternalModule>`

* [TIMOB-25757](https://jira.appcelerator.org/browse/TIMOB-25757) - Android: Improve proxy getter/setter validation

* [TIMOB-25767](https://jira.appcelerator.org/browse/TIMOB-25767) - Android: Animated views should retain their initial properties

* [TIMOB-25769](https://jira.appcelerator.org/browse/TIMOB-25769) - Android: Allow video-upload in Ti.UI.WebView

* [TIMOB-25771](https://jira.appcelerator.org/browse/TIMOB-25771) - Android: Apps fail to build as of 7.0.2 if system requires proxy to access Internet

* [TIMOB-25773](https://jira.appcelerator.org/browse/TIMOB-25773) - Android: App won't compile if the folder contains space and dash

* [TIMOB-25825](https://jira.appcelerator.org/browse/TIMOB-25825) - Android: JNIUtil error message on app launch

* [TIMOB-25843](https://jira.appcelerator.org/browse/TIMOB-25843) - Android: 7.1.0.RC - Setting data in Ti.UI.TableView does not work as before

* [TIMOB-25849](https://jira.appcelerator.org/browse/TIMOB-25849) - Android: openPhotoGallery - width and height = 0 in 7.1.0 RC

### iOS platforms

* [TIMOB-20604](https://jira.appcelerator.org/browse/TIMOB-20604) - iOS: ti.geofence not tracking location on

* [TIMOB-25201](https://jira.appcelerator.org/browse/TIMOB-25201) - iOS: tintColor doesn't work on imageView if dimensions (height, width) are provided

* [TIMOB-25739](https://jira.appcelerator.org/browse/TIMOB-25739) - iOS 11: Location permissions do not indicate missing "WhenInUse" privacy-key

* [TIMOB-25762](https://jira.appcelerator.org/browse/TIMOB-25762) - iOS 11.3 beta: Loading HTML in Webview errors when accessing EventListener

* [TIMOB-25765](https://jira.appcelerator.org/browse/TIMOB-25765) - iOS 11: Scrollview layout error when set window with includeOpaqueBars and extendEdges

* [TIMOB-25829](https://jira.appcelerator.org/browse/TIMOB-25829) - Hyperloop: iOS - CocoaPods 1.4.0 breaks metabase generation

### Windows platforms

* [TIMOB-24818](https://jira.appcelerator.org/browse/TIMOB-24818) - Windows: Calling insertRow with a deleted row errors out application

* [TIMOB-25274](https://jira.appcelerator.org/browse/TIMOB-25274) - Windows: setData does not add UI elements that already existed

* [TIMOB-25581](https://jira.appcelerator.org/browse/TIMOB-25581) - Windows: borderWidth should be changed 0 to 1 when borderColor is set

* [TIMOB-25595](https://jira.appcelerator.org/browse/TIMOB-25595) - Windows: selecting search result with searchbar and in tableview shows empty row

* [TIMOB-25598](https://jira.appcelerator.org/browse/TIMOB-25598) - Windows: Not being able to debug issues due to exceptions shown

* [TIMOB-25692](https://jira.appcelerator.org/browse/TIMOB-25692) - Windows: Pickers populated at run time do not fire change events

* [TIMOB-25696](https://jira.appcelerator.org/browse/TIMOB-25696) - Windows: Network.TCP causes app crash

* [TIMOB-25794](https://jira.appcelerator.org/browse/TIMOB-25794) - Windows: Adding a hyperloop created UI element to a View crashes the app

## Improvements

### Android platform

* [TIMOB-17821](https://jira.appcelerator.org/browse/TIMOB-17821) - Android: Add Support for Custom View to ActionBar

    * Added support for Custom View to ActionBar

* [TIMOB-25703](https://jira.appcelerator.org/browse/TIMOB-25703) - Android: Add VideoPlayer "showsControls" property

    * Added support for VideoPlayer `showsControls` property

* [TIMOB-25730](https://jira.appcelerator.org/browse/TIMOB-25730) - Android: Allow SearchBar "color" and "hintTextColor" properties to be set dynamically

    * Added support for SearchBar's `color` and `hintTextColor` properties to be set dynamically

### iOS platform

* [TIMOB-19154](https://jira.appcelerator.org/browse/TIMOB-19154) - iOS9: Replace NSURLConnection in Ti.Network.HTTPClient with NSURLSession

    * Replaced Deprecate NSURLConnection with NSURLSession API

### Windows platform

* [TIMOB-25616](https://jira.appcelerator.org/browse/TIMOB-25616) - Windows: Add option to suppress/force uninstallation on deploy

    * Added feature to prevent uninstalling existing apps in order to complete installation when the same app version is already installed unless user explicitly specifics the `--forceUnInstall` option

    * Example: `appc ti build -p windows --wp-sdk 10.0 --target wp-device --skipInstallDependencies -l trace --forceUnInstall`

## API changes

### New APIs

The following APIs are new or have expanded platform support in Release 7.1.0 as of March 14th, 2018.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Android.ActionBar.customView | property | Sets a view to be used for a custom navigation mode. (New API, supported on Android.) |
| Titanium.Android.ActionBar.getCustomView | method | Gets the value of the Titanium.Android.ActionBar.customView property. (New API, supported on Android.) |
| Titanium.Android.ActionBar.setCustomView | method | Sets the value of the Titanium.Android.ActionBar.customView property. (New API, supported on Android.) |
| Titanium.Android.NotificationManager.areNotificationsEnabled | method | Returns whether showing notifications is enabled for the application. (New API, supported on Android.) |
| Titanium.Calendar.Event.createRecurrenceRule | method | Creates an recurrence pattern for a recurring event.All of the properties for the recurrence rule must be set during creation. The recurrence rule properties cannot be modified. (Added support for Android.) |
| Titanium.Calendar.Event.getRecurrenceRules | method | Gets the value of the Titanium.Calendar.Event.recurrenceRules property. (Added support for Android.) |
| Titanium.Calendar.Event.recurrenceRules | property | The recurrence rules for the calendar item. (Added support for Android.) |
| Titanium.Calendar.Event.save | method | Saves changes to an event permanently. (Added support for Android.) |
| Titanium.Calendar.Event.setRecurrenceRules | method | Sets the value of the Titanium.Calendar.Event.recurrenceRules property. (Added support for Android.) |
| Titanium.Calendar.RecurrenceRule | object | An object that is used to describe the recurrence pattern for a recurring event. (Added support for Android.) |
| Titanium.Media.VideoPlayer.getShowsControls | method | Gets the value of the Titanium.Media.VideoPlayer.showsControls property. (Added support for Android.) |
| Titanium.Media.VideoPlayer.setShowsControls | method | Sets the value of the Titanium.Media.VideoPlayer.showsControls property. (Added support for Android.) |
| Titanium.Media.VideoPlayer.showsControls | property | Whether or not the receiver shows playback controls. Default is true. (Added support for Android.) |
| Titanium.UI.Android.DrawerLayout.getToolbar | method | Gets the value of the Titanium.UI.Android.DrawerLayout.toolbar property. (New API, supported on Android.) |
| Titanium.UI.Android.DrawerLayout.setToolbar | method | Sets the value of the Titanium.UI.Android.DrawerLayout.toolbar property. (New API, supported on Android.) |
| Titanium.UI.Android.DrawerLayout.toolbar | property | A Toolbar instance to use as a toolbar. (New API, supported on Android.) |
| Titanium.UI.Android.SearchView.getHintTextColor | method | Gets the value of the Titanium.UI.Android.SearchView.hintTextColor property. (New API, supported on Android.) |
| Titanium.UI.Android.SearchView.hintTextColor | property | Color of hint text that displays when field is empty. (New API, supported on Android.) |
| Titanium.UI.Android.SearchView.setHintTextColor | method | Sets the value of the Titanium.UI.Android.SearchView.hintTextColor property. (New API, supported on Android.) |
| Titanium.UI.SearchBar.color | property | Color of the text in this text field, as a color name or hex triplet. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.SearchBar.getColor | method | Gets the value of the Titanium.UI.SearchBar.color property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.SearchBar.getHintTextColor | method | Gets the value of the Titanium.UI.SearchBar.hintTextColor property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.SearchBar.hintTextColor | property | Hint text color to display when the field is empty. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.SearchBar.setColor | method | Sets the value of the Titanium.UI.SearchBar.color property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.SearchBar.setHintTextColor | method | Sets the value of the Titanium.UI.SearchBar.hintTextColor property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TabGroup.close | event | Fired when the tab group is closed. (Added support for Android.) |
