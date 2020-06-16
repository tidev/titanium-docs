---
title: Alloy Styles and Themes
weight: '10'
---

# Alloy Styles and Themes

## Titanium Style Sheets

The Titanium Style Sheets (TSS) file uses a JSON-like syntax to define the attributes of elements in the XML files. All TSS attributes are the properties of the Titanium object. For examples, when defining the style for a [Button object](#!/api/Titanium.UI.Button), each property, such as `backgroundDisabledColor`, `backgroundFocusedColor`, `backgroundSelectedColor`, etc., can be specified as an attribute in the TSS file.

Styles are defined at three different levels: markup element, class attribute and the id attribute. When mixed together, the id attribute overrides both the class attribute and markup element, and the class attribute overrides the markup element.

In the TSS file, define attributes as key-value pairs, where the key is the name of the markup element, the class name prefixed with a period (`.`), or the id name prefixed with a hash tag (#) and the value is a dictionary of attributes (or Titanium class properties) to set. You can optionally place a conditional block with the key name to apply styles under certain conditions as explained in the [Platform-specific styles](#platform-specific-styles) and [Custom query styles](#custom-query-styles) sections below.

You can use the following values and operators in your TSS file:

* JSON values, that is, Strings, Numbers, Objects, Array, Booleans and null

* `undefined` to unset a property (do not place undefined in quotes) (since Alloy 1.4.0)

* Titanium SDK constants, for example, `Ti.UI.SIZE`

* Localization functions, either `Ti.Locale.getString()` and its shorthand `L()`

* Variables from the `Alloy.CFG` or `Alloy.Globals`namespaces

* Bitwise operators, which includes bit shifting ('>>', '<<', and '>>>'), bitwise AND ('&'), bitwise OR ('|') and bitwise XOR ('^') (since Alloy 1.3.0)

You may also place single (`//comment`) and multiline comments (`/* comment */`) in your TSS files unlike regular JSON files.

::: warning ⚠️ Warning
Alloy does not support the CSS concept of child or descendent selectors, that is, specifying and applying styles based on the tag hierarchy.
:::

The following code defines a style sheet (`index.tss`):

**app/styles/index.tss**

```javascript
// This is applied to any element with the class attribute assigned to "container"
".container": {
  backgroundColor:"white"
},
// This is applied to all Labels in the view
"Label": {
    width: Ti.UI.SIZE,
    height: Ti.UI.SIZE,
    color: "#000", // black
    transform: Alloy.Globals.rotateLeft // value is defined in the alloy.js file
},
// This is only applied to an element with the id attribute assigned to "label"
"#label": {
    color: "#999" /* gray */
}
```

which pairs to this view markup (`index.xml`):

**app/views/index.xml**

```xml
<Alloy>
    <Window class="container">
        <Label id="label" onClick="doClick">Hello, World</Label>
    </Window>
</Alloy>
```

In the example code above, the Label object in the view inherits styles from both 'Label' and '#label'. Since '#label' is defined at the id level, the color of the label will be gray ('#999') instead of black ('#000'). For the Label's `transform` property, the TSS file is using a function assigned to the `Alloy.Globals` namespace defined in the initializer file:

**app/alloy.js**

```javascript
Alloy.Globals.rotateLeft = Ti.UI.create2DMatrix().rotate(-90);
```

### Global styles

You can create a global style file, called `app.tss`, which applies all styles defined inside it to all views, but does not override the non-global styles or property attributes in the markup. For example, suppose you have the following three files in your project:

**styles/app.tss**

```javascript
"Window":{
    backgroundColor: 'white',
    layout: 'vertical'
}
"Label":{
    color: 'gray',
    textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
    backgroundColor: 'transparent',
    font: {
        fontFamily:'Helvetica',
        fontSize: '12dp',
        fontStyle: 'normal',
        fontWeight: 'normal'
    }
}
```

**styles/index.tss**

```javascript
"Window":{
    backgroundColor: 'blue'
}
"Label":{
    top: 20,
    left: '25dp',
    right: '25dp'
}
"#subtitle":{
    width: Ti.UI.FILL,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    font: {
        fontSize: '16dp',
        fontWeight: 'bold'
    }
}
```

**views/index.xml**

```xml
<Alloy>
    <Window titleid="story_title" modal="true" exitOnClose="true">
        <Label id="subtitle" color="orange" textid="story_subtitle" />
        <Label top="25" color="white" textid="story_content" />
    </Window>
</Alloy>
```

By default, every view in the project will have white windows with a vertical layout and gray, left-justified, 12-dp Helvetica labels with a transparent background, as defined by the `app.tss` file.

However, in the styles defined in the index style file (`index.tss`) take precedence over the global style file, making the window blue and specifying margin and offset values for all labels in the index view-controller. Additionally, the subtitle ID styles override the styles in the Label element in both `index.tss` and `app.tss`.

Finally, any style attribute set in the view XML takes precedence over both the global style and view-specific style files. The orange and white color will be used instead of the gray color specified in global style file, and the larger top offset is used instead of the one set in `index.tss`.

### Platform-specific styles

As with views, separate styles may be defined based on the platform and device size in the Titanium style sheets.

**To specify platform or device size conditionals:**

1. Place a set of square brackets (`[]`) directly after the name of the markup element, class name or id name in the TSS file. Do **NOT** place a space in between the name and brackets. The condition statements will be ignored.

2. Inside the brackets:

    1. To specify a platform-specific style, use the `platform` attribute and assign it a platform, such as, `android`, `ios`, `mobileweb`, or `windows`.
        Comma separate the values to logically OR the values together, for example, `[platform=ios,android]` indicates both Android and iOS.
        Prepend the value with an exclamation point (`!`) to negate the value, for example, `[platform=!ios]` indicates all platforms except iOS.

    2. To specify a device-size-specific style, use the `formFactor` attribute and assign it a device size–either `handheld` or `tablet`.

You can use both attributes together.

Alternatively, you can create subfolders, named as the platform, in the `styles` directory as another way to create platform-specific styles. Refer to [Alloy Concepts: Platform-Specific Resources](/guide/Alloy_Framework/Alloy_Guide/Alloy_Concepts/#platform-specific-resources).

The sample style sheet below defines styles for iPhone, iPad, Android and mobile web devices.

```
// Default label
"Label": {
    backgroundColor: "#000",
    text: 'Another platform'
},
// iPhone
"Label[platform=ios formFactor=handheld]": {
    backgroundColor: "#f00",
    text: 'iPhone'
},
// iPad and iPad mini
"Label[platform=ios formFactor=tablet]": {
    backgroundColor: "#0f0",
    text: 'iPad'
},
// Android handheld and tablet devices
"Label[platform=android]": {
    backgroundColor: "#00f",
    text: 'Android'
},
// Any Mobile Web platform
"Label[platform=mobileweb]": {
    backgroundColor: "#f0f",
    text: 'Mobile Web'
}
```

### Custom query styles

You can create custom queries to select which styles to apply in both the TSS and XML files. These query statements must return a boolean value. Custom query styles override all styles, that is, class, id, and markup element styles, except the ones defined as attributes in the XML file.

**To use a custom query:**

1. Define a conditional statement, which returns a boolean value, and assign it to a property in the `Alloy.Globals` namespace or a local function in the controller. Since Alloy 1.7.6, the application can also pass custom Boolean properties to the `Alloy.createController()` method, which can be accessed in the XML and TSS files.

2. Assign the `if` attribute to an element in the XML file or in the conditional block of the TSS file to the defined query with the `Alloy.Globals` namespace, a local function in the controller or a custom property passed in from the `createController()` method prefixed with `$.args` namespace, for example, `$.args.someProperty`.

You may use the `if` attribute in combination with the `platform` and `formFactor` attributes. You can only add one custom query to the `if` attribute. The `if` attribute does not support multiple queries or the not operator (`!`).

#### Example using custom properties

The application can pass custom Boolean properties to the`Alloy.createController()` method. These properties can be accessed by both the XML and TSS files. When calling the `createController`() method, pass the custom Boolean properties in the second argument of the method.

The controller below defines two functions that create and open an instance of the `win2` controller, but each function passes a different property to the controller.

**apps/controllers/index.js**

```javascript
function openBar (e) {
  Alloy.createController('win2', {'fooBar': true}).getView().open();
};

function openBaz (e) {
    Alloy.createController('win2', {'fooBaz': true}).getView().open();
};
```

In the TSS file, add the conditional block and assign the `if` attribute to the property passed to the `createController()` method. Prefix the property name with the `$.args` namespace. Based on the property passed to the method, the application displays a different styled label.

**app/styles/win2.tss**

```javascript
"#label[if=$.args.fooBar]": {
  'text' : 'Foobar',
  'color' : 'blue'
}

"#label[if=$.args.fooBaz]": {
    'text' : 'Foobaz',
    'color' : 'red'
}
```

In the XML markup, add the `if` attribute to an element and assign it to the property passed to the `createController()` method. Prefix the property name with the `$.args` namespace. Based on the property passed to the method, the application displays a different label.

**app/views/win2.xml**

```xml
<Alloy>
    <Window>
        <Label if="$.args.fooBar" color="blue">Foobar</Label>
        <Label if="$.args.fooBaz" color="red">Foobaz</Label>
    </Window>
</Alloy>
```

#### Example using conditional statements

In this example, the application defines conditional statements to determine the iPhone device the application is running on. This iPhone application displays a scrolling block of text with a title above it and a caption below it, as illustrated by this XML file:

**app/views/index.xml**

```xml
<Alloy>
    <Window>
        <Label id="title" textid="title"/>
        <ScrollView>
            <Label id="content" textid="content"/>
        </ScrollView>
        <Label id="info">TextViewer by BluthCo</Label>
    </Window>
</Alloy>
```

To take advantage of the various iPhone devices, we need to see if the device is running iOS 7 and above, and whether the iPhone is using the old regular or the latest tall form factor. We can define both of these query statements in the initializer file:

**app/alloy.js**

```javascript
Alloy.Globals.isIos7Plus = (OS_IOS && parseInt(Ti.Platform.version.split(".")[0]) >= 7);
Alloy.Globals.iPhoneTall = (OS_IOS && Ti.Platform.osname == "iphone" && Ti.Platform.displayCaps.platformHeight == 568);
```

In the style file, use these conditional statements to create styles for specific devices. For example, since iOS 7, you can take advantage of the built-in text styles instead of defining all the attribute for a Font object, and since the iPhone 5 (and later) is taller, you need to make the ScrollView longer.

**app/styles/index.tss**

```javascript
// Default Styles
"#content": {
    color: 'gray',
    top: '25dp',
    left: '10dp',
    font: {
        fontSize: '12dp'
    }
},
"#info": {
    color: 'gray',
    bottom: '20dp',
    font: {
        fontSize: '9dp'
    }
},
"#title": {
    color: 'black',
    top: '15dp',
    font: {
        fontSize: '14dp',
        fontWeight: 'bold'
    }
},
"Window": {
    layout: 'vertical',
    backgroundColor: 'white'
},
"ScrollView": {
    height: '415dp'
},
// Query styles
"#info[if=Alloy.Globals.isIos7Plus]": {
    font: { textStyle : Ti.UI.TEXT_STYLE_FOOTNOTE }
},
"#title[if=Alloy.Globals.isIos7Plus]": {
    top: '25dp', // compensate for the status bar on iOS 7
    font: { textStyle : Ti.UI.TEXT_STYLE_HEADLINE }
},
"#content[if=Alloy.Globals.isIos7Plus]": {
    font: { textStyle : Ti.UI.TEXT_STYLE_CAPTION1 }
},
"ScrollView[if=Alloy.Globals.iPhoneTall]": {
    height: '500dp'
}
```

## Themes

Themes provide a way to overwrite or modify files for a specific _brand_ of your app.

To create a theme, create a folder called `themes` in your Alloy `app` directory. In the `themes` folder, create a folder for your theme. The name of this folder references the name of the theme for configuration and compilation. In your theme folder you can include many of the files and folders found under the `app` folder to override or merge with them.

| Folder or Filename | Supported since | Overwrites or Merges |
| --- | --- | --- |
| config.json | Alloy 1.4.0 | merges |
| i18n | Alloy 1.7.6 / CLI 5.0.0 | merges folders and files |
| assets |  | merges folders, overwrites files |
| lib | Alloy 1.7.6 / CLI 5.0.0 | merges folders, overwrites files |
| platform | Alloy 1.7.6 / CLI 5.0.0 | merges folders, overwrites files |
| styles |  | merges folders and files |
| widgets/\*/assets | Alloy 1.4.0 | merges folders, overwrites files |
| widgets/\*/styles | Alloy 1.4.0 | merges folders, overwrites files |

To use a theme, add it to your `config.json` configuration file with "theme" as the key and the name of the theme folder as the value. For example:

```
{
    "global": {
        "theme":"mytheme"
    },
    "env:development": {},
    "env:test": {},
    "env:production": {},
    "os:ios": {
        "theme":"green"
    },
    "os:android": {
        "theme":"blue"
    },
    "dependencies": {}
}
```

The theme changes based on the platform. Android uses the 'blue' theme, iOS uses the 'green' theme, and Mobile Web uses the 'mytheme' theme.

## Style priorities

When mixing themes, the global style file, view style files and defining styles inline in the XML markup, Alloy applies the styles in the following order from lowest to highest priority:

| Style Defined in the... | Example |
| --- | --- |
| Global Style File | `styles/app.tss` |
| Global Style File in a Theme | `themes/<theme_name>/styles/app.tss` |
| Global Style File with Platform-Specific Styles | `styles/<platform>/app.tss`<br /><br />**OR**<br /><br />`styles/app.tss` with the `[platform=<platform>]` syntax |
| Global Style File in a Theme with Platform-Specific Styles | `themes/<theme_name>/styles/<platform>/app.tss`<br /><br />**OR**<br /><br />`themes/<theme_name>/styles/app.tss` with the `[platform=<platform>]` syntax |
| View-Controller Style File | `styles/<view_controller>.tss` |
| View-Controller Style File in a Theme | `themes/<theme_name>/styles/<view_controller>.tss` |
| View-Controller Style File with Platform-Specific Styles | `styles/<platform>/<view_controller>.tss`<br /><br />**OR**<br /><br />`styles/<view_controller>.tss` with the `[platform=<platform>]` syntax |
| View-Controller Style File in a Theme with Platform-Specific Styles | `themes/<theme_name>/styles/<platform>/<view_controller>.tss`<br /><br />**OR**<br /><br />`themes/<theme_name>/styles/<view_controller>.tss` with the `platform` attribute |
| XML Markup | `views/<view_controller>.xml` |
| XML Markup with Platform-Specific Styles | `views/<platform>/<view_controller>.xml`<br /><br />**OR**<br /><br />`views/<view_controller>.xml` with the `platform` attribute |
