---
breadcrumbLabel: App
sidebar: auto
---

# Titanium.App

<ProxySummary/>

## Overview

The `App` module exposes a number of properties set in the `tiapp.xml` file.

Three of these properties, the application name, ID, and URL, must be specified when the
application is created.

While most values may be changed by editing the `tiapp.xml` file after creating the project,
the GUID is automatically generated and should not be changed.

To access other application properties set in the `tiapp.xml` file not exposed by the
`Titanium.App` module, see <Titanium.App.Properties>.

### iOS Application Life Cycle

At any given moment, you applications can be in one of the following possible states:

* Not running: The app has not been launched or was running but was terminated by the system.

* Inactive: The app is running in the foreground but is currently not receiving events.
An app usually stays in this state only briefly as it transitions to a different state.
The `pause` event is fired during this state.

* Active: The app is running in the foreground and is receiving events. This is the normal
mode for foreground apps.

* Background: The app is in the background and executing code. Most apps enter this state
briefly on their way to being suspended.

* Suspended: The app is in the background but is not executing code. The system moves
apps to this state automatically and does not notify them before doing so. While suspended,
an app remains in memory but does not execute any code. The `paused` event is fired
during this state. The system tries to keep as many apps in memory at the same time as it
can, but when memory runs low it terminates suspended apps to reclaim that memory. Apps
that consume large amounts of memory while in the background are the first apps to be terminated.

**Responding To Interruptions**

***System Alerts***

When an **alert-based** interruption occurs, such as an incoming phone call, the app moves
temporarily to the inactive state, and fires the `pause` event. The system then displays
an alert to the user. The app remains in this state until the user dismisses the alert.
At this point, the app either returns to the active state and fires the `resumed` event;
or moves to the background state and fires the `paused` event.

Alert-based interruptions result in temporary loss of control by your app and results in `pause`
event being fired. Your app continues to run in the foreground, but it does not recieve
touch events from the system. (It does continue to receive notifications and other types
of events, such as accelerometer events.) When your app is moved back to the
active state, the `resumed` event is fired.

The same set of events takes place when user **double taps on the home button**.

***Sleep/Wake Button***

Pressing the **Sleep/Wake** button is another type of interruption that causes your app to
move to an inactive state. When the app is in the foreground and the **Sleep/Wake button**
is pressed, the the system fires the `pause` event followed by the `paused` event and
becomes inactive. This is an intentionally behavioral change by Apple to conserve battery when
the Sleep/Wake button is pressed. On waking up the app fires the `resume` event followed by the
`resumed` event and returns the app to normal state.

***Home Button***

Pressing the **home button** is another kind of interruption. The app fires `pause` and
`paused`events before going into background. When app is reopened it fires the `resume`
event followed by the `resumed` event, returning the app to the normal state.

<table class="doc-table" summary="This table gives the order of events fired when the app is in normal state.">
  <caption><b>Lifecycle events fired during different interruptions</b></caption>
  <tr>
    <th colspan="2">Type of Interruption</th>
    <th colspan="2">Going into Background</th>
    <th colspan="2">Coming into  Foreground</th>
  </tr>
  <tr>
    <th colspan="2" align="left">Alert-Based/Fast App Switching</th>
    <td align="center">pause</td>
    <td align="center"></td>
    <td align="center"> </td>
    <td align="center">resumed</td>
  </tr>
  <tr>
    <th colspan="2" align="left">Sleep/Wake Button</th>
    <td align="center">pause</td>
    <td align="center">paused</td>
    <td align="center">resume</td>
    <td align="center">resumed</td>
  </tr>
  <tr>
    <th colspan="2" align="left">Home Button (backgrounding)</th>
    <td align="center">pause</td>
    <td align="center">paused</td>
    <td align="center">resume</td>
    <td align="center">resumed</td>
  </tr>
</table>

***Blur and Focus Events***

When using the iOS pause/resume feature, the `blur` and `focus` events do not fire
before the application enters the background or after it returns to the foreground,
respectively.  Instead, the application needs to monitor the `pause` and `resumed` events,
which relies on the underlying iOS events to determine the application state rather than the
UI events.

### Application Level Events

Application-level events are custom events that are defined globally for your
application. By convention, application-level events are set on the `Titanium.App`
module, like this:

```js
Ti.App.addEventListener('app:myCustomEvent', myHandlerFunction);
```

Adding a prefix (like 'app:' in this example) is optional, but can help ensure that
your custom event names don't conflict with any future Titanium events.

Application-level event listeners can be added and fired from any context, including from inside
a web view, so they are ideal for communicating between separate parts of your
application.

When you add an event listener on a Titanium module (such as `Ti.App` or
[Ti.Geolocation](Titanium.Geolocation)), the event listener function is referenced from
the global context. This means the event listener function and any objecst it references
can't be garbage collected until the event listener is removed.

This can lead to memory leaks if application-level event listeners are added and not
removed.

See also: [Event Handling](https://docs.appcelerator.com/platform/latest/#!/guide/Event_Handling)
in the Titanium Mobile Guides.

### System Level Accessibility Events

System-level Accessibility events include:

* Events your application fires to alert the device's accessibility system of some condition
or to ask it to do something.
* Events fired by the device's accessibility system and listened for in your application.

Currently there are four system-level accessibility events. Three of them are available for
your application to fire, and one of them is for your application to listen for.

#### Firing Accessibility Events.

The following accessibility events can be fired by your application to alert the accessibility
system of a particular condition or to ask it to perform an action.

These events are fired using <Titanium.App.fireSystemEvent>, which is available in Titanium Mobile 3.0.0.

* <Titanium.App.EVENT_ACCESSIBILITY_ANNOUNCEMENT>, available in iOS and Android, asks the device's
accessibility system to make an announcement. The announcement itself is a string passed as the second
argument to <Titanium.App.fireSystemEvent>. *How* the device's accessibility actually makes that announcement
depends on what accessibility services are activated on the device. The most common are VoiceOver on
iOS and TalkBack on Android. Each of those would read the announcement aloud.

```js
Ti.App.fireSystemEvent(Ti.App.EVENT_ACCESSIBILITY_ANNOUNCEMENT, "Welcome to my App");
```

* <Titanium.App.iOS.EVENT_ACCESSIBILITY_LAYOUT_CHANGED>, available only on iOS, can be used to alert
the accessibility system that the layout of the screen has changed, such as when an element
appears or disappears. When your application fires this event, Titanium calls `UIAccessibilityLayoutChangedNotification`
in the iOS [UIAccessibility Protocol](https://developer.apple.com/documentation/uikit/accessibility/uiaccessibility).
No second parameter is required when firing this event with <Titanium.App.fireSystemEvent>.

* <Titanium.App.iOS.EVENT_ACCESSIBILITY_SCREEN_CHANGED>, available only on iOS, can be used to alert
the accessibility system when a new view appears that comprises a major portion of the screen.
When your application fires this event, Titanium calls `UIAccessibilityScreenChangedNotification`
in the iOS [UIAccessibility Protocol](https://developer.apple.com/documentation/uikit/accessibility/uiaccessibility).
No second parameter is required when firing this event with <Titanium.App.fireSystemEvent>.

#### Listening for Accessibility Events

Currently there is only one system accessibility event which your application can listen for using
<Titanium.App.addEventListener>, namely <Titanium.App.accessibilitychanged>.  This event, available on iOS and on Android
(for devices running Ice Cream Sandwich or greater), is fired when the device's accessibility service is turned
on or off. The object passed as a parameter to the listener function contains an `enabled` property which is
`true` if the accessibility service is now turned on, or `false` otherwise.

<ApiDocs/>
