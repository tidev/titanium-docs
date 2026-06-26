---
title: Titanium.UI.Android.Snackbar
properties:
  - name: LENGTH_SHORT
    type: Number
    summary: |
      Use with <code>length</code> to specify the display time.<br>
  - name: LENGTH_LONG
    type: Number
    summary: |
      Use with <code>length</code> to specify the display time.<br>
  - name: LENGTH_INDEFINITE
    type: Number
    summary: |
      Use with <code>length</code> to specify the display time.<br>
  - name: length
    type: Number
    summary: Display time of the Snackbar
    description: >
      <p>Use with on of the constants:
      <code>Ti.UI.Android.Snackbar.LENGTH_SHORT</code>,<br>

      <code>Ti.UI.Android.Snackbar.LENGTH_LONG</code> or<br>

      <code>Ti.UI.Android.Snackbar.LENGTH_INDEFINITE</code></p>
    since: 10.2.0
  - name: action
    type: String
    summary: Text of the right hand action button
    since: 10.2.0
  - name: message
    type: String
    summary: Text of Snackbar
    since: 10.2.0
methods:
  - name: show
    summary: Show the Snackbar
events:
  - name: click
    summary: Fired when the action button is clicked
    properties:
      - name: action
        type: String
        summary: The text of the action button.
examples:
  - title: Show a Snackbar
    code:
      - content: |-
          const win = Ti.UI.createWindow();
          const btn = Ti.UI.createButton({
            title: 'show message'
          });
          btn.addEventListener('click', function() {
            snack.show();
          });

          const snack = Ti.UI.Android.createSnackbar({
            message: 'Hello Snackbar!',
            length: Ti.UI.Android.Snackbar.LENGTH_INDEFINITE,
            action: 'click me'
          });
          snack.addEventListener('click', function(e) {
            console.log(e.action);
          });

          win.add([btn, snack]);
          win.open();
        language: js
    intro: Display a Snackbar with an action button.
---

# Titanium.UI.Android.Snackbar

Snackbars provide brief messages about app processes at the bottom of the screen.

| Android |
| ------- |
| ![Android](/images/snackbar_android.png) |

For design guidelines, see
[Material design: Snackbars](https://material.io/components/snackbars)


**Extends:** `Titanium.UI.View` · **Since:** 11.1.0 · **Platforms:** android

<ApiProperties />

<ApiMethods />

<ApiEvents />

<ApiExamples />

