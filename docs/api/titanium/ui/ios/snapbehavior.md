# Titanium.UI.iOS.SnapBehavior

<TypeHeader/>

## Overview

A snap behavior specifies how an item moves towards a specified point with a spring-like
effect, ending with an oscillation.

  1. Use the <Titanium.UI.iOS.createSnapBehavior> method to create the behavior.
  2. Set the [item](Titanium.UI.iOS.SnapBehavior.item) and
     [snapPoint](Titanium.UI.iOS.SnapBehavior.snapPoint) properties.
  3. Add the behavior to an [Animator object](Titanium.UI.iOS.Animator).

## Examples

### Simple Example

The following example snaps the block to the location of a click on the window.

<img src="./snapbehavior.gif" height="455" style="border:1px solid black"/>

``` js
var win = Ti.UI.createWindow({backgroundColor: 'white', fullscreen: true});

// Create an Animator object using the window as the coordinate system
var animator = Ti.UI.iOS.createAnimator({referenceView: win});

var block = Ti.UI.createView({
    width: 100,
    height: 100,
    backgroundColor: 'blue'
});

// Snap to the top-left corner when the app starts
var snap = Ti.UI.iOS.createSnapBehavior({
    item: block,
    snapPoint: {x: 0, y: 0},
});
animator.addBehavior(snap);

// Snap the block to the point of the click event
win.addEventListener('click', function(e){
    snap.snapPoint = {x: e.x, y: e.y};
    snap.damping = Math.random();
});

// Start the animation when the window opens
win.addEventListener('open', function(e){
    animator.startAnimator();
});

win.add(block);
win.open();
```

<ApiDocs/>
