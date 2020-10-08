---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/TabbedBar.yml
---
# Titanium.UI.TabbedBar

<TypeHeader/>

## Overview

A tabbed bar is a button bar that
maintains a state (visually distinguished as a pressed or selected look).
It is closely related to the `ButtonBar` control. See the description of 
[ButtonBar](Titanium.UI.ButtonBar) for information on styling tabbed bars and buttons
bars.

Use the <Titanium.UI.createTabbedBar> method to create a Tabbed Bar.

## Examples

### Simple Tabbed Bar with 3 items

``` js
var bb1 = Ti.UI.createTabbedBar({
  labels: ['One', 'Two', 'Three'],
  backgroundColor: '#336699',
  style: Ti.UI.iOS.SystemButtonStyle.BAR,
  width: 200,
  height: 25,
  top: 50
});
win.add(bb1);
```

### TabGroup like behavior for views instead of windows

``` js
var win = Ti.UI.createWindow({ layout: 'vertical' });
var tabbedBar = Ti.UI.createTabbedBar({
    labels: ['One', 'Two', 'Three'],
    backgroundColor: '#336699',
    height: '10%',
    width: Ti.UI.FILL
});
var scrollView = Ti.UI.createScrollView({
    scrollingEnabled: false,
    height: '90%',
    scrollType: 'horizontal',
    layout: 'horizontal'
});

for (i = 0; i < tabbedBar.labels.length; i++) {
    scrollView.add( Ti.UI.createView({ backgroundColor: '#'+Math.random().toString(16).substr(-6)}))
}

tabbedBar.addEventListener('click', function(e) {
    scrollView.scrollTo(e.index * win.rect.width, 0, {animated: true});
})

win.add(scrollView);
win.add(tabbedBar);
win.open();
```

<ApiDocs/>
