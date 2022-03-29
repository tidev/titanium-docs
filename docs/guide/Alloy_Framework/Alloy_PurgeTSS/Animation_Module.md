# Animation Module
**`Animation` is a Titanium module to apply a 2D Matrix animation or transformation to any element or to an array of elements.**

- You can create as many `Animation` elements as you want on each View file.
- You can chain them with callback functions to create a sequence of animations.
- You can `play` the animation to a single element or an array of elements, like the children of a view for example.
- You can `apply` the properties instantly without animation.
- You can set: `delay`, `duration`, `rotation`, `scaling`, `repetition`, `animation curve`.
- You can animate properties like background color, opacity, width, height and more.
- **You can set different properties to different states, using the prefix `open:`, `close:` and `complete:`.**

## Installation
Use the new **`purgetss module`** command to install the module in your `lib` folder.

```bash
alloy purgetss module
```

## Usage
To use it, create an `Animation` element that will hold the transformation values. And set its 'module' property to `module='purgetss.ui'`

You can set any of the sizing, positioning and color properties available in `tailwind.tss`.

## Available methods
There are two methods available `play` and `apply`.

### `play`
Use the `play` method in your controller to reproduce the animation by passing the element that you want to animate.

You can call the method when opening the controller, after a click event, etc.

 ```javascript
 $.myAnimation.play($.myView);
 ```

 ### `apply`
Use `apply` when you need to immediately apply the properties and transformations to the view.

 ```javascript
 $.myAnimation.apply($.myView);
 ```

## Example 1
```xml
<Alloy>
  <Window>
    <View id="square" class="w-16 h-16 bg-blue-500" />
    <Animation module="purgetss.ui" id="myAnimation" class="w-32 h-32 bg-green-500" />
  </Window>
</Alloy>
```

In the controller pass the element that you want to animate.
```javascript
$.index.open();
$.myAnimation.play($.square);
```

![basic-animation](./images/basic-animation.gif)

***\* low framerate gif***

## Example 2
You can create more complex animations by combining properties to different `states` like when `opening` or `closing` an animation.

```xml
<Alloy>
  <Window class="keep-screen-on">
    <View class="vertical">
      <Button class="w-48 mt-1 bg-purple-500 rounded ios:mt-16 text-purple-50" ios:onSingletap="do3Squares" android:onClick="do3Squares" title="3 Squares"/>
      <Button class="w-48 mt-2 bg-purple-500 rounded text-purple-50" ios:onSingletap="doChangeColors" android:onClick="doChangeColors" title="Toggle Colors"/>
      <Button class="w-48 mt-2 bg-purple-500 rounded text-purple-50" ios:onSingletap="doRetweet" android:onClick="doRetweet" title="Toggle Re-Tweet"/>

      <View id="squares" class="w-screen mt-10 vertical">
        <View id="aquare1" class="bg-blue-700 w-28 h-28 rounded-xl" />
        <View id="aquare2" class="mt-4 bg-blue-700 w-28 h-28 rounded-xl" />
        <View id="aquare3" class="mt-4 bg-blue-700 w-28 h-28 rounded-xl" />
      </View>
    </View>

    <View id="square3" class="mt-8 bg-blue-500 w-14 h-14 rounded-xl" ios:onSingletap="doTransparency" android:onClick="doTransparency" />

    <View id="retweetView" class="w-screen h-48 bg-gray-800 vertical -mb-52 rounded-2xl" ios:onSingletap="doRetweet" android:onClick="doRetweet">
      <View class="w-8 h-1 mt-4 bg-slate-700" />

      <View class="mx-4 mt-4 horizontal">
        <Label class="text-xl text-slate-500 fas fa-retweet w-7" />
        <Label class="ml-2 text-xl text-left text-white" text="Re-Tweet" />
      </View>

      <View class="mx-4 mt-4 horizontal">
        <Label class="text-xl text-slate-500 fas fa-pencil-alt w-7" />
        <Label class="ml-2 text-xl text-left text-white" text="Quote Tweet" />
      </View>
    </View>

    <Animation id="squaresWidth" class="ease-out delay-50 open:w-11/12 close:w-28 debug" module="purgetss.ui" />
    <Animation id="transparency" class="open:duration-150 close:duration-300 open:mt-(null) close:mt-8 open:w-10/12 open:h-11/12 close:w-14 close:h-14 open:opacity-50 close:opacity-100" module="purgetss.ui" />
    <Animation id="retweet" class="open:duration-200 close:duration-150 open:-mb-16 close:-mb-52" module="purgetss.ui" />
    <Animation id="changeColor" class="delay-25 open:bg-purple-500 close:bg-blue-700 debug" module="purgetss.ui" />
  </Window>
</Alloy>
```

```javascript
function doTransparency(e) {
  $.transparency.play($.square3);
}

function doChangeColors(e) {
  $.changeColor.play($.squares.children);
}

function do3Squares(e) {
  $.squaresWidth.play($.squares.children);
}

function doRetweet(e) {
  $.retweet.play($.retweetView);
}

$.index.open();
```

![complex-animation](./images/complex-animations.gif)

***\* low framerate gif***

## Example 3
The following example `applies` the properties to prevent the animation from showing.

The method `apply` sets the properties instantly. In this example, the `ScrollableView` is rotated 90 degrees, and its content is counter rotated -90 degrees.

```xml
<Alloy>
  <Window class="dont-exit-on-close keep-screen-on">
    <ScrollableView id="scrollableView" class="overlay-enabled disable-bounce paging-alpha-100 scrolling-enabled show-paging paging-h-14 paging-on-bottom paging-transparent page-(rgba(0,0,0,0.24)) current-page-(rgba(0,0,0,1))">
      <View id="elView1" class="bg-blue-500">
        <Label class="text-center" text="View's Content" />
      </View>

      <View id="elView2" class="bg-red-500">
        <Label class="text-center" text="View's Content" />
      </View>

      <View id="elView3" class="bg-green-500">
        <Label class="text-center" text="View's Content" />
      </View>
    </ScrollableView>

    <Animation module="purgetss.ui" id="rotate" class="rotate-90 inverted-platform-w inverted-platform-h" />
    <Animation module="purgetss.ui" id="counterRotate" class="-rotate-90 platform-w platform-h" />
  </Window>
</Alloy>
```

```javascript
$.index.open();
$.rotate.apply($.scrollableView);
$.counterRotate.apply($.scrollableView.views);
```
![tiktok-like](./images/tiktok-like.gif)

***\* low framerate gif***

## Available utilities

### anchorPoint
Coordinate of the view about which to pivot an animation.

Point to rotate around, specified as a dictionary object with x and y properties, where { x: 0.5, y: 0.5 } represents the center of whatever is being rotated.

**Default:** `(0.5, 0.5)`

```css
// Component(s): Ti.UI.Animation, Ti.UI.View
// Property(ies): anchorPoint
'.origin-center': { anchorPoint: { x: 0.5, y: 0.5 } }
'.origin-top': { anchorPoint: { x: 0.5, y: 0 } }
'.origin-top-right': { anchorPoint: { x: 1, y: 0 } }
'.origin-right': { anchorPoint: { x: 0.5, y: 1 } }
'.origin-bottom-right': { anchorPoint: { x: 1, y: 1 } }
'.origin-bottom': { anchorPoint: { x: 0.5, y: 1 } }
'.origin-bottom-left': { anchorPoint: { x: 0, y: 1 } }
'.origin-left': { anchorPoint: { x: 0, y: 0.5 } }
'.origin-top-left': { anchorPoint: { x: 0, y: 0 } }
```

### autoreverse
Specifies if the animation should be replayed in reverse upon completion.

**Default:** `false`

```css
// Component(s): Ti.UI.Animation
// Property(ies): autoreverse
'.autoreverse': { autoreverse: true }
'.no-autoreverse': { autoreverse: false }
```

### curve
Animation curve or easing function to apply to the animation.

This API can be assigned the following constants:

```css
// Component(s): Ti.UI.Animation
// Property(ies): curve
'.ease-in': { curve: Ti.UI.ANIMATION_CURVE_EASE_IN }
'.ease-out': { curve: Ti.UI.ANIMATION_CURVE_EASE_OUT }
'.ease-linear': { curve: Ti.UI.ANIMATION_CURVE_LINEAR }
'.ease-in-out': { curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT }
```

### delay
Delay, in milliseconds before starting the animation

```css
// Component(s): Ti.UI.Animation
// Property(ies): delay
'.delay-0': { delay: 0 }
'.delay-25': { delay: 25 }
'.delay-50': { delay: 50 }
'.delay-75': { delay: 75 }
'.delay-100': { delay: 100 }
'.delay-150': { delay: 150 }
'.delay-200': { delay: 200 }
'.delay-300': { delay: 300 }
'.delay-500': { delay: 500 }
'.delay-700': { delay: 700 }
'.delay-1000': { delay: 1000 }
'.delay-2000': { delay: 2000 }
'.delay-3000': { delay: 3000 }
'.delay-4000': { delay: 4000 }
'.delay-5000': { delay: 5000 }
```

### duration
Duration of the animation, in milliseconds.

```css
// Component(s): Ti.UI.Animation
// Property(ies): duration
'.duration-0': { duration: 0 }
'.duration-25': { duration: 25 }
'.duration-50': { duration: 50 }
'.duration-75': { duration: 75 }
'.duration-100': { duration: 100 }
'.duration-150': { duration: 150 }
'.duration-200': { duration: 200 }
'.duration-300': { duration: 300 }
'.duration-500': { duration: 500 }
'.duration-700': { duration: 700 }
'.duration-1000': { duration: 1000 }
'.duration': { duration: 150 }
```
### repeat
Number of times the animation should be performed.

If `autoreverse` is true, then one repeat of the animation consists of the animation being played once forward, and once backward.

```css
// Component(s): Ti.UI.Animation
// Property(ies): repeat
'.repeat-1': { repeat: 1 }
'.repeat-2': { repeat: 2 }
'.repeat-3': { repeat: 3 }
'.repeat-4': { repeat: 4 }
'.repeat-5': { repeat: 5 }
'.repeat-6': { repeat: 6 }
'.repeat-7': { repeat: 7 }
'.repeat-8': { repeat: 8 }
'.repeat-9': { repeat: 9 }
'.repeat-10': { repeat: 10 }
```

### rotate
Utilities to specify the amount of rotation.

Rotation angle, in degrees. See the rotate method for a discussion of rotation.

**Default:** `No rotation.`

```css
// Component(s): For the Animation Component
// Property(ies): rotate
'.rotate-0': { rotate: 0 }
'.rotate-1': { rotate: 1 }
'.rotate-2': { rotate: 2 }
'.rotate-3': { rotate: 3 }
'.rotate-6': { rotate: 6 }
'.rotate-12': { rotate: 12 }
'.rotate-45': { rotate: 45 }
'.rotate-90': { rotate: 90 }
'.rotate-180': { rotate: 180 }
```

### scale
Scale the matrix by the specified scaling factor. The same scaling factor is used for both horizontal and vertical scaling.

**Default:** `1`

```css
// Component(s): Ti.UI.ScrollView
// Property(ies): scale
'.scale-0': { scale: '0' }
'.scale-5': { scale: '.05' }
'.scale-10': { scale: '.10' }
'.scale-25': { scale: '.25' }
'.scale-50': { scale: '.5' }
'.scale-75': { scale: '.75' }
'.scale-90': { scale: '.9' }
'.scale-95': { scale: '.95' }
'.scale-100': { scale: '1' }
'.scale-105': { scale: '1.05' }
'.scale-110': { scale: '1.1' }
'.scale-125': { scale: '1.25' }
'.scale-150': { scale: '1.5' }
```