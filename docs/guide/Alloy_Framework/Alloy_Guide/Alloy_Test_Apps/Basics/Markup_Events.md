---
title: Markup Events
weight: '50'
---

# Markup Events

Demonstrates adding event attributes in the XML view and handling the event in the view-controller.

::: tip 💡 App Folder Location
alloy/test/apps/**basics/markup\_events**
:::

![ios](./ios.png)

To declare an event handler on an element in an XML view, create an element attribute whose name is the event name to handle, with its first character capitalized, and prefixed with "on". The value assigned to the attribute is the name of the function handler defined in the view-controller. For example, in the sample application a <Label/> element defines an "onClick" attribute whose value is "doClick".

**app/views/index.xml**

```xml
<Alloy>
  <Window class="container">
    <Label id="t" onClick="doClick" text="CLICK ME" color="#900"></Label>
  </Window>
</Alloy>
```

And the view-controller defines the doClick() function:

**app/controllers/index.js**

```javascript
function doClick(e) {
    alert($.t.text);
}
$.index.open();
```
