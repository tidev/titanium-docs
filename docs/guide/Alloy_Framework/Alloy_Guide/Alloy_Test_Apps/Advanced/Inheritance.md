---
title: Inheritance
weight: '90'
---

# Inheritance

Demonstrates how an Alloy controller can inherit functionality from another controller.

::: tip 💡 App folder location
_alloy_/test/apps/**advanced/inheritance**
:::
![inheritance](./inheritance.png)

The parent controller exports its inheritable properties or methods on its **`exports`** property. To inherit the parent's functionality, the child controller assigns the base name of parent controller to its `exports.baseController` property. For example, in the sample application t he **controllers/baseDialog.js** file defines the dialog's common functionality, including two methods named `openDialog()` and `closeDialog()`.

**app/controllers/baseDialog.js**

```javascript
var args = arguments[0] || {};
$.message.text = args.message || 'dialog';
exports.openDialog = function(win) {
    $.refWin = win;
    $.refWin.add($.cover);
    $.refWin.add($.dialog);
};
exports.closeDialog = function() {
    $.refWin.remove($.cover);
    $.refWin.remove($.dialog);
    $.refWin = $.cover = $.dialog = null;
};
```

The child controller, defined by **controllers/animatedDialog.js,** inherits from `baseController.js` and overrides the parent's `openDialog()` function with a version that animates the dialog window's opacity as it opens.

```
// Establish inheritance from baseDialog
exports.baseController = 'baseDialog';
exports.openDialog = function(win) {
    $.refWin = win;
    // make invisible
    $.cover.opacity = 0;
    $.dialog.opacity = 0;
    // add to reference window
    $.refWin.add($.cover);
    $.refWin.add($.dialog);
    // animate in the opacity
    $.cover.animate({
        duration: 500,
        opacity: 0.5
    });
    $.dialog.animate({
        duration: 500,
        opacity: 1
    });
};
```
