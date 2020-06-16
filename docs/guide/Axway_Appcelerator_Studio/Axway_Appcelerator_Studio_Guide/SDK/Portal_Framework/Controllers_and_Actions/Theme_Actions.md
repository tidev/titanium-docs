---
title: Theme Actions
weight: '90'
---

# Theme Actions

## Requirements

The examples in this page use the _**Prototype**_ library, which is included by default inside a portal. However, the same concepts may be applied using other implementations.

## Description

These set of actions can retrieve a Theme information from the Studio. This includes getting a list of available themes, getting the active theme, and setting the active theme.

## Invocation

This command is executed immediately in a synchronous way.

## Get all available themes

The following _dispatch_ call will get a names array of all the available Themes names:

```javascript
var allThemes = dispatch($H({
  controller: 'portal.themes',
  action: "getThemes"
}).toJSON()).evalJSON();
```

The returned value is an array of strings (names).

## Get the active theme name

The following _dispatch_ call will get the active theme name string:

```javascript
var activeTheme= dispatch($H({
  controller: 'portal.themes',
  action: "getActiveTheme"
}).toJSON()).evalJSON();
```

## Set an active theme

The following code will set an active theme by passing a valid theme name.

```javascript
var result = dispatch($H({
  controller: 'portal.themes',
  action: "setActiveTheme",
  args: '["My-Theme"]'
}).toJSON()).evalJSON();
```

The _result_ value can be 'OK' or 'ERROR', which indicates if the operation was successful.

## Sample of use

This code lists all available themes in a dropdown list, select the active theme in the list, and allow switching a theme with a click of a button.

From _**[studio3-sdk](https://github.com/aptana/studio3-sdk)**_ repository (_themes.js_)

```javascript
/**
 * Render the items that will display Theme information and control.
 */
render : function() {
  var themeDiv = $('themes');
  with (Elements.Builder) {
    if (typeof (console) !== 'undefined' && typeof (dispatch) !== 'undefined') {
      console.log("Dispatching the 'getThemes' action on the 'portal.themes' controller...");
      var allThemes = dispatch($H({
        controller: 'portal.themes',
        action: "getThemes"
      }).toJSON()).evalJSON();
      console.log("Dispatching the 'getActiveTheme' action on the 'portal.themes' controller...");
      var activeTheme = dispatch($H({
        controller: 'portal.themes',
        action: "getActiveTheme"
      }).toJSON()).evalJSON();
      themeSelectElement = select();
      for (var i = 0; i < allThemes.length; i++) {
        var op = option(allThemes[i]);
        if (activeTheme == allThemes[i]) {
          op.selected = true;
        }
        themeSelectElement.appendChild(op);
      }
      themeDiv.appendChild(span("Installed Themes: "));
      themeDiv.appendChild(themeSelectElement);
      // Add a button to trigger a Theme change
      var changeBt = button({
        'type': 'button'
      }, "Change");
      themeDiv.appendChild(changeBt);
      changeBt.observe('click', function(e) {
        var item = themeSelectElement.options[themeSelectElement.selectedIndex].text;
        console.log("Dispatching the 'setActiveTheme' action on the 'portal.themes' controller with the value of " + item + "...");
        dispatch($H({
          controller: 'portal.themes',
          action: "setActiveTheme",
          args: '["' + item + '"]'
        }).toJSON()).evalJSON();
        return false;
      });
    }
  }
}
```
