---
title: Titanium.Android.Activity
properties:
  - name: actionBar
    type: Titanium.Android.ActionBar
    summary: The action bar for this activity.
    description: >
      <p>See also: <a
      href="https://developer.android.com/guide/topics/ui/actionbar.html">Action
      Bar</a> in<br>

      the Android Developer Reference.</p>
  - name: intent
    type: Titanium.Android.Intent
    summary: The last <code>Intent</code> received by this activity.
    description: >
      <p>Will initially be set to the intent that created/launched the activity.
      If this is the app's root activity,<br>

      then this intent will change when a &quot;newintent&quot; event has been
      fired.</p>
  - name: onCreate
    type: Callback<ActivityLifecycleCallbackObject>
    summary: |
      Callback function called when the Android activity is created.<br>
    since: 3.4.0
  - name: onCreateOptionsMenu
    type: Callback<OptionsMenuCallbackObject>
    summary: >
      Callback function called to initially create an Android options menu<br>

      for this Activity when the user presses the <strong>Menu</strong>
      button.<br>
    description: >
      <p>See the menu examples in <a
      href="/api/titanium/android/menu">Titanium.Android.Menu</a>.</p>

      <p>See also:<br>

      <a
      href="https://developer.android.com/guide/topics/ui/menus.html#options-menu">Creating
      an Options Menu</a><br>

      in the Android Developer's Guide.</p>
  - name: onDestroy
    type: Callback<ActivityLifecycleCallbackObject>
    summary: |
      Callback function called when the Android activity is destroyed.<br>
    since: 3.4.0
  - name: onPause
    type: Callback<ActivityLifecycleCallbackObject>
    summary: |
      Callback function called when the Android activity is paused.<br>
    since: 3.4.0
  - name: onPrepareOptionsMenu
    type: Callback<OptionsMenuCallbackObject>
    summary: >
      Callback function called to prepare an options menu for display when the
      user presses<br>

      the <strong>Menu</strong> button.<br>
    description: >
      <p>See the menu examples in <a
      href="/api/titanium/android/menu">Titanium.Android.Menu</a>.</p>

      <p>See also:<br>

      <a
      href="https://developer.android.com/guide/topics/ui/menus.html#options-menu">Creating
      an Options Menu</a><br>

      in the Android Developer's Guide.</p>
  - name: onRestart
    type: Callback<ActivityLifecycleCallbackObject>
    summary: |
      Callback function called when the Android activity is restarted.<br>
    since: 3.4.0
  - name: onResume
    type: Callback<ActivityLifecycleCallbackObject>
    summary: |
      Callback function called when the Android activity is resumed.<br>
    since: 3.4.0
  - name: onStart
    type: Callback<ActivityLifecycleCallbackObject>
    summary: |
      Callback function called when the Android activity is started.<br>
    since: 3.4.0
  - name: onStop
    type: Callback<ActivityLifecycleCallbackObject>
    summary: |
      Callback function called when the Android activity is stopped.<br>
    since: 3.4.0
  - name: requestedOrientation
    type: Number
    summary: Specifies a specific orientation for this activity.
  - name: supportToolbar
    type: Titanium.UI.Toolbar
    summary: Toolbar instance that serves as ActionBar
    description: >
      <p>This property is used to set a toolbar as an ActionBar prior to the
      actual activity creation.<br>

      After the activity is created that must be done through the <a
      href="Titanium.Android.Activity.setSupportActionBar">setSupportActionBar()</a>
      method.</p>
    since: 6.2.0
methods:
  - name: finish
    summary: Closes this activity.
    description: >
      <p>See also:<br>

      <a
      href="https://developer.android.com/reference/android/app/Activity.html#finish()">finish</a><br>

      in the Android API Reference.</p>
  - name: getString
    summary: >-
      Gets an Android or Application string using the specified Resource ID and
      optional format arguments.
    description: >
      <p>If the optional format arguments are supplied, these are substituted
      for the<br>

      corresponding format specifiers in the string. For example, given the
      following<br>

      string resource:</p>

      <div class="language-xml"><pre class="shiki"><code>&lt;string
      name=&quot;greeting&quot;&gt;&quot;Hello %1$s, this is
      %2$s.&quot;&lt;/string&gt;

      </code></pre></div>

      <p>You could call <code>getString</code> like this:</p>

      <div class="language-js"><pre
      class="shiki"><code>Ti.Android.currentActivity.getString(Ti.App.Android.R.string.greeting, 
      &quot;Bob&quot;, &quot;Doug&quot; );

      </code></pre></div>

      <p>The resulting string is:</p>

      <pre><code>&quot;Hello Bob, this is Doug.&quot;

      </code></pre>

      <p>See also:</p>

      <ul>

      <li><a
      href="https://developer.android.com/reference/android/content/Context.html#getString(int)">getString</a><br>

      in the Android Developer Reference</li>

      <li><a
      href="https://developer.android.com/reference/java/util/Formatter.html">Formatter</a><br>

      in the Android Developer Reference</li>

      <li><a
      href="https://developer.android.com/guide/topics/resources/string-resource.html#String">String
      Resources</a><br>

      in the Android Developer Guide</li>

      </ul>
    parameters:
      - name: resourceId
        type: Number
        summary: Resource ID from the Application or Android.
      - name: format
        type: any
        summary: Optional format arguments for the String resource. May be repeated.
        optional: true
    returns:
      type: String
  - name: invalidateOptionsMenu
    summary: Declares that the option menu has changed and should be recreated.
    description: >
      <p>This method needs to be used in Android 3.0 and above when changing
      menus at runtime.  See<br>

      <a
      href="https://developer.android.com/guide/topics/ui/menus.html#ChangingTheMenu">changingTheMenu</a>
      in<br>

      the Android API Reference for more details.</p>
  - name: setRequestedOrientation
    summary: Sets the requested Activity orientation.
    description: >
      <p>See also:<br>

      <a
      href="https://developer.android.com/reference/android/app/Activity.html#setRequestedOrientation(int)">setRequestedOrientation</a><br>

      in the Android API Reference.</p>
    parameters:
      - name: orientation
        type: Number
        summary: Orientation mode for the activity.
  - name: setResult
    summary: Sets the result of this activity using an <code>Intent</code>.
    description: >
      <p>This method should only be used by <a
      href="Titanium.Android.rootActivity">Ti.Android.rootActivity</a> when
      launched<br>

      by another app via <a
      href="Titanium.Android.Activity.startActivityForResult">startActivityForResult</a>.
      After calling<br>

      <code>setResult()</code>, you are expected to call the root activity's <a
      href="Titanium.Android.Activity.finish">finish</a><br>

      method afterwards to return the result to the calling app.</p>

      <p>See Android's documentation for<br>

      <a
      href="https://developer.android.com/reference/android/app/Activity.html#setResult(int)">setResult</a>.</p>
    parameters:
      - name: resultCode
        type: Number
        summary: Result code for this activity.
      - name: intent
        type: Titanium.Android.Intent
        summary: An optional <code>Intent</code> with extra result data.
        optional: true
  - name: setSupportActionBar
    summary: Sets a toolbar instance to be used as an ActionBar.
    description: >
      <p>This method is used if you want to add a Toolbar as an ActionBar after
      the Activity has been created.<br>

      If you want to set it up before that <a
      href="Titanium.Android.Activity.supportToolbar">supportToolbar</a> must be
      used.</p>
    parameters:
      - name: toolbar
        type: Titanium.UI.Toolbar
        summary: Instance of a toolbar to be used as an ActionBar
  - name: startActivity
    summary: >-
      Starts a new activity, using the passed in <code>Intent</code> as the
      description.
    description: >
      <p>See also: <a
      href="https://developer.android.com/reference/android/app/Activity.html#startActivity(android.content.Intent)">startActivity</a><br>

      in the Android Developer Reference.</p>
    parameters:
      - name: intent
        type: Titanium.Android.Intent
        summary: Description of the activity to start.
  - name: startActivityForResult
    summary: >-
      The same as <code>startActivity</code>, but also accepts a callback
      function for handling the result of the started Activity.
    description: >
      <p>See also:<br>

      [startActivityForResult](https://developer.android.com/reference/android/app/Activity.html#startActivityForResult(android.content.Intent,
      int))<br>

      in the Android Developer Reference.</p>
    parameters:
      - name: intent
        type: Titanium.Android.Intent
        summary: Description of the activity to start.
      - name: callback
        type: Callback<ActivityResult>
        summary: >
          Callback function to be executed when the activity sets result.
          See<br>

          examples.<br>
  - name: openOptionsMenu
    summary: Programmatically opens the options menu.
    description: >
      <p>See also:
      [onMenuOpened](https://developer.android.com/reference/android/app/Activity.html#onMenuOpened(int,
      android.view.Menu))<br>

      in the Android API Reference.</p>
  - name: sendBroadcast
    summary: >-
      Broadcast the passed in <code>Intent</code> to all
      <code>BroadcastReceiver</code>s.
    parameters:
      - name: intent
        type: Titanium.Android.Intent
        summary: Description of the broadcast.
  - name: sendBroadcastWithPermission
    summary: >-
      Broadcast the passed in <code>Intent</code> to all
      <code>BroadcastReceiver</code>s with an optional permission.
    parameters:
      - name: intent
        type: Titanium.Android.Intent
        summary: Description of the broadcast.
      - name: receiverPermission
        type: String
        summary: >-
          Name of the permission that the receiver should hold in order to
          receive the broadcast.
        optional: true
events:
  - name: newintent
    summary: >
      Fired when the activity is already running and an intent different than
      the one that launched it was received.<br>
    description: >
      <p>This event will only be fired by <a
      href="Titanium.Android.rootActivity">Ti.Android.rootActivity</a>, which
      is<br>

      the splash screen activity. This event will never be fired by any of the
      child activities. The root<br>

      activity' <a href="Titanium.Android.Intent">intent</a> property will be
      updated when to the new intent when fired.</p>

      <p>See also:<br>

      <a
      href="https://developer.android.com/reference/android/app/Activity.html#onNewIntent(android.content.Intent)">onNewIntent</a><br>

      in the Android Developer Reference.</p>
    properties:
      - name: intent
        type: Titanium.Android.Intent
        summary: >-
          The <code>Intent</code> passed to the native <code>onNewIntent</code>
          method.
  - name: onIntent
    summary: Fired when the activity is launched.
    properties:
      - name: intent
        type: Titanium.Android.Intent
        summary: The <code>Intent</code> used to launch the Activity.
  - name: userleavehint
    summary: >-
      Fired when the activity is about to go into the background as a result of
      user choice.
    description: >
      <p>See also:<br>

      <a
      href="https://developer.android.com/reference/android/app/Activity.html#onUserLeaveHint()">onUserLeaveHint</a><br>

      in the Android Developer Reference.</p>
  - name: userinteraction
    summary: >-
      Called whenever a key, touch, or trackball event is dispatched to the
      activity.
    description: >
      <p>Implement this method if you wish to know that the user has interacted
      with the device in some<br>

      way while your activity is running. This event and
      <code>userleavehint</code> are intended to help activities<br>

      manage status bar notifications intelligently; specifically, for helping
      activities determine the<br>

      proper time to cancel a notfication.</p>

      <p>All calls to your activity's &quot;userleavehint&quot; event will be
      accompanied by calls to &quot;userinteraction&quot;.<br>

      This ensures that your activity will be told of relevant user activity
      such as pulling down the<br>

      notification pane and touching an item there.</p>

      <p>Note that this callback will be invoked for the touch down action that
      begins a touch gesture,<br>

      but may not be invoked for the touch-moved and touch-up actions that
      follow.</p>

      <p>See also:<br>

      <a
      href="https://developer.android.com/reference/android/app/Activity.html#onUserInteraction()">onUserInteraction</a><br>

      in the Android Developer Reference.</p>
examples:
  - title: Callback Example
    code:
      - content: |-
          activity.startActivityForResult(intent, function(e) {
              // The request code used to start this Activity
              var requestCode = e.requestCode;
              // The result code returned from the activity
              // (https://developer.android.com/reference/android/app/Activity.html#StartingActivities)
              var resultCode = e.resultCode;
              // A Titanium.Android.Intent filled with data returned from the Activity
              var intent = e.intent;
              // The Activity the received the result
              var source = e.source;
          });
        language: js
    intro: >-
      The following example shows how to start an activity and retrieve a result
      code

      and optional data intent when the activity ends.
---

# Titanium.Android.Activity

The Titanium binding of an Android Activity.

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

#### Activity Lifecycle

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

#### Don't keep activities option

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

#### Deprecated Behavior

Prior to Release 8.0.0, you would set the below "tiapp.xml" property to `true` to handle the case
where the Android OS would automatically close all child activity windows after the app has been backgrounded
for about 30 minutes, bringing the app back to the root splash screen activity window. The below property
would restart your app's UI in this case. This is no longer needed in 8.0.0 since Titanium now sets the
"AndroidManifest.xml" setting
[android:alwaysRetainTaskState](https://developer.android.com/guide/topics/manifest/activity-element#always)
to the root activity instead

``` xml
<property name="ti.android.root.reappears.restart" type="bool">true</property>
```

Prior to Release 3.4.0, to monitor lifecycle events, use the activity's events, `create`, `destroy`,
`pause`, `resume`, `start` and `stop`, to be notified when an activity is created, destroyed, paused,
resumed, started and stopped, respectively.

You can only set Activity properties from a TabGroup object after the tab group opens.

Prior to Release 3.2.0, you can create either a "lightweight" or "heavyweight" window, as
described on the [Titanium.UI.Window](/api/titanium/ui/window) reference page. A *heavyweight* window creates a
new `Activity`. A *lightweight* window runs inside the same activity as the code that
created it.  If you try to reference the activity of lightweight window, it returns undefined.


**Extends:** `Titanium.Proxy` · **Since:** 1.5 · **Platforms:** android

<ApiProperties />

<ApiMethods />

<ApiEvents />

<ApiExamples />

