---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/AttributedString.yml
---
# Titanium.UI.AttributedString

<TypeHeader/>

## Overview

The AttributedString proxy is created with the <Titanium.UI.createAttributedString> method.

The `text` property must be set initially in the constructor when creating an attributed string.
The [attributes](Titanium.UI.AttributedString.attributes) can either be set in the constructor or after it has been created.

For examples of Attributed Strings, see the
[Attributed Strings guide](https://titaniumsdk.com/guide/Titanium_SDK/Titanium_SDK_How-tos/User_Interface_Deep_Dives/Attributed_Strings.html).

## Examples

### Adds an array of attributes to a label

Creates an AttributedString proxy, adds some attributes to it, and applies them
to a <Titanium.UI.Label>.

``` js
var win = Titanium.UI.createWindow({
    backgroundColor: '#ddd',
});

win.open();

var text =  'Bacon ipsum dolor Titanium SDK rocks! sit amet fatback leberkas salami sausage tongue strip steak.';

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
```

### Adds attributes, one by one.

``` js
var win = Titanium.UI.createWindow({
    backgroundColor: '#ddd',
});

win.open();

var text =  'Bacon ipsum dolor Titanium SDK rocks! sit amet fatback leberkas salami sausage tongue strip steak.';

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
```

### Links with underline color.

``` js
const win = Ti.UI.createWindow({
	backgroundColor: 'gray',
	layout: 'vertical'
});
const lbl_a = createLink();
const lbl_b = createLink();

colorLink(lbl_b);

win.add([lbl_a, lbl_b]);
win.open();

function createLink() {
	const label = Ti.UI.createLabel({
		top: 20,
		attributedString: Ti.UI.createAttributedString({
			text: 'Check out Titanium SDK',
			attributes: [{
				type: Ti.UI.ATTRIBUTE_LINK,
				value: 'https://titaniumsdk.com',
				range: [10, 12]
			}]
		})
	});

	label.addEventListener('link', e => {
		Ti.Platform.openURL(e.url);
	});

	return label;
}

function colorLink(lbl) {
	const attributedString = lbl.attributedString;
	const textColor = 'purple';
	const underlineColor = 'yellow';

	for (const attribute of attributedString.attributes) {
		if (attribute.type === Ti.UI.ATTRIBUTE_LINK) {

			// Set new link color.
			attributedString.addAttribute({
				type: Ti.UI.ATTRIBUTE_FOREGROUND_COLOR,
				value: textColor,
				range: attribute.range
			});

			// Set new underline color.
			attributedString.addAttribute({
				type: Ti.UI.ATTRIBUTE_UNDERLINE_COLOR,
				value: underlineColor,
				range: attribute.range
			});
		}
	}
}
```

<ApiDocs/>
