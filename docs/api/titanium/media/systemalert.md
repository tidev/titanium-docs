---
breadcrumbLabel: SystemAlert
sidebar: auto
---

# Titanium.Media.SystemAlert

<ProxySummary/>

## Overview

You can use this module to provide audible system alerts. 

You can use it to play short (30 seconds or shorter) sounds. The interface does not provide level, positioning, 
looping, or timing control, and does not support simultaneous playback: You can play only one sound at a time. 

This module differs from the Sound module because it honors the ringtone volume, not the Music volume.

Use the [createSystemAlert](Titanium.Media.createSystemAlert) method to create a `SystemAlert` object.

Know more about [System Sound Services](https://developer.apple.com/reference/audiotoolbox/1657326-system_sound_services).

<ApiDocs/>
