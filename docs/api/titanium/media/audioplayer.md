# Titanium.Media.AudioPlayer

<ProxySummary/>

## Overview

On Android, when you are done playing a given audio file, you must call the
[release](Titanium.Media.AudioPlayer.release) method to stop buffering audio data and
release associated system resources. Since 7.5.0, this method is available on iOS as well
and will release all audio-player related resources. After this method has been called,
the object should not be accessed anymore.

On iOS, you can control how the audio stream interacts with other system sounds
by setting <Titanium.Media.audioSessionCategory>. Since Titanium 7.5.0, this API
uses the [AVPlayer API](https://developer.apple.com/documentation/avfoundation/avplayer) for a more modern
and performant audio playback.

Use the <Titanium.Media.createAudioPlayer> method to create an audio player.

## Examples

### Audio Streaming

The following example demonstrates using the `AudioPlayer` object to stream audio.

    var win = Ti.UI.createWindow({
        title: 'Audio Test',
        backgroundColor: '#fff',
        layout: 'vertical'
    });

    var startStopButton = Ti.UI.createButton({
        title: 'Start/Stop Streaming',
        top: 10,
        width: 200,
        height: 40
    });

    var pauseResumeButton = Ti.UI.createButton({
        title: 'Pause/Resume Streaming',
        top: 10,
        width: 200,
        height: 40,
        enabled: false
    });

    win.add(startStopButton);
    win.add(pauseResumeButton);

    // allowBackground: true on Android allows the
    // player to keep playing when the app is in the
    // background.
    var audioPlayer = Ti.Media.createAudioPlayer({
        url: 'www.example.com/podcast.mp3',
        allowBackground: true
    });

    startStopButton.addEventListener('click', function() {
        // When paused, playing returns false.
        // If both are false, playback is stopped.
        if (audioPlayer.playing || audioPlayer.paused) {
            audioPlayer.stop();
            pauseResumeButton.enabled = false;
            audioPlayer.release();
        } else {
            audioPlayer.start();
            pauseResumeButton.enabled = true;
        }
    });

    pauseResumeButton.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.start();
        } else {
            audioPlayer.pause();
        }
    });

    audioPlayer.addEventListener('progress', function(e) {
        Ti.API.info('Time Played: ' + Math.round(e.progress) + ' milliseconds');
    });

    audioPlayer.addEventListener('change', function(e) {
        Ti.API.info('State: ' + e.description + ' (' + e.state + ')');
    });

    win.addEventListener('close', function() {
        audioPlayer.stop();
        audioPlayer.release();
    });

    win.open();

<ApiDocs/>
