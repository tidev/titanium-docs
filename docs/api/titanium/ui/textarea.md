# Titanium.UI.TextArea

<ProxySummary/>

## Overview

<table id="platformComparison">
  <tbody>
    <tr>
      <td><img src="images/textarea/textarea_android.png" height="50" /></td>
      <td><img src="images/textarea/textarea_ios.png" height="50" /></td>
      <td><img src="images/textarea/textarea_wp.png" height="50" /></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Android</th>
      <th>iOS</th>
      <th>Windows Phone</th>
    </tr>
  </tfoot>
</table>

Use the <Titanium.UI.createTextArea> method or **&lt;TextArea&gt;** Alloy element to create a text area.

## Examples

### Basic Text Area with Customizations

This example creates a highly customized text area.

    var win = Ti.UI.createWindow({
      backgroundColor: 'white'
    });
    var textArea = Ti.UI.createTextArea({
      borderWidth: 2,
      borderColor: '#bbb',
      borderRadius: 5,
      color: '#888',
      font: {fontSize:20, fontWeight:'bold'},
      keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
      returnKeyType: Ti.UI.RETURNKEY_GO,
      textAlign: 'left',
      value: 'I am a textarea',
      top: 60,
      width: 300, height : 70
    });
    win.add(textArea);
    win.open();

### Text Area with Custom Keyboard Toolbar (iOS)

On iOS, a configurable toolbar can be displayed above the virtual keyboard.
Toolbars can be used with both text areas and text fields. See <Titanium.UI.iOS.Toolbar>
for more information.

This code excerpt creates a text area with a toolbar:

Example using a custom keyboard toolbar:

    var send = Ti.UI.createButton({
        style : Ti.UI.iOS.SystemButtonStyle.DONE,
        title : 'Send'
    });

    var camera = Ti.UI.createButton({
        systemButton : Ti.UI.iOS.SystemButton.CAMERA
    });

    var cancel = Ti.UI.createButton({
        systemButton : Ti.UI.iOS.SystemButton.CANCEL
    });

    var flexSpace = Ti.UI.createButton({
        systemButton : Ti.UI.iOS.SystemButton.FLEXIBLE_SPACE
    });

    var textarea = Ti.UI.createTextArea({
        borderColor : '#000',
        color : '#000',
        keyboardToolbar : [cancel, flexSpace, camera, flexSpace, send],
        keyboardToolbarColor : '#999',
        keyboardToolbarHeight : 40,
        value : 'Focus to see keyboard with toolbar',
        top : 10,
        width : 300, height : 120
    });

### Alloy XML Markup

Previous basic text area with customizations example as an Alloy view.

    <Alloy>
        <Window id="win" backgroundColor="white">
            <TextArea id="textArea"
                borderWidth="2" borderColor="#bbb" borderRadius="5"
                color="#888" textAlign="left" value="I am a textarea"
                top="60" width="300" height="70" />
        </Window>
    </Alloy>

<ApiDocs/>
