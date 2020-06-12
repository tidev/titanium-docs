# Titanium.UI.iOS.AnchorAttachmentBehavior

<TypeHeader/>

## Overview

An anchor attachment behavior creates a dynamic connection between an anchor point and an item.
To define an anchor attachment behavior:

  1. Use the <Titanium.UI.iOS.createAnchorAttachmentBehavior> method to create a behavior.
  2. Set the [anchor](Titanium.UI.iOS.AnchorAttachmentBehavior.anchor) and
     [item](Titanium.UI.iOS.AnchorAttachmentBehavior.item) properties.
  3. Add the behavior to the [Animator object](Titanium.UI.iOS.Animator).

To create a dynamic connection between two items, use <Titanium.UI.iOS.ViewAttachmentBehavior>.

## Examples

### Simple Example

The following example creates a red block and anchors it to a point near the top-center of
the window.  Using a gravitational force, the red block swings like a pendulum.

<img src="images/animator/anchorattachment.gif" height="200" style="border:1px solid black"/>

``` js
var win = Ti.UI.createWindow({backgroundColor: 'white', fullscreen: true});

// Create an Animator object using the window as the coordinate system
var animator = Ti.UI.iOS.createAnimator({referenceView: win});

// Create a red block to animate
var redBlock = Ti.UI.createView({
    backgroundColor: 'red',
    width: 25,
    height: 25,
    top: 10,
    left: 25
});

var WIDTH = Ti.Platform.displayCaps.platformWidth;

// Anchor the red block to a point near the top-center
var anchor = Ti.UI.iOS.createAnchorAttachmentBehavior({
    anchor: {x: WIDTH/2, y: 10},
    item: redBlock
});
animator.addBehavior(anchor);

// Simulate Earth's gravity to allow the pendulum to swing
var gravity = Ti.UI.iOS.createGravityBehavior({
    gravityDirection: {x: 0.0, y: 1.0}
});
gravity.addItem(redBlock);
animator.addBehavior(gravity);

// Start the animation when the window opens
win.addEventListener('open', function(e){
    animator.startAnimator();
});

win.add(redBlock);
win.open();
```


<ApiDocs/>
