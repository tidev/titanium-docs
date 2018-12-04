# Titanium.UI.AttributedString

<ProxySummary/>

## Overview

The AttributedString proxy is created with the <Titanium.UI.createAttributedString> method.

The `text` property must be set initially in the constructor when creating an attributed string.
The [attributes](Titanium.UI.AttributedString.attributes) can either be set in the constructor or after it has been created.

For examples of Attributed Strings, see the
[Attributed Strings guide](https://docs.appcelerator.com/platform/latest/#!/guide/Attributed_Strings).

## Examples

### Adds an array of attributes to a label

Creates an AttributedString proxy, adds some attributes to it, and applies them
to a <Titanium.UI.Label>.

    var win = Titanium.UI.createWindow({
        backgroundColor: '#ddd',
    });

    win.open();

    var text =  'Bacon ipsum dolor Appcelerator Titanium rocks! sit amet fatback leberkas salami sausage tongue strip steak.';

    var attr = Titanium.UI.createAttributedString({
        text: text,
        attributes: [
            // Underlines text
            {
                type: Titanium.UI.ATTRIBUTE_UNDERLINES_STYLE,
                value: Ti.UI.ATTRIBUTE_UNDERLINE_STYLE_SINGLE,
                range: [text.indexOf('Titanium'), ('Titanium').length]
            },
            // Sets a background color
            {
                type: Titanium.UI.ATTRIBUTE_BACKGROUND_COLOR,
                value: "red",
                range: [text.indexOf('Appcelerator'), ('Appcelerator').length]
            },
            {
                type: Titanium.UI.ATTRIBUTE_BACKGROUND_COLOR,
                value: "blue",
                range: [text.indexOf('Titanium'), ('Titanium').length]
            },
            {
                type: Titanium.UI.ATTRIBUTE_BACKGROUND_COLOR,
                value: "yellow",
                range: [text.indexOf('rocks!'), ('rocks!').length]
            },
            // Sets a foreground color
            {
                type: Titanium.UI.ATTRIBUTE_FOREGROUND_COLOR,
                value: "orange",
                range: [0,  text.length]
            },
            {
                type: Titanium.UI.ATTRIBUTE_FOREGROUND_COLOR,
                value: "black",
                range: [text.indexOf('rocks!'), ('rocks!').length]
            }
        ]
    });

    var label = Titanium.UI.createLabel({
        left: 20,
        right: 20,
        height: Titanium.UI.SIZE,
        attributedString: attr
    });

    win.add(label);

### Adds attributes, one by one.

var win = Titanium.UI.createWindow({
    backgroundColor: '#ddd',
});

win.open();

var text =  'Bacon ipsum dolor Appcelerator Titanium rocks! sit amet fatback leberkas salami sausage tongue strip steak.';

var attr = Titanium.UI.createAttributedString({
    text: text
});

// Underlines text
attr.addAttribute({
    type: Titanium.UI.ATTRIBUTE_UNDERLINES_STYLE,
    range: [0, text.length]
});

var label = Titanium.UI.createLabel({
    left: 20,
    right: 20,
    height: Titanium.UI.SIZE,
    attributedString: attr
});

win.add(label);

<ApiDocs/>
