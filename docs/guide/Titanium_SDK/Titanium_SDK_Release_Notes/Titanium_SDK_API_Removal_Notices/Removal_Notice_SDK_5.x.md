---
title: Removal Notice SDK 5.x
weight: '40'
---

# Removal Notice SDK 5.x

List of all removal notices for SDK 5.x.

## SDK 5.x

### 5.4.0

The following APIs have been removed in Release 5.4.0 as of August 10th, 2016 .

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Filesystem.File.getWriteable | method | Use writable instead. |
| Titanium.Filesystem.File.writeable | property | Use writable instead. |
| Titanium.Media.AUDIO\_SESSION\_MODE\_AMBIENT | property | Deprecated in favor of the `AUDIO_SESSION_CATEGORY` constants defined in Titanium.Media. |
| Titanium.Media.AUDIO\_SESSION\_MODE\_PLAYBACK | property | Deprecated in favor of the `AUDIO_SESSION_CATEGORY` constants defined in Titanium.Media. |
| Titanium.Media.AUDIO\_SESSION\_MODE\_PLAY\_AND\_RECORD | property | Deprecated in favor of the `AUDIO_SESSION_CATEGORY` constants defined in Titanium.Media. |
| Titanium.Media.AUDIO\_SESSION\_MODE\_RECORD | property | Deprecated in favor of the `AUDIO_SESSION_CATEGORY` constants defined in Titanium.Media. |
| Titanium.Media.VIDEO\_CONTROL\_VOLUME\_ONLY | property | Use Titanium.Media.VIDEO\_CONTROL\_EMBEDDED instead. |
| Titanium.Media.VideoPlayer.getMovieControlMode | method | Use mediaControlStyle instead. |
| Titanium.Media.VideoPlayer.movieControlMode | property | Use mediaControlStyle instead. |
| Titanium.Media.VideoPlayer.setMovieControlMode | method | Use mediaControlStyle instead. |
| Titanium.UI.AUTODETECT\_ADDRESS | property | Use Titanium.UI.AUTOLINK\_MAP\_ADDRESSES instead. |
| Titanium.UI.AUTODETECT\_ALL | property | Use Titanium.UI.AUTOLINK\_ALL instead. |
| Titanium.UI.AUTODETECT\_CALENDAR | property | Use Titanium.UI.AUTOLINK\_CALENDAR instead. |
| Titanium.UI.AUTODETECT\_LINK | property | Use Titanium.UI.AUTOLINK\_URLS instead. |
| Titanium.UI.AUTODETECT\_NONE | property | Use Titanium.UI.AUTOLINK\_NONE instead. |
| Titanium.UI.AUTODETECT\_PHONE | property | Use Titanium.UI.AUTOLINK\_PHONE\_NUMBERS instead. |
| Titanium.UI.BLEND\_MODE\_CLEAR | property | Use Titanium.UI.iOS.BLEND\_MODE\_CLEAR instead. |
| Titanium.UI.BLEND\_MODE\_COLOR | property | Use Titanium.UI.iOS.BLEND\_MODE\_COLOR instead. |
| Titanium.UI.BLEND\_MODE\_COLOR\_BURN | property | Use Titanium.UI.iOS.BLEND\_MODE\_COLOR\_BURN instead. |
| Titanium.UI.BLEND\_MODE\_COLOR\_DODGE | property | Use Titanium.UI.iOS.BLEND\_MODE\_COLOR\_DODGE instead. |
| Titanium.UI.BLEND\_MODE\_COPY | property | Use Titanium.UI.iOS.BLEND\_MODE\_COPY instead. |
| Titanium.UI.BLEND\_MODE\_DARKEN | property | Use Titanium.UI.iOS.BLEND\_MODE\_DARKEN instead. |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_ATOP | property | Use Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_ATOP instead. |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_IN | property | Use Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_IN instead. |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_OUT | property | Use Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_OUT instead. |
| Titanium.UI.BLEND\_MODE\_DESTINATION\_OVER | property | Use Titanium.UI.iOS.BLEND\_MODE\_DESTINATION\_OVER instead. |
| Titanium.UI.BLEND\_MODE\_DIFFERENCE | property | Use Titanium.UI.iOS.BLEND\_MODE\_DIFFERENCE instead. |
| Titanium.UI.BLEND\_MODE\_EXCLUSION | property | Use Titanium.UI.iOS.BLEND\_MODE\_EXCLUSION instead. |
| Titanium.UI.BLEND\_MODE\_HARD\_LIGHT | property | Use Titanium.UI.iOS.BLEND\_MODE\_HARD\_LIGHT instead. |
| Titanium.UI.BLEND\_MODE\_HUE | property | Use Titanium.UI.iOS.BLEND\_MODE\_HUE instead. |
| Titanium.UI.BLEND\_MODE\_LIGHTEN | property | Use Titanium.UI.iOS.BLEND\_MODE\_LIGHTEN instead. |
| Titanium.UI.BLEND\_MODE\_LUMINOSITY | property | Use Titanium.UI.iOS.BLEND\_MODE\_LUMINOSITY instead. |
| Titanium.UI.BLEND\_MODE\_MULTIPLY | property | Use Titanium.UI.iOS.BLEND\_MODE\_MULTIPLY instead. |
| Titanium.UI.BLEND\_MODE\_NORMAL | property | Use Titanium.UI.iOS.BLEND\_MODE\_NORMAL instead. |
| Titanium.UI.BLEND\_MODE\_OVERLAY | property | Use Titanium.UI.iOS.BLEND\_MODE\_OVERLAY instead. |
| Titanium.UI.BLEND\_MODE\_PLUS\_DARKER | property | Use Titanium.UI.iOS.BLEND\_MODE\_PLUS\_DARKER instead. |
| Titanium.UI.BLEND\_MODE\_PLUS\_LIGHTER | property | Use Titanium.UI.iOS.BLEND\_MODE\_PLUS\_LIGHTER instead. |
| Titanium.UI.BLEND\_MODE\_SATURATION | property | Use Titanium.UI.iOS.BLEND\_MODE\_SATURATION instead. |
| Titanium.UI.BLEND\_MODE\_SCREEN | property | Use Titanium.UI.iOS.BLEND\_MODE\_SCREEN instead. |
| Titanium.UI.BLEND\_MODE\_SOFT\_LIGHT | property | Use Titanium.UI.iOS.BLEND\_MODE\_SOFT\_LIGHT instead. |
| Titanium.UI.BLEND\_MODE\_SOURCE\_ATOP | property | Use Titanium.UI.iOS.BLEND\_MODE\_SOURCE\_ATOP instead. |
| Titanium.UI.BLEND\_MODE\_SOURCE\_IN | property | Use Titanium.UI.iOS.BLEND\_MODE\_SOURCE\_IN instead. |
| Titanium.UI.BLEND\_MODE\_SOURCE\_OUT | property | Use Titanium.UI.iOS.BLEND\_MODE\_SOURCE\_OUT instead. |
| Titanium.UI.BLEND\_MODE\_XOR | property | Use Titanium.UI.iOS.BLEND\_MODE\_XOR instead. |
| Titanium.UI.iOS.3DMatrix | object | Use Titanium.UI.3DMatrix instead. |
| Titanium.UI.iOS.ANIMATION\_CURVE\_EASE\_IN | property | Use Titanium.UI.ANIMATION\_CURVE\_EASE\_IN instead. |
| Titanium.UI.iOS.ANIMATION\_CURVE\_EASE\_IN\_OUT | property | Use Titanium.UI.ANIMATION\_CURVE\_EASE\_IN\_OUT instead. |
| Titanium.UI.iOS.ANIMATION\_CURVE\_EASE\_OUT | property | Use Titanium.UI.ANIMATION\_CURVE\_EASE\_OUT instead. |
| Titanium.UI.iOS.ANIMATION\_CURVE\_LINEAR | property | Use Titanium.UI.ANIMATION\_CURVE\_LINEAR instead. |
| Titanium.UI.iOS.ATTRIBUTE\_BACKGROUND\_COLOR | property | Use the Titanium.UI.ATTRIBUTE\_BACKGROUND\_COLOR constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_BASELINE\_OFFSET | property | Use the Titanium.UI.ATTRIBUTE\_BASELINE\_OFFSET constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_EXPANSION | property | Use the Titanium.UI.ATTRIBUTE\_EXPANSION constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_FONT | property | Use the Titanium.UI.ATTRIBUTE\_FONT constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_FOREGROUND\_COLOR | property | Use the Titanium.UI.ATTRIBUTE\_FOREGROUND\_COLOR constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_KERN | property | Use the Titanium.UI.ATTRIBUTE\_KERN constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_LETTERPRESS\_STYLE | property | Use the Titanium.UI.ATTRIBUTE\_LETTERPRESS\_STYLE constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_LIGATURE | property | Use the Titanium.UI.ATTRIBUTE\_LIGATURE constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_LINK | property | Use the Titanium.UI.ATTRIBUTE\_LINK constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_OBLIQUENESS | property | Use the Titanium.UI.ATTRIBUTE\_OBLIQUENESS constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_SHADOW | property | Use the Titanium.UI.ATTRIBUTE\_SHADOW constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_STRIKETHROUGH\_COLOR | property | Use the Titanium.UI.ATTRIBUTE\_STRIKETHROUGH\_COLOR constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_STRIKETHROUGH\_STYLE | property | Use the Titanium.UI.ATTRIBUTE\_STRIKETHROUGH\_STYLE constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_STROKE\_COLOR | property | Use the Titanium.UI.ATTRIBUTE\_STROKE\_COLOR constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_STROKE\_WIDTH | property | Use the Titanium.UI.ATTRIBUTE\_STROKE\_WIDTH constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_TEXT\_EFFECT | property | Use the Titanium.UI.ATTRIBUTE\_TEXT\_EFFECT constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINES\_STYLE | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINES\_STYLE constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_BY\_WORD | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_BY\_WORD constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_COLOR | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_COLOR constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_PATTERN\_DASH | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_PATTERN\_DASH constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_PATTERN\_DASH\_DOT | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_PATTERN\_DASH\_DOT constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_PATTERN\_DASH\_DOT\_DOT | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_PATTERN\_DASH\_DOT\_DOT constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_PATTERN\_DOT | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_PATTERN\_DOT constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_PATTERN\_SOLID | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_PATTERN\_SOLID constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_STYLE\_DOUBLE | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_STYLE\_DOUBLE constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_STYLE\_NONE | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_STYLE\_NONE constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_STYLE\_SINGLE | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_STYLE\_SINGLE constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_UNDERLINE\_STYLE\_THICK | property | Use the Titanium.UI.ATTRIBUTE\_UNDERLINE\_STYLE\_THICK constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_WRITING\_DIRECTION | property | Use the Titanium.UI.ATTRIBUTE\_WRITING\_DIRECTION constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_WRITING\_DIRECTION\_EMBEDDING | property | Use the Titanium.UI.ATTRIBUTE\_WRITING\_DIRECTION\_EMBEDDING constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_WRITING\_DIRECTION\_LEFT\_TO\_RIGHT | property | Use the Titanium.UI.ATTRIBUTE\_WRITING\_DIRECTION\_LEFT\_TO\_RIGHT constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_WRITING\_DIRECTION\_NATURAL | property | Use the Titanium.UI.ATTRIBUTE\_WRITING\_DIRECTION\_NATURAL constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_WRITING\_DIRECTION\_OVERRIDE | property | Use the Titanium.UI.ATTRIBUTE\_WRITING\_DIRECTION\_OVERRIDE constant instead (without the iOS namespace). |
| Titanium.UI.iOS.ATTRIBUTE\_WRITING\_DIRECTION\_RIGHT\_TO\_LEFT | property | Use the Titanium.UI.ATTRIBUTE\_WRITING\_DIRECTION\_RIGHT\_TO\_LEFT constant instead (without the iOS namespace). |
| Titanium.UI.iOS.AUTODETECT\_ADDRESS | property | Use Titanium.UI.AUTOLINK\_MAP\_ADDRESSES instead. |
| Titanium.UI.iOS.AUTODETECT\_ALL | property | Use Titanium.UI.AUTOLINK\_ALL instead. |
| Titanium.UI.iOS.AUTODETECT\_CALENDAR | property | Use Titanium.UI.AUTOLINK\_CALENDAR instead. |
| Titanium.UI.iOS.AUTODETECT\_LINK | property | Use Titanium.UI.AUTOLINK\_URLS instead. |
| Titanium.UI.iOS.AUTODETECT\_NONE | property | Use Titanium.UI.AUTOLINK\_NONE instead. |
| Titanium.UI.iOS.AUTODETECT\_PHONE | property | Use Titanium.UI.AUTOLINK\_PHONE\_NUMBERS instead. |
| Titanium.UI.iOS.Attribute | object | use Attribute instead. |
| Titanium.UI.iOS.AttributedString | object | use Titanium.UI.AttributedString instead. |
| Titanium.UI.iOS.create3DMatrix | method | Use Titanium.UI.3DMatrix instead. |
| Titanium.UI.iOS.createAttribute | method | use Attribute instead. |
| Titanium.UI.iOS.createAttributedString | method | use Titanium.UI.AttributedString instead. |
| Titanium.UI.iPad.DocumentViewer | object | Use Titanium.UI.iOS.DocumentViewer instead. |
| Titanium.UI.iPad.SplitWindow | object | Use Titanium.UI.iOS.SplitWindow instead. |
| Titanium.UI.iPad.createDocumentViewer | method | Use Titanium.UI.iOS.DocumentViewer instead. |
| Titanium.UI.iPad.createSplitWindow | method | Use Titanium.UI.iOS.SplitWindow instead. |
| Titanium.UI.iPhone.getStatusBarHidden | method | Use Titanium.UI.Window.fullscreen instead. |
| Titanium.UI.iPhone.getStatusBarStyle | method | Use Titanium.UI.Window.statusBarStyle instead. |
| Titanium.UI.iPhone.statusBarHidden | property | Use Titanium.UI.Window.fullscreen instead. |
| Titanium.UI.iPhone.statusBarStyle | property | Use Titanium.UI.Window.statusBarStyle instead. |

### 5.0.0

The following APIs have been removed in Release 5.0.0 as of September 16th, 2015 .

| API | Type | Notes |
| --- | --- | --- |
| Titanium.Network.HTTPClient.addAuthFactory | method |  |
| Titanium.UI.ListView.rowAction | event | Event renamed to editaction |
