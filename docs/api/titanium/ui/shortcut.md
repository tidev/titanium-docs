---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/Shortcut/Shortcut.yml
---
# Titanium.UI.Shortcut

<TypeHeader/>

## Overview

Allows the creation of application shortcuts, which can be detected using
the `click` event from <Titanium.UI.Shortcut>.

On iOS, shortcuts are only supported on a 3D Touch compatible device.
Use the <Titanium.UI.iOS.forceTouchSupported> property to see if it's supported.

## Examples

### Simple Shortcut Example

Create a shortcut item and detect its click with the `click` event.

``` javascript
const win = Ti.UI.createWindow({ backgroundColor: 'grey' });

// Listen for shortcut item clicks from the end-user.
Ti.UI.Shortcut.addEventListener('click', e => {
    // Event's "item" property indicates which shortcut item was clicked on.
    console.log(`id: ${e.item.id}`);

    // Set background to 'blue' when a shortcut was clicked on.
    win.backgroundColor = 'blue';
});

// Button to add a shortcut item.
const btn = Ti.UI.createButton({ title: 'ADD SHORTCUT' });
btn.addEventListener('click', () => {
    const shortcutItem = Ti.UI.createShortcutItem({
        id: 'test_shortcut',
        title: 'TEST',
        description: 'DESCRIPTION'
    });
    Ti.UI.Shortcut.add(shortcutItem);
});
win.add(btn);

win.open();
```

<ApiDocs/>
