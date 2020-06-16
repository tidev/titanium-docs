---
title: Titanium SDK 5.4.0.GA - 10 August 2016
weight: '50'
---

# Titanium SDK 5.4.0.GA - 10 August 2016

## Contents

## About This Release

Titanium SDK 5.4.0.GA is a major release of the SDK, addressing high-priority issues from previous releases as well as new features for iOS, Android and Windows.

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

    * Added support for titleid/textid for Label, Button, Tab, AlertDialog and OptionDialog

### Other

* [CLI-875](https://jira.appcelerator.org/browse/CLI-875) - appc use command should allow --prerelease option

    * The `appc use` command allows you to use prelease versions by using the `--prerelease` flag

* [TIMOB-16879](https://jira.appcelerator.org/browse/TIMOB-16879) - ScrollableView: Add "insertViewsAt()" method

    * Added support for insertViewsAt() method

* [TIMOB-23145](https://jira.appcelerator.org/browse/TIMOB-23145) - Enable run-on-main-thread by default for new projects

    * Enabled run-on-main-thread to be enabled by default

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

## Fixed Issues

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

* [CLI-1066](https://jira.appcelerator.org/browse/CLI-1066) - Hyperloop: If you have an older version of Hyperloop in your module global space, you cannot get the newer Hyperloop version

* [CLI-1067](https://jira.appcelerator.org/browse/CLI-1067) - We don't see "Would you like to enable hyperloop for the app" prompt while enabling services for new app

* [CLI-1068](https://jira.appcelerator.org/browse/CLI-1068) - Windows: A iPhone module folder is downloaded for Windows OS

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

    * Extended `logCustomEvent`with additional arguments in Ti.Facebook

* [TIMOB-23530](https://jira.appcelerator.org/browse/TIMOB-23530) - Hyperloop - IPHONEOS\_DEPLOYMENT\_TARGET of 7.0 despite value of min-ios-ver in tiapp.xml

## Known Issues

* Hyperloop (1.2.5) does not support debugger at this time ([TIMOB-23628](https://jira.appcelerator.org/browse/TIMOB-23628))

* [TIMOB-23613](https://jira.appcelerator.org/browse/TIMOB-23613): When building [https://github.com/appcelerator/hyperloop-examples](https://github.com/appcelerator/hyperloop-examples) on Windows the build process fails

* When building a project on Windows using appc run from the same directory as an appc.js file the build process will not begin and instead you will be prompted to select the application to open the appc.js in or the file will automatically open depending on your settings ([CLI-1038](https://jira.appcelerator.org/browse/CLI-1038))

* The prepackaged ti.facebook Android module (5.2.0) can crash during build time ([MOD-2283](https://jira.appcelerator.org/browse/MOD-2283)). Workaround: Use the re-packaged version from the [Github page](https://github.com/appcelerator-modules/ti.facebook/releases/tag/android-5.2.0) instead.

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
