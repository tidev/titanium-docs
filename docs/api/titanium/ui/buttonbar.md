---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/ButtonBar.yml
---
# Titanium.UI.ButtonBar

<TypeHeader/>

## Overview

The button bar is a set of buttons joined into a single control. Each button in a
button bar can have a text label or an icon, but not both. 

Use the <Titanium.UI.createButtonBar> method or **`<ButtonBar>`** Alloy element to create a button bar.

The [TabbedBar](Titanium.UI.iOS.TabbedBar) control is a button bar where the 
last selected button mantains a pressed or selected state. The following discussion
applies to both button bar and tabbed bar.

The buttons share a common style, defined by the `style` property. This can be 
set to one of the constants defined in 
[Titanium.UI.iOS.SystemButtonStyle](Titanium.UI.iOS.SystemButtonStyle):

* `PLAIN`. Default style for `ButtonBar` and `TabbedBar`.
* `BORDERED`. Creates a bar like the `PLAIN` bar, but with a heavier border.

Note that you cannot style individual buttons in a button bar. If you want to give a
distinct visual style to individual buttons, to use an icon and text on the same button,
or to use a button-bar type component on a platform other than iOS, you can use a set 
of individual [Button](Titanium.UI.Button) controls wrapped in a
[View](Titanium.UI.View) to create the appearance of a button bar.

## Examples

### Simple 3 button button bar

``` js
var bb1 = Titanium.UI.createButtonBar({
  labels:['One', 'Two', 'Three'],
  backgroundColor:'#336699',
  top:50,
  style:Titanium.UI.iOS.SystemButtonStyle.PLAIN,
  height:25,
  width:200
});
win.add(bb1);
```

### Alloy XML Markup

Previous example as an Alloy view.

``` xml
<Alloy>
    <Window id="win">
        <ButtonBar id="bb1" platform="ios" backgroundColor="#369" top="50" height="25" width="200">
            <!-- The Labels tag sets the ButtonBar.labels property -->
            <Labels>
                <!-- Specify text with node text or the title attribute. -->
                <!-- Can also specify the enabled, image and width attributes. -->
                <Label>One</Label>
                <Label>Two</Label>
                <Label>Three</Label>
            </Labels>
            <!-- Place additional views for the ButtonBar here. -->
        </ButtonBar>
    </Window>
</Alloy>
```

<ApiDocs/>
