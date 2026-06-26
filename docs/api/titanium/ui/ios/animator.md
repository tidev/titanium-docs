---
title: Titanium.UI.iOS.Animator
properties:
  - name: behaviors
    type: Array<Titanium.Proxy>
    summary: Behaviors associated with this animator.
  - name: referenceView
    type: Titanium.UI.View
    summary: Titanium View object to initialize as the reference view for the animator.
    description: >
      <p>When adding behavior and dynamic items to the animator, the animator
      bases its<br>

      coordindate system on the reference view.</p>
  - name: running
    type: Boolean
    summary: >-
      Returns <code>true</code> if the animator is running else
      <code>false</code>.
methods:
  - name: addBehavior
    summary: Adds a dynamic behavior to the animator.
    description: >
      <p>Specify an instance of one of the following Titanium behavior
      proxies:</p>

      <ul>

      <li><a
      href="/api/titanium/ui">Titanium.UI.iOS.AnchorAttachmentBehavior</a></li>

      <li><a href="/api/titanium/ui">Titanium.UI.iOS.CollisionBehavior</a></li>

      <li><a
      href="/api/titanium/ui">Titanium.UI.iOS.DynamicItemBehavior</a></li>

      <li><a href="/api/titanium/ui">Titanium.UI.iOS.GravityBehavior</a></li>

      <li><a href="/api/titanium/ui">Titanium.UI.iOS.PushBehavior</a></li>

      <li><a href="/api/titanium/ui">Titanium.UI.iOS.SnapBehavior</a></li>

      <li><a
      href="/api/titanium/ui">Titanium.UI.iOS.ViewAttachmentBehavior</a></li>

      </ul>
    parameters:
      - name: behavior
        type: Titanium.Proxy
        summary: Behavior to add to the animator.
  - name: removeAllBehaviors
    summary: Removes all behaviors from this animator.
  - name: removeBehavior
    summary: Removes the specified behavior from the animator.
    description: >
      <p>Specifiy an instance of one of the following Titanium behavior
      proxies:</p>

      <ul>

      <li><a
      href="/api/titanium/ui">Titanium.UI.iOS.AnchorAttachmentBehavior</a></li>

      <li><a href="/api/titanium/ui">Titanium.UI.iOS.CollisionBehavior</a></li>

      <li><a
      href="/api/titanium/ui">Titanium.UI.iOS.DynamicItemBehavior</a></li>

      <li><a href="/api/titanium/ui">Titanium.UI.iOS.GravityBehavior</a></li>

      <li><a href="/api/titanium/ui">Titanium.UI.iOS.PushBehavior</a></li>

      <li><a href="/api/titanium/ui">Titanium.UI.iOS.SnapBehavior</a></li>

      <li><a
      href="/api/titanium/ui">Titanium.UI.iOS.ViewAttachmentBehavior</a></li>

      </ul>
    parameters:
      - name: behavior
        type: Titanium.Proxy
        summary: Behavior to remove from the animator.
  - name: startAnimator
    summary: Starts the animation behaviors.
  - name: stopAnimator
    summary: Stops the animation behaviors.
  - name: updateItemUsingCurrentState
    summary: >-
      Updates the animator's state information with the current state of the
      specified item.
    description: >
      <p>When an item is first added to the animator, the animator reads the
      initial state of the<br>

      item, then takes responsibility for updating it.  If you actively make
      changes to the item's properties,<br>

      such as changing its position or dimensions, use this method to update the
      item's new state.</p>
    parameters:
      - name: item
        type: Titanium.UI.View
        summary: Item to update with new state information.
events:
  - name: pause
    summary: Fired when the animator paused its animations.
  - name: resume
    summary: Fired when the animator resumes its animations.
---

# Titanium.UI.iOS.Animator

Provides support for the built-in iOS dynamic animations

The animator provides physics-related capabilities and animations using the iOS physics engine.
Each animator is independent of other animators you create.  An animator is comprised of
behaviors and items. Behaviors define the rules of the animation, while items are the
view objects to be animated. An item in the animator can be given
multiple behaviors as long as those behaviors belong to the same animator.

To use these dynamic animations, first create the items to animate, then:

**1.** Create an animator using the [Titanium.UI.iOS.createAnimator](/api/titanium/ui) method. 

**2.** Set the [referenceView](Titanium.UI.iOS.Animator.referenceView) property to establish the
   coordinate system for the animations.

**3.** Create and add items to one or more of the following behaviors:

  * [Titanium.UI.iOS.AnchorAttachmentBehavior](/api/titanium/ui)
  * [Titanium.UI.iOS.CollisionBehavior](/api/titanium/ui)
  * [Titanium.UI.iOS.DynamicItemBehavior](/api/titanium/ui)
  * [Titanium.UI.iOS.GravityBehavior](/api/titanium/ui)
  * [Titanium.UI.iOS.PushBehavior](/api/titanium/ui)
  * [Titanium.UI.iOS.SnapBehavior](/api/titanium/ui)
  * [Titanium.UI.iOS.ViewAttachmentBehavior](/api/titanium/ui)

**4.** Add these behaviors to the animator with the [addBehavior](Titanium.UI.iOS.Animator.addBehavior) method.

**5.** Start the animator with [startAnimator](Titanium.UI.iOS.Animator.startAnimator) method.

Once all items are at rest, the animator automatically pauses, and resumes if a behavior
parameter changes, or a behavior or item is added or removed.

See the behaviors listed above for examples of animating items.

#### Reference View

The Titanium view object set to the Animator's [referenceView](Titanium.UI.iOS.Animator.referenceView)
property establishes the coordinate system for the animation behaviors and items.  Each item that
needs to be animated must be a child of the reference view.

By default, when you create a collision behavior, the behavior uses the edge's of the reference
view as its boundary, so any item within this view cannot be pushed out of it.

Use the following lists as references when specifying your animation behaviors.

**Points**

The following list notes the location of notable points in the coordinate system, where WIDTH and
HEIGHT are the width and height of the reference view, respectively.

  * Top-left corner: (0,0)
  * Top-right corner: (WIDTH, 0)
  * Center: (WIDTH/2, HEIGHT/2)
  * Bottom-left corner: (0, HEIGHT)
  * Bottom-right corner: (WIDTH, HEIGHT)

Note that on iOS a point is equivalent to a display pixel.

**Vectors**

Gravity and push forces may be specified as vectors with the `gravityDirection` and
`pushDirection` properties, respectively.  The following list notes the direction and its
corresponding vector:

  * Left: (-x,0)
  * Right: (+x,0)
  * Up: (0,-y)
  * Down: (0,+y)

**Angles**

Gravity and push forces may be specified with the `angle` and `magnitude` properties.
Specify all angle values as radians (360 degrees = 2 * pi radians).  The following list notes
the direction and its corresponding angle:

  * Right: 0 or 2 * pi
  * Down: pi / 2
  * Left: pi
  * Up: pi / 2 * 3


**Extends:** `Titanium.Proxy` · **Since:** 3.2.0, 3.2.0, 9.2.0 · **Platforms:** iphone, ipad, macos

<ApiProperties />

<ApiMethods />

<ApiEvents />

