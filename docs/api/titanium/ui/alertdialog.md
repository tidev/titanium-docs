---
breadcrumbLabel: AlertDialog
sidebar: auto
---

# Titanium.UI.AlertDialog

<ProxySummary/>

## Overview

<table id="platformComparison">
  <tr>
    <td><img src="images/alertdialog/alertdialog_android.png" height="75" /></td>
    <td><img src="images/alertdialog/alertdialog_ios.png" height="75" /></td>
    <td><img src="images/alertdialog/alertdialog_wp.png" height="75" /></td>
  </tr>
  <tr><th>Android</th><th>iOS</th><th>Windows Phone</th></tr>
</table>

An alert dialog is created using <Titanium.UI.createAlertDialog> or **`<AlertDialog>`** Alloy element.

Although this dialog always appears in the middle of the display (not touching the edges),
other aspects of its aesthetics and the way the user interacts with it are different for each
platform, as described below.

### Android

On Android, the default alert dialog displays text information, via a title and message, without
any buttons. As the user can use the system hardware `back` button to dismiss it, a button is
optional.

Buttons are shown if the `buttonNames` property is defined, and are rendered horizontally below
the message.

To create a custom layout, a view may be added and, in turn, a hierarchy of views added to that
child view.

### iOS

On iOS, the default alert dialog displays text information, via a title and message, with
a single button to allow it to be dismissed.

Buttons are defined using the `buttonNames` property and are rendered vertically below
the message. Alert dialogs are automatically cancelled when the application is
paused/suspended. This behavior can be avoided by setting `persistent` property on alert dialog
to be `true`.

The `style` property can be used to allow the user to enter plain text,
obscured text or login identifier and password. Entered values can be captured with listening
`cancel` event.

Starting at Titanium SDK 5.1.0, you can also specify the `placeholder`, `keyboardType` and `returnKeyType`
properties when using the alert dialog style <Titanium.UI.iOS.AlertDialogStyle.PLAIN_TEXT_INPUT> or
<Titanium.UI.iOS.AlertDialogStyle.SECURE_TEXT_INPUT>.
When using the alert dialog style <Titanium.UI.iOS.AlertDialogStyle.LOGIN_AND_PASSWORD_INPUT>, you can
specify the `loginPlaceholder`, `loginKeyboardType` and `loginReturnKeyType` properties for the login field,
as well as the `passwordPlaceholder`, `passwordKeyboardType` and `passwordReturnKeyType` properties for the password field.

### Global Alias

A global method `alert()` is aliased to this object, and can be invoked with a single message.
For example

    alert('this is a message');

This will generate an alert with a title of "Alert" and an "OK" button.

### Caveats

Multiple alerts should not be shown at once.

The `title` and `ok` properties cannot be changed while the alert dialog is being displayed. On
Android only, you can change the `message` property while the alert dialog is being displayed.

<ApiDocs/>
