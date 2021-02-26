---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/ButtonBar.yml
---
# Titanium.UI.ButtonBar

<TypeHeader/>

## Overview

The button bar is a set of buttons joined into a single control.
On iOS, you can set up the buttons with either a title or image, but not both.
On Android, you can set up the buttons with a title, image, or both.

Use the <Titanium.UI.createButtonBar> method or **`<ButtonBar>`** Alloy element to create a button bar.

The [TabbedBar](Titanium.UI.iOS.TabbedBar) control is a button bar where the 
last selected button mantains a pressed or selected state. The following discussion
applies to both button bar and tabbed bar.

## Examples

### Simple 3 button button bar

``` js
const win = Ti.UI.createWindow();
const buttonBar = Titanium.UI.createButtonBar({
  labels:['One', 'Two', 'Three']
});
buttonBar.addEventListener('click', (e) => {
  console.log(`Clicked on button index: ${e.index}`);
});
win.add(buttonBar);
win.open();
```

### Alloy XML Markup

Previous example as an Alloy view.

``` xml
<Alloy>
    <Window id="win">
        <ButtonBar id="buttonBar">
            <!-- The Labels tag sets the ButtonBar.labels property -->
            <Labels>
                <!-- Specify text with node text or the title attribute. -->
                <!-- Can also specify the enabled, image and width attributes. -->
                <Label>One</Label>
                <Label>Two</Label>
                <Label>Three</Label>
            </Labels>
        </ButtonBar>
    </Window>
</Alloy>
```

<ApiDocs/>
