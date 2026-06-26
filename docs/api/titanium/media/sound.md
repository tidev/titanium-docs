---
title: Titanium.Media.Sound
properties:
  - name: STATE_BUFFERING
    type: Number
    summary: Audio data is being buffered from the network.
    platforms:
      - android
    since: 3.2.0
  - name: STATE_INITIALIZED
    type: Number
    summary: Audio playback is being initialized.
    platforms:
      - android
    since: 3.2.0
  - name: STATE_PAUSED
    type: Number
    summary: Playback is paused.
    platforms:
      - android
    since: 3.2.0
  - name: STATE_PLAYING
    type: Number
    summary: Audio playback is active.
    platforms:
      - android
    since: 3.2.0
  - name: STATE_STARTING
    type: Number
    summary: Audio playback is starting.
    platforms:
      - android
    since: 3.2.0
  - name: STATE_STOPPED
    type: Number
    summary: Audio playback is stopped.
    platforms:
      - android
    since: 3.2.0
  - name: STATE_STOPPING
    type: Number
    summary: Audio playback is stopping.
    platforms:
      - android
    since: 3.2.0
  - name: STATE_WAITING_FOR_DATA
    type: Number
    summary: Player is waiting for audio data from the network.
    platforms:
      - android
    since: 3.2.0
  - name: STATE_WAITING_FOR_QUEUE
    type: Number
    summary: Player is waiting for audio data to fill the queue.
    platforms:
      - android
    since: 3.2.0
  - name: AUDIO_TYPE_ALARM
    type: Number
    summary: Used to identify the volume of audio streams for alarms.
    platforms:
      - android
    since: 6.2.0
  - name: AUDIO_TYPE_SIGNALLING
    type: Number
    summary: Used to identify the volume of audio streams for DTMF tones or beeps.
    platforms:
      - android
    since: 6.2.0
  - name: AUDIO_TYPE_MEDIA
    type: Number
    summary: Used to identify the volume of audio streams for media playback.
    platforms:
      - android
    since: 6.2.0
  - name: AUDIO_TYPE_NOTIFICATION
    type: Number
    summary: Used to identify the volume of audio streams for notifications.
    platforms:
      - android
    since: 6.2.0
  - name: AUDIO_TYPE_RING
    type: Number
    summary: Used to identify the volume of audio streams for the phone ring.
    platforms:
      - android
    since: 6.2.0
  - name: AUDIO_TYPE_VOICE
    type: Number
    summary: Used to identify the volume of audio streams for voice calls.
    platforms:
      - android
    since: 6.2.0
  - name: allowBackground
    type: Boolean
    summary: >-
      Determines whether the audio should continue playing even when its
      activity is paused.
    platforms:
      - android
    since: 1.3.0
  - name: audioType
    type: Number
    summary: Changes the audio-stream-type.
    platforms:
      - android
    since: 6.2.0
  - name: duration
    type: Number
    summary: Duration of the audio resource.
    description: >
      <p>On iOS, playback time is reported in seconds.</p>

      <p>On Android, time is reported in milliseconds.</p>

      <p>Android note: Starting from Titanium 3.2.0, the remote audio plays
      asynchronously. The duration<br>

      can only be fetched after the audio is initialized (refer to <a
      href="/api/titanium/media/sound/state_initialized">Titanium.Media.Sound.STATE_INITIALIZED</a>).</p>
  - name: looping
    type: Boolean
    summary: Determines whether the audio should loop upon completion.
  - name: paused
    type: Boolean
    summary: Indicates if the audio is paused.
    description: >
      <p>On iOS, this property is read-write, and you can pause and resume
      playback by setting this<br>

      property to <code>true</code> or <code>false</code>.</p>

      <p>On Android, this property is read-only. For portability, use <a
      href="Titanium.Media.Sound.pause">pause</a><br>

      to pause audio, and <a href="Titanium.Media.Sound.play">play</a> to
      resume.</p>
  - name: playing
    type: Boolean
    summary: Indicates if the audio is playing.
  - name: time
    type: Number
    summary: Current playback position of the audio.
    description: |
      <p>Time is reported in milliseconds.</p>
      <p>On iOS, prior to Release 3.0, playback time is reported in seconds.</p>
  - name: url
    type: String
    summary: URL identifying the audio resource.
  - name: volume
    type: Number
    summary: Volume of the audio from 0.0 (muted) to 1.0 (loudest).
    description: >
      <p>This setting controls the volume of the sound relative to the
      overall<br>

      volume setting for the device.</p>

      <p>On iOS, to adjust the volume of the device, set the <code>volume</code>
      property of<br>

      <a href="/api/titanium/media">Titanium.Media.appMusicPlayer</a> and set
      the <a href="/api/titanium/media">Titanium.Media.audioSessionCategory</a>
      property<br>

      to either <a
      href="/api/titanium/media/audio_session_category_solo_ambient">Titanium.Media.AUDIO_SESSION_CATEGORY_SOLO_AMBIENT</a>,<br>

      <a
      href="/api/titanium/media/audio_session_category_playback">Titanium.Media.AUDIO_SESSION_CATEGORY_PLAYBACK</a>,<br>

      or <a
      href="/api/titanium/media/audio_session_category_play_and_record">Titanium.Media.AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD</a>.</p>
methods:
  - name: isLooping
    summary: >-
      Returns the value of the <a
      href="Titanium.Media.Sound.looping">looping</a> property.
    returns:
      type: Boolean
  - name: isPaused
    summary: >-
      Returns the value of the <a href="Titanium.Media.Sound.paused">paused</a>
      property.
    returns:
      type: Boolean
  - name: isPlaying
    summary: >-
      Returns the value of the <a
      href="Titanium.Media.Sound.playing">playing</a> property.
    returns:
      type: Boolean
  - name: pause
    summary: Pauses the audio.
    description: >
      <p>To restart the audio, call <a
      href="Titanium.Media.Sound.play">play</a>.</p>
  - name: play
    summary: Starting playing the sound, or resume playing a paused sound.
  - name: release
    summary: Releases all internal resources.
    description: >
      <p>This is typically unnecessary but can be useful if you load a large
      audio file in <code>app.js</code>, and<br>

      play it only once and you would like to release all resources after your
      final play to reduce memory.</p>
  - name: reset
    summary: Resets the audio playback position to the beginning.
  - name: setLooping
    summary: >-
      Sets the value of the <a href="Titanium.Media.Sound.looping">looping</a>
      property.
    parameters:
      - name: looping
        type: Boolean
        summary: New value for the <code>looping</code> property.
  - name: setPaused
    summary: >-
      Sets the value of the <a href="Titanium.Media.Sound.paused">paused</a>
      property.
    description: >
      <p>On iOS, this method can be used to pause and unpause playback. For
      portability,<br>

      it is preferable to use the <a href="Titanium.Media.Sound.pause">pause</a>
      and<br>

      <a href="Titanium.Media.Sound.play">play</a> methods instead.</p>
    parameters:
      - name: paused
        type: Boolean
        summary: >-
          Pass <code>true</code> to pause the current playback temporarily,
          <code>false</code> to unpause it.
  - name: stop
    summary: >-
      Stops playing the audio and resets the playback position to the beginning
      of the clip.
events:
  - name: change
    summary: Fired when the state of the playback changes.
    description: >
      <p>This event can be generated by programmatic events, such as pausing or
      stopping the audio,<br>

      and also by external events, such as the current state of network
      buffering.</p>
    properties:
      - name: state
        type: Number
        summary: |
          Current state of playback.<br>
      - name: description
        type: String
        summary: Text description of the state of playback.
  - name: complete
    summary: Fired when the audio has finished playing.
    properties:
      - name: success
        type: Boolean
        summary: >
          Indicates if the sound was played successfully.<br>

          Returns <code>true</code> if request succeeded, <code>false</code>
          otherwise.<br>
      - name: error
        type: String
        summary: >-
          Error message, if any returned. Will be undefined if
          <code>success</code> is <code>true</code>.
      - name: code
        type: Number
        summary: >
          Error code.<br>

          Error code will be <code>0</code> if <code>success</code> is
          <code>true</code>, nonzero otherwise. If the error<br>

          was generated by the operating system, that system's error value is
          used.<br>

          Otherwise, this value will be <code>-1</code>.<br>
  - name: error
    summary: Fired when an error occurs while playing the audio.
    properties:
      - name: success
        type: Boolean
        summary: Indicates a successful operation. Returns <code>false</code>.
      - name: error
        type: String
        summary: Error message, if any returned. May be <code>undefined</code>.
      - name: code
        type: Number
        summary: >
          Error code.<br>

          If the error was generated by the operating system, that system's
          error value<br>

          is used. Otherwise, this value will be <code>-1</code>.<br>
      - name: message
        type: String
        summary: Error message.
  - name: interrupted
    summary: Fired  when audio playback is interrupted by the device.
    description: >
      <p>Typically called during an interruption due to an incoming phone
      call.</p>
  - name: resume
    summary: Fired when audio playback is resumed after an interruption.
    properties:
      - name: interruption
        type: Boolean
        summary: Indicates if the resume was from an interruption.
examples:
  - title: Simple Example
    code:
      - content: |-
          var player = Ti.Media.createSound({url:"sound.wav"});
          player.play();
        language: js
    intro: Simple example of playing a WAVE file from the Resources directory.
---

# Titanium.Media.Sound

An object for playing basic audio resources.

The `Sound` object loads the entire media resource in memory before playing.  If you need to 
support streaming, use the [AudioPlayer](Titanium.Media.AudioPlayer) API.

You can control how the sound interacts with other system sounds
by setting [Titanium.Media.audioSessionCategory](/api/titanium/media).

Use the [Titanium.Media.createSound](/api/titanium/media) method to create a `Sound` object. You can play audio 
in any format supported by the target platform(s), as described in the following documents:

* [Android](https://developer.android.com/guide/topics/media/media-formats#core)
* [iOS](https://developer.apple.com/audio/)


**Extends:** `Titanium.Proxy` · **Since:** 0.8 · **Platforms:** android, iphone, ipad, macos

<ApiProperties />

<ApiMethods />

<ApiEvents />

<ApiExamples />

