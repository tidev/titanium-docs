---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/Slider.yml
---
# Titanium.UI.Slider

<TypeHeader/>

## Overview

| Android | iOS | Windows |
| ------- | --- | ------- |
| ![Android](./slider_android.png) | ![iOS](./slider_ios.png) | ![Windows](./slider_wp.png) |

A slider lets the user select from a range of values by dragging the slider thumb.

Use the <Titanium.UI.createSlider> method or **`<Slider>`** Alloy element to create a slider.

### Android Platform Implementation Notes

On Android, the user can also maniuplate the slider using the arrow keys. For this
reason, placing other focusable UI elements to the left or right of
the slider is not recommended.

On Android, both `min` and `max` must be specified for the slider to work properly.

Earlier versions of the Titanium SDK implicitly enforced that both the [leftTrackImage](Titanium.UI.Slider.leftTrackImage) and
[rightTrackImage](Titanium.UI.Slider.rightTrackImage) properties be specified before the properties would be honored. Beginning with
Titanium SDK 4.0.0 this limitation has been removed. However it is recommended that either both or neither be specified.

To style different parts of the Slider you can set these properties in a custom Android theme:
``` xml
  <item name="android:progressBackgroundTint">#f4511e</item>
  <item name="android:progressTint">#388e3c</item>
  <item name="android:thumbTint">#c51162</item>
```
You can also use `@android:color/transparent` to remove the tint.

## Examples

### Simple Slider

The following sample demonstrates creating a slider and adding a listener to
handle the change events.

``` js
var slider = Titanium.UI.createSlider({
    top: 50,
    min: 0,
    max: 100,
    width: Ti.UI.FILL,
    value: 50
    });

var label = Ti.UI.createLabel({
    text: slider.value,
    width: Ti.UI.FILL,
    top: 30,
    left: 0,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
});

slider.addEventListener('change', function(e) {
    label.text = String.format('%3.1f', e.value);
});
```

### Alloy XML Markup

Previous example as an Alloy view.

Implement the `updateLabel` callback in the controller to update the label value
and set the initial `text` value for the label in the TSS file or controller.

index.xml:

``` xml
<Alloy>
    <Window id="window" backgroundColor="white">
        <Slider id="slider" top="50" min="0" max="100" width="Ti.UI.FILL" value="50" onChange="updateLabel"/>
        <Label id="label" width="Ti.UI.FILL" top="30" left="0" />
    </Window>
</Alloy>
```

index.js:

``` js
$.slider.text = $.slider.value;
function updateLabel(e) {
    $.label.text = String.format('%3.1f', e.value);
}
$.window.open();
```

<ApiDocs/>
