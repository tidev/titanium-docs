---
title: Titanium SDK 7.3.0.GA - 17 August 2018
weight: '150'
---

# Titanium SDK 7.3.0.GA - 17 August 2018

## About this release

Titanium SDK 7.3.0.GA is a minor release of the SDK, addressing high-priority issues from previous releases.

As of this release, Titanium SDK 7.2.x will not be supported six months from 7.3.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Notice of feature and behavior Changes

### Windows platform

* [TIMOB-26072](https://jira.appcelerator.org/browse/TIMOB-26072) - Windows: Using a ScaleTransform Messes with Events

    * Revised 2DMatrix rotation, scale, and event source

* [TIMOB-26106](https://jira.appcelerator.org/browse/TIMOB-26106) - Windows: Update module apiversion to 6

    * Updated apiversion to use "6" for SDK 7.3.0

### Multiple platforms

* [TIMOB-25992](https://jira.appcelerator.org/browse/TIMOB-25992) - Add default clang-format to the Android/iOS module template

    * Add clang-format to the default modules template

* [TIMOB-26009](https://jira.appcelerator.org/browse/TIMOB-26009) - Update Ti.Map modules (iOS 3.1.0, Android 4.2.0)

    * Updated Ti.Map modules to include the following:

        * Added image overlay and padding support for iOS and Android

        * [Android: Fixed map animation crash
            ](https://jira.appcelerator.org/browse/MOD-2416)

## New features

### Android platform

* [TIMOB-16066](https://jira.appcelerator.org/browse/TIMOB-16066) - Android: Add "foreground" service support

    * Added foreground service support

* [TIMOB-17363](https://jira.appcelerator.org/browse/TIMOB-17363) - Android: Add "Ti.UI.MaskedImage" support

    * Implemented `Ti.UI.MaskedImage`

* [TIMOB-25795](https://jira.appcelerator.org/browse/TIMOB-25795) - Hyperloop: Android - Expose all missing Android R resource types to Ti.Android.R

    * Added support for the following `Ti.Android.R.menu` properties:

        * animator

        * bool

        * fraction

        * interpolator

        * menu

        * mipmap

        * plurals

        * raw

        * transition

        * xml

### iOS platform

* [TIMOB-23527](https://jira.appcelerator.org/browse/TIMOB-23527) - iOS10: Support the UserNotifications framework

    * Added support for UserNotifications framework

* [TIMOB-25302](https://jira.appcelerator.org/browse/TIMOB-25302) - iPhone X: Add new home-indicator related API's

    * Added new home-indicator related APIs

* [TIMOB-25684](https://jira.appcelerator.org/browse/TIMOB-25684) - iOS: Expose UIInterpolatingMotionEffect Horizontal and Vertical

    * Added home screen-like parallax effect to views based on [Marcel Pociot's module](https://github.com/mpociot/TiMotionEffects)

* [TIMOB-26016](https://jira.appcelerator.org/browse/TIMOB-26016) - iOS 11: Expose "showsBackgroundLocationIndicator" property on Ti.Geolocation

    * Added support for `showBackgroundLocationIndicator` property for background location monitoring

### Windows platform

* [TIMOB-25908](https://jira.appcelerator.org/browse/TIMOB-25908) - Windows: require/import with namespace for Hyperloop

    * Added ability to require with namespace

* [TIMOB-25923](https://jira.appcelerator.org/browse/TIMOB-25923) - Windows: More options for Logo / Splash Screen

    * Added more options for logo and splash screens

* [TIMOB-25933](https://jira.appcelerator.org/browse/TIMOB-25933) - Windows: Implement Ti.UI.TextField.padding

    * Implemented `Ti.UI.TextField.padding`

* [TIMOB-25946](https://jira.appcelerator.org/browse/TIMOB-25946) - Windows: Implement Ti.UI.TextArea.padding

    * Implemented `Ti.UI.TextArea.padding`

### Multiple platforms

* [TIMOB-23247](https://jira.appcelerator.org/browse/TIMOB-23247) - CLI: ti clean does not work for native module projects

    * Updated `ti clean` to work with native module projects

    * One should note that with this command update, you need to keep historical version of your module in your `dist` folder in a safe place (e.g. source control). Running this updated command will wipe out anything in the `dist` folder.

    * Best practice: don't use releases as a means of archiving. Releases should be published in a stable location such as Github, S3, etc. But, if you wish to keep old releases in the module, you should consider using a different folder to archive your content in the `dist` folder and commit that zip to your source control before cleaning.

* [TIMOB-24982](https://jira.appcelerator.org/browse/TIMOB-24982) - iOS/Android: Add zoomLevel to Ti.UI.WebView

    * Added `zoomLevel` to `Ti.UI.WebView`

## Community credits

* [Michael Gangolf](https://github.com/m1ga) - [TIMOB-24982](https://jira.appcelerator.org/browse/TIMOB-24982), [TIMOB-25992](https://jira.appcelerator.org/browse/TIMOB-25992), [TIMOB-25418](https://jira.appcelerator.org/browse/TIMOB-25418), [TIMOB-25668](https://jira.appcelerator.org/browse/TIMOB-25668)

* [David Bankier](https://github.com/dbankier) - [TIMOB-25950](https://jira.appcelerator.org/browse/TIMOB-25950)

* [Carlos Henrique Zinato](https://github.com/chmiiller) - [TIMOB-25684](https://jira.appcelerator.org/browse/TIMOB-25684)

* Emmanuel Francis - [TIMOB-26016](https://jira.appcelerator.org/browse/TIMOB-26016)

* [Dawson Toth](https://github.com/dawsontoth) - [TIMOB-5996](https://jira.appcelerator.org/browse/TIMOB-5996)

* Campbell Anderson - [TIMOB-17889](https://jira.appcelerator.org/browse/TIMOB-17889)

* Joren Vos - [TIMOB-25917](https://jira.appcelerator.org/browse/TIMOB-25917)

* Yahya Muhammad Uddin - [TIMOB-25819](https://jira.appcelerator.org/browse/TIMOB-25819)

* [Luc-Edmond Gaspard](https://github.com/gaspardle) - [TIMOB-26187](https://jira.appcelerator.org/browse/TIMOB-26187)

## Fixed issues

### Android platform

* [TIMOB-15249](https://jira.appcelerator.org/browse/TIMOB-15249) - Android: TableView header and footer cannot be removed or resized dynamically

* [TIMOB-15780](https://jira.appcelerator.org/browse/TIMOB-15780) - Android: ScrollableView.setCurrentPage() fires "scrollend" event when it shouldn't

* [TIMOB-16596](https://jira.appcelerator.org/browse/TIMOB-16596) - Android: Animation anchorPoints not working

* [TIMOB-16878](https://jira.appcelerator.org/browse/TIMOB-16878) - Android: ScrollableView ignores root child view's layout properties

* [TIMOB-19822](https://jira.appcelerator.org/browse/TIMOB-19822) - Android: Picker spinner columns and its items are not sized/positioned correctly on Android 5.0 and higher

* [TIMOB-20367](https://jira.appcelerator.org/browse/TIMOB-20367) - Android: TiHTTPClient leaking files when response > 512K

* [TIMOB-24138](https://jira.appcelerator.org/browse/TIMOB-24138) - Android: TextField/TextArea should not receive focus by default when a window is opened

* [TIMOB-25219](https://jira.appcelerator.org/browse/TIMOB-25219) - Android: FileNotFoundExceptions should not be inside the Titanium log

* [TIMOB-25231](https://jira.appcelerator.org/browse/TIMOB-25231) - Android: Ti.Filesystem.resourcesDirectory returns different list on device

* [TIMOB-25431](https://jira.appcelerator.org/browse/TIMOB-25431) - Android: java.lang.ClassCastException: ti.modules.titanium.ui.widget.TiUILabel$1 cannot be cast to android.view.ViewGroup;

* [TIMOB-25503](https://jira.appcelerator.org/browse/TIMOB-25503) - Android: can not use a CardView inside an ItemTemplate

* [TIMOB-25539](https://jira.appcelerator.org/browse/TIMOB-25539) - Android: ScrollableView with border crashes as of 6.1.0

* [TIMOB-25625](https://jira.appcelerator.org/browse/TIMOB-25625) - Android: ScrollableView left/right page arrows are not density scaled

* [TIMOB-25626](https://jira.appcelerator.org/browse/TIMOB-25626) - Android: ScrollableView Ti.UI.SIZE is ignored for width

* [TIMOB-25634](https://jira.appcelerator.org/browse/TIMOB-25634) - Android: ScrollableView "cacheSize" cannot by dynamically changed

* [TIMOB-25636](https://jira.appcelerator.org/browse/TIMOB-25636) - Android: Calling ScrollableView's setters causes a crash if parent window is closed as of 7.0.0

* [TIMOB-25685](https://jira.appcelerator.org/browse/TIMOB-25685) - Android: TabGroup 'close' event is never fired

* [TIMOB-25755](https://jira.appcelerator.org/browse/TIMOB-25755) - Android: WebView should prompt user for client certificate if requested by server

* [TIMOB-25770](https://jira.appcelerator.org/browse/TIMOB-25770) - Android: requestThumbnailImagesAtTimes() does not work with remote content

* [TIMOB-25792](https://jira.appcelerator.org/browse/TIMOB-25792) - Android: Scrolling horizontal ScrollView within a vertical ScrollView should disable vertical scrolling

* [TIMOB-25805](https://jira.appcelerator.org/browse/TIMOB-25805) - Android: appc info show a leading 0 before NDK Path

* [TIMOB-25819](https://jira.appcelerator.org/browse/TIMOB-25819) - Android: ScrollView starts at the wrong location if it contains a ListView

* [TIMOB-25826](https://jira.appcelerator.org/browse/TIMOB-25826) - Android: Error requiring a file by relative path where module.exports is a falsey value

* [TIMOB-25835](https://jira.appcelerator.org/browse/TIMOB-25835) - Android: Animation with border radius doesn't works properly

* [TIMOB-25867](https://jira.appcelerator.org/browse/TIMOB-25867) - Android: Running an application through CLI flickers it's main activity at launch.

* [TIMOB-25869](https://jira.appcelerator.org/browse/TIMOB-25869) - Android: Sending Push results in a crash

* [TIMOB-25888](https://jira.appcelerator.org/browse/TIMOB-25888) - Android: getEventsBetweenDates() crashes

* [TIMOB-25910](https://jira.appcelerator.org/browse/TIMOB-25910) - Android: Memory leak when using TextFields in TableView rows

* [TIMOB-25919](https://jira.appcelerator.org/browse/TIMOB-25919) - Android: OptionDialog not firing "click" event for cancel button like iOS

* [TIMOB-25964](https://jira.appcelerator.org/browse/TIMOB-25964) - Android: Merge manifest of Android Libraries

* [TIMOB-25970](https://jira.appcelerator.org/browse/TIMOB-25970) - Android: 'postlayout' event not working for Picker with type Titanium.UI.PICKER\_TYPE\_DATE

* [TIMOB-25974](https://jira.appcelerator.org/browse/TIMOB-25974) - Android: Ti.Geolocation updates rarely on Android 8.0 while app is backgrounded

* [TIMOB-25977](https://jira.appcelerator.org/browse/TIMOB-25977) - Android: AlertDialog not firing "click" event when canceled

* [TIMOB-25990](https://jira.appcelerator.org/browse/TIMOB-25990) - Android apps crash when trying to add views to Titanium.Media.VideoPlayer objects if fullscreen property is set to true.

* [TIMOB-26010](https://jira.appcelerator.org/browse/TIMOB-26010) - Android: TiHTTPClient getResponseHeader throws a NullPointerException

* [TIMOB-26055](https://jira.appcelerator.org/browse/TIMOB-26055) - Android: Build fails due to invalid character '$' in android manifest with facebook & liveview with 7.3.0 SDK

* [TIMOB-26126](https://jira.appcelerator.org/browse/TIMOB-26126) - Android: Update emulator tooling path

* [TIMOB-26131](https://jira.appcelerator.org/browse/TIMOB-26131) - Android: SDK is wrongly adding core "Google Play Services" libraries as of 7.1.0

* [TIMOB-26134](https://jira.appcelerator.org/browse/TIMOB-26134) - Android: Crashes when importing Ti.CloudPush in 7.2.0 SDK

* [TIMOB-26151](https://jira.appcelerator.org/browse/TIMOB-26151) - [Ti.Platform.id](http://Ti.Platform.id) not working on Android in 7.2.0.GA (works on 7.1.1.GA)

* [TIMOB-26157](https://jira.appcelerator.org/browse/TIMOB-26157) - Android: A semi-transparent or modal Window with a fixed orientation crashes on Android 8

* [TIMOB-26163](https://jira.appcelerator.org/browse/TIMOB-26163) - Android: Ti.Geolocation - Exception when using FusedLocationProvider

* [TIMOB-26167](https://jira.appcelerator.org/browse/TIMOB-26167) - Android: Cannot edit TextField/TextArea while in a ScrollView as of 7.3.0

* [TIMOB-26172](https://jira.appcelerator.org/browse/TIMOB-26172) - Android: "focus" and "blur" events bubbles to parent views when it shouldn't

* [TIMOB-26187](https://jira.appcelerator.org/browse/TIMOB-26187) - Android: CardView not visible when borderRadius is set

* [TIMOB-26242](https://jira.appcelerator.org/browse/TIMOB-26242) - Android: Change in memory behavior

### iOS platform

* [TIMOB-16597](https://jira.appcelerator.org/browse/TIMOB-16597) - iOS: Can't create modal transparent Window

* [TIMOB-17235](https://jira.appcelerator.org/browse/TIMOB-17235) - iOS: Window in tabGroup flicker on first open

* [TIMOB-23183](https://jira.appcelerator.org/browse/TIMOB-23183) - iOS Non-public API usage: The app references non-public symbols in `<APPLICATION NAME> : _ptrace`

* [TIMOB-24206](https://jira.appcelerator.org/browse/TIMOB-24206) - iOS: Memory leaks after select camera or photo gallery with jscore framework

* [TIMOB-25314](https://jira.appcelerator.org/browse/TIMOB-25314) - iOS: camera with overlay view is zoomed

* [TIMOB-25566](https://jira.appcelerator.org/browse/TIMOB-25566) - iOS: VideoPlayer showsControls false does if url is set after creation

* [TIMOB-25744](https://jira.appcelerator.org/browse/TIMOB-25744) - iOS: Uploaded file persists in memory when using JSCore

* [TIMOB-25775](https://jira.appcelerator.org/browse/TIMOB-25775) - iOS: Cannot get gradient properties after creation

* [TIMOB-25785](https://jira.appcelerator.org/browse/TIMOB-25785) - iOS: Sending events that cannot be serialized fail on SDK 7.0.0+

* [TIMOB-25801](https://jira.appcelerator.org/browse/TIMOB-25801) - iOS: SDK 7.0.2.GA - VideoPlayer playback issues

* [TIMOB-25836](https://jira.appcelerator.org/browse/TIMOB-25836) - iOS: Using "run-on-main-thread", multiple global event listeners do not work

* [TIMOB-25842](https://jira.appcelerator.org/browse/TIMOB-25842) - iOS: Cannot remove Ti.App.iOS.handleurl event-listener

* [TIMOB-25874](https://jira.appcelerator.org/browse/TIMOB-25874) - iOS 11.2: Ti.UI.RefreshControl with Ti.UI.Window.largeTitleEnabled hides spinner

* [TIMOB-25883](https://jira.appcelerator.org/browse/TIMOB-25883) - "Callback was already called." error thrown when source contains syntax error and transpiling

* [TIMOB-25897](https://jira.appcelerator.org/browse/TIMOB-25897) - iOS: Ti.UI.iOS.Stepper handles "value" boundaries incorrect

* [TIMOB-25906](https://jira.appcelerator.org/browse/TIMOB-25906) - iOS: Native exceptions not thrown when using run-on-main-thread

* [TIMOB-25916](https://jira.appcelerator.org/browse/TIMOB-25916) - iOS: Ti.UI.VideoPlayer ignores changes to the "scalingMode" property

* [TIMOB-26033](https://jira.appcelerator.org/browse/TIMOB-26033) - iOS: Ti.Media.VideoPlayer shows an error on Window Close on SDK 7.1.1.GA

* [TIMOB-26062](https://jira.appcelerator.org/browse/TIMOB-26062) - iOS: Analyzer warnings after recent changes

### Windows platform

* [TIMOB-25306](https://jira.appcelerator.org/browse/TIMOB-25306) - Windows: touchEnabled property of Ti.UI.Picker does not work

* [TIMOB-25542](https://jira.appcelerator.org/browse/TIMOB-25542) - Windows: Incorrect event's [source.id](http://source.id/) on Windows 10 Mobile

* [TIMOB-25563](https://jira.appcelerator.org/browse/TIMOB-25563) - Windows: TableViewRow click event should contain rowData

* [TIMOB-25918](https://jira.appcelerator.org/browse/TIMOB-25918) - Windows: Splash Screen and App Icon assets not working correctly

* [TIMOB-25989](https://jira.appcelerator.org/browse/TIMOB-25989) - Windows: Unit specifier is ignored for font size

* [TIMOB-26036](https://jira.appcelerator.org/browse/TIMOB-26036) - Windows: Disabling Ti.View does not disable its childrenå

* [TIMOB-26045](https://jira.appcelerator.org/browse/TIMOB-26045) - Windows: 2DMatrix rotation scales view

* [TIMOB-26085](https://jira.appcelerator.org/browse/TIMOB-26085) - Windows: 2DMatrix should scale from center

* [TIMOB-26086](https://jira.appcelerator.org/browse/TIMOB-26086) - Windows: Wrong event source after scaling with 2DMatrix

* [TIMOB-26139](https://jira.appcelerator.org/browse/TIMOB-26139) - Windows: Unable to build to device when using Windows SDK 15063 and newer tooling is installed

* [TIMOB-26150](https://jira.appcelerator.org/browse/TIMOB-26150) - Windows: Scale Transform Events ([source.id](http://source.id)) is still \`overlay\`

* [TIMOB-26152](https://jira.appcelerator.org/browse/TIMOB-26152) - Windows: ScrollView doesn't return correct event source

### Multiple platforms

* [TIMOB-26108](https://jira.appcelerator.org/browse/TIMOB-26108) - CLI: "clean" command builds the project instead

* [TIMOB-26209](https://jira.appcelerator.org/browse/TIMOB-26209) - CLI: If any Xcode installs don't have EULA accepted (even one not being used), build won't work

* [TIMOB-26233](https://jira.appcelerator.org/browse/TIMOB-26233) - Hyperloop: Incompatibility with 7\_3\_X RC

## Improvements

### Android platform

* [TIMOB-5996](https://jira.appcelerator.org/browse/TIMOB-5996) - Android: Modify ScrollableView.removeView() to support integer indexes

    * Implemented `ScrollableView.removeView()` to support integer indexes

* [TIMOB-17889](https://jira.appcelerator.org/browse/TIMOB-17889) - TiConvert toBoolean doesnt handle type Interger

    * Added support for integer to boolean conversion

* [TIMOB-24707](https://jira.appcelerator.org/browse/TIMOB-24707) - Android: Add video support to Ti.Media.openPhotoGallery()

    * Added video support to `Ti.Media.openPhotoGallery()`

* [TIMOB-25418](https://jira.appcelerator.org/browse/TIMOB-25418) - Android: Module build will fail if documentation folder contains non-markdown files

    * Fixed documentation generation for non-markdown files

* [TIMOB-25667](https://jira.appcelerator.org/browse/TIMOB-25667) - Android: Add TableView "scrollable" property support

    * Added support for `scrollable` property in `TableView`

* [TIMOB-25668](https://jira.appcelerator.org/browse/TIMOB-25668) - Android: HintTextColor for SearchView

    * Added `hintTextColor` to `Ti.UI.Android.SearchView`

* [TIMOB-25844](https://jira.appcelerator.org/browse/TIMOB-25844) - Android: Update splash screen and icon

    * Updated Android's splash screen and icon to newer assets on iOS

* [TIMOB-25852](https://jira.appcelerator.org/browse/TIMOB-25852) - Android: Target API Level 26/27 by default

    * Increased max API Level supported to 27 (Android 8.1)

* [TIMOB-25860](https://jira.appcelerator.org/browse/TIMOB-25860) - Update Android Support libraries to 27.1.1

    * Updated Android Support libraries to version 27.1.1

* [TIMOB-25864](https://jira.appcelerator.org/browse/TIMOB-25864) - Android: Notifications should use default channel on Android 8 if not assigned

    * Set default notification channel to `NotificationChannel.DEFAULT_CHANNEL_ID` to `miscellaneous`

* [TIMOB-25865](https://jira.appcelerator.org/browse/TIMOB-25865) - Android: Build warning appears when Android build-tools v27 or higher is installed

    * Updated the CLI to use the defined Android version

* [TIMOB-25917](https://jira.appcelerator.org/browse/TIMOB-25917) - Android: Allow picker minDate/maxDate properties to be set dynamically

    * Fixed `minDate` and `maxDate` properties

* [TIMOB-25931](https://jira.appcelerator.org/browse/TIMOB-25931) - Android: Update Multi-Dex support library

    * Updated multidex support library

* [TIMOB-25937](https://jira.appcelerator.org/browse/TIMOB-25937) - Android: Horizontal TextField scrolling should not be canceled by scrollable parent view

    * Improved nested horizontal scrolling support

* [TIMOB-25939](https://jira.appcelerator.org/browse/TIMOB-25939) - Android: Improve horizontal ScrollView scrolling that is set up with a RefreshControl

    * Improved nested horizontal scrolling support

* [TIMOB-25963](https://jira.appcelerator.org/browse/TIMOB-25963) - Android: Implement method to obtain current stack trace from V8

    * Improved KrollRuntime error output

* [TIMOB-25965](https://jira.appcelerator.org/browse/TIMOB-25965) - Android: Update old exception dialog

    * Improved KrollRuntime error output

* [TIMOB-26006](https://jira.appcelerator.org/browse/TIMOB-26006) - Android: Reduce V8 library size

    * Optimized libkroll-v8 size

* [TIMOB-26051](https://jira.appcelerator.org/browse/TIMOB-26051) - Android: Ti.UI.createRefreshControl.beginRefreshing() does not fire 'refreshstart'

    * Fixed issue with `beginRefreshing()` does not fire the `refreshstart` event

* [TIMOB-26068](https://jira.appcelerator.org/browse/TIMOB-26068) - Android: set Toolbar's default width to match iOS behavior

    * Set the default width of toolbar to `Ti.UI.FILL` to match the iOS behavior of the component

* [TIMOB-26102](https://jira.appcelerator.org/browse/TIMOB-26102) - Android: Push notifications should create default channel if not assigned when targeting Android 8

    * Updated push notifications on Android 8+

* [TIMOB-26240](https://jira.appcelerator.org/browse/TIMOB-26240) - Android: Remove harmless activity errors/warnings logged on startup

    * Removed `null` activity error/warning log messages

        * The caller should decide if they should be logged

        * It's okay for these methods to return `null` if there are no activities, such as when the app was launched in the background via a `BroadcastReceiver`

    * Changed TiApplication.getInstance() handling:

        * Changed "tiApp" from weak reference to strong. Guaranteed to exist for lifetime of app, so, it was unnecessary.

        * Removed TiApplication.getInstance() null checks

* [TIMOB-26250](https://jira.appcelerator.org/browse/TIMOB-26250) - Android: Allow activity "android:launchMode" attribute to be set in "tiapp.xml"

    * Reverses change made in [Titanium 6.1.0](/guide/Titanium_SDK/Titanium_SDK_Release_Notes/Titanium_SDK_Release_Notes_6.x/Titanium_SDK_6.1.0.GA_Release_Note/) where "launchMode" setting was ignored

### iOS platform

* [TIMOB-23888](https://jira.appcelerator.org/browse/TIMOB-23888) - iOS 10: UIApplication openURL has been deprecated

    * Implemented asynchronous openURL API on iOS 10+

* [TIMOB-24266](https://jira.appcelerator.org/browse/TIMOB-24266) - iOS: Be able to receive native delegates from app to native modules / Hyperloop

    * Added support to receive native delegates from your app to native modules and/or Hyperloop

* [TIMOB-25522](https://jira.appcelerator.org/browse/TIMOB-25522) - iOS: Expose navigation-window instance property to Ti.UI.Window

    * Implemented `navigationWindow` property to `Ti.UI.Window`

* [TIMOB-25950](https://jira.appcelerator.org/browse/TIMOB-25950) - iOS: setUnselectedItemTintColor is unrecognized in iOS9

    * Added feature that ignores `unselectedItemTintColor` on iOS9 and earlier

* [TIMOB-26007](https://jira.appcelerator.org/browse/TIMOB-26007) - iOS: Refactor RSOD

    * Refactored crash dialog

* [TIMOB-26021](https://jira.appcelerator.org/browse/TIMOB-26021) - iOS: Search results table-view background color change

    * Fixed issue with search results table-view background color change

* [TIMOB-26066](https://jira.appcelerator.org/browse/TIMOB-26066) - node-ios-device: Support Xcode 9 and Node.js 10

    * Added support for Xcode 9 and node.js 10

### Windows platform

* [TIMOB-24856](https://jira.appcelerator.org/browse/TIMOB-24856) - Windows: Implement bubbleParent property

    * Implemented `bubbleParent` property

* [TIMOB-26028](https://jira.appcelerator.org/browse/TIMOB-26028) - Windows: Add Ti.Filesystem.File parity across platforms

    * Added `Ti.Filesystem.File` across iOS and Android

* [TIMOB-26048](https://jira.appcelerator.org/browse/TIMOB-26048) - Windows: Refactor RSOD

    * Refactored the crash dialog screen to match the iOS/Android appearance

### Multiple platforms

* [TIMOB-26022](https://jira.appcelerator.org/browse/TIMOB-26022) - TiAPI: Add Ti.Buffer parity across platforms

    * Added `Ti.Buffer` parity across iOS and Android

* [TIMOB-26025](https://jira.appcelerator.org/browse/TIMOB-26025) - TiAPI: Add Ti.Filesystem.File parity across platforms

    * Added `Ti.Filesystem.File` parity across iOS and Android

## API changes

### New APIs

The following APIs are new or have expanded platform support in Release 7.3.0 as of August 17th, 2018.

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

The following APIs are deprecated in Release 7.3.0 as of August 17th, 2018.

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

## Sample app for Titanium 7.3.0

We've developed a sample for showing the newest features introduced in Titanium SDK 7.3.0. Of course this is not everything introduced in 7.3.0 but it does give a good overview of the features mentioned in this release. See **[Sample App](https://github.com/appcelerator-developer-relations/appc-sample-ti730/blob/master/README.md)** for details and download instructions.
