---
breadcrumbLabel: AudioPlayer
sidebar: auto
---

# Titanium.Media.AudioPlayer

<ProxySummary/>

## Overview

On Android, when you are done playing a given audio file, you must call the
[release](Titanium.Media.AudioPlayer.release) method to stop buffering audio data and
release associated system resources. Since 7.5.0, this method is available on iOS as well
and will release all audio-player related resources. After this method has been called,
the object should not be accessed anymore.

On iOS, you can control how the audio stream interacts with other system sounds
by setting [audioSessionCategory](Titanium.Media.audioSessionCategory). Since Titanium 7.5.0, this API
uses the [AVPlayer API](https://developer.apple.com/documentation/avfoundation/avplayer) for a more modern
and performant audio playback.

Use the [createAudioPlayer](Titanium.Media.createAudioPlayer) method to create an audio player.

<ApiDocs/>
