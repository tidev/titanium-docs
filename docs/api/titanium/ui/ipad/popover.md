---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/iPad/Popover.yml
---
# Titanium.UI.iPad.Popover

<TypeHeader/>

## Overview

A popover is created using the <Titanium.UI.iPad.createPopover> method or **`<Popover>`** Alloy element.

Popovers are used to present information temporarily, but in a way that does not take over
the entire screen in the way that a modal view does. The popover content is layered on top of
the existing content in a special type of window. The popover remains visible until the user
taps outside of the popover window or it is explicitly dismissed.

Do not add top-level view containers, such as a `SplitWindow` or `TabGroup`, to a popover.
Adding top-level view containers may have unintended side effects. See the [contentView](Titanium.UI.iPad.Popover.contentView)
property for more information.

## Examples

### Simple Popover with a Title and Right Button

In this example, we create a simple popover and position it near the button.

``` js
var win = Ti.UI.createWindow({backgroundColor: 'white'});

var button = Ti.UI.createButton({title: 'Open Popover!'});
button.addEventListener('click', function(e){
    popover.show({ view: button });
})
win.add(button);

var rightButton = Ti.UI.createButton({title: 'Robin'});
rightButton.addEventListener('click', function(e){
    alert("But green's the color of spring.");
});

var contentWindow = Ti.UI.createWindow({
    rightNavButton: rightButton,
    title: 'Kermit'
});
contentWindow.add(Ti.UI.createLabel({text: "It's not easy being green."}));

var popover = Ti.UI.iPad.createPopover({
    backgroundColor: 'green',
    contentView: Ti.UI.createNavigationWindow({
        width: 250,
        height: 100,
        window: contentWindow
    })
});

win.open();
```

### Alloy XML Markup

Previous example as an Alloy project.

`app/views/index.xml`:
``` xml
<Alloy>
    <Window>
        <Button id="button" onClick="openPopover">Open Popover!</Button>
    </Window>
</Alloy>
```

`app/controllers/index.js`:
``` js
function openPopover() {
    var popover = Alloy.createController('popover').getView();
    popover.show({view:$.button});
};

$.index.open();
```

`app/views/popover.xml`:
``` xml
<Alloy>
    <Popover backgroundColor='green'>
        <ContentView>
            <NavigationWindow height='100' width='250'>
                <Window title='Kermit'>
                    <RightNavButton onClick="showAlert" title="Robin" />
                    <Label>It's not easy being green.</Label>
                </Window>
            </NavigationWindow>
        </ContentView>
    </Popover>
</Alloy>
```

`app/controllers/popover.js`:
``` js
function showAlert(e) {
    alert('But green is the color of spring.');
};

// Prior to Alloy 1.1.0, the rightNavButton property was set in the controller.
// var button = Ti.UI.createButton({title: 'Robin'});
// button.addEventListener('click', showAlert);
// $.popover.rightNavButton = button;
```

<ApiDocs/>
