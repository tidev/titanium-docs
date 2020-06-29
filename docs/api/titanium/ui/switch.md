# Titanium.UI.Switch

<TypeHeader/>

## Overview

| Android | iOS | Windows |
| ------- | --- | ------- |
| ![Android](./switch_android.png) | ![iOS](./switch_ios.png) | ![Windows](./switch_wp.png) |

The appearance of a `Switch` control varies by platform:

* On Android, a Switch object can be styled either as a switch, checkbox or
toggle button based on the <Titanium.UI.Switch.style> property. The checkbox style can
optionally display a label next to the control.

* On iOS, a Switch appears as an iOS on/off switch and doesn't have any text associated with it.

Use the <Titanium.UI.createSwitch> method or **`<Switch>`** Alloy element to create a switch.

## Examples

### Simple Switch Example

Create a standard switch, using default values, and output value property on each `change`
event.

``` js
var win = Ti.UI.createWindow({
  backgroundColor: 'white'
});

var basicSwitch = Ti.UI.createSwitch({
  value:true // mandatory property for iOS
});
win.add(basicSwitch);

basicSwitch.addEventListener('change',function(e){
  Ti.API.info('Switch value: ' + basicSwitch.value);
});

win.open();

// print initial value
Ti.API.info('Switch value: ' + basicSwitch.value);
```

### Toggle Button Switch Example (Android)

Create a standard (toggle button) switch with a customized title for each on/off state, and
output value property on each `change` event.

``` js
var win = Ti.UI.createWindow({
  backgroundColor: 'white'
});

var basicSwitch = Ti.UI.createSwitch({
  style: Ti.UI.Android.SWITCH_STYLE_TOGGLEBUTTON,
  titleOn:'Notifications Enabled',
  titleOff:'Notifications Disabled',
  value:true,
  width: 200, height:120
});
win.add(basicSwitch);

basicSwitch.addEventListener('change',function(e){
  Ti.API.info('Switch value: ' + basicSwitch.value);
});

win.open();
```

### Checkbox Switch Example (Android)

Create a checkbox switch, and output value property on each `change` event.

``` js
var win = Ti.UI.createWindow({
  backgroundColor: 'white'
});

var basicSwitch = Ti.UI.createSwitch({
  style: Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
  textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
  title:'Notifications',
  value:true,
  width: 300 // necessary for textAlign to be effective
});
win.add(basicSwitch);

basicSwitch.addEventListener('change',function(e){
  Ti.API.info('Switch value: ' + basicSwitch.value);
});

win.open();
```

### Alloy XML Markup

Previous simple switch example as an Alloy view.

switchexample.xml:

``` xml
<Alloy>
    <Window id="win" backgroundColor="white">
        <Switch id="basicSwitch" value="true" onChange="outputState"/>
    </Window>
</Alloy>
```

switchexample.js:

``` js
function outputState(){
    Ti.API.info('Switch value: ' + $.basicSwitch.value);
}
```

<ApiDocs/>
