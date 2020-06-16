---
title: CommonJS XML
weight: '20'
---

# CommonJS XML

Demonstrates using CommonJS modules to create UI components in an Alloy XML view.

::: tip App folder location
_alloy_/test/apps/advanced/commonjs\_xml
:::

![common_js](./common_js.png)

The sample app's `specialView.js` file defines a CommonJS module that exports two functions: `createView` and `createMassiveCreateView`. Each of these functions return a View object.

**app/lib/specialView.js**

```javascript
var _ = require('alloy/underscore')._;
exports.createView = function(args) {
  args = args || {};
  var specialStyle = _.extend({
    backgroundColor: '#111',
    height: '50dp',
    width: '50dp',
    top: '10dp',
    left: '10dp'
  }, args);
  return Ti.UI.createView(specialStyle);
};
exports.createMassiveGreenView = function(args) {
  args = args || {};
  var specialStyle = _.extend({
    backgroundColor: '#0f0',
    height: '200dp',
    width: '200dp',
    top: '10dp',
    left: '10dp'
  }, args);
  return Ti.UI.createView(specialStyle);
};
```

The application's main `index.xml` view shows the two ways to declaratively create instances of these views in an XML file.

* Add a `<Module/>` element whose `module` attribute specifies the base name of the CommonJS module file, relative to the project's `libs/` folder.

* Lastly, you can declare the desired view by adding a an XML element whose name matches the base name of the view constructor function, minus the "create" prefix. In this example, the `<MassiveGreenView/>` element automatically calls the `createMassiveGreenView()` function.

By default, the module's **createView()** method is invoked on the module to get the desired view. You can also specify a custom function to invoke with the the `method` attribute of the <Module/> element.

**app/views/index.xml**

```xml
<Alloy>
  <Window backgroundColor="#fff" layout="horizontal">
    <!--
      The 'specialView' module's exported "createView"
      function is automatically invoked.
    -->
    <Module module="specialView"/>
    <!-- We can use ids and classes to apply styles from TSS -->
    <Module module="specialView" id="redOne"/>
    <Module module="specialView" class="blue"/>
    <Module module="specialView" class="bigger blue"/>
    <!-- and it also supports inline properties as well -->
    <Module module="specialView" left="50dp"/>
    <!--
      We can specify an explicit "method" to be used to create the UI
      component, in this case 'createMassiveGreenView'.
      Also, since these all return a valid Titanium proxy object, you can
      further nest Titanium proxy objects inside of them, as shown below.
    -->
    <Module module="specialView" method="createMassiveGreenView" onClick="doClick">
      <Label>click me</Label>
    </Module>
    <!--
      Finally, we can declare the module as an XML element, without having to specify the
      'method' parameter.
    -->
    <MassiveGreenView module="specialView" onClick="doClick">
      <Label>or click me!</Label>
    </MassiveGreenView>
    <View module="specialView" onClick="doClick"/>
  </Window>
</Alloy>
```

## See also

* [Library Code and CommonJS Modules](/guide/Alloy_Framework/Alloy_Guide/Alloy_Controllers/#library-code-and-commonjs-modules)
