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

Use the <Titanium.UI.createAnimation> method to create an animation object.

Note that when you animate a view's size or position, the actual layout properties (such as
`top`, `left`, `width`, `height`) are not changed by the animation. See the description of the
[animate](Titanium.UI.View.animate) method for more information.

### iOS Platform Notes

iOS supports both 2D and 3D matrix transformations in animations.

In iOS, you can also specify an animation curve or *easing function* to control the pace of the
animation. To use an easing function, set the animation's `curve` property to one of the
`ANIMATION_CURVE` constants defined in <Titanium.UI>. For example,
[ANIMATION_CURVE_EASE_IN](Titanium.UI.ANIMATION_CURVE_EASE_IN) specifies an animation that
starts slowly and then speeds up.

Finally, iOS also supports *transitions* between windows or views. You can create a transition
by creating an animation object and setting the `view` property to the view you want to
transition to. The `transition` property specifies the transition effect to apply. Use one of
the transition style constants defined in <Titanium.UI.iOS.AnimationStyle>.

### Android Platform Notes

Android supports 2D matrix transformations. Note that the
[2DMatrix.rotate](Titanium.UI.2DMatrix.rotate) method operates differently on Android. Called
with a single argument, it rotates from zero to the specified angle. That is, it ignores any
existing rotation. Called with two arguments, it interprets the first argument as a "from"
angle and the second argument as a "to" angle.

Android doesn't support any animation curves or easing functions. Animations always interpolate
linearly between the start state and the end state.

## Examples

### Simple Animation Applied to a View

Create a simple animation and apply it to the view.  In this example, the view will animate
from red to black to orange over 2 seconds.

    var view = Titanium.UI.createView({
      backgroundColor:'red'
    });
    var animation = Titanium.UI.createAnimation();
    animation.backgroundColor = 'black';
    animation.duration = 1000;
    var animationHandler = function() {
      animation.removeEventListener('complete',animationHandler);
      animation.backgroundColor = 'orange';
      view.animate(animation);
    };
    animation.addEventListener('complete',animationHandler);
    view.animate(animation);

### Animation Using Matrix Transforms

The following example uses a transformation matrix to animate
a view when the view is clicked. The animation rotates and scales
the view, then returns it to its original size and position. The
entire animation is repeated three times.

    var box = Ti.UI.createView({
      backgroundColor : 'red',
      height : '100',
      width : '100'
    });
    win.add(box);

    box.addEventListener('click', function() {
      var matrix = Ti.UI.create2DMatrix();
      matrix = matrix.rotate(180);
      matrix = matrix.scale(2, 2);
      var a = Ti.UI.createAnimation({
        transform : matrix,
        duration : 2000,
        autoreverse : true,
        repeat : 3
      });
      box.animate(a);
    });
    
    win.add(box);

### Using an anchorPoint (Android and iOS)

Create a button and a blue square view. For each click of the button, apply a 90 degree
rotation animation pivoted at one of a series of anchor points. In particular, note that
an anchor point is configured using the <Titanium.UI.Animation.anchorPoint> property for
Android and the <Titanium.UI.View.anchorPoint> property for iOS.

    var animationType = [
      { name: 'Top Left', anchorPoint: {x:0, y:0} },
      { name: 'Top Right', anchorPoint: {x:1, y:0} },
      { name: 'Bottom Left', anchorPoint: {x:0, y:1} },
      { name: 'Bottom Right', anchorPoint: {x:1, y:1} },
      { name: 'Center', anchorPoint: {x:0.5, y:0.5} }
    ];
    var animationTypeLength = animationType.length;
    var animationCount = 0;
    var animationTypePointer = 0;

    var t = Ti.UI.create2DMatrix();
    t = t.rotate(90);

    // animation properties
    var a = {
      transform: t,
      duration: 2000,
      autoreverse: true
    };

    Ti.UI.backgroundColor = 'white';
    var win = Ti.UI.createWindow();

    var view = Ti.UI.createView({
      backgroundColor:'#336699',
      width:100, height:100
    });
    win.add(view);

    var button = Ti.UI.createButton({
      title:'Animate ' + animationType[animationTypePointer].name,
      height: (Ti.UI.Android) ? 80 : 40,
      width: (Ti.UI.Android) ? 300 : 200,
      top:30
    });
    win.add(button);

    function updateButton(name){
      button.title = 'Animate ' + name;
    }

    button.addEventListener('click', function(){
      // set new anchorPoint on animation for Android
      a.anchorPoint = animationType[animationTypePointer].anchorPoint;

      // set new anchorPoint on view for iOS
      view.anchorPoint = animationType[animationTypePointer].anchorPoint;

      animationCount++;

      // determine position of next object in animationType array or return to first item
      // using modulus operator
      animationTypePointer = animationCount % animationTypeLength;

      // animate view, followed by callback to set next button title
      view.animate(a, function(){
        updateButton(animationType[animationTypePointer].name);
      });
    });

    win.open();

<ApiDocs/>
