---
title: TabbedBar
weight: '180'
---

# TabbedBar

Demonstrates basic use of TabbedBar control.

::: tip 💡 Example App Source Location
You can find this example app in the Alloy repository under [samples/apps/ui/tabbedbar](https://github.com/appcelerator/alloy/tree/master/samples/apps/ui/tabbedbar). Check the [instructions](/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/) how to run these sample projects.
:::

A [TabbedBar](#!/api/Titanium.UI.iOS.TabbedBar) is a [ButtonBar](#!/api/Titanium.UI.iOS.TabbedBar) that maintains its state, selected or unselected. See [ButtonBar](#!/api/Titanium.UI.ButtonBar) for information on styling both tabbed bars and buttons bars.

![ios](./ios.png)

The main `index.xml` view defines a TabbedBar that contains five `<Label/>` elements.

**app/views/index.xml**

```xml
<Alloy>
    <Window>
        <TabbedBar platform="ios" onClick="sayHi">
            <!-- These get added to the TabbedBar "labels" array -->
            <Labels>
                <!-- Specify text with node text or "title" attribute. -->
                <Label id="label1"/>
                <Label title="tab 2"/>
                <Label>tab 3</Label>
                <!-- uses images and/or widths -->
                <Label width="40" image="/KS_nav_ui.png"/>
                <!-- set as disabled -->
                <Label enabled="false">disabled</Label>
                <!-- empty labels will print a warning (no properties) -->
                <!-- <Label/> -->
            </Labels>
            <!--
                additional views get added as normal, over the labels, as
                per the documentation of the add() function.
             -->
            <!-- <View opacity="0.25" backgroundColor="#a00" width="50%"/> -->
        </TabbedBar>
        <Label platform="!ios">Ti.UI.iOS.Toolbar only supported on iOS</Label>
    </Window>
</Alloy>
```

The view-controller displays an alert dialog that indicates the index of the item that was clicked in the TabbedBar.

**app/controllers/index.js**

```javascript
function sayHi(e) {
    alert('Hello from tab a index ' + e.index + '!');
}
```

## See also

* [Titanium.UI.iOS.TabbedBar](#!/api/Titanium.UI.iOS.TabbedBar) API reference

* [Titanium.UI.ButtonBar](#!/api/Titanium.UI.ButtonBar) API reference
