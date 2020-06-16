---
title: Views without Controllers
weight: '40'
---

# Views without Controllers

## Introduction

Views can be created without controllers with an optional style sheet. These views can be used as building blocks to create a GUI. After you have defined your controller-less views, the application can either require in these views using markup or can dynamically generate these views in the controller code.

## XML Markup

In XML markup, use the `Require` tag to add controller-less views into another view. Assign the `src` attribute to the name of the view file minus the `.xml` extension and the `type` to `view`. Define the `id` `attribute` to access each instance of the controller-less view in the controller.

For instance, a button view could be reused repeatedly in a view-controller to construct a dialog box. For example, the following view can be defined without a controller:

**app/views/foo.xml**

```xml
<Alloy>
    <Button id='fooButton'>I am a foo button!</Button>
</Alloy>
```

This view can be inserted into another view multiple times by using the `Require` tag and assigning it an unique ID. For example,

**app/views/index.xml**

```xml
<Alloy>
    <Window layout="vertical">
        <Require id="button1" src="foo" type="view"/>
        <Require id="button2" src="foo" type="view"/>
        <Require id="button3" src="foo" type="view"/>
    </Window>
</Alloy>
```

Then, the controller can use `$.button1`, `$.button2` and `$.button3` to access each instance of the foo view.

## Controller Code

**Starting with Alloy 1.4.0**, you can dynamically create views in the controller code. Each component in the controller-less view needs to be assigned an `id` attribute. Using the `Require` or `Widget`elements to include external views in the controller-less view does not work using this procedure, that is, you can include the external views, but the styles cannot be updated with the `updateViews` method.

**To create a view without a corresponding controller:**

1. Use the `Alloy.createController()`method to create a controller from the controller-less view. Pass a string with the name of the view minus the `.xml` extension as the only argument to the method

2. Use the `updateViews()` method with the created controller. Pass a style dictionary as the only argument to the method. The style dictionary contains key-value pairs, where the key is the `id` of the view component and the value is another dictionary containing key-value pairs of attributes you want to set for the view component.

3. Use the `getView()` method to retrieve the view of the controller object.

4. Use the `add()` method to add the view to a view component in the controller. Pass the instance of the controller-less view to the method. The view component that wants to add the controller-less view should call the method.

::: warning ⚠️ Warning
Unlike other style dictionaries in Alloy, when using the `updateViews()` method, you can only apply styles using IDs. Class and view component styles do not work with this method.
:::

For example, the following view defines an image with a label below it:

**app/views/profile.xml**

```xml
<Alloy>
    <View id="container">
        <ImageView id="picture"/>
        <Label id="name"/>
    </View>
</Alloy>
```

The controller code creates an instance of the controller-less view and adds the instance to main view in the controller.

**app/controllers/index.js**

```javascript
var profile = Alloy.createController('profile');
profile.updateViews({
  "#container" : {
        layout : "vertical"
  },
  "#picture" : {
        image : "/appicon.png"
  },
  "#name" : {
        text : "Mr. Man"
  }
});
$.index.add(profile.getView());

$.index.open();
```

**Prior to Alloy 1.4.0**, to dynamically generate a view with a controller:

1. Create a new instance of the controller using the `Alloy.createController()` method. Pass a string with the name of the view as the only argument to the method.

2. Modify the properties.

3. Use the `getView()` method to retrieve the view of the controller object.

4. Use the `add()` method to add the view to a view component in the controller. Pass the instance of the controller-less view to the method. The view component that wants to add the controller-less view should call the method.

**app/controllers/index.js**

```javascript
// Create an instance of the controller
var profile = Alloy.createController('profile');
// Modify the properties
profile.container.layout = 'vertical';
profile.picture.image = '/appicon.png';
profile.name.text = 'Mr. Man';
// Add the view
$.index.add(profile.getView());
$.index.open();
```
