---
title: Audio APIs
weight: '10'
---

# Audio APIs

## Objective

In this chapter, you'll learn how to play and record sounds. As with images, you'll see you can play both local and remote sound files, and have programmatic control over that playback.

## Contents

The audio APIs are part of the larger `Ti.Media` module, which contains all the APIs for media-related functionality. Sound related APIs in that module are available in the following namespaces:

* `Ti.Media.Sound` - used for playing basic sounds

* `Ti.Media.AudioPlayer` - used for streaming audio to the device and low-level control of the audio playback

* `Ti.Media.AudioRecorder` - used for recording audio from the device microphone

### Playing basic sounds

You can use the `Ti.Media.Sound` object to add beeps and other user-feedback sounds. You can also use it for ambient sounds (that play in the background while the app is active). Keep in mind though that with the Sound object, the entire sound file is loaded into memory before it's played. This increases memory use in your app. It also creates a delay before the sound can be played the first time (while the file is being read into memory). You can set `sound.preload=true` to preload the sound, but there's still that delay as the file is read into memory.

The Sound object includes a few useful methods, including `play()`, `pause()`, and `stop()`. The `url` property accepts a local file path or a URL to a remote sound file. (The entire sound file must be downloaded before it can be played; it won't be streamed). You can control the volume with either the `setVolume()` method or by setting the `volume` property. See the [API docs](http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media.Sound-object) for full information.

```javascript
// create the sound/media object
var sound = Titanium.Media.createSound({
  url: 'your_sound_file.mp3',
  preload: true
});
var button = Ti.UI.createButton({
  title: 'Click to play sound',
  width: '200',
  height: '40',
  top: 20
});
button.addEventListener('click', function() {
  sound.play();
});
```

In this sample, we attached an event listener to a button so that the sound plays when the button is clicked. You could add an event listener to a view or window (say, to watch for the `open` event) to play the sound while that component is visible. Typically, you'd attach a listener to another component, such as a different view or window, to stop the sound when the window loses focus. This sort of "background" sound won't continue playing when the app closes unless you set `allowBackground=true`, though any buffered portion might continue to play after the app closes.

### Streaming audio

You can stream audio from a web URL with the `Ti.Media.AudioPlayer` object. The AudioPlayer supports pseudo-streaming (of MP3 or other files) as well as [HTML Live Streaming](http://developer.apple.com/library/ios/#documentation/networkinginternet/conceptual/streamingmediaguide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008332-CH1-DontLinkElementID_39). You could also implement HTML live streaming with a WebView, but the native player gives you easier programmatic control and handling of events within your app's native (non-HTML) code.

```javascript
var streamer = Ti.Media.createAudioPlayer({
  url: 'http://example.com/somefile.mp3'
});
streamer.start();
```

When using streaming, you should make sure to account for interruptions, such as receiving a phone call while the audio plays. You can pause and resume the audio automatically by watching a couple of app-level events.

```
Titanium.App.addEventListener('pause', function(e) {
  // app is paused during phone call, so pause the stream
    streamer.setPaused(true);
  // you could also use streamer.pause()
});
Titanium.App.addEventListener('resume', function(e) {
  // app resumes when call ends, so un-pause the stream
    streamer.setPaused(false);
  // or use streamer.start()
});
```

### Recording audio

You can record audio from the device's microphone using the `Ti.Media.AudioRecorder` object. This object includes a few useful methods, including `start()`, `pause()`/`resume()`, and `stop()`. It also has two key properties that you use to control the quality and size of the recorded audio data. These are:

* `compression` - which specifies the compression type, such as `Ti.Media.AUDIO_FORMAT_ULAW` (low-fidelity) or `Ti.Media.AUDIO_FORMAT_LINEAR_PCM` (hi-fi, but creates larger files)

* `format` - which specifies the file format type, such as `Ti.Media.AUDIO_FILEFORMAT_WAVE`

See the [`Media` object API docs](http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media-module) for a complete list of compression and format types available in Titanium.

### Hands-on Practice

#### Goal

In this activity, you will write a simple app that will play basic sounds and stream a remote sound file. You'll add a button that when clicked will play a short "beep" tone. You'll add another button that when clicked will stream a sound file. You'll also add a sound that plays when a window is active and stops when it loses focus.

#### Resources

To perform the steps in this activity, you will need two sound files. You can use your own, select sounds from a source like [http://www.freesound.org](http://www.freesound.org), or download these sounds (from freesound.org): [button sound](http://wiki.appcelerator.org/download/attachments/19202905/2156__nicstage__lightswitchimpact.mp3) and [window sound](http://wiki.appcelerator.org/download/attachments/19202905/25921__suonho__funkysynth-retweek-talkboxer-wha-116bpm.mp3) (right-click those links and choose Save). You'll also access a remote mp3 file from freesound.org, so the simulator/emulator or your test device will need network access.

#### Steps

1. Create a new Titanium Mobile app. You can keep the starting code for this app; you'll modify what's there.

2. Remove `label1` (it's definition, and the `win1.add()` statement). In its place, add a button with these characteristics:

    * Title: Click to play sound

    * Width/height: 200 x40

    * Top: 20

3. Define a sound object that preloads the sounds/2156\_\_nicstage\_\_lightswitchimpact.mp3 file.

4. Add an event listener to the button that plays the sound when the button is clicked.

5. Add another button to win1 with these characteristics:

    * Title: Click to stream sound

    * Width/height: 200 x40

    * Top: 75

6. Define an AudioPlayer that will stream the sound at [http://www.freesound.org/data/previews/2/2686\_5150-lq.mp3](http://www.freesound.org/data/previews/2/2686_5150-lq.mp3)
    Add an event listener to your streaming button so that when the button is clicked:

    * If the streaming player is not playing currently, start the stream and change the button's title to 'Click to pause stream'

    * If the streaming player is playing, pause the stream and change the button's title back to 'Click to stream sound'

7. Add the app event listeners to pause the stream and restart in the case a call is received during streaming.

8. On win2, create a looping, preloaded sound that will play the sounds/25921\_\_suonho\_\_funkysynth-retweek-talkboxer-wha-116bpm.mp3 file.

9. Add an event listener to the tab group that monitors the `focus` event. If the tab index is 0 (the first tab), pause the sound. Otherwise, play the sound. This will play the sound when tab 2 is displayed and pause it when tab 1 is active.

10. Build and test the app in the simulator/emulator.

### Windows development considerations

::: danger ❗️ Warning
Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.
:::

In order to enable background audio for Windows Phone, you need to provide appropriate Capabilities in your `tiapp.xml`. Windows Phone users are prompted to grant or deny permission when your application attempt to use background audio. Note that background audio does not work on Windows 10 Mobile due to the system resource policy changes.

#### Grant access to background audio

```xml
<ti:app>
  ...
  <windows>
    ...
    <manifest>
      <Extensions>

 <Extension Category="windows.backgroundTasks"
Executable="$targetnametoken$.exe"
EntryPoint="TitaniumWindows_Media.AudioBackground">
          <BackgroundTasks>
            <Task Type="audio" />
          </BackgroundTasks>
        </Extension>
      </Extensions>
    </manifest>
    ...
  </windows>
  ...
</ti:app>
```

#### Grant access to video stream and audio stream

```xml
<ti:app>
  ...
  <windows>
    ...
    <Capabilities>
        <DeviceCapability Name="microphone" />
        <DeviceCapability Name="webcam" />
    </Capabilities>
    ...
  </windows>
  ...
</ti:app>
```

#### Grant access to music library

```xml
<ti:app>
  ...
  <windows>
    ...
    <Capabilities>
        <Capability Name="musicLibrary" />
    </Capabilities>
    ...
  </windows>
  ...
</ti:app>
```

For more information about audio configuration in `tiapp.xml`, see [Windows-specific section](/guide/Titanium_SDK/Titanium_SDK_Guide/Appendices/tiapp.xml_and_timodule.xml_Reference/#tiapp.xmlandtimodule.xmlReference-Windows-specific) in [tiapp.xml and timodule.xml Reference](/guide/Titanium_SDK/Titanium_SDK_Guide/Appendices/tiapp.xml_and_timodule.xml_Reference/).

## References and further reading

* [Finished code](http://assets.appcelerator.com.s3.amazonaws.com/app_u/ebook/7.1_audio.zip)

* The [`Media` object API docs](http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Media-module)

## Summary

In this chapter, you learned how to play and record sounds. You saw you can play both local and remote sound files, and have programmatic control over that playback.
