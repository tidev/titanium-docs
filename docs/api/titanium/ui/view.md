---
title: Titanium.UI.View
breadcrumbLabel: View
sidebar: auto
---

<Breadcrumb/>

# Titanium.UI.View

<ProxySummary/>

## Overview

The `View` is the base type for all UI widgets in Titanium.

You use the [createView](/api/titanium/ui/view.md#createview) method or `<View>` Alloy element to create a View.

### Units and Coordinates

Sizes and coordinates can be specified using a variety of units. If a value is
specified as a number, it is interpreted as a value in the default unit for the
current system and/or the current project.

When a value is specified as string, the value can consist of:

* A number.
* A percentage, such as "10%", interpreted as a percentage of the parent's total size in that dimension.
* A number plus a unit specifier, such as "10px" or "1in".

The following units are supported:

<table width="100%">
    <tr>
        <th>Unit</th>
        <th>Specifier</th>
        <th>Note</th>
    </tr>
    <tr>
        <td>pixels</td>
        <td>px</td>
        <td></td>
    </tr>
    <tr>
        <td>density-independent pixels</td>
        <td>dip</td>
        <td>Equivalent to Apple "points."</td>
    </tr>
    <tr>
        <td>inches</td>
        <td>in</td>
        <td></td>
    </tr>
    <tr>
        <td>millimeters</td>
        <td>mm</td>
        <td>Android, iOS only</td>
    </tr>
    <tr>
        <td>centimeters</td>
        <td>cm</td>
        <td>Android, iOS only</td>
    </tr>
    <tr>
        <td>points</td>
        <td>pt</td>
        <td>Typographical points of 1/72 of an inch. On Android, you can specify sizes and coordinates in typographical points. On other platforms, this unit is only used to specify font sizes. Not to be confused with Apple "points."</td>
    </tr>
</table>

The interpretation of the density-independent pixel (DIP) varies by platform:

*   On Android, one DIP corresponds to one pixel on a 160DPI
    display.

*   On iOS, one DIP corresponds to one pixel on a non-Retina display, which
    is 163DPI for iPhone/iPod touch and 132DPI for the iPad. A DIP
    corresponds to 2 pixels of width or height on a Retina display.

The absolute measures, such as inches, are dependent on the device correctly reporting
its density.

If no units are specified, a system-default unit is assumed. The system default unit is:

*    Pixels on Android.
*    DIPs on iOS.

On Android and iOS, the default unit can be overriden on a per-application level by setting the
`ti.ui.defaultunit` property in `tiapp.xml`. For example, to use DIPs as the
default on all platforms, set `defaultunit` to `dip`:

```xml
<property name="ti.ui.defaultunit" type="string">dip</property>
```

The value for `ti.ui.defaultunit` can be any of the unit specifiers defined above, or
`system` to specify that the platform's default unit should be used.

On IOS if you set the `ti.ui.defaultunit` property to anything other than `system` or `dip`, your
application should detect and handle Retina displays manually.

Font sizes on iOS are treated differently than other sizes: font sizes are always
specified in typographical points.

For more details see:

* [UI Composite Layout Spec](https://docs.appcelerator.com/platform/latest/#!/guide/UI_Composite_Layout_Behavior_Spec)

### Size and Position

Titanium views are positioned using the `left`, `right`, `top,` `bottom` and `center`
properties, and sized using the `width` and `height` properties. These are
input properties, set by the user to specify layout, and not modified by the
system to indicate actual calculated positions and sizes.

The [height](Titanium.UI.View.height) and [width](Titanium.UI.View.width) properties
accept several special values:

*   [`Titanium.UI.FILL`](/api/titanium/ui/fill) specifies that the view should fill the parent in this
    dimension.
*   [`Titanium.UI.SIZE`> specifies that the view should adjust this size to fit its
    contents, such as a label's text or a view's children.
*   'auto' specifies that the view should choose either `FILL` or `SIZE` behavior.
    The use of `auto` is deprecated, and should be replaced with the SIZE or FILL constants if it is necessary to set the view's behavior explicitly.

Sizes and positions can also be specified as a percentage of the parent's size, for
example, `50%`.

How these properties are interpreted depends on the value of the view's `layout`
property. See the description of the [layout](Titanium.UI.View.layout) property
for details.

The [rect](Titanium.UI.View.rect) property is a read-only dictionary
with the properties `x`, `y`, `width` and `height`. It provides the *rendered*
size and position of the  view, and is only available once both it and its ancestors have been
fully drawn.

The [size](Titanium.UI.View.size) property is a read-only dictionary
with the properties `x`, `y`, `width` and `height`. It provides the *rendered* size
  of the  view, and is only available once both it and its ancestors have been
fully drawn.

To determine whether the `size` and `rect` values are available, add an event listener
for the [postlayout](Titanium.UI.View.postlayout) event, which is fired at the end of
a layout cycle.

### Accessibility

Four accessibility-related view properties became available in Titanium Mobile 3.0.0 for iOS
and Android:

* [`Titanium.UI.View.accessibilityLabel`]
* [`Titanium.UI.View.accessibilityValue`]
* [`Titanium.UI.View.accessibilityHint`]
* [`Titanium.UI.View.accessibilityHidden`]

The first three, `accessibilityLabel`, `accessibilityValue` and `accessibilityHint`, are for setting text
that will be relayed to the user by the assistive service (such as TalkBack on Android or VoiceOver
on iOS). On iOS, Titanium will then take these values and set the native properties
of the same name which are defined in the [UIAccessibilityProtocol](https://developer.apple.com/documentation/uikit/accessibility/uiaccessibility).
On Android, Titanium takes the three values and concatenates them in the order `accessibilityLabel`,
`accessibilityValue`, and `accessibilityHint`, and then uses the result to set the native view's
[`contentDescription`](https://developer.android.com/reference/android/view/View.html#setContentDescription%28java.lang.CharSequence%29)
property.

You are not required to set all three properties: feel free to set just one or two as needed and
experiment with the results by turning on VoiceOver (iOS) or TalkBack (Android) on your test device.

The fourth property, `accessibilityHidden`, when set to `true`, indicates that the view can be ignored
by the assistive service. In iOS this sets the similarly-named
[accessibilityElementsHidden](https://developer.apple.com/documentation/objectivec/nsobject/1615080-accessibilityelementshidden)
native property.

In Android `accessibilityHidden` calls the native [View.setImportantForAccessibility(boolean)](https://developer.android.com/reference/android/view/View.html#setImportantForAccessibility%28int%29) method, passing `false` when
this property is set to `true` (i.e., "hidden" means it's not important). However, the
native `setImportantForAccessibility` method is available only on devices running
Android 4.1 (API level 16/Jelly Bean) or later. On earlier versions of Android, this
property is ignored.

No error will occur on older devices if you set `accessibilityHidden`; the value will simply be ignored.

### iOS: backgroundLeftCap and backgroundTopCap properties

The [backgroundLeftCap](Titanium.UI.View.backgroundLeftCap) and [backgroundTopCap](Titanium.UI.View.backgroundTopCap) properties are
used to specify the portions of the [backgroundImage](Titanium.UI.View.backgroundImage) that must not be resized when the image is streched or shrunk.

Given an image of width `w` and height `h`, the stretchable portion on the image is defined as a rectangle with the `top-left` point set to
`(backgroundLeftCap , backgroundTopCap)` and the `bottom-right` point set to `(w - backgroundLeftCap , h - backgroundTopCap)`. The portions not covered by
the stretchable portion keep their original size and appearance.

For best results on ImageView set up the `backgroundLeftCap` and `backgroundTopCap` properties such that the stretchable portion is always a 1x1 box.

### iOS Clipping Behavior

Four new view related properties became available in Titanium Mobile 3.3.0 for iOS.

* [`Titanium.UI.View.viewShadowRadius`]
* [`Titanium.UI.View.viewShadowColor`]
* [`Titanium.UI.View.viewShadowOffset`]
* [`Titanium.UI.View.clipMode`]

The first three, `viewShadowColor`, `viewShadowRadius` and `viewShadowOffset` control the shadow associated with the view.
The shadow of the view is drawn using a rounded rectangle with the arc radius set to the `borderRadius` property.

The `clipMode` property lets the user control the clipping behavior of the View.
Setting this to [`Titanium.UI.iOS.CLIP_MODE_ENABLED`] enforces all child views to be clipped to this views bounds.
Setting this to [`Titanium.UI.iOS.CLIP_MODE_DISABLED`] allows child views to be drawn outside the bounds of this view.
When set to [`Titanium.UI.iOS.CLIP_MODE_DEFAULT`] or when this property is not set, clipping behavior is defined by the following rules applied in order.

* If the `viewShadowColor` is defined to be a color with alpha > 0, clipping is disabled.
* If the `borderWidth` or `borderRadius` of the view is set to a value > 0, clipping is enabled.
* If the view has one or more `children` clipping is enabled.
* If none of the conditions are met, clipping is disabled.

In earlier versions of Titanium Mobile, views had clipping enabled by default.

<ApiDocs/>