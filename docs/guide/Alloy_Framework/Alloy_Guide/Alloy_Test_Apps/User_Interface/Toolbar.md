---
title: Toolbar
weight: '210'
---

# Toolbar

Demonstrates adding a Toolbar control to an iOS or Android application.

::: tip 💡 Example App Source Location
You can find this example app in the Alloy repository under [samples/apps/ui/toolbar](https://github.com/appcelerator/alloy/tree/master/samples/apps/ui/toolbar). Check the [instructions](/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/) how to run these sample projects.
:::

A [Toolbar](#!/api/Titanium.UI.iOS.Toolbar) can contain Button controls and certain other controls, such as TextFields and Labels. iOS notes: To provide spacing between items in the toolbar, you can insert a `<FlexSpace/>` element to fill the space between items (as seen in the example) or a `<FixedSpace/>` element whose `width` attribute specifies the spacer width to add.

| iOS | Android |
| --- | --- |
| ![Simulator_Screen_Shot_-_iPhone_6s_-_2018-02-01_at_21.22.48](./Simulator_Screen_Shot_-_iPhone_6s_-_2018-02-01_at_21.22.48.png) | ![Screenshot_1517517350](./Screenshot_1517517350.png) |

## Example

**app/views/index.xml**

```xml
<Alloy>
  <Window>
    <Toolbar>
      <!-- These get added to the Toolbar "items" array -->
      <Items>
        <Button>Action 1</Button>
        <FlexSpace platform="ios" />
        <Button>Action 2</Button>
      </Items>
    </Toolbar>
  </Window>
</Alloy>
```

## See also

* [Ti.UI.iOS.SystemButton.FLEXIBLE\_SPACE](#!/api/Titanium.UI.iOS.SystemButton-property-FLEXIBLE_SPACE) API reference

* [Ti.UI.iOS.SystemButton.FIXED\_SPACE](#!/api/Titanium.UI.iOS.SystemButton-property-FIXED_SPACE) API reference
