# Titanium.Media.VideoPlayer

<TypeHeader/>

## Overview

The video player is a native view that can be used to play videos, either stored
locally or streamed from a web server. The player can occupy the full screen, or can
be used as a view that can be added to other views.

Use the <Titanium.Media.createVideoPlayer> method to create a video player.

All platforms support specifying the video content as a URL, either to a local file or
a remote stream. This is done by setting the [url](Titanium.Media.VideoPlayer.url) property.

### iOS Implementation Notes

On iOS, video content can also be specified as a [Blob](Titanium.Blob) or
[File](Titanium.Filesystem.File) object using the
[media](Titanium.Media.VideoPlayer.media) property.

On iOS, a video player can dynamically switch back and forth between fullscreen mode
and standard mode. If the native video controls are displayed, the user can use them
to switch between standard and fullscreen mode.

### Android Implementation Notes

On Android, the video player cannot switch modes. To create a fullscreen player, you
must specify `fullscreen: true` when you create the player. This fullscreen player
creates its own Android [Activity](Titanium.Android.Activity) on top of the activity stack.
Unlike a normal view, this fullscreen video player appears as soon as it is created.
The user can close the player by pressing the **Back** button. See the code examples for
a sample using the fullscreen player on Android.

There are several known issues with clipping on the Android video player.

* When used with `scalingMode` set to VIDEO_SCALING_ASPECT_FILL or VIDEO_SCALING_NONE,
  the video content is not correctly clipped to the boundaries of the view.
  ([TIMOB-7628](https://jira.appcelerator.org/browse/TIMOB-7628))

* When a border is set on the view, the video content does not take the border width
  into account, so the video content covers the border.
  ([TIMOB-7628](https://jira.appcelerator.org/browse/TIMOB-7628))

* If a borderRadius is specified, the video content is not clipped to the rounded
  corners. ([TIMOB-7629](https://jira.appcelerator.org/browse/TIMOB-7629))

On Android, using a video player inside a scroll view is not recommended. When scrolling,
black bars may appear over the video content.

This is because the video player is rendered on a special Android UI element called a SurfaceView.
Android renders the SurfaceView behind the main window and punches a hole in the window
to reveal the video.  Because the content of the SurfaceView does not reside in the application
window, the video content cannot be transformed (moved, scaled or rotated) with the window.
This makes it difficult for the content to render properly inside a ScrollView.

## Examples

### Simple Video Player Example

The following code creates a simple video player to play a local video file.

    var vidWin = Titanium.UI.createWindow({
        title : 'Video View Demo',
        backgroundColor : '#fff'
    });

    var videoPlayer = Titanium.Media.createVideoPlayer({
        top : 2,
        autoplay : true,
        backgroundColor : 'blue',
        height : 300,
        width : 300,
        mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
        scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
    });

    videoPlayer.url = 'movie.mp4';
    vidWin.add(videoPlayer);
    vidWin.open();

### Android Fullscreen Video Player

The Android fullscreen video player operates differently from other video players.
The following example shows how to create, show, and close a fullscreen video
player.

Note that in this example, a button is included to close the player, to
demonstrate a method for dismissing the player programmatically. In practice, the user
can always dismiss the player by using the **Back** button, so an on-screen
control would not be required.

    Titanium.UI.setBackgroundColor('#000');
    var win = Titanium.UI.createWindow({
        title : 'Test',
        backgroundColor : '#fff',
        exitOnClose : true
    });

    // Change to a valid URL
    var contentURL = "http://www.example.com/stream.mp4";

    var openButton = Ti.UI.createButton({
        title : "Start Video",
        top : "0dp",
        height : "40dp",
        left : "10dp",
        right : "10dp"
    });

    openButton.addEventListener('click', function() {
        var activeMovie = Titanium.Media.createVideoPlayer({
            url : contentURL,
            backgroundColor : 'blue',
            mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
            scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FILL,
            fullscreen : true,
            autoplay : true
        });

        var closeButton = Ti.UI.createButton({
            title : "Exit Video",
            top : "0dp",
            height : "40dp",
            left : "10dp",
            right : "10dp"
        });

        closeButton.addEventListener('click', function() {
            activeMovie.hide();
            activeMovie.release();
            activeMovie = null;
        });

        activeMovie.add(closeButton);
    });
    win.add(openButton);
    win.open();

### Alloy XML Markup

Previous simple example as an Alloy view.

simplevideoplayer.xml:

    <Alloy>
        <Window id="vidWin" title="Video View Demo" backgroundColor="#fff">
            <VideoPlayer id="videoPlayer" ns="Ti.Media" top="2" url="/movie.mp4"
                         height="300" width="300" backgroundColor="blue" autoplay="true" />
        </Window>
    </Alloy>

<ApiDocs/>
