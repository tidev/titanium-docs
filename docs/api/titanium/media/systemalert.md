# Titanium.Media.SystemAlert

<TypeHeader/>

## Overview

You can use this module to provide audible system alerts. 

You can use it to play short (30 seconds or shorter) sounds. The interface does not provide level, positioning, 
looping, or timing control, and does not support simultaneous playback: You can play only one sound at a time. 

This module differs from the Sound module because it honors the ringtone volume, not the Music volume.

Use the <Titanium.Media.createSystemAlert> method to create a `SystemAlert` object.

Know more about [System Sound Services](https://developer.apple.com/reference/audiotoolbox/1657326-system_sound_services).

## Examples

### Simple Example

Simple example of playing a WAVE file from the Resources directory.

``` js
var player = Ti.Media.createSystemAlert({url:"alert.wav"});
player.play();
```


<ApiDocs/>
