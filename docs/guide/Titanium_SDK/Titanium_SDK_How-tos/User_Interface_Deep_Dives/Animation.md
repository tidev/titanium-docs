---
title: Animation
weight: '60'
---

# Animation

## Objective

Animation can be "eye-candy" or can direct users to pay attention to some portion of your app. Either way, animations add visual interest and (when used appropriately) add professionalism to your app. In this section, you will learn how to animate the properties of UI components, use 2D and 3D matrices, and implement transitions on iOS.

## Contents

### Basic animations

Basic animations involve altering the properties of UI elements, such as their top/left coordinates, background colors, opacity, and so forth. You animate these property changes using the `animate()` method available to any component that inherits from `Ti.UI.View`. This method accepts two parameters: a [Ti.UI.Animation](#!/api/Titanium.UI.Animation) object (or Dictionary) and an optional callback function. The animation object describes the properties the component will have when the animation finishes. The callback function is invoked when the animation finishes.

```
// box is a Ti.UI.View, when clicked, it fades out of view in 2 seconds, then fades back into view
box.addEventListener('click', function(){
  box.animate({
    opacity: 0,
    duration: 2000
  }, function(){
    box.animate({
      opacity: 1,
      duration: 2000
    });
  });
});
```

Alternatively, you could use Animation objects to do the same thing:

```javascript
var a = Ti.UI.createAnimation({
  opacity: 0,
  duration: 2000
});
var b = Ti.UI.createAnimation({
  opacity: 1,
  duration: 2000
});
box.addEventListener('click', function(){
  box.animate(a, function(){
    box.animate(b);
  });
});
```

We explicitly coded a function to reverse the animation effect to demonstrate how to use the callback parameter. In practice, if all you're doing is reversing an animation, simply set `autoreverse=true` on the initial animation operation and don't pass the callback function. We use this technique in the matrix transformations below.

Animation objects are most useful when you want to reuse a particular animation effect with multiple objects. You define the animation effect once and simply apply it to each component.

### Matrix animations

Matrix animations are also called [transformations](http://www.willamette.edu/~gorr/classes/GeneralGraphics/Transforms/transforms2d.htm). Consider the set of x/y coordinates that represent the "edges" of an element. A matrix transformation mathematically alters those coordinates to alter the element. You can perform 2-dimensional transformations (in the x/y plane) and 3-dimensional transformations (in the x/y/z space). With either, you can scale, rotate, move (translate), and skew (shear) a component. (See the API docs for further transformation possibilities.)

### 2D matrix animations

2D matrix animations are supported in Titanium on both iOS and Android. Such transformations operate in two dimensional space (in the plane represented by the surface of the device).

To implement a transformation, you'll need to create an instance of the [Ti.UI.2DMatrix](#!/api/Titanium.UI.2DMatrix) object and set the target properties for your component. Then, you create an Animation object and set its `transform` property to equal your matrix object.

```javascript
var matrix2d = Ti.UI.create2DMatrix();
matrix2d = matrix2d.rotate(20); // in degrees
matrix2d = matrix2d.scale(1.5); // scale to 1.5 times original size
var a = Ti.UI.createAnimation({
  transform: matrix2d,
  duration: 2000,
  autoreverse: true,
  repeat: 3
});
box.animate(a); // set the animation in motion
```

As shown, you can perform multiple transformations in a single operation. Sometimes, the order in which you do so will control the visual effect created.

### 3D matrix animations

3D matrix animations are translations in three dimensions. Again, you can rotate, scale, translate and so forth. Keep in mind that you won't be working with 3D virtual objects. So, they will have no "back" sides to show. 3D transformations are supported on iOS only. See the [Titanium.UI.3DMatrix](#!/api/Titanium.UI.3DMatrix) API reference guide for more information.

```javascript
var matrix3d = Ti.UI.create3DMatrix();
// In next statement, the first arg is in degrees and the next three define an xyz vector describing the transformation
matrix3d = matrix3d.rotate(180, 1, 1, 0);
matrix3d = matrix3d.scale(2, 2, 2); // scale factor in the xyz axes
var a = Ti.UI.createAnimation({
  transform: matrix3d,
  duration: 2000,
  autoreverse: true,
  repeat: 3
});
box.animate(a); // set the animation in motion
```

### Transitions

Transitions are another iOS-only feature. Transitions are built-in animations that you use when switching between Windows or Views. `transition` is a property of the Animation object. With transitions, you would define a starting and ending View/Window to show, and set a constant from the Ti.UI.iOS namespace to specify which type of transition to use.

```javascript
// container is a View to which box1 and box2 are added
var selectedIndex = 0;
container.addEventListener('click', function(){
  if (selectedIndex%2 == 0) {
    container.animate({
      view: box2,
      transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
    });
  }
  else {
    container.animate({
      view: box1,
      transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
    });
  }
  selectedIndex++;
});
```

To create transition animations for Windows in a NavigationWindow or Tab, use the Window's `transitionAnimation` property. Create a transition animation object with the `Titanium.UI.iOS.createTransitionAnimation` method to specify animation objects to hide the current window and show the new window.

### Dynamic animations

Dynamic animations are physics-related animations and with them, you set up an Animator object and add behaviors (animation rules), such as gravitational or push forces, and items (view objects) to be animated. See the [Titanium.UI.iOS.Animator API reference guide](#!/api/Titanium.UI.iOS.Animator) as starting point.

### References

* [2D Transformations](http://www.willamette.edu/~gorr/classes/GeneralGraphics/Transforms/transforms2d.htm) from Willamette college course

* [Layer Geometry and Transforms](http://developer.apple.com/library/ios/#DOCUMENTATION/Cocoa/Conceptual/CoreAnimation_guide/Articles/Layers.html) from developer.apple.com

* [Using Works of Visual Art to Teach MatrixTransformations](http://works.bepress.com/cgi/viewcontent.cgi?article=1008&context=bruce_kessler) from Western Kentucky University (lots of math!)

* [Rotation Matrices](http://www.euclideanspace.com/maths/algebra/matrix/orthogonal/rotation/index.htm)

## Summary

In this section, you learned that you can add visual interest and (when used appropriately) professionalism to your app by using animations. You learned how to animate the basic properties of UI components, how to use 2D and 3D matrix transformations, and how to implement transitions on iOS.
