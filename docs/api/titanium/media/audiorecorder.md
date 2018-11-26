---
breadcrumbLabel: AudioRecorder
sidebar: auto
---

# Titanium.Media.AudioRecorder

<ProxySummary/>

## Overview

Use the [createAudioRecorder](Titanium.Media.createAudioRecorder) method to create an audio recorder.

Ensure to request the permissions for audio-recording before starting a new record-session.
This can be done by using [hasAudioRecorderPermissions](Titanium.Media.hasAudioRecorderPermissions) to check whether
audio-permissions are granted and [requestAudioRecorderPermissions](Titanium.Media.requestAudioRecorderPermissions) to 
request audio-permissions. 

**Android Platform Note**: On Android, you also need to include the following permission
into the `<android>` section of the tiapp.xml:

    <android xmlns:android="http://schemas.android.com/apk/res/android">
        <manifest>
            <uses-permission android:name="android.permission.RECORD_AUDIO" />
        </manifest>
    </android>

<ApiDocs/>
