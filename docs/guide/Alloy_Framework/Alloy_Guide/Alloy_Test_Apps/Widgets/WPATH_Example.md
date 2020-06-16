---
title: WPATH Example
weight: '40'
---

# WPATH Example

Demonstrates how to use the WPATH() macro to easily map image and library paths to the widget folder.

::: tip App Folder Location
alloy/test/apps/**widgets/wpath**
:::

By default, image paths and JavaScript libraries referenced by a widget are resolved relative to the Alloy project's app/ folder, rather than to the widget folder. To easily map paths relative to the widget's root folder, wrap the specified path in the `WPATH()` macro.

In the sample application, the `WPATH()` macro is used in widget's TSS file and controller file.

**app/widgets/com.test.hellobutton/styles/widget.tss**

```javascript
"#helloButton": {
    backgroundImage: WPATH('hello.png'),
    height: 135,
    width: 233
}
```

**app/widgets/com.test.hellobutton/controllers/widget.js**

```javascript
function sayHello() {
  require(WPATH('hello')).sayHello();
}
```

You could accomplish the same things without using `WPATH()` as shown below:

```
"#helloButton": {
    backgroundImage: WPATH('com.test.hellobutton/hello.png'),
    height: 135,
    width: 233
}
```

**app/widgets/com.test.hellobutton/controllers/widget.js**

```javascript
function sayHello() {
  require(WPATH('com.test.hellobutton/hello')).sayHello();
}
```
