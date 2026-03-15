---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/Color.yml
---
# Titanium.UI.Color

<TypeHeader/>

## Overview

This type may be used on iOS for assignment to any property typically taking a String color value.
A developer is not expected to typically interact with a <Titanium.UI.Color> object, as we generate them
under the hood when converting the passed in String representations. One major exception is use of the 
<Titanium.UI.fetchSemanticColor> method, which will return an instance to be passed to UI components.
This instance will automatically "adapt" the receiver to light/dark mode changes.

The only current instance you'd receive this type on Android is through the <Titanium.UI.Android.getColorResource> method.
Note that Android does not currently support passing in instances of this type for UI components/properties!
You must convert to a hex string representation to pass this in to any color properties on Android.

See [UI Element Colors](https://developer.apple.com/documentation/uikit/uicolor/ui_element_colors?language=objc) and
[Standard Colors](https://developer.apple.com/documentation/uikit/uicolor/standard_colors?language=objc) for lists of
named colors to pass to <Titanium.UI.fetchSemanticColor> on iOS.

See [R.color](https://developer.android.com/reference/android/R.color) for a list of system color names to use to pass to
<Titanium.UI.Android.getColorResource> on Android.

<ApiDocs/>
