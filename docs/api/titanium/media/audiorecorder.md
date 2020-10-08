---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Media/AudioRecorder.yml
---
# Titanium.Media.AudioRecorder

<TypeHeader/>

## Overview

Use the <Titanium.Media.createAudioRecorder> method to create an audio recorder.

Ensure to request the permissions for audio-recording before starting a new record-session.
This can be done by using <Titanium.Media.hasAudioRecorderPermissions> to check whether
audio-permissions are granted and <Titanium.Media.requestAudioRecorderPermissions> to 
request audio-permissions. 

**Android Platform Note**: On Android, you also need to include the following permission
into the `<android>` section of the tiapp.xml:

``` xml
<android xmlns:android="http://schemas.android.com/apk/res/android">
    <manifest>
        <uses-permission android:name="android.permission.RECORD_AUDIO" />
    </manifest>
</android>
```

## Examples

### Audio Recorder Example

The following code-example creates a window that controls the audio-recorder flow.

``` js
var window = Ti.UI.createWindow({
  backgroundColor: '#fff'
});

var recordStart = Ti.UI.createButton({
  title: 'Start',
  top: 10
});

var recordPause = Ti.UI.createButton({
  title: 'Pause',
  top: 60
});

var recordStop = Ti.UI.createButton({
  title: 'Stop',
  top: 110
});

var recordPlay = Ti.UI.createButton({
  title: 'Play',
  top: 160
});

var audioRecorder = Ti.Media.createAudioRecorder();
var record;
var audioPlayer;

window.addEventListener('open', function(e) {
  if (!Ti.Media.hasAudioRecorderPermissions()) {
    Ti.Media.requestAudioRecorderPermissions(function(e) {
      if (e.success) {
        window.add(recordStart);
      }
    });
  } else {
    window.add(recordStart);
  }
});

recordStart.addEventListener('click', function(e) {
  audioRecorder.start();
});

recordPause.addEventListener('click', function(e) {
  if (audioRecorder.getPaused()) {
    recordPause.setTitle('Pause');
    audioRecorder.resume()
  } else {
    recordPause.setTitle('Resume');
    audioRecorder.pause();
  }
});

recordStop.addEventListener('click', function(e) {
  record = audioRecorder.stop();
  Ti.API.info(record.getNativePath());
});

recordPlay.addEventListener('click', function(e) {
  audioPlayer = Ti.Media.createAudioPlayer({
    url: record.getNativePath()
  });
  audioPlayer.start();
});

window.add(recordPause);
window.add(recordStop);
window.add(recordPlay);

window.open();
```

<ApiDocs/>
