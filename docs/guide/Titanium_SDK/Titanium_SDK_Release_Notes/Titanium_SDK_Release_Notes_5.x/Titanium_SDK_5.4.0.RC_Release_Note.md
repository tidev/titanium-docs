---
title: Titanium SDK 5.4.0.RC - 3 August 2016
weight: '60'
---

# Titanium SDK 5.4.0.RC - 3 August 2016

## Contents

## About This Release

Titanium SDK 5.4.0.RC is a minor release of the SDK, addressing high-priority issues from previous releases as well as new features for iOS, Android and Windows.

As of this release, Titanium SDK 5.3.x will not be supported six months from 5.4.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## New Features

### Hyperloop

The Hyperloop Module will now give you direct access to the native APIs. As you know, we cover roughly 80% of the native APIs and make them cross-platform with our Titanium SDK today addressing the most popular APIs. This module was built for those developers who require access to even the most obscure APIs out there. You simply require the module and necessary Library and then directly access the APIs contained in it.See the [Hyperloop](/guide/Titanium_SDK/Titanium_SDK_Guide/Hyperloop/) documentation for more information.

### Facebook

Deferred deep linking is a term used to describe one aspect of mobile deep linking. Mobile deep linking is the process of deep linking but when the end user does not have the app installed on their mobile device, they must install the app in order to access the in-app content ([MOD-2193](https://jira.appcelerator.org/browse/MOD-2193)).

With this release, the SDK support's Facebook's App Invites ([MOD-2200](https://jira.appcelerator.org/browse/MOD-2200)). Facebook App Invites feature allows anyone to integrate App Invites into their app when you want to invite friends to your app. When the person taps the Invite button, this feature can trigger the flow to send invites.

This release also adds the ability to set Facebook login behavior in the JavaScript API ([MOD-2242](https://jira.appcelerator.org/browse/MOD-2242)).

Finally, we added support for "logPurchase" in Ti.Facebook module ([MOD-2244](https://jira.appcelerator.org/browse/MOD-2244)).

### Android Platform

* [TIMOB-2122](https://jira.appcelerator.org/browse/TIMOB-2122) - Android: Implement Video Recording

    * Implemented video recording on Android

* [TIMOB-4388](https://jira.appcelerator.org/browse/TIMOB-4388) - Implement getPressure in Android view

    * Exposed getPressure value on Android

* [TIMOB-18040](https://jira.appcelerator.org/browse/TIMOB-18040) - Android: Expose "gravity" constants in Ti.UI.Notification

    * Exposed gravity constants

* [TIMOB-19701](https://jira.appcelerator.org/browse/TIMOB-19701) - Android: Support extending native types in hyperloop

    * Added support to some syntax that allows users to subclass existing native types in Hyperloop

* [TIMOB-19869](https://jira.appcelerator.org/browse/TIMOB-19869) - Android: Support adding native UI elements to Ti.UI.View subclasses

    * Added ability to pass in some subclasses of android.view.View into Titanium methods that take Ti>UI.View subclasses (e.g. Ti.UI.View.add())

* [TIMOB-19912](https://jira.appcelerator.org/browse/TIMOB-19912) -tintColor for Android ImageView

    * Added tintColor property to Android using ImageView.setColorFilter()

* [TIMOB-23140](https://jira.appcelerator.org/browse/TIMOB-23140) - Android: Add lineSpacing property to Label

    * Provided support for adding lineSpacing to [multiline Labels](https://developer.android.com/reference/android/widget/TextView.html#setLineSpacing%28float,%20float%29)

* [TIMOB-23167](https://jira.appcelerator.org/browse/TIMOB-23167) - Android: Add Ti.UI.Button tintColor

    * `tintColor` property for Ti.UI.Button is now supported for the Android platform. After setting the tintColor to a custom value, it can be reset by changing the value to "null".

* [TIMOB-23258](https://jira.appcelerator.org/browse/TIMOB-23258) - Android: Ti.Media.AudioPlayer: Support "audioSessionId"

    * `audioSessionId` is now supported by `Ti.Media.AudioPlayer`

* [TIMOB-23424](https://jira.appcelerator.org/browse/TIMOB-23424) - Android: Support Facebook App Invites

    * Added support for Facebook App invites

### iOS Platform

* [TIMOB-15424](https://jira.appcelerator.org/browse/TIMOB-15424) - Allow ScrollableView to set pageIndicatorColor and currentPageIndicatorColor

    * ScrollableView is now able to set `pageIndicatorColor`, `currenPageIndicatorColor`, and `pagingControlColor`

* [TIMOB-6305](https://jira.appcelerator.org/browse/TIMOB-6305) - iOS: Add Stepper UI element

    * Exposed the [iOS UIStepper](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIStepper_Class/index.html#//apple_ref/doc/uid/TP40010929)

* [TIMOB-18054](https://jira.appcelerator.org/browse/TIMOB-18054) - iOS: expose the text color for the picker

    * Text color property for the picker is now supported on both iOS and Android

* [TIMOB-20176](https://jira.appcelerator.org/browse/TIMOB-20176) - iOS: Support UIVisualEffectView (aka Blur View)

    * Added support for `Extra Light`, `Light`, and `Dark Blur` Views on iOS8 and iOS9

* [TIMOB-20178](https://jira.appcelerator.org/browse/TIMOB-20178) - iOS: Support Peek and Pop in Ti.UI.WebView

    * `web.setAllowsLinkPreview` now allows Peek and Pop features to be enabled or disabled for Ti.UI.WebView

* [TIMOB-20226](https://jira.appcelerator.org/browse/TIMOB-20226) - iOS 9.3: Support new WatchConnectivity features

    * Added support for WatchConnectivity features (`Ti.WatchSession.ACTIVATION_STATE_NOT_ACTIVATED`, `Ti.WatchSession.ACTIVATION_STATE_INACTIVE`, and `Ti.WatchSession.ACTIVATION_STATE_ACTIVATED`)

* [TIMOB-20295](https://jira.appcelerator.org/browse/TIMOB-20295) - iOS: Support SearchBar button title

    * Added the ability to customize the SearchBar button title

* [TIMOB-20302](https://jira.appcelerator.org/browse/TIMOB-20302) - iOS: Support showing and hiding the toolbar in Ti.UI.Window

    * The toolbar can now have it's display hidden or shown

* [TIMOB-20589](https://jira.appcelerator.org/browse/TIMOB-20589) - iOS: Allow editing contacts in iOS9 and above

    * Added support to edit contacts on iOS9

* [TIMOB-23417](https://jira.appcelerator.org/browse/TIMOB-23417) - iOS: Support Ti.UI.ListView "disableBounce" property

    * `Ti.UI.ListView` now supports disableBounce property

### Windows Platform

* [TIMOB-20578](https://jira.appcelerator.org/browse/TIMOB-20578) - Windows: Support Notifications sent while in background

    * Added support for push notifications to run in background on Windows

* [TIMOB-23143](https://jira.appcelerator.org/browse/TIMOB-23143) - Windows: Lock orientation mode (Ti.UI.Window.orientationModes)

    * Windows can now lock the orientation of the window

* [TIMOB-23205](https://jira.appcelerator.org/browse/TIMOB-23205) - Windows: Background service extension by native module (C++/CX).

    * Added support for background service extension by native module (C++/CX)

* [TIMOB-23401](https://jira.appcelerator.org/browse/TIMOB-23401) - Windows: Support titleid/textid for Label, Button, Tab, AlertDialog & OptionDialog

    * Added support for `titleid`/`textid` for `Label`, `Button`, `Tab`, `AlertDialog` and `OptionDialog`

### Other

* [CLI-875](https://jira.appcelerator.org/browse/CLI-875) - appc use command should allow --prerelease option

    * The `appc use` command allows you to use prelease versions by using the `--prerelease` flag

## Community Credits

* [TiBaharroth](https://github.com/TiBaharroth) for updating Button.yml ( [TIDOC-2482](https://jira.appcelerator.org/browse/TIDOC-2482))

* [Jong Eun Lee](https://github.com/yomybaby) for Android Elevation disappear when set border\* ([TIMOB-20076](https://jira.appcelerator.org/browse/TIMOB-20076))

* [Michael Gangolf](https://github.com/m1ga) for his herculean effort on

    * Android: Implement Video Recording ([TIMOB-2122](https://jira.appcelerator.org/browse/TIMOB-2122))

    * Android: Add Ti.UI.Button tintColor ( [TIMOB-23167](https://jira.appcelerator.org/browse/TIMOB-23167))

    * Android: rgba() fixes and addition for floats ([TIMOB-6412](https://jira.appcelerator.org/browse/TIMOB-6412))

    * Android: Add lineSpacing property to Label ([TIMOB-23140](https://jira.appcelerator.org/browse/TIMOB-23140))

    * Android: Implement getPressure in Android view ([TIMOB-4388](https://jira.appcelerator.org/browse/TIMOB-4388))

    * Android: TextField setSelection(0,end) has to be called twice to select text ([TIMOB-19639](https://jira.appcelerator.org/browse/TIMOB-19639))

    * Android: tintColor for Android ImageView ([TIMOB-19912](https://jira.appcelerator.org/browse/TIMOB-19912))

    * Android: TiHTTPClient.getAllResponseHeaders() throws NullPointerException on timeout ([TIMOB-20583](https://jira.appcelerator.org/browse/TIMOB-20583))

* [Richard Lustemberg](https://github.com/rlustemberg) for fixing Android http client setting content type on all http verbs ([TIMOB-23339](https://jira.appcelerator.org/browse/TIMOB-23339))

* [Sergey Volkov](https://github.com/drauggres) for fixing Android 6.0 (Post 5.2.0 SDK): [java.io](http://java.io/).FileNotFoundException: open failed: ENOENT (No such file or directory) ([TIMOB-20470](https://jira.appcelerator.org/browse/TIMOB-20470))

* [Andrey Tkachenko](https://github.com/falkolab) for

    * Android: ScrollableView removeView(): java.lang.IndexOutOfBoundsException: Invalid index X, size is X ([TIMOB-20116](https://jira.appcelerator.org/browse/TIMOB-20116))

    * Android: activity indicator causing crash if exiting app right after launch ([TIMOB-19325](https://jira.appcelerator.org/browse/TIMOB-19325))

* [Jan van Kampen](https://github.com/janvankampen) for fixing iOS: Change documentation on TableViewCellSelectionStyle ([TIMOB-20438](https://jira.appcelerator.org/browse/TIMOB-20438))

* [Ben Bahrenburg](https://github.com/benbahrenburg) for fixing Android missing Titanium.Database.DB.getFile() ([TIMOB-20293](https://jira.appcelerator.org/browse/TIMOB-20293))

* [Duy Bao Nguyen](https://github.com/bduyng) for ListView: Missing bindId in itemclick event with active search ([TIMOB-16432](https://jira.appcelerator.org/browse/TIMOB-16432))

### Fixed Issues

* [API-1119](https://jira.appcelerator.org/browse/API-1119) - Swagger connector requires undocumented uri option

* [API-1195](https://jira.appcelerator.org/browse/API-1195) - Generated Arrow Android SDK contains an invalid import path

* [API-1196](https://jira.appcelerator.org/browse/API-1196) - Creating a new record with Arrow Android SDK throws a org.json.JSONException

* [API-1197](https://jira.appcelerator.org/browse/API-1197) - Calling the findAll method in Arrow Android SDK throws a java.lang.ClassCastException

* [API-1198](https://jira.appcelerator.org/browse/API-1198) - Updating a record with Arrow Android SDK throws java.lang.NullPointerException

* [API-1199](https://jira.appcelerator.org/browse/API-1199) - Out-of-the-box findOne API does not exist any more

* [API-1211](https://jira.appcelerator.org/browse/API-1211) - SOAP connector not able to create REST API

* [API-1234](https://jira.appcelerator.org/browse/API-1234) - On preprod, if you try to access the Arrow Admin page, you will get unauthorized error

* [API-1235](https://jira.appcelerator.org/browse/API-1235) - No API generated for reduced model of an existing model

* [CLI-941](https://jira.appcelerator.org/browse/CLI-941) - Running appc access get on an unpublished app won't throw correct error

* [CLI-955](https://jira.appcelerator.org/browse/CLI-955) - CLI should not tell a user to install a pre-release CLI as an update from a GA version

* [CLI-988](https://jira.appcelerator.org/browse/CLI-988) - "-o" (org-id) is not honored with appc login

* [CLI-998](https://jira.appcelerator.org/browse/CLI-998) - We are displaying an OEM vendor name in logging and should not

* [CLI-999](https://jira.appcelerator.org/browse/CLI-999) - "(node:19181) fs: re-evaluating native module sources is not supported." message appears

* [CLI-1044](https://jira.appcelerator.org/browse/CLI-1044) - CLI 5.4.0-31 can not create apps in EU region

* [MOD-2261](https://jira.appcelerator.org/browse/MOD-2261) - iOS ti.map pinchangedragstate event never fired.

* [MOD-2262](https://jira.appcelerator.org/browse/MOD-2262) - Ti.Map: Android: App crashing when the the map is being released

* [MOD-2272](https://jira.appcelerator.org/browse/MOD-2272) - TouchId Module: isSupported() return TRUE even for iPhone4S and iPhone 5 which doesn't have finger print sensor.

* [TIMOB-2908](https://jira.appcelerator.org/browse/TIMOB-2908) - iOS: Switch - Disable animation on init and allow developer to disable for setValue

* [TIMOB-19076](https://jira.appcelerator.org/browse/TIMOB-19076) - CLI: ti info -o json should show Windows Phone 8.0 SDK as unsupported

* [TIMOB-19116](https://jira.appcelerator.org/browse/TIMOB-19116) - Windows: Alloy compile errors not visible when ran via \`appc run\`

* [TIMOB-19544](https://jira.appcelerator.org/browse/TIMOB-19544) - iOS: iPad Pro icon and splash screen support

* [TIMOB-19741](https://jira.appcelerator.org/browse/TIMOB-19741) - iOS: webViews within a scrollableView disappear

* [TIMOB-19796](https://jira.appcelerator.org/browse/TIMOB-19796) - Android: CardView Layout property not working as expected

* [TIMOB-19798](https://jira.appcelerator.org/browse/TIMOB-19798) - CardView: contentPadding(X) and cardCornerRadius should use default unit

* [TIMOB-19821](https://jira.appcelerator.org/browse/TIMOB-19821) - Android 6.0: Device & emulator logs don't show up in studio console

* [TIMOB-19843](https://jira.appcelerator.org/browse/TIMOB-19843) - Android: CardView's cardMaxElevation should (marked as) be creation-only

* [TIMOB-19886](https://jira.appcelerator.org/browse/TIMOB-19886) - Windows: Some unit tests failed for Windows Store app

* [TIMOB-19950](https://jira.appcelerator.org/browse/TIMOB-19950) - iOS: HTTP requests with basic auth returning with 401 Unauthorised trigger endless repeated requests

* [TIMOB-19967](https://jira.appcelerator.org/browse/TIMOB-19967) - Ti.SafariDialog: Huge list of warnings after GenerateDSYMFile

* [TIMOB-20002](https://jira.appcelerator.org/browse/TIMOB-20002) - iOS: Ti.Geolocation.requestLocationPermissions is not always called?

* [TIMOB-20003](https://jira.appcelerator.org/browse/TIMOB-20003) - Permission request error response message prefixed with namespace

* [TIMOB-20013](https://jira.appcelerator.org/browse/TIMOB-20013) - iOS8: Ti.Contacts - relatedNames property causes crash

* [TIMOB-20048](https://jira.appcelerator.org/browse/TIMOB-20048) - iOS: Revert APSHTTPClient library to use back NSURLConnection

* [TIMOB-20054](https://jira.appcelerator.org/browse/TIMOB-20054) - Windows: Use and generate correct Main\_class.h when compiling

* [TIMOB-20061](https://jira.appcelerator.org/browse/TIMOB-20061) - TLS Version set in Android ignored on Publish

* [TIMOB-20087](https://jira.appcelerator.org/browse/TIMOB-20087) - 5.1.X breaks ability to bind one collection to different views / reset collection

* [TIMOB-20090](https://jira.appcelerator.org/browse/TIMOB-20090) - Android: Cardview doc requires changes

* [TIMOB-20100](https://jira.appcelerator.org/browse/TIMOB-20100) - Android: CardView backgroundImage & borderColor properties don't work

* [TIMOB-20110](https://jira.appcelerator.org/browse/TIMOB-20110) - Windows: Ti.UI.Textfield passwordMask=true doesn't work

* [TIMOB-20118](https://jira.appcelerator.org/browse/TIMOB-20118) - iOS9: Contacts property fullName does not return appropriate values

* [TIMOB-20133](https://jira.appcelerator.org/browse/TIMOB-20133) - Map annotations crash in 5.1.1

## Improvements

* [API-1194](https://jira.appcelerator.org/browse/API-1194) - Generated Arrow Android SDK should use HttpURLConnection

    * Arrow Android SDK does not use Apache HTTP Client to make requests anymore

* [API-1221](https://jira.appcelerator.org/browse/API-1221) - Expose Swagger Document for a Model or API Group

    * Provide access to Swagger doc for an individual API within Arrow apps

* [CLI-741](https://jira.appcelerator.org/browse/CLI-741) - Allow for refreshing of session without logging in again explicitly

    * APPC CLI allows for refreshing of a session without having to log in again

* [MOD-2248](https://jira.appcelerator.org/browse/MOD-2248) - Ti.Facebook: Support "logCustomEvent" with optional arguments

    * Extended `logCustomEvent` with additional arguments in Ti.Facebook

* [TIMOB-23530](https://jira.appcelerator.org/browse/TIMOB-23530) - Hyperloop - IPHONEOS\_DEPLOYMENT\_TARGET of 7.0 despite value of min-ios-ver in tiapp.xml

## Known Issues

* Hyperloop (1.2.5) does not support debugger at this time ([TIMOB-23628](https://jira.appcelerator.org/browse/TIMOB-23628)).

* [TIMOB-23613](https://jira.appcelerator.org/browse/TIMOB-23613): When building [https://github.com/appcelerator/hyperloop-examples](https://github.com/appcelerator/hyperloop-examples) on Windows the build process fails with the following:

* **TIMOB-23613**

    ```
    [INFO]  Encrypting JavaScript files: C:\ProgramData\Titanium\mobilesdk\win32\5.4.0.v20160703211246\android\titanium_prep.win32.exe "com.appcelerator.sample.hyperloop" "C:\Users\Ewan\Documents\git\hyperloop-examples\build\android\assets" "alloy/CFG.js" "app.js" "alloy/backbone.js" "alloy/constants.js" "alloy/controllers/alert.js" "alloy/controllers/animateview.js" "alloy/controllers/BaseController.js" "alloy/controllers/blur.js" "alloy/controllers/donutchart.js" "alloy/controllers/drawrect.js" "alloy/controllers/httprequest.js" "alloy/controllers/index.js" "alloy/controllers/label.js" "alloy/controllers/progress.js" "alloy/controllers/shimmer.js" "alloy/controllers/sizefill.js" "alloy/controllers/snackbar.js" "alloy/controllers/touches.js" "alloy/controllers/touchid.js" "alloy/styles/alert.js" "alloy/styles/animateview.js" "alloy/styles/blur.js" "alloy/styles/donutchart.js" "alloy/styles/drawrect.js" "alloy/styles/httprequest.js" "alloy/styles/index.js" "alloy/styles/label.js" "alloy/styles/progress.js" "alloy/styles/shimmer.js" "alloy/styles/sizefill.js" "alloy/styles/snackbar.js" "alloy/styles/touches.js" "alloy/styles/touchid.js" "alloy/sync/localStorage.js" "alloy/sync/properties.js" "alloy/sync/sql.js" "alloy/underscore.js" "alloy/widget.js" "alloy.js" "hyperloop/android.accessibilityservice.AccessibilityServiceInfo.js" "hyperloop/android.accessibilityservice.js" "hyperloop/android.accounts.Account.js" "hyperloop/android.accounts.js" "hyperloop/android.animation.Animator$AnimatorListener.js" "hyperloop/android.animation.Animator$AnimatorPauseListener.js" "hyperloop/android.animation.Animator.js" "hyperloop/android.animation.AnimatorListenerAdapter.js" "hyperloop/android.animation.js" "hyperloop/android.animation.LayoutTransition$TransitionListener.js" "hyperloop/android.animation.LayoutTransition.js" "hyperloop/android.animation.StateListAnimator.js" "hyperloop/android.animation.TimeInterpolator.js" "hyperloop/android.animation.TypeEvaluator.js" "hyperloop/android.animation.ValueAnimator$AnimatorUpdateListener.js" "hyperloop/android.animation.ValueAnimator.js" "hyperloop/android.app.ActionBar$LayoutParams.js" "hyperloop/android.app.ActionBar$OnMenuVisibilityListener.js" "hyperloop/android.app.ActionBar$OnNavigationListener.js" "hyperloop/android.app.ActionBar$Tab.js" "hyperloop/android.app.ActionBar$TabListener.js" "hyperloop/android.app.ActionBar.js" "hyperloop/android.app.Activity.js" "hyperloop/android.app.ActivityGroup.js" "hyperloop/android.app.ActivityManager$AppTask.js" "hyperloop/android.app.ActivityManager$MemoryInfo.js" "hyperloop/android.app.ActivityManager$ProcessErrorStateInfo.js" "hyperloop/android.app.ActivityManager$RecentTaskInfo.js" "hyperloop/android.app.ActivityManager$RunningAppProcessInfo.js" "hyperloop/android.app.ActivityManager$RunningServiceInfo.js" "hyperloop/android.app.ActivityManager$RunningTaskInfo.js" "hyperloop/android.app.ActivityManager$TaskDescription.js" "hyperloop/android.app.ActivityManager.js" "hyperloop/android.app.ActivityOptions.js" "hyperloop/android.app.AlarmManager$AlarmClockInfo.js" "hyperloop/android.app.AlarmManager.js" "hyperloop/android.app.AlertDialog$Builder.js" "hyperloop/android.app.AlertDialog.js" "hyperloop/android.app.AliasActivity.js" "hyperloop/android.app.Application$ActivityLifecycleCallbacks.js" "hyperloop/android.app.Application$OnProvideAssistDataListener.js" "hyperloop/android.app.Application.js" "hyperloop/android.app.ApplicationErrorReport$AnrInfo.js" "hyperloop/android.app.ApplicationErrorReport$BatteryInfo.js" "hyperloop/android.app.ApplicationErrorReport$CrashInfo.js" "hyperloop/android.app.ApplicationErrorReport$RunningServiceInfo.js" "hyperloop/android.app.ApplicationErrorReport.js" "hyperloop/android.app.AppOpsManager$OnOpChangedListener.js" "hyperloop/android.app.AppOpsManager.js" "hyperloop/android.app.assist.AssistContent.js" "hyperloop/android.app.assist.js" "hyperloop/android.app.DatePickerDialog$OnDateSetListener.js" "hyperloop/android.app.DatePickerDialog.js" "hyperloop/android.app.Dialog.js" "hyperloop/android.app.DialogFragment.js" "hyperloop/android.app.DownloadManager$Query.js" "hyperloop/android.app.DownloadManager$Request.js" "hyperloop/android.app.DownloadManager.js" "hyperloop/android.app.ExpandableListActivity.js" "hyperloop/android.app.Fragment$InstantiationException.js" "hyperloop/android.app.Fragment$SavedState.js" "hyperloop/android.app.Fragment.js" "hyperloop/android.app.FragmentBreadCrumbs$OnBreadCrumbClickListener.js" "hyperloop/android.app.FragmentBreadCrumbs.js" "hyperloop/android.app.FragmentContainer.js" "hyperloop/android.app.FragmentController.js" "hyperloop/android.app.FragmentHostCallback.js" "hyperloop/android.app.FragmentManager$BackStackEntry.js" "hyperloop/android.app.FragmentManager$OnBackStackChangedListener.js" "hyperloop/android.app.FragmentManager.js" "hyperloop/android.app.FragmentTransaction.js" "hyperloop/android.app.Instrumentation$ActivityMonitor.js" "hyperloop/android.app.Instrumentation$ActivityResult.js" "hyperloop/android.app.Instrumentation.js" "hyperloop/android.app.IntentService.js" "hyperloop/android.app.js" "hyperloop/android.app.KeyguardManager$KeyguardLock.js" "hyperloop/android.app.KeyguardManager$OnKeyguardExitResult.js" "hyperloop/android.app.KeyguardManager.js" "hyperloop/android.app.LauncherActivity$IconResizer.js" "hyperloop/android.app.LauncherActivity$ListItem.js" "hyperloop/android.app.LauncherActivity.js" "hyperloop/android.app.ListActivity.js" "hyperloop/android.app.ListFragment.js" "hyperloop/android.app.LoaderManager$LoaderCallbacks.js" "hyperloop/android.app.LoaderManager.js" "hyperloop/android.app.LocalActivityManager.js" "hyperloop/android.app.MediaRouteActionProvider.js" "hyperloop/android.app.MediaRouteButton.js" "hyperloop/android.app.NativeActivity.js" "hyperloop/android.app.Notification$Action$Builder.js" "hyperloop/android.app.Notification$Action$Extender.js" "hyperloop/android.app.Notification$Action$WearableExtender.js" "hyperloop/android.app.Notification$Action.js" "hyperloop/android.app.Notification$BigPictureStyle.js" "hyperloop/android.app.Notification$BigTextStyle.js" "hyperloop/android.app.Notification$Builder.js" "hyperloop/android.app.Notification$CarExtender$Builder.js" "hyperloop/android.app.Notification$CarExtender$UnreadConversation.js" "hyperloop/android.app.Notification$CarExtender.js" "hyperloop/android.app.Notification$Extender.js" "hyperloop/android.app.Notification$InboxStyle.js" "hyperloop/android.app.Notification$MediaStyle.js" "hyperloop/android.app.Notification$Style.js" "hyperloop/android.app.Notification$WearableExtender.js" "hyperloop/android.app.Notification.js" "hyperloop/android.app.NotificationManager$Policy.js" "hyperloop/android.app.NotificationManager.js" "hyperloop/android.app.PendingIntent$CanceledException.js" "hyperloop/android.app.PendingIntent$OnFinished.js" "hyperloop/android.app.PendingIntent.js" "hyperloop/android.app.Presentation.js" "hyperloop/android.app.ProgressDialog.js" "hyperloop/android.app.RemoteInput$Builder.js" "hyperloop/android.app.RemoteInput.js" "hyperloop/android.app.SearchableInfo.js" "hyperloop/android.app.SearchManager$OnCancelListener.js" "hyperloop/android.app.SearchManager$OnDismissListener.js" "hyperloop/android.app.SearchManager.js" "hyperloop/android.app.Service.js" "hyperloop/android.app.SharedElementCallback$OnSharedElementsReadyListener.js" "hyperloop/android.app.SharedElementCallback.js" "hyperloop/android.app.TabActivity.js" "hyperloop/android.app.TaskStackBuilder.js" "hyperloop/android.app.TimePickerDialog$OnTimeSetListener.js" "hyperloop/android.app.TimePickerDialog.js" "hyperloop/android.app.UiAutomation$AccessibilityEventFilter.js" "hyperloop/android.app.UiAutomation$OnAccessibilityEventListener.js" "hyperloop/android.app.UiAutomation.js" "hyperloop/android.app.UiModeManager.js" "hyperloop/android.app.VoiceInteractor$AbortVoiceRequest.js" "hyperloop/android.app.VoiceInteractor$CommandRequest.js" "hyperloop/android.app.VoiceInteractor$CompleteVoiceRequest.js" "hyperloop/android.app.VoiceInteractor$ConfirmationRequest.js" "hyperloop/android.app.VoiceInteractor$PickOptionRequest$Option.js" "hyperloop/android.app.VoiceInteractor$PickOptionRequest.js" "hyperloop/android.app.VoiceInteractor$Prompt.js" "hyperloop/android.app.VoiceInteractor$Request.js" "hyperloop/android.app.VoiceInteractor.js" "hyperloop/android.app.WallpaperInfo.js" "hyperloop/android.app.WallpaperManager.js" "hyperloop/android.content.BroadcastReceiver$PendingResult.js" "hyperloop/android.content.BroadcastReceiver.js" "hyperloop/android.content.ClipData$Item.js" "hyperloop/android.content.ClipData.js" "hyperloop/android.content.ClipDescription.js" "hyperloop/android.content.ComponentCallbacks.js" "hyperloop/android.content.ComponentName.js" "hyperloop/android.content.ContentProvider$PipeDataWriter.js" "hyperloop/android.content.ContentProvider.js" "hyperloop/android.content.ContentProviderClient.js" "hyperloop/android.content.ContentResolver.js" "hyperloop/android.content.ContentValues.js" "hyperloop/android.content.Context.js" "hyperloop/android.content.ContextWrapper.js" "hyperloop/android.content.DialogInterface$OnCancelListener.js" "hyperloop/android.content.DialogInterface$OnClickListener.js" "hyperloop/android.content.DialogInterface$OnDismissListener.js" "hyperloop/android.content.DialogInterface$OnKeyListener.js" "hyperloop/android.content.DialogInterface$OnMultiChoiceClickListener.js" "hyperloop/android.content.DialogInterface$OnShowListener.js" "hyperloop/android.content.DialogInterface.js" "hyperloop/android.content.Intent$FilterComparison.js" "hyperloop/android.content.Intent$ShortcutIconResource.js" "hyperloop/android.content.Intent.js" "hyperloop/android.content.IntentFilter$AuthorityEntry.js" "hyperloop/android.content.IntentFilter$MalformedMimeTypeException.js" "hyperloop/android.content.IntentFilter.js" "hyperloop/android.content.IntentSender$OnFinished.js" "hyperloop/android.content.IntentSender$SendIntentException.js" "hyperloop/android.content.IntentSender.js" "hyperloop/android.content.js" "hyperloop/android.content.Loader$ForceLoadContentObserver.js" "hyperloop/android.content.Loader$OnLoadCanceledListener.js" "hyperloop/android.content.Loader$OnLoadCompleteListener.js" "hyperloop/android.content.Loader.js" "hyperloop/android.content.pm.ActivityInfo.js" "hyperloop/android.content.pm.ApplicationInfo$DisplayNameComparator.js" "hyperloop/android.content.pm.ApplicationInfo.js" "hyperloop/android.content.pm.ComponentInfo.js" "hyperloop/android.content.pm.ConfigurationInfo.js" "hyperloop/android.content.pm.InstrumentationInfo.js" "hyperloop/android.content.pm.js" "hyperloop/android.content.pm.PackageInfo.js" "hyperloop/android.content.pm.PackageInstaller$Session.js" "hyperloop/android.content.pm.PackageInstaller$SessionCallback.js" "hyperloop/android.content.pm.PackageInstaller$SessionInfo.js" "hyperloop/android.content.pm.PackageInstaller$SessionParams.js" "hyperloop/android.content.pm.PackageInstaller.js" "hyperloop/android.content.pm.PackageItemInfo$DisplayNameComparator.js" "hyperloop/android.content.pm.PackageItemInfo.js" "hyperloop/android.content.pm.PackageManager$NameNotFoundException.js" "hyperloop/android.content.pm.PackageManager.js" "hyperloop/android.content.pm.PermissionGroupInfo.js" "hyperloop/android.content.pm.PermissionInfo.js" "hyperloop/android.content.pm.ProviderInfo.js" "hyperloop/android.content.pm.ResolveInfo$DisplayNameComparator.js" "hyperloop/android.content.pm.ResolveInfo.js" "hyperloop/android.content.pm.ServiceInfo.js" "hyperloop/android.content.res.AssetFileDescriptor$AutoCloseInputStream.js" "hyperloop/android.content.res.AssetFileDescriptor$AutoCloseOutputStream.js" "hyperloop/android.content.res.AssetFileDescriptor.js" "hyperloop/android.content.res.AssetManager$AssetInputStream.js" "hyperloop/android.content.res.AssetManager.js" "hyperloop/android.content.res.ColorStateList.js" "hyperloop/android.content.res.Configuration.js" "hyperloop/android.content.res.js" "hyperloop/android.content.res.Resources$NotFoundException.js" "hyperloop/android.content.res.Resources$Theme.js" "hyperloop/android.content.res.Resources.js" "hyperloop/android.content.res.TypedArray.js" "hyperloop/android.content.res.XmlResourceParser.js" "hyperloop/android.content.ServiceConnection.js" "hyperloop/android.content.SharedPreferences$Editor.js" "hyperloop/android.content.SharedPreferences$OnSharedPreferenceChangeListener.js" "hyperloop/android.content.SharedPreferences.js" "hyperloop/android.content.SyncInfo.js" "hyperloop/android.content.SyncRequest$Builder.js" "hyperloop/android.content.SyncRequest.js" "hyperloop/android.content.SyncStatusObserver.js" "hyperloop/android.database.CharArrayBuffer.js" "hyperloop/android.database.ContentObserver.js" "hyperloop/android.database.Cursor.js" "hyperloop/android.database.DatabaseErrorHandler.js" "hyperloop/android.database.DataSetObserver.js" "hyperloop/android.database.js" "hyperloop/android.database.sqlite.js" "hyperloop/android.database.sqlite.SQLiteClosable.js" "hyperloop/android.database.sqlite.SQLiteCursorDriver.js" "hyperloop/android.database.sqlite.SQLiteDatabase$CursorFactory.js" "hyperloop/android.database.sqlite.SQLiteDatabase.js" "hyperloop/android.database.sqlite.SQLiteProgram.js" "hyperloop/android.database.sqlite.SQLiteQuery.js" "hyperloop/android.database.sqlite.SQLiteStatement.js" "hyperloop/android.database.sqlite.SQLiteTransactionListener.js" "hyperloop/android.graphics.Bitmap$CompressFormat.js" "hyperloop/android.graphics.Bitmap$Config.js" "hyperloop/android.graphics.Bitmap.js" "hyperloop/android.graphics.BitmapFactory$Options.js" "hyperloop/android.graphics.BitmapFactory.js" "hyperloop/android.graphics.Canvas$EdgeType.js" "hyperloop/android.graphics.Canvas$VertexMode.js" "hyperloop/android.graphics.Canvas.js" "hyperloop/android.graphics.Color.js" "hyperloop/android.graphics.ColorFilter.js" "hyperloop/android.graphics.drawable.Drawable$Callback.js" "hyperloop/android.graphics.drawable.Drawable$ConstantState.js" "hyperloop/android.graphics.drawable.Drawable.js" "hyperloop/android.graphics.drawable.Icon$OnDrawableLoadedListener.js" "hyperloop/android.graphics.drawable.Icon.js" "hyperloop/android.graphics.drawable.js" "hyperloop/android.graphics.DrawFilter.js" "hyperloop/android.graphics.js" "hyperloop/android.graphics.MaskFilter.js" "hyperloop/android.graphics.Matrix$ScaleToFit.js" "hyperloop/android.graphics.Matrix.js" "hyperloop/android.graphics.Movie.js" "hyperloop/android.graphics.Outline.js" "hyperloop/android.graphics.Paint$Align.js" "hyperloop/android.graphics.Paint$Cap.js" "hyperloop/android.graphics.Paint$FontMetrics.js" "hyperloop/android.graphics.Paint$FontMetricsInt.js" "hyperloop/android.graphics.Paint$Join.js" "hyperloop/android.graphics.Paint$Style.js" "hyperloop/android.graphics.Paint.js" "hyperloop/android.graphics.Path$Direction.js" "hyperloop/android.graphics.Path$FillType.js" "hyperloop/android.graphics.Path$Op.js" "hyperloop/android.graphics.Path.js" "hyperloop/android.graphics.PathEffect.js" "hyperloop/android.graphics.Picture.js" "hyperloop/android.graphics.Point.js" "hyperloop/android.graphics.PorterDuff$Mode.js" "hyperloop/android.graphics.PorterDuff.js" "hyperloop/android.graphics.Rasterizer.js" "hyperloop/android.graphics.Rect.js" "hyperloop/android.graphics.RectF.js" "hyperloop/android.graphics.Region$Op.js" "hyperloop/android.graphics.Region.js" "hyperloop/android.graphics.Shader$TileMode.js" "hyperloop/android.graphics.Shader.js" "hyperloop/android.graphics.SurfaceTexture$OnFrameAvailableListener.js" "hyperloop/android.graphics.SurfaceTexture$OutOfResourcesException.js" "hyperloop/android.graphics.SurfaceTexture.js" "hyperloop/android.graphics.Typeface.js" "hyperloop/android.graphics.Xfermode.js" "hyperloop/android.hardware.fingerprint.FingerprintManager$AuthenticationCallback.js" "hyperloop/android.hardware.fingerprint.FingerprintManager$AuthenticationResult.js" "hyperloop/android.hardware.fingerprint.FingerprintManager$CryptoObject.js" "hyperloop/android.hardware.fingerprint.FingerprintManager.js" "hyperloop/android.hardware.fingerprint.js" "hyperloop/android.hardware.js" "hyperloop/android.js" "hyperloop/android.media.AudioAttributes$Builder.js" "hyperloop/android.media.AudioAttributes.js" "hyperloop/android.media.js" "hyperloop/android.media.MediaDescription$Builder.js" "hyperloop/android.media.MediaDescription.js" "hyperloop/android.media.MediaMetadata$Builder.js" "hyperloop/android.media.MediaMetadata.js" "hyperloop/android.media.Rating.js" "hyperloop/android.media.session.js" "hyperloop/android.media.session.MediaController$Callback.js" "hyperloop/android.media.session.MediaController$PlaybackInfo.js" "hyperloop/android.media.session.MediaController$TransportControls.js" "hyperloop/android.media.session.MediaController.js" "hyperloop/android.media.session.MediaSession$Token.js" "hyperloop/android.media.session.MediaSession.js" "hyperloop/android.media.session.PlaybackState$Builder.js" "hyperloop/android.media.session.PlaybackState$CustomAction$Builder.js" "hyperloop/android.media.session.PlaybackState$CustomAction.js" "hyperloop/android.media.session.PlaybackState.js" "hyperloop/android.net.js" "hyperloop/android.net.Uri$Builder.js" "hyperloop/android.net.Uri.js" "hyperloop/android.os.BaseBundle.js" "hyperloop/android.os.Bundle.js" "hyperloop/android.os.CancellationSignal$OnCancelListener.js" "hyperloop/android.os.CancellationSignal.js" "hyperloop/android.os.Handler$Callback.js" "hyperloop/android.os.Handler.js" "hyperloop/android.os.IBinder$DeathRecipient.js" "hyperloop/android.os.IBinder.js" "hyperloop/android.os.IInterface.js" "hyperloop/android.os.js" "hyperloop/android.os.Looper.js" "hyperloop/android.os.Message.js" "hyperloop/android.os.MessageQueue$IdleHandler.js" "hyperloop/android.os.MessageQueue$OnFileDescriptorEventListener.js" "hyperloop/android.os.MessageQueue.js" "hyperloop/android.os.Messenger.js" "hyperloop/android.os.Parcel.js" "hyperloop/android.os.Parcelable$ClassLoaderCreator.js" "hyperloop/android.os.Parcelable$Creator.js" "hyperloop/android.os.Parcelable.js" "hyperloop/android.os.ParcelFileDescriptor$AutoCloseInputStream.js" "hyperloop/android.os.ParcelFileDescriptor$AutoCloseOutputStream.js" "hyperloop/android.os.ParcelFileDescriptor$FileDescriptorDetachedException.js" "hyperloop/android.os.ParcelFileDescriptor$OnCloseListener.js" "hyperloop/android.os.ParcelFileDescriptor.js" "hyperloop/android.os.PatternMatcher.js" "hyperloop/android.os.PersistableBundle.js" "hyperloop/android.os.ResultReceiver.js" "hyperloop/android.os.UserHandle.js" "hyperloop/android.os.Vibrator.js" "hyperloop/android.renderscript.Allocation$MipmapControl.js" "hyperloop/android.renderscript.Allocation$OnBufferAvailableListener.js" "hyperloop/android.renderscript.Allocation.js" "hyperloop/android.renderscript.BaseObj.js" "hyperloop/android.renderscript.Byte2.js" "hyperloop/android.renderscript.Byte3.js" "hyperloop/android.renderscript.Byte4.js" "hyperloop/android.renderscript.Double2.js" "hyperloop/android.renderscript.Double3.js" "hyperloop/android.renderscript.Double4.js" "hyperloop/android.renderscript.Element$Builder.js" "hyperloop/android.renderscript.Element$DataKind.js" "hyperloop/android.renderscript.Element$DataType.js" "hyperloop/android.renderscript.Element.js" "hyperloop/android.renderscript.FieldPacker.js" "hyperloop/android.renderscript.Float2.js" "hyperloop/android.renderscript.Float3.js" "hyperloop/android.renderscript.Float4.js" "hyperloop/android.renderscript.Int2.js" "hyperloop/android.renderscript.Int3.js" "hyperloop/android.renderscript.Int4.js" "hyperloop/android.renderscript.js" "hyperloop/android.renderscript.Long2.js" "hyperloop/android.renderscript.Long3.js" "hyperloop/android.renderscript.Long4.js" "hyperloop/android.renderscript.Matrix2f.js" "hyperloop/android.renderscript.Matrix3f.js" "hyperloop/android.renderscript.Matrix4f.js" "hyperloop/android.renderscript.RenderScript$ContextType.js" "hyperloop/android.renderscript.RenderScript$Priority.js" "hyperloop/android.renderscript.RenderScript$RSErrorHandler.js" "hyperloop/android.renderscript.RenderScript$RSMessageHandler.js" "hyperloop/android.renderscript.RenderScript.js" "hyperloop/android.renderscript.Script$Builder.js" "hyperloop/android.renderscript.Script$FieldBase.js" "hyperloop/android.renderscript.Script$FieldID.js" "hyperloop/android.renderscript.Script$InvokeID.js" "hyperloop/android.renderscript.Script$KernelID.js" "hyperloop/android.renderscript.Script$LaunchOptions.js" "hyperloop/android.renderscript.Script.js" "hyperloop/android.renderscript.ScriptIntrinsic.js" "hyperloop/android.renderscript.ScriptIntrinsicBlur.js" "hyperloop/android.renderscript.Short2.js" "hyperloop/android.renderscript.Short3.js" "hyperloop/android.renderscript.Short4.js" "hyperloop/android.renderscript.Type$Builder.js" "hyperloop/android.renderscript.Type$CubemapFace.js" "hyperloop/android.renderscript.Type.js" "hyperloop/android.security.js" "hyperloop/android.security.keystore.js" "hyperloop/android.security.keystore.KeyGenParameterSpec$Builder.js" "hyperloop/android.security.keystore.KeyGenParameterSpec.js" "hyperloop/android.security.keystore.KeyProperties.js" "hyperloop/android.support.design.js" "hyperloop/android.support.design.widget.js" "hyperloop/android.support.design.widget.Snackbar$Callback$DismissEvent.js" "hyperloop/android.support.design.widget.Snackbar$Callback.js" "hyperloop/android.support.design.widget.Snackbar$Duration.js" "hyperloop/android.support.design.widget.Snackbar$SnackbarLayout.js" "hyperloop/android.support.design.widget.Snackbar.js" "hyperloop/android.support.js" "hyperloop/android.text.Editable$Factory.js" "hyperloop/android.text.Editable.js" "hyperloop/android.text.js" "hyperloop/android.text.Layout$Alignment.js" "hyperloop/android.text.Layout$Directions.js" "hyperloop/android.text.Layout.js" "hyperloop/android.text.method.js" "hyperloop/android.text.method.KeyListener.js" "hyperloop/android.text.method.MovementMethod.js" "hyperloop/android.text.method.TransformationMethod.js" "hyperloop/android.text.Spannable$Factory.js" "hyperloop/android.text.Spannable.js" "hyperloop/android.text.TextPaint.js" "hyperloop/android.text.TextUtils$TruncateAt.js" "hyperloop/android.text.TextUtils.js" "hyperloop/android.text.TextWatcher.js" "hyperloop/android.transition.js" "hyperloop/android.transition.PathMotion.js" "hyperloop/android.transition.Scene.js" "hyperloop/android.transition.Transition$EpicenterCallback.js" "hyperloop/android.transition.Transition$TransitionListener.js" "hyperloop/android.transition.Transition.js" "hyperloop/android.transition.TransitionManager.js" "hyperloop/android.transition.TransitionPropagation.js" "hyperloop/android.transition.TransitionValues.js" "hyperloop/android.util.ArrayMap.js" "hyperloop/android.util.AttributeSet.js" "hyperloop/android.util.DisplayMetrics.js" "hyperloop/android.util.js" "hyperloop/android.util.Printer.js" "hyperloop/android.util.Property.js" "hyperloop/android.util.Size.js" "hyperloop/android.util.SizeF.js" "hyperloop/android.util.SparseArray.js" "hyperloop/android.util.SparseBooleanArray.js" "hyperloop/android.util.TypedValue.js" "hyperloop/android.view.accessibility.AccessibilityEvent.js" "hyperloop/android.view.accessibility.AccessibilityNodeInfo$AccessibilityAction.js" "hyperloop/android.view.accessibility.AccessibilityNodeInfo$CollectionInfo.js" "hyperloop/android.view.accessibility.AccessibilityNodeInfo$CollectionItemInfo.js" "hyperloop/android.view.accessibility.AccessibilityNodeInfo$RangeInfo.js" "hyperloop/android.view.accessibility.AccessibilityNodeInfo.js" "hyperloop/android.view.accessibility.AccessibilityNodeProvider.js" "hyperloop/android.view.accessibility.AccessibilityRecord.js" "hyperloop/android.view.accessibility.AccessibilityWindowInfo.js" "hyperloop/android.view.accessibility.js" "hyperloop/android.view.ActionMode$Callback.js" "hyperloop/android.view.ActionMode$Callback2.js" "hyperloop/android.view.ActionMode.js" "hyperloop/android.view.ActionProvider$VisibilityListener.js" "hyperloop/android.view.ActionProvider.js" "hyperloop/android.view.animation.Animation$AnimationListener.js" "hyperloop/android.view.animation.Animation$Description.js" "hyperloop/android.view.animation.Animation.js" "hyperloop/android.view.animation.BaseInterpolator.js" "hyperloop/android.view.animation.Interpolator.js" "hyperloop/android.view.animation.js" "hyperloop/android.view.animation.LayoutAnimationController$AnimationParameters.js" "hyperloop/android.view.animation.LayoutAnimationController.js" "hyperloop/android.view.animation.LinearInterpolator.js" "hyperloop/android.view.animation.Transformation.js" "hyperloop/android.view.ContextMenu$ContextMenuInfo.js" "hyperloop/android.view.ContextMenu.js" "hyperloop/android.view.ContextThemeWrapper.js" "hyperloop/android.view.Display$Mode.js" "hyperloop/android.view.Display.js" "hyperloop/android.view.DragEvent.js" "hyperloop/android.view.FrameStats.js" "hyperloop/android.view.Gravity.js" "hyperloop/android.view.InputDevice$MotionRange.js" "hyperloop/android.view.InputDevice.js" "hyperloop/android.view.InputEvent.js" "hyperloop/android.view.inputmethod.CompletionInfo.js" "hyperloop/android.view.inputmethod.CorrectionInfo.js" "hyperloop/android.view.inputmethod.EditorInfo.js" "hyperloop/android.view.inputmethod.ExtractedText.js" "hyperloop/android.view.inputmethod.ExtractedTextRequest.js" "hyperloop/android.view.inputmethod.InputConnection.js" "hyperloop/android.view.inputmethod.js" "hyperloop/android.view.InputQueue$Callback.js" "hyperloop/android.view.InputQueue.js" "hyperloop/android.view.js" "hyperloop/android.view.KeyCharacterMap$KeyData.js" "hyperloop/android.view.KeyCharacterMap$UnavailableException.js" "hyperloop/android.view.KeyCharacterMap.js" "hyperloop/android.view.KeyEvent$Callback.js" "hyperloop/android.view.KeyEvent$DispatcherState.js" "hyperloop/android.view.KeyEvent.js" "hyperloop/android.view.LayoutInflater$Factory.js" "hyperloop/android.view.LayoutInflater$Factory2.js" "hyperloop/android.view.LayoutInflater$Filter.js" "hyperloop/android.view.LayoutInflater.js" "hyperloop/android.view.Menu.js" "hyperloop/android.view.MenuInflater.js" "hyperloop/android.view.MenuItem$OnActionExpandListener.js" "hyperloop/android.view.MenuItem$OnMenuItemClickListener.js" "hyperloop/android.view.MenuItem.js" "hyperloop/android.view.MotionEvent$PointerCoords.js" "hyperloop/android.view.MotionEvent$PointerProperties.js" "hyperloop/android.view.MotionEvent.js" "hyperloop/android.view.SearchEvent.js" "hyperloop/android.view.SubMenu.js" "hyperloop/android.view.Surface$OutOfResourcesException.js" "hyperloop/android.view.Surface.js" "hyperloop/android.view.SurfaceHolder$BadSurfaceTypeException.js" "hyperloop/android.view.SurfaceHolder$Callback.js" "hyperloop/android.view.SurfaceHolder$Callback2.js" "hyperloop/android.view.SurfaceHolder.js" "hyperloop/android.view.TouchDelegate.js" "hyperloop/android.view.View$AccessibilityDelegate.js" "hyperloop/android.view.View$BaseSavedState.js" "hyperloop/android.view.View$DragShadowBuilder.js" "hyperloop/android.view.View$MeasureSpec.js" "hyperloop/android.view.View$OnApplyWindowInsetsListener.js" "hyperloop/android.view.View$OnAttachStateChangeListener.js" "hyperloop/android.view.View$OnClickListener.js" "hyperloop/android.view.View$OnContextClickListener.js" "hyperloop/android.view.View$OnCreateContextMenuListener.js" "hyperloop/android.view.View$OnDragListener.js" "hyperloop/android.view.View$OnFocusChangeListener.js" "hyperloop/android.view.View$OnGenericMotionListener.js" "hyperloop/android.view.View$OnHoverListener.js" "hyperloop/android.view.View$OnKeyListener.js" "hyperloop/android.view.View$OnLayoutChangeListener.js" "hyperloop/android.view.View$OnLongClickListener.js" "hyperloop/android.view.View$OnScrollChangeListener.js" "hyperloop/android.view.View$OnSystemUiVisibilityChangeListener.js" "hyperloop/android.view.View$OnTouchListener.js" "hyperloop/android.view.View.js" "hyperloop/android.view.ViewGroup$LayoutParams.js" "hyperloop/android.view.ViewGroup$MarginLayoutParams.js" "hyperloop/android.view.ViewGroup$OnHierarchyChangeListener.js" "hyperloop/android.view.ViewGroup.js" "hyperloop/android.view.ViewGroupOverlay.js" "hyperloop/android.view.ViewOutlineProvider.js" "hyperloop/android.view.ViewOverlay.js" "hyperloop/android.view.ViewParent.js" "hyperloop/android.view.ViewPropertyAnimator.js" "hyperloop/android.view.ViewStructure.js" "hyperloop/android.view.ViewTreeObserver$OnDrawListener.js" "hyperloop/android.view.ViewTreeObserver$OnGlobalFocusChangeListener.js" "hyperloop/android.view.ViewTreeObserver$OnGlobalLayoutListener.js" "hyperloop/android.view.ViewTreeObserver$OnPreDrawListener.js" "hyperloop/android.view.ViewTreeObserver$OnScrollChangedListener.js" "hyperloop/android.view.ViewTreeObserver$OnTouchModeChangeListener.js" "hyperloop/android.view.ViewTreeObserver$OnWindowAttachListener.js" "hyperloop/android.view.ViewTreeObserver$OnWindowFocusChangeListener.js" "hyperloop/android.view.ViewTreeObserver.js" "hyperloop/android.view.Window$Callback.js" "hyperloop/android.view.Window.js" "hyperloop/android.view.WindowAnimationFrameStats.js" "hyperloop/android.view.WindowContentFrameStats.js" "hyperloop/android.view.WindowId$FocusObserver.js" "hyperloop/android.view.WindowId.js" "hyperloop/android.view.WindowInsets.js" "hyperloop/android.view.WindowManager$BadTokenException.js" "hyperloop/android.view.WindowManager$InvalidDisplayException.js" "hyperloop/android.view.WindowManager$LayoutParams.js" "hyperloop/android.view.WindowManager.js" "hyperloop/android.widget.AbsListView$LayoutParams.js" "hyperloop/android.widget.AbsListView$MultiChoiceModeListener.js" "hyperloop/android.widget.AbsListView$OnScrollListener.js" "hyperloop/android.widget.AbsListView$RecyclerListener.js" "hyperloop/android.widget.AbsListView$SelectionBoundsAdjuster.js" "hyperloop/android.widget.AbsListView.js" "hyperloop/android.widget.Adapter.js" "hyperloop/android.widget.AdapterView$AdapterContextMenuInfo.js" "hyperloop/android.widget.AdapterView$OnItemClickListener.js" "hyperloop/android.widget.AdapterView$OnItemLongClickListener.js" "hyperloop/android.widget.AdapterView$OnItemSelectedListener.js" "hyperloop/android.widget.AdapterView.js" "hyperloop/android.widget.Button.js" "hyperloop/android.widget.CalendarView$OnDateChangeListener.js" "hyperloop/android.widget.CalendarView.js" "hyperloop/android.widget.DatePicker$OnDateChangedListener.js" "hyperloop/android.widget.DatePicker.js" "hyperloop/android.widget.ExpandableListAdapter.js" "hyperloop/android.widget.ExpandableListView$ExpandableListContextMenuInfo.js" "hyperloop/android.widget.ExpandableListView$OnChildClickListener.js" "hyperloop/android.widget.ExpandableListView$OnGroupClickListener.js" "hyperloop/android.widget.ExpandableListView$OnGroupCollapseListener.js" "hyperloop/android.widget.ExpandableListView$OnGroupExpandListener.js" "hyperloop/android.widget.ExpandableListView.js" "hyperloop/android.widget.FrameLayout$LayoutParams.js" "hyperloop/android.widget.FrameLayout.js" "hyperloop/android.widget.ImageView$ScaleType.js" "hyperloop/android.widget.ImageView.js" "hyperloop/android.widget.js" "hyperloop/android.widget.LinearLayout$LayoutParams.js" "hyperloop/android.widget.LinearLayout.js" "hyperloop/android.widget.ListAdapter.js" "hyperloop/android.widget.ListView$FixedViewInfo.js" "hyperloop/android.widget.ListView.js" "hyperloop/android.widget.RemoteViews$ActionException.js" "hyperloop/android.widget.RemoteViews$RemoteView.js" "hyperloop/android.widget.RemoteViews.js" "hyperloop/android.widget.Scroller.js" "hyperloop/android.widget.SpinnerAdapter.js" "hyperloop/android.widget.TabHost$OnTabChangeListener.js" "hyperloop/android.widget.TabHost$TabContentFactory.js" "hyperloop/android.widget.TabHost$TabSpec.js" "hyperloop/android.widget.TabHost.js" "hyperloop/android.widget.TabWidget.js" "hyperloop/android.widget.TextView$BufferType.js" "hyperloop/android.widget.TextView$OnEditorActionListener.js" "hyperloop/android.widget.TextView$SavedState.js" "hyperloop/android.widget.TextView.js" "hyperloop/android.widget.TimePicker$OnTimeChangedListener.js" "hyperloop/android.widget.TimePicker.js" "hyperloop/android.widget.Toolbar$LayoutParams.js" "hyperloop/android.widget.Toolbar$OnMenuItemClickListener.js" "hyperloop/android.widget.Toolbar.js" "hyperloop/com.android.js" "hyperloop/com.android.volley.AuthFailureError.js" "hyperloop/com.android.volley.BuildConfig.js" "hyperloop/com.android.volley.Cache$Entry.js" "hyperloop/com.android.volley.Cache.js" "hyperloop/com.android.volley.CacheDispatcher.js" "hyperloop/com.android.volley.DefaultRetryPolicy.js" "hyperloop/com.android.volley.ExecutorDelivery.js" "hyperloop/com.android.volley.js" "hyperloop/com.android.volley.Network.js" "hyperloop/com.android.volley.NetworkDispatcher.js" "hyperloop/com.android.volley.NetworkError.js" "hyperloop/com.android.volley.NetworkResponse.js" "hyperloop/com.android.volley.NoConnectionError.js" "hyperloop/com.android.volley.ParseError.js" "hyperloop/com.android.volley.Request$Method.js" "hyperloop/com.android.volley.Request$Priority.js" "hyperloop/com.android.volley.Request.js" "hyperloop/com.android.volley.RequestQueue$RequestFilter.js" "hyperloop/com.android.volley.RequestQueue.js" "hyperloop/com.android.volley.Response$ErrorListener.js" "hyperloop/com.android.volley.Response$Listener.js" "hyperloop/com.android.volley.Response.js" "hyperloop/com.android.volley.ResponseDelivery.js" "hyperloop/com.android.volley.RetryPolicy.js" "hyperloop/com.android.volley.ServerError.js" "hyperloop/com.android.volley.TimeoutError.js" "hyperloop/com.android.volley.toolbox.AndroidAuthenticator.js" "hyperloop/com.android.volley.toolbox.Authenticator.js" "hyperloop/com.android.volley.toolbox.BasicNetwork.js" "hyperloop/com.android.volley.toolbox.ByteArrayPool.js" "hyperloop/com.android.volley.toolbox.ClearCacheRequest.js" "hyperloop/com.android.volley.toolbox.DiskBasedCache.js" "hyperloop/com.android.volley.toolbox.HttpClientStack$HttpPatch.js" "hyperloop/com.android.volley.toolbox.HttpClientStack.js" "hyperloop/com.android.volley.toolbox.HttpHeaderParser.js" "hyperloop/com.android.volley.toolbox.HttpStack.js" "hyperloop/com.android.volley.toolbox.HurlStack$UrlRewriter.js" "hyperloop/com.android.volley.toolbox.HurlStack.js" "hyperloop/com.android.volley.toolbox.ImageLoader$ImageCache.js" "hyperloop/com.android.volley.toolbox.ImageLoader$ImageContainer.js" "hyperloop/com.android.volley.toolbox.ImageLoader$ImageListener.js" "hyperloop/com.android.volley.toolbox.ImageLoader.js" "hyperloop/com.android.volley.toolbox.ImageRequest.js" "hyperloop/com.android.volley.toolbox.js" "hyperloop/com.android.volley.toolbox.JsonArrayRequest.js" "hyperloop/com.android.volley.toolbox.JsonObjectRequest.js" "hyperloop/com.android.volley.toolbox.JsonRequest.js" "hyperloop/com.android.volley.toolbox.NetworkImageView.js" "hyperloop/com.android.volley.toolbox.NoCache.js" "hyperloop/com.android.volley.toolbox.PoolingByteArrayOutputStream.js" "hyperloop/com.android.volley.toolbox.RequestFuture.js" "hyperloop/com.android.volley.toolbox.StringRequest.js" "hyperloop/com.android.volley.toolbox.Volley.js" "hyperloop/com.android.volley.VolleyError.js" "hyperloop/com.android.volley.VolleyLog.js" "hyperloop/com.facebook.js" "hyperloop/com.facebook.shimmer.js" "hyperloop/com.facebook.shimmer.ShimmerFrameLayout$MaskAngle.js" "hyperloop/com.facebook.shimmer.ShimmerFrameLayout$MaskShape.js" "hyperloop/com.facebook.shimmer.ShimmerFrameLayout.js" "hyperloop/com.js" "hyperloop/java.io.ByteArrayOutputStream.js" "hyperloop/java.io.File.js" "hyperloop/java.io.FileDescriptor.js" "hyperloop/java.io.FileFilter.js" "hyperloop/java.io.FileInputStream.js" "hyperloop/java.io.FilenameFilter.js" "hyperloop/java.io.FileOutputStream.js" "hyperloop/java.io.FilterOutputStream.js" "hyperloop/java.io.InputStream.js" "hyperloop/java.io.IOException.js" "hyperloop/java.io.js" "hyperloop/java.io.OutputStream.js" "hyperloop/java.io.PrintStream.js" "hyperloop/java.io.PrintWriter.js" "hyperloop/java.io.Reader.js" "hyperloop/java.io.Serializable.js" "hyperloop/java.io.Writer.js" "hyperloop/java.js" "hyperloop/java.lang.annotation.Annotation.js" "hyperloop/java.lang.annotation.js" "hyperloop/java.lang.Appendable.js" "hyperloop/java.lang.Boolean.js" "hyperloop/java.lang.Byte.js" "hyperloop/java.lang.CharSequence.js" "hyperloop/java.lang.Class.js" "hyperloop/java.lang.ClassLoader.js" "hyperloop/java.lang.Double.js" "hyperloop/java.lang.Enum.js" "hyperloop/java.lang.Exception.js" "hyperloop/java.lang.Float.js" "hyperloop/java.lang.Integer.js" "hyperloop/java.lang.Iterable.js" "hyperloop/java.lang.js" "hyperloop/java.lang.Long.js" "hyperloop/java.lang.Number.js" "hyperloop/java.lang.Object.js" "hyperloop/java.lang.Package.js" "hyperloop/java.lang.reflect.AccessibleObject.js" "hyperloop/java.lang.reflect.Constructor.js" "hyperloop/java.lang.reflect.Field.js" "hyperloop/java.lang.reflect.js" "hyperloop/java.lang.reflect.Method.js" "hyperloop/java.lang.reflect.Type.js" "hyperloop/java.lang.Runnable.js" "hyperloop/java.lang.Short.js" "hyperloop/java.lang.String.js" "hyperloop/java.lang.StringBuffer.js" "hyperloop/java.lang.StringBuilder.js" "hyperloop/java.lang.Thread$State.js" "hyperloop/java.lang.Thread$UncaughtExceptionHandler.js" "hyperloop/java.lang.Thread.js" "hyperloop/java.lang.ThreadGroup.js" "hyperloop/java.lang.Throwable.js" "hyperloop/java.math.BigInteger.js" "hyperloop/java.math.js" "hyperloop/java.math.RoundingMode.js" "hyperloop/java.net.ContentHandler.js" "hyperloop/java.net.ContentHandlerFactory.js" "hyperloop/java.net.DatagramPacket.js" "hyperloop/java.net.DatagramSocket.js" "hyperloop/java.net.DatagramSocketImpl.js" "hyperloop/java.net.DatagramSocketImplFactory.js" "hyperloop/java.net.FileNameMap.js" "hyperloop/java.net.HttpURLConnection.js" "hyperloop/java.net.InetAddress.js" "hyperloop/java.net.js" "hyperloop/java.net.NetworkInterface.js" "hyperloop/java.net.ProtocolFamily.js" "hyperloop/java.net.Proxy$Type.js" "hyperloop/java.net.Proxy.js" "hyperloop/java.net.ServerSocket.js" "hyperloop/java.net.Socket.js" "hyperloop/java.net.SocketAddress.js" "hyperloop/java.net.SocketImpl.js" "hyperloop/java.net.SocketImplFactory.js" "hyperloop/java.net.SocketOption.js" "hyperloop/java.net.URI.js" "hyperloop/java.net.URL.js" "hyperloop/java.net.URLConnection.js" "hyperloop/java.net.URLStreamHandler.js" "hyperloop/java.net.URLStreamHandlerFactory.js" "hyperloop/java.nio.Buffer.js" "hyperloop/java.nio.ByteBuffer.js" "hyperloop/java.nio.ByteOrder.js" "hyperloop/java.nio.channels.AsynchronousFileChannel.js" "hyperloop/java.nio.channels.Channel.js" "hyperloop/java.nio.channels.CompletionHandler.js" "hyperloop/java.nio.channels.DatagramChannel.js" "hyperloop/java.nio.channels.FileChannel$MapMode.js" "hyperloop/java.nio.channels.FileChannel.js" "hyperloop/java.nio.channels.FileLock.js" "hyperloop/java.nio.channels.js" "hyperloop/java.nio.channels.NetworkChannel.js" "hyperloop/java.nio.channels.Pipe$SinkChannel.js" "hyperloop/java.nio.channels.Pipe$SourceChannel.js" "hyperloop/java.nio.channels.Pipe.js" "hyperloop/java.nio.channels.ReadableByteChannel.js" "hyperloop/java.nio.channels.SeekableByteChannel.js" "hyperloop/java.nio.channels.SelectableChannel.js" "hyperloop/java.nio.channels.SelectionKey.js" "hyperloop/java.nio.channels.Selector.js" "hyperloop/java.nio.channels.ServerSocketChannel.js" "hyperloop/java.nio.channels.SocketChannel.js" "hyperloop/java.nio.channels.spi.AbstractInterruptibleChannel.js" "hyperloop/java.nio.channels.spi.AbstractSelectableChannel.js" "hyperloop/java.nio.channels.spi.AbstractSelectionKey.js" "hyperloop/java.nio.channels.spi.AbstractSelector.js" "hyperloop/java.nio.channels.spi.js" "hyperloop/java.nio.channels.spi.SelectorProvider.js" "hyperloop/java.nio.channels.WritableByteChannel.js" "hyperloop/java.nio.CharBuffer.js" "hyperloop/java.nio.charset.Charset.js" "hyperloop/java.nio.charset.CharsetDecoder.js" "hyperloop/java.nio.charset.CharsetEncoder.js" "hyperloop/java.nio.charset.CoderResult.js" "hyperloop/java.nio.charset.CodingErrorAction.js" "hyperloop/java.nio.charset.js" "hyperloop/java.nio.DoubleBuffer.js" "hyperloop/java.nio.file.attribute.BasicFileAttributes.js" "hyperloop/java.nio.file.attribute.FileAttributeView.js" "hyperloop/java.nio.file.attribute.FileStoreAttributeView.js" "hyperloop/java.nio.file.attribute.FileTime.js" "hyperloop/java.nio.file.attribute.GroupPrincipal.js" "hyperloop/java.nio.file.attribute.js" "hyperloop/java.nio.file.attribute.UserPrincipal.js" "hyperloop/java.nio.file.attribute.UserPrincipalLookupService.js" "hyperloop/java.nio.file.DirectoryStream$Filter.js" "hyperloop/java.nio.file.DirectoryStream.js" "hyperloop/java.nio.file.FileStore.js" "hyperloop/java.nio.file.FileSystem.js" "hyperloop/java.nio.file.js" "hyperloop/java.nio.file.Path.js" "hyperloop/java.nio.file.PathMatcher.js" "hyperloop/java.nio.file.spi.FileSystemProvider.js" "hyperloop/java.nio.file.spi.js" "hyperloop/java.nio.file.Watchable.js" "hyperloop/java.nio.file.WatchKey.js" "hyperloop/java.nio.file.WatchService.js" "hyperloop/java.nio.FloatBuffer.js" "hyperloop/java.nio.IntBuffer.js" "hyperloop/java.nio.js" "hyperloop/java.nio.LongBuffer.js" "hyperloop/java.nio.MappedByteBuffer.js" "hyperloop/java.nio.ShortBuffer.js" "hyperloop/java.security.AlgorithmParameters.js" "hyperloop/java.security.AlgorithmParametersSpi.js" "hyperloop/java.security.cert.Certificate$CertificateRep.js" "hyperloop/java.security.cert.Certificate.js" "hyperloop/java.security.cert.js" "hyperloop/java.security.CodeSource.js" "hyperloop/java.security.js" "hyperloop/java.security.Key.js" "hyperloop/java.security.KeyStore$Builder.js" "hyperloop/java.security.KeyStore$CallbackHandlerProtection.js" "hyperloop/java.security.KeyStore$Entry.js" "hyperloop/java.security.KeyStore$LoadStoreParameter.js" "hyperloop/java.security.KeyStore$PasswordProtection.js" "hyperloop/java.security.KeyStore$PrivateKeyEntry.js" "hyperloop/java.security.KeyStore$ProtectionParameter.js" "hyperloop/java.security.KeyStore$SecretKeyEntry.js" "hyperloop/java.security.KeyStore$TrustedCertificateEntry.js" "hyperloop/java.security.KeyStore.js" "hyperloop/java.security.KeyStoreSpi.js" "hyperloop/java.security.Permission.js" "hyperloop/java.security.PermissionCollection.js" "hyperloop/java.security.PrivateKey.js" "hyperloop/java.security.ProtectionDomain.js" "hyperloop/java.security.Provider$Service.js" "hyperloop/java.security.Provider.js" "hyperloop/java.security.PublicKey.js" "hyperloop/java.security.SecureRandom.js" "hyperloop/java.security.SecureRandomSpi.js" "hyperloop/java.security.Signature.js" "hyperloop/java.security.SignatureSpi.js" "hyperloop/java.security.spec.AlgorithmParameterSpec.js" "hyperloop/java.security.spec.js" "hyperloop/java.text.AttributedCharacterIterator$Attribute.js" "hyperloop/java.text.AttributedCharacterIterator.js" "hyperloop/java.text.FieldPosition.js" "hyperloop/java.text.Format$Field.js" "hyperloop/java.text.Format.js" "hyperloop/java.text.js" "hyperloop/java.text.NumberFormat$Field.js" "hyperloop/java.text.NumberFormat.js" "hyperloop/java.text.ParsePosition.js" "hyperloop/java.util.AbstractCollection.js" "hyperloop/java.util.AbstractList.js" "hyperloop/java.util.AbstractMap$SimpleEntry.js" "hyperloop/java.util.AbstractMap$SimpleImmutableEntry.js" "hyperloop/java.util.AbstractMap.js" "hyperloop/java.util.ArrayList.js" "hyperloop/java.util.Collection.js" "hyperloop/java.util.Comparator.js" "hyperloop/java.util.concurrent.BlockingQueue.js" "hyperloop/java.util.concurrent.Callable.js" "hyperloop/java.util.concurrent.Executor.js" "hyperloop/java.util.concurrent.ExecutorService.js" "hyperloop/java.util.concurrent.Future.js" "hyperloop/java.util.concurrent.js" "hyperloop/java.util.concurrent.TimeUnit.js" "hyperloop/java.util.Currency.js" "hyperloop/java.util.Date.js" "hyperloop/java.util.Dictionary.js" "hyperloop/java.util.Enumeration.js" "hyperloop/java.util.HashMap.js" "hyperloop/java.util.Hashtable.js" "hyperloop/java.util.Iterator.js" "hyperloop/java.util.js" "hyperloop/java.util.List.js" "hyperloop/java.util.ListIterator.js" "hyperloop/java.util.Locale$Builder.js" "hyperloop/java.util.Locale$Category.js" "hyperloop/java.util.Locale.js" "hyperloop/java.util.Map$Entry.js" "hyperloop/java.util.Map.js" "hyperloop/java.util.Properties.js" "hyperloop/java.util.Random.js" "hyperloop/java.util.Set.js" "hyperloop/java.util.SortedMap.js" "hyperloop/javax.crypto.Cipher.js" "hyperloop/javax.crypto.CipherSpi.js" "hyperloop/javax.crypto.ExemptionMechanism.js" "hyperloop/javax.crypto.ExemptionMechanismSpi.js" "hyperloop/javax.crypto.js" "hyperloop/javax.crypto.KeyGenerator.js" "hyperloop/javax.crypto.KeyGeneratorSpi.js" "hyperloop/javax.crypto.Mac.js" "hyperloop/javax.crypto.MacSpi.js" "hyperloop/javax.crypto.SecretKey.js" "hyperloop/javax.js" "hyperloop/javax.net.js" "hyperloop/javax.net.SocketFactory.js" "hyperloop/javax.net.ssl.js" "hyperloop/javax.net.ssl.SSLSocketFactory.js" "hyperloop/javax.security.auth.js" "hyperloop/javax.security.auth.x500.js" "hyperloop/javax.security.auth.x500.X500Principal.js" "hyperloop/javax.security.js" "hyperloop/org.js" "hyperloop/org.xmlpull.js" "hyperloop/org.xmlpull.v1.js" "hyperloop/org.xmlpull.v1.XmlPullParser.js" "hyperloop/org.xmlpull.v1.XmlSerializer.js" "ios/controls.js" "ios/subclasses/chartdelegate.js" "ios/subclasses/collectionviewdatasourcedelegate.js" "ios/subclasses/collisionbehaviordelegate.js" "ios/subclasses/drawrectview.js" "ios/subclasses/gesturerecognizer.js" "ios/subclasses/tableviewdatasourcedelegate.js" "ios/subclasses/urlsessiondelegate.js" "log.js" "xp.ui.js" "ti.cloud.js" "_app_props_.json"
    2016-07-04T17:22:57.017Z | ERROR  | An uncaught exception was thrown!
    spawn ENAMETOOLONG
    2016-07-04T17:22:57.019Z | ERROR  | spawn ENAMETOOLON
    ```

* When building a project on Windows using appc run from the same directory as an appc.js file the build process will not begin and instead you will be prompted to select the application to open the appc.js in or the file will automatically open depending on your settings ([CLI-1038](https://jira.appcelerator.org/browse/CLI-1038))

## API Changes

### New APIs

The following APIs are new or have expanded platform support in Release 5.4.0 as of August 10th, 2016.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Android.Notification.getStyle | method | Gets the value of the Titanium.Android.Notification.style property. (New API, supported on Android.) |
| Titanium.Android.Notification.setStyle | method | Sets the value of the Titanium.Android.Notification.style property. (New API, supported on Android.) |
| Titanium.Android.Notification.style | property | Style object that can apply a rich notification style. (New API, supported on Android.) |
| Titanium.Android.hasPermission | method | Returns `true` if the app has permission access. (New API, supported on Android.) |
| Titanium.Android.requestPermissions | method | Request for permission access. (New API, supported on Android.) |
| Titanium.Database.DB.file | property | A `File` object representing the file where this database is stored. Must only be used for setting file properties. (Added support for Android.) |
| Titanium.Database.DB.getFile | method | Gets the value of the Titanium.Database.DB.file property. (Added support for Android.) |
| Titanium.Filesystem.getAsset | method | Returns a `Blob` object representing the asset catalog image identified by the path arguments. (New API, supported on iPhone and iPad.) |
| Titanium.Filesystem.hasStoragePermissions | method | Returns `true` if the app has storage permissions. (New API, supported on Android, iPhone, iPad and Mobile Web.) |
| Titanium.Filesystem.requestStoragePermissions | method | Requests for storage permissions (New API, supported on Android, iPhone, iPad and Mobile Web.) |
| Titanium.Media.AudioPlayer.getAudioSessionId | method | Returns the audio session id. (New API, supported on Android.) |
| Titanium.Media.startVideoCapture | method | Starts video capture using the camera specified. (Added support for Android.) |
| Titanium.Media.stopVideoCapture | method | Stops video capture using the camera specified. (Added support for Android.) |
| Titanium.UI.AlertDialog.getHintText | method | Gets the value of the Titanium.UI.AlertDialog.hintText property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.getLoginHintText | method | Gets the value of the Titanium.UI.AlertDialog.loginHintText property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.getPasswordHintText | method | Gets the value of the Titanium.UI.AlertDialog.passwordHintText property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.hintText | property | Hint text of the text field inside the dialog. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.loginHintText | property | Hint text of the login text field inside the dialog. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.passwordHintText | property | Hint text of the password text field inside the dialog. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setHintText | method | Sets the value of the Titanium.UI.AlertDialog.hintText property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setLoginHintText | method | Sets the value of the Titanium.UI.AlertDialog.loginHintText property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setPasswordHintText | method | Sets the value of the Titanium.UI.AlertDialog.passwordHintText property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Android.GRAVITY\_AXIS\_CLIP | property | Raw bit controlling whether the right/bottom edge is clipped to its container, based on the gravity direction being applied. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_AXIS\_PULL\_AFTER | property | Raw bit controlling how the right/bottom edge is placed. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_AXIS\_PULL\_BEFORE | property | Raw bit controlling how the left/top edge is placed. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_AXIS\_SPECIFIED | property | Raw bit indicating the gravity for an axis has been specified. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_AXIS\_X\_SHIFT | property | Bits defining the horizontal axis. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_AXIS\_Y\_SHIFT | property | Bits defining the vertical axis. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_BOTTOM | property | Push object to the bottom of its container, not changing its size. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_CENTER | property | Place the object in the center of its container in both the vertical and horizontal axis, not changing its size. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_CENTER\_HORIZONTAL | property | Place object in the horizontal center of its container, not changing its size. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_CENTER\_VERTICAL | property | Place object in the vertical center of its container, not changing its size. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_CLIP\_HORIZONTAL | property | Flag to clip the edges of the object to its container along the horizontal axis. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_CLIP\_VERTICAL | property | Flag to clip the edges of the object to its container along the vertical axis. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_DISPLAY\_CLIP\_HORIZONTAL | property | Special constant to enable clipping to an overall display along the horizontal dimension. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_DISPLAY\_CLIP\_VERTICAL | property | Special constant to enable clipping to an overall display along the vertical dimension. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_END | property | Push object to x-axis position at the end of its container, not changing its size. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_FILL | property | Grow the horizontal and vertical size of the object if needed so it completely fills its container. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_FILL\_HORIZONTAL | property | Grow the horizontal size of the object if needed so it completely fills its container. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_FILL\_VERTICAL | property | Grow the vertical size of the object if needed so it completely fills its container. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_HORIZONTAL\_GRAVITY\_MASK | property | Binary mask to get the absolute horizontal gravity of a gravity. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_LEFT | property | Push object to the left of its container, not changing its size. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_NO\_GRAVITY | property | Constant indicating that no gravity has been set (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_RELATIVE\_HORIZONTAL\_GRAVITY\_MASK | property | Binary mask for the horizontal gravity and script specific direction bit. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_RELATIVE\_LAYOUT\_DIRECTION | property | Raw bit controlling whether the layout direction is relative or not (GRAVITY\_START/GRAVITY\_END instead of absolute GRAVITY\_LEFT/GRAVITY\_RIGHT). (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_RIGHT | property | Push object to the right of its container, not changing its size. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_START | property | Push object to x-axis position at the start of its container, not changing its size. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_TOP | property | Push object to the top of its container, not changing its size. (New API, supported on Android.) |
| Titanium.UI.Android.GRAVITY\_VERTICAL\_GRAVITY\_MASK | property | Binary mask to get the vertical gravity of a gravity. (New API, supported on Android.) |
| Titanium.UI.Button.getTintColor | method | Gets the value of the Titanium.UI.Button.tintColor property. (Added support for Android.) |
| Titanium.UI.Button.setTintColor | method | Sets the value of the Titanium.UI.Button.tintColor property. (Added support for Android.) |
| Titanium.UI.Button.tintColor | property | Button tint color. (Added support for Android.) |
| Titanium.UI.ImageView.getTintColor | method | Gets the value of the Titanium.UI.ImageView.tintColor property. (Added support for Android.) |
| Titanium.UI.ImageView.setTintColor | method | Sets the value of the Titanium.UI.ImageView.tintColor property. (Added support for Android.) |
| Titanium.UI.ImageView.tintColor | property | The view's tintColor. (Added support for Android.) |
| Titanium.UI.Label.getLineSpacing | method | Gets the value of the Titanium.UI.Label.lineSpacing property. (New API, supported on Android.) |
| Titanium.UI.Label.lineSpacing | property | Line spacing of the text, as a dictionary with the properties `add` and `multiply`. (New API, supported on Android.) |
| Titanium.UI.Label.setLineSpacing | method | Sets the value of the Titanium.UI.Label.lineSpacing property. (New API, supported on Android.) |
| Titanium.UI.ListView.allowsSelectionDuringEditing | property | Determines whether this list View rows can be selected while editing the table. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.disableBounce | property | Determines whether the scroll-bounce of the list view should be disabled. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.getAllowsSelectionDuringEditing | method | Gets the value of the Titanium.UI.ListView.allowsSelectionDuringEditing property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.getDisableBounce | method | Gets the value of the Titanium.UI.ListView.disableBounce property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.getListSeparatorInsets | method | Gets the value of the Titanium.UI.ListView.listSeparatorInsets property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.insert | event | Fired when a list row is inserted by the user. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.listSeparatorInsets | property | The insets for the list view header and footer. This property is applicable on iOS 7 and greater. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.scrolling | event | Fires when the list view is scrolling. Calling the `scrollTo` methods will not fire this event (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.setAllowsSelectionDuringEditing | method | Sets the value of the Titanium.UI.ListView.allowsSelectionDuringEditing property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.setDisableBounce | method | Sets the value of the Titanium.UI.ListView.disableBounce property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.setListSeparatorInsets | method | Sets the value of the Titanium.UI.ListView.listSeparatorInsets property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Notification.getGravity | method | Gets the value of the Titanium.UI.Notification.gravity property. (New API, supported on Android.) |
| Titanium.UI.Notification.gravity | property | Determines the location at which the notification should appear on the screen. (New API, supported on Android.) |
| Titanium.UI.Notification.setGravity | method | Sets the value of the Titanium.UI.Notification.gravity property. (New API, supported on Android.) |
| Titanium.UI.Picker.getNativeSpinner | method | Gets the value of the Titanium.UI.Picker.nativeSpinner property. (New API, supported on Android.) |
| Titanium.UI.Picker.nativeSpinner | property | Creates a native Android control for creating a Time Spinner with Type `Ti.UI.PICKER_TYPE_TIME`. This is invoked rather than the default native "dropdown" style. (New API, supported on Android.) |
| Titanium.UI.Picker.setNativeSpinner | method | Sets the value of the Titanium.UI.Picker.nativeSpinner property. (New API, supported on Android.) |
| Titanium.UI.PickerRow.color | property | Color of the item text, as a color name or hex triplet. (Added support for Android, iPhone and iPad.) |
| Titanium.UI.PickerRow.getColor | method | Gets the value of the Titanium.UI.PickerRow.color property. (Added support for Android, iPhone and iPad.) |
| Titanium.UI.PickerRow.setColor | method | Sets the value of the Titanium.UI.PickerRow.color property. (Added support for Android, iPhone and iPad.) |
| Titanium.UI.ScrollableView.currentPageIndicatorColor | property | Color for the current page of the paging control, as a color name or hex triplet. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollableView.getCurrentPageIndicatorColor | method | Gets the value of the Titanium.UI.ScrollableView.currentPageIndicatorColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollableView.getPageIndicatorColor | method | Gets the value of the Titanium.UI.ScrollableView.pageIndicatorColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollableView.insertViewsAt | method | Inserts views at the specified position in the views array. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.ScrollableView.pageIndicatorColor | property | Color of the paging control, as a color name or hex triplet. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollableView.setCurrentPageIndicatorColor | method | Sets the value of the Titanium.UI.ScrollableView.currentPageIndicatorColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollableView.setPageIndicatorColor | method | Sets the value of the Titanium.UI.ScrollableView.pageIndicatorColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.SearchBar.cancelButtonTitle | property | The title of the cancel button when the search bar field is focused. (New API, supported on iPhone and iPad.) |
| Titanium.UI.SearchBar.getCancelButtonTitle | method | Gets the value of the Titanium.UI.SearchBar.cancelButtonTitle property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.SearchBar.getStyle | method | Gets the value of the Titanium.UI.SearchBar.style property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.SearchBar.setCancelButtonTitle | method | Sets the value of the Titanium.UI.SearchBar.cancelButtonTitle property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.SearchBar.setStyle | method | Sets the value of the Titanium.UI.SearchBar.style property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.SearchBar.style | property | Determines the style of the search bar. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TextField.getHintTextColor | method | Gets the value of the Titanium.UI.TextField.hintTextColor property. (Added support for iPhone and iPad.) |
| Titanium.UI.TextField.hintTextColor | property | Hint text color to display when the field is empty. (Added support for iPhone and iPad.) |
| Titanium.UI.TextField.setHintTextColor | method | Sets the value of the Titanium.UI.TextField.hintTextColor property. (Added support for iPhone and iPad.) |
| Titanium.UI.WebView.allowsLinkPreview | property | A Boolean value that determines whether pressing on a link displays a preview of the destination for the link. (New API, supported on iPhone.) |
| Titanium.UI.WebView.blacklistedURLs | property | An array of url strings to blacklist. (New API, supported on Android.) |
| Titanium.UI.WebView.getAllowsLinkPreview | method | Gets the value of the Titanium.UI.WebView.allowsLinkPreview property. (New API, supported on iPhone.) |
| Titanium.UI.WebView.getBlacklistedURLs | method | Gets the value of the Titanium.UI.WebView.blacklistedURLs property. (New API, supported on Android.) |
| Titanium.UI.WebView.onStopBlacklistedUrl | event | Fired when a blacklisted Url is stopped (New API, supported on Android.) |
| Titanium.UI.WebView.setAllowsLinkPreview | method | Sets the value of the Titanium.UI.WebView.allowsLinkPreview property. (New API, supported on iPhone.) |
| Titanium.UI.WebView.setBlacklistedURLs | method | Sets the value of the Titanium.UI.WebView.blacklistedURLs property. (New API, supported on Android.) |
| Titanium.UI.Window.hideToolbar | method | Makes the bottom toolbar invisible. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.showToolbar | method | Makes the bottom toolbar visible. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.AlertDialogStyle | object | A set of constants for the style that can be used for the `style` property of Titanium.UI.AlertDialog. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.AnimationStyle | object | A set of constants for the animation styles used for view transitions. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.BLUR\_EFFECT\_STYLE\_DARK | property | Use with BlurView.effect to specify a blur effect. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.BLUR\_EFFECT\_STYLE\_EXTRA\_LIGHT | property | Use with BlurView.effect to specify a blur effect. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.BLUR\_EFFECT\_STYLE\_LIGHT | property | Use with BlurView.effect to specify a blur effect. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.BlurView | object | A Titanium.UI.iOS.BlurView object gives you an easy way implement some complex visual effects. The blur effect is applied to every view the blur view is added to by default. You can also place the blur view above other views and all visible views layered under the blur view are blurred as well.<br /><br />For more information on BlurView, please refer to the official Apple documentation. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.ListViewCellSelectionStyle | object | A set of constants for the style that can be used for the `selectionStyle` property of a ListItem, which is set in the `properties` dictionary of either the ListDataItem or ItemTemplate. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.ListViewScrollPosition | object | A set of constants for the position value that can be used for the `position` property of ListViewAnimationProperties when invoking the ListView's `scrollToItem`, `appendSection`,`deleteSectionAt`, `insertSectionAt` and `replaceSectionAt` methods. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SEARCH\_BAR\_STYLE\_MINIMAL | property | Use with Titanium.UI.Searchbar.style to change the search bar style. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SEARCH\_BAR\_STYLE\_PROMINENT | property | Use with Titanium.UI.Searchbar.style to change the search bar style. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.ScrollIndicatorStyle | object | A set of constants for the styles available for scrollbars used with Titanium.UI.ScrollView.scrollIndicatorStyle and Titanium.UI.TableView.scrollIndicatorStyle properties. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.StatusBar | object | A set of constants for the status bar style. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.Stepper | object | A widget used to increment and decrement a value (New API, supported on Android, iPhone, iPad and Mobile Web.) |
| Titanium.UI.iOS.SystemButton | object | A set of constants for creating standard iOS system buttons. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SystemButtonStyle | object | A set of constants for the system button styles that can be used for the button `style` property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.TableViewCellSelectionStyle | object | A set of constants for the style that can be used for the `selectionStyle` property of Titanium.UI.TableViewRow. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.TableViewScrollPosition | object | A set of constants for the position value that can be used for the `position` property of Titanium.UI.TableView when invoking `scrollToIndex`. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.appBadge | property | Value of the badge for the application's springboard icon. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.appSupportsShakeToEdit | property | Determines whether the shake to edit system-wide capability is enabled. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.createBlurView | method | Creates and returns an instance of Titanium.UI.iOS.BlurView. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.createStepper | method | Creates and returns an instance of Titanium.UI.iOS.Stepper. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.createSystemButton | method | Creates and returns an instance of Titanium.UI.iOS.SystemButton. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.getAppBadge | method | Gets the value of the Titanium.UI.iOS.appBadge property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.getAppSupportsShakeToEdit | method | Gets the value of the Titanium.UI.iOS.appSupportsShakeToEdit property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.setAppBadge | method | Sets the value of the Titanium.UI.iOS.appBadge property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.setAppSupportsShakeToEdit | method | Sets the value of the Titanium.UI.iOS.appSupportsShakeToEdit property. (New API, supported on iPhone and iPad.) |
| Titanium.WatchSession.ACTIVATION\_STATE\_ACTIVATED | property | The watch is currently activated. (New API, supported on iPhone.) |
| Titanium.WatchSession.ACTIVATION\_STATE\_INACTIVE | property | The watch is currently inactive. (New API, supported on iPhone.) |
| Titanium.WatchSession.ACTIVATION\_STATE\_NOT\_ACTIVATED | property | The watch is currently not activated. (New API, supported on iPhone.) |
| Titanium.WatchSession.activationCompleted | event | Called when the session has completed activation. If session state is Titanium.WatchSession.ACTIVATION\_STATE\_NOT\_ACTIVATED there will be an error with more details. (New API, supported on iPhone.) |
| Titanium.WatchSession.activationState | property | Returns the current activation state of the watch. (New API, supported on iPhone.) |
| Titanium.WatchSession.deactivate | event | Called when all events for the previously selected watch has occurred. The session can be re-activated for the now selected watch using activateSession. (New API, supported on iPhone.) |
| Titanium.WatchSession.getActivationState | method | Gets the value of the Titanium.WatchSession.activationState property. (New API, supported on iPhone.) |
| Titanium.WatchSession.getIsActivated | method | Gets the value of the Titanium.WatchSession.isActivated property. (New API, supported on iPhone.) |
| Titanium.WatchSession.inactive | event | Called when the session can no longer be used to modify or add any new transfers and, all interactive messages will be cancelled, but events for background transfers can still fire. This will happen when the selected watch is being changed. (New API, supported on iPhone.) |
| Titanium.WatchSession.isActivated | property | Returns `true` if the watch is currently activated. (New API, supported on iPhone.) |

### Deprecated APIs

The following APIs are deprecated in Release 5.4.0 as of August 10th, 2016.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.UI.AlertDialog.getLoginPlaceholder | method | Use Titanium.UI.AlertDialog.loginHintText instead. |
| Titanium.UI.AlertDialog.getPasswordPlaceholder | method | Use Titanium.UI.AlertDialog.passwordHintText instead. |
| Titanium.UI.AlertDialog.getPlaceholder | method | Use Titanium.UI.AlertDialog.hintText instead. |
| Titanium.UI.AlertDialog.loginPlaceholder | property | Use Titanium.UI.AlertDialog.loginHintText instead. |
| Titanium.UI.AlertDialog.passwordPlaceholder | property | Use Titanium.UI.AlertDialog.passwordHintText instead. |
| Titanium.UI.AlertDialog.placeholder | property | Use Titanium.UI.AlertDialog.hintText instead. |
| Titanium.UI.AlertDialog.setLoginPlaceholder | method | Use Titanium.UI.AlertDialog.loginHintText instead. |
| Titanium.UI.AlertDialog.setPasswordPlaceholder | method | Use Titanium.UI.AlertDialog.passwordHintText instead. |
| Titanium.UI.AlertDialog.setPlaceholder | method | Use Titanium.UI.AlertDialog.hintText instead. |
| Titanium.UI.KEYBOARD\_APPEARANCE\_ALERT | property |  |
| Titanium.UI.ListView.getTableSeparatorInsets | method | Use listSeparatorInsets instead |
| Titanium.UI.ListView.setTableSeparatorInsets | method | Use listSeparatorInsets instead |
| Titanium.UI.ListView.tableSeparatorInsets | property | Use listSeparatorInsets instead |
| Titanium.UI.iPhone.AlertDialogStyle | object | Use Titanium.UI.iOS.AlertDialogStyle instead. |
| Titanium.UI.iPhone.AnimationStyle | object | Use Ti.UI.iOS.AnimationStyle instead. |
| Titanium.UI.iPhone.ListViewCellSelectionStyle | object | Use Titanium.UI.iOS.ListViewCellSelectionStyle instead. |
| Titanium.UI.iPhone.ListViewScrollPosition | object | Use Titanium.UI.iOS.ListViewScrollPosition instead. |
| Titanium.UI.iPhone.ListViewStyle | object | Use Titanium.UI.iOS.ListViewStyle instead. |
| Titanium.UI.iPhone.ProgressBarStyle | object | Use Titanium.UI.iOS.ProgressBarStyle instead. |
| Titanium.UI.iPhone.RowAnimationStyle | object | Use Titanium.UI.iOS.RowAnimationStyle instead. |
| Titanium.UI.iPhone.ScrollIndicatorStyle | object | Use Titanium.UI.iOS.ScrollIndicatorStyle instead. |
| Titanium.UI.iPhone.StatusBar | object | Use Titanium.UI.iOS.StatusBar instead. |
| Titanium.UI.iPhone.SystemButton | object | Use a href="#!/api/Titanium.UI.iOS.SystemButton"Titanium.UI.iOS.SystemButton/a instead. |
| Titanium.UI.iPhone.SystemButtonStyle | object | Use Titanium.UI.iOS.SystemButtonStyle instead. |
| Titanium.UI.iPhone.TableViewCellSelectionStyle | object | Use Titanium.UI.iOS.TableViewCellSelectionStyle instead. |
| Titanium.UI.iPhone.TableViewScrollPosition | object | Use Titanium.UI.iOS.TableViewScrollPosition instead. |
| Titanium.UI.iPhone.TableViewStyle | object | Use Titanium.UI.iOS.TableViewStyle instead. |
| Titanium.UI.iPhone.appBadge | property | Use Titanium.UI.iOS.appBadge instead. |
| Titanium.UI.iPhone.appSupportsShakeToEdit | property | Use Titanium.UI.iOS.appSupportsShakeToEdit instead. |
| Titanium.UI.iPhone.getAppBadge | method | Use Titanium.UI.iOS.appBadge instead. |
| Titanium.UI.iPhone.getAppSupportsShakeToEdit | method | Use Titanium.UI.iOS.appSupportsShakeToEdit instead. |
| Titanium.UI.iPhone.setAppBadge | method | Use Titanium.UI.iOS.appBadge instead. |
| Titanium.UI.iPhone.setAppSupportsShakeToEdit | method | Use Titanium.UI.iOS.appSupportsShakeToEdit instead. |

### Removed APIs

The following APIs have been removed in Release 5.4.0 as of August 10th, 2016 .

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Filesystem.File.getWriteable | method | Use writable instead. |
| Titanium.Filesystem.File.writeable | property | Use writable instead. |
| Titanium.Media.AUDIO\_SESSION\_MODE\_AMBIENT | property | Deprecated in favor of the `AUDIO_SESSION_CATEGORY` constants defined in Titanium.Media. |
| Titanium.Media.AUDIO\_SESSION\_MODE\_PLAYBACK | property | Deprecated in favor of the `AUDIO_SESSION_CATEGORY` constants defined in Titanium.Media. |
| Titanium.Media.AUDIO\_SESSION\_MODE\_PLAY\_AND\_RECORD | property | Deprecated in favor of the `AUDIO_SESSION_CATEGORY` constants defined in Titanium.Media. |
| Titanium.Media.AUDIO\_SESSION\_MODE\_RECORD | property | Deprecated in favor of the `AUDIO_SESSION_CATEGORY` constants defined in Titanium.Media. |
| Titanium.Media.VIDEO\_CONTROL\_VOLUME\_ONLY | property | Use Titanium.Media.VIDEO\_CONTROL\_EMBEDDED instead. |
| Titanium.Media.VideoPlayer.getMovieControlMode | method | Use mediaControlStyle instead. |
| Titanium.Media.VideoPlayer.movieControlMode | property | Use mediaControlStyle instead. |
| Titanium.Media.VideoPlayer.setMovieControlMode | method | Use mediaControlStyle instead. |
| Titanium.UI.AUTODETECT\_ADDRESS | property | Use Titanium.UI.AUTOLINK\_MAP\_ADDRESSES instead. |
| Titanium.UI.AUTODETECT\_ALL | property | Use Titanium.UI.AUTOLINK\_ALL instead. |
| Titanium.UI.AUTODETECT\_CALENDAR | property | Use Titanium.UI.AUTOLINK\_CALENDAR instead. |
| Titanium.UI.AUTODETECT\_LINK | property | Use Titanium.UI.AUTOLINK\_URLS instead. |
| Titanium.UI.AUTODETECT\_NONE | property | Use Titanium.UI.AUTOLINK\_NONE instead. |
| Titanium.UI.AUTODETECT\_PHONE | property | Use Titanium.UI.AUTOLINK\_PHONE\_NUMBERS instead. |
| Titanium.UI.BLEND\_MODE\_CLEAR | property | Use Titanium.UI.iOS.BLEND\_MODE\_CLEAR instead. |
| Titanium.UI.BLEND\_MODE\_COLOR | property | Use Titanium.UI.iOS.BLEND\_MODE\_COLOR instead. |
| Titanium.UI.BLEND\_MODE\_COLOR\_BURN | property | Use Titanium.UI.iOS.BLEND\_MODE\_COLOR\_BURN instead. |
| Titanium.UI.BLEND\_MODE\_COLOR\_DODGE | property | Use Titanium.UI.iOS.BLEND\_MODE\_COLOR\_DODGE instead. |
| Titanium.UI.BLEND\_MODE\_COPY | property | Use Titanium.UI.iOS.BLEND\_MODE\_COPY instead. |
| Titanium.UI.BLEND\_MODE\_DARKEN | property | Use Titanium.UI.iOS.BLEND\_MODE\_DARKEN instead. |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_ATOP | property | Use Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_ATOP instead. |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_IN | property | Use Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_IN instead. |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_OUT | property | Use Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_OUT instead. |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_OVER | property | Use Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_OVER instead. |
| Titanium.UI.BLEND\_MODE\_DIFFERENCE | property | Use Titanium.UI.iOS.BLEND\_MODE\_DIFFERENCE instead. |
| Titanium.UI.BLEND\_MODE\_EXCLUSION | property | Use Titanium.UI.iOS.BLEND\_MODE\_EXCLUSION instead. |
| Titanium.UI.BLEND\_MODE\_HARD\_LIGHT | property | Use Titanium.UI.iOS.BLEND\_MODE\_HARD\_LIGHT instead. |
| Titanium.UI.BLEND\_MODE\_HUE | property | Use Titanium.UI.iOS.BLEND\_MODE\_HUE instead. |
| Titanium.UI.BLEND\_MODE\_LIGHTEN | property | Use Titanium.UI.iOS.BLEND\_MODE\_LIGHTEN instead. |
| Titanium.UI.BLEND\_MODE\_LUMINOSITY | property | Use Titanium.UI.iOS.BLEND\_MODE\_LUMINOSITY instead. |
| Titanium.UI.BLEND\_MODE\_MULTIPLY | property | Use Titanium.UI.iOS.BLEND\_MODE\_MULTIPLY instead. |
| Titanium.UI.BLEND\_MODE\_NORMAL | property | Use Titanium.UI.iOS.BLEND\_MODE\_NORMAL instead. |
| Titanium.UI.BLEND\_MODE\_OVERLAY | property | Use Titanium.UI.iOS.BLEND\_MODE\_OVERLAY instead. |
| Titanium.UI.BLEND\_MODE\_PLUS\_DARKER | property | Use Titanium.UI.iOS.BLEND\_MODE\_PLUS\_DARKER instead. |
| Titanium.UI.BLEND\_MODE\_PLUS\_LIGHTER | property | Use Titanium.UI.iOS.BLEND\_MODE\_PLUS\_LIGHTER instead. |
| Titanium.UI.BLEND\_MODE\_SATURATION | property | Use Titanium.UI.iOS.BLEND\_MODE\_SATURATION instead. |
| Titanium.UI.BLEND\_MODE\_SCREEN | property | Use Titanium.UI.iOS.BLEND\_MODE\_SCREEN instead. |
| Titanium.UI.BLEND\_MODE\_SOFT\_LIGHT | property | Use Titanium.UI.iOS.BLEND\_MODE\_SOFT\_LIGHT instead. |
| Titanium.UI.BLEND\_MODE\_SOURCE\_ATOP | property | Use Titanium.UI.iOS.BLEND\_MODE\_SOURCE\_ATOP instead. |
| Titanium.UI.BLEND\_MODE\_SOURCE\_IN | property | Use Titanium.UI.iOS.BLEND\_MODE\_SOURCE\_IN instead. |
| Titanium.UI.BLEND\_MODE\_SOURCE\_OUT | property | Use Titanium.UI.iOS.BLEND\_MODE\_SOURCE\_OUT instead. |
| Titanium.UI.BLEND\_MODE\_XOR | property | Use Titanium.UI.iOS.BLEND\_MODE\_XOR instead. |
| Titanium.UI.iOS.3DMatrix | object | Use Titanium.UI.3DMatrix instead. |
| Titanium.UI.iOS.ANIMATION\_CURVE\_EASE\_IN | property | Use Titanium.UI.ANIMATION\_CURVE\_EASE\_IN instead. |
| Titanium.UI.iOS.ANIMATION\_CURVE\_EASE\_IN\_OUT | property | Use Titanium.UI.ANIMATION\_CURVE\_EASE\_IN\_OUT instead. |
| Titanium.UI.iOS.ANIMATION\_CURVE\_EASE\_OUT | property | Use Titanium.UI.ANIMATION\_CURVE\_EASE\_OUT instead. |
| Titanium.UI.iOS.ANIMATION\_CURVE\_LINEAR | property | Use Titanium.UI.ANIMATION\_CURVE\_LINEAR instead. |
| Titanium.UI.iOS.ATTRIBUTE\_BACKGROUND\_COLOR | property | Use the Titanium.UI.ATTRIBUTE\_BACKGROUND\_COLOR constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_BASELINE\_OFFSET | property | Use the Titanium.UI.ATTRIBUTE\_BASELINE\_OFFSET constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_EXPANSION | property | Use the Titanium.UI.ATTRIBUTE\_EXPANSION constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_FONT | property | Use the Titanium.UI.ATTRIBUTE\_FONT constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_FOREGROUND\_COLOR | property | Use the Titanium.UI.ATTRIBUTE\_FOREGROUND\_COLOR constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_KERN | property | Use the Titanium.UI.ATTRIBUTE\_KERN constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_LETTERPRESS\_STYLE | property | Use the Titanium.UI.ATTRIBUTE\_LETTERPRESS\_STYLE constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_LIGATURE | property | Use the Titanium.UI.ATTRIBUTE\_LIGATURE constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_LINK | property | Use the Titanium.UI.ATTRIBUTE\_LINK constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_OBLIQUENESS | property | Use the Titanium.UI.ATTRIBUTE\_OBLIQUENESS constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_SHADOW | property | Use the Titanium.UI.ATTRIBUTE\_SHADOW constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_STRIKETHROUGH\_COLOR | property | Use the Titanium.UI.ATTRIBUTE\_STRIKETHROUGH\_COLOR constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_STRIKETHROUGH\_STYLE | property | Use the Titanium.UI.ATTRIBUTE\_STRIKETHROUGH\_STYLE constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_STROKE\_COLOR | property | Use the Titanium.UI.ATTRIBUTE\_STROKE\_COLOR constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_STROKE\_WIDTH | property | Use the Titanium.UI.ATTRIBUTE\_STROKE\_WIDTH constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_TEXT\_EFFECT | property | Use the Titanium.UI.ATTRIBUTE\_TEXT\_EFFECT constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINES\_STYLE | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINES\_STYLE constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_BY\_WORD | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_BY\_WORD constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_COLOR | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_COLOR constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_PATTERN\_DASH | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_PATTERN\_DASH constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_PATTERN\_DASH\_DOT | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_PATTERN\_DASH\_DOT constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_PATTERN\_DASH\_DOT\_DOT | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_PATTERN\_DASH\_DOT\_DOT constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_PATTERN\_DOT | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_PATTERN\_DOT constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_PATTERN\_SOLID | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_PATTERN\_SOLID constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_STYLE\_DOUBLE | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_STYLE\_DOUBLE constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_STYLE\_NONE | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_STYLE\_NONE constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_STYLE\_SINGLE | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_STYLE\_SINGLE constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_STYLE\_THICK | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_STYLE\_THICK constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_WRITING\_DIRECTION | property | Use the Titanium.UI.ATTRIBUTE\_WRITING\_DIRECTION constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_WRITING\_DIRECTION\_EMBEDDING | property | Use the Titanium.UI.ATTRIBUTE\_WRITING\_DIRECTION\_EMBEDDING constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_WRITING\_DIRECTION\_LEFT\_TO\_RIGHT | property | Use the Titanium.UI.ATTRIBUTE\_WRITING\_DIRECTION\_LEFT\_TO\_RIGHT constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_WRITING\_DIRECTION\_NATURAL | property | Use the Titanium.UI.ATTRIBUTE\_WRITING\_DIRECTION\_NATURAL constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_WRITING\_DIRECTION\_OVERRIDE | property | Use the Titanium.UI.ATTRIBUTE\_WRITING\_DIRECTION\_OVERRIDE constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_WRITING\_DIRECTION\_RIGHT\_TO\_LEFT | property | Use the Titanium.UI.ATTRIBUTE\_WRITING\_DIRECTION\_RIGHT\_TO\_LEFT constant instead (without the iOS namespace). |
| Titanium.UI.iOS.AUTODETECT\_ADDRESS | property | Use Titanium.UI.AUTOLINK\_MAP\_ADDRESSES instead. |
| Titanium.UI.iOS.AUTODETECT\_ALL | property | Use Titanium.UI.AUTOLINK\_ALL instead. |
| Titanium.UI.iOS.AUTODETECT\_CALENDAR | property | Use Titanium.UI.AUTOLINK\_CALENDAR instead. |
| Titanium.UI.iOS.AUTODETECT\_LINK | property | Use Titanium.UI.AUTOLINK\_URLS instead. |
| Titanium.UI.iOS.AUTODETECT\_NONE | property | Use Titanium.UI.AUTOLINK\_NONE instead. |
| Titanium.UI.iOS.AUTODETECT\_PHONE | property | Use Titanium.UI.AUTOLINK\_PHONE\_NUMBERS instead. |
| Titanium.UI.iOS.Attribute | object | use Attribute instead. |
| Titanium.UI.iOS.AttributedString | object | use Titanium.UI.AttributedString instead. |
| Titanium.UI.iOS.create3DMatrix | method | Use Titanium.UI.3DMatrix instead. |
| Titanium.UI.iOS.createAttribute | method | use Attribute instead. |
| Titanium.UI.iOS.createAttributedString | method | use Titanium.UI.AttributedString instead. |
| Titanium.UI.iPad.DocumentViewer | object | Use Titanium.UI.iOS.DocumentViewer instead. |
| Titanium.UI.iPad.SplitWindow | object | Use Titanium.UI.iOS.SplitWindow instead. |
| Titanium.UI.iPad.createDocumentViewer | method | Use Titanium.UI.iOS.DocumentViewer instead. |
| Titanium.UI.iPad.createSplitWindow | method | Use Titanium.UI.iOS.SplitWindow instead. |
| Titanium.UI.iPhone.getStatusBarHidden | method | Use Titanium.UI.Window.fullscreen instead. |
| Titanium.UI.iPhone.getStatusBarStyle | method | Use Titanium.UI.Window.statusBarStyle instead. |
| Titanium.UI.iPhone.statusBarHidden | property | Use Titanium.UI.Window.fullscreen instead. |
| Titanium.UI.iPhone.statusBarStyle | property | Use Titanium.UI.Window.statusBarStyle instead. |
