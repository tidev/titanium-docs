---
title: Dynamic Styles
weight: '30'
---

# Dynamic Styles

## Introduction

Since Alloy 1.2.0, Alloy supports changing styles dynamically or during runtime. There are two methods to support dynamic styling in Alloy. You can either generate a dynamic style dictionary that can be passed to `applyProperties` or a create method, or modify TSS class styles to an existing component on the fly.

Before reading this guide, review [Alloy Styles and Themes](/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Alloy_Styles_and_Themes/) to learn the basics about TSS files and styles.

## Define Class Styles

Before using either method, you need to create class styles in the TSS files, either in the global style file or in the individual TSS files. For example, suppose you have the following styles defined:

**app/styles/app.tss**

```javascript
".bluetext" : {
  color: 'blue'
},
".orangetext" : {
  color: 'orange'
},
".shadow" : {
  shadowColor: '#88f',
  shadowOffset: {x:1,y:3}
},
".ldpi" : {
  font: {fontSize: '9dp', fontWeight: 'normal' }
},
".mdpi" : {
  font: {fontSize: '12dp', fontWeight: 'normal' }
},
".hdpi" : {
  font: {fontSize: '18dp', fontWeight: 'bold' }
},
".xhdpi" : {
  font: {fontSize: '24dp', fontWeight: 'bold' }
},
"Label" : {
  font: {fontSize: '14dp', fontWeight: 'normal' },
  shadow : {},
  color : 'black'
},
".rude_button" : {
  title: 'Go Away'
},
".nice_button" : {
  title: 'Please Close'
},
"Button" : {
    width: Ti.UI.SIZE,
    height: Ti.UI.SIZE
}
".tiny_win" : {
  height: '150dp',
  width: '200dp',
  backgroundColor: 'blue'
},
".big_win" : {
  height: '300dp',
  width: '400dp',
  backgroundColor: 'red'
}
```

The previous style sheet defines various class and markup element styles for labels, buttons and windows. Alloy assigns a priority for each class, based on its order in the TSS file. Styles listed first receive a lower priority than ones listed afterwards. For example, if both the ldpi and hdpi classes are assigned to a label, since hdpi is after ldpi, the label text is 24 dp not 9 dp. Since the Label size of 14 dp is a markup element style and even though it appears after the class styles, it does not have a higher priority number since class styles have higher precedence over markup element styles. The label is still 24 dp not 14 dp. Properties define inline in the markup and TSS id styles still take precedence over class styles.

## Generate a Dynamic Style

To generate a dynamic style, use the controller's `createStyle` method by passing it a dictionary with TSS classes. You can optionally add additional properties inline specific to the component. This method returns a dictionary that can be passed to the view object's `applyProperties` method or a create view object method, such as `Ti.UI.createView`.

You can use the controller's `UI.create` method to create a view component that is dynamically styled by passing it the name of the object as the first parameter and a dictionary with TSS classes as the second parameter. The object name can either be the element name, such as `Button`, or the full API name, such as `Ti.UI.Button`. You can optionally add additional properties inline specific to the component with the second parameter.

For example, suppose that the following view-controller is defined in an Alloy project.

**app/views/dialog.xml**

```xml
<Alloy>
    <Window id="win">
        <Button id="button" onClick="doClick" />
    </Window>
</Alloy>
```

**app/controllers/dialog.js**

```javascript
function doClick(e) {
    $.win.close();
}

args = arguments[0] || {};
if (args.button) {
    var style = $.createStyle({
        classes: args.button,
        apiName: 'Button',
        color: 'blue'
    });
    $.button.applyProperties(style);
}
if (args.win) {
    var style = $.createStyle({
        classes: args.win,
        apiName: 'Window',
        // Since backgroundColor is defined inline, this overrides the class style
        backgroundColor: 'white'
    });
    $.win.applyProperties(style);
}
if (args.label) {
    args.label.top = 10
    var label = $.UI.create("Label", args.label);
    $.win.add(label);
}
```

Then, create an instance of this view-controller:

**app/controllers/index.js**

```javascript
var args = {};
args.button = ['rude_button'];
args.win = ['tiny_win'];
args.label = {
    classes: ['hdpi', 'shadow'],
    text: 'No zombies allowed!'
};
Alloy.createController('dialog', args).getView().open();
```

In this example, the index view-controller passes specific classes for the dialog view-controller to use. In the dialog-view controller, for the button and window, it uses the passed classes to generate styles with the `createStyle` method and update the styles of the components with the `applyProperties` method. The dialog controller defines extra properties to apply in the dictionary. The background color of the `tiny_win` class is overridden by the inline property defined in the dictionary, making the window white not blue. For the label, the dialog-view controller uses the passed dictionary to generate a label object with the `UI.create` method and adds it to the window.

In this example, the dialog controller code is not necessary. The dialog can be generated and styled outside the view-controller. The following code using only the previous XML markup is equivalent to what the previous two controllers are doing:

**app/controllers/index.js**

```javascript
var dialog = Alloy.createController('dialog');
var style = dialog.createStyle({
    classes: 'rude_button',
    apiName: 'Button',
    color: 'blue'
});
dialog.button.applyProperties(style);
style = dialog.createStyle({
    classes: 'tiny_win',
    apiName: 'Window',
    backgroundColor: 'white'
});
dialog.win.applyProperties(style);
style = {
    top: 10,
    text: 'No zombies allowed!',
    classes: 'hdpi shadow'
}
var label = dialog.UI.create('Label', style);
dialog.win.add(label);
dialog.getView().open();
```

Note that code outside of the dialog view-controller is using the instance variable name `dialog` to make the API calls with the `createStyle` and `UI.create` methods rather than the `$` variable, which is used when making controller API calls inside its self view-controller.

## Modify TSS Classes

To modify the TSS classes of an object that has already been created, use the controller's `addClass`, `removeClass` and `resetClass` methods, which adds, removes or resets the TSS classes of a view object, respectively. Pass a reference to the view object as the first parameter, then pass the classes to add or remove as an array or space-separated string as the second parameter. You can optionally specify inline properties related to the component to modify as an optional third parameter. As the classes are modified using these API calls, the view is automatically updated. For example, the following code is equivalent to the previous example:

**app/controllers/index.js**

```javascript
var dialog = Alloy.createController('dialog');
dialog.addClass(dialog.win, 'tiny_win', {backgroundColor:'white'});
dialog.addClass(dialog.button, 'rude_button', {color: 'blue'});
var style = {
    top: 10,
    text: 'No zombies allowed!',
    classes: 'hdpi shadow'
}
var label = dialog.UI.create('Label', style);
dialog.getView().open();
```

Later on, you can change the classes. The following code removes all classes from the button object, then adds the nice\_button, orangetext and hdpi classes:

```
dialog.resetClass(dialog.button, 'nice_button orangetext hdpi');
```

To take advantage of these APIs, you need to enable [autostyle](#autostyle) for the components or else the view may not update properly.

## Autostyle

A view component with autostyle enabled has its TSS classes stored with the view object. Autostyle is necessary to take full advantage of the `addClass()`, `removeClass()` and `resetClass()` classes to properly update the view as classes are removed and added. There is a small performance overhead for using this feature and should only be enabled on components that use this feature. By default, autostyle is disabled.

To better understand when and why this feature is useful, consider the following XML view, TSS file and view-controller code:

**app/styles/index.tss**

```javascript
".coloronly" : {
    color: 'red'
},
".colorsize" : {
    color: 'blue',
    font: {fontSize: '24dp'}
},
"Label" : {
    color: 'black',
    font: {fontSize: '12dp'}
}
```

The view-controller calls `$.addClass()` to add two classes to the `label` object, then calls `removeClass()` twice, removing a class each time. The result of each method call is show as a comment next to the associated line of code.

**app/controllers/index.js**

```javascript
$.addClass($.label, "coloronly colorsize"); // --> appears blue and 24dp
$.removeClass($.label, "colorsize"); // --> appears red and 24dp
$.removeClass($.label, "coloronly"); // --> appears red and 24dp
```

Even though the classes are removed, the view does not update as expected. For the first remove statement, the color updates correctly but not the font size. For the second remove statement, neither the color nor the size updates correctly even though markup element class defines these properties.

To workaround the first issue, you could create a default class that defines all possible properties you will modify and apply it first. To workaround the second issue, you could either define the same properties for each class, or pass in the optional inline properties. Or you can enable autostyling and the styles in the view update as expected, without these issues.

To enable autostyle, set the `autoStyle` attribute to `true` either in the XML markup or the `config.json` file. You can enable autostyle for a individual component, for all components in a controller, or for all controllers in a project.

* To enable autostyle for an individual component, set the **autoStyle** attribute to true on the XML tag (for example, `<View autoStyle="true">).`

* To enable autostyle for components in a controller, set the **autoStyle** attribute to true on the root < `Alloy/>` tag (for example, `<Alloy autoStyle="true">` `).`

* To enable autostyle for all controllers in an Alloy project, set the **autoStyle** field to true in the `config.json` file, for example:

    **app/config.json**

    ```json
    {
        "autoStyle": true
    }
    ```
