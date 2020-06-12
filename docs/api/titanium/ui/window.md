# Titanium.UI.Window

<TypeHeader/>

## Overview

To create a window, use the <Titanium.UI.createWindow> method or a **`<Window>`** Alloy element.

A window is a top-level container which can contain other views. Windows can
be *opened* and *closed*.  Opening a window causes the window and its child
views to be added to the application's render stack, on top of any previously opened
windows. Closing a window removes the window and its children from the render stack.

Windows *contain* other views, but in general they are not *contained* inside
other views. There are a few specialized views that manage windows:

* [NavigationWindow](Titanium.UI.NavigationWindow)
* [SplitWindow](Titanium.UI.iPad.SplitWindow)
* [TabGroup](Titanium.UI.TabGroup)
* [Tab](Titanium.UI.Tab)

By default, windows occupy the entire screen except for the navigation bar,
status bar, and in the case of windows contained in tab groups, the tab bar.
To take up the entire screen, covering any other UI, specify `fullscreen:true`
when creating the window.

### Pass Context Between Windows

To pass data between windows, use a
[CommonJS module](https://docs.appcelerator.com/platform/latest/#!/guide/CommonJS_Modules_in_Titanium)
to save information from one window then retrieve it in another.  In the example below, the foo
module exposes two methods to store and retrieve an object.  The first window of the project
loads the foo module and uses the set method to store some data before opening the second window.
The second window loads the same module and is able to retrieve the content saved by the first
window with the get method.

Note that for Alloy projects, you can simply pass the context as the second argument of the
Alloy.createController method, then retrieve the data with the special variable `$.args`
in the controller code.

`app/lib/foo.js`:
``` js
// For a classic Titanium project, save the file to 'Resources/foo.js'
var data = {};
function setData (obj){
    data = obj;
}
function getData () {
    return data;
}

// The special variable 'exports' exposes the functions as public
exports.setData = setData;
exports.getData = getData;
```

`app/views/index.xml`:
``` xml
<Alloy>
    <Window backgroundColor="blue">
        <Label onClick="openWindow">Open the Red Window!</Label>
    </Window>
</Alloy>
```

`app/controllers/index.js`:
``` js
var foo = require('foo');
foo.setData({foobar: 42});

function openWindow () {
    var win2 = Alloy.createController('win2').getView();
    // For Alloy projects, you can pass context
    // to the controller in the Alloy.createController method.
    // var win2 = Alloy.createController('win2', {foobar: 42}).getView();
    win2.open();
}

$.index.open();
```

`app/views/win2.xml`:
``` xml
<Alloy>
    <Window backgroundColor="red">
        <Label id="label">I am a red window.</Label>
    </Window>
</Alloy>
```

`app/controllers/win2.js`:
``` js
var foo = require('foo');
$.label.text = foo.getData().foobar;

// For Alloy projects, you can also pass in context
// with the Alloy.createController method and retrieve
// it in the controller code.
// $.label.text = $.args.foobar;
```

### Modal Windows

In the user interface, a modal window is a window that blocks the main application UI until the
modal window is dismissed.  A modal window requires the user to interact with it to resume the
normal flow of the application.  For example, if an action requires the user to login, the
application can present a login window, then after the user is authenticated, the normal flow
of the application can be resumed.

To create a modal window, set the `modal` property to `true` in the dictionary passed to
either the `Titanium.UI.createWindow()` method or the Window object's `open()` method.

### Android Behavior

The Android platform does not has the concept of a modal window but instead uses modal
dialogs. You are probably looking for a <Titanium.UI.AlertDialog> or <Titanium.UI.OptionDialog> and
the `androidView` property rather than a modal window.

However, if you know what you are doing and use `modal`, Titanium creates a window with
a translucent background (if the background properties are not set).

The combination of `fullscreen:true` and `modal:true` will not work as expected.
If the background window displays the status bar or action bar, it will be visible behind the modal
window.

Note that Titanium will allow a non-modal window to open on top of a modal window on
Android.

### iOS Behavior

By default, if you do not set a `backgroundColor`, the modal's background color will be the
value set to `Titanium.UI.backgroundColor`.

The modal window will not show the background window stack even if you make the modal translucent.
For fullscreen modals, when the modal appears, the background window stack is removed. For
non-fullscreen modals on the iPad, the background will be opaque gray if a background color
is not specified.

By default, modal windows appear from the bottom of the screen and slide up. To change the default
transition, set the `modalTransitionStyle` property to a
`Titanium.UI.iOS.MODAL_TRANSITION_STYLE_*` constant in the dictionary passed to the Window
object's `open()` method.

Modal windows should not support orientation modes that the window they are opened over do not
support. Doing otherwise *may* cause bad visual/redraw behavior after the modal is dismissed,
due to how iOS manages modal transitions.

Starting with Release 3.1.3, if the `orientationModes` property of a modal window is undefined,
then the orientations supported by this window would be the orientation modes specified by
the `tiapp.xml` with the `UISupportedInterfaceOrientations` key.

iOS does not allow opening non-modal windows on top of a modal window.

#### iPad Features

In addition to full-screen modal windows, iPad supports "Page sheet"
and "Form sheet" style windows:

* **Page sheet** style windows have a fixed width, equal to the width of the screen
  in portait mode, and a height equal to the *current* height of the screen. This means
  that in portrait mode, the window covers the entire screen. In landscape mode,
  the window is centered on the screen horizontally.

* **Form sheet** style windows are smaller than the screen size, and centered on the screen.

The example below is a modal window using the Form sheet style:

<img src="images/window/window-modal.png" width="400" />

You can create this type of modal window on iPad with the following code snippet:

``` js
var win = Ti.UI.createNavigationWindow({
    window: Ti.UI.createWindow({
        title: "Modal Window"
    })
});

win.open({
    modal: true,
    modalTransitionStyle: Ti.UI.iOS.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
    modalStyle: Ti.UI.iOS.MODAL_PRESENTATION_FORMSHEET
});
```

### Animations

Windows can be animated like a [View](Titanium.UI.View), such as using an animation
to open or close a window.  The example below creates a window
that opens from small to large with a bounce effect.  This is done by applying a
transformation at initialization time that scales the original size of the window to 0.
When the window is opened, a new 2D transformation is applied that will scale the window
size from 0 to 110% of it's original size, then, after 1/20th of a second, it is scaled
back to it's original size at 100%. This gives the bounce effect during animation.

`app/views/index.xml`:
``` xml
<Alloy>
    <Window backgroundColor="blue" onPostlayout="animateOpen" >
        <Label color="orange">Animated Window</Label>
    </Window>
</Alloy>
```

`app/controllers/index.js`:
``` js
$.index.transform = Titanium.UI.createMatrix2D().scale(0);
$.index.open();

var a = Ti.UI.createAnimation({
    transform : Ti.UI.createMatrix2D().scale(1.1),
    duration : 2000,
});
a.addEventListener('complete', function() {
    $.index.animate({
        transform: Ti.UI.createMatrix2D(),
        duration: 200
    });
});

function animateOpen() {
    $.index.animate(a);
}
```

Note that to animate an Android window while you open it, you need to follow a specific
procedure which is explained below in "Window Transitions in Android".

### iOS Platform Notes

### iOS Transition Animations

iOS contains built-in transition animations when switching between non-modal windows. In the Window's
`open` method, set the `transition` property to a `Titanium.UI.iOS.AnimationStyle` constant to use an animation.
For example, to flip right-to-left between two windows:

`app/views/index.xml`:
``` xml
<Alloy>
    <Window backgroundColor="blue" onOpen="animateOpen">
        <Label id="label">I am a blue window!</Label>
    </Window>
</Alloy>
```

`app/controllers/index.js`
``` js
function animateOpen() {
    Alloy.createController('win2').getView().open({
        transition: Ti.UI.iOS.AnimationStyle.FLIP_FROM_LEFT
    });
}
$.index.open();
```

`app/views/win2.xml`:
``` xml
<Alloy>
    <Window backgroundColor="red">
        <Label id="label">I am a red window!</Label>
    </Window>
</Alloy>
```

In the above example, the red window will be animated from the right-to-left over the blue window.

You can create transition animations when opening and closing windows in
either a <Titanium.UI.iOS.NavigationWindow> or <Titanium.UI.Tab>.

Use the <Titanium.UI.iOS.createTransitionAnimation> method to specify an animation objects to hide and
show the window, then set the newly created TransitionAnimation object to the window's
<Titanium.UI.Window.transitionAnimation> property.

In the example below, the windows are closed by rotating them upside down while simulatenously
making them transparent:

`app/views/index.xml`:
``` xml
<Alloy>
    <NavigationWindow platform="ios">
        <Window id="redwin" title="Red Window" backgroundColor="red">
            <Button id="button" onClick="openBlueWindow">Open Blue Window</Button>
        </Window>
    </NavigationWindow>
</Alloy>
```

`app/controllers/index.js`:
``` js
function openBlueWindow(e) {
    var bluewin = Alloy.createController('bluewin').getView();
    $.index.openWindow(bluewin);
}

$.redwin.transitionAnimation = Ti.UI.iOS.createTransitionAnimation({
    duration: 300,
    // The show transition makes the window opaque and rotates it correctly
    transitionTo: {
        opacity: 1,
        duration: 300,
        transform: Ti.UI.createMatrix2D()
    },
    // The hide transition makes the window transparent and rotates it upside down
    transitionFrom: {
        opacity: 0,
        duration: 300 / 2,
        transform: Ti.UI.createMatrix2D().rotate(180),
    }
});

$.index.open();
```

`app/views/bluewin.xml`:
``` xml
<Alloy>
    <Window title="Blue Window" backgroundColor="blue" opacity="0">
        <Button onClick="closeWindow">Close Window</Button>
    </Window>
</Alloy>
```

`app/controllers/bluewin.js`:
``` js
function closeWindow(){
    $.bluewin.close();
}

$.bluewin.transitionAnimation = Ti.UI.iOS.createTransitionAnimation({
    duration: 300,
    // The show transition makes the window opaque and rotates it correctly
    transitionTo: {
        opacity: 1,
        duration: 300,
        transform: Ti.UI.createMatrix2D()
    },
    // The hide transition makes the window transparent and rotates it upside down
    transitionFrom: {
        opacity: 0,
        duration: 300 / 2,
        transform: Ti.UI.createMatrix2D().rotate(180),
    }
});

$.bluewin.transform = Ti.UI.createMatrix2D().rotate(180);
```

### Android Platform Notes

### Window Transitions in Android

A window is associated with a new Android [Activity](Titanium.Android.Activity). The only way
to animate the opening or closing of an Activity in Android is to apply an animation _resource_
to it. Passing a <Titanium.UI.Animation> object as a parameter to <Titanium.UI.Window.open>
or <Titanium.UI.Window.close> will have no effect.

Instead, in the parameter dictionary you pass to <Titanium.UI.Window.open> or <Titanium.UI.Window.close>,
you should set the `activityEnterAnimation` and `activityExitAnimation` keys to
animation resources. `activityEnterAnimation` should be set to the animation you want to run
on the incoming activity, while `activityExitAnimation` should be set to the animation you
want to run on the outgoing activity that you are leaving.

Animation resources are available through the `R` object. Use either <Titanium.Android.R> for
built-in resources or <Titanium.App.Android.R> for resources that you package in your application.

As an example, you may wish for the window that you are opening to fade in while the window
you are leaving should fade out:

``` js
var win2 = Ti.UI.createWindow();
win2.open({
    activityEnterAnimation: Ti.Android.R.anim.fade_in,
    activityExitAnimation: Ti.Android.R.anim.fade_out
});
```

See the official Android [R.anim](https://developer.android.com/reference/android/R.anim.html) documentation
for information about built-in animations.

For information on creating your own animation resource XML files, see
"[View Animation](https://developer.android.com/guide/topics/resources/animation-resource.html#View)"
in Android's Resources documentation. After creating an animation resource file, you can place it under
`platform/android/res/anim` in your Titanium project folder and it will be packaged in your app's APK
and then available via <Titanium.App.Android.R>.

### Material design transitions in Android

You can provide transition between common elements among participating activities. For example in a master-detail pattern,
clicking on a row item animates the common elements of image, title smoothly into details activity as if they are part of
the same scene. This seamless animation is called shared element transition and can be achieved by the following steps.

Say window A is opening window B.
Firstly, specify a unique `transitionName` to the common UI elements between the two windows.
Next use `addSharedElement` method on window B passing the window A common UI element and the transition name. This tells the system
which views are shared between windows and performs the transition between them. Note that we specify the UI elements of window A
since the system needs the source element and connects the destination element from the shared transition name once window B is created
and shown.

For example to transition a title label in window A to a title label in window B.

``` js
// Create label in window A with a unique transitionName.
var titleInWinA = new Ti.UI.createLabel({
    text:'Top 10 pics from Mars!',
    left:70, top: 6,
    width:200, height: 30,
    transitionName: 'title'
});
windowA.add(titleInWinA);

// Creating label in window B, note that the same transitionName is used.
var titleInWinB = new Ti.UI.createLabel({
    text:'Top 10 pics from Mars!',
    left:50, top: 10,
    width:200, height: 30,
    transitionName: 'title'
});

// Before opening window B specify the common UI elements.
windowB.addSharedElement(titleInWinA, "title");
windowB.open();
```

Further you can use `activityEnterTransition`, `activityExitTransition`, `activityReenterTransition`
and `activityReturnTransition` to customize the way activities transition into the scene. These are intended
to be used with views set up as "shared elements" via the `addSharedElement()` method where these views
will be moved from window to the other. As of Titanium 8.0.1, you don't have to add views as shared elements
to use these transition animations, while in older version of Titanium that was required.

See the official Android [Activity Transitions](https://developer.android.com/training/material/animations.html#Transitions)
documentation for more information and supported transitons.

### Android "root" Windows

In Android, you may wish to specify that a window which you create (such as the first
window) should be considered the root window and that the application should exit when
the back button is pressed from that window.  This is particularly useful if your application
is not using a Tab Group and therefore the splash screen window is appearing whenever you
press the back button from your lowest window on the stack.

To indicate that a particular window should cause an application to exit when the back
button is pressed, pass `exitOnClose: true` as one of the creation arguments, as shown here:

``` js
var win = Titanium.UI.createWindow({
  title: 'My Root Window',
  exitOnClose: true
});
```

Starting with Release 3.2.0, the root window's `exitOnClose` property is set to `true` by
default.  Prior to Release 3.2.0, the default value of the property was `false` for all windows.

## Examples

### Full Screen Window example

Create a fullscreen window with a red background.

``` js
var window = Titanium.UI.createWindow({
    backgroundColor:'red'
});
window.open({fullscreen:true});
```


### Alloy XML Markup

Previous example as an Alloy view.

``` xml
<Alloy>
    <Window id="win" backgroundColor="red" fullscreen="true" />
</Alloy>
```


<ApiDocs/>
