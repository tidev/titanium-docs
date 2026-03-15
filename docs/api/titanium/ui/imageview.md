---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/ImageView.yml
---
# Titanium.UI.ImageView

<TypeHeader/>

## Overview

Use the <Titanium.UI.createImageView> method or **`<ImageView>`** Alloy element to create an `ImageView`.

Specifying either a `width` or `height` property for this view will scale its image(s) with
the aspect ratio maintained, up to a maximum size that does not exceed its parent view.

### Remote Images

You can display both local and remote images in an ImageView. When loading remote images, you should 
set the defaultImage property to a local image, which will be displayed while the remote image is being 
downloaded. Remote images are cached automatically on the iOS-, Android- and Windows platform.

Android Note: Android 6 and later uses runtime permissions to secure the user's privacy. 
Therefore, you should call <Titanium.Filesystem.requestStoragePermissions> before attempting to load remote images.

Read more about remote images and general best practices in the [Image Best Practices Guide](https://titaniumsdk.com/guide/Titanium_SDK/Titanium_SDK_Guide/Best_Practices_and_Recommendations/Image_Best_Practices.html#caching-remote-images).

### Android 9-Patch Scaled Images

A nine-patch (9-patch) image is simply a standard `png` image with a transparent border of a
single pixel, containing "guides" defined by solid black (`#000`) color fills. Guides added to the
top and left edges determine that the image may be stretched in horizontal and vertical planes
respectively. Optionally, the content area may be defined by guides added to the bottom and
right edges.

Although any image editor may be used to create the guides, certain settings can cause the edges
of the graphic to "bleed" into the transparent border, consequently making it non-transparent.
Thus, the `draw9patch` utility provided in the Android SDK tools directory is recommended for
this purpose.

For further information about nine-patch images and the Android utility, see the
[Nine-patch](https://developer.android.com/guide/topics/graphics/drawables#nine-patch)
and [Draw 9-patch](https://developer.android.com/studio/write/draw9patch) sections
of the Android Developer website.

The nine-patch technique may be used with any of Titanium's static image properties. See the
"Button with Nine-patch Background Image" example for a demonstration.

## Examples

### Basic Image View

In this example, we create a simple image view:

``` js
Ti.UI.backgroundColor = 'white';
var win = Ti.UI.createWindow();
var image = Ti.UI.createImageView({
  image:'/images/myimage.png'
});
win.add(image);
win.open();
```

### Button with Nine-patch Background Image

Create a button with a nine-patch image background, that swaps with another image when
selected, and generates a message in the console when clicked.

Note that images are referenced in the code without the `.9` part of the filename, and that
the project should be cleaned to ensure that the files are correctly copied to the project.

``` js
var win = Ti.UI.createWindow({
    backgroundColor: 'white',
    exitOnClose: true,
    fullscreen: false,
    title: 'Click button to test'
});

var button = Ti.UI.createButton({
    backgroundImage: '/images/custom-slider-right.png',
    backgroundSelectedImage:'/images/custom-slider-left.png',
    title: 'Click me!',
    top: 10,
    width: 300,
    height: 200
});
button.addEventListener('click',function(e){
    Ti.API.info("You clicked the button");
});
win.add(button);
win.open();
```

### Alloy XML Markup

Previous basic image view example as an Alloy view.

``` xml
<Alloy>
    <Window id="win" backgroundColor="white">
        <ImageView id="image" image="/images/myimage.png" />
    </Window>
</Alloy>
```

<ApiDocs/>
