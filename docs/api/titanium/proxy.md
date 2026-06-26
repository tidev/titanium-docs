---
title: Titanium.Proxy
properties:
  - name: bubbleParent
    type: Boolean
    summary: Indicates if the proxy will bubble an event to its parent.
    description: >
      <p>Some proxies (most commonly views) have a relationship to other
      proxies, often<br>

      established by the add() method. For example, for a button added to a
      window, a<br>

      click event on the button would bubble up to the window. Other common
      parents are<br>

      table sections to their rows, table views to their sections, and
      scrollable views<br>

      to their views. Set this property to false to disable the bubbling to the
      proxy's parent.</p>
    platforms:
      - iphone
      - ipad
      - android
      - macos
    since:
      android: 3.0.0
      iphone: 3.0.0
      ipad: 3.0.0
      macos: 9.2.0
  - name: apiName
    type: String
    summary: The name of the API that this proxy corresponds to.
    description: >
      <p>The value of this property is the fully qualified name of the API. For
      example, <a href="Titanium.UI.Button">Button</a><br>

      returns <code>Ti.UI.Button</code>.</p>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 3.2.0
      iphone: 3.2.0
      ipad: 3.2.0
      macos: 9.2.0
  - name: lifecycleContainer
    type: Titanium.UI.Window, Titanium.UI.TabGroup
    summary: >-
      The Window or TabGroup whose Activity lifecycle should be triggered on the
      proxy.
    description: >
      <p>If this property is set to a Window or TabGroup, then the corresponding
      Activity lifecycle event callbacks<br>

      will also be called on the proxy. Proxies that require the activity
      lifecycle will need this property set<br>

      to the appropriate containing Window or TabGroup.</p>
    platforms:
      - android
    since: 3.6.0
methods:
  - name: addEventListener
    summary: Adds the specified callback as an event listener for the named event.
    parameters:
      - name: name
        type: String
        summary: Name of the event.
      - name: callback
        type: Callback<Titanium.Event>
        summary: Callback function to invoke when the event is fired.
  - name: removeEventListener
    summary: Removes the specified callback as an event listener for the named event.
    description: >
      <p>Multiple listeners can be registered for the same event, so the<br>

      <code>callback</code> parameter is used to determine which listener to
      remove.</p>

      <p>When adding a listener, you must save a reference to the callback
      function<br>

      in order to remove the listener later:</p>

      <div class="language-js"><pre class="shiki"><code>var listener =
      function() { Ti.API.info(&quot;Event listener called.&quot;); }

      window.addEventListener('click', listener);

      </code></pre></div>

      <p>To remove the listener, pass in a reference to the callback
      function:</p>

      <div class="language-js"><pre
      class="shiki"><code>window.removeEventListener('click', listener);

      </code></pre></div>
    parameters:
      - name: name
        type: String
        summary: Name of the event.
      - name: callback
        type: Callback<Titanium.Event>
        summary: >-
          Callback function to remove. Must be the same function passed to
          <code>addEventListener</code>.
  - name: fireEvent
    summary: Fires a synthesized event to any registered listeners.
    parameters:
      - name: name
        type: String
        summary: Name of the event.
      - name: event
        type: Dictionary
        summary: >-
          A dictionary of keys and values to add to the <a
          href="/api/titanium/event">Titanium.Event</a> object sent to the
          listeners.
        optional: true
  - name: applyProperties
    summary: Applies the properties to the proxy.
    description: >
      <p>Properties are supplied as a dictionary. Each key-value pair in the
      object is applied to the proxy such that<br>

      myproxy[key] = value.</p>
    parameters:
      - name: props
        type: Dictionary
        summary: A dictionary of properties to apply.
---

# Titanium.Proxy

The base for all Titanium objects.

On platforms that use native code (Android and iOS), the `Proxy` type represents a
JavaScript wrapper or _proxy_ around a native object. Setting or getting a property
on a proxy object results in a method invocation on the native object. Likewise,
calling a method on the proxy object results in a method invocation on the native
object.

Some Titanium objects are _createable_: new instances of these objects can be created using
factory methods. For example, a [Window](Titanium.UI.Window) object can be created using the
[Titanium.UI.createWindow](/api/titanium/ui) method.

In general, developers should avoid modifying the prototype of a Titanium object, or
adding methods to a Titanium object. (Adding a simple property such as an ID value is
generally OK.)


**Since:** 0.1

<ApiProperties />

<ApiMethods />

