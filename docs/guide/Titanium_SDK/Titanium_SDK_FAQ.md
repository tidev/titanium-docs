---
title: Titanium SDK FAQ
weight: '50'
---

# Titanium SDK FAQ

<div class="faq">

This document provides answers and links to commonly asked questions about Titanium SDK.

## How to install Titanium Mobile

You will need node/npm and then you can run `sudo npm i -g titanium alloy` to have all CLI tools. For more details check [Titanium_SDK_Getting_Started](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/) or the [from zero to app - install guide](https://fromzerotoapp.com/how-to-install-appcelerator-titanium/).

## Where can I find more Titanium tutorials or modules?

Besides this documentation you can look at [from zero to app](https://fromzerotoapp.com/). There you find basic tutorials about installation, your first app, UI tutorials, optimizing apps and much more. It also has a list of common modules you can use in your apps.

## No iOS simulator is visible or it will say "Unable to find an iOS Simulator"

Go to XCode and make sure `preferences->locations->Command Line Tools` is set to the correct XCode path.

## VSCode won't update the CLI

Run `sudo npm i -g titanium alloy` in a terminal and restart VSCode. Then it should use the latest CLI tools.

## I can't compile my old app with the current SDK because of "This application cannot be built with the Titanium open source SDK because it is an Appcelerator Platform registered application"

Check [Transfer your app from appc CLI to ti CLI](/guide/Titanium_SDK/Titanium_SDK_How-tos/Transfer_your_app_from_appc_CLI_to_ti_CLI/) and change the GUID inside tiapp.xml.

## My Android app is not using my splashscreen image but shows the icon when starting on Android 12+

That is the way Android 12+ will start an app. For more details check [the Andorid guides](https://developer.android.com/develop/ui/views/launch/splash-screen). Make sure you use [Adaptive icons](https://fromzerotoapp.com/android-adaptive-icons/). If you want to change the background color use this in your theme:

tiapp.xml (adjust the name!):
```xml
<application >
	<activity android:name="com.myapp.MyAppActivity" android:theme="@style/Theme.Custom.Splash" />
</application>
```

theme:
```xml
<style name="Theme.Custom.Splash" parent="@style/Theme.MaterialComponents.NoActionBar">
  <item name="android:windowBackground">@drawable/background_cropped</item>
  <item name="android:windowSplashScreenBackground">@color/orange</item>
</style>
```
drawable/background_cropped.xml:
```xml
<?xml version="1.0" encoding="utf-8"?>
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">
	<item android:drawable="@color/orange"/>
	<item>
		<bitmap android:src="@drawable/background" android:gravity="center"/>
	</item>
</layer-list>
```
(drawable/background.png is the logo)

## Can I use Swift code to develop apps for Android in Hyperloop?

Short answer is no. You cannot use Swift code to develop Android apps. Classes in Hyperloop map to the underlying classes defined in Objective-C for iOS and in Java for Android.

Refer to [Android Hyperloop Programming Guide](/guide/Titanium_SDK/Titanium_SDK_Guide/Hyperloop/Hyperloop_Guides/Android_Hyperloop_Programming_Guide/) and [iOS Hyperloop Programming Guide](/guide/Titanium_SDK/Titanium_SDK_Guide/Hyperloop/Hyperloop_Guides/iOS_Hyperloop_Programming_Guide/) for information on how to develop apps using Hyperloop.

## Does geofence module uses coreLocation (for iOS) or does it use something else?

Yes, it uses corelocation but it hasn't been verified as a background mode. You can try it using the `theNSLocationWhenInUseUsageDescription` key in the `plist`.

## How do I use Titanium.Android.Intent in Android for calendar

The following code sample could be used to do this:

```javascript
var intent = Ti.Android.createIntent({
   action: Ti.Android.ACTION_INSERT_OR_EDIT,
   type: "vnd.android.cursor.item/event"
});
Ti.Android.currentActivity.startActivity(intent)
```

## Create an Appcelerator Android module with armeabi-v7a,x86 architectures

Create a Titanium module:

1. Edit the manifest and change the `architectures` line to `architectures: armeabi-v7a,x86`

2. Change directories to `android`.

3. Execute this command: `ti build -p android --build-only`

4. Verify the `libs` and `dist/<whatever>.zip` file only contains the desired architectures.

## iOS 10+ and plist

For the iOS 10 or later version, you have to add the following keys in the `plist` of the `tiapp.xml` file, if you use any of the following:

* **`NSContactsUsageDescription`**: If you use the Ti.Contacts API to access contacts from the address book

* **`NSCameraUsageDescription`**: If you use the Ti.Media.showCamera API to capture photos and videos

* **`NSCalendarsUsageDescription`**: If you use the Ti.Calendar API to access device calendars

* **`NSPhotoLibraryUsageDescription`**: If you use the Ti.Media.openPhotoGallery API to access the photo gallery or Ti.Media.showCamera API to save photos

* **`NSMicrophoneUsageDescription`**: If you use the Ti.Media.AudioRecorder API to record audio or Ti.Media.showCamera to record videos

An example of updated `tiapp.xml` file might look something like this:

```xml
<ios>
   <plist>
       <dict>
           <key>NSContactsUsageDescription</key>
           <string>Can we use to your contacts?</string>
           <key>NSCameraUsageDescription</key>
           <string>Can we use your camera?</string>
           <key>NSCalendarsUsageDescription</key>
           <string>Can we use your calendar?</string>
           <key>NSPhotoLibraryUsageDescription</key>
           <string>Can we save to your library?</string>
           <key>NSMicrophoneUsageDescription</key>
           <string>Can we use your microphone?</string>
       </dict>
   </plist>
</ios>
```

## How to change the Android buildtools version

To verify your buildtools version, go to your Android SDK location: `/users/<user>/Library/Android/sdk/build-tools/ <version_number>`

You can change the build tools version using this command: `ti config android.buildTools.selectedVersion ##.##.##`

## Building Android modules using a M1 Mac - solving NDK issues

Go to `.../android-sdk/ndk/21.4.7075529` and edit `ndk-build`. Change
```
#!/bin/sh
DIR="$(cd "$(dirname "$0")" && pwd)"
$DIR/build/ndk-build "$@"
```
to
```
#!/bin/sh
DIR="$(cd "$(dirname "$0")" && pwd)"
arch -x86_64 /bin/bash $DIR/build/ndk-build "$@"
```
(source: https://stackoverflow.com/a/69555276/5193915)

## How do you check if a module supports 64bit or not?

1. Build your module.

2. Open a terminal and change directories to the module's last directory (where the `libti.modulename.a` is located).

3. Execute either `xcrun lipo -info` or `xcrun lipo -info libti.modulename.a`. For example, executing `xcrun lipo -info libti.barcode.a` should return this info: `Architectures in the fat file: libti.barcode.a are: armv7 i386 x86_64 arm64`

## Localization supports for the plist file

You can add localization support in the plist file. Here is an example for Japanese language for camera permission:

**tiapp.xml**

```xml
<ti:app>
  <ios>
      <plist>
          <dict>
             <key>NSCameraUsageDescription</key>
                  <string>Can we use your camera?</string>
          </dict>
      </plist>
  </ios>
</ti:app>

//i18n/ja/app.xml
<?xml version="1.0" encoding="UTF-8"?>
<resources>
  <string name="NSCameraUsageDescription">あなたのカメラは使えますか?</string>
</resources>
```

After applying this, if you change your device language to Japanese, you will the changes take effect.

## Where can I find the best practices for Titanium SDK?

[Best Practices and Recommendations](/guide/Titanium_SDK/Titanium_SDK_Guide/Best_Practices_and_Recommendations/)

## What are the system requirements?

Your system environment must meet the following requirements:

* **Operating System:** A recent version of Windows or Mac OS X

* **Memory:** 8 GB RAM minimum system memory (2 GB RAM available memory). 16 GB RAM recommended.

* **Java Runtime:** Oracle JDK (no other brand of Java is suitable)

* **Node.js:** Required for the Titanium command-line tools like the CLI, Alloy and AMPLIFY Runtime Services

::: tip 💡 Hint
For Windows, you can use either 32-bit or 64-bit versions of Java JDK. Please refer to [Studio Java Support](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Titanium_Compatibility_Matrix/Studio_Java_Support/) for more information.
:::

For more details, please refer to [Prerequisites](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/) document.

For a complete list of compatibility of system environments, dependencies, and other requirements, please review [Titanium Compatibility Matrix](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Titanium_Compatibility_Matrix/) document.

## What are the reserved words?

See [Reserved Words](/guide/Titanium_SDK/Titanium_SDK_Guide/Best_Practices_and_Recommendations/Reserved_Words/) for details.

## What is Hyperloop?

Hyperloop gives you direct access to the native APIs. Titanium SDK already covers plenty of the native APIs and makes them cross-platform addressing the most popular APIs. This technology was built for those developers who require access to even the most obscure APIs out there.

## How do I enable Hyperloop?

See [Enabling Hyperloop](/guide/Titanium_SDK/Titanium_SDK_Guide/Hyperloop/Enabling_Hyperloop/) for details.

</div>
