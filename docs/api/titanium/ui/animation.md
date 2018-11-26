---
breadcrumbLabel: Animation
sidebar: auto
---

# Titanium.UI.Animation

<ProxySummary/>

## Overview

An animation object describes the properties of an animation. At its most basic, an animation
object represents a single-phase animation with an end state and a duration.

When [animate](Titanium.UI.View.animate) is called on a [View](Titanium.UI.View), the view is
animated from its current state to the state described by the animation object. The properties
that can be animated include the view's position, size, colors, transformation matrix and opacity.

Animations can be set to reverse themselves automatically on completion, and to repeat a given
number of times. For more complicated effects, multiple animations can be combined in sequence,
starting one animation when the previous animation completes.

Use the [createAnimation](Titanium.UI.createAnimation) method to create an animation object.

Note that when you animate a view's size or position, the actual layout properties (such as
`top`, `left`, `width`, `height`) are not changed by the animation. See the description of the
[animate](Titanium.UI.View.animate) method for more information.

### iOS Platform Notes

iOS supports both 2D and 3D matrix transformations in animations.

In iOS, you can also specify an animation curve or *easing function* to control the pace of the
animation. To use an easing function, set the animation's `curve` property to one of the
`ANIMATION_CURVE` constants defined in [Titanium.UI](Titanium.UI). For example,
[ANIMATION_CURVE_EASE_IN](Titanium.UI.ANIMATION_CURVE_EASE_IN) specifies an animation that
starts slowly and then speeds up.

Finally, iOS also supports *transitions* between windows or views. You can create a transition
by creating an animation object and setting the `view` property to the view you want to
transition to. The `transition` property specifies the transition effect to apply. Use one of
the transition style constants defined in [Titanium.UI.iOS.AnimationStyle](Titanium.UI.iOS.AnimationStyle).

### Android Platform Notes

Android supports 2D matrix transformations. Note that the
[2DMatrix.rotate](Titanium.UI.2DMatrix.rotate) method operates differently on Android. Called
with a single argument, it rotates from zero to the specified angle. That is, it ignores any
existing rotation. Called with two arguments, it interprets the first argument as a "from"
angle and the second argument as a "to" angle.

Android doesn't support any animation curves or easing functions. Animations always interpolate
linearly between the start state and the end state.

<ApiDocs/>
