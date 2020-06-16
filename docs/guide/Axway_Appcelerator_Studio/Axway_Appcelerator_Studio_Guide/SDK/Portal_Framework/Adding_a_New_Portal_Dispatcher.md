---
title: Adding a New Portal Dispatcher
weight: '20'
---

# Adding a New Portal Dispatcher

## Creating a New Dispatcher

If you've created a portal page, you may wish to add new portal handlers to do new actions within Studio.

The 'magic' is done through a 'dispatch' function that is injected into the internal browser when the portal loads the content. Once the 'dispatch' is in, JavaScript code in the remote content may interact with the Studio through JSON calls. Every call is designed to invoke a specific action on a specific controller that is implemented in the Studio. Controllers and Actions are contributed through extension points inside the Studio's code, so the browser may only invoke a specific set of pre-defined actions (such as plug-in installations). For example, saving a preference key inside the Studio is done by invoking this dispatch call:

```
dispatch($H({controller: 'portal.preferences', action: 'setPreferenceValue', args: {key: prefKey, value: val}}).toJSON());
```

Let's break this 'dispatch' to its pieces. The dispatch is made to call the 'portal.preferences' controller. This controller is one of the core controllers in the portal system and is already implemented. The actions are 'setPreferencesValue', and the arguments are the preference-key and its value.

All of that is held in a 'prototype' hash that is converted to JSON. In the same way, we would call a dispatch method to retrieve a preference value:

```
value = dispatch($H({controller: 'portal.preferences', action: 'getPreferenceValue', args: {key: control.getAttribute('key')}}).toJSON());
```

### Adding the JavaScript Code

Here is an example of adding a checkbox into your content that will interact with the Studio preferences:

#### Updating the HTML

In your HTML code, add this line to mark the location of the checkbox and its text. We'll handle this later on in JavaScript when the page loads.

```xml
<div id="load_toolbox" class='preference checkbox' text='Load the Toolbox on startup' key='open_developer_toolbox'></div>
```

#### Write the JavaScript Handler

Write the JavaScript code that will handle the dispatchers. Here is an actual JS implementation that creates the checkbox and interacts with the dispatch to create the desired outcome:

```javascript
Preferences = Class.create({
  /**
   * Render the items that are attached to the studio preferences.
   */
  render: function() {
    // Get the items that should be controlling/diaplaying the preference item.
    controls = [$('load_toolbox')];
    // For each control, get the
    with (Elements.Builder) {
      controls.each(function (control) {
        if (control) {
          if (navigator.appName == "Microsoft Internet Explorer") {
            clazz = control.getAttribute('className');
          } else {
            clazz = control.getAttribute('class');
          }
          if (clazz && clazz.match('preference')) {
            // TODO - For now we support only 'input' (checkbox) types.
            // We should add more as needed.
            if (clazz.match('checkbox')) {
              elm = input({'type': 'checkbox', 'key': control.getAttribute('key')});
              control.appendChild(elm);
              control.appendChild(span(control.getAttribute('text')));

              // Get the current preference value for this item
              if (typeof(console) !== 'undefined') {
                console.log("Dispatching the 'getPreferenceValue' action on the 'portal.preferences' controller...");
              }
              value = 'false';
              // Check that we have the dispatch browser function
              if (typeof(dispatch) !== 'undefined') {
                value = dispatch($H({controller: 'portal.preferences', action: "getPreferenceValue", args: {key: control.getAttribute('key')}}).toJSON());
              }
              // We expect true/false for checkboxes
              if (value == 'true') {
                elm.setAttribute("checked", "checked");
              }

              // Observe and report selection changes for this item
              elm.observe('click', function(e) {
                inputElement = e.element();
                if (inputElement) {
                  prefKey = inputElement.getAttribute('key');
                  // set the pref value
                  val = (inputElement.getValue() == 'on') ? 'true' : 'false';
                  if (typeof(console) !== 'undefined' && typeof(dispatch) !== 'undefined') {
                    console.log("Dispatching the 'setPreferenceValue' action on the 'portal.preferences' controller...");
                    dispatch($H({controller: 'portal.preferences', action: "setPreferenceValue", args: {key: prefKey, value: val}}).toJSON());
                  }
                  return false;
                }
              });
            }
          }
        }
      });
    }
  }
});
```

Note that the ''with (Elements.Builder)"' is using a supporting JavaScript that helps us in building HTML elements (you can take a look at ''elements.js'' under the toolbox repo).

The JavaScript above renders the checkbox after locating it by the ID. It then sets the initial state by dispatching for the preference key and listens to any click events to inform the Studio with any changes. Again, through a ''dispatch ''call.

#### Call the Handler

The last part is to call the code. We can do that from the same JS file, but we'll choose to create another JavaScript file and have it control the preferences interaction code and other code segments we'll add in the future. Our manager file will hold this code. If you are using the resource files with the stock portal page, this has been done for you already--you need to make sure to call

```
loadPortal()
```

in your body tag.

```javascript
var portal;

/**
 * The Portal class
 */
var Portal = Class.create({
  initialize: function() {
    this.preferences  = new Preferences();
    // Render any preferences-related items.
    this.preferences.render();
  }
}

/**
 * Call to load the portal
 */
function loadPortal() {
  if (typeof(portal) === 'undefined') {
    portal = new Portal();
  }
}
```

And finally, our HTML will load all the needed JavaScript files and call to load this JS:

```xml
<body onload="loadPortal()">
```

## Example: Integrate Dispatchers Into an HTML Page

As usual, it's always easier to take a look at a working implementation, so you are welcome to clone the **_rails3_** branch from **_git@github.com:aptana/toolbox-aptana-com.git_** and take a look at the way various dispatch calls interact with the web-content.
We also have a set of simpler examples at the **_git@github.com:aptana/studio3-sdk.git_** repo.
