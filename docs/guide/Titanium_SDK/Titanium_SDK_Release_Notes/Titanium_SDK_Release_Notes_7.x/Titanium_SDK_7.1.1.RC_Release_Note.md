---
title: Titanium SDK 7.1.1.RC 20 April 2018
weight: '220'
---

# Titanium SDK 7.1.1.RC 20 April 2018

## About this release

Titanium SDK 7.1.1.RC is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Fixed issues

### Android platform

* [TIMOB-25409](https://jira.appcelerator.org/browse/TIMOB-25409) - Android: getting image from Google Drive via openPhotoGallery causes a crash

* [TIMOB-25671](https://jira.appcelerator.org/browse/TIMOB-25671) - Android: Not all TextField return key types fire a "return" event

* [TIMOB-25753](https://jira.appcelerator.org/browse/TIMOB-25753) - Android: ScrollView "width" ignores Ti.UI.SIZE as of 6.3.0

* [TIMOB-25797](https://jira.appcelerator.org/browse/TIMOB-25797) - Android: Remove unnecessary Google Play Services logs

* [TIMOB-25799](https://jira.appcelerator.org/browse/TIMOB-25799) - Android: Cannot build titanium project with JDK 1.9

* [TIMOB-25875](https://jira.appcelerator.org/browse/TIMOB-25875) - Android: Babel rewrites app.js in classic project to generated ES5 code

* [TIMOB-25882](https://jira.appcelerator.org/browse/TIMOB-25882) - Android: return event is received twice from Symbol TC55/TC70 scanner

* [TIMOB-25887](https://jira.appcelerator.org/browse/TIMOB-25887) - Android: Ti.Geolocation - Exception when calling Ti.Geolocation.hasLocationPermissions()

* [TIMOB-25903](https://jira.appcelerator.org/browse/TIMOB-25903) - Android: TableView.updateRow() not working in 7.1.0 if "run-on-main-thread" is false

* [TIMOB-25913](https://jira.appcelerator.org/browse/TIMOB-25913) - Android: Build fails for android with java.time.DateTimeException with java 9.0.4 & crittercism

* [TIMOB-25948](https://jira.appcelerator.org/browse/TIMOB-25948) - \[Android\] Hyperloop 3.0.4 throws an error when building for Android

### iOS platform

* [TIMOB-24349](https://jira.appcelerator.org/browse/TIMOB-24349) - iOS: Ti.UI.AlertDialog Not Firing Events Consistently (run-on-main-thread)

* [TIMOB-25912](https://jira.appcelerator.org/browse/TIMOB-25912) - iOS: Ti.UI.iOS.createDocumentViewer doesn't work when using SDK-fix

* [TIMOB-25936](https://jira.appcelerator.org/browse/TIMOB-25936) - iOS: TableView: Appending row immediately after a section appends them before the section

### Windows platform

* [TIMOB-25876](https://jira.appcelerator.org/browse/TIMOB-25876) - Windows: Support '@' character in node\_modules

* [TIMOB-25943](https://jira.appcelerator.org/browse/TIMOB-25943) - Windows: Unable to install to device with JDK 9

## Improvements

* [TIMOB-25429](https://jira.appcelerator.org/browse/TIMOB-25429) - CLI: Support detection of Java 9

    * Added JDK 9 detection

* [TIMOB-25895](https://jira.appcelerator.org/browse/TIMOB-25895) - Windows: Rename HAL

    * Renamed HAL.dll for WACK (Windows Apps Certification Kit)

## API changes

### New APIs

The following APIs are new or have expanded platform support in Release 7.1.1 as of May 2nd, 2018.

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
