# Titanium.UI.EmailDialog

<TypeHeader/>

## Overview

| Android | iOS | Windows |
| ------- | --- | ------- |
| ![Android](./emaildialog_android.png) | ![iOS](./emaildialog_ios.png) | ![Windows](./emaildialog_wp.png) |

The Email Dialog is created with the <Titanium.UI.createEmailDialog> method. The user needs to
register an e-mail account on the device in order to open the dialog.  The dialog will not
open when there is not a registered e-mail account.

**iOS Platform Notes**

On iOS, you cannot test the e-mail dialog on the iOS Simulator. Test the email dialog on device.

## Examples

### Simple Email Dialog with Attachment

Create and send an email with a file attachment.

``` js
var emailDialog = Ti.UI.createEmailDialog()
emailDialog.subject = "Hello from Titanium";
emailDialog.toRecipients = ['foo@yahoo.com'];
emailDialog.messageBody = '<b>Appcelerator Titanium Rocks!</b>';
var f = Ti.Filesystem.getFile('cricket.wav');
emailDialog.addAttachment(f);
emailDialog.open();
```

<ApiDocs/>
