---
title: Titanium.UI.Color
methods:
  - name: toHex
    summary: >-
      Returns a hex string representation of the color (in the RRGGBB or
      AARRGGBB formats)
    description: >
      <p>The returned value is an uppercase hex representation of the color with
      a leading <code>'#'</code>. If fully opaque,<br>

      the alpha hex values will be omitted. For example, black would return
      <code>'#000000'</code>. Black with a 50% opacity<br>

      would return <code>'#80000000'</code></p>
    returns:
      type: String
---

# Titanium.UI.Color

Represents a color used for UI components.


This type may be used on iOS for assignment to any property typically taking a String color value.
A developer is not expected to typically interact with a [Titanium.UI.Color](/api/titanium/ui/color) object, as we generate them
under the hood when converting the passed in String representations. One major exception is use of the 
[Titanium.UI.fetchSemanticColor](/api/titanium/ui) method, which will return an instance to be passed to UI components.
This instance will automatically "adapt" the receiver to light/dark mode changes.

The only current instance you'd receive this type on Android is through the [Titanium.UI.Android.getColorResource](/api/titanium/ui/android) method.
Note that Android does not currently support passing in instances of this type for UI components/properties!
You must convert to a hex string representation to pass this in to any color properties on Android.

See [UI Element Colors](https://developer.apple.com/documentation/uikit/uicolor/ui_element_colors?language=objc) and
[Standard Colors](https://developer.apple.com/documentation/uikit/uicolor/standard_colors?language=objc) for lists of
named colors to pass to [Titanium.UI.fetchSemanticColor](/api/titanium/ui) on iOS.

See [R.color](https://developer.android.com/reference/android/R.color) for a list of system color names to use to pass to
[Titanium.UI.Android.getColorResource](/api/titanium/ui/android) on Android.


**Extends:** `Titanium.Proxy` · **Since:** 9.1.0 · **Platforms:** iphone, ipad, android, macos

<ApiMethods />

