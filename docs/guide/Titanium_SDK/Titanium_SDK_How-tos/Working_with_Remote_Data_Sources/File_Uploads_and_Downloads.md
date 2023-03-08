---
title: File Uploads and Downloads
weight: '60'
---

# File Uploads and Downloads

## Objective

In this chapter, you will learn how to upload and download files using the HTTPClient object.

## Contents

A common need in a mobile application is to upload a file (like an image) to a remote server. You might also need download a file and store it locally on the device. For example, you might download starting SQL data for your app's database the first time the user runs your app. Luckily, both are easily accomplished with Titanium.

### File upload

Assuming you have a server-side service which accepts file uploads, you should find upload fairly straightforward. Titanium handles the setting of headers and marshaling POST parameters for you, so you simply need to pass a Titanium [blob](http://en.wikipedia.org/wiki/Blob_(computing)) object to `send()`. A blob is returned by many different Titanium APIs, including `Titanium.Filesystem.File.read`. Below, you will find an example of how you might select a photo from the device photo gallery, and upload that blob to a web service:

```javascript
Titanium.Media.openPhotoGallery({
  success: function(event) {
    /* success callback fired after media retrieved from gallery */
    var xhr = Titanium.Network.createHTTPClient();
    xhr.onload = function(e) {
      Ti.UI.createAlertDialog({
            title: 'Success',
            message: 'Status Code: ' + this.status
        }).show();
    };
    xhr.open('POST', 'https://myserver.com/api/uploadAndPost.do');
    xhr.send({
        theImage: event.media,  /* event.media holds blob from gallery */
        username: 'foo',
        password: 'bar'
    });
  }
});
```

Note: this file upload process is only valid if using Mobile Backend Services services file update. The event.media doesn't contain file contents but rather just the information about the file, location, size, dimensions, and so on.To upload the file, you will need to use `Ti.Filesystem` to get a handle on the file and access to the file itself. For example:

```javascript
var file = Ti.Filesystem.getFile(event.media.nativePath);

if (file.exists()) {
  //file handling logic
} else {
  ...
}
```

#### Monitoring upload progress

Using the `xhr.onsendstream` event, you can monitor upload progress and update a progress bar. This event is called at regular intervals as the data is being transmitted. When the event is fired, the `progress` property of the event object will contain a value from 0.0-1.0 with the progress. That's exactly the type of value you'll need for a [`Ti.UI.ProgressBar`](http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.ProgressBar-object).

```javascript
/* Create a progress bar */
var progressBar = Ti.UI.createProgressBar({
  width: 200,
  height: 50,
  min: 0,
  max: 1,
  value: 0,
  style: Titanium.UI.iOS.ProgressBarStyle.PLAIN,
  top: 10,
  message: 'Uploading image ...',
  font:  {fontSize: 12, fontWeight: 'bold' },
  color: '#888'
});

win.add(progressBar);
progressBar.show();

var xhr = Ti.Network.createHTTPClient();

// onsendstream called repeatedly, use the progress property to
// update the progress bar
xhr.onsendstream = function(e) {
  progressBar.value = e.progress ;
  Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress);
};
```

### File download

Occasionally, you will also need to download and store a file from a remote server. In concert with the `Ti.Filesystem` module, you can fetch and save a file. Below is a cross-platform example for fetching a remote image and saving it to the `applicationDataDirectory`:

```javascript
var win = Ti.UI.createWindow({
  backgroundColor: '#fff'
});

var loadingLabel = Ti.UI.createLabel({
  text: 'Loading ...',
  top: 20,
  left: 10
});
win.add(loadingLabel);

var image = Ti.UI.createImageView({
  top: 20,
  left: 10
});
win.add(image);

var xhr = Ti.Network.createHTTPClient({
  onload: function() {
    // first, grab a "handle" to the file where you'll store the downloaded data
    var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'mygraphic.png');
    file.write(this.responseData); // write to the file
    Ti.App.fireEvent('graphic_downloaded', { filepath: file.nativePath });
  },
  timeout: 10000
});
xhr.open('GET','http://www.appcelerator.com/wp-content/uploads/2009/06/titanium_desk.png');
xhr.send();

Ti.App.addEventListener('graphic_downloaded', function(e) {
  // you don't have to fire an event like this, but perhaps multiple components will
  // want to know when the image has been downloaded and saved
  win.remove(loadingLabel);
  image.image = e.filepath;
});

win.open();
```

On iOS, a simple property of the HTTPClient object lets you save a file to the local file system. Below is an iOS-only example of how to fetch a file from a server and store it in the `applicationDataDirectory`, the primary location for any read/write Filesystem IO in a Titanium application:

```javascript
var xhr = Ti.Network.createHTTPClient({
  onload: function() {
    Ti.API.info('PDF downloaded to applicationDataDirectory/test.pdf');
  },
  timeout: 10000
});
xhr.open('GET', 'http://www.appcelerator.com/assets/The_iPad_App_Wave.pdf');
// on iOS, you can use the file property to save a downloaded file
// though you must set it after calling open()
xhr.file = Titanium.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'test.pdf');
xhr.send();
```

#### File storage locations

When downloading files, keep in mind the locations on the device you can access files. The following locations are potentially accessible:

* **Ti.Filesystem.applicationDataDirectory**: A read/write directory accessible by your app. Place your application-specific files in this directory. The contents of this directory persist until you remove the files or until the user uninstalls the application.

* **Ti.Filesystem.resourcesDirectory**: A read-only directory where your application resources are located; this directory corresponds to the _project_/Resources directory. The contents of this directory persist until the user uninstalls the application.

* **Ti.Filesystem.tempDirectory**: A read-write directory where your application can place temporary files. The contents of this directory persist until your application fully closes, at which time the operating system could delete your files.

* **Ti.Filesystem.externalCacheDirectory**: A read-write directory where your application can cache data on external storage (SD card), if such a location exists. Check first with `Ti.Filesystem.isExternalStoragePresent()` (which returns a Boolean). Only available on Android.

* **Ti.Filesystem.externalStorageDirectory**: A read-write directory on the external storage device (SD card) accessible by your app, if such a location exists. Check first with `Ti.Filesystem.isExternalStoragePresent()` (which returns a Boolean).

::: warning ⚠️ Warning
The `Ti.Filesystem.resourcesDirectory` is read-only on a device, but is read/write in the simulator/emulator.
:::

#### Monitoring download progress

As with uploads, you can use an HTTPClient callback to monitor download progress. In this case, it's the `xhr.ondatastream` callback. You'd use it like this (assuming you have a progress bar named `ind` as with the upload progress example):

```
// ondatastream called repeatedly as file downloaded, use the progress property to
// update the progress bar
xhr.ondatastream = function(e) {
  ind.value = e.progress ;
  Ti.API.info('ONDATASTREAM - PROGRESS: ' + e.progress);
};
```

### Hands-on practice

#### Goal

In this activity, you will download a large image file, uploading a progress bar as the file is downloaded. You'll save the file to the local file system, then display the image in an ImageView.

#### Steps

1. Create a new Titanium SDK project. You can keep the two-tab code or replace it.

2. To the window, add a progress indicator centered in the window, 10 pixels from the top, with a width of 200 and height of 50. Set the minimum value to 0, max to 1, and current value to 0. Show the indicator.

3. Add an ImageView to the window that will display the downloaded photo.

4. Add an HTTPClient that will:

    * Download [http://farm4.static.flickr.com/3244/3115485060\_076a345932\_o.jpg](http://farm4.static.flickr.com/3244/3115485060_076a345932_o.jpg) (from [Flickr](http://www.flickr.com/photos/72213316@N00/3115485060/sizes/o/in/photostream/)).

    * Save the file to the `applicationDataDirectory` in a file named cool\_photo.jpg.

    * Update the progress bar as the file is downloaded

    * Fire an event once the photo is downloaded and saved. Pass the native path as a payload of that event.

5. Add an app-level event listener to receive the native path of the downloaded photo. Hide the progress bar and set the ImageView's image property equal to that native path to show the image.

6. Build and test the image in the simulator/emulator.

### References and further reading

* [Finished code](./attachments_56557676_1_6.5_file-download.zip)

* [Filesystem Access and Storage chapter](/guide/Titanium_SDK/Titanium_SDK_How-tos/Working_with_Local_Data_Sources/Filesystem_Access_and_Storage/)

* This [blog post](http://developer.appcelerator.com/blog/2011/09/qr-codes-in-your-mobile-apps-cross-platform.html) contains another technique for caching downloaded images

## Summary

In this chapter, you learned how to upload and download files using the HTTPClient object.
