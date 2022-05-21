---
title: Camera and Photo Gallery APIs
weight: '40'
---

# Camera and Photo Gallery APIs

* [Hands-on practice](#hands-on-practice)

* [Summary](#summary)

## Objective

In this chapter, you'll learn how to capture an image from the camera, use it in an app, and save it to the gallery or filesystem. You'll also explore the closely related gallery APIs, which let your users grab images from their photo albums for use within your app.

## Contents

The APIs that you use to access the camera and photo gallery are very similar. Both use the same function signature, though the actual method names vary. We'll start with a look at the camera API then see how you apply the same techniques to the gallery.

### Permissions

Firstly, it is important to have the required permissions to take photos and capture video.

#### Android permissions

On Android you **must** define the required camera permissions in your _tiapp.xml_:

**Android Camera Permissions**

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-feature android:name="android.hardware.camera" />
```

Additionally, to capture audio; you **must** also define the required audio permissions in your _tiapp.xml_:

**Android Audio Permission**

```xml
<uses-permission android:name="android.permission.RECORD_AUDIO" />
```

#### Requesting Permissions

For all platforms you must verify you have the correct permissions to capture media and request them from the user if they are not available. You can do this by using the provided _Titanium.Media_ APIs:

**Requesting Permissions**

```javascript
// check if we already have permissions to capture media
if (!Ti.Media.hasCameraPermissions()) {

    // request permissions to capture media
    Ti.Media.requestCameraPermissions(function (e) {

        // success! we can capture media!
        if (e.success) {
            Ti.Media.showCamera({ ... });

        // oops! could not obtain required permissions...
        } else {
            Ti.API.error('could not obtain camera permissions!');
        }
    });
} else {
    // yay! we already have permissions!
    Ti.Media.showCamera({ ... });
}
```

### Camera

You can access both the rear-facing and front-facing cameras in devices that have them. You can capture still images and video from the camera. Then you can use the resulting images in your app, save them to the file system, upload them, or save them to the gallery. You open the camera by calling the [`showCamera()`](http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.showCamera-method.html) method. When doing so, you define three callback functions that are called for the success, cancel, and error events, as shown here:

```javascript
var win = Ti.UI.createWindow({
        layout: 'vertical',
        backgroundColor: 'gray'
    }),
    photoBtn = Ti.UI.createButton({
        title: 'TAKE PHOTO'
    }),
    videoBtn = Ti.UI.createButton({
        title: 'RECORD VIDEO'
    });

/**
 * showCamera: handle required permissions and display camera for video capture
 *             and photo capture
 *
 * @param type: capture type, can be Ti.Media.MEDIA_TYPE_VIDEO or Ti.Media.MEDIA_TYPE_PHOTO
 * @param callback: callback from camera
 *     @param error: defined when an error has occurred, otherwise null
 *     @param result: result from the camera containing captured media information
 */
function showCamera (type, callback) {
    var camera = function () {
        // call Titanium.Media.showCamera and respond callbacks
        Ti.Media.showCamera({
            success: function (e) {
                callback(null, e);
            },
            cancel: function (e) {
                callback(e, null);
            },
            error: function (e) {
                callback(e, null);
            },
            saveToPhotoGallery: true, // save our media to the gallery
            mediaTypes: [ type ]
        });
    };

    // check if we already have permissions to capture media
    if (!Ti.Media.hasCameraPermissions()) {

        // request permissions to capture media
        Ti.Media.requestCameraPermissions(function (e) {

            // success! display the camera
            if (e.success) {
                camera();

            // oops! could not obtain required permissions
            } else {
                callback(new Error('could not obtain camera permissions!'), null);
            }
        });
    } else {
        camera();
    }
}

photoBtn.addEventListener('click', function () {

    // attempt to take a photo with the camera
    showCamera(Ti.Media.MEDIA_TYPE_PHOTO, function (error, result) {
        if (error) {
            alert('could not take photo');
            return;
        }

        // validate we taken a photo
        if (result.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {

            // create an imageView to display our photo
            var imageView = Ti.UI.createImageView({
                image: result.media
            });

            // add the imageView to the window
            win.add(imageView);
        }
    });
});

videoBtn.addEventListener('click', function () {

    // attempt to capture video with the camera
    showCamera(Ti.Media.MEDIA_TYPE_VIDEO, function (error, result) {
        if (error) {
            alert('could not capture video');
            return;
        }

        // validate we taken a video
        if (result.mediaType == Ti.Media.MEDIA_TYPE_VIDEO) {

            // create a videoPlayer to display our video
            var videoPlayer = Ti.Media.createVideoPlayer({
                url: result.media.nativePath,
                autoplay: true
            });

            // add the videoPlayer to the window
            win.add(videoPlayer);
        }
    });
});

win.add([ photoBtn, videoBtn ]);
win.open();
```

The `saveToPhotoGallery` property controls whether the photo or video is automatically saved to the device's photo gallery. Using `Ti.Filesystem` you could save to the filesystem in addition to or in place of saving to the gallery. Because the user can delete items from the gallery separately from your app, you should save media to the filesystem if your app will depend on its availability later.

Some other useful properties include:

* `autohide` (boolean) if the camera should auto hide after the media capture is completed (defaults to true) (iOS only)

* `animated` (boolean) if the dialog should be animated (defaults to true) upon showing and hiding (Android and iOS only)

* `allowEditing` (boolean) if the media should be editable after capture in the UI interface (iOS only)

* `mediaTypes` an array of media type constants supported by the capture device UI (iOS only)

* `videoMaximumDuration` (float) duration on how long in milliseconds to allow capture before completing (iOS only)

* `videoQuality` (Ti.Media constant) to indicate the video quality during capture (iOS only)

* `showControls` (boolean) to indicate if the built-in UI controls should be displayed (iOS only)

* `overlay` (Ti.UI.View) which is added as an overlay to the camera UI (on top)

* `transform` a transformation matrix that applies to the camera UI (not to the media returned) (iOS only)

You can check for the availability of the camera with the `Titanium.Media.isCameraSupported` property: it's false if the device has no camera. The simulator/emulator does not have camera support. Other devices without cameras include 3rd generation and older iPods, the Nook Color, and Kindle Fire.

#### Front/rear camera support

You can access both the front and rear facing cameras, if a device has such cameras. The code snippet below shows one way you might do this. Key properties are the `Ti.Media.CAMERA_REAR` and `Ti.Media.CAMERA_FRONT` as well as the `Ti.Media.switchCamera()` method.

```javascript
var cameras = Ti.Media.availableCameras;
for (var i = 0; i < cameras.length; i++) {
  if (cameras[i] == Ti.Media.CAMERA_REAR) {

    cameraType.addEventListener('click', function () {
      if (Ti.Media.camera == Ti.Media.CAMERA_FRONT) {
        cameraType.title = 'front';
        Ti.Media.switchCamera(Ti.Media.CAMERA_REAR);
      } else {
        cameraType.title = 'rear';
        Ti.Media.switchCamera(Ti.Media.CAMERA_FRONT);
      }
    });
    break;
  }
}
```

#### Alternative Android capture video example

On Android you can alternatively create an intent to capture video. This intent is used to start a new activity, which launches the camera to record video. After the user stops recording, the video is saved to the device's gallery. The callback retrieves the URI of the video media and stores the reference in a global variable. Using the global variable, you can launch the video in a media player or save the content to a different location.

```javascript
var win = Ti.UI.createWindow({
        layout: 'vertical',
        backgroundColor: 'gray'
    }),
    recordButton = Ti.UI.createButton({
        title: 'RECORD VIDEO'
    }),
    playButton = Ti.UI.createButton({
        title: 'PLAY VIDEO',
        visible: false
    }),
    videoIntent = Ti.Android.createIntent({
        // http://developer.android.com/reference/android/provider/MediaStore.html#ACTION_VIDEO_CAPTURE
        action: 'android.media.action.VIDEO_CAPTURE'
    }),
    videoURL = null;

recordButton.addEventListener('click', function () {

    // start an intent to capture video
    win.getActivity().startActivityForResult(videoIntent, function (e) {

        // video capture activity returned successfully
        if (e.resultCode === Ti.Android.RESULT_OK) {

            // verify we have a video URL
            if (e.intent.data != null) {
                videoURL = e.intent.data;
                playButton.visible = true;

           } else {
                Ti.API.error('could not retrieve media URL!');
            }

        // video capture was cancelled
        } else if (e.resultCode == Ti.Android.RESULT_CANCELED) {
            Ti.API.trace('user cancelled video capture session.');

        // handle all other results as a failure
        } else {
            Ti.API.error('could not record video!');
        }
    });
});

playButton.addEventListener('click', function (e) {
    var player = Ti.Media.createVideoPlayer({ url: videoURL, autoplay: true });
    win.add(player);
});

win.add([ recordButton, playButton ]);
win.open();
```

::: warning ⚠️ Warning
Some third party Android camera apps may choose to ignore video recording quality settings. If you wish to specifically set the video quality, don't assume EXTRA\_VIDEO\_QUALITY intent will be respected by the camera app and use Titanium's built-in camera window which can be used to assign the "overlay" property when calling the `showCamera()` method.
:::

### Gallery

You open the native gallery by calling the [`openPhotoGallery()`](http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.openPhotoGallery-method.html) method. As with the camera, you define three callback functions that are called for the success, cancel, and error events:

**Gallery**

```javascript
var win = Ti.UI.createWindow(),
    btn = Ti.UI.createButton({
        title: 'OPEN GALLERY',
    });

btn.addEventListener('click', function(){
    Ti.Media.openPhotoGallery({
        mediaTypes: [ Titanium.Media.MEDIA_TYPE_PHOTO ],
        success: function (e) {
            alert('media.width: ' + e.media.width
                + '\nmedia.height: ' + e.media.height
                + '\nmedia.length: ' + e.media.length
                + '\nmedia.mimeType: ' + e.media.mimeType
                + '\nmedia.nativePath: ' + e.media.nativePath);
        },
        error: function (e) {
            alert('error opening image: ' + e);
        }
    });
});

win.add(btn);
win.open();
```

Some other useful properties include:

* `animated` (boolean) if the dialog should be animated (defaults to true) upon showing and hiding

* `allowEditing` (boolean) if the media should be editable after capture in the UI interface

* `saveToPhotoGallery` (boolean) whether modified media should be saved back to the gallery, generally only useful with `allowEditing=true`

* `mediaTypes` an array of media type constants supported by the capture device UI

* `showControls` (boolean) to indicate if the built-in UI controls should be displayed

* `overlay` (Ti.UI.View) which is added as an overlay to the camera UI (on top)

* `transform` a transformation matrix that applies to the camera UI (not to the media returned)

* (iPad only) `popoverView` (Ti.UI.View) to position the photo gallery popover a specific view

* (iPad only) `arrowDirection` control the type of arrow and position of the gallery

#### Getting images into the simulator/emulator's gallery

The photo gallery on the simulator/emulator is of course empty to start. If you'll be testing photo gallery code, you'll need to put some images there. You can do so by following this procedure:

1. Open the gallery in the simulator/emulator, then close it. You have to do this at least once to initialize its data storage structures.

2. Find an image to save. For example, open the web browser, search for, and display an image.

3. Long-press on the image, when you release, you should get a menu of options.

4. Tap Save Image (or your device's equivalent button) to save the image to the gallery.

## Hands-on practice

### Goal

In this activity, you will write an app that will capture an image from the camera and display it in a view. If the device doesn't have a camera, your app should display the gallery picker instead.

### Steps

1. Create a new project named PhotoTest.

2. On tab1 of the default project, replace the label with an ImageView that is 300x300 points positioned 5 points from the top.

3. Add a button that is 100x50 positioned 5 points from the bottom.

4. When the button is clicked, show the camera if it's available, otherwise open the photo gallery. You'll need three callbacks--write your code to reuse the same three functions to minimize duplicated code. You'll need these callbacks:

    * Success: set the ImageView's image property to the media returned from the camera or gallery. Output the `mediaType` to the info console.

    * Cancel: don't do anything in this function

    * Error: Display an alert dialog box showing the `error.code` describing why the operation failed.

5. Open the simulator/emulator and save at least one photo to it, following the steps above.

6. Build the app and run it on the simulator/emulator. The gallery should open.

7. (Optional) Install the app onto a device and run it from there. The camera should open.

## Summary

In this chapter, you learned how to capture an image from the camera, use it in an app, and save it to the gallery or filesystem. You also explored the closely related gallery APIs, which let your users grab images from their photo albums for use within your app.
