---
title: Alloy Widgets
weight: '60'
---

# Alloy Widgets

## Introduction

Widgets are self-contained components that can be easily dropped into Alloy-powered Titanium projects. They were conceived as a way to reuse code in multiple applications or to be used multiple times in the same application. Widgets have their own views, controllers, styles and assets and are laid out the same as the app directory in the Alloy project.

## Using widgets

See [Importing Widgets](/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Alloy_XML_Markup/#ImportingWidgets) for more information on using widgets in your project.

## Creating widgets

Widgets should be built in their own directory in the Alloy project's `app/widgets/` directory. Widgets have their own views, controllers, models, styles and assets and are laid out the same as the `app` directory in the Alloy project. See [Convention over Configuration](/guide/Alloy_Framework/Alloy_Guide/Alloy_Concepts/#ConventionoverConfiguration) for the layout. Additionally, since widgets are self-contained, they should not reference any code or assets not within its path, except for internationalization and localization files, which are located in the `i18n` folder. Some differences from Alloy projects and helpful tricks are noted below.

### Assets and libs

For any files in the `assets` or `libs` folder, use the `WPATH()` macro to automatically map the path relative from the widget's root folder, as opposed to the Alloy project's `app` directory. For example, if you have a library located at `app/widgets/foo/lib/helper.js`, to require it, use `require(WPATH('helper'))`; and if you have an image located at `app/widgets/foo/assets/images/foo.png`, to reference it, use `WPATH('images/foo.png')`.

### Configuration

Widgets have their own configuration file called `widget.json` located in the widget's root directory. Refer to [Widget Configuration File (widget.json)](/guide/Alloy_Framework/Alloy_How-tos/Alloy_Reference_Guides/Widget_Configuration_File_(widget.json)/) for the format of the file.

### Controllers

The main controller is called `widget.js` instead of `index.js`.

To use another view-controller besides `widget.js`/`widget.xml`, use the `Widget.createController(controller_name, [params])` method to create a new instance of the controller and the `getView()` method to access the Titanium proxy object. For example, suppose you have a `button` view-controller in your `foo` widget. To add it to the main widget view:

**app/widgets/foo/controllers/widget.js**

```javascript
var button = Widget.createController('button').getView();
$.widget.add(button);
```

All methods in the widget controller are private unless you prefix the method with `$`, which makes it accessible to the Alloy project and other widgets. For example, if the following code was defined in a widget controller:

```javascript
$.init = function (args) {
    // Button object with id=button
    $.button.title = args.title || 'Si';
    $.button.color = args.color || 'black';
    // global variable
    message = args.message || 'Hola mundo';
}
```

Then, in the Alloy project, call `init` prefixed with the widget ID specified in the Alloy project's view--in this example, the ID is `foo`:

```
$.foo.init({title:'Yes', color:'gray', message:'I pity the foo.'});
```

### Models

Use models the same way as with a regular Alloy project except to create a model or collection inside a widget controller, use the `Widget.createModel(model_name, [params])` and `Widget.createCollection(model_name, [params])` methods, respectively. You can also use the `Model` and `Collection` tags in widget views.

### Styles

The main TSS file is called `widget.tss` instead of `index.tss`.

### Themes

Widget themes work the same as project themes except for the placement of the files. Inside your theme folder (`app/themes/<THEME_NAME>`), create `widgets/<WIDGET_NAME>` folders, where `<THEME_NAME>` is the name of the theme and `<WIDGET_NAME>` is the name of the widget. Create two folders, `assets` and `styles`, to place your custom images and styles for your widget, respectively. The `assets` and `styles` folders need to be placed in the folder that is named after the widget. When using a theme, the files in these folders replace the files in the widget's folders. For more details, see [Alloy Styles and Themes: Themes](/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Alloy_Styles_and_Themes/#themes).

To use a theme, in the project's `config.json` file, add the `theme` key with the name of the theme folder as the value.

The following file structure shows the placement of the "mytheme" theme files in relation to the "mywidget" widget. The project below contains iOS-specific assets and styles for the widget.

```
app
├── themes
│   └── mytheme
│       └── widgets
│           └── mywidget
│               ├── assets
│               │   ├── ios
│               │   │   └── star_half.png
│               │   ├── star.png
│               │   └── star_off.png
│               └── styles
│                   ├── ios
│                   │   └── star.tss
│                   └── star.tss
└── widgets
    └── mywidget
        ├── assets
        │   ├── star.png
        │   ├── star_half.png
        │   └── star_off.png
        ├── controllers
        │   ├── star.js
        │   └── widget.js
        ├── styles
        │   ├── star.tss
        │   └── widget.tss
        ├── views
        │   ├── star.xml
        │   └── widget.xml
        └── widget.json
```

### Views

The main view is called `widget.xml` instead of `index.xml`.

Specifying the `id` attribute in the XML markup components will make it easier to access and override Titanium object properties. For example, suppose you have a Button object in a widget view that has its id assigned as `button` and in the Alloy project the widget id is `foo`. To access a Button property:

```
Ti.API.info("button state: " + $.foo.button.enabled);
```

For widgets that have multiple view-controllers, to include a widget's view-controller in another widget's view, use the `Widget` tag and assign the `name` attribute with the name of the view-controller minus the file extension. Since Alloy 1.5.0, if you omit the `src` attribute, Alloy assumes you are referencing the current widget. For Alloy 1.4.x and prior, you need to assign the `src` attribute to the widget's name. For example, the following markup is analogous to the example in the Controller section:

**app/widgets/foo/views/widget.xml**

```xml
<Alloy>
  <View>
    <Widget src="foo" name="button"/>
  </View>
</Alloy>
```

### Widgets

Widgets can also contain other widgets. Follow the same directions from [Importing Widgets](/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Alloy_XML_Markup/#ImportingWidgets) except the widget's configuration file is called `widget.json` instead of `config.json`. Additionally, to create a widget inside a widget controller, use the `Widget.createWidget(widget_name, [controller_name], [params])` method.
