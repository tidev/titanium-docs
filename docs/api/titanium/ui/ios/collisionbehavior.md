# Titanium.UI.iOS.CollisionBehavior

<ProxySummary/>

## Overview

A collision behavior specifies the behavior when items collide with each other and boundaries.
To define a collision behavior:

  1. Use the <Titanium.UI.iOS.createCollisionBehavior> method to create and define the behavior.
  2. Use the [addItem](Titanium.UI.iOS.CollisionBehavior.addItem) method to add items to the behavior.
  3. Use the [addBoundary](Titanium.UI.iOS.CollisionBehavior.addBoundary) method to add custom
     boundaries for the item to collide with. By default, the behavior uses the Animator
     object's reference view as the boundary.
  4. Add the behavior to an [Animator object](Titanium.UI.iOS.Animator).

## Examples

### Simple Example

The following example creates many blocks scattered across the top of the window, which
start falling after the window opens.  The item and boundary collisions are reported to the
console.

<img src="images/animator/collision.gif" height="455" style="border:1px solid black"/>

    var win = Ti.UI.createWindow({backgroundColor: 'white', fullscreen: true});

    // Create an Animator object using the window as the coordinate system
    var animator = Ti.UI.iOS.createAnimator({referenceView: win});

    // Create a default collision behavior, using the window edges as boundaries
    var collision = Ti.UI.iOS.createCollisionBehavior();

    // Listen for collisions
    function report(e) {
        Ti.API.info(JSON.stringify(e.type));
    };
    collision.addEventListener('itemcollision', report);
    collision.addEventListener('boundarycollision', report);

    // Simulate Earth's gravity
    var gravity = Ti.UI.iOS.createGravityBehavior({
        gravityDirection: {x: 0.0, y: 1.0}
    });

    var WIDTH = Ti.Platform.displayCaps.platformWidth;
    var HEIGHT = Ti.Platform.displayCaps.platformHeight;

    // Create a bunch of random blocks; add to the window and behaviors
    var blocks = [];   
    for (var i = 0; i < 25; i++) {
        var r = Math.round(Math.random() * 255);
        var g = Math.round(Math.random() * 255);
        var b = Math.round(Math.random() * 255);
        var rgb = 'rgb(' + r +"," + g + "," + b + ")";

        blocks[i] = Ti.UI.createView({
            width: 25,
            height: 25,
            top: Math.round(Math.random() * (HEIGHT / 4) + 25),
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

    win.open();

<ApiDocs/>
