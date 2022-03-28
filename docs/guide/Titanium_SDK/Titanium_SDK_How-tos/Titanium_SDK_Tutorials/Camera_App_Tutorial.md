---
title: Camera App Tutorial
weight: '10'
---

# Camera App Tutorial

## Overview

This tutorial will walk you through a basic app that allows the user to access the mobile device's camera and shoot pictures and videos. We will cover a generic project setup, set device permissions, and create a small app that allows for taking pictures.

## Project setup

Start with creating an empty Alloy project by executing this command: `ti create`

## Permissions

For Android, the build system will automatically add the needed `"android.permission.CAMERA"` and `"android.permission.WRITE_EXTERNAL_STORAGE"` permissions to the `AndroidManifest.xml` for you. So, you don't need to edit the `tiapp.xml` file.

For iOS, you need to add the following key(s) to the `tiapp.xml`:

```xml
<ios>
    <plist>
        <dict>
            <key>NSCameraUsageDescription</key>
            <string>Need camera access to take pictures</string>

            <!-- Only needed when recording audio, such as via camera video capture. -->
            <key>NSMicrophoneUsageDescription</key>
            <string>Need microphone access to record video with audio</string>
        </div>
    </plist>
</ios>
```

Say cheese

It is time to open the camera! We add a simple button to our view and add a `click` event to it, so we can open the camera.

**Simple button**

```xml
<Alloy>
    <Window>
        <Button id="btn_record" title="Take a picture" onClick="onClickRecord" />
    </Window>
</Alloy>
```

The below code implements the button click event to request camera permission (if not currently granted) and then show the camera.

**Click event**

```javascript
function onClickRecord(e) {
    // Request the user's permission to use the camera.
    // If already granted, then callback will be invoked without showing dialog.
    Ti.Media.requestCameraPermissions(function (e) {
        // Do not continue if permission was denied.
        if (!e.success) {
            alert('This app does not have permission to use the camera.');
            return;
        }

        // Show the camera for taking a picture.
        Ti.Media.showCamera({
            success: function (e) {
                console.log('Photo was successfully taken via camera.');
                // $.imageView.image = e.media; // do this to
            },
            cancel: function (e) {
                console.log('Camera canceled.');
            },
            error: function (e) {
                console.error('Failed to show camera. Reason: ' + e.error);
                if (e.code === Titanium.Media.NO_CAMERA) {
                    alert('Device does not have a camera.');
                }
            }
        });
    });
}
```

The `showCamera()` method has some properties you can set to change some options and to get the image. For a full list, please review [CameraOptionsType](#!/api/CameraOptionsType) API documentation.

You can also add a custom overlay to the camera with the `overlay` property which is assigned a view. When doing this, you have to display your own buttons to take a picture or cancel out and use the `Ti.Media.takePicture() and``Ti.Media.hideCamera()` functions. On Android, using an overlay will display an in-app camera activity instead of displaying the default camera app installed on the device for taking photos.

This tutorial was adapted from [https://devblog.axway.com/mobile-apps/from-zero-to-app-with-a-camera/](https://devblog.axway.com/mobile-apps/from-zero-to-app-with-a-camera/) which was originally written by [Michael Gangolf](https://devblog.axway.com/author/mgangolf/)
