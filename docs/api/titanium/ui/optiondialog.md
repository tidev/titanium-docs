---
breadcrumbLabel: OptionDialog
sidebar: auto
---

# Titanium.UI.OptionDialog

<ProxySummary/>

## Overview

<table id="platformComparison">
  <tr>
    <td><img src="images/optiondialog/optiondialog_android.png" height="75" /></td>
    <td><img src="images/optiondialog/optiondialog_iphone.png" height="75" /></td>
    <td><img src="images/optiondialog/optiondialog_ipad.png" height="75" /></td>
  </tr>
  <tr><th>Android</th><th>iPhone</th><td>iPad</td></tr>
</table>

An option dialog is created using <Titanium.UI.createOptionDialog> or Alloy `<OptionDialog>`
element. See Examples below for usage.

This dialog is presented differently on each platform, as described below.

### Android

On Android, the dialog is shown in the middle of the display (not touching the edges),
with the option items represented in a picker. The previously-selected, or default, item can be
set on creation.

You can assign a [View](Titanium.UI.View) to the <Titanium.UI.OptionDialog.androidView> property
to define a custom dialog UI and layout, or you can assign a set of options to the
<Titanium.UI.OptionDialog.options> property, but not both. If both of these properties are set, the custom view
will appear but the options will be hidden.

Buttons below the picker may be optionally defined using the `buttonNames` property.
The `click` event returns a Boolean value to indicate whether either an option item or a button was clicked.

### iOS

The `destructive` property may be set for an item, to give a visual cue that selecting it
results in an irreversible action. Option dialogs are automatically cancelled when the application is paused/suspended.

#### iPhone

On iPhone, this dialog is shown at the bottom edge of the display, with the option items
represented as vertical buttons.

#### iPad

On iPad, this dialog is shown in the middle of the display, or as a popover-like dialog if
another view or control is specified via an argument passed to the `open()` method.

Note that on iPad, the cancel button is not displayed -- users can cancel the dialog
by clicking outside of the dialog.

### Caveats

Care should be taken not to define any properties that are not documented, as this may produce
unexpected results. For example, setting a `message` property will prevent the picker of option
items from being displayed on Android.

<ApiDocs/>
