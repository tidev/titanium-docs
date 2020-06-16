---
title: Titanium SDK 5.1.0 Release Note
weight: '200'
---

# Titanium SDK 5.1.0 Release Note

## Titanium SDK 5.1.0 General Availability - 20 November 2015

### Contents

## About This Release

Note that this release includes feature and behavior changes. See [Notice of Feature and Behavior Changes](#changes) for details.

This Release introduces a number of new features. See [New Features](#features) for a summary of new features in this release.

This release includes over 100 bug fixes and improvements, see the [full list of issues that were addressed in Release 5.1.0](https://jira.appcelerator.org/issues/?filter=16989).

As of this release, Titanium SDK 5.0 . x will not be supported six months from 5.1 .0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

### Android Support

This Release includes support for Android 6.0 (Marshmallow). The Android 6.0 SDK must be installed in order to build applications that target the Android platform.

If you set the target SDK, it must be set to API level 23 (Android 6.0/Marshmallow) or later. Previously, the minimum target SDK was API level 21 (Android 5.0/Lollipop).

### CLI 5.1.0

This Release conincides with the release of Appcelerator CLI 5.1.0. For details, see the [CLI Release Notes](/guide/Appcelerator_CLI/Appcelerator_CLI_Release_Notes/).

### Node Support

As of this Release, the Titanium SDK and toolchain support Node.js 4.x as the highest supported version. Previously, 0.12.x was the highest supported version.

### Studio 4.4.0

This Release coincides with the release of Studio 4.4.0. For details, see the [Studio Release Notes](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Release_Notes/).

## Notice of Feature and Behavior Changes

### Android Platform

#### AppCompat Button

As of this Release, the Android platform uses the AppCompat button, where the appearance of the button will be the same across all versions of Android the application runs on. Previously, the appearance of the button was different depending on the version of Android the application was running on.

#### Target SDK

The Android 6.0 SDK (API level 23) must be installed in order to build applications that target the Android platform.

If you set the target SDK in the `tiapp.xml` file, it must be set to API level 23 (Android 6.0/Marshmallow) or later. Previously, the minimum target SDK was API level 21 (Android 5.0/Lollipop).

### iOS Platform

#### Activity Indicator Style Constants

As of this Release, the Activity Indicator Style constants with the iPhone namespace are deprecated. Use the [Activity Indicator Style constants](#!/api/Titanium.UI.ActivityIndicatorStyle) without the iPhone namespace instead to set the style of an ActivityIndicator on iOS.

#### TabGroup Events

This Release introduces the `selected` and `unselected` events for `Titanium.UI.TabGroup` to determine when a tab is selected or unselected in a TabGroup. The new events deprecate the TabGroup's `focus` and `blur` events for iOS.

#### User Activity Support

As of this Release, the new `Titanium.App.iOS.UserActivity.isSupported()` method deprecates the `Titanium.App.iOS.UserActivity.supported`property to match parity with other APIs.

### Device Permissions

This Release re-architected the way an application requests device permissions in order to support the new Android 6.0 model for requesting device permissions during runtime and to achieve parity between the Android and iOS platforms. Support for the Windows platform will be added in a later release.

Use the following methods to check and request for permission to use the device's calendar, camera, contacts and location on devices running Android 6.0 and later, and iOS:

* [Titanium.Calendar.hasCalendarPermissions](#!/api/Titanium.Calendar-method-hasCalendarPermissions)

* [Titanium.Calendar.requestCalendarPermissions](#!/api/Titanium.Calendar-method-requestCalendarPermissions)

* [Titanium.Contacts.hasContactsPermissions](#!/api/Titanium.Contacts-method-hasContactsPermissions)

* [Titanium.Contacts.requestContactsPermissions](#!/api/Titanium.Contacts-method-requestContactsPermissions)

* [Titanium.Geolocation.hasLocationPermissions](#!/api/Titanium.Geolocation-method-hasLocationPermissions)

* [Titanium.Geolocation.requestLocationPermissions](#!/api/Titanium.Geolocation-method-requestLocationPermissions)

* [Titanium.Media.hasCameraPermissions](#!/api/Titanium.Media-method-hasCameraPermissions)

* [Titanium.Media.requestCameraPermissions](#!/api/Titanium.Media-method-requestCameraPermissions)

The new methods deprecate the following methods on iOS:

* `Titanium.Calendar.requestEventsAuthorization`

* `Titanium.Media.requestCameraAccess`

### Windows Platform

#### Package Identity Name

As of this Release, in the `tiapp.xml` file, add the `id` element as a child of the `windows` element and set it to the Package/Identity/Name of the application that was generated when you created the application in the Windows Dev Center Dashboard. The Package Identity Name is required to package the application. Microsoft will validate this field when you submit the package to the Windows Store.

      `<ti:app>  <windows>    <id>12345FooInc.FooApp</id>  </windows></ti:app>`

Previously, the Package Identity Name was specified in the `id` element under the `ti:app` element.

## New Features

This section describes new features introduced in Release 5.1.0.

### Android Platform

This section lists new features and improvements only available on the Android platform.

#### CardView

This Release introduces support for [CardView](#!/api/Titanium.UI.Android.CardView), an elevated view with rounded corners. Use multiple CardViews in a layout to display a collection that contains different elements, layouts and content as opposed to a ListView, which displays data of the same type with a uniformed layout.

#### Reveal Effect

On Android, Views now support the circular reveal effect when showing or hiding the View. Pass a dictionary with the `animated` property set to `true` to the View's`show()` and `hide()` method to enable the effect.

      `view.show({animated: true});`

The reveal effect is only supported on Android 5.0 (Lollipop) and later.

### iOS Platform

This section lists new features and improvements only available on the iOS platform.

#### 3D Touch

The Titanium SDK supports the [Peek and Pop, and Quick Action features](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/3DTouch.html#//apple_ref/doc/uid/TP40006556-CH71-SW1) of 3D touch. Both features require a 3D Touch enabled device running iOS 9 or later. Note that you can only test 3D touch features on device. Use the [Titanium.UI.iOS.forceTouchSupported](#!/api/Titanium.UI.iOS-property-forceTouchSupported) property to check if the device supports 3D touch.

**Peek and Pop** provides a way for the user to quickly preview item content in the application by pressing on it, then optionally switching to the peeked item. For details, see the [Titanium.UI.iOS.PreviewContext API reference](#!/api/Titanium.UI.iOS.PreviewContext).

**Quick Action** provides application shortcuts when the user presses the application icon on the Home Screen. The shortcuts allow the user to quickly perform an action with your application without navigating through the application. For details, see the [Titanium.UI.iOS.ApplicationShortcuts API reference](#!/api/Titanium.UI.iOS.ApplicationShortcuts).

#### Alert Dialog

Starting in this Release, when using the alert dialog style `Titanium.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT` or`Titanium.UI.iPhone.AlertDialogStyle.SECURE_TEXT_INPUT`, you can set the `placeholder` property to specify the placeholder text of the textfield, and`keyboardType` and `returnKeyType` properties to specify the keyboard type.

When using the alert dialog style `Titanium.UI.iPhone.AlertDialogStyle.LOGIN_AND_PASSWORD_INPUT`, you can set the `loginPlaceholder` and`passwordPlaceholder` properties to specify the placeholder text of the login and password textfields, respectively.

#### Asset Catalog

To support App Thinning, PNG and JPEG images, following the iOS naming convention, will be automatically added to an Asset Catalog. When a user installs your application to their device, only the supported assets will be included.

To mark images for use with the Asset Catalog, add the `@2x` and `@3x` to indicate the asset is for retina displays and the iPhone 6 Plus, respectively. For non-retina displays, do not add a suffix. Add the `~iphone` and `~ipad` suffix for iPhone- and iPad-specific images, respectively. For example:

* `pic.png`

* `pic@2x~ipad.png`

* `pic@2x~iphone.png`

* `pic@3x.png`

Only new applications created with Release 5.1.0 and above will have this feature enabled. For existing applications, you need to add the `use-app-thinning` element to the `ios` element in the `tiapp.xml` file and set it to `true`.

      `<ti:app>  <ios>    <use-app-thinning>true</use-app-thinning>  </ios></ti:app>`

Note that since the images are in an Asset Catalog, you cannot access the image files from the filesystem, such as using the `Ti.Filesystem` APIs or any equivalent functionality. If you need to access the image files, you can disable adding images to the Asset Catalog by setting the `use-app-thinning` element to `false`.

#### Auto Layout

As of this Release, the application can use [iOS's Auto Layout engine](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/AutolayoutPG/index.html) to layout view components.

To enable autolayout, add the `use-autolayout` element as a child of the `ios` element in the `tiapp.xml` file, and set it to `true`.

      `<ti:app>  <ios>    <use-autolayout>true</use-autolayout>  </ios></ti:app>`

Note that this is an experimental feature with known issues:

* [TIMOB-19808](https://jira.appcelerator.org/browse/TIMOB-19808)

* [TIMOB-19807](https://jira.appcelerator.org/browse/TIMOB-19807)

* [TIMOB-19806](https://jira.appcelerator.org/browse/TIMOB-19806)

* [TIMOB-19805](https://jira.appcelerator.org/browse/TIMOB-19805)

If you encounter an issue using auto layout, file a bug in [JIRA](https://jira.appcelerator.org/).

#### JavaScript Thread

As of this Release, you may enable JavaScript to execute on the main thread. By default, JavaScript executes on a separate secondary thread.

To run JavaScript on the main thread, add the `run-on-main-thread` element to the `ios` element in the `tiapp.xml` file and set the value to `true`.

      `<ti:app>  <ios>    <run-on-main-thread>false</run-on-main-thread>  </ios></ti:app>`

Note that this is an experimental feature with known issues:

* [TIMOB-19762](https://jira.appcelerator.org/browse/TIMOB-19762)

* [TIMOB-19760](https://jira.appcelerator.org/browse/TIMOB-19760)

If you encounter an issue running JavaScript on the main thread, file a bug in [JIRA](https://jira.appcelerator.org/).

#### Picker Height

As of this Release, the [height](#!/api/Titanium.UI.Picker-property-height) of a picker can be set during creation if the device runs iOS 9 or later.

In prior versions of iOS, the Picker height is fixed.

#### Safari Dialog Module

The Titanium SDK now includes the `ti.safaridialog` module. Use the module to browse web content in a view similar to the Safari app.

Requires that the device runs iOS 9 or later, and the application must be built against Xcode 7 or later.

For details, see the [Module API reference](#!/api/Modules.SafariDialog).

#### WatchOS Message Callback

As of this Release, you can pass an optional callback that is executed when the watch application receives the message to the [Titanium.WatchSession.sendMessage()](#!/api/Titanium.WatchSession-method-sendMessage)method.

### Windows Platform

This section lists new features and improvements only available on the Windows platform.

#### API Parity

The Windows Platform expands support for several APIs, including:

* [Titanium.Buffer](#!/api/Titanium.Buffer)

* [Titanium.Contacts](#!/api/Titanium.Contacts)

* [Titanium.IOStream](#!/api/Titanium.IOStream)

* [Titanium.UI.Picker](#!/api/Titanium.UI.Picker)

For details, see the [New APIs section below](#new_apis).

#### Icons

As of this Release, the Titanium SDK will generate missing icons using the `DefaultIcon.png` file located in the root level of the project. This is the same mechanism introduced for iOS in Release 5.0.0.

For a Windows-specific icon, name the file `DefaultIcon-windows.png`.

## Community Credits

The following Appcelerator Community members contributed PRs that were included in this Release:

* [Ben Bahrenburg](https://github.com/benbahrenburg) for implementing support for iOS 3-D touch quick actions ([TIMOB-19489](https://jira.appcelerator.org/browse/TIMOB-19489))

* [Manuel Lehner](https://github.com/manumaticx) for fixing a bug with the Android reveal effect ([TIMOB-19722](https://jira.appcelerator.org/browse/TIMOB-19722)) and implementing support for the Android AppCompat button ([TIMOB-19506](https://jira.appcelerator.org/browse/TIMOB-19506))

* [Manoj Kumar](https://github.com/mano-mykingdom) for fixing a bug when the content type was not specified in an HTTP response ([TIMOB-19555](https://jira.appcelerator.org/browse/TIMOB-19555))

## API Changes

### New APIs

The following APIs are new or have expanded platform support in Release 5.1.0 as of November 20th, 2015.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.App.iOS.USER\_NOTIFICATION\_BEHAVIOR\_DEFAULT | property | There will not appear a text input. Use with the behavior property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.USER\_NOTIFICATION\_BEHAVIOR\_TEXTINPUT | property | There will appear a text input to answer an action outside the application. Use with the behavior property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserNotificationAction.behavior | property | Selects whether to show a text input outside the application to reply to a notification. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserNotificationAction.getBehavior | method | Gets the value of the Titanium.App.iOS.UserNotificationAction.behavior property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.UserNotificationAction.setBehavior | method | Sets the value of the Titanium.App.iOS.UserNotificationAction.behavior property. (New API, supported on iPhone and iPad.) |
| Titanium.App.iOS.shortcutitemclick | event | Fired when a user taps the Application Shortcut. (New API, supported on iPhone.) |
| Titanium.Buffer | object | Buffer is a mutable, resizable container for raw data. (Added support for Windows Phone.) |
| Titanium.Calendar.hasCalendarPermissions | method | Returns `true` if the app has calendar access (New API, supported on Android, iPhone and iPad.) |
| Titanium.Calendar.requestCalendarPermissions | method | Requests for calendar access (New API, supported on Android, iPhone and iPad.) |
| Titanium.Contacts | object | The top-level Contacts module, used for accessing and modifying the system contacts address book. (Added support for Windows Phone.) |
| Titanium.Contacts.Group | object | An object which represents a group in the system contacts address book. (Added support for Windows Phone.) |
| Titanium.Contacts.Person | object | An object that represents a contact record for a person or organization in the system contacts address book. (Added support for Windows Phone.) |
| Titanium.Geolocation.hasLocationPermissions | method | Returns `true` if the app has location access. (New API, supported on Android, iPhone and iPad.) |
| Titanium.Geolocation.requestLocationPermissions | method | Requests for location access (New API, supported on Android, iPhone and iPad.) |
| Titanium.IOStream | object | IOStream is the interface that all stream types implement. (Added support for Windows Phone.) |
| Titanium.Media.hasCameraPermissions | method | Returns `true` if the app has camera access (New API, supported on Android, iPhone and iPad.) |
| Titanium.Media.requestCameraPermissions | method | Requests for camera access (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.ActivityIndicatorStyle | object | A set of constants for the styles available for Titanium.UI.ActivityIndicator objects. (Added support for iPhone and iPad.) |
| Titanium.UI.AlertDialog.getLoginPlaceholder | method | Gets the value of the Titanium.UI.AlertDialog.loginPlaceholder property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.getPasswordPlaceholder | method | Gets the value of the Titanium.UI.AlertDialog.passwordPlaceholder property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.getPlaceholder | method | Gets the value of the Titanium.UI.AlertDialog.placeholder property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.loginPlaceholder | property | Placeholder of the login text field inside the dialog. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.passwordPlaceholder | property | Placeholder of the password text field inside the dialog. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.placeholder | property | Placeholder of the text field inside the dialog. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setLoginPlaceholder | method | Sets the value of the Titanium.UI.AlertDialog.loginPlaceholder property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setPasswordPlaceholder | method | Sets the value of the Titanium.UI.AlertDialog.passwordPlaceholder property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setPlaceholder | method | Sets the value of the Titanium.UI.AlertDialog.placeholder property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Android.CardView | object | A Card view with a rounded corner background and shadow. (New API, supported on Android.) |
| Titanium.UI.Picker | object | A control used to select one or more fixed values. (Added support for Windows Phone.) |
| Titanium.UI.PickerColumn | object | A picker column, representing a selectable group of items in a Titanium.UI.Picker. (Added support for Windows Phone.) |
| Titanium.UI.PickerRow | object | A picker row, representing a selectable item in a Titanium.UI.Picker. (Added support for Windows Phone.) |
| Titanium.UI.TabGroup.selected | event | Fired when a tab is selected. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TabGroup.unselected | event | Fired when a tab is unselected. (New API, supported on iPhone and iPad.) |
| Titanium.UI.View.getPreviewContext | method | Gets the value of the Titanium.UI.View.previewContext property. (New API, supported on iPhone.) |
| Titanium.UI.View.previewContext | property | The preview context used in the 3D-Touch feature "Peek and Pop". (New API, supported on iPhone.) |
| Titanium.UI.View.setPreviewContext | method | Sets the value of the Titanium.UI.View.previewContext property. (New API, supported on iPhone.) |
| Titanium.UI.createPicker | method | Creates and returns an instance of Titanium.UI.Picker. (Added support for Windows Phone.) |
| Titanium.UI.createPickerColumn | method | Creates and returns an instance of Titanium.UI.PickerColumn. (Added support for Windows Phone.) |
| Titanium.UI.createPickerRow | method | Creates and returns an instance of Titanium.UI.PickerRow. (Added support for Windows Phone.) |
| Titanium.UI.iOS.ApplicationShortcuts | object | The Home screen quick action API is for adding shortcuts to your app icon that anticipate and accelerate a user's interaction with your app. (New API, supported on iPhone.) |
| Titanium.UI.iOS.PREVIEW\_ACTION\_STYLE\_DEFAULT | property | The normal style for preview actions. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.PREVIEW\_ACTION\_STYLE\_DESTRUCTIVE | property | The destructive style for preview actions. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.PREVIEW\_ACTION\_STYLE\_SELECTED | property | The selected style for preview actions. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.PreviewAction | object | A PreviewAction provides options to configure action used by the iOS9 3D-Touch feature "Peek and Pop". (New API, supported on iPhone.) |
| Titanium.UI.iOS.PreviewActionGroup | object | A PreviewActionGroup provides options to configure a group of actions used by the iOS9 3D-Touch feature "Peek and Pop". (New API, supported on iPhone.) |
| Titanium.UI.iOS.PreviewContext | object | A PreviewContext provides options to configure the iOS9 3D-Touch feature "Peek and Pop". (New API, supported on iPhone.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_ADD | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_ALARM | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_AUDIO | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_BOOKMARK | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_CAPTURE\_PHOTO | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_CAPTURE\_VIDEO | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_CLOUD | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_COMPOSE | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_CONFIRMATION | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_CONTACT | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_DATE | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_FAVORITE | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_HOME | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_INVITATION | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_LOCATION | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_LOVE | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_MAIL | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_MARK\_LOCATION | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_MESSAGE | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_PAUSE | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_PLAY | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_PROHIBIT | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_SEARCH | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_SHARE | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_SHUFFLE | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_TASK | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_TASK\_COMPLETED | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_TIME | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.SHORTCUT\_ICON\_TYPE\_UPDATE | property | Number that represents the icon used for the application shortcut (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.createApplicationShortcuts | method | Creates and returns an instance of Titanium.UI.iOS.ApplicationShortcuts. (New API, supported on iPhone.) |
| Titanium.UI.iOS.createPreviewAction | method | Creates and returns an instance of Titanium.UI.iOS.PreviewAction. (New API, supported on iPhone.) |
| Titanium.UI.iOS.createPreviewActionGroup | method | Creates and returns an instance of Titanium.UI.iOS.PreviewActionGroup. (New API, supported on iPhone.) |
| Titanium.UI.iOS.createPreviewContext | method | Creates and returns an instance of Titanium.UI.iOS.PreviewContext. (New API, supported on iPhone.) |
| Titanium.UI.iOS.forceTouchSupported | property | Determines if the 3D-Touch capability "Force Touch" is supported (`true`) or not (`false`) by the device. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.getForceTouchSupported | method | Gets the value of the Titanium.UI.iOS.forceTouchSupported property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.setForceTouchSupported | method | Sets the value of the Titanium.UI.iOS.forceTouchSupported property. (New API, supported on iPhone and iPad.) |

### Deprecated APIs

The following APIs are deprecated in Release 5.1.0 as of November 20th, 2015.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.App.iOS.UserActivity.getSupported | method | Use the Ti.App.iOS.UserActivity.isSupported() method instead. |
| Titanium.App.iOS.UserActivity.setSupported | method | Use the Ti.App.iOS.UserActivity.isSupported() method instead. |
| Titanium.App.iOS.UserActivity.supported | property | Use the Ti.App.iOS.UserActivity.isSupported() method instead. |
| Titanium.Calendar.requestEventsAuthorization | method | Use requestCalendarPermissions instead. |
| Titanium.Media.requestCameraAccess | method | Use requestCameraPermissions instead. |
| Titanium.UI.TabGroup.blur | event | Use unselected instead. |
| Titanium.UI.TabGroup.focus | event | Use selected instead. |
| Titanium.UI.iPhone.ActivityIndicatorStyle | object | Use Ti.UI.ActivityIndicatorStyle instead. |
