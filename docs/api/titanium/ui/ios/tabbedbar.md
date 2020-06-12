# Titanium.UI.iOS.TabbedBar

<TypeHeader/>

## Overview

A `TabbedBar` is a `ButtonBar` that maintains its state (visually distinguished as a pressed or 
selected look). See [ButtonBar](Titanium.UI.ButtonBar) for information on styling both tabbed bars and buttons bars.

You create a `TabbedBar` with the <Titanium.UI.iOS.createTabbedBar> factory method, or **`<TabbedBar>`** Alloy element.

## Examples

### Simple Tabbed Bar with 3 items

Create a tabbed bar with 3 items.

``` js
var bb1 = Titanium.UI.iOS.createTabbedBar({
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
        <TabbedBar id="bb1" platform="ios" backgroundColor="#369" top="50" height="25" width="200">

            <!-- The Labels tag sets the TabbedBar.labels property. -->
            <Labels>

                <!-- Specify text with node text or the title attribute. -->
                <!-- Can also specify the enabled, image and width attributes. -->

                <Label>One</Label>
                <Label>Two</Label>
                <Label>Three</Label>

            </Labels>

            <!-- Place additional views for the TabbedBar here. -->

        </TabbedBar>
    </Window>
</Alloy>
```

<ApiDocs/>
