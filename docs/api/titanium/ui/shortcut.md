# Titanium.UI.Shortcut

<TypeHeader/>

## Overview

Allows the creation of application shortcuts, which can be detected using
the `shortcutitemclick` event from <Titanium.App>.

Use the <Titanium.UI.createShortcut> method to manage shortcut creation.

## Examples

### Simple Shortcut Example

Create a shortcut item and detect its click with the `shortcutitemclick` event.

    const win = Ti.UI.createWindow({ backgroundColor: 'grey' }),
    const btn = Ti.UI.createButton({ title: 'ADD SHORTCUT' }),

    const shortcut = Ti.UI.createShortcut();
    const shortcutItem = Ti.UI.createShortcutItem({
        id: 'test_shortcut',
        title: 'TEST',
        description: 'DESCRIPTION'
    });

    Ti.UI.Shortcut.addEventListener('click', e => {
        console.log(`id: ${e.id}`);

        // Set background to 'blue' on shortcut click event.
        win.backgroundColor = 'blue';
    });

    btn.addEventListener('click', () => {

        // Add shortcut.
        shortcut.add(shortcutItem);
    });

    win.add(btn);
    win.open();

<ApiDocs/>
