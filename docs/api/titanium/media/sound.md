---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Media/Sound.yml
---
# Titanium.Media.Sound

<TypeHeader/>

## Overview

The `Sound` object loads the entire media resource in memory before playing.  If you need to 
support streaming, use the [AudioPlayer](Titanium.Media.AudioPlayer) API.

You can control how the sound interacts with other system sounds
by setting <Titanium.Media.audioSessionCategory>.

Use the <Titanium.Media.createSound> method to create a `Sound` object. You can play audio 
in any format supported by the target platform(s), as described in the following documents:

* [Android](https://developer.android.com/guide/topics/media/media-formats#core)
* [iOS](https://developer.apple.com/audio/)

## Examples

### Simple Example

Simple example of playing a WAVE file from the Resources directory.

``` js
var player = Ti.Media.createSound({url:"sound.wav"});
player.play();
```

<ApiDocs/>
