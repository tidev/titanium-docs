# Titanium.UI.EmailDialog

<ProxySummary/>

## Overview

<table id="platformComparison">
  <tbody>
    <tr>
      <td><img src="images/emaildialog/emaildialog_android.png" height="150"/></td>
      <td><img src="images/emaildialog/emaildialog_ios.png" height="150"/></td>
      <td><img src="images/emaildialog/emaildialog_wp.png" height="150"/></td>
    </tr>
  <tbody>
  <tfoot>
    <tr>
      <th>Android</th>
      <th>iOS</th>
      <th>Windows Phone</th>
    </tr>
  <tfoot>
</table>

The Email Dialog is created with the <Titanium.UI.createEmailDialog> method. The user needs to
register an e-mail account on the device in order to open the dialog.  The dialog will not
open when there is not a registered e-mail account.

**iOS Platform Notes**

On iOS, you cannot test the e-mail dialog on the iOS Simulator. Test the email dialog on device.

## Examples

### Simple Email Dialog with Attachment

Create and send an email with a file attachment.

    var emailDialog = Ti.UI.createEmailDialog()
    emailDialog.subject = "Hello from Titanium";
    emailDialog.toRecipients = ['foo@yahoo.com'];
    emailDialog.messageBody = '<b>Appcelerator Titanium Rocks!</b>';
    var f = Ti.Filesystem.getFile('cricket.wav');
    emailDialog.addAttachment(f);
    emailDialog.open();

<ApiDocs/>
