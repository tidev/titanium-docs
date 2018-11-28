---
breadcrumbLabel: Animator
sidebar: auto
---

# Titanium.UI.iOS.Animator

<ProxySummary/>

## Overview

The animator provides physics-related capabilities and animations using the iOS physics engine.
Each animator is independent of other animators you create.  An animator is comprised of
behaviors and items. Behaviors define the rules of the animation, while items are the
view objects to be animated. An item in the animator can be given
multiple behaviors as long as those behaviors belong to the same animator.

To use these dynamic animations, first create the items to animate, then:

**1.** Create an animator using the <Titanium.UI.iOS.createAnimator> method. 

**2.** Set the [referenceView](Titanium.UI.iOS.Animator.referenceView) property to establish the
   coordinate system for the animations.

**3.** Create and add items to one or more of the following behaviors:

  * <Titanium.UI.iOS.AnchorAttachmentBehavior>
  * <Titanium.UI.iOS.CollisionBehavior>
  * <Titanium.UI.iOS.DynamicItemBehavior>
  * <Titanium.UI.iOS.GravityBehavior>
  * <Titanium.UI.iOS.PushBehavior>
  * <Titanium.UI.iOS.SnapBehavior>
  * <Titanium.UI.iOS.ViewAttachmentBehavior>

**4.** Add these behaviors to the animator with the [addBehavior](Titanium.UI.iOS.Animator.addBehavior) method.

**5.** Start the animator with [startAnimator](Titanium.UI.iOS.Animator.startAnimator) method.

Once all items are at rest, the animator automatically pauses, and resumes if a behavior
parameter changes, or a behavior or item is added or removed.

See the behaviors listed above for examples of animating items.

### Reference View

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

<ApiDocs/>
