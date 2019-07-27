# Titanium.UI.iOS.LivePhotoView

<TypeHeader/>

## Overview

Use the <Titanium.UI.iOS.createLivePhotoView> method to create an new `LivePhotoView`.

Specifying either a `width` or `height` property for this view will scale its `livePhoto` with
the aspect ratio maintained, up to a maximum size that does not exceed its parent view.

For more infos on Live Photo's, refer to the official [Apple documentation](https://developer.apple.com/documentation/photosui/phlivephotoview).

## Examples

### Basic LivePhotoView

The following example shows how to create a simple Ti.UI.iOS.LivePhotoView:

    var window = Ti.UI.createWindow({
        backgroundColor: "white"
    });

    var btn1 = Ti.UI.createButton({
        title: "Select live photo!",
        top: 30
    });

    btn1.addEventListener("click", openGallery);
    window.add(btn1);
    window.open();

    function openGallery() {
        Ti.Media.openPhotoGallery({
            mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO, Ti.Media.MEDIA_TYPE_LIVEPHOTO],
            success: function(e) {
                var livePhoto = e.livePhoto // Live photo of type Ti.UI.iOS.LivePhoto

                if (livePhoto) {
                    var livePhotoView = Ti.UI.iOS.createLivePhotoView({
                        livePhoto: livePhoto,
                        muted: true,
                        width: 300
                    });

                    livePhotoView.addEventListener("start", function(e) {
                        Ti.API.warn("-- Start playback --");
                        Ti.API.warn(e);
                    });

                    livePhotoView.addEventListener("stop", function(e) {
                        Ti.API.warn("-- Stop playback --");
                        Ti.API.warn(e);
                    });
                 window.add(livePhotoView);
                }
            }
        });
    }

<ApiDocs/>
