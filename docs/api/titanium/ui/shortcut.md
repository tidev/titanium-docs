# Titanium.UI.Shortcut

<TypeHeader/>

## Overview

Allows the creation of application shortcuts, which can be detected using
the `shortcutitemclick` event from <Titanium.App>.

Use the <Titanium.UI.createShortcut> method to manage shortcut creation.

## Examples

### Simple Shortcut Example

Create a shortcut item and detect its click with the `shortcutitemclick` event.

``` javascript
const win = Ti.UI.createWindow({ backgroundColor: 'grey' });

const shortcut = Ti.UI.createShortcut();
Ti.UI.Shortcut.addEventListener('click', e => {
    console.log(`id: ${e.id}`);

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
