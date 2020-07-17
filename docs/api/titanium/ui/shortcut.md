# Titanium.UI.Shortcut

<TypeHeader/>

## Overview

Allows the creation of application shortcuts, which can be detected using
the `click` event from <Titanium.UI.Shortcut>.

Use the <Titanium.UI.createShortcut> method to manage shortcut creation.

In iOS, to use this feature make sure you have a 3D Touch compatible device. To
check for the feature, use the <Titanium.UI.iOS.forceTouchSupported> property.

## Examples

### Simple Shortcut Example

Create a shortcut item and detect its click with the `click` event.

``` javascript
const win = Ti.UI.createWindow({ backgroundColor: 'grey' });

const shortcut = Ti.UI.createShortcut();
shortcut.addEventListener('click', e => {
    console.log(`id: ${e.item.id}`);

    // Set background to 'blue' on shortcut click event.
    win.backgroundColor = 'blue';
});

// Button to add a shortcut item
const btn = Ti.UI.createButton({ title: 'ADD SHORTCUT' });
btn.addEventListener('click', () => {
    // Add shortcut item to shortcut
    const shortcutItem = Ti.UI.createShortcutItem({
        id: 'test_shortcut',
        title: 'TEST',
        description: 'DESCRIPTION'
    });
    shortcut.add(shortcutItem);
});

win.add(btn);
win.open();
```

<ApiDocs/>
