---
title: Simple
weight: '80'
---

# Simple

Demonstrates a basic Alloy application consisting of a single XML view file, JavaScript controller file, and Titanium Style Sheet (TSS) file.

::: tip App Folder Location
alloy/test/apps/**basics/simple**
:::

![ios](./ios.png)

The main XML view contains a `<Window/>` element that, in turn, contains a <Label/> element.

**app/views/index.xml**

```xml
<Alloy>
  <Window>
    <Label id="label">Hello, World!</Label>
  </Window>
</Alloy>
```

The main controller file is responsible for opening the main Window. The `$` variable refers to the current controller.

**apps/controllers/index.js**

```javascript
$.index.open();
```

A TSS file define styles and properties of UI elements defined in the main view.

**app/styles/index.tss**

```javascript
"#index": {
  backgroundColor: '#fff',
  fullscreen: false,
  exitOnClose: true
}
"Label": {
  color: '#000',
  font: {
    fontSize: '18dp',
    fontWeight: 'bold'
  },
  height: Ti.UI.SIZE,
  width: Ti.UI.SIZE
}
```

## See Also

* [Alloy Getting Started](/guide/Alloy_Framework/Alloy_Getting_Started/)

* [Alloy Concepts](/guide/Alloy_Framework/Alloy_Guide/Alloy_Concepts/)
