---
title: Titanium SDK 6.2.0.GA -  13 September 2017
weight: '50'
---

# Titanium SDK 6.2.0.GA - 13 September 2017

## Contents

## About this release

Titanium SDK 6.2.0.GA is a minor release of the SDK, addressing high-priority issues from previous releases.

As of this release, Titanium SDK 6.1.x will not be supported six months from 6.2.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## Notice of feature and behavior Changes

### iOS platform

* [TIMOB-24335](https://jira.appcelerator.org/browse/TIMOB-24335) - iOS: Resolve iOS 8 deprecations

    * Replaced deprecated APIs in iOS8 with new APIs as designated by Apple. Those replaced APIs are as follows:

        * Replaced `UISearchDisplayController` with `UISearchController` (API migration required)

        * Replaced `NSDayCalendarUnit` with `NSCalendarUnitDay` (search and replace, easy ones)

        * Replaced `willAnimateRotationToInterfaceOrientation` (used in many places, migration required)

        * Replaced `ABPeoplePickerNavigationController` (in Ti.Contacts, replacement straight forward)

        * Removed old statements (e.g. !TiUtils isIOS8OrGreater)

        * Removed old `UIAlertView` and `UIActionSheetAPI's`

## New features

### Android platform

* [TIMOB-1028](https://jira.appcelerator.org/browse/TIMOB-1028) - Android: Implement AudioRecorder

    * Implemented Android's`MediaRecorder.`Note: this does not match Android's `MediaRecorder` or `AudioRecord` classes in capabilities.

* [TIMOB-1072](https://jira.appcelerator.org/browse/TIMOB-1072) \- Android: Add Ti.UI.RefreshControl (Parity)

    * Added `Ti.UI.RefreshControl` to Android for `ListView` and `TableView`

* [TIMOB-4979](https://jira.appcelerator.org/browse/TIMOB-4979) - Android: Expose "dragstart" and "dragend" event on ScrollView (Parity)

    * Added `dragstart` and `dragend` parity

* [TIMOB-15910](https://jira.appcelerator.org/browse/TIMOB-15910) - Android: Add Navigation Drawer Support

    * Added support for Navigation Drawer

* [TIMOB-17964](https://jira.appcelerator.org/browse/TIMOB-17964) - Android 5.0: Add support for Toolbar

    * Added support for Android 5.0 Toolbar

* [TIMOB-24218](https://jira.appcelerator.org/browse/TIMOB-24218) - Android: Expose Keychain access in Ti.TouchID (Parity with iOS)

    * Added Keychain access in Ti.TouchID parity

* [TIMOB-24501](https://jira.appcelerator.org/browse/TIMOB-24501) - Android N: Implement support for Split screen mode

    * Implemented split screen mode. Apps can be put in split screen mode and it's screen size can be increased or decreased as needed.

* [TIMOB-24503](https://jira.appcelerator.org/browse/TIMOB-24503) - Android N: Implement support for Notification quick action

    * Implemented support for notification quick action

* [TIMOB-24504](https://jira.appcelerator.org/browse/TIMOB-24504) - Android N: Implement support for Bundled notifications

    * Implemented support for bundled notification

* [TIMOB-24514](https://jira.appcelerator.org/browse/TIMOB-24514) - Android N: Implement support for HTTPS for Geolocation

    * Implemented support for HTTPS for geolocation

* [TIMOB-24629](https://jira.appcelerator.org/browse/TIMOB-24629) - Android: Add wakeLock to NotificationManager

    * Implemented wakeLock to `Titanium.Android.Notification`

### iOS platform

* [TIMOB-20557](https://jira.appcelerator.org/browse/TIMOB-20557) - iOS: Allow modules to use third party dynamic libraries

    * Added support to use 3rd party dynamic frameworks

* [TIMOB-24375](https://jira.appcelerator.org/browse/TIMOB-24375) - iOS: Implement "Peek & Pop" for Map view Annotation

    * Implemented Peek and Pop for Map view Annotation

* [TIMOB-24738](https://jira.appcelerator.org/browse/TIMOB-24738) - iOS: Close all Ti.UI.Tab windows at once

    * Added feature that allows iOS users to close all current open windows in a tab window at once

* [TIMOB-24782](https://jira.appcelerator.org/browse/TIMOB-24782) - iOS 11: Support for the ARKit API

    * Added support for ARKit API

### Windows platform

* [TIMOB-19936](https://jira.appcelerator.org/browse/TIMOB-19936) - Windows: Implement Ti.Network.Socket.UDP

    * Implemented `Ti.Network.Socket.UDP` for Windows

* [TIMOB-24611](https://jira.appcelerator.org/browse/TIMOB-24611) - Windows: Reference 3rd party library with `<SDKReference>` & `<PackageDependency>`

    * Added support for `<SDKReference>` and `<PackageDependency>`

* [TIMOB-24749](https://jira.appcelerator.org/browse/TIMOB-24749) - Windows: Implement Ti.UI.ListView.marker event on windows

    * Implemented`ListView.marker`event

* [TIMOB-24802](https://jira.appcelerator.org/browse/TIMOB-24802) - Windows: ListView's scrollToItem scroll position

    * Implement `ListViewAnimationProperties.TOP`

* [TIMOB-24984](https://jira.appcelerator.org/browse/TIMOB-24984) - Windows: Support XAML style templates

    * Added support for XAML style templates

* [TIMOB-24189](https://jira.appcelerator.org/browse/TIMOB-24189) - Windows: Add support for Visual Studio 2017

    * Added support for Visual Studio 2017

## Community credits

The following community members contributed to this release by helping out with the following tickets:

* [Michael](https://github.com/m1ga)

    * [TIMOB-16800](https://jira.appcelerator.org/browse/TIMOB-16800) - TiAPI: TableView - e.rowData returns different results on each platform

    * [TIMOB-25007](https://jira.appcelerator.org/browse/TIMOB-25007) - Android: repeatMode for VideoPlayer (parity)

    * [TIMOB-24988](https://jira.appcelerator.org/browse/TIMOB-24988) - Android: Ti.Network.Cookie isValid() is missing

    * [TIMOB-24629](https://jira.appcelerator.org/browse/TIMOB-24629) - Android: Add wakeLock to NotificationManager

    * [TIMOB-4979](https://jira.appcelerator.org/browse/TIMOB-4979) - Android: Expose "dragstart" and "dragend" event on ScrollView (Parity)

* [David Bankier](https://github.com/dbankier)

    * [TIMOB-24929](https://jira.appcelerator.org/browse/TIMOB-24929) - iOS: Allow the Ti.UI.TabGroup to be made translucent or not

    * [TIMOB-24920](https://jira.appcelerator.org/browse/TIMOB-24920) - Android: Allow selecting stream type in Ti.Media.Sound (instead of always using STREAM\_MUSIC)

* [Luc-Edmond Gaspard](https://github.com/gaspardle)

    * [TIMOB-24659](https://jira.appcelerator.org/browse/TIMOB-24659) - Android: Add support for the roundIcon attribute

* [Mike Butler](https://github.com/realmikebutler)

    * [TIMOB-20156](https://jira.appcelerator.org/browse/TIMOB-20156) - iOS: typedText not returned for Remote Notifications with Text Actions

* [Duy Bao Nguyen](https://github.com/bduyng)

    * [TIMOB-24581](https://jira.appcelerator.org/browse/TIMOB-24581) - Android: WebView: Support setMediaPlaybackRequiresUserGesture setting

## Fixed issues

### Android

* [TIMOB-11856](https://jira.appcelerator.org/browse/TIMOB-11856) - Android: touchEnabled false on child view causes longpress event to fire when clicked

* [TIMOB-12734](https://jira.appcelerator.org/browse/TIMOB-12734) - Android: View.setLayout() does not change the view's layout property

* [TIMOB-12848](https://jira.appcelerator.org/browse/TIMOB-12848) \- Android: Using the camera on certain devices causes the app to crash

* [TIMOB-12996](https://jira.appcelerator.org/browse/TIMOB-12996) - Android: Unexpected layout when adding images and labels to TableViewRow

* [TIMOB-14742](https://jira.appcelerator.org/browse/TIMOB-14742) - Android: backgroundImage loading two times for window and four times for view

* [TIMOB-15097](https://jira.appcelerator.org/browse/TIMOB-15097) - Android: Ti.UI.FILL stretches parent views beyond absolutely-sized parent

* [TIMOB-16082](https://jira.appcelerator.org/browse/TIMOB-16082) - Android: WebView.evalJS always returns null on Android 4.2.2 device

* [TIMOB-17628](https://jira.appcelerator.org/browse/TIMOB-17628) - Android: - ListView: different behavior while calculating height on Android and iOS (parity issue)

* [TIMOB-17792](https://jira.appcelerator.org/browse/TIMOB-17792) - Android: showTimePickerDialog does appear if you didn't added the picker before.

* [TIMOB-17984](https://jira.appcelerator.org/browse/TIMOB-17984) - TextArea set to FILL not wrapping correctly inside a horizontal layout with another sibling

* [TIMOB-18872](https://jira.appcelerator.org/browse/TIMOB-18872) - Actionbar 'icon' property is broken with latest 4.0.0 SDK

* [TIMOB-18914](https://jira.appcelerator.org/browse/TIMOB-18914) - Android: Mark splitActionBar as removed

* [TIMOB-19035](https://jira.appcelerator.org/browse/TIMOB-19035) - Android: Ti.UI.SIZE on ScrollableView not working

* [TIMOB-19536](https://jira.appcelerator.org/browse/TIMOB-19536) - Android: When Multiple Views in horizontal layout, "SIZE" constrains to the full container size, not the remaining available width

* [TIMOB-19598](https://jira.appcelerator.org/browse/TIMOB-19598) - Bug with Ti.UI.SIZE for view height on android

* [TIMOB-19814](https://jira.appcelerator.org/browse/TIMOB-19814) - TI.UI.FILL does not work on Android and Mobile Web

* [TIMOB-20037](https://jira.appcelerator.org/browse/TIMOB-20037) - Wrong Ti.Android.currentActivity in \`open\` handler

* [TIMOB-20267](https://jira.appcelerator.org/browse/TIMOB-20267) - Android: Slider track not show under transaprent image

* [TIMOB-23757](https://jira.appcelerator.org/browse/TIMOB-23757) - Android: TextField goes behind the keyboard when textAlign right position.

* [TIMOB-23826](https://jira.appcelerator.org/browse/TIMOB-23826) - Android: Build fails using build tools higher than 24.0 and Java 1.7

* [TIMOB-23863](https://jira.appcelerator.org/browse/TIMOB-23863) - Item Template in List View blocks Android 5 ripple animation

* [TIMOB-24363](https://jira.appcelerator.org/browse/TIMOB-24363) - Android: Prevent 'duplicate entry assets/README' error

* [TIMOB-24460](https://jira.appcelerator.org/browse/TIMOB-24460) - Android: TextField with passwordMask fires unwanted \`change\` event

* [TIMOB-24465](https://jira.appcelerator.org/browse/TIMOB-24465) - Android: ImageView quality (gradient banding)

* [TIMOB-24495](https://jira.appcelerator.org/browse/TIMOB-24495) - textfield/textarea editable:false is not working on Android.

* [TIMOB-24560](https://jira.appcelerator.org/browse/TIMOB-24560) - Index is not refreshed on click of tableviewrow item in Android 7.0

* [TIMOB-24607](https://jira.appcelerator.org/browse/TIMOB-24607) - Android: Network connectivity change event is called initially when there is no change

* [TIMOB-24655](https://jira.appcelerator.org/browse/TIMOB-24655) - Android: Wrong rendering when using borderRadius and opacity on the same view element

* [TIMOB-24695](https://jira.appcelerator.org/browse/TIMOB-24695) - Android: ImageView.image fails when URL contains multiple question marks

* [TIMOB-24702](https://jira.appcelerator.org/browse/TIMOB-24702) - Android: Accessing 'size' & 'rect' button properties after activity.finish() crashes the app with java.lang.NullPointerException

* [TIMOB-24822](https://jira.appcelerator.org/browse/TIMOB-24822) - Android: TableView with sections will error on Android N

* [TIMOB-24834](https://jira.appcelerator.org/browse/TIMOB-24834) - Android: Duplicate resource error with multiple app\_name definitions

* [TIMOB-24849](https://jira.appcelerator.org/browse/TIMOB-24849) - Android: ListView items with border would not render correctly when scrolling

* [TIMOB-24898](https://jira.appcelerator.org/browse/TIMOB-24898) - Android: setting view.borderRadius causes backgroundColor alpha to be ignored

* [TIMOB-24900](https://jira.appcelerator.org/browse/TIMOB-24900) - Android: Unable to build to Android 8.0 devices or emulators

* [TIMOB-24903](https://jira.appcelerator.org/browse/TIMOB-24903) - Android: "touchFeedback" not working if borderRadius is set

* [TIMOB-24912](https://jira.appcelerator.org/browse/TIMOB-24912) - Android: Running a module after it was built fails on Windows.

* [TIMOB-24930](https://jira.appcelerator.org/browse/TIMOB-24930) - Android: Module build process errors out if no NDK path is set

* [TIMOB-24940](https://jira.appcelerator.org/browse/TIMOB-24940) - Android: Problem with setTimeout and Toolbar on API 16/17

* [TIMOB-24949](https://jira.appcelerator.org/browse/TIMOB-24949) - Android: Duplicate '%' in log output

* [TIMOB-25020](https://jira.appcelerator.org/browse/TIMOB-25020) - Android: requestThumbnailImagesAtTimes causes a crash

* [TIMOB-25158](https://jira.appcelerator.org/browse/TIMOB-25158) - Android: TableView.rightImage incorrect size

* [TIMOB-25173](https://jira.appcelerator.org/browse/TIMOB-25173) - Android: Size/Fill layout conflicts are not handled the same as iOS and Windows

* [TIMOB-25184](https://jira.appcelerator.org/browse/TIMOB-25184) - Android: Tableview row title gets messed up after scrolling on android 7.0 & above

* [TIMOB-25186](https://jira.appcelerator.org/browse/TIMOB-25186) - Android: Crash when clicking on label with SpannedString content

* [TIMOB-25193](https://jira.appcelerator.org/browse/TIMOB-25193) - Android: Touches are not shown/intercepted if center of the tableViewRow are clicked

* [TIMOB-25206](https://jira.appcelerator.org/browse/TIMOB-25206) - Android: Unable to use some native modules with 6.2.0

* [TIMOB-25218](https://jira.appcelerator.org/browse/TIMOB-25218) - Docs: Android Toolbar example broken

* [TIMOB-25220](https://jira.appcelerator.org/browse/TIMOB-25220) - Android: ImageView doesn't accept File

* [TIMOB-25221](https://jira.appcelerator.org/browse/TIMOB-25221) - Android: Vertical Layout with top+bottom broken

* [TIMOB-25222](https://jira.appcelerator.org/browse/TIMOB-25222) - Android: Nested views with Ti.UI.FILL in width/height is not visible

* [TIMOB-25223](https://jira.appcelerator.org/browse/TIMOB-25223) - Android: ListView in front of other views (wrong z-order)

* [TIMOB-25252](https://jira.appcelerator.org/browse/TIMOB-25252) - Android: Scrolling with headerView causes app to crash

### iOS

* [TIMOB-14565](https://jira.appcelerator.org/browse/TIMOB-14565) - iOS: "font" property does not return to default when set to null or {}

* [TIMOB-16622](https://jira.appcelerator.org/browse/TIMOB-16622) - iOS: ListView with SearchBar under NavigationWindow with extendEdges fails to position properly.

* [TIMOB-18301](https://jira.appcelerator.org/browse/TIMOB-18301) - iOS: linearVelocityForItem method for Titanium.UI.iOS.DynamicItemBehavior fails

* [TIMOB-20016](https://jira.appcelerator.org/browse/TIMOB-20016) - iOS: Ti.UI.Slider.setValue(val, {animated:true}) fails with error

* [TIMOB-20156](https://jira.appcelerator.org/browse/TIMOB-20156) - iOS: typedText not returned for Remote Notifications with Text Actions

* [TIMOB-20272](https://jira.appcelerator.org/browse/TIMOB-20272) - iOS: Interactive notifications with activationMode background don't work when app is not already in memory

* [TIMOB-23436](https://jira.appcelerator.org/browse/TIMOB-23436) - iOS: ListView Control's height not setting correctly

* [TIMOB-24349](https://jira.appcelerator.org/browse/TIMOB-24349) - iOS: Ti.UI.AlertDialog Not Firing Events Consistently (run-on-main-thread)

* [TIMOB-24368](https://jira.appcelerator.org/browse/TIMOB-24368) - Ti.TouchID module accessibilityMode constants not working as expected

* [TIMOB-24648](https://jira.appcelerator.org/browse/TIMOB-24648) - iOS: Network Activity Indicator does not work for Synchronous Requests

* [TIMOB-24773](https://jira.appcelerator.org/browse/TIMOB-24773) - iOS 11: Cannot find any iOS 11 simulators

* [TIMOB-24798](https://jira.appcelerator.org/browse/TIMOB-24798) - iOS: Cannot Ad Hoc package with Xcode 9

* [TIMOB-24916](https://jira.appcelerator.org/browse/TIMOB-24916) - iOS Application crashes when "Ti.Geolocation.getLastGeolocation" is called before a geoLocation is set

* [TIMOB-25003](https://jira.appcelerator.org/browse/TIMOB-25003) - iOS: Deprecate Ti.UI.iOS.Toolbar, create parity with Android, change Alloy to handle both

* [TIMOB-25046](https://jira.appcelerator.org/browse/TIMOB-25046) - iOS: Peek and Pop functionality not working with 6.1.0 G.A and above

* [TIMOB-25180](https://jira.appcelerator.org/browse/TIMOB-25180) - iOS: App fails to compile on any version of macOS using case sensitive journalling

* [TIMOB-25210](https://jira.appcelerator.org/browse/TIMOB-25210) - iOS: Cannot submit builds with iOS 11 / Xcode 9 due to missing "Marketing Image"

* [TIMOB-25217](https://jira.appcelerator.org/browse/TIMOB-25217) - iOS: WebView "fireEvent" causes app crash on 6.2.0.RC

* [TIMOB-25227](https://jira.appcelerator.org/browse/TIMOB-25227) - iOS: Building app with module that contains a framework fails on 6.2.0

* [TIMOB-25244](https://jira.appcelerator.org/browse/TIMOB-25244) - iOS: Framework hook passes wrong data back to builder

### Windows

* [TIMOB-23714](https://jira.appcelerator.org/browse/TIMOB-23714) - Windows: Calling Ti.Contacts.Group.members() errors with 'Can't find variable: memberIdentifiers'

* [TIMOB-24533](https://jira.appcelerator.org/browse/TIMOB-24533) - Windows: WebView does not set html property

* [TIMOB-24569](https://jira.appcelerator.org/browse/TIMOB-24569) - Windows: Add support for Visual Studio 2017 (26403.03)

* [TIMOB-24627](https://jira.appcelerator.org/browse/TIMOB-24627) - Windows CLI: Build process errors out with Error: Cannot find module Error: Cannot find module 'titanium-sdk/lib/builder'

* [TIMOB-24668](https://jira.appcelerator.org/browse/TIMOB-24668) - Windows: ti info should not list being unable to find VS2017 install DLL as an issue

* [TIMOB-24674](https://jira.appcelerator.org/browse/TIMOB-24674) - Windows: require call in node\_modules directory fails to find module

* [TIMOB-24683](https://jira.appcelerator.org/browse/TIMOB-24683) - childprocess.spawn() BAD ARGUMENT : problem with Windows Phone SDK

* [TIMOB-24814](https://jira.appcelerator.org/browse/TIMOB-24814) - Windows: Label's width/height doesn't recalculate right when it contained in View with set width/height

* [TIMOB-24825](https://jira.appcelerator.org/browse/TIMOB-24825) - Windows: Ti.UI.View.center is incorrectly calculated

* [TIMOB-24827](https://jira.appcelerator.org/browse/TIMOB-24827) - Windows: TableView headerView does not size correctly when tableview has a smaller width

* [TIMOB-24828](https://jira.appcelerator.org/browse/TIMOB-24828) - Windows: Unexpected layout for second UI element in a View

* [TIMOB-24831](https://jira.appcelerator.org/browse/TIMOB-24831) - Windows: Layout does not seem to consider left and right properties

* [TIMOB-24833](https://jira.appcelerator.org/browse/TIMOB-24833) - Windows: Setting height to auto on a tableview with many rows breaks scrolling

* [TIMOB-24836](https://jira.appcelerator.org/browse/TIMOB-24836) - Windows: Unable to call updateRow with an already existing row

* [TIMOB-24838](https://jira.appcelerator.org/browse/TIMOB-24838) - Windows: Ti.App.Properties getList and getObject don't work properly when we set a default value.

* [TIMOB-24847](https://jira.appcelerator.org/browse/TIMOB-24847) - Windows: borderRadius does not work with text values

* [TIMOB-24848](https://jira.appcelerator.org/browse/TIMOB-24848) - Windows: ListView template with left and right defined causes crash

* [TIMOB-24861](https://jira.appcelerator.org/browse/TIMOB-24861) - Windows: Setting data before seperatorColor on TableView errors out

* [TIMOB-24869](https://jira.appcelerator.org/browse/TIMOB-24869) - Windows: ShowCamera should not write image to photoGallery by default

* [TIMOB-24873](https://jira.appcelerator.org/browse/TIMOB-24873) - Windows: Ti.UI.Window.open({fullscreen: true}) has no effect

* [TIMOB-24883](https://jira.appcelerator.org/browse/TIMOB-24883) - Windows: Incorrect child view size when parent view has border

* [TIMOB-24893](https://jira.appcelerator.org/browse/TIMOB-24893) - Windows: onreadystatechange should not be called on the UI thread

* [TIMOB-24894](https://jira.appcelerator.org/browse/TIMOB-24894) - Windows: Ti.App.Properties.get\* should all be able to return null

* [TIMOB-24908](https://jira.appcelerator.org/browse/TIMOB-24908) - Windows: Unable to build when using SDK 10.0.15063.0

* [TIMOB-24915](https://jira.appcelerator.org/browse/TIMOB-24915) - Windows: run cmake flag does not work from titanium CLI

* [TIMOB-24919](https://jira.appcelerator.org/browse/TIMOB-24919) - Windows: Add support for template.events

* [TIMOB-24922](https://jira.appcelerator.org/browse/TIMOB-24922) - Windows: Unable to package with VS 2017

* [TIMOB-24923](https://jira.appcelerator.org/browse/TIMOB-24923) - Windows: Unable to create a module with VS2017

* [TIMOB-24925](https://jira.appcelerator.org/browse/TIMOB-24925) - Windows: Unable to build a module with VS2017

* [TIMOB-24928](https://jira.appcelerator.org/browse/TIMOB-24928) - Windows: Building an app with hyperloop usage with VS 2017 fails

* [TIMOB-24933](https://jira.appcelerator.org/browse/TIMOB-24933) - Windows: Setting fullscreen property on window creation has no effect

* [TIMOB-24936](https://jira.appcelerator.org/browse/TIMOB-24936) - Windows: Build errors out when selecting wp-emulator or wp-device after being prompted for a target

* [TIMOB-24938](https://jira.appcelerator.org/browse/TIMOB-24938) - Windows: CLI errors when using a Windows specific app id and building for ws-local

* [TIMOB-24942](https://jira.appcelerator.org/browse/TIMOB-24942) - Windows: Setting height to auto on a listview with many rows breaks scrolling

* [TIMOB-24956](https://jira.appcelerator.org/browse/TIMOB-24956) - Windowslib: Unable to get product guid

* [TIMOB-24957](https://jira.appcelerator.org/browse/TIMOB-24957) - Windows: Unable to place XAML resource in project

* [TIMOB-24958](https://jira.appcelerator.org/browse/TIMOB-24958) - Windows: Tooling does not detect winappdeploycmd when only SDK 10.0.15063.0 is installed

* [TIMOB-24969](https://jira.appcelerator.org/browse/TIMOB-24969) - Windows: Ti.UI.SearchBar's cancel event not firing

* [TIMOB-24971](https://jira.appcelerator.org/browse/TIMOB-24971) - Windows: Ti.UI.SearchBar's barColor not working

* [TIMOB-24977](https://jira.appcelerator.org/browse/TIMOB-24977) - Windows: Crash when using a SearchBar where the autosuggestions box is oriented above the UI element

* [TIMOB-24985](https://jira.appcelerator.org/browse/TIMOB-24985) - Windows: Setting image on an ImageView crashes the app

* [TIMOB-25014](https://jira.appcelerator.org/browse/TIMOB-25014) - Windows: Setting button.image to a blob crashes the app

* [TIMOB-25023](https://jira.appcelerator.org/browse/TIMOB-25023) - Windows: BackgroundColor won't get applied when touchEnabled=false

* [TIMOB-25033](https://jira.appcelerator.org/browse/TIMOB-25033) - Windows: Ability to manipulate Ti.UI.Picker's width

* [TIMOB-25044](https://jira.appcelerator.org/browse/TIMOB-25044) - Windows: touchEnabled: false wont work on Ti.UI.View

* [TIMOB-25055](https://jira.appcelerator.org/browse/TIMOB-25055) - Windows: touchEnabled false not working when in controller

* [TIMOB-25078](https://jira.appcelerator.org/browse/TIMOB-25078) - Windows: run cmake flag always defaults to Visual Studio 2015 generator

* [TIMOB-25166](https://jira.appcelerator.org/browse/TIMOB-25166) - Windows: Building with VS2017 does not select 10.0.15063 SDK

* [TIMOB-25174](https://jira.appcelerator.org/browse/TIMOB-25174) - Windows: applyProperties method throws exception on picker in windows

* [TIMOB-25175](https://jira.appcelerator.org/browse/TIMOB-25175) - Windows: Ti.UI.SIZE for height of ListView does not work as expected

* [TIMOB-25178](https://jira.appcelerator.org/browse/TIMOB-25178) - Windows : removeAllChildren() method of ScrollView does not work

* [TIMOB-25232](https://jira.appcelerator.org/browse/TIMOB-25232) - Windows: CLI fails when running any appc commands

### Mulitple OSs

* [TIMOB-14410](https://jira.appcelerator.org/browse/TIMOB-14410) - TiAPI: Add hintTextid to all views

* [TIMOB-16800](https://jira.appcelerator.org/browse/TIMOB-16800) - TiAPI: TableView - e.rowData returns different results on each platform

* [TIMOB-24626](https://jira.appcelerator.org/browse/TIMOB-24626) - CLI: Build process errors out with Error: Cannot find module '../node-titanium-sdk/lib/titanium'

* [TIMOB-24662](https://jira.appcelerator.org/browse/TIMOB-24662) - CLI: Build errors out with "Couldn't find preset "babili" relative to directory" when deploy type is test

* [TIMOB-24787](https://jira.appcelerator.org/browse/TIMOB-24787) - CLI: "Invalid Version: .DS\_Store.0" Is Shown when using old build tools to build an Android project

* [TIMOB-24810](https://jira.appcelerator.org/browse/TIMOB-24810) - Build: Deprecation warnings in docgen scripts

* [TIMOB-25028](https://jira.appcelerator.org/browse/TIMOB-25028) - Build: scons package errors out when node-ios-device is not hoisted to top node\_modules

## Improvements patch releases

### Android

* [TIMOB-17450](https://jira.appcelerator.org/browse/TIMOB-17450) - Android: Ti.Calendar.Event should expose the attendees of the meeting invite as a property (Parity with iOS)

    * Added `AttendeesProxy` and add it as a result for `getAttendees()` method

* [TIMOB-24579](https://jira.appcelerator.org/browse/TIMOB-24579) - Android AndroidManifest valid tokens

    * Added support when adding newer tokens to the `tiapp.xml` which in turn successfully adds to the Android manifest

* [TIMOB-24659](https://jira.appcelerator.org/browse/TIMOB-24659) - Android: Add support for the roundIcon attribute

    * Added support for the roundIcon attribute

* [TIMOB-24664](https://jira.appcelerator.org/browse/TIMOB-24664) - Android: Update bundled Android libraries to 25.3.1

    * Added support for Android library 25.3.1

* [TIMOB-24920](https://jira.appcelerator.org/browse/TIMOB-24920) - Android: Allow selecting stream type in Ti.Media.Sound (instead of always using STREAM\_MUSIC)

    * Added support that allows for selecting different stream types in `Ti.Media.Sound`

* [TIMOB-24988](https://jira.appcelerator.org/browse/TIMOB-24988) - Android: Ti.Network.Cookie isValid() is missing

    * Added `isValid()` method to `Ti.Network.Cookie`

* [TIMOB-25007](https://jira.appcelerator.org/browse/TIMOB-25007) - Android: repeatMode for VideoPlayer (parity)

    * Added parity for repeatMode in VideoPlayer

### iOS

* [TIMOB-18182](https://jira.appcelerator.org/browse/TIMOB-18182) - iOS: Distinguish foreground vs. background in Local Notification

    * Added "inBackground" to local push notification

* [TIMOB-24351](https://jira.appcelerator.org/browse/TIMOB-24351) - iOS: Support "editActions" in listview search-results

    * Added support for `editActions` in Listview search-results

* [TIMOB-24538](https://jira.appcelerator.org/browse/TIMOB-24538) - iOS: Setting Ti.UI.ListItem "bindId" property to reserved identifier should fail gracefully

    * Add a graceful fail when using reserved bindId identifiers

* [TIMOB-24567](https://jira.appcelerator.org/browse/TIMOB-24567) - iOS: Require Swift 3.1 for watchOS templates, remove Swift 2.3 support

    * Swift 3.1 is now required for watchOS templates

    * Swift 2.3 has been removed from support

* [TIMOB-24841](https://jira.appcelerator.org/browse/TIMOB-24841) - iOS: Expose Alert Dialog TintColor

    * Added support for `tintColor` property for AlertDialog

* [TIMOB-24929](https://jira.appcelerator.org/browse/TIMOB-24929) - iOS: Allow the Ti.UI.TabGroup to be made translucent or not

    * Added support that allows the `Ti.UI.TabGroup` to be made translucent

* [TIMOB-25161](https://jira.appcelerator.org/browse/TIMOB-25161) - iOS: Expose "thin", "light", "ultra-light" and "semi-bold" font-weights in Titanium font-system

    * Added support for `thin`, `ultralight`, and `semibold` font weights

* [TIMOB-25188](https://jira.appcelerator.org/browse/TIMOB-25188) - iOS: Preserve permissions when packaging module platform folder

    * Preserve file permissions for platform directory content

### Windows

* [TIMOB-24760](https://jira.appcelerator.org/browse/TIMOB-24760) - Windows: Implement \`scrolling\`, \`scrollstart\` y \`scrollend\` events on Listview

    * Implemented `scrolling`, `scrollstart`, and `scrollend` events on Listview

* [TIMOB-24795](https://jira.appcelerator.org/browse/TIMOB-24795) - Windows: Implement hintText for searchbar

    * Implemented `hintText` for searchBar

* [TIMOB-24946](https://jira.appcelerator.org/browse/TIMOB-24946) - Ability to have 3rd party types as members in UWP module

    * Added support that allows 3rd party types as members in the UWP module

* [TIMOB-24970](https://jira.appcelerator.org/browse/TIMOB-24970) - Windows: Implement Ti.UI.SearchBar return event

    * Implemented `Ti.UI.SearchBar` for return event on Windows

* [TIMOB-24972](https://jira.appcelerator.org/browse/TIMOB-24972) - Windows: Implement Ti.UI.SearchBar change event

    * Implemented `Ti.UI.SearchBar` for change event on Windows

### Multiple OSs

* [TIMOB-24425](https://jira.appcelerator.org/browse/TIMOB-24425) - Ti.Map: Add touchEnabled to PolylineProxy to improve click-performance

    * Added `touchEnabled` to overlays in `Ti.Map`

* [TIMOB-24794](https://jira.appcelerator.org/browse/TIMOB-24794) - Updated node-ios-device to support Node.js 8

    * Added support for Node.js 8

## Breaking changes

* [TIMOB-24570](https://jira.appcelerator.org/browse/TIMOB-24570) - Android N: Screen Size/Density breaking change

    * Android 7 enables users to set display size which magnifies or shrinks all elements on the screen, thereby improving device accessibility for users with low vision

    * Avoid specifying dimensions with px units, since they do not scale with screen density. Instead, specify dimensions with density-independent pixel (dp) units.

## API changes

### New APIs

The following APIs are new or have expanded platform support in Release 6.2.0 as of September 13th, 2017.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Android.Activity.getSupportToolbar | method | Gets the value of the Titanium.Android.Activity.supportToolbar property. (New API, supported on Android.) |
| Titanium.Android.Activity.setSupportActionBar | method | Sets a toolbar instance to be used as an ActionBar. (New API, supported on Android.) |
| Titanium.Android.Activity.setSupportToolbar | method | Sets the value of the Titanium.Android.Activity.supportToolbar property. (New API, supported on Android.) |
| Titanium.Android.Activity.supportToolbar | property | Toolbar instance that serves as ActionBar (New API, supported on Android.) |
| Titanium.Android.Notification.addAction | method | Add an action button to the notification (New API, supported on Android.) |
| Titanium.Android.Notification.getGroupKey | method | Gets the value of the Titanium.Android.Notification.groupKey property. (New API, supported on Android.) |
| Titanium.Android.Notification.getGroupSummary | method | Gets the value of the Titanium.Android.Notification.groupSummary property. (New API, supported on Android.) |
| Titanium.Android.Notification.groupKey | property | The group key that the notification will belong to. (New API, supported on Android.) |
| Titanium.Android.Notification.groupSummary | property | Specifies if this is a group summary notification. (New API, supported on Android.) |
| Titanium.Android.Notification.setGroupKey | method | Sets the value of the Titanium.Android.Notification.groupKey property. (New API, supported on Android.) |
| Titanium.Android.Notification.setGroupSummary | method | Sets the value of the Titanium.Android.Notification.groupSummary property. (New API, supported on Android.) |
| Titanium.Media.AudioPlayer.AUDIO\_TYPE\_ALARM | property | Used to identify the volume of audio streams for alarms. (New API, supported on Android.) |
| Titanium.Media.AudioPlayer.AUDIO\_TYPE\_MEDIA | property | Used to identify the volume of audio streams for media playback. (New API, supported on Android.) |
| Titanium.Media.AudioPlayer.AUDIO\_TYPE\_NOTIFICATION | property | Used to identify the volume of audio streams for notifications. (New API, supported on Android.) |
| Titanium.Media.AudioPlayer.AUDIO\_TYPE\_RING | property | Used to identify the volume of audio streams for the phone ring. (New API, supported on Android.) |
| Titanium.Media.AudioPlayer.AUDIO\_TYPE\_SIGNALLING | property | Used to identify the volume of audio streams for DTMF tones or beeps. (New API, supported on Android.) |
| Titanium.Media.AudioPlayer.AUDIO\_TYPE\_VOICE | property | Used to identify the volume of audio streams for voice calls. (New API, supported on Android.) |
| Titanium.Media.AudioPlayer.audioType | property | Changes the audio-stream-type. (New API, supported on Android.) |
| Titanium.Media.AudioPlayer.getAudioType | method | Gets the value of the Titanium.Media.AudioPlayer.audioType property. (New API, supported on Android.) |
| Titanium.Media.AudioPlayer.setAudioType | method | Sets the value of the Titanium.Media.AudioPlayer.audioType property. (New API, supported on Android.) |
| Titanium.Media.AudioRecorder | object | An audio recorder object used for recording audio from the device microphone. (Added support for Android.) |
| Titanium.Media.Sound.AUDIO\_TYPE\_ALARM | property | Used to identify the volume of audio streams for alarms. (New API, supported on Android.) |
| Titanium.Media.Sound.AUDIO\_TYPE\_MEDIA | property | Used to identify the volume of audio streams for media playback. (New API, supported on Android.) |
| Titanium.Media.Sound.AUDIO\_TYPE\_NOTIFICATION | property | Used to identify the volume of audio streams for notifications. (New API, supported on Android.) |
| Titanium.Media.Sound.AUDIO\_TYPE\_RING | property | Used to identify the volume of audio streams for the phone ring. (New API, supported on Android.) |
| Titanium.Media.Sound.AUDIO\_TYPE\_SIGNALLING | property | Used to identify the volume of audio streams for DTMF tones or beeps. (New API, supported on Android.) |
| Titanium.Media.Sound.AUDIO\_TYPE\_VOICE | property | Used to identify the volume of audio streams for voice calls. (New API, supported on Android.) |
| Titanium.Media.Sound.audioType | property | Changes the audio-stream-type. (New API, supported on Android.) |
| Titanium.Media.Sound.getAudioType | method | Gets the value of the Titanium.Media.Sound.audioType property. (New API, supported on Android.) |
| Titanium.Media.Sound.setAudioType | method | Sets the value of the Titanium.Media.Sound.audioType property. (New API, supported on Android.) |
| Titanium.Media.VIDEO\_REPEAT\_MODE\_NONE | property | Constant for disabling repeat on video playback. (Added support for Android.) |
| Titanium.Media.VIDEO\_REPEAT\_MODE\_ONE | property | Constant for repeating one video (i.e., the one video will repeat constantly) during playback. (Added support for Android.) |
| Titanium.Media.VideoPlayer.getRepeatMode | method | Gets the value of the Titanium.Media.VideoPlayer.repeatMode property. (Added support for Android.) |
| Titanium.Media.VideoPlayer.repeatMode | property | Determines how the movie player repeats when reaching the end of playback. (Added support for Android.) |
| Titanium.Media.VideoPlayer.setRepeatMode | method | Sets the value of the Titanium.Media.VideoPlayer.repeatMode property. (Added support for Android.) |
| Titanium.Media.canRecord | property | `true` if the device has a recording input device available. (Added support for Android.) |
| Titanium.Media.createAudioRecorder | method | Creates and returns an instance of Titanium.Media.AudioRecorder. (Added support for Android.) |
| Titanium.Media.getCanRecord | method | Gets the value of the Titanium.Media.canRecord property. (Added support for Android.) |
| Titanium.Media.hasAudioRecorderPermissions | method | Returns `true` if the app has audio permissions. (Added support for Android.) |
| Titanium.Media.requestAudioRecorderPermissions | method | Request the user's permission for audio recording. (Added support for Android.) |
| Titanium.Network.Cookie.isValid | method | Returns true if the cookie is valid. (Added support for Android.) |
| Titanium.UI.AlertDialog.getHinttextid | method | Gets the value of the Titanium.UI.AlertDialog.hinttextid property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.getLoginhinttextid | method | Gets the value of the Titanium.UI.AlertDialog.loginhinttextid property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.getPasswordhinttextid | method | Gets the value of the Titanium.UI.AlertDialog.passwordhinttextid property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.hinttextid | property | Key identifying a string from the locale file to use for the hintText property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.loginhinttextid | property | Key identifying a string from the locale file to use for the loginHintText property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.passwordhinttextid | property | Key identifying a string from the locale file to use for the passwordHintText property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setHinttextid | method | Sets the value of the Titanium.UI.AlertDialog.hinttextid property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setLoginhinttextid | method | Sets the value of the Titanium.UI.AlertDialog.loginhinttextid property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setPasswordhinttextid | method | Sets the value of the Titanium.UI.AlertDialog.passwordhinttextid property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Android.DrawerLayout | object | An elevated view with rounded corners. (New API, supported on Android.) |
| Titanium.UI.ListView.dimBackgroundForSearch | property | A Boolean indicating whether the underlying content is dimmed during a search. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.getDimBackgroundForSearch | method | Gets the value of the Titanium.UI.ListView.dimBackgroundForSearch property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.setDimBackgroundForSearch | method | Sets the value of the Titanium.UI.ListView.dimBackgroundForSearch property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ScrollView.dragend | event | Fired when the scrollable region stops being dragged. (Added support for Android.) |
| Titanium.UI.ScrollView.dragstart | event | Fired when the scrollable region starts being dragged. (Added support for Android.) |
| Titanium.UI.Slider.getSplitTrack | method | Gets the value of the Titanium.UI.Slider.splitTrack property. (New API, supported on Android.) |
| Titanium.UI.Slider.setSplitTrack | method | Sets the value of the Titanium.UI.Slider.splitTrack property. (New API, supported on Android.) |
| Titanium.UI.Slider.splitTrack | property | Separates the thumbImage from the slider track. (New API, supported on Android.) |
| Titanium.UI.Tab.popToRootWindow | method | Closes all windows that are currently opened inside the tab. (New API, supported on Android, iPhone, iPad and Mobile Web.) |
| Titanium.UI.TabGroup.getTabsTranslucent | method | Gets the value of the Titanium.UI.TabGroup.tabsTranslucent property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TabGroup.setTabsTranslucent | method | Sets the value of the Titanium.UI.TabGroup.tabsTranslucent property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TabGroup.tabsTranslucent | property | A Boolean value that indicates whether the tab bar is translucent. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.dimBackgroundForSearch | property | A Boolean indicating whether the underlying content is dimmed during a search. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.getDimBackgroundForSearch | method | Gets the value of the Titanium.UI.TableView.dimBackgroundForSearch property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TableView.setDimBackgroundForSearch | method | Sets the value of the Titanium.UI.TableView.dimBackgroundForSearch property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TextField.getHinttextid | method | Gets the value of the Titanium.UI.TextField.hinttextid property. (New API, supported on Android, iPhone, iPad, Mobile Web and Windows Phone.) |
| Titanium.UI.TextField.hinttextid | property | Key identifying a string from the locale file to use for the hintText property. (New API, supported on Android, iPhone, iPad, Mobile Web and Windows Phone.) |
| Titanium.UI.TextField.setHinttextid | method | Sets the value of the Titanium.UI.TextField.hinttextid property. (New API, supported on Android, iPhone, iPad, Mobile Web and Windows Phone.) |

### Deprecated APIs

The following APIs are deprecated in Release 6.2.0 as of September 13th, 2017.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.UI.iOS.Toolbar | object | Use the cross-platform Titanium.UI.Toolbar instead. |
| Titanium.UI.iOS.createToolbar | method | Use the cross-platform Titanium.UI.createToolbar instead. |
