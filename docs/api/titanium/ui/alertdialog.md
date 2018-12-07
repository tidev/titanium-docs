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

## Examples

### Single-button Alert Dialog (using alias)

Create a single-button alert dialog using the global `alert()` alias.

    Ti.UI.setBackgroundColor('white');
    var win = Ti.UI.createWindow({
      title: 'Click window to test',
      backgroundColor: 'white',
      exitOnClose: true,
      fullscreen: false
    });

    win.addEventListener('click', function(e) {
      alert('The file has been deleted');
    });
    win.open();

### Single-button Alert Dialog (standard)

Create a single-button alert dialog, without explicitly defining it using the `buttonNames`
property, which is invoked when the app window is clicked.

    Ti.UI.setBackgroundColor('white');
    var win = Ti.UI.createWindow({
      title: 'Click window to test',
      backgroundColor: 'white',
    exitOnClose: true,
    fullscreen: false
    });

    win.addEventListener('click', function(e) {
      var dialog = Ti.UI.createAlertDialog({
        message: 'The file has been deleted',
        ok: 'Okay',
        title: 'File Deleted'
      });
      dialog.show();
    });
    win.open();

### Three-button Alert Dialog

Create a three-button alert dialog, which is invoked when the app window is clicked.
Output a message to the log when the cancel button is clicked.

    Ti.UI.setBackgroundColor('white');
    var win = Ti.UI.createWindow({
      title: 'Click window to test',
      backgroundColor: 'white',
      exitOnClose: true,
      fullscreen: false
    });
    win.addEventListener('click', function(e) {
      var dialog = Ti.UI.createAlertDialog({
        cancel: 1,
        buttonNames: ['Confirm', 'Cancel', 'Help'],
        message: 'Would you like to delete the file?',
        title: 'Delete'
      });
      dialog.addEventListener('click', function(e) {
        if (e.index === e.source.cancel) {
          Ti.API.info('The cancel button was clicked');
        }
        Ti.API.info('e.cancel: ' + e.cancel);
        Ti.API.info('e.source.cancel: ' + e.source.cancel);
        Ti.API.info('e.index: ' + e.index);
      });
      dialog.show();
    });
    win.open();

### Alert Dialog with Plain Text Input

Create an alert dialog and allow the user enter plain text, which is invoked when the
app window is clicked.
Output entered text value to the log when the OK button is clicked.

    Ti.UI.setBackgroundColor('white');
    var win = Ti.UI.createWindow({
      title: 'Click window to test'
    });
    win.addEventListener('click', function(e) {
      var dialog = Ti.UI.createAlertDialog({
        title: 'Enter text',
        style: Ti.UI.iOS.AlertDialogStyle.PLAIN_TEXT_INPUT,
        buttonNames: ['OK']
      });
      dialog.addEventListener('click', function(e) {
        Ti.API.info('e.text: ' + e.text);
      });
      dialog.show();
    });
    win.open();

### Alloy XML Markup

Previous three-button alert dialog example as an Alloy view.

alertdialog.xml:

    <Alloy>
        <Window id="win" onClick="showDialog" title="Click window to test" backgroundColor="white"
            exitOnClose="true" fullscreen="false" >

            <AlertDialog id="dialog" onClick="doClick" title="Delete"
                message="Would you like to delete the file?" cancel="1">

                <!-- The ButtonNames tag sets the buttonNames property. -->
                <ButtonNames>
                    <ButtonName>Confirm</ButtonName>
                    <ButtonName>Cancel</ButtonName>
                    <ButtonName>Help</ButtonName>
                </ButtonNames>
            </AlertDialog>
        </Window>
    </Alloy>

alertdialog.js:

    function showDialog() {
        $.dialog.show();
    }

    function doClick(e) {
        Ti.API.info('e.text: ' + e.text);
    }
    
    $.win.open();

<ApiDocs/>
