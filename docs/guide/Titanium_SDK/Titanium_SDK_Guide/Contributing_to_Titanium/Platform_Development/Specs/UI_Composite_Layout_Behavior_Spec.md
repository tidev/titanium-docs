---
title: UI Composite Layout Behavior Spec
weight: '30'
---

# UI Composite Layout Behavior Spec

## Contents

## Overview

Titanium's UI behavior has remained unspecified and fragmented across platforms, which makes cross-platform development difficult for users and designing tests to evaluate UI impractical. With proposed changes to the layout system, and more advanced testing frameworks, it has become necessary to explicitly define UI behavior in as many situations as possible.

This document is a codification of UI behavior (the "Composite" layout) for both Android and iOS platforms, including explicit specifications for unit types, order in which layout properties are valuated, "auto" behavior, and dealing with unset values.

The behavior for "Horizontal" and "Vertical" layouts will be specified in another document.

## Backwards Compatibility and Deprecation

In Titanium SDK 2.0, the value of any layout parameter on a View will always maintain that value, making it "static". The properties `size`, and `rect`, will now serve as the "dynamic" APIs that provide position and size. We will also maintain backwards compatibility with the current "immediate mode" layout scheme, but this behavior will be marked as **DEPRECATED**. Moving forward, we will drop support for this method in favor of the the `startLayout` / `finishLayout`, and `updateLayout` semantics.

## Definitions

* dip : Density-independent pixels. A measurement which is translated natively to a corresponding pixel measure using a scale factor based on a platform-specific "default" density, and the device's physical density.

* System unit : A platform-dependent unit which is the default for how the system presents its view information to the native layout system. On Android this is pixels; on iOS it is dip.

### Layout parameters

This is the list of Layout Parameters used by "Composite", "Horizontal", and "Vertical" layouts. Layout Parameters are discussed in more detail in the Layout specification, but these all correspond to existing layout settings.

* width : The width of the view

* left : Pins left side of the view to this x position in the parent, measured from the parent's left bound.

* right : Pins right side of the view to this x position in the parent, measured from the parent's right bound.

* height : The height of the view

* top : Pins top side of the view to this y position in the parent, measured from the parent's top bound.

* bottom : Pins bottom side of the view to this y position in the parent, measured from the parent's bottom bound.

* center : (x, y) : Pins the view's center to the specified point:

    * center.x : The x-coordinate, measured from the parent's left bound

    * center.y : The y-coordinate, measured from the parent's top bound

* layout : The layout type to use. The default value is for the "Composite" layout. Other valid values are "vertical" and "horizontal". This property is intended to be replaced by the new UI Layout API Spec

    * 'vertical' : Pinning happens vertically relative to other views inside the parent, using remaining space

    * 'horizontal' : Pinning happens horizontally relative to other views inside the parent, using remaining space

* zIndex : The stack order of the view inside its parent. Higher values are rendered towards the top.

When a child view's boundary exceeds that of the parent view, it should be clipped to the size of the parent view.

### Available units

A unit is a unit of measurement on the device screen or, for some types, a measurement relative to information from the parent view.

* Absolute measurements

    * px : pixels

    * mm : millimeters

    * cm : centimeters

    * in : inches

    * dp/dip : Density-independent pixels

        * Android : px = dip \* (screen density) / 160

        * iOS : px = dip \* (screen density) / 163 (effectively; 1dip=1px on standard, 1dip=2px on retina)

        * Mobile Web: px = dip \* (screen density) / 96 (effectively; 1dip=1px most browsers scale pages to 96dpi to make them consistent with desktops).

* Relative measurements

    * % : Percentage of the size of the parent.

        * For x-axis values (width, left, right, center.x) this is relative to the parent's width

        * For y-axis values (height, top, bottom, center.y) this is relative to the parent's height.

### tiapp.xml properties

We allow users to specify a default unit type to interpret untyped values. By default, this value is a special unit type only available to this property, 'system' (see [Definitions](#definitions), above).

* ti.ui.defaultunit : String, the default unit to interpret values without a unit as.

    * Generated in default tiapp.xml template (users can explicitly see default value)

    * Valid values: px, mm, cm, in, dp, dip, system

As of SDK 8.0.0, `dp` starts supported for default unit on Windows. Since Windows default unit has been `px` in previous versions this means this may cause breaking change. You might want to update your `tiapp.xml` to use `px` for default unit explicitly like `<property name="ti.ui.defaultunit" type="string">px</property>` to keep consistency between previous SDK versions.

### Precedence of layoutParams

Certain parameters influence the calculation of others when they are unset (see [UNDEFINED behavior](#undefined_behavior) ). The purpose of establishing an order of precedence is only to determine when certain settings override others when there is an obvious conflict, or determine which properties are used for computing implicit values.

In order of precedence, from 'evaluated first' to 'evaluated last':

1. width : overrides implicit width calculations

2. left : overrides horizontal positioning determined by center.x, right

3. center.x : overrides horizontal positioning determined by other pins

4. right

5. height : overrides implicit height calculations

6. top : overrides vertical positioning determined by other pins

7. center.y : overrides vertical positioning determined by other pins

8. bottom

When a conflict occurs between the different layout params, the order of precedence will determine which params will be ignored. If a view has a width of 200, a left value of 100, and a right value of 10, then the view would be 200 wide, and 100 from the left of its parent view. The right value is ignored since it conflicts the width and left values, and has lower precedence.

### Auto size behaviors

"auto" (sometimes refered to as "psychic") is a measurement specification for width/height which "sizes the view appropriately given the type of view and its contents." This is a vague descriptor, and has been broken up into two general specified behaviors: SIZE and FILL.

"auto" will be deprecated in 2.0.0, to be replaced with Ti.UI.SIZE and Ti.UI.FILL constants which represent explicit "auto" behavior. As a result, this section codifies existing "auto" behavior into these two subtypes, and declares which views use which type when their width or height is set to "auto" under the present system.

#### ScrollView content size

In the case of ScrollView, contentWidth and contentHeight may also be set to "auto", and in those cases, this is the expected behavior:

* When **_all_** children views have FILL behavior, the content area of the scroll view will be clipped to the physical size of the scroll view

* Otherwise, the content area will grow according to the bottom offset of the bottom-most View and the right offset of right-most View. In some cases the bottom-most and right-most View may be the same View.

### SIZE behavior

This behavior represents constraining a view size to fit its contents.

* height only : Constrained by view's width, or if width is incalcuable (<2 horizontal pinning properties) and unset, then constrained by parent's width.

* width only : Constrained by view's height, or if height is incalculable (<2 vertical pinning properties) and unset, then constrained by parent's height.

* height + width : width constrained by parent width, height constraint by content height, i.e. grows to fill width first, and then sizes height to display content.

#### ScrollView SIZE

Scrollview `contentWidth` or `contentHeight` can be set to `Ti.UI.SIZE`. This value behaves as `SIZE` is described above, where the scrollview itself first sizes to contents, and then if those contents extend beyond the bounds of the scrollview, the content view sizes to fit the contents appropriately.

### FILL behavior

This behavior represents growing a view size to fill its parent.

* height only : Fills all available vertical space inside the parent

* width only : Fills all available horizontal space inside the parent

* height + width : Fills all available space inside the parent\\

* NOTE: The fill behavior does not take any other views into account except for its parent. i.e. If the parent view has 2 children, the first with a static width/height and the second with fill behavior for both, the second view will still fill its parent.

* If the parent does not have a height/width constraint (i.e. The parent has size behavior for width/height while the child has fill behavior), then the view will recursively go through the parents to find a width/height constraint and fill to that constraint.

#### ScrollView FILL

Scrollview `contentWidth` or `contentHeight` can be set to `Ti.UI.FILL`. Regardless of contents, this behaves as described above, meaning that the content view bounds fill the scrollview. This has the side-effect that the scrollview does not scroll, so using this value is considered undesirable.

### View auto size classification

Views are logically grouped into either SIZE or FILL for their auto behavior. Windows FILL the screen by default.

* SIZE Views

    * Button

    * Label

    * ImageView

    * ProgressBar

    * Switch

    * TextArea

    * TextField

    * Picker

    * SearchBar

        * height only, FILL width

    * ButtonBar

    * TableViewSection

* FILL Views

    * View

    * TabGroup

    * VideoView

    * Toolbar

        * width only, SIZE height

    * TableView

    * TableViewRow

        * width only, SIZE height

    * WebView

    * ScrollView

    * ScrollableView

    * Slider

        * width only, SIZE height

### UNDEFINED behavior

If layout parameter values are undefined, then this means that they need to be computed based on existing values if possible, and if not, then have some sensible default.

::: warning ⚠️ Warning
**The layout parameters themselves will not actually change value, the dynamic APIs** `rect` **and** `size` **will contain the actual system values.**
:::

* width : implicit based on horizontal pins (left, center.x, right)

    * If two (or more) horizontal pins are available, computed from these values

    * Otherwise, follows view's "auto" behavior

        * On "auto" deprecation, follows SIZE behavior

    * If width is dependent on the parent (e.g. percentage), and the parent is set to SIZE, width is undefined

* left : implicit based on other horizontal pins (center.x, right)

    * If no pinning properties are set : The view is centered horizontally in it's parent

    * Otherwise, no left side pinning

* center.x : No center pinning (horizontal)

* right : No right side pinning

* height : implicit based on vertical pins (top, center.y, bottom)

    * If two (or more) vertical pins are available, computed from these values

    * Otherwise, follows view's "auto" behavior

        * On "auto" deprecation, follows SIZE behavior

    * If height is dependent on the parent (e.g. percentage), and the parent is set to SIZE, height is undefined

* top : implicit based on other vertical pins (center.y, bottom)

    * If no pinning properties are set : The view is centered vertically in it's parent

    * Otherwise, no top side pinning

* center.y : No center pinning (vertical)

* bottom : No bottom side pinning

* zIndex: implementation treats as 0, but will still be undefined in the View's layout params. Views are stacked in order of being added to the parent based on their index.

#### UNDEFINED and scrollview contents

For clarity, scrollview `contentWidth` and `contentHeight` behave as if they were set to "auto" when undefined. This is consistent with the behavior described above.

## Code Examples

Each of these examples contrast the way something is done today ("old") with the way it will be done with the new dynamic size / rect properties, and batch updating semantics ("new").

**Updating Layout Parameters**

```
// [old] changes the top and left of the view directly, re-layout twice
view.top = 50;
view.left = 50;

// [new] change top and left, but only request a single layout
view.startLayout();
view.top = 50;
view.left = 50;
view.finishLayout();

// [new] equivalent to above, but using batch update for convenience
view.updateLayout({
    top: 50, left: 50
});
```

**Get Native and Model parameters**

```
view.width = 100;

// [old] get the views's native width, but user supplied width is unavailable
// view.width may not necessarily be 100 after being laid out
Ti.API.debug("view width = " + view.width);

// [new] get the view's native width, and the user supplied width
// view.rect, view.size, are the new dynamic/native APIs
// view.X will always have the user-supplied layout params
Ti.API.debug("button width = " + view.rect.width + ", my width = " + view.width);
```

## Proposed API

### Dimension (duck type)

* Properties

    * x : Number

    * y : Number

    * width : Number

    * height : Number

### Ti.UI.View

* Properties

    * size : [Dimension](#Dimension), read-only, returns the bounds of the view in system units. x and y properties are always 0

    * rect : [Dimension](#Dimension), read-only, returns the frame of the view (position relative to parent bounds) in system units.

    * left : String or Number, the left bound of the view specified by the user

    * right : String or Number, the right bound of the view specified by the user

    * top : String or Number, the top bound of the view specified by the user

    * bottom : String or Number, the bottom bound of the view specified by the user

    * center : Object, the center point of the view specified by the user

        * x : String or Number, the x coordinate of the center point

        * y : String or Number, the y coordinate of the center point

    * width : String or Number, the width of the view specified by the user

    * height : String or Number, the height of the view specified by the user

* Functions

    * startLayout() : void, starts a batch-update of the View's layout params

    * finishLayout() : void, finishes a batch-update of the View's layout params, and schedules a layout pass of the view tree

    * updateLayout(Object params) : void, performs a batch-update of all supplied layout params, and schedules a layout pass after they have been updated

### Ti.UI

* Constants

    * Ti.UI.SIZE : Sets a view's height/width to be that of "auto" SIZE

    * Ti.UI.FILL : Sets a view's height/width to be that of "auto" FILL

    * Ti.UI.UNIT\_PX : px unit

    * Ti.UI.UNIT\_MM : mm unit

    * Ti.UI.UNIT\_CM : cm unit

    * Ti.UI.UNIT\_IN : in unit

    * Ti.UI.UNIT\_DIP : dip unit

* Functions

    * convertUnits(String convertFromValue, String convertToUnits) : Number, the conversion of one unit type to another using the metrics of the main Display

        * convertFromValue : A measurement and optional unit to convert from, i.e. 160, "120dip"

        * convertToUnits : The unit to convert to from one of the UNIT\_\* constants above

        * _NOTE_ we will need to accomodate for multiple displays in future revisions of this API

        * _NOTE_ because parent/self information is required for converting % values, there is no unit constant for '%' or conversions allowed to/from this value. If a percent value is passed in, this method returns 0.

### Events

* 'postlayout' : This event will be fired after a layout pass has occurred.
