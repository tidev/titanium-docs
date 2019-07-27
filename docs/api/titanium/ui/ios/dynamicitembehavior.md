# Titanium.UI.iOS.DynamicItemBehavior

<TypeHeader/>

## Overview

A dynamic item behavior configures the physics attributes for one or more items. These
attributes, such as density and resistance, affects the behavior of the object when other behaviors,
such as push forces or collisions, are applied to it.  To define a dynamic behavior for an item:

  1. Use the <Titanium.UI.iOS.createDynamicItemBehavior> method to create and define the behavior.
  2. Use the [addItem](Titanium.UI.iOS.DynamicItemBehavior.addItem) method to add items to the behavior.
  3. Add the behavior to an [Animator object](Titanium.UI.iOS.Animator).

## Examples

### Simple Example

The following example create two blocks, which are pushed towards each other.  Because the
red block is more dense and has higher resistance than the blue block, the red block moves
steadily to the left, while the blue block spins around unpredictably.

<img src="images/animator/dynamicitem.gif" height="455" style="border:1px solid black"/>

    var win = Ti.UI.createWindow({backgroundColor: 'white', fullscreen: true});

    // Create an Animator object using the window as the coordinate system
    var animator = Ti.UI.iOS.createAnimator({referenceView: win});

    // Create a red block
    var redBlock = Ti.UI.createView({
        backgroundColor: 'red',
        width: 25,
        height: 25,
        top: 25,
        left: 25
    });

    // Change the physics attributes of the red block
    var redDynamic = Ti.UI.iOS.createDynamicItemBehavior({
        density: 20.0,
        angularResistance: 1.0,
        friction: 1.0,
        resistance: 1.0,
        allowsRotation: false
    });
    redDynamic.addItem(redBlock);

    // Apply a left push to the red block
    var redPush = Ti.UI.iOS.createPushBehavior({
        pushDirection: {x: 2.0, y: 0.0}
    });
    redPush.addItem(redBlock);

    // Create a blue block
    var blueBlock = Ti.UI.createView({
        backgroundColor: 'blue',
        width: 50,
        height: 50,
        top: 25,
        right: 25
    });

    // Change the physics attributes of the blue block
    var blueDynamic = Ti.UI.iOS.createDynamicItemBehavior({
        elasticity: 1.0,
    });
    blueDynamic.addItem(blueBlock);

    // Apply a right push to the blue block
    var bluePush = Ti.UI.iOS.createPushBehavior({
        pushDirection: {x: -2.0, y: 0.0}
    });
    bluePush.addItem(blueBlock);

    // Create the collision behavior so the items can collide
    var collision = Ti.UI.iOS.createCollisionBehavior();
    collision.addItem(redBlock);
    collision.addItem(blueBlock);

    animator.addBehavior(redDynamic);
    animator.addBehavior(redPush);
    animator.addBehavior(blueDynamic);
    animator.addBehavior(bluePush);
    animator.addBehavior(collision);

    // Start the animation when the window opens
    win.addEventListener('open', function(e){
        animator.startAnimator();
    });

    win.add(redBlock);
    win.add(blueBlock);
    win.open();

<ApiDocs/>
