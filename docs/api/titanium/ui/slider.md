---
breadcrumbLabel: Slider
sidebar: auto
---

# Titanium.UI.Slider

<ProxySummary/>

## Overview

<table id="platformComparison">
  <tr>
    <td><img src="images/slider/slider_android.png" height="25" /></td>
    <td><img src="images/slider/slider_ios.png" height="25" /></td>
    <td><img src="images/slider/slider_wp.png" height="25" /></td>
  </tr>
  <tr><th>Android</th><th>iOS</th><th>Windows Phone</th></tr>
</table>

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

<ApiDocs/>
