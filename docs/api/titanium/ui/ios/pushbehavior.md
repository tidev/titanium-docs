# Titanium.UI.iOS.PushBehavior

<TypeHeader/>

## Overview

A push behavior configures the continuous or instaneous force to apply to one or more items. To
define a push behavior:

  1. Use the <Titanium.UI.iOS.createPushBehavior> method to create and define the behavior.
  2. To define a force vector, either set the
     [angle](Titanium.UI.iOS.PushBehavior.angle) and
     [magnitude](Titanium.UI.iOS.PushBehavior.magnitude) properties, or set the
     [pushDirection](Titanium.UI.iOS.PushBehavior.pushDirection) property.
  3. Use the [addItem](Titanium.UI.iOS.PushBehavior.addItem) method to add items to the behavior.
  4. Add the behavior to an [Animator object](Titanium.UI.iOS.Animator).

## Examples

### Simple Example

The following example generates a random push force on the block when it stops.

<img src="./pushforce.gif" height="455" style="border:1px solid black"/>

``` js
var win = Ti.UI.createWindow({backgroundColor: 'white', fullscreen: true});

// Create an Animator object using the window as the coordinate system
var animator = Ti.UI.iOS.createAnimator({referenceView: win});

var block = Ti.UI.createView({
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    transform: Ti.UI.createMatrix2D({ rotate: 45 })
});

// Create a default collision behavior, using the window edges as boundaries
var collision = Ti.UI.iOS.createCollisionBehavior();
collision.addItem(block);
animator.addBehavior(collision);

// Push the block down when the application first starts
var push = Ti.UI.iOS.createPushBehavior({
    pushDirection: {x: 0.0, y: 1.0},
    pushMode: Ti.UI.iOS.PUSH_MODE_INSTANTANEOUS
});
push.addItem(block);
animator.addBehavior(push);

// Apply a new push behavior when the item stops
animator.addEventListener('pause', function(e){
    push.angle = 2 * Math.PI * Math.random();
    push.magnitude = Math.random() * 5 + 5;
    push.active = true;
});

animator.addEventListener('resume', function(e){
    Ti.API.info(JSON.stringify(
        'push force: ' + push.magnitude * 100 + " points/s^2 @ "
        + (push.angle * 360 / (2 * Math.PI)) + " degrees")
    );
});

// Start the animation when the window opens
win.addEventListener('open', function(e){
    animator.startAnimator();
});

win.add(block);
win.open();
```

<ApiDocs/>
