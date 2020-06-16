---
title: Image Best Practices
weight: '50'
---

# Image Best Practices

## Objective

In this section, you will learn best practices for handling images within your Titanium apps.

## Contents

### File formats

You can use PNG, JPG, and GIF images in your Titanium apps. But which should you use?

* **GIF** – GIF images are limited to 256 colors and are suitable to low-resolution line-art drawings and icons. GIF is a proprietary format and may not be compatible with some app's licenses. The animated GIF format is not supported on all platforms. In general, there are very few cases in which GIF is the appropriate format to use.

* **PNG** – PNG images are in a lossless-compressed format that can support high-color images. This format is best suited to line-art, text, and icons. It is a better choice than GIF in almost all cases.

* **JPG** – JPG (or JPEG) is lossy-compressed file format best suited for photographs. It is not well-suited for text, line drawings, or icons because of visual artifacts created during the compression process that will reduce quality and readability.

Keep in mind that JPG images are decompressed in memory when the photo is displayed. A JPG file itself might take a few dozen KB in storage. But, when rendered (whether visible on screen or not) it will be uncompressed in memory to hundreds of KB or higher. It is crucial that you don't display create too many JPG ImageViews at one time in your mobile apps or you could exhaust the device's memory. Removing an image from a view might not clear the memory used by that ImageView; `null` it out as soon as you no longer need the image in memory.

In summary:

* Photos? Use JPG

* Text, line drawings, icons, button graphics? Use PNG

* Flip-book style animations (for which animated GIFs would be the traditional choice)? Use the ImageView's `images` property and pass to it an array of PNG or optimized JPG files.

### Loading and unloading images to manage memory use

Consider a 640 x 480 pixel JPG image, which would fill the screen of a typical handset. On disk, such an image might consume a few dozen KB of storage. But in memory, its footprint will be significantly larger at upwards of 900 KB. When loaded into memory (so that it can be displayed or manipulated), the compressed JPG data is converted to a bitmap. Each pixel is represented by 24 bits (8 bits for each of red, green, and blue channels) or 3 bytes. `(640 x 480 x 3) / 1024 = 900 KB`

Keep in mind that the RAM available to your mobile app is limited by the platform. It can be as low as 12 MB. And that space is filled by your app's code, the Titanium framework components, and so forth. For that reason, it is imperative that you don't load lots of images into memory at once or you'll exhaust your app's memory. Consider these optimization techniques:

* `remove()` images from the view hierarchy when they're not "on the screen" to permit the operating system to free memory

    * Example: `myView.remove(myImageView);`

* Set image views to `null` once you no longer need those objects to free memory and release proxies

    * Example: `myImageView = null;`

* Resize and crop images to the final dimensions at which they'll be shown on screen so that you don't require the system to manipulate any more bytes than necessary

    * Example: Using `imageAsResized` and [`imageAsCropped`](#!/api/Titanium.Blob-method-imageAsCropped) on a [Ti.Blob](#!/api/Titanium.Blob) object.

### Optimizing images

To minimize storage, distribution IPA/APK/XAP size, and reduce network (data) usage, you should optimize the images you use in your app. You should both resize and crop images, and optimize the resulting files to achieve a balance between best data compression and image quality.

Resize images prior to including them in your app. Keep in mind the screen dimensions and pixel densities of the devices on which your images will be shown. It is not efficient to use a 1024 x 768 image on a device that has a 640 x 480 screen. Crop or resize images prior to including them with your app's source code or publishing them to a URL from which your app will download them.

Both PNG and JPG files are compressed formats. However, the tools typically used to create those images might not provide optimally-compressed images. For example, a digital camera will create a much larger (though admittedly higher-quality) JPG image than the "optimize for web" routines offered by a program like Photoshop.

| Platform | File type | Tool |
| --- | --- | --- |
| Mac | PNG, JPG, & GIF | ImageOptim - [https://imageoptim.com/mac](https://imageoptim.com/mac) |
| Mac, Windows, Linux | PNG, JPG & GIF | ImageMagick - [http://www.imagemagick.org](http://www.imagemagick.org/) |
| Windows/DOS | PNG | PNGCrush - [https://pmt.sourceforge.io/pngcrush](https://pmt.sourceforge.io/pngcrush) |
| Windows | JPG | Nikkho - [https://sourceforge.net/projects/nikkhokkho](https://sourceforge.net/projects/nikkhokkho/) |

### Caching remote images

You can display both local and remote images in an ImageView. When loading remote images, you should set the `defaultImage` property to a local image, which will be displayed while the remote image is being downloaded. Remote images are cached automatically on the iOS-, Android- and Windows platform.

::: tip 💡 Android Note
Android 6 and later uses runtime permissions to secure the user's privacy. Therefore, you should call `Ti.Filesystem.requestStoragePermissions()` before attempting to load remote images.
:::

Caching remote images helps improves your application's performance by loading images more quickly, and won't re-download the images, which consumes users' data quotas unnecessarily.

On the Android platform, the cache can even be limited to 25 MB and data remains for the lifetime of the application (as long as it's installed on device). On the iOS platform, the cache size is not predetermined (size cannot be guaranteed) and data remains there until iOS cleans the directory (needs more local storage). To manually clean the cache directory, delete the files in the `applicationCacheDirectory`.

To manually cache remote images, below is a sample utility function that you can use to cache a remote images to the app's `applicationDataDirectory`. (In addition to below, you'll find this code at [https://gist.github.com/1901680](https://gist.github.com/1901680)).

```javascript
var Utils = {
  /* modified version of https://gist.github.com/1243697 */
  _getExtension: function(fn) {
    // CREDITS: http://stackoverflow.com/a/680982/292947
    var re = /(?:\.([^.]+))?$/;
    var tmpext = re.exec(fn)[1];
    return (tmpext) ? tmpext : '';
  },
  RemoteImage: function(a) {
    a = a || {};
    var md5;
    var needsToSave = false;
    var savedFile;
    if (a.image !== null) {
      md5 = Ti.Utils.md5HexDigest(a.image)+this._getExtension(a.image);
      savedFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, md5);
      if (savedFile.exists()) {
        a.image = savedFile;
      } else {
        needsToSave = true;
      }
    }
    var image = Ti.UI.createImageView(a);
    if (needsToSave === true) {
      function saveImage(e) {
        image.removeEventListener('load', saveImage);
        savedFile.write(
          Ti.UI.createImageView({ image: image.image, width: Ti.UI.FILL, height: Ti.UI.FILL }).toImage()
        );
      }
      image.addEventListener('load', saveImage);
    }
    return image;
  }
};

// Example usage
var image = Utils.RemoteImage({
  image: 'https://raw.githubusercontent.com/appcelerator/kitchensink-v2/master/app/assets/images/titanium-logo.png',
  defaultImage:' myDefaultImage.png',
  width: 300,
  height: 200,
  top: 20
});
var win = Ti.UI.createWindow();
win.add(image);
win.open();
```

## Summary

Optimizing images will help you create smaller installation files. The same is true of using `defaultImage` placeholders and downloading/caching final images from a remote source. You'll also minimize your user's consumption of data bandwidth by cropping and optimizing images.
