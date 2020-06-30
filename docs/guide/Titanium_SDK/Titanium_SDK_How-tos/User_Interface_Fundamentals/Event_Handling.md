---
title: Event Handling
weight: '30'
---

# Event Handling

## Objective

In this chapter, you will learn how to capture and fire events. You'll also learn the difference between component level and app level events.

## Contents

Events are actions that can be detected by JavaScript. Such actions might be user-initiated, like taps or swipes, or system-initiated, like when an app is paused. Your app can capture and react to any of these events. You specify which components in your app should "listen" for events with the `addEventListener()` function. Assigning an event listener follows this pattern:

```
element.addEventListener('event_type', function(e) {
  // code here is run when the event is fired
  // properties of the event object 'e' describe the event and object that received it
  Ti.API.info('The '+e.type+' event happened');
});
```

As seen above, the first parameter specifies the type of event for which we are listening. In this case, `event_type` on the `element` component. The second parameter is a callback function that will be executed whenever the event is fired.

Each Titanium component is capable of listening for a particular subset of event types. As shown in the code sample above, within an event listener's function, an event object, `e`, is created. The properties of that object vary by component and event type. These are listed on the API docs page for any given module or component. Some common event types include:

* `click` and its synonym `singletap`

* `swipe` which is a left or right touch and drag the finger action

* `scroll` which is a touch and drag action

* `dblclick` and its synonym `doubletap`

* `touchstart`, `touchmove`, and `touchend` which define the three stages of an action where the user touches the screen, moves his or her finger in an arbitrary direction, then lifts the finger

In addition to the common event types, some modules have their own special events. For example, the location services API includes events for `heading` and `location` changes. The gestures module enables you to listen for the `shake` event. See the API docs for more information.

Common event object properties include:

* `x` and `y` which describe the x/y coordinates of the event (such as a tap) in the view's coordinates

* `globalPoint` which is a dictionary with `x` and `y` properties describing the event's location in screen coordinates

* `type` which is the name of the event type

* `source` which is a reference to the object on which the event was fired

::: warning ⚠️ Warning
`globalPoint` is an iOS only event property.
:::

You can assign more than one event listener to a component. For example, a table could listen for taps, swipes, and scrolls.

While the general form above uses an anonymous (unnamed) function, you can use a named function as well. Typically, you would do so if you wanted to reuse the function in more than one event handler or in response to more than one type of event. Let's say you had two buttons that when clicked would perform identical operations. Rather than writing duplicate anonymous functions for each button, you could create a named function that is called instead.

```javascript
function doSomething(e) {
  // This function will be called by multiple handlers
  // The event object is accessible within this function
  Ti.API.info('The '+e.type+' event happened');
}

button1.addEventListener('click', doSomething);
button2.addEventListener('click', doSomething)
```

Tip: A UI element must have its `touchEnabled` property set to `true` for it to react to touch-related events (click, singletap, etc.). In most cases, UI components default to this value being `true`. However, if you find an element that won't respond to an event, try setting `touchEnabled=true` to see if that helps. If a view has `touchEnabled` set to `false`, touch events pass to the next view in the stack (for example, an underlying sibling view or parent view).

### UI event bubbling

UI events can bubble up from the view that was actually touched through parent views (objects that inherit from `Ti.UI.View`), as well as certain "view-like" objects which act as containers for views.

For example, a `TableViewSection` object acts as a container for `TableViewRow` objects. However, in iOS, the `TableViewSection` is not itself a view. Since it serves as a logical container for views, it takes part in the bubbling chain. From the point of view of event bubbling, the section acts as parent to the rows it contains, and the table acts as parent for its rows.

Some special containers, such as windows, have no parents in the view hierarchy, so event bubbling ends when it reaches a special container. These special containers include:

* NavigationWindow

* SplitWindow

* Tab

* TabGroup

* Window

Event bubbling ends when it reaches the special containers.

#### Bubbling and non-bubbling events

Events that represent user input (click, touchmove, swipe) are bubbling events. Other events, such as focus and scroll, are view-specific. They represent views reacting to user input, and they do not bubble.

The following events bubble:

* click

* dblclick

* doubletap

* longclick

* longpress

* pinch

* singletap

* swipe

* touchcancel

* touchend

* touchmove

* touchstart

* twofingertap

That is, all of the events defined by `Titanium.UI.View` _except_ `postlayout`.

#### Managing event bubbling

Release 3.0 adds several features to allow more control over event bubbling. The `Titanium.Event` object has two new properties:

| API | Type | Description |
| --- | --- | --- |
| `bubbles` | boolean | Indicates whether the event can bubble. This property is set at creation time and cannot be changed. For events fired by the Titanium SDK, this property is set to ensure that event-bubbling behavior matches the 2.X event bubbling behavior.  <br />  <br />When firing custom events, `bubbles` can be specified as part of the event data to enable or disable bubbling. |
| `cancelBubble` | boolean | If `true`, stop the event from propagating any further. The `cancelBubble` property is always `false` when an event handler is invoked. While handling the event, the application can set `cancelBubble` to true to prevent any further bubbling. |

In addition, all views and view-like objects have a new `bubbleParent` property, which determines whether the view bubbles to its parent. This property is read/write. By default, `bubbleParent` is set so that event bubbling behavior for a given view matches its Release 2.X event bubbling behavior. This property is defined as a property of `Titanium.Proxy`\--the parent of all Titanium objects. However, the property is only used on views and view-like objects that act as containers for views.

#### Event bubbling notes

* Event bubbling happens after native event handling. That is, native event handling (such as highlighting a view) has already happened before any event fires.

* Multiple events of different types are treated separately. That is, if the user lifting their finger triggers 'touchend', 'singletap', and 'click' events, any actions done on the 'touchend' event (such as setting `cancelBubble`) do not affect the bubbling or firing of either 'singletap' or 'click' events.

### Firing events

You can fire events rather than waiting around for the user or system to initiate them. For example, you could simulate a button press by firing that button's `click` event. You'd use code like this:

```
someButton.fireEvent('click');
```

or if you wanted to pass data along with the event:

```
someButton.fireEvent('click', {kitchen: 'sink'});
```

As shown, you can also pass JSON-serializable data when firing events. You simply include an object (without methods) as the second parameter of the `fireEvent()` function. That parameter is optional and can be omitted. Members of the passed object become available via the event object in the listener. For example, the following code:

```
someButton.addEventListener('click', function(e){
  Ti.APP.info('The value of kitchen is '+e.kitchen);
});
```

would output this to the Titanium console:

```
[INFO] The value of kitchen is sink
```

### Custom events

Manually firing a click event demonstrates the flexibility of Titanium's event system, but it's probably not something you'll do that often. You can (and probably will) fire your own custom events frequently. For example, you might fire a custom event when when the database is updated. Any components that depend on the database – a table, for example – could listen for that event and update themselves. This promotes loose coupling of our components and makes for more scalable and maintainable Javascript code.

::: warning ⚠️ Warning
Do **NOT** name your events with spaces, for example, "my event". This may cause your events to fire multiple times with other JavaScript libraries, such as Backbone.js, which uses spaces to delimit events.
:::

```
deleteButton.addEventListener('click', function(e){
  // when something happens in your app
  database.doDelete(e.whichRecord);
  // fire an event so components can react
  theTable.fireEvent('db_updated');
});
// ... elsewhere in your code
theTable.addEventListener('db_updated', function(e){
  theTable.setData(database.getCurrentRecords());
});
```

An event fired and listened for in this manner is associated with one particular component. Sometimes you'll want more than one component to be able to react to custom events. You could fire a whole bunch of component-level events. Or, you can use application-level events.

### Application-level events

App-level events are global to your app. They are accessible in all contexts, functional scopes, CommonJS modules, and so forth. You fire them and listen for them via the `Ti.App` module. They're tailor made for sending custom events across contexts. Updating the previous code sample to use app-level events gets us this:

```
deleteButton.addEventListener('click', function(e){
  // when something happens in your app
  database.doDelete(e.whichRecord);
  // fire a global event so components can react
  Ti.App.fireEvent('db_updated');
});
// ... elsewhere in your code
Ti.App.addEventListener('db_updated', function(e){
  theTable.setData(database.getCurrentRecords());
  someOtherComponent.doSomethingElse();
});
```

Keep in mind that app-level events are global, which means they remain in context the entire time your app is running (unless you remove them). This also means that any objects they reference will also remain in scope while your app runs. This could prevent those objects from being garbage collected. See the [Managing Memory and Finding Leaks](/guide/Titanium_SDK/Titanium_SDK_How-tos/Debugging_and_Profiling/Managing_Memory_and_Finding_Leaks/) chapter for more information.

### Removing event listeners

You can remove an event listener, thereby preventing the associated component from reacting to the event in the future. Let's say you have a delete button that should only be active when one or more items are checked. When the users checks the first item, you could add the click event listener to the delete button. If the user clears the last of the check marks, you'd remove the event listener from the delete button.

To remove an event listener, you have to pass a reference to the function that was specified when you added the event listener. In other words, the function signature passed to `addEventListener()` and `removeEventListener()` must match. The easiest way to do this is to use a named function in the `addEventListener()` statement so you can also pass that same function name to remove the listener.

```javascript
function doSomething(e) {
  // do something
}
deleteButton.addEventListener('click', doSomething);
// ... elsewhere in your code ...
deleteButton.removeEventListener('click', doSomething);
});
```

### Special events

Android devices feature various "hardware" buttons, like Back, Home, Search, and Menu in addition to the volume up/down rocker and the camera button. With Titanium, you can monitor each of these buttons for presses with event listeners added to a heavy weight window.

::: tip 💡 Hint
Prior to Release 3.0.0, these events were named with a colon right after the android name. For example, `androidback` was originally called `android:back`.

Since Release 3.2.0, all windows are heavyweight by default and you cannot control the type of window created.
:::

| **Event** | **Fired when ...** |
| --- | --- |
| `androidback` | The back button is released |
| `androidhome` | The home button is released |
| `androidsearch` | The search button is released |
| `androidcamera` | The camera button is released |
| `androidfocus` | Fired when the camera button is pressed halfway and then released. |
| `androidvolup` | The volume-up rocker button is released |
| `androidvoldown` | The volume-down rocker button is released |

See the [Window](http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.Window-object.html) reference page for more information on these special events. The Menu button is handled specially as an event fired against the Android activity. See this [Kitchen Sink example](https://github.com/appcelerator-developer-relations/KitchenSink/blob/master/Resources/ui/handheld/android/baseui/android_menu_1.js) for sample code for creating and displaying a menu.

### Considerations and best practices

Event listeners must be defined _before_ their respective events are likely to be fired, otherwise they are not guaranteed to be called. For example, a window's [open](#!/api/Titanium.UI.Window-method-open) and [focus](#!/api/Titanium.UI.Window-event-focus) listeners must be defined before the window is opened. Evaluating events as late as possible while bearing the above consideration in mind, however, can significantly improve application responsiveness. For example, an event listener for a click event may be defined after the parent window has been opened.

Global event listeners, such as the Ti.App events described above or the Geolocation or Gesture listeners, remain in scope the entire time your app is running. This means that any local variables you reference within those listeners will remain in scope while your app is running. This can cause memory leaks – objects you no longer need and think have been destroyed remain in memory. See the [Managing Memory and Finding Leaks](/guide/Titanium_SDK/Titanium_SDK_How-tos/Debugging_and_Profiling/Managing_Memory_and_Finding_Leaks/) chapter for more information. The gist of it is that you must remove global event listeners when you're done with them. When a window closes, for example, you might no longer need to listen for a certain global event; remove it.

## Hands-on practice

### Goal

In this activity, you will fire and listen for events to test how events propagate – whether they bubble up or trickle down. You will also fire and listen for an app-level event.

### Steps

Determine if events bubble up or trickle down and do the platforms match...put a button in a view in a window then put a click listener on all of them and see the order in which they're fired. Perhaps also compare the x/y and globalPoint coordinates to see how they differ.

1. Create a new Titanium project named Events

2. Remove all of the code from app.js. Write new code to define the following elements:

    * A window with a white background color. Add a custom property named `whichObj` with the value 'window' to your window object.

    * A view that fills 80% of the width and height of the window. It should have a yellow background. Add a custom property named `whichObj` with the value 'view' to your view object. Make sure to add the view to the window.

    * A button centered vertically and horizontally within the view. Add a custom property named `whichObj` with the value 'button' to your button object. Make sure to add the button to the view.

3. Add a click event listener on the window object. It should log two messages to the console:

    * Message 1: Simply output the word 'window' to the log so you know the window received the click event

    * Message 2: Log the `whichObj` property value to the console so you know which object actually received the user's click. Keep in mind the event object properties that you'll need to reference to access this property.

4. Add a click event listener to the view object. It should log the word 'view' to the console so you know the view received the click event.

5. Add a click event listener to the button. It should take two actions:

    * It should print the word 'button' to the log so you know the button received the click event.

    * It should fire an app-level event named `changeBG` and pass an anonymous object defining a color.

6. Add an app-level event listener which watches for the `changeBG` event. When received, it should update the view's background color with the value passed via the event object.

7. Build and test the app by clicking the button. Do events bubble up (button receives the click first, then the view, then the window) or do events trickle down (window, then view, then button)? If you can build for both Android and iOS, compare the output on the two platforms. Do they react the same?

### References and further reading

* [Finished code](http://assets.appcelerator.com.s3.amazonaws.com/app_u/ebook/3.3_events.zip)

* [Window module](#!/api/Titanium.UI.Window)

## Summary

In this section, you learned how to capture and fire events. You learned the difference between component level and app-level events, as well as how and when to use them. Finally, you tested event propagation to determine that on both platforms, events bubble up though only a single event object is created and passed among the interested event listeners. Next we'll move on to handling one of the most used UI components in today's apps: the TableView.
