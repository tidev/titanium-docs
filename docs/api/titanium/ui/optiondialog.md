# Titanium.UI.OptionDialog

<TypeHeader/>

## Overview

| Android | iPhone | iPad |
| ------- | ------ | ---- |
| ![Android](./optiondialog_android.png) | ![iPhone](./optiondialog_iphone.png) | ![iPad](./optiondialog_ipad.png) |

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

## Examples

### Dialog with 3 Options

``` js
Ti.UI.setBackgroundColor('white');
var win = Ti.UI.createWindow({
  title: 'Click window to test',
  backgroundColor: 'white'
});

var opts = {
  cancel: 2,
  options: ['Confirm', 'Help', 'Cancel'],
  selectedIndex: 2,
  destructive: 0,
  title: 'Delete File?'
};

win.addEventListener('click', function(e){
  var dialog = Ti.UI.createOptionDialog(opts).show();
});
win.open();
```

### Dialog with 2 Options and 1 Button on Android and 3 Options on iOS

``` js
var win = Ti.UI.createWindow({
  title: 'Click window to test OptionDialog',
  backgroundColor: 'white'
});

var opts = {
  title: 'Delete File?'
};

var isAndroid = Ti.Platform.osname === 'android';

if (isAndroid) {
  opts.options = ['Confirm', 'Cancel'];
  opts.buttonNames = ['Help'];
} else {
  opts.options = ['Confirm', 'Help', 'Cancel'];
}

var dialog;
win.addEventListener('click', function() {
  dialog = Ti.UI.createOptionDialog(opts);

  dialog.addEventListener('click', onSelectDialog);
  dialog.addEventListener('cancel', function(e) {
    alert('Dialog canceled! e.cancel = ' + e.cancel + ', e.index = ' + e.index);
  })

   dialog.show();
});

function onSelectDialog(e) {
  if (isAndroid) {
    if (e.button === false && e.index === 0) {
      alert('Confirm option selected! e.index = ' + e.index);
    }
    if (e.button === false && eventeindex === 1) {
      alert('Cancel option selected! e.index = ' + e.index);
    }
    if (e.button === true && e.index === 0) {
      alert('Help Button clicked! e.index = ' + e.index);
    }
  }
}

win.open();
```

### Alloy XML Markup

Previous example as an Alloy view. You can set [cancel](Titanium.UI.OptionDialog.cancel)
and [destructive](Titanium.UI.OptionDialog.destructive) on a `<Option/>` tag.

optiondialog.xml:
``` xml
<Alloy>
    <Window id="win" onClick="showOptions" title="Click window to test"
        fullscreen="false" onExit="true" backgroundColor="white">

        <!--
            The OptionDialog tag declares an option dialog,
            which will need to be opened by the controller.
        -->
        <OptionDialog id="dialog" title="Delete File?">

            <!-- The Options tag sets the options property. -->
            <Options>
                <Option destructive="true">Confirm</Option>
                <Option platform="ios">Help</Option>
                <Option cancel="true">Cancel</Option>
            </Options>

            <!-- The ButtonNames tag sets the Android-only buttonNames property. -->
            <ButtonNames>
                <ButtonName>Help</ButtonName>
            </ButtonNames>

            <!-- Add a View for the androidView property here. -->

        </OptionDialog>

        <!-- Add views here -->

    </Window>
</Alloy>
```

optiondialog.js:
``` js
function showOptions(){
    $.dialog.show();
}
```

<ApiDocs/>
