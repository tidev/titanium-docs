# Titanium.UI.ShortcutItem

<ProxySummary/>

## Overview

Allows the creation of application shortcuts, which can be detected using
the `shortcutitemclick` event from <Titanium.App>.

Use the <Titanium.UI.createShortcutItem> method to create a shortcut.

## Examples

### Simple ShortcutItem Example

Create a shortcut item and detect its click with the `shortcutitemclick` event.

    var win = Ti.UI.createWindow({ backgroundColor: 'grey' }),
        btn = Ti.UI.createButton({ title: 'TOGGLE SHORTCUT' }),
        shortcut = Ti.UI.createShortcutItem({
            id: 'test_shortcut',
            title: 'TEST',
            description: 'DESCRIPTION'
        });

    Ti.App.addEventListener('shortcutitemclick', function () {
        win.backgroundColor = 'blue';
    });

    btn.addEventListener('click', function () {
        if (shortcut.visible) {
            win.backgroundColor = 'red';
            shortcut.hide();
        } else {
            win.backgroundColor = 'green';
            shortcut.show();
        }
    });

    win.add(btn);
    win.open();

<ApiDocs/>
