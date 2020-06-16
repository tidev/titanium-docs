---
title: Titanium SDK 7.3.1.RC - 27 August 2018
weight: '140'
---

# Titanium SDK 7.3.1.RC - 27 August 2018

## About this release

Titanium SDK 7.3.1.RC is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release is no longer supported. Note: major and minor releases continue to be supported according to their nominal lifetime. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Community credits

* Matthew Delmarter - [TIMOB-26237](https://jira.appcelerator.org/browse/TIMOB-26237) - iOS: Local Notification Event not triggered when app is launched from the background

* Andreas Pingas - [TIMOB-26300](https://jira.appcelerator.org/browse/TIMOB-26300) - iOS: Initializing Ti.UI.TextArea crashes app when running on kroll-thread

* kedomuz - [TIMOB-26325](https://jira.appcelerator.org/browse/TIMOB-26325) - Android: Ti.UI.WebView not firing events in 7.x

* Luc-Edmond Gaspard - [TIMOB-26329](https://jira.appcelerator.org/browse/TIMOB-26329) - Hyperloop: Android - Can't instantiate a CoordinatorLayout in SDK 7.3.0

* Donovan Lewis - [TIMOB-25941](https://jira.appcelerator.org/browse/TIMOB-25941) - Android: HTTPClient downloads are slower compared to iOS

## Fixed issues

### Android platform

* [TIMOB-26130](https://jira.appcelerator.org/browse/TIMOB-26130) - Android: Fix compatibility with NDK 12+

* [TIMOB-26280](https://jira.appcelerator.org/browse/TIMOB-26280) - Android: Build for genymotion emulator fails with "Cannot set property 'child' of undefined" in node-titanium-sdk

* [TIMOB-26325](https://jira.appcelerator.org/browse/TIMOB-26325) - Android: Ti.UI.WebView not firing events in 7.x

### iOS platform

* [TIMOB-26237](https://jira.appcelerator.org/browse/TIMOB-26237) - iOS: Local Notification Event not triggered when app is launched from the background

* [TIMOB-26300](https://jira.appcelerator.org/browse/TIMOB-26300) - iOS: Initializing Ti.UI.TextArea crashes app when running on kroll-thread

* [TIMOB-26319](https://jira.appcelerator.org/browse/TIMOB-26319) - iOS: "usernotificationsettings" does not include "types" array on iOS 10 and SDK 7.3.0

### All platforms

* [TIMOB-26328](https://jira.appcelerator.org/browse/TIMOB-26328) - Hyperloop: Android - Application freezes when trying to reopen window in 7.3.0

* [TIMOB-26329](https://jira.appcelerator.org/browse/TIMOB-26329) - Hyperloop: Android - Can't instantiate a CoordinatorLayout in SDK 7.3.0

## Improvements

* [TIMOB-25941](https://jira.appcelerator.org/browse/TIMOB-25941) - Android: HTTPClient downloads are slower compared to iOS

    * Optimized HTTPClient download performance

        * Download performance improved by about 25%

        * Increased response buffer size from 4kb to 8kb

        * Removed undocumented event property `blob` from callback `ondatastream()`

            * Improves performance by avoiding extra buffer copy

            * This undocumented property does not exist on iOS

        * Modified `responseText` property handling only create its string when accessed

        * Synchronized file write to storage upon download completion

## API changes

### New APIs

The following APIs are new or have expanded platform support in Release 7.3.1 as of August 30th, 2018.

| API | Type | Notes |
| --- | --- | --- |
| Global.console.time | method | Start a timer to track duration of an operation. (New API, supported on Android, iPhone and iPad.) |
| Global.console.timeEnd | method | Stop a timer that was previously started. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Android.R.animator | property | Animator resources. See R.animator in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.bool | property | Boolean resources. See R.bool in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.fraction | property | Fraction resources. See R.fraction in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.interpolator | property | Interpolator resources. See R.fraction in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.menu | property | Menu resources. See R.menu in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.mipmap | property | Mipmap resources. See R.mipmap in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.plurals | property | Plurals resources. See R.plurals in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.raw | property | Raw resources. See R.raw in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.transition | property | Transition resources. See R.transition in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.R.xml | property | XML resources. See R.xml in the Android Developer Reference. (New API, supported on Android.) |
| Titanium.Android.Service.foregroundCancel | method | Puts the service into the "background" state and removes its foreground notification. (New API, supported on Android.) |
| Titanium.Android.Service.foregroundNotify | method | Puts the service into the "foreground" state and displays a notification. (New API, supported on Android.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_ALERT\_STYLE\_ALERT | property | A alert dialog is presented when the notification is received. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_ALERT\_STYLE\_BANNER | property | A banner is presented when the notification is received. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_ALERT\_STYLE\_NONE | property | No banner or alert dialog is presented when the notification is received. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_AUTHORIZATION\_STATUS\_AUTHORIZED | property | The application is authorized to post user notifications. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_AUTHORIZATION\_STATUS\_DENIED | property | The application is not authorized to post user notifications. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_AUTHORIZATION\_STATUS\_NOT\_DETERMINED | property | The user has not yet made a choice regarding whether the application may postuser notifications. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_CATEGORY\_OPTION\_ALLOW\_IN\_CARPLAY | property | Allow CarPlay to display notifications of this type. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_CATEGORY\_OPTION\_CUSTOM\_DISMISS\_ACTION | property | Send dismiss actions to the UNUserNotificationCenter object's delegate for handling. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_CATEGORY\_OPTION\_HIDDEN\_PREVIEWS\_SHOW\_SUBTITLE | property | Show the notification's subtitle, even if the user has disabled notification previews for the app. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_CATEGORY\_OPTION\_HIDDEN\_PREVIEWS\_SHOW\_TITLE | property | Show the notification's title, even if the user has disabled notification previews for the app. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_CATEGORY\_OPTION\_NONE | property | No options. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_SETTING\_DISABLED | property | The notification setting is turned off. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_SETTING\_ENABLED | property | The notification setting is turned on. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_SETTING\_NOT\_SUPPORTED | property | The application does not support this notification type. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserNotificationCenter | object | The top-level App iOS Notification Center module. It is used to control scheduled notificationsand receive details about the system-wide notification settings. (New API, supported on iPhone and iPad.) |
| Titanium.Filesystem.File.append | method | Appends data to the file identified by this file object. (Added support for Android.) |
| Titanium.Filesystem.File.copy | method | Copies the file identified by this file object to a new path. (Added support for iPhone and iPad.) |
| Titanium.Filesystem.File.createdAt | method | Returns the creation Date for the file identified by this file object. (Added support for Android, iPhone and iPad.) |
| Titanium.Filesystem.File.modifiedAt | method | Returns the last modification Date for the file identified by this file object. (Added support for Android, iPhone and iPad.) |
| Titanium.Geolocation.getShowBackgroundLocationIndicator | method | Gets the value of the Titanium.Geolocation.showBackgroundLocationIndicator property. (New API, supported on iPhone and iPad.) |
| Titanium.Geolocation.setShowBackgroundLocationIndicator | method | Sets the value of the Titanium.Geolocation.showBackgroundLocationIndicator property. (New API, supported on iPhone and iPad.) |
| Titanium.Geolocation.showBackgroundLocationIndicator | property | Specifies that an indicator be shown when the app makes use of continuous background location updates. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_CLEAR | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_COLOR | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_COLOR\_BURN | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_COLOR\_DODGE | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_COPY | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_DARKEN | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_ATOP | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_IN | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_OUT | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_OVER | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_DIFFERENCE | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_EXCLUSION | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_HARD\_LIGHT | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_HUE | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_LIGHTEN | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_LUMINOSITY | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_MULTIPLY | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_NORMAL | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_OVERLAY | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_PLUS\_DARKER | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_PLUS\_LIGHTER | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_SATURATION | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_SCREEN | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_SOFT\_LIGHT | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_SOURCE\_ATOP | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_SOURCE\_IN | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_SOURCE\_OUT | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.BLEND\_MODE\_XOR | property | Use with MaskedImage.mode to specify a blend mode. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.MaskedImage | object | A control that displays an image composited with a background image or color. (Added support for Android.) |
| Titanium.UI.TableView.getResultsBackgroundColor | method | Gets the value of the Titanium.UI.TableView.resultsBackgroundColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.getResultsSeparatorColor | method | Gets the value of the Titanium.UI.TableView.resultsSeparatorColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.getResultsSeparatorInsets | method | Gets the value of the Titanium.UI.TableView.resultsSeparatorInsets property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.getResultsSeparatorStyle | method | Gets the value of the Titanium.UI.TableView.resultsSeparatorStyle property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.getScrollable | method | Gets the value of the Titanium.UI.TableView.scrollable property. (Added support for Android.) |
| Titanium.UI.TableView.resultsBackgroundColor | property | The background color of the search results (iOS-only). (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.resultsSeparatorColor | property | Separator line color between rows inside search results, as a color name or hex triplet (iOS-only). (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.resultsSeparatorInsets | property | The insets for search results separators (applies to all cells & iOS-only). (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.resultsSeparatorStyle | property | The separator style of the search results (iOS-only). (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.scrollable | property | If `true`, the tableview can be scrolled. (Added support for Android.) |
| Titanium.UI.TableView.setResultsBackgroundColor | method | Sets the value of the Titanium.UI.TableView.resultsBackgroundColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.setResultsSeparatorColor | method | Sets the value of the Titanium.UI.TableView.resultsSeparatorColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.setResultsSeparatorInsets | method | Sets the value of the Titanium.UI.TableView.resultsSeparatorInsets property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.setResultsSeparatorStyle | method | Sets the value of the Titanium.UI.TableView.resultsSeparatorStyle property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.setScrollable | method | Sets the value of the Titanium.UI.TableView.scrollable property. (Added support for Android.) |
| Titanium.UI.View.getHorizontalMotionEffect | method | Gets the value of the Titanium.UI.View.horizontalMotionEffect property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.View.getVerticalMotionEffect | method | Gets the value of the Titanium.UI.View.verticalMotionEffect property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.View.horizontalMotionEffect | property | Adds a horizontal parallax effect to the view (New API, supported on iPhone and iPad.) |
| Titanium.UI.View.setHorizontalMotionEffect | method | Sets the value of the Titanium.UI.View.horizontalMotionEffect property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.View.setVerticalMotionEffect | method | Sets the value of the Titanium.UI.View.verticalMotionEffect property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.View.verticalMotionEffect | property | Adds a vertical parallax effect to the view (New API, supported on iPhone and iPad.) |
| Titanium.UI.WebView.getZoomLevel | method | Gets the value of the Titanium.UI.WebView.zoomLevel property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.WebView.setZoomLevel | method | Sets the value of the Titanium.UI.WebView.zoomLevel property. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.WebView.zoomLevel | property | Manage the zoom-level of the current page. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.Window.getHomeIndicatorAutoHidden | method | Gets the value of the Titanium.UI.Window.homeIndicatorAutoHidden property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.getNavigationWindow | method | Gets the value of the Titanium.UI.Window.navigationWindow property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.homeIndicatorAutoHidden | property | Boolean value indicating whether the system is allowed to hide the visual indicator for returning to the Home screen. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.navigationWindow | property | The Titanium.UI.iOS.NavigationWindow instance hosting this window. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.setHomeIndicatorAutoHidden | method | Sets the value of the Titanium.UI.Window.homeIndicatorAutoHidden property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.createMaskedImage | method | Creates and returns an instance of Titanium.UI.MaskedImage. (Added support for Android.) |
| Titanium.UI.iOS.MODAL\_PRESENTATION\_OVER\_CURRENT\_CONTEXT | property | View presented over its parent window. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.MODAL\_PRESENTATION\_OVER\_CURRENT\_FULL\_SCREEN | property | Presented view covers the screen. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.setMODAL\_PRESENTATION\_OVER\_CURRENT\_CONTEXT | method | Sets the value of the Titanium.UI.iOS.MODAL\_PRESENTATION\_OVER\_CURRENT\_CONTEXT property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.setMODAL\_PRESENTATION\_OVER\_CURRENT\_FULL\_SCREEN | method | Sets the value of the Titanium.UI.iOS.MODAL\_PRESENTATION\_OVER\_CURRENT\_FULL\_SCREEN property. (New API, supported on iPhone and iPad.) |

### Deprecated APIs

The following APIs are deprecated in Release 7.3.1 as of August 30th, 2018.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.App.iOS.LocalNotification.cancel | method | Use Titanium.App.iOS.UserNotificationCenter.removePendingNotifications instead. |
| Titanium.App.iOS.cancelAllLocalNotifications | method | Use Titanium.App.iOS.UserNotificationCenter.removePendingNotifications instead. |
| Titanium.App.iOS.cancelLocalNotification | method | Use Titanium.App.iOS.UserNotificationCenter.removePendingNotifications instead. |
| Titanium.App.iOS.currentUserNotificationSettings | property | Use Titanium.App.iOS.UserNotificationCenter.requestUserNotificationSettings instead. |
| Titanium.App.iOS.getCurrentUserNotificationSettings | method | Use Titanium.App.iOS.UserNotificationCenter.requestUserNotificationSettings instead. |
| Titanium.Filesystem.File.createTimestamp | method | Use Titanium.Filesystem.File.createdAt instead. |
| Titanium.Filesystem.File.modificationTimestamp | method | Use Titanium.Filesystem.File.modifiedAt instead. |
| Titanium.UI.iOS.BLEND\_MODE\_CLEAR | property | Use Titanium.UI.BLEND\_MODE\_CLEAR instead. |
| Titanium.UI.iOS.BLEND\_MODE\_COLOR | property | Use Titanium.UI.BLEND\_MODE\_COLOR instead. |
| Titanium.UI.iOS.BLEND\_MODE\_COLOR\_BURN | property | Use Titanium.UI.BLEND\_MODE\_COLOR\_BURN instead. |
| Titanium.UI.iOS.BLEND\_MODE\_COLOR\_DODGE | property | Use Titanium.UI.BLEND\_MODE\_COLOR\_DODGE instead. |
| Titanium.UI.iOS.BLEND\_MODE\_COPY | property | Use Titanium.UI.BLEND\_MODE\_COPY instead. |
| Titanium.UI.iOS.BLEND\_MODE\_DARKEN | property | Use Titanium.UI.BLEND\_MODE\_DARKEN instead. |
| Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_ATOP | property | Use Titanium.UI.BLEND\_MODE\_DESTINATION\_ATOP instead. |
| Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_IN | property | Use Titanium.UI.BLEND\_MODE\_DESTINATION\_IN instead. |
| Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_OUT | property | Use Titanium.UI.BLEND\_MODE\_DESTINATION\_OUT instead. |
| Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_OVER | property | Use Titanium.UI.BLEND\_MODE\_DESTINATION\_OVER instead. |
| Titanium.UI.iOS.BLEND\_MODE\_DIFFERENCE | property | Use Titanium.UI.BLEND\_MODE\_DIFFERENCE instead. |
| Titanium.UI.iOS.BLEND\_MODE\_EXCLUSION | property | Use Titanium.UI.BLEND\_MODE\_EXCLUSION instead. |
| Titanium.UI.iOS.BLEND\_MODE\_HARD\_LIGHT | property | Use Titanium.UI.BLEND\_MODE\_HARD\_LIGHT instead. |
| Titanium.UI.iOS.BLEND\_MODE\_HUE | property | Use Titanium.UI.BLEND\_MODE\_HUE instead. |
| Titanium.UI.iOS.BLEND\_MODE\_LIGHTEN | property | Use Titanium.UI.BLEND\_MODE\_LIGHTEN instead. |
| Titanium.UI.iOS.BLEND\_MODE\_LUMINOSITY | property | Use Titanium.UI.BLEND\_MODE\_LUMINOSITY instead. |
| Titanium.UI.iOS.BLEND\_MODE\_MULTIPLY | property | Use Titanium.UI.BLEND\_MODE\_MULTIPLY instead. |
| Titanium.UI.iOS.BLEND\_MODE\_NORMAL | property | Use Titanium.UI.BLEND\_MODE\_NORMAL instead. |
| Titanium.UI.iOS.BLEND\_MODE\_OVERLAY | property | Use Titanium.UI.BLEND\_MODE\_OVERLAY instead. |
| Titanium.UI.iOS.BLEND\_MODE\_PLUS\_DARKER | property | Use Titanium.UI.BLEND\_MODE\_PLUS\_DARKER instead. |
| Titanium.UI.iOS.BLEND\_MODE\_PLUS\_LIGHTER | property | Use Titanium.UI.BLEND\_MODE\_PLUS\_LIGHTER instead. |
| Titanium.UI.iOS.BLEND\_MODE\_SATURATION | property | Use Titanium.UI.BLEND\_MODE\_SATURATION instead. |
| Titanium.UI.iOS.BLEND\_MODE\_SCREEN | property | Use Titanium.UI.BLEND\_MODE\_SCREEN instead. |
| Titanium.UI.iOS.BLEND\_MODE\_SOFT\_LIGHT | property | Use Titanium.UI.BLEND\_MODE\_SOFT\_LIGHT instead. |
| Titanium.UI.iOS.BLEND\_MODE\_SOURCE\_ATOP | property | Use Titanium.UI.BLEND\_MODE\_SOURCE\_ATOP instead. |
| Titanium.UI.iOS.BLEND\_MODE\_SOURCE\_IN | property | Use Titanium.UI.BLEND\_MODE\_SOURCE\_IN instead. |
| Titanium.UI.iOS.BLEND\_MODE\_SOURCE\_OUT | property | Use Titanium.UI.BLEND\_MODE\_SOURCE\_OUT instead. |
| Titanium.UI.iOS.BLEND\_MODE\_XOR | property | Use Titanium.UI.BLEND\_MODE\_XOR instead. |
