---
title: TableView Binding
weight: '160'
---

# TableView Binding

Demonstrates binding a data collection to a TableView using global and local collection references.

::: tip App Folder Location
alloy/test/apps/**models/binding\_tableview**
:::

The `<Collection/>` element can also be used to create a global, singleton instance of the collection data available to all controllers, or a an instance available to a single controller. By default, a <Collection/> element creates a global object.

**Create a global, singleton Collection object**

```xml
<Collection src="myModel"/>
<TableView id="table" dataCollection="myModel">
```

The singleton Collection object is attached to the global `Alloy.Collections` object, and so can be referenced as follows:

```javascript
var myModels = Alloy.Collections.myModel;
```

To create a locally-scoped instance, set the **instance** attribute on the <Collection/> element to **true**. You also assign the instance an ID so you can reference it from the view-controller.

```xml
<Collection src="myModel" id="myModelId" instance="true"/>
<TableView id="table" dataCollection="$.myModelId">
```

You reference the local Collection instance as a property of the `$` object in the view-controller.

```javascript
var myModels = $.myModelId;
```

The sample application contains four tabs that each contain a `<TableView/>` element. The first two reference the same global Collection instance, while the second two each reference their own, locally-scoped Collection objects. Consequently, any items added to the first tab appear on the second, and vice versa. In contrast, any items added to either the third or fourth tabs only appear on those tabs.

**app/views/index.xml**

```xml
<Alloy>
    <TabGroup>
        <Require src="tab_1"/>
        <Require src="tab_2"/>
        <Require src="tab_3"/>
        <Require src="tab_4"/>
    </TabGroup>
</Alloy>
```

The first tab, titled "global/<Require/>", declares a <Collection/> element, which creates a global singleton instance of the "myModel" collection, or returns an existing singleton if it's already been created. The <TableView/> element's `dataCollection` references the same global singleton object.

**app/views/tab\_1.xml**

```xml
<Alloy>
    <Collection src="myModel"/>
    <Tab title="global/<Require>">
        <Window id="window" title="global/<Require>">
            <!-- use the global reference to the dataCollection -->
            <TableView id="table" dataCollection="myModel" onClick="removeItem">
                <!-- use a <Require> for our repeated TableViewRow -->
                <Require src="row"/>
            </TableView>
            <!-- let's use a simple button or android -->
            <Button class="addButton" onClick="addItem" platform="android"/>
        </Window>
    </Tab>
</Alloy>
```

The view-controller for the tab\_1.xml view reference the same global `myModel` singleton on the `Alloy.Collections` object, and adds to it a new item when the user clicks the Add button. When changes occur in the global collection reference, they will be reflected in tab\_2.xml, which also references the same global collection.

**app/controllers/tab\_1.js**

```javascript
var myModels = Alloy.Collections.myModel;
var common = require('common');
function addItem(e) {
    common.addItem(myModels);
}
function removeItem(e) {
    common.removeItem(myModels, e.index);
}
if (OS_IOS || OS_MOBILEWEB) {
    common.prepNavBar($.window, addItem);
}
myModels.comparator = common.comparator;
myModels.fetch();
```

The XML and JavaScript for tab 2 is functionally identical to that of tab 1, except that tab 2 uses a <Require/> element to include each table row, rather than declaring it inline.

```xml
<Alloy>
    <Collection src="myModel"/>
    <Tab title="global/inline">
        <Window id="window" title="global/inline">
            <!-- use the global reference to the dataCollection -->
            <TableView id="table" dataCollection="myModel" onClick="removeItem">
                <!-- create the repeated TableViewRow inline -->
                <TableViewRow class="row">
                    <Label class="rowTitle" text="{title}"/>
                    <ImageView class="rowImage" image="{image}"/>
                </TableViewRow>
            </TableView>
            <!-- let's use a simple button or android -->
            <Button class="addButton" onClick="addItem" platform="android"/>
        </Window>
    </Tab>
</Alloy>
```

The tab\_3.xml view
