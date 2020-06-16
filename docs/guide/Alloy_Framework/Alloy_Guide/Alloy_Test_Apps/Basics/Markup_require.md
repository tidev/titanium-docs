---
title: Markup require
weight: '60'
---

# Markup require

Demonstrates how to build modular views using the `<Require/>` element to include sub-views defined in external XML files.

::: tip 💡 App Folder Location
alloy/test/apps/**basics/markup\_require**
:::

In the sample application, the main **index.xml** view requires the view defined by **theRest.xml** that,  in turn, requires **middle.xml** and **bottom.xml**.

![screenshot](./screenshot.png)

**app/views/index.xml**

```xml
<Alloy>
  <Window>
    <View id="top" />
    <Require src="theRest"/>
  </Window>
</Alloy>
```

**app/views/theRest.xml**

```xml
<Alloy>
  <Require src="middle" id="middle"/>
  <Require src="bottom" id="bottom"/>
</Alloy>
```

**app/views/middle.xml**

```xml
<Alloy>
  <View>
    <Label id="t">Middle</Label>
  </View>
</Alloy>
```

**app/views/bottom.xml**

```xml
<Alloy>
  <View>
    <Button id="b"></Button>
  </View>
</Alloy>
```

## See also

* [Requiring Child Elements](/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/Advanced/Requiring_Child_Elements/) sample app
