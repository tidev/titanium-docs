---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Android/Android.yml
---
# Titanium.Android

<TypeHeader/>

## Overview

The Android module allows the application to manage various Android components.

### Action Bar

An action bar is a UI feature that identifies the application and user location, and
provides user actions and navigation modes.

The Titanium SDK lets you customize the look of the action bar and add action items.
Action items are added using the <Titanium.Android.Menu> API.

For more information about the action bar, see the
[Titanium.Android.ActionBar API reference](Titanium.Android.ActionBar).

### Activities

An Android application is made up of one or more activities. Each activity represents a single screen
with a user interface.

In Titanium, each `Window` or `TabGroup` has its own activity. The application
can access the activity of a `Window` and `TabGroup` object and monitor its lifecycle events.
Titanium also lets you launch new activities by creating intents to launch them.
See the "Intents" section below.

For more information about activities, see the
[Titanium.Android.Activity API reference](Titanium.Android.Activity).

### Broadcast Intents and Receivers

Broadcast Intents allow your application to send out a message to any application that sets up
a Broadcast Receiver to listen to it. Your application can also register Broadcast Receivers
to listen to system events sent by the Android OS, such as low battery warnings or airplane
mode changes.

For more information about broadcasts, see the
[Android Broadcast Intents and Receivers guide](https://titaniumsdk.com/guide/Titanium_SDK/Titanium_SDK_How-tos/Platform_API_Deep_Dives/Android_API_Deep_Dives/Android_Broadcast_Intents_and_Receivers.html)
and [Titanium.Android.BroadcastReceiver API reference](Titanium.Android.BroadcastReceiver).

### Intents

Intents are message objects that specify actions to perform which can start either activities,
broadcasts or services.

For more information about intents, see the
[Titanium.Android.Intent API reference](Titanium.Android.Intent).

### Intent Filters

Intent Filters advertise to the Android OS that your application handles certain actions and
data types. For example, when another application wants to share an image or text, your application
can define intent filters to let Android know your application can handle those data types.

For more information about intent filters, see the
[Android Intent Filters guide](https://titaniumsdk.com/guide/Titanium_SDK/Titanium_SDK_How-tos/Platform_API_Deep_Dives/Android_API_Deep_Dives/Android_Intent_Filters.html).

### Notifications

Notifications alert the user that something is happening to your application while it is
in the background. Notifications appear in the notification drawer until the user
clears them and on the lock screen for devices running Android 5.0 or greater.
Note that the user can filter or turn notifications on and off from **Settings**.
For more information about notifications, see the
[Titanium.Android.Notification API reference](Titanium.Android.Notification).

For Android toast notifications (pop-up notifications sent while the application is in the
foreground), see <Titanium.UI.Notification>.

### Options Menu

The options menu is a feature of older Android devices (prior to Android 3.0 (API 11)), and has been
replaced by the action bar. The options menu is accessed by pressing the **Menu** and presents
a pop-up menu of options the user can execute.

The `Titanium.Android.Menu` API is used to construct both the options menu and action items for
the action bar.

For more information about the options menu, see the
[Titanium.Android.Menu API reference](Titanium.Android.Menu).

### Services

A service is a component started by an application that runs in the background. The service
does not have any application UI associated with it, so the user does not directly interact
with it, only your application.

The Titanium SDK gives you the ability to write your own Android Services using JavaScript.
The service executes your JavaScript code at intervals you specify. Note that the service
will stop running when you back out of the app. So, if you want the service to continue running,
then it's recommended that you set the root window's [exitOnClose](Titanium.UI.Window.exitOnClose)
property to `false` so that the window will persist in the background like iOS.

For more information about services, see the
[Titanium.Android.Service API reference](Titanium.Android.Service).

### Permissions

Starting from Android 6.0 (API level 23), users need to grant certain permissions to apps while the
app is running. You can read it more [here](https://developer.android.com/training/permissions/requesting.html).
Starting with Android 13 you have to use more granular media permissions. Check the [official documentation](https://developer.android.com/about/versions/13/behavior-changes-13#granular-media-permissions).
Make sure to add e.g. `<uses-permission android:name="android.permission.READ_MEDIA_IMAGES"/>` to your tiapp.xml too.

In Titanium SDK, to support this, we have the <Titanium.Android.requestPermissions> method. It is used to
request any permission you may need. An example of using it is shown below:

``` js
var permissions = [ 'android.permission.CAMERA', 'android.permission.READ_EXTERNAL_STORAGE', 'android.permission.WRITE_EXTERNAL_STORAGE' ];
if (Ti.Platform.versionMajor >= 13) {
  // example for camera and image permission on Android 13
  permissions = [ 'android.permission.CAMERA', 'android.permission.READ_MEDIA_IMAGES' ]
}
Ti.Android.requestPermissions(permissions, function (e) {
    if (e.success) {
        Ti.API.info('SUCCESS');
    } else {
        Ti.API.info('ERROR: ' + e.error);
    }
});
```

<ApiDocs/>
