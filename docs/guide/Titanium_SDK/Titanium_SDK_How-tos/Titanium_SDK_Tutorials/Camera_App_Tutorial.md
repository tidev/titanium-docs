---
title: Camera App Tutorial
weight: '10'
---

# Camera App Tutorial

## Overview

This tutorial will walk you through a basic app that allows the user to access the mobile device's camera and shoot pictures and videos. We will cover a generic project setup, set device permissions, and create a small app that allows for taking pictures.

## Project setup

Start with creating an empty Alloy project by executing this command: `appc new`

## Permissions

For security reasons, both Android and iOS platforms need to ask the user access the camera. For iOS, you need to add a key to the `tiapp.xml`:

```xml
<ios>
    <plist>
        <dict>
            <key>NSCameraUsageDescription</key>
            <string>To take a picture we want to use the camera</string>

            <!-- needed for video -->
            <key>NSCameraUsageDescription</key>
            <string>For Video recording we want to use the microphone</string>
        </div>
    </plist>
</ios>
```

For Android, the following needs to be added to the manifest:

```xml
<android xmlns:android="http://schemas.android.com/apk/res/android">
    <manifest>
        <uses-permission android:name="android.permission.CAMERA"/>

        <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
    </manifest>
</android>
```

Then, inside the app itself, we need to ask for permission again which the users has to accept or decline.

Titanium has built-in functions to request these permissions. Since it might be handy to use this in other apps too, we need to create an external library and include the code there, so we can use this file in other apps as well. To do this, you have to create a `lib` folder at `/app/lib/` and inside this folder, create a new file called `helper.js`.

There we add our `getPermissions()` script:

```
exports.getPermissions = function(opt) {
  //
}
```

The code for Android and iOS is a bit different. We need to check for the platform and ask for the specific platform permission.

```javascript
exports.getPermissions = function(opt) {
    if (OS_ANDROID) {
        // Android part
        var permissions = ['android.permission.CAMERA', 'android.permission.READ_EXTERNAL_STORAGE'];
        var hasPermission = Ti.Android.hasPermission(permissions);

        // check if the permissions are already allowed
        if (hasPermission) {
            // run callback
            opt();
            return;
        }
        // no permission - request it
        Ti.Android.requestPermissions(permissions, function(e) {
            if (e.successs) {
                // run callback
                opt();
            } else {
                // ask again
                exports.getPermissions(opt);
            }
        });
    } else {
        // iOS part
        var map = {};
        map[Ti.Media.CAMERA_AUTHORIZATION_AUTHORIZED] = 'CAMERA_AUTHORIZATION_AUTHORIZED';
        map[Ti.Media.CAMERA_AUTHORIZATION_DENIED] = 'CAMERA_AUTHORIZATION_DENIED';
        map[Ti.Media.CAMERA_AUTHORIZATION_RESTRICTED] = 'CAMERA_AUTHORIZATION_RESTRICTED';
        map[Ti.Media.CAMERA_AUTHORIZATION_NOT_DETERMINED] = 'CAMERA_AUTHORIZATION_NOT_DETERMINED';

        var cameraAuthorization = Ti.Media.cameraAuthorization;
        if (cameraAuthorization === Ti.Media.CAMERA_AUTHORIZATION_RESTRICTED) {
            return;
        } else if (cameraAuthorization === Ti.Media.CAMERA_AUTHORIZATION_DENIED) {
            return;
        }
        Ti.Media.requestCameraPermissions(function(e) {
            if (e.success) {
                // run callback
                opt();
            } else {
                // ask again
                exports.getPermissions(opt);
            }
        });
    }
}
```

## Say cheese

Now that we can ask for the permission, it is time to open the camera! We add a simple button to our view and add a `click` event to it, so we can open the camera.

**Simple button**

```xml
<Alloy>
    <Window>
        <Button id="btn_record" title="Take a picture" />
    </Window>
</Alloy>
```

**Click event**

```javascript
function onClickRecord(e) {}

$.btn_record.addEventListener("click",onClickRecord);
$.index.open();
```

Next, we should call our `getPermissions()` helper script. Once we have the correct permission, we can open the camera. To use the `lib/helper.js`, we need to `require()` it:

```javascript
var helper = require("/helper");
```

Then use all export functions:

```
helper.getPermissions(function( ){});
```

The last part is opening the camera:

```
Ti.Media.showCamera({});
```

Complete code should look something like this:

**Complete click event**

```javascript
var helper = require("/helper");

function onClickRecord(e) {
    helper.getPermissions(function( ){
        // permission granted

        // open the camera
        Ti.Media.showCamera({})
    });
}

$.btn_record.addEventListener("click",onClickRecord);
$.index.open();
```

If you click the button now, it will ask you for camera and storage permission the first time and then open the camera.

The `showCamera()` method has some properties you can set to change some options and to get the image. For a full list, please review [CameraOptionsType](#!/api/CameraOptionsType) API documentation.

The most common option is the `success` callback. This will be called after the images was taken and you can get the actual image to show it in your app or store it.

```
Ti.Media.showCamera({
    success: function(e) {
        // display image information:
        console.log(e.media);
        // $.imageView.image = e.media; // to put it into an imageview
    }
})
```

You can also add a custom overlay to the camera with `overlay`. When you set an overlay, it won’t run the normal camera as an intent, but it will create a custom camera view for you. You have to take care of the actions/buttons (`Ti.Media.takePicture()`,`Ti.Media.hideCamera()`,…) yourself! `overlay` accepts a view as a parameter.

This tutorial was adapted from [https://devblog.axway.com/mobile-apps/from-zero-to-app-with-a-camera/](https://devblog.axway.com/mobile-apps/from-zero-to-app-with-a-camera/) which was originally written by [Michael Gangolf](https://devblog.axway.com/author/mgangolf/)
