---
breadcrumbLabel: Activity
sidebar: auto
---

# Titanium.Android.Activity

<ProxySummary/>

## Overview

According to the Android API Reference, an activity is "a single, focused thing that a
user can do."

In almost all cases, an activity is associated with a window.  Activities are central
to the Android **Back** button navigation -- the **Back** button closes the current
activity and returns to whatever activity was open previously.

In Titanium, the Android Activity is not created until a window or tab group is opened.
After a Window or TabGroup object is created but before it is opened, its `activity` property
refers to an empty JavaScript object. You can use it to set properties on the activity, such as
the `onCreateOptionsMenu` property, but you cannot invoke any Activity methods.

After the window or tab group opens, a real Activity object is created and the properties from
the JavaScript object are copied over. The `activity` property now refers to this real Activity object,
which you can use to call the various Activity methods. For example, to use the
`invalidateOptionsMenu` method, you need to get the activity after the window or tab group opens.

See also [android.app.Activity](https://developer.android.com/reference/android/app/Activity.html)
in the Android API Reference.

### Activity Lifecycle

In Android, activities are created, started, resumed, paused, stopped, destroyed and restarted.
Titanium generates lifecycle events for activities but does not generate application-level events.
To be notified when an activity's lifecycle event is triggered, assign callbacks to the following activity
properties:

  * [onCreate](Titanium.Android.Activity.onCreate)
  * [onStart](Titanium.Android.Activity.onStart)
  * [onResume](Titanium.Android.Activity.onResume)
  * [onPause](Titanium.Android.Activity.onPause)
  * [onStop](Titanium.Android.Activity.onStop)
  * [onDestroy](Titanium.Android.Activity.onDestroy)
  * [onRestart](Titanium.Android.Activity.onRestart)

See also the "Understand the Lifecycle Callbacks" section in
[Android Developers: Activity Lifecycle](https://developer.android.com/training/basics/activity-lifecycle/starting.html).

### Handling Application Restarts 

Every Android application has a root activity that starts the application. For Titanium
applications, the root activity displays the splash screen. When a backgrounded
application is left inactive (for about 30 minutes or so), upon reopening the app Android
kills off activities above the root activity. This reveals the splash screen activity, making it 
appear as if the application is hung. There are two ways to handle this scenario:

* Add the following to the root `<ti:app>` element in your project's tiapp.xml:

        <property name="ti.android.root.reappears.restart" type="bool">true</property>

* Create an event listener for the `"resume"` event on the current Android activity that
re-intiializes the application. The benefit to this approach is that it avoids a full
application restart, which occurs with the first option.

        if(Ti.Platform.osname == "android") {
            var initialLaunchPerformed = false;
            Ti.Android.currentActivity.onResume = function() {
                if (!initialLaunchPerformed) {
                    initialLaunchPerformed = true;
                    return;
                }
                // If we reach this point the root activity is being resumed for the second (or greater time).
                // Re-run the application-specific start-up code again.
                runApplication();
            };
        }

        function runApplication() {
            // Start-up code here...
        }

### Don't keep activities option

Android 4.0 and greater devices have an option called **Don't keep activities** under the **Developer
Options** menu. When this option is enabled, the Android OS will destroy an activity as soon as it
is stopped. It is intended to help developers debug their apps. For example, it can simulate the
case that Android will kill an activity in the background due to memory pressure. In
normal use, it is not recommended to turn this option on because this may lead to unexpected issues
on the apps, such as freezes, force closes and reboots.

When the **Don't keep activities** option is enabled, the lifecycle of the activity is different
from the normal case. Whenever the user leaves an activity, such as backgrounding the app using the
HOME button, this activity is destroyed by Android, which calls `onDestroy`.  In the normal case, `onStop`
would be called and the activity would not be destroyed.  Later, when the user goes back to that activity, this
activity will be recreated, which calls `onCreate`.  In the normal case, since the activity is not destroyed, 
`onRestart` would be called instead.  Therefore, some events, such as the open and close events on the Window
or TabGroup, will be fired differently from the normal case, and the root window of the app must set
[exitOnClose](Titanium.UI.Window.exitOnClose) to true; otherwise, the app will be unable to back out, that is,
hitting the BACK button in the root window will not allow the application to exit.

### Deprecated Behavior

Prior to Release 3.4.0, to monitor lifecycle events, use the activity's events, `create`, `destroy`,
`pause`, `resume`, `start` and `stop`, to be notified when an activity is created, destroyed, paused,
resumed, started and stopped, respectively.

You can only set Activity properties from a TabGroup object after the tab group opens.

Prior to Release 3.2.0, you can create either a "lightweight" or "heavyweight" window, as
described on the <Titanium.UI.Window> reference page. A *heavyweight* window creates a 
new `Activity`. A *lightweight* window runs inside the same activity as the code that
created it.  If you try to reference the activity of lightweight window, it returns undefined.

<ApiDocs/>
