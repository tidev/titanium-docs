---
title: Titanium SDK 5.2.0 22 February 2016
weight: '160'
---

# Titanium SDK 5.2.0 22 February 2016

## Contents

## About This Release

Titanium SDK 5.2.0 is a minor release of the SDK, addressing high-priority issues from previous releases.

As of this release, Titanium SDK 5.1.x will not be supported six months from 5.2.0.GA's release date. See [Axway Appcelerator Deprecation Policy](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/) and [Nominal Lifetimes](/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes) documents for details.

## New Features

This section describes new features introduced in Release 5.2.0.

### Android Platform

This section lists new features and improvements only available on the Android platform.

#### Additional Type Support for IntentProxy

5.2.0 now added additional type support for IntentProxy (supporting only Java primitives). Creating a shortcut requires an intent and an image to be set.

#### Google Maps

**Street View** panorama for Google Maps Android API v2 has been implemented. Try it out with the following test code:

```javascript
// Add in the module
var MapModule = require('ti.map');
var win = Ti.UI.createWindow({backgroundColor: 'white'});

var street = MapModule.createStreetViewPanorama({
  position: {latitude:1.281581286057009, longitude:103.8641372560966}
});

win.add(street);
win.open();
```

**Hide Soft Navigation Bar**

During the launching of an app, you can hide the navigation bar however, there are two caveats that you should be aware of:

1. When you tap the screen, the navigation bar returns

2. This setting affects all activities and windows in Android when you set the property `Fullscreen` to `true`.

To try this feature out, set this property in the TiApp.xml to true:

```xml
<fullscreen>true</fullscreen>
```

**Multiple URI to an Intent**

Ti.Android.Intent allows for either a single or multiple URI to be sent to an intent.

Example:

```javascript
var photos = [ firstImage.nativePath, secondImage.nativePath ];
intent.putExtraUri(Ti.Android.EXTRA_STREAM, photos);
```

### iOS Platform

This section lists new features and improvements only available on the iOS platform.

#### New iOS9 Features

* Support included for iOS9's 3D-Touch property and events. Properties supported include

    * `force`: the force of the touch where the value of 1.0 represents the force of an average touch (predetermined by the system and is not user-specific). This property is read-only.

    * `maximumPossibleForce`: The value of this property is sufficently high to provide a wide dynamic range for values of the force property.

* Support for iOS9's "Continue" button and fallback for older devices as well as support for Twitter and WebSearch keyboards.

#### New iOS9.1 Features

* Support for PHLivePhoto and PHLivePhotoView via the `Ti.Media.openPhotoGallery()` method and display live photos via `Ti.UI.iOS.LivePhoto`.

* Full coverage for Apple Pencil APIs including force, maximumPossibleForce, timestamp and altitudeAngle.

#### Storyboard-based Launch Screen

When building a new app, you won't have to do anything other than build your app to take advantage of the storyboard-based launch screen. There is a default `LaunchScreen.storyboard` that ships with Titanium. It is a simple white background with a centered `ImageView`. It uses an image set called **LaunchLogo** from the asset catalog. Existing apps will have to enable this manually by adding the following to the `<ios>` section fo the `tiapp.xml`:

```xml
<enable-launch-screen-storyboard>true</enable-launch-screen-storyboard>
```

By default, this property is set to true so that all new projects have the storyboard launch screen enabled.

**Launch Logo**

By default, it will generate LaunchLogos based on the `LaunchLogo.png`. If `LaunchLogo.png` doesn't exists, it will fall back to either `DefaultIcon-ios.png` or `DefaultIcon.png`. You can manually create them in the `Resources/iphone` (`app/assets/iphone` for Alloy) directory if you like. The following tables lists the different filenames and sizes:

| Filename | Devices | Scale | Recommended Size |
| --- | --- | --- | --- |
| LaunchLogo~iphone.png | iPhone 3G and older | 1x | 320x320 |
| LaunchLogo@2x~iphone.png | iPhone 4, 4s 5, 5s, 6, 6s | 2x | 374x374 |
| LaunchLogo@3x~iphone.png | iPhone 6 Plus, 6s Plus | 3x | 621x621 |
| LaunchLogo~ipad.png | iPad 1, 2, Mini 1 | 1x | 384x384 |
| LaunchLogo@2x~ipad.png | iPad 3, 4, Air, Air 2, Mini 2, 3, 4 | 2x | 1024x1024 |

Since the `ImageView` is constrained to 50% of the device width, these dimensions are based on the width of each device per scale divided by 2.

Any missing images will be generated from the `DefaultIcon.png`. If `DefaultIcon.png` doesn't exist, the missing images will be copied from TiSDK which is just a black Ti logo on a white background.

**Background Color**

By default, the launch screen's background color is white. However, the LaunchLogo may look better against some other background color. You can specify the default background color in the `tiapp.xml`'s `<ios>` section:

```xml
<ios>
    <default-background-color>#ff0000</default-background-color>
</ios>
```

The `default-background-color` must be either a 3 or 6 character RGB hex value. Note: the `#` is optional for this hex value.

This will change the background color of the storyboard launch screen (defaults to white) as well as the root view controller (defaults to white when you use a storyboard, black otherwise). This causes a noticeable rendering artifact where the screen dims for a frame or two on launch. However, after this change, the root view controller will have the same background color and the transition should look much better. It is worth noting that the `default-background-color`property is applied regardless of whether or not you are using a storyboard launch screen. It also has no effect if the `app.js` immediately calls `Titanium.UI.setBackgroundColor('#000');` as is the case when running the default 2 tab app.

**Overriding The Default LaunchScreen.storyboard**

You can override the default `LaunchScreen.storyboard` by placing a custom version of this file in the `plateform/ios` or `plateform/iphone` directories. If a custom launch screen storyboard is present, then it will NOT attempt to copy or generate LaunchLogos or change the storyboard's background color. All files in the `platform/ios` are blindly copied into the `build/iphone` directory which is what the Android and Windows platforms do. This is a breaking change. Files in `platform/iphone` used to copied into `build/iphone/build/Products/Debug-iphonesimulator/AppName.app`. This change affects any existing iOS app or iOS Titanium module that has an `platform/ios` or `platform/iphone` directory. Apps and modules will need to be updated to use a CLI hook to copy the files to the correct destination. Because of this change, We added support for `<project-dir>/hooks` where project-specific hooks can be placed. These CLI hooks are loaded regardless of the `<plugins>` section in the `tiapp.xml`.

Custom LaunchScreen.storyboard files will need to be authored in Xcode and then manually copied into the `platform/ios` directory. Custom storyboard asset support is possible but difficult. You can put a PNG in the `Resources/ios` (`app/assets/ios` for Alloy) directory but then it will need to be converted into an asset but that is only performed if app thinning is enabled. You could put a PNG into `platform/ios` directory but it would be copied to the `build/iphone` directory and won't actually be bundled into the app. If you enable app thinning, then any images in `platform/ios` will get converted into an asset catalog which your storyboard could reference. However, the asset imageset's name would be a SHA and would be cumbersome to work with.

#### Enabling Split/Slide View

With the addition of the launchScreen.storyboard features, you can now enable the split and slide views. To enable this features, follow these steps:

1. In **`tiapp.xml`** , set the following properties:

    * ```
        ...
        <ios>
            <enable-launch-screen-storyboard>true</enable-launch-screen-storyboard>
            <use-auto-layout>true</use-auto-layout>
            <plist>
              <dict>
                <key>UIRequiresFullScreen</key>
                <false/>
        ...
        ```

2. Run either **`ti build -p ios -F ipad`** or **`appc run -p ios -F ipad`** .

3. While the app is running, press **Home**.

4. Open **Contacts** or **Map**.

5. **Slide** from right edge. You should see the Titanium app.

6. Open the Titanium app. It will show up as a slide view.

7. If you turn your device to landscape and repeat from step #5, you can drag the divider to see it in split view.

#### Miscellaneous iOS Features

* Scroll event for [Titanium.UI.ScrollView](#!/api/Titanium.UI.ScrollView) now sends the contentSize property to scroll event.

* Added support for the Ti.UI.iOS.MenuPopup API. A menu popup provides the ability to create custom tooltip options using the `items` property covering the native UIMenuController class.

* Introduced `dragstart` and `dragend` (just like scroll view) for list view in this release. Dragstart fires when the user starts dragging a list view. Dragend fires when the user stops dragging the list view.

* UIEdgeInsets allows for the re-positioning of an image inside a tab when it has no title text. This method allows you to pass absolute values for image insets and properly realign images inside the tab.

    * Demo:

    * ```javascript
        Titanium.UI.setBackgroundColor('#fff');
        var tabGroup = Titanium.UI.createTabGroup();

        var win1 = Titanium.UI.createWindow();
        var tab1 = Titanium.UI.createTab({
          window: win1,
          icon:'images/tabs/KS_nav_ui.png',
          iconInsets: {
            top:6,
            bottom:-6,
            right:0,
            left:0
          }
        });

        var win2 = Titanium.UI.createWindow();
        var tab2 = Titanium.UI.createTab({
          window: win2,
          icon:'images/tabs/KS_nav_ui.png',
          title: "Test"
        });

        tabGroup.addTab(tab1);
        tabGroup.addTab(tab2);

        tabGroup.open();
        ```

* Added Swift versions of the applewatch templates so you have a choice of watchos2-swift (Swift and new default) and watchos2-objc (Obj-C).

* Support for contact icons.

* `Ti.UI.iPad.Popover` now supports popover's backgroundColor property.

## Community Credits

The following Appcelerator Community members contributed PRs that were included in this release:

* Shawn Lipscomb for finding a bug with ti.inappbilling failing to work on Android 5.0 ([MOD-2154](https://jira.appcelerator.org/browse/MOD-2154))

* [Michael](https://github.com/m1ga) for updating TiCameraActivity.java ([TIMOB-19769](https://jira.appcelerator.org/browse/TIMOB-19769)), and various documents

* [Michael Kimsal](https://github.com/mgkimsal) for updating Media.yml ([TIMOB-17987](https://jira.appcelerator.org/browse/TIMOB-17987))

* [Flavio De Stefano](https://github.com/kopiro) for iOS: Added trackTintColor ([TIMOB-19829](https://jira.appcelerator.org/browse/TIMOB-19829))

* [Xavier Lacot](https://github.com/xavierlacot) for fixing check that the view's layout is not null before comparing it to horizontal or vertical layout arrangements ([TIMOB-20089](https://jira.appcelerator.org/browse/TIMOB-20089))

* [Collin Price](https://github.com/collinprice) for adding null check to activity object in callOrientationChangedListener method ([TIMOB-20108](https://jira.appcelerator.org/browse/TIMOB-20108)) and additional type support for IntentProxy ([TIMOB-19679](https://jira.appcelerator.org/browse/TIMOB-19679))

* [Wilson](https://github.com/wsliaw) for adding dragstart and dragend event ([TIMOB-18210](https://jira.appcelerator.org/browse/TIMOB-18210))

* [Rene Pot](https://github.com/Topener) for adding deleteButtonTitle to the docs ([TIDOC-2366](https://jira.appcelerator.org/browse/TIDOC-2366))

* [Manuel Lehner](https://github.com/manumaticx) for fixing NullPointerException in TiConvert ([TIMOB-19579](https://jira.appcelerator.org/browse/TIMOB-19579))

* [Chris R](https://github.com/cdrx) for updating [README.md](http://README.md) and adding titanium slack to readme

* [Jason Kneen](https://github.com/jasonkneen) for updating ApplicationShortcuts.yml ([TIDOC-2348](https://jira.appcelerator.org/browse/TIDOC-2348))

* [Steven van Loef](https://github.com/ludolphus) for adding contentSize property to scroll event ([TIMOB-17247](https://jira.appcelerator.org/browse/TIMOB-17247))

* [Seth Benjamin](https://github.com/animecyc) for iOS: TiUIListView does not resume the ImageLoader ([TIMOB-19647](https://jira.appcelerator.org/browse/TIMOB-19647))

## Fixed Issues

This release includes 142 bug fixes.

* [CLI-778](https://jira.appcelerator.org/browse/CLI-778) - Update check from the appcelerator npm does not inform the user of available update

* [CLI-788](https://jira.appcelerator.org/browse/CLI-788) - "use" not listed in help

* [CLI-818](https://jira.appcelerator.org/browse/CLI-818) - If a login is required before switching orgs it shouldn't switch at all

* [CLI-827](https://jira.appcelerator.org/browse/CLI-827) - Only CLI 5.0.2 & NodeJS 0.12.7 give: \[Error: Module did not self-register.\]

* [CLI-881](https://jira.appcelerator.org/browse/CLI-881) - If you create an Arrow project with European character sets, then the next prompt will be "What is the api name?"

* [CLI-882](https://jira.appcelerator.org/browse/CLI-882) - Cannot create an Arrow project with DEBUG=\* and -l trace

* [CLI-885](https://jira.appcelerator.org/browse/CLI-885) - Appc new should be more cautious when unable to read Ti activeSDK value

* [CLI-893](https://jira.appcelerator.org/browse/CLI-893) - CLI fails to find core dependencies, incorrect location.

* [CLI-895](https://jira.appcelerator.org/browse/CLI-895) - CLI should not honor invalid url in proxy settings

* [CLI-918](https://jira.appcelerator.org/browse/CLI-918) - appc run doesn't recognize --project-dir

* [CLI-919](https://jira.appcelerator.org/browse/CLI-919) - Cannot create mobile project from Appc CLI

* [CLI-921](https://jira.appcelerator.org/browse/CLI-921): Appc alloy -v returns error

* [CLI-922](https://jira.appcelerator.org/browse/CLI-922) - -d flag error on appc ti sdk install

* [CLI-925](https://jira.appcelerator.org/browse/CLI-925) - CLI flags are not being honored

* [CLI-926](https://jira.appcelerator.org/browse/CLI-926) - Error during arrow app publishing: unknown option \`--username' with CLI 5.2.0-233

* [CLI-927](https://jira.appcelerator.org/browse/CLI-927) - When installing new SDK, the CLI Does not allow ctrl + c

* [CLI-935](https://jira.appcelerator.org/browse/CLI-935) - "appc command random" results command.opts is not a function error

* [CLI-936](https://jira.appcelerator.org/browse/CLI-936) - If you use "-o json", then text is returned along with the JSON data

* [CLI-940](https://jira.appcelerator.org/browse/CLI-940) - iOS: Unable to package project. 'Undefined is not a function'

* [MOD-1827](https://jira.appcelerator.org/browse/MOD-1827) - TiCloud: Logout - Logout method does not recognize device\_token parameter

* [MOD-2148](https://jira.appcelerator.org/browse/MOD-2148) - Ti.CloudPush is not working on Android 6

* [MOD-2149](https://jira.appcelerator.org/browse/MOD-2149) - EncryptedDatabase: java.lang.UnsatisfiedLinkError: dlopen failed: cannot locate symbol "EVP\_CipherFinal"

* [MOD-2154](https://jira.appcelerator.org/browse/MOD-2154) - ti.inappbilling: Does not work with Android 5.0

* [MOD-2156](https://jira.appcelerator.org/browse/MOD-2156) - SafariDialog: opened and supported should be read-only

* [MOD-2163](https://jira.appcelerator.org/browse/MOD-2163) - Android: Ti.Compression, app crashes right after launching with this module

* [MOD-2166](https://jira.appcelerator.org/browse/MOD-2166) - Android: Ti.ImageFactory crash on Android 6.0 with latest SDK

* [MOD-2167](https://jira.appcelerator.org/browse/MOD-2167) - Android: ti.paint crash on Android 6.0 with latest SDK

* [MOD-2171](https://jira.appcelerator.org/browse/MOD-2171) - Annotations crash on iOS 9

* [MOD-2175](https://jira.appcelerator.org/browse/MOD-2175) - Android: ti.gigya error on Android 6.0 with latest SDK

* [MOD-2191](https://jira.appcelerator.org/browse/MOD-2191) - Ti.SafariDialog: URL's containing # do not work

* [TIMOB-2908](https://jira.appcelerator.org/browse/TIMOB-2908) - iOS: Switch - Disable animation on init and allow developer to disable for setValue

* [TIMOB-5817](https://jira.appcelerator.org/browse/TIMOB-5817) - Android: keyboard type set as number pad permits input of non-numeric values

* [TIMOB-16355](https://jira.appcelerator.org/browse/TIMOB-16355) - iOS: separatorInsets should not be used for header/section titles

* [TIMOB-18132](https://jira.appcelerator.org/browse/TIMOB-18132) - Android: App Crashes with CalledFromWrongThreadException opening DatePicker after typing in a tf

* [TIMOB-18168](https://jira.appcelerator.org/browse/TIMOB-18168) - iOS: Module - Cannot build 32-bit module urlSession and coremotion with SDK 3.5.0

* [TIMOB-18926](https://jira.appcelerator.org/browse/TIMOB-18926) - iOS: Calendar events status shows wrong status number or null

* [TIMOB-19103](https://jira.appcelerator.org/browse/TIMOB-19103) - Windows Phone: Lots of scary warnings in successful build of default app

* [TIMOB-19138](https://jira.appcelerator.org/browse/TIMOB-19138) - Windows: DefaultLanguage property should be set (to "en") in manifest

* [TIMOB-19192](https://jira.appcelerator.org/browse/TIMOB-19192) - Android: Date & Time Picker change event not fired nor is picker.value updated

* [TIMOB-19206](https://jira.appcelerator.org/browse/TIMOB-19206) - Android: Encrypted Database: Not being able to read installed database

* [TIMOB-19231](https://jira.appcelerator.org/browse/TIMOB-19231) - Debug: Breakpoint won't stop if the app name contains space

* [TIMOB-19234](https://jira.appcelerator.org/browse/TIMOB-19234) - iOS debugger connection refused with SDKs 3.5.0 and 3.5.1

* [TIMOB-19383](https://jira.appcelerator.org/browse/TIMOB-19383) - iOS9: Upgrade Facebook module to facebook 4.7.0

* [TIMOB-19386](https://jira.appcelerator.org/browse/TIMOB-19386) - iOS9: Upgrade coremotion module to support bitcode, rewrite code base

* [TIMOB-19529](https://jira.appcelerator.org/browse/TIMOB-19529) - Validation of workspace-dir option always uses default workspace

* [TIMOB-19566](https://jira.appcelerator.org/browse/TIMOB-19566) - Ti.Locale.currentLanguage returns locale on iOS 9

* [TIMOB-19567](https://jira.appcelerator.org/browse/TIMOB-19567) - Last change made after useractivitywillsave does not make it to other device

* [TIMOB-19597](https://jira.appcelerator.org/browse/TIMOB-19597) - Android: Add previewRect (height, width) to camera callback

* [TIMOB-19633](https://jira.appcelerator.org/browse/TIMOB-19633) - iOS: AUDIO\_SESSION\_CATEGORY\_AMBIENT stops background music

* [TIMOB-19647](https://jira.appcelerator.org/browse/TIMOB-19647) - iOS: ImageViews with remote images slow and failing

* [TIMOB-19633](https://jira.appcelerator.org/browse/TIMOB-19633) - iOS: AUDIO\_SESSION\_CATEGORY\_AMBIENT stops background music

* [TIMOB-19650](https://jira.appcelerator.org/browse/TIMOB-19650) - Windows: Builder.createAppIconSet ignores existing assets

* [TIMOB-19663](https://jira.appcelerator.org/browse/TIMOB-19663) - Windows: Missing .apiName properties

* [TIMOB-19722](https://jira.appcelerator.org/browse/TIMOB-19722) - Android: Use the Reveal Effect has NPE

* [TIMOB-19725](https://jira.appcelerator.org/browse/TIMOB-19725) - iOS: Toggled action buttons display over keyboard

* [TIMOB-19737](https://jira.appcelerator.org/browse/TIMOB-19737) - Error when selecting an iOS certificate without provisioning profiles

* [TIMOB-19739](https://jira.appcelerator.org/browse/TIMOB-19739) - iOS: Ti.Contacts custom phone label in phones become undefined

* [TIMOB-19741](https://jira.appcelerator.org/browse/TIMOB-19741) - iOS: webViews within a scrollableView disappear

* [TIMOB-19755](https://jira.appcelerator.org/browse/TIMOB-19755) - Ti.Media calls break app

* [TIMOB-19767](https://jira.appcelerator.org/browse/TIMOB-19767) - iOS: toImage does not honor the scale factor for retina devices

* [TIMOB-19776](https://jira.appcelerator.org/browse/TIMOB-19776) - IOS: TableViewRow text become blank after selecting searched item from TableView default searchbar

* [TIMOB-19777](https://jira.appcelerator.org/browse/TIMOB-19777) - iOS: ListView separator has huge margins on iOS 9

* [TIMOB-19779](https://jira.appcelerator.org/browse/TIMOB-19779) - Android orientations on orientationchange not providing accurate results in some Android Tablets

* [TIMOB-19784](https://jira.appcelerator.org/browse/TIMOB-19784) - Android: Cloud Files Create Error "Invalid Name"

* [TIMOB-19799](https://jira.appcelerator.org/browse/TIMOB-19799) - iOS: ioslib: TypeError: Cannot read property 'sort' of undefined

* [TIMOB-19807](https://jira.appcelerator.org/browse/TIMOB-19807) - KitchenSink: Control->Buttons.Image is positioned on top of the label and can't be resized.

* [TIMOB-19808](https://jira.appcelerator.org/browse/TIMOB-19808) - KitchenSink: BasicUi->Views->ScrollViews->Many on screen causes app to freeze

* [TIMOB-19817](https://jira.appcelerator.org/browse/TIMOB-19817) - Android: HTTPClient multipart header error

* [TIMOB-19821](https://jira.appcelerator.org/browse/TIMOB-19821) - Android 6.0: Device & emulator logs don't show up in studio console

* [TIMOB-19823](https://jira.appcelerator.org/browse/TIMOB-19823) - Android: ConcurrentModificationException at TiListView

* [TIMOB-19836](https://jira.appcelerator.org/browse/TIMOB-19836) - Windows: Missing properties for TitaniumKit Proxy

* [TIMOB-19837](https://jira.appcelerator.org/browse/TIMOB-19837) - Windows: Missing TitaniumKit View properties

* [TIMOB-19838](https://jira.appcelerator.org/browse/TIMOB-19838) - Windows: Fix Jenkins Windows SDK PR Build

* [TIMOB-19846](https://jira.appcelerator.org/browse/TIMOB-19846) - Android fix documentation errors in activity transition

* [TIMOB-19850](https://jira.appcelerator.org/browse/TIMOB-19850) - iOS: Permissions (Geolocation) Bugs in implementation & documentation

* [TIMOB-19851](https://jira.appcelerator.org/browse/TIMOB-19851) - Android: Permissions (Camera) crash and other bugs

* [TIMOB-19855](https://jira.appcelerator.org/browse/TIMOB-19855) - Android 6.0 : Row height in a TableView on android 6.0 is abnormally big

* [TIMOB-19863](https://jira.appcelerator.org/browse/TIMOB-19863) - iOS9: ListView not filling screen width

* [TIMOB-19884](https://jira.appcelerator.org/browse/TIMOB-19884) - iOS: Debug crash when setting breakpoint in alloy model response

* [TIMOB-19885](https://jira.appcelerator.org/browse/TIMOB-19885) - Android 6.0 : Asking for contacts permissions fails with "one or more permissions denied" with SDK 5.1.0.v20151104190037

* [TIMOB-19889](https://jira.appcelerator.org/browse/TIMOB-19889) - iOS: Core Motion crashes when the user moves

* [TIMOB-19899](https://jira.appcelerator.org/browse/TIMOB-19899) - Android 6: Remote images not loading

* [TIMOB-19916](https://jira.appcelerator.org/browse/TIMOB-19916) - Android: HTTPClient ondatastream method responseText is empty for Android

* [TIMOB-19921](https://jira.appcelerator.org/browse/TIMOB-19921) - Windows: Implement missing View properties

* [TIMOB-19925](https://jira.appcelerator.org/browse/TIMOB-19925) - Windows: Implement Ti.App.Properties "change" event

* [TIMOB-19927](https://jira.appcelerator.org/browse/TIMOB-19927) - Windows: Implement Blob.width and height

* [TIMOB-19929](https://jira.appcelerator.org/browse/TIMOB-19929) - Windows: Implement Ti.Filesystem.File.append

* [TIMOB-19930](https://jira.appcelerator.org/browse/TIMOB-19930) - Windows: Implement Ti.Filesystem.File.deleteDirectory

* [TIMOB-19939](https://jira.appcelerator.org/browse/TIMOB-19939) - keyboardType should not list KEYBOARD\_APPEARANCE\_\* constants

* [TIMOB-19947](https://jira.appcelerator.org/browse/TIMOB-19947) - Windows: Implement Titanium.UI.AttributedString

* [TIMOB-19952](https://jira.appcelerator.org/browse/TIMOB-19952) - Windows: Image support for Ti.UI.Button

* [TIMOB-19953](https://jira.appcelerator.org/browse/TIMOB-19953) - Windows: Button only supports "click" event

* [TIMOB-19955](https://jira.appcelerator.org/browse/TIMOB-19955) - Windows: Label only supports "click" event

* [TIMOB-19963](https://jira.appcelerator.org/browse/TIMOB-19963) - Windows: "return" and "change" event for Titanium.UI.TextArea

* [TIMOB-19968](https://jira.appcelerator.org/browse/TIMOB-19968) - Changing use-app-thinning does not force rebuild

* [TIMOB-19970](https://jira.appcelerator.org/browse/TIMOB-19970) - Windows: Warning about duplicate default icon, not overwritten by DefaultIcon

* [TIMOB-19972](https://jira.appcelerator.org/browse/TIMOB-19972) - iOS: Peek&Pop only works on first elements of Ti.UI.ListView

* [TIMOB-20004](https://jira.appcelerator.org/browse/TIMOB-20004) - iOS: Differences between new permission request responses

* [TIMOB-20017](https://jira.appcelerator.org/browse/TIMOB-20017) - Hitting a breakpoint when debugging in Studio causes crash in TiDebuggerUtils

* [TIMOB-20018](https://jira.appcelerator.org/browse/TIMOB-20018) - iOS: Ti.App.fireEvent from webView is not working

* [TIMOB-20022](https://jira.appcelerator.org/browse/TIMOB-20022) - Windows: apidoc YAML generator reports wrong result

* [TIMOB-20028](https://jira.appcelerator.org/browse/TIMOB-20028) - iOS: Layout fails on iOS8 with iOS9-only Picker height set

* [TIMOB-20036](https://jira.appcelerator.org/browse/TIMOB-20036) - Android: HttpClient.abort() on andorid throw errors if the request is just created

* [TIMOB-20038](https://jira.appcelerator.org/browse/TIMOB-20038) - Android: TableView crashes when scrolling more than 29 rows

* [TIMOB-20061](https://jira.appcelerator.org/browse/TIMOB-20061) - TLS Version set in Android ignored on Publish

* [TIMOB-20070](https://jira.appcelerator.org/browse/TIMOB-20070) - iOS Apple watch Integration | Embedded Content Contains Swift Code is not enabled error

* [TIMOB-20072](https://jira.appcelerator.org/browse/TIMOB-20072) - iOS: Ti.Media.saveToPhotoGallery does not call back for unsupported mime types

* [TIMOB-20073](https://jira.appcelerator.org/browse/TIMOB-20073) - iOS: Dynamic Shortcut crashes app when it has no userInfo

* [TIMOB-20078](https://jira.appcelerator.org/browse/TIMOB-20078) - Windows: Ti.UI.TextArea selected event doesn't work

* [TIMOB-20087](https://jira.appcelerator.org/browse/TIMOB-20087) - 5.1.X breaks ability to bind one collection to different views / reset collection

* [TIMOB-20089](https://jira.appcelerator.org/browse/TIMOB-20089) - Android: setting a view layout to null crashes the app

* [TIMOB-20101](https://jira.appcelerator.org/browse/TIMOB-20101) - Windows: Link error with JavaScriptCore for Windows 10 ARM

* [TIMOB-20108](https://jira.appcelerator.org/browse/TIMOB-20108) - App sometimes crashes on resume

* [TIMOB-20113](https://jira.appcelerator.org/browse/TIMOB-20113) - Android: Rounded view is not being shown if its size more than screen size

* [TIMOB-20130](https://jira.appcelerator.org/browse/TIMOB-20130) - SDK no longer finds Genymotion after upgrade to 2.6.0

* [TIMOB-20138](https://jira.appcelerator.org/browse/TIMOB-20138) - Consecutive calls to ScrollableView.setViews causes the app to become unresponsive

* [TIMOB-20165](https://jira.appcelerator.org/browse/TIMOB-20165) - iOS Ti Geolocation callback thread issue.

* [TIMOB-20172](https://jira.appcelerator.org/browse/TIMOB-20172) - Windows 10: Cannot package for the phonestore or winstore

* [TIMOB-20192](https://jira.appcelerator.org/browse/TIMOB-20192) - \[Windows Phone 8.1\] Certification reject - This API is not supported for this application type - Api=OutputDebugStringA. Module=api-ms-win-core-debug-l1-1-1.dll

* [TIMOB-20196](https://jira.appcelerator.org/browse/TIMOB-20196) - iOS: on ScrollableView is not possible to change views

* [TIMOB-20197](https://jira.appcelerator.org/browse/TIMOB-20197) - Windows: Phone App crashes after Splash Screen

* [TIMOB-20199](https://jira.appcelerator.org/browse/TIMOB-20199) - iOS: Views disappear from ScrollableView on change

* [TIMOB-20213](https://jira.appcelerator.org/browse/TIMOB-20213) - iOS: app crash when closing the active window while searchbar in listview is focused

* [TIMOB-20217](https://jira.appcelerator.org/browse/TIMOB-20217) - iOS: Ti.Geolocation.hasGeolocationPermission() and Ti.Geolocation.getCurrentPosition() are not working on IOS 7

* [TIMOB-20233](https://jira.appcelerator.org/browse/TIMOB-20233) - ti.SafariDialog module folder exists outside the modules/iphone folder in the titanium folder along with rogue \_MACOSX folder after installing SDK 5.2.0.v20160111111831

* [TIMOB-20238](https://jira.appcelerator.org/browse/TIMOB-20238) - Build Server Zip files to not unzip on download or Finder

* [TIMOB-20239](https://jira.appcelerator.org/browse/TIMOB-20239) - Windows: HttpClient error on NTLM authentication

* [TIMOB-20251](https://jira.appcelerator.org/browse/TIMOB-20251) - Android 6.0: [java.io](http://java.io/).FileNotFoundException: open failed: ENOENT (No such file or directory)

* [TIMOB-20252](https://jira.appcelerator.org/browse/TIMOB-20252) - Windows: Windows 10 SDK is not detected

* [TIMOB-20260](https://jira.appcelerator.org/browse/TIMOB-20260) - Android 6: CameraView with overlay crash with message "AppName is not responding"

* [TIMOB-20265](https://jira.appcelerator.org/browse/TIMOB-20265) - Android: Ti.UI.View "borderRadius" property not working on android 4.4.2 & 4.2.2

* [TIMOB-20274](https://jira.appcelerator.org/browse/TIMOB-20274) - Hyperloop: Plugin fails if the source does not contain HL references

* [TIMOB-20283](https://jira.appcelerator.org/browse/TIMOB-20283) - Facebook iOS Module 5.0.0 crashes on resume on iOS 8.4

* [TIMOB-20298](https://jira.appcelerator.org/browse/TIMOB-20298) - Classic Titanium app with tabs crashes when closed on iOS

* [TIMOB-20299](https://jira.appcelerator.org/browse/TIMOB-20299) - Windows: Build errors out with 'mix is not a function'

* [TIMOB-20368](https://jira.appcelerator.org/browse/TIMOB-20368) - Docs: Ti.UI.KEYBOARD\_TYPE\_\* "since" incorrect

* [TIMOB-20389](https://jira.appcelerator.org/browse/TIMOB-20389) - iOS: Listview delete event sends wrong itemId

* [TIMOB-20393](https://jira.appcelerator.org/browse/TIMOB-20393) - iOS: Launch Image Set leaves out required sizes if no (>=8.0) minimum iOS version is set

* [TIMOB-20400](https://jira.appcelerator.org/browse/TIMOB-20400) - WWDR certificate can not be found in keychain other than system

* [TIMOB-20408](https://jira.appcelerator.org/browse/TIMOB-20408) - Apple WWDR certificate update is not recognized

* [TIMOB-20410](https://jira.appcelerator.org/browse/TIMOB-20410) - Android: Adding view as a customView to an annotation in maps crashes the app

* [TIMOB-20434](https://jira.appcelerator.org/browse/TIMOB-20434) - Kitchen Sink Crashes on initial install

## Improvements

This release includes 28 improvements.

* [CLI-746](https://jira.appcelerator.org/browse/CLI-746) - Add SPDX-compliant license string

    * Users can now use the SPDX "LicenseRef-LICENSE" instead of "Appcelerator Commercial" in the package.json files to avoid the "license should be a valid SPDX license expression" warning.

    * The root also now includes a LICENSE.md file

* [CLI-852](https://jira.appcelerator.org/browse/CLI-852) - appc run can not set port for Arrow apps

    * You can now set the port for Arrow apps by using this command: `appc run --port xxxx:`

* [CLI-858](https://jira.appcelerator.org/browse/CLI-858) - Add timestamps to logging output

    * When using `-l trace` or `-l debug`, a timestamp is added to log levels of the output. For example:

    * ```
        2015-10-29T08:38:48+00:00 | INFO   | Get the registry...
        ```

* [CLI-934](https://jira.appcelerator.org/browse/CLI-934) - Output warning message if appc-install is less than 4.2.3-2

    * Appc CLI 5.2.0 requires appc-install 4.2.3-2+ to work. If a lesser version is installed, users will see the following error message:

    * ```bash
        Appcelerator Command-Line Interface, version 5.2.0-249
        Copyright (c) 2014-2016, Appcelerator, Inc.  All Rights Reserved.

        AppC CLI requires appcelerator@4.2.3 or newer.
        To install the latest version: [sudo] npm install appcelerator -g
        ....
        ```

* [TIMOB-16547](https://jira.appcelerator.org/browse/TIMOB-16547) - iOS: Add ability to set color and backgroundColor for Picker control

    * The hardcoded background color (white) of the Picker control can now be set through the Ti Picker control.

* [TIMOB-16865](https://jira.appcelerator.org/browse/TIMOB-16865) - Android / MobileWeb: Unable to remove the TableView row separators even if the color is set to transparent

    * Android and MobileWeb now allows for the removal of TableView row separators when color is set to transparent.

* [TIMOB-19185](https://jira.appcelerator.org/browse/TIMOB-19185) \- Liveview: Update liveview to work with Windows Platform

    * Liveview now works when building Windows Platform by passing the --liveview flag

* [TIMOB-19194](https://jira.appcelerator.org/browse/TIMOB-19194) - Ti.Android.Intent: Ability to send multiple URI to an intent

    * Ti.Android.Intent allows you to send multiple URI to an intent.

* [TIMOB-19452](https://jira.appcelerator.org/browse/TIMOB-19452) - Extensions should default to the app's provisioning profile if not set

    * If extension provisioning profile is not set up, the CLI will use the application provision profile.

* [TIMOB-19512](https://jira.appcelerator.org/browse/TIMOB-19512) - iOS build: ensure app icons are 24-bit (no transparency)

    * Since iOS apps cannot use app icons with an alpha channel, any builds attempting to use icons with alpha channels will have the alpha channel stripped from the image.

* [TIMOB-19577](https://jira.appcelerator.org/browse/TIMOB-19577) - Android: Update Facebook Module to support Facebook SDK 4.7.0

    * Facebook Module for Android now supports Facebook SDK 4.7.0

* [TIMOB-19580](https://jira.appcelerator.org/browse/TIMOB-19580): Custom activity transition

    * You can specify custom animations in material design app’s enter and exit (content) transitions and for transitions shared elements between activities.

* [TIMOB-19726](https://jira.appcelerator.org/browse/TIMOB-19726) - Android: Refactor map module to remove deprecated method getMap()

    * Android developers should use `getMapAsync()` method instead of the deprecated `getMap()` method

* [TIMOB-19759](https://jira.appcelerator.org/browse/TIMOB-19759) - iOS: Parity: tab listeners

    * Event listeners for iOS's TabGroup `selected` and `unselected` have been deprecated in favor of `focus`

* [TIMOB-19763](https://jira.appcelerator.org/browse/TIMOB-19763) - iOS: Support item-specific peek for previewContext on ListView

    * Support for providing a preview context based on the current Ti.UI.ListItem.

* [TIMOB-19819](https://jira.appcelerator.org/browse/TIMOB-19819) - iOS: Disable ATS in builtin KitchenSink by default

    * iOS 9's App Transport Security (ATS) is now disabled by default when developing for the SDK to achieve parity between the development and production environment.

* [TIMOB-19825](https://jira.appcelerator.org/browse/TIMOB-19825) - Android module build should support AIDL files

    * Android module builds now support AIDL files

* [TIMOB-19828](https://jira.appcelerator.org/browse/TIMOB-19828) - Ti.SDK 5.2.0 supports Node.js 5.0

    * Ti.SDK 5.2.0 supports Node.js 5.0

* [TIMOB-19829](https://jira.appcelerator.org/browse/TIMOB-19829) - iOS: Add trackTintColor to Ti.UI.ProgressBar

    * Ti.UI.ProgressBar on iOS supports coloring options for active progress

* [TIMOB-19940](https://jira.appcelerator.org/browse/TIMOB-19940) - Add \*appearance-properties to AlertDialog

    * Deprecated `*appearance` property in favor for `keyboardApperance`

* [TIMOB-19948](https://jira.appcelerator.org/browse/TIMOB-19948) - Windows: Use font cache for TextArea and Button

    * Font cache has been extended to `TextArea` and `Button`

* [TIMOB-20000](https://jira.appcelerator.org/browse/TIMOB-20000) - Rename appearance properties to keyboardAppearance

    * Added keyboardAppearance for searchBar, textArea, textField, and textWidget

    * Also deprecated all the constants (Keyboard\_Default and Keyboard\_Type\_Default)

* [TIMOB-20001](https://jira.appcelerator.org/browse/TIMOB-20001) - iOS: Rename Ti.Media.CAMERA\_AUTHORIZATION\_NOT\_DETERMINED to UNKNOWN

    * Renamed the API `CAMERA_AUTHORIZATION_*` to `CAMERA_AUTHORIZATION_UNKNOWN`

* [TIMOB-20005](https://jira.appcelerator.org/browse/TIMOB-20005) - Line up \*Authorization properties

    * Renamed `Ti.Calendar.eventsAuthorization` to `calendarAuthorization`

    * Renamed `Ti.Media.cameraAuthorizationStatus` to `cameraAuthorization`

* [TIMOB-20015](https://jira.appcelerator.org/browse/TIMOB-20015) - iOS: Improve deprecation macros

    * Deprecation warnings now follow a standardized format style.

* [TIMOB-20055](https://jira.appcelerator.org/browse/TIMOB-20055) - iOS: Refactor previewContext to be more memory-efficient

    * The 3D-Touch feature "Peek and Pop" is now more memory-efficient when working will a huge number of cells.

* [TIMOB-20059](https://jira.appcelerator.org/browse/TIMOB-20059) - iOS: 'person' property in Ti.Contacts.showContacts is empty

    * The callback event for both `selectedProperty` and `selectedPerson` of `Ti.Contacts.showContacts` no longer returns an empty value for the person property

* [TIMOB-20098](https://jira.appcelerator.org/browse/TIMOB-20098) - Windows: Update bundled cmake to 3.4.1

    * Updated cmake to 3.4.1 for some Windows 10 related fixes and improvements

## API Changes

### New APIs

The following APIs are new or have expanded platform support in Release 5.2.0.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Calendar.calendarAuthorization | property | Returns an authorization constant indicating if the application has access to the events in the EventKit. (New API, supported on iPhone and iPad.) |
| Titanium.Calendar.getCalendarAuthorization | method | Gets the value of the Titanium.Calendar.calendarAuthorization property. (New API, supported on iPhone and iPad.) |
| Titanium.Media.CAMERA\_AUTHORIZATION\_UNKNOWN | property | Constant specifying that app is not yet authorized to use camera. This is available on iOS7 and later. (New API, supported on iPhone and iPad.) |
| Titanium.Media.MEDIA\_TYPE\_LIVEPHOTO | property | Media type constant for live photo media. (New API, supported on iPhone and iPad.) |
| Titanium.Media.cameraAuthorization | property | Returns the authorization status for the camera. (New API, supported on iPhone and iPad.) |
| Titanium.Media.getCameraAuthorization | method | Gets the value of the Titanium.Media.cameraAuthorization property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.getKeyboardAppearance | method | Gets the value of the Titanium.UI.AlertDialog.keyboardAppearance property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.keyboardAppearance | property | Keyboard appearance to be displayed when the text field inside the dialog is focused. (New API, supported on iPhone and iPad.) |
| Titanium.UI.AlertDialog.setKeyboardAppearance | method | Sets the value of the Titanium.UI.AlertDialog.keyboardAppearance property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Android.TRANSITION\_CHANGE\_BOUNDS | property | Captures layout bounds of target views before and after the scene change and animates those changes during the transition. (New API, supported on Android.) |
| Titanium.UI.Android.TRANSITION\_CHANGE\_CLIP\_BOUNDS | property | Captures the clip bounds before and after the scene change and animates those changes during the transition. (New API, supported on Android.) |
| Titanium.UI.Android.TRANSITION\_CHANGE\_IMAGE\_TRANSFORM | property | Captures an ImageView's matrix before and after the scene change and animates it during the transition. (New API, supported on Android.) |
| Titanium.UI.Android.TRANSITION\_CHANGE\_TRANSFORM | property | Captures scale and rotation for Views before and after the scene change and animates those changes during the transition. (New API, supported on Android.) |
| Titanium.UI.Android.TRANSITION\_EXPLODE | property | Moves views in or out from the edges of the scene. (New API, supported on Android.) |
| Titanium.UI.Android.TRANSITION\_FADE\_IN | property | Fades in the views. (New API, supported on Android.) |
| Titanium.UI.Android.TRANSITION\_FADE\_OUT | property | Fades out the views. (New API, supported on Android.) |
| Titanium.UI.Android.TRANSITION\_NONE | property | Resets transition to platform default. (New API, supported on Android.) |
| Titanium.UI.Android.TRANSITION\_SLIDE\_BOTTOM | property | Moves views to bottom. (New API, supported on Android.) |
| Titanium.UI.Android.TRANSITION\_SLIDE\_LEFT | property | Moves views to left. (New API, supported on Android.) |
| Titanium.UI.Android.TRANSITION\_SLIDE\_RIGHT | property | Moves views to right. (New API, supported on Android.) |
| Titanium.UI.Android.TRANSITION\_SLIDE\_TOP | property | Moves views to top. (New API, supported on Android.) |
| Titanium.UI.KEYBOARD\_APPEARANCE\_DARK | property | Use the platform-specific dark keyboard appearance. (New API, supported on iPhone and iPad.) |
| Titanium.UI.KEYBOARD\_APPEARANCE\_LIGHT | property | Use the platform-specific light keyboard appearance. (New API, supported on iPhone and iPad.) |
| Titanium.UI.KEYBOARD\_TYPE\_ASCII | property | Use an ASCII keyboard, with the standard keyboard layout. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.KEYBOARD\_TYPE\_DECIMAL\_PAD | property | Use a keyboard with decimal numbers only, with the pad keyboard layout. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.KEYBOARD\_TYPE\_DEFAULT | property | Use the default keyboard, depending on the platform. (New API, supported on Android, iPhone, iPad and Mobile Web.) |
| Titanium.UI.KEYBOARD\_TYPE\_EMAIL | property | Use a keyboard suitable for composing email, with the standard keyboard layout. (New API, supported on Android, iPhone, iPad and Mobile Web.) |
| Titanium.UI.KEYBOARD\_TYPE\_NAMEPHONE\_PAD | property | Use a keyboard suitable for entering names and phone numbers, with the pad keyboard layout. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.KEYBOARD\_TYPE\_NUMBERS\_PUNCTUATION | property | Use a keyboard with numbers and punctuation only, with the standard keyboard layout. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.KEYBOARD\_TYPE\_NUMBER\_PAD | property | Use a keyboard with a number pad only, with the pad keyboard layout. (New API, supported on Android, iPhone, iPad and Mobile Web.) |
| Titanium.UI.KEYBOARD\_TYPE\_PHONE\_PAD | property | Use a keyboard with a phone-style number pad, with the pad keyboard layout. (New API, supported on Android, iPhone, iPad and Mobile Web.) |
| Titanium.UI.KEYBOARD\_TYPE\_TWITTER | property | Use a keyboard optimized for twitter text entry, with easy access to the @ and (New API, supported on iPhone and iPad.) |
| Titanium.UI.KEYBOARD\_TYPE\_URL | property | Use a keyboard optimized for entering URLs, with the standard keyboard layout. (New API, supported on Android, iPhone, iPad and Mobile Web.) |
| Titanium.UI.KEYBOARD\_TYPE\_WEBSEARCH | property | Use a keyboard optimized for web search terms and URL entry. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListItem.canInsert | property | Specifies if the item can be inserted by a user initiated action. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.dragend | event | Fired when the user stops dragging the list view. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ListView.dragstart | event | Fired when the user starts dragging the list view. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Picker.backgroundColor | property | Background color of the picker, as a color name or hex triplet. (Added support for iPhone and iPad.) |
| Titanium.UI.Picker.dateTimeColor | property | Sets the text color of date- and time-pickers. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Picker.getBackgroundColor | method | Gets the value of the Titanium.UI.Picker.backgroundColor property. (Added support for iPhone and iPad.) |
| Titanium.UI.Picker.getDateTimeColor | method | Gets the value of the Titanium.UI.Picker.dateTimeColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Picker.setBackgroundColor | method | Sets the value of the Titanium.UI.Picker.backgroundColor property. (Added support for iPhone and iPad.) |
| Titanium.UI.Picker.setDateTimeColor | method | Sets the value of the Titanium.UI.Picker.dateTimeColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ProgressBar.getTrackTintColor | method | Gets the value of the Titanium.UI.ProgressBar.trackTintColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ProgressBar.setTrackTintColor | method | Sets the value of the Titanium.UI.ProgressBar.trackTintColor property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.ProgressBar.trackTintColor | property | The color shown for the portion of the progress bar that is not filled. (New API, supported on iPhone and iPad.) |
| Titanium.UI.RETURNKEY\_CONTINUE | property | Set the return key text to "Continue". (New API, supported on iPhone and iPad.) |
| Titanium.UI.SearchBar.getKeyboardAppearance | method | Gets the value of the Titanium.UI.SearchBar.keyboardAppearance property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.SearchBar.keyboardAppearance | property | Determines the appearance of the keyboard to be displayed the field is focused. (New API, supported on iPhone and iPad.) |
| Titanium.UI.SearchBar.setKeyboardAppearance | method | Sets the value of the Titanium.UI.SearchBar.keyboardAppearance property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.TABLE\_VIEW\_SEPARATOR\_STYLE\_NONE | property | The row divider is hidden. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.TABLE\_VIEW\_SEPARATOR\_STYLE\_SINGLE\_LINE | property | The row divider is shown as a single line. (New API, supported on Android, iPhone and iPad.) |
| Titanium.UI.Tab.getIconInsets | method | Gets the value of the Titanium.UI.Tab.iconInsets property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Tab.iconInsets | property | The icon inset or outset for each edge. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Tab.selected | event | Fired when the tab is selected. (New API, supported on Android, iPhone, iPad and Mobile Web.) |
| Titanium.UI.Tab.setIconInsets | method | Sets the value of the Titanium.UI.Tab.iconInsets property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Tab.unselected | event | Fired when the tab is no longer selected. (New API, supported on Android, iPhone, iPad and Mobile Web.) |
| Titanium.UI.TableView.getMaxClassname | method | Gets the value of the Titanium.UI.TableView.maxClassname property. (New API, supported on Android.) |
| Titanium.UI.TableView.getSeparatorStyle | method | Gets the value of the Titanium.UI.TableView.separatorStyle property. (Added support for Android.) |
| Titanium.UI.TableView.maxClassname | property | Max number of row class names. (New API, supported on Android.) |
| Titanium.UI.TableView.separatorStyle | property | Separator style constant. (Added support for Android.) |
| Titanium.UI.TableView.setMaxClassname | method | Sets the value of the Titanium.UI.TableView.maxClassname property. (New API, supported on Android.) |
| Titanium.UI.TableView.setSeparatorStyle | method | Sets the value of the Titanium.UI.TableView.separatorStyle property. (Added support for Android.) |
| Titanium.UI.TextField.getInputType | method | Gets the value of the Titanium.UI.TextField.inputType property. (New API, supported on Android.) |
| Titanium.UI.TextField.inputType | property | Input type to accept in thetext field. Also influences the Keyboard type to display. (New API, supported on Android.) |
| Titanium.UI.TextField.setInputType | method | Sets the value of the Titanium.UI.TextField.inputType property. (New API, supported on Android.) |
| Titanium.UI.Window.addSharedElement | method | Adds a common UI element to participate in window transition animation. (New API, supported on Android.) |
| Titanium.UI.Window.getSwipeToClose | method | Gets the value of the Titanium.UI.Window.swipeToClose property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.removeAllSharedElements | method | Clears all added shared elements. (New API, supported on Android.) |
| Titanium.UI.Window.setSwipeToClose | method | Sets the value of the Titanium.UI.Window.swipeToClose property. (New API, supported on iPhone and iPad.) |
| Titanium.UI.Window.swipeToClose | property | Boolean value indicating if the user should be able to close a window using a swipe gesture. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.LIVEPHOTO\_PLAYBACK\_STYLE\_FULL | property | Plays back the entire motion and sound content of the Live Photo, including transition effects at the start and end. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.LIVEPHOTO\_PLAYBACK\_STYLE\_HINT | property | Plays back only a brief section of the motion content of the Live Photo, without sound. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.LivePhotoView | object | A view to display a Live Photo object introduced in iOS 9.1. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iOS.createLivePhotoView | method | Creates and returns an instance of Titanium.UI.iOS.LivePhotoView. (New API, supported on iPhone and iPad.) |
| Titanium.UI.iPad.Popover.backgroundColor | property | Sets the background color of the popover. (New API, supported on iPad.) |
| Titanium.UI.iPad.Popover.getBackgroundColor | method | Gets the value of the Titanium.UI.iPad.Popover.backgroundColor property. (New API, supported on iPad.) |
| Titanium.UI.iPad.Popover.setBackgroundColor | method | Sets the value of the Titanium.UI.iPad.Popover.backgroundColor property. (New API, supported on iPad.) |

### Deprecated APIs

The following APIs are deprecated in Release 5.2.0 as of February 22nd, 2016.

| API | Type | Notes |
| --- | --- | --- |
| Titanium.App.iOS.UserActivity.useractivitywillsave | event | set property `needsSave` to true everytime you update current activity state instead. |
| Titanium.Calendar.STATUS\_CANCELLED | property | Use STATUS\_CANCELED instead. |
| Titanium.Calendar.eventsAuthorization | property | Use calendarAuthorization instead. |
| Titanium.Calendar.getEventsAuthorization | method | Use calendarAuthorization instead. |
| Titanium.Media.CAMERA\_AUTHORIZATION\_NOT\_DETERMINED | property | Use CAMERA\_AUTHORIZATION\_UNKNOWN instead. |
| Titanium.Media.cameraAuthorizationStatus | property | Use cameraAuthorization instead. |
| Titanium.Media.getCameraAuthorizationStatus | method | Use cameraAuthorization instead. |
| Titanium.UI.KEYBOARD\_ASCII | property | Use KEYBOARD\_TYPE\_ASCII instead. |
| Titanium.UI.KEYBOARD\_DECIMAL\_PAD | property | Use KEYBOARD\_TYPE\_DECIMAL\_PAD instead. |
| Titanium.UI.KEYBOARD\_DEFAULT | property | Use KEYBOARD\_TYPE\_DEFAULT instead. |
| Titanium.UI.KEYBOARD\_EMAIL | property | Use KEYBOARD\_TYPE\_EMAIL instead. |
| Titanium.UI.KEYBOARD\_NAMEPHONE\_PAD | property | Use KEYBOARD\_TYPE\_NAMEPHONE\_PAD instead. |
| Titanium.UI.KEYBOARD\_NUMBERS\_PUNCTUATION | property | Use KEYBOARD\_TYPE\_NUMBERS\_PUNCTUATION instead. |
| Titanium.UI.KEYBOARD\_NUMBER\_PAD | property | Use KEYBOARD\_TYPE\_NUMBER\_PAD instead. |
| Titanium.UI.KEYBOARD\_PHONE\_PAD | property | Use KEYBOARD\_TYPE\_PHONE\_PAD instead. |
| Titanium.UI.KEYBOARD\_URL | property | Use KEYBOARD\_TYPE\_URL instead. |
| Titanium.UI.Tab.blur | event | Use unselected instead. |
| Titanium.UI.Tab.focus | event | Use selected instead. |
| Titanium.UI.TabGroup.selected | event | Use focus instead. |
| Titanium.UI.TabGroup.unselected | event | Use blur instead. |
| Titanium.UI.TextArea.appearance | property | Use keyboardAppearance instead |
| Titanium.UI.TextArea.getAppearance | method | Use keyboardAppearance instead |
| Titanium.UI.TextArea.setAppearance | method | Use keyboardAppearance instead |
| Titanium.UI.TextField.appearance | property | Use keyboardAppearance instead. |
| Titanium.UI.TextField.getAppearance | method | Use keyboardAppearance instead. |
| Titanium.UI.TextField.setAppearance | method | Use keyboardAppearance instead. |

## Known Issues

### iOS Launch Logo Caching Issue

Launch logo updates are not reflected when rebuilding the app. iOS caches launch screens to a PNG file that appears to only be invalidated by restarting the iOS. The following changes have no effect: uninstalling the app, cleaning the Titanium app and rebuilding, and removing the cached image from the hard drive. Upon installing the updated app, it writes a new PNG file to cache of the old launch screen. It appears iOS keeps the cached launch screen in memory despite the app is not running. The only way to show the updated launch logo is to restart the simulator and/or device. Users should see a warning about this issue.

### iOS9.1 PHLivePhoto and PHLivePhotoView

Apple currently does not expose an API to capture live photos, just to select existing ones. The feature will be added as soon as Apple exposes that API as well.
