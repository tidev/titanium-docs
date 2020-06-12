# Titanium.Media

<TypeHeader/>

## Overview

The Media module is used to access the device's media-related functionality, such
as using the device's camera and photo gallery, playing media files, or recording
audio or video.
For examples of using the Media APIs, refer to the
[Working with Media APIs guide](https://docs.appcelerator.com/platform/latest/#!/guide/Working_with_Media_APIs)
in addition to the other media submodule API documentation.
**Note**: Some third party Android camera apps may choose to ignore video recording quality
settings. If you wish to specifically set the video quality, don't assume
EXTRA_VIDEO_QUALITY intent will be respected by the camera app and use Titanium's built-in
camera window which can be used to assign the "overlay" property when calling the
showCamera() method.

<ApiDocs/>
