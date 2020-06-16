---
title: ButtonBar
weight: '30'
---

# ButtonBar

Demonstrates basic use of the ButtonBar control, an iOS-only control that presents a set of buttons joined into a single control.

::: tip 💡 Example App Source Location
You can find this example app in the Alloy repository under [samples/apps/ui/buttonbar](https://github.com/appcelerator/alloy/tree/master/samples/apps/ui/buttonbar). Check the [instructions](/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/) how to run these sample projects.
:::

Each button in a ButtonBar can have a text label or an icon, but not both.

![screenshot](./screenshot.png)

You specify the labels with a nested `<Labels>` element that contains one or more `<Label>` elements. Each Label element can specify any of the properties defined by [BarItemType](#!/api/BarItemType), such as `image` or `enabled`, as shown in the main index.xml view shown below.

**app/views/index.xml**

```xml
<Alloy>
    <Window>
        <ButtonBar platform="ios" onClick="sayHi">
            <!-- These get added to the ButtonBar "labels" array -->
            <Labels>
                <!-- Specify text with node text or "title" attribute. -->
                <Label>button 1</Label>
                <Label title="button 2"/>
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
        </ButtonBar>
        <Label platform="android,mobileweb">Ti.UI.iOS.Toolbar only supported on iOS</Label>
    </Window>
</Alloy>
```

To determine which button in the ButtonBar was clicked, you can check the `index` property of the event object:

**app/controllers/index.js**

```javascript
function sayHi(e) {
    alert('Hello from button a index ' + e.index + '!');
}
```

## See Also

* [Titanium.UI.ButtonBar](#!/api/Titanium.UI.ButtonBar)

* [BarItemType](#!/api/BarItemType)
