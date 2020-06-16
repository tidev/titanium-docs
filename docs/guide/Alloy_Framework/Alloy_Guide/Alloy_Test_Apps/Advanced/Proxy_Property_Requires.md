---
title: Proxy Property Requires
weight: '150'
---

# Proxy Property Requires

Demonstrates using Require and Widget elements to create Titanium proxy properties.

::: tip 💡 App folder location
_alloy_/test/apps/**advanced/proxy\_property\_requires**
:::

For example, as shown below, your main Alloy application can define a `<Window/>` element that uses a `<Require/>` element to include an external file that defines the Window element's [leftNavButton](#!/api/Titanium.UI.Window-property-rightNavButton) and [rightNavButton](#!/api/Titanium.UI.Window-property-rightNavButton) views.

![proxy_properties_1](./proxy_properties_1.png)

**app/views/index.xml**

```xml
<Window id="windowWindow" title="window">
    <Require src="window"/>
    <Label>This is a window</Label>
</Window>
```

**app/views/window.xml**

```xml
<Alloy>
    <LeftNavButton>
        <Button id="leftButton" title="left" onClick="showAlert"/>
    </LeftNavButton>
    <RightNavButton>
        <Button id="rightButton" title="right" onClick="showAlert"/>
    </RightNavButton>
</Alloy>
```

Similarly, you can use a `<Widget/>` element to add TableViewSection and TableViewRow objects to a TableView, as shown below.

![proxy_properties_2](./proxy_properties_2.png)

**app/views/index.xml**

```xml
<Window id="staticWindow" title="static">
    <TableView id="staticTable">
        <TableViewRow id="staticRow1" title="1"/>
        <TableViewRow id="staticRow2" title="2"/>
        <Widget id="staticWidgetSection" src="com.foo.widget" name="section" />
        <Widget id="staticWidgetRow1" src="com.foo.widget" name="row" />
        <Widget id="staticWidgetRow2" src="com.foo.widget" name="row" />
        <Widget id="staticWidgetRow3" src="com.foo.widget" name="row" />
        <TableViewRow id="staticRow3" title="3"/>
    </TableView>
</Window>
```

**app/views/com.foo.widget/section.xml**

```xml
<Alloy>
    <TableViewSection platform="android">
        <HeaderView>
            <Label>Test</Label>
        </HeaderView>
        <TableViewRow title="android row"/>
        <TableViewRow title="android row"/>
        <TableViewRow title="android row"/>
    </TableViewSection>
    <TableViewSection platform="ios,mobileweb" headerTitle="Test">
        <TableViewRow title="table row"/>
        <TableViewRow title="table row"/>
        <TableViewRow title="table row"/>
    </TableViewSection>
</Alloy>
```

Note that a `<Widget/>` element is equivalent to a `<Require/>` element with its **type** attribute set to "widget". For example, the following lines are equivalent:

```xml
<Widget id="staticWidgetSection" src="com.foo.widget" name="section" />
<Require type="widget" id="staticWidgetSection" src="com.foo.widget" name="section" />
```

## See also

* [Proxy Properties](/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/User_Interface/Proxy_Properties/)
