---
title: Requiring Child Elements
weight: '160'
---

# Requiring Child Elements

Demonstrates how to use the `<Require/>` and `<Widget/>` elements to include external views and widgets. Also shows how to programmatically add child views declared inside a `<Require/>` or `<Widget/>` element to the parent.

::: tip 💡 App Folder Location
alloy/test/apps/**advanced\_require\_children**
:::
![require-proxy-1](./require-proxy-1.png)

The sample application's `views/index.xml` file includes a <[TabGroup](#!/api/Titanium.UI.TabGroup)/> element that contains two <[Tab](#!/api/Titanium.UI.TabGroup)/> elements titled "requires" and "widgets", respectively. The first Tab includes a `<Require/>` element whose source is the **views/requires/index.xml** view, as shown below.

**app/views/index.xml**

```xml
<Alloy>
    <TabGroup>
        <Tab title="requires">
            <Window title="requires">
                <Require src="requires/index"/>
            </Window>
        </Tab>
        <Tab title="widgets">
            <Window title="widgets">
                <Require src="widgets/index"/>
            </Window>
        </Tab>
    </TabGroup>
</Alloy>
```

The `views/requires/index.xml` view, in turn, includes three more Require elements that contain child elements.

**views/requires/index.xml**

```xml
<Alloy>
    <Require src="requires/simple" class="leftside">
        <Label>hi there</Label>
        <Label>I'm on the left side</Label>
        <Button onClick="alertTitle">left button</Button>
    </Require>
    <Require src="requires/simple" class="rightside">
        <Label>hi there</Label>
        <Label>I'm on the right side</Label>
        <Button onClick="alertTitle">right button</Button>
    </Require>
    <Require src="requires/deep">
        <Label color="#42282F">I'm 3 views deep</Label>
    </Require>
</Alloy>
```

The first two `<Require/>` elements include the same file, **views/requires/simple.xml**, that simply defines a single empty `<View/>` element:

**app/views/requires/simple.xml**

```xml
<Alloy>
    <View/>
</Alloy>
```

The child elements declared inside the the `<Require/>` element are added programmatically to the parent view by the view-controller. The child elements are passed in the `children` array passed to the view-controller on the `arguments` object. The simple.js view-controller adds the child views of the `<Require/>` element to the parent view, referenced by `$.simple`.

**controllers/requires/simple.js**

```javascript
// add children to simple container, if there are any
_.each($.args.children || [], function(child) {
    Ti.API.info('adding child ' + child.toString());
    // I can inject properties if I want
    child.top = '10dp';
    // then add each child where ever I want
    $.simple.add(child);
});
```

The other `<Tab/>` element requires **views/widgets/index.xml**, which contains a `<Widget/>` element. The `<Widget/>` element's `src` attribute specifies the name of the widget folder, relative to the app/widgets, folder to include. The `<Widget/>` element contains the following child views: a Label, an ImageView and a Button.

**views/widgets/index.xml**

```xml
<Alloy>
    <Widget src="alloy.container">
        <Label id="title">my title</Label>
        <ImageView id="image" image="/logo.png"/>
        <Button id="action" onClick="alertAction">action button</Button>
    </Widget>
</Alloy>
```

The child views are are added programmatically to the main (empty) View. In this case, additional logic checks to see if a child view was passed as an argument before adding it to the parent view.

```javascript
var children = $.args.children || [];
function addViewIfExists(id, parent) {
    var view;
    // find the UI component by id
    if (view = _.find(children, function(c) { return c.id === id; })) {
        // add a class to style it
        $.addClass(view, id);
        // add the component to the given parent container
        parent.add(view);
    }
}
// add children to widget, using specific rules and order for each
addViewIfExists('image', $.titlebar);
addViewIfExists('title', $.titlebar);
addViewIfExists('action', $.content);
```

## See also

* [Alloy Widgets](/guide/Alloy_Framework/Alloy_Guide/Alloy_Widgets/)
