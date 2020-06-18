# Titanium.UI.iOS.GravityBehavior

<TypeHeader/>

## Overview

A gravity behavior configures the gravity vector of one or more items. To define a gravity
behavior:

  1. Use the <Titanium.UI.iOS.createGravityBehavior> method to create and define the behavior.
  2. To define a gravity vector, either set the
     [angle](Titanium.UI.iOS.GravityBehavior.angle) and
     [magnitude](Titanium.UI.iOS.GravityBehavior.magnitude) properties, or set the
     [gravityDirection](Titanium.UI.iOS.GravityBehavior.gravityDirection) property.
  3. Use the [addItem](Titanium.UI.iOS.GravityBehavior.addItem) method to add items to the behavior.
  4. Add the behavior to an [Animator object](Titanium.UI.iOS.Animator).

You can only define one gravity behavior per animator.

## Examples

### Simple Example

The following example creates many random blocks.  The initial gravitational force pulls the
blocks downward. Clicking on the `Change` button generates a new random gravity vector,
which pulls the blocks in a random direction.

![Gravity](./gravity.gif)

``` js
var win = Ti.UI.createWindow({backgroundColor: 'white', fullscreen: true});

// Create an Animator object using the window as the coordinate system
var animator = Ti.UI.iOS.createAnimator({referenceView: win});

// Create a default collision behavior, using the window edges as boundaries
var collision = Ti.UI.iOS.createCollisionBehavior();

// Simulate Earth's gravity
var gravity = Ti.UI.iOS.createGravityBehavior({
    gravityDirection: {x: 0.0, y: 1.0}
});

var WIDTH = Ti.Platform.displayCaps.platformWidth;
var HEIGHT = Ti.Platform.displayCaps.platformHeight;

// Create a bunch of random blocks; add to the window and behaviors
var blocks = [];
for (var i = 0; i < 20; i++) {
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    var rgb = 'rgb(' + r +"," + g + "," + b + ")";

    blocks[i] = Ti.UI.createView({
        width: 25,
        height: 25,
        top: Math.round(Math.random() * (HEIGHT - 25) + 25),
        left: Math.round(Math.random() * (WIDTH - 25) + 25),
        backgroundColor: rgb
    });
    win.add(blocks[i]);
    collision.addItem(blocks[i]);
    gravity.addItem(blocks[i]);
}

animator.addBehavior(collision);
animator.addBehavior(gravity);
            
// Start the animation when the window opens
win.addEventListener('open', function(e){
    animator.startAnimator();
});

// Change the gravity vector when the button is clicked
var button = Ti.UI.createButton({title: 'Change'});
button.addEventListener('click', function(e){
    gravity.gravityDirection = {
        x: (1 - Math.random() * 2),
        y: (1 - Math.random() * 2)
    };
    Ti.API.info('gravity vector: ' + JSON.stringify(gravity.gravityDirection));
});
win.add(button);
win.open();
```

<ApiDocs/>
