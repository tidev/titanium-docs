# Titanium.UI.NavigationWindow

<ProxySummary/>

## Overview

You create a `NavigationWindow` with the <Titanium.UI.createNavigationWindow> factory method or
a `<NavigationWindow>` Alloy element.

All `NavigationWindow` objects must have at least one root window that cannot be removed. When
creating a `NavigationWindow` with the factory method, you must set its `window` property to the
root level window. Equivalently, in an Alloy application, insert a `<Window>` element as a child of the
`<NavigationWindow>` element. See examples below.

This object is not meant to be added to other windows. However, it can be used within a <Titanium.UI.iPad.SplitWindow>.

## Examples

### Simple Navigation Window

Creates a navigation window with the first window colored red.
Press the button to open the blue window.
Use the back button to return to the red root window.

    var win2 = Titanium.UI.createWindow({
        backgroundColor: 'red',
        title: 'Red Window'
    });

    var win1 = Titanium.UI.createNavigationWindow({
       window: win2
    });

    var win3 = Titanium.UI.createWindow({
        backgroundColor: 'blue',
        title: 'Blue Window'
    });

    var button = Titanium.UI.createButton({
        title: 'Open Blue Window'
    });
    button.addEventListener('click', function(){
        win1.openWindow(win3, {animated:true});
    });

    win2.add(button);
    var button2 = Titanium.UI.createButton({
        title: 'Close Blue Window'
    });
    button2.addEventListener('click', function(){
        win1.closeWindow(win3, {animated:false}); //win3.close() will also work!!
    });

    win3.add(button2);
    win1.open();

### Alloy XML Markup

Previous example as two Alloy view-controllers.  Requires Alloy 1.2.2 and later.

app/views/index.xml:

    <Alloy>
        <NavigationWindow id="win1">
            <Window id="win2" title="Red Window" backgroundColor="red">
                <Button id="button" onClick="openBlueWindow">Open Blue Window</Button>
            </Window>
        </NavigationWindow>
    </Alloy>

app/controllers/index.js:

    function openBlueWindow(e) {
        var win3 = Alloy.createController('bluewin').getView();
        $.win1.openWindow(win3);
    }

    $.win1.open();

app/views/bluewin.xml:

    <Alloy>
        <Window id="win3" title="Blue Window" backgroundColor="blue">
            <Button onClick="closeWindow">Close Window</Button>
        </Window>
    </Alloy>

app/controllers/bluewin.js:

    function closeWindow(){
        $.win3.close();
    }

<ApiDocs/>
