# Titanium.UI.iOS.Stepper

<TypeHeader/>

## Overview

<table id="iOS Stepper">
  <tbody>
    <tr>
      <td><img src="images/stepper/stepper.png" height="25" /></td>
      <td><img src="images/stepper/stepper_custom.png" height="25" /></td>
    </tr>
  </tbody>
</table>

A Stepper displays its selected state while it is being pressed.
You can specify background images for each state on iOS.
Use the <Titanium.UI.iOS.createStepper> method or a **`<Stepper>`** Alloy element to create a stepper
(see the "Examples" section details).

* When assigning a custom image to the `backgroundImage` property, the image must be
partially or wholly transparent for the background color or background gradient to be visible.
* Similarly, for an assigned background gradient to show through, the `backgroundColor` may need to be
set to 'transparent'.

* Note that the stepper cannot be re-sized.

## Examples

### Simple Stepper Example

``` js
var win = Ti.UI.createWindow({
    backgroundColor: '#fff'
});

var stepper = Ti.UI.iOS.createStepper({
    tintColor: "green",
    steps: 3,
    maximum: 30,
    minimum: 0
});

stepper.addEventListener("change", function(e) {
    Ti.API.info(e.value);
});

win.add(stepper);
win.open();
```

### Alloy XML Markup

Previous example as an Alloy view.

stepper.xml:
``` xml
<Alloy>
    <Window id="window">
        <Stepper id="stepper" onClick="doClick" tintColor="green" steps="3" />
    </Window>
</Alloy>
```

stepper.js:
``` js
function doClick(e) {
    alert(e.value);
}

$.window.open();
```

<ApiDocs/>
