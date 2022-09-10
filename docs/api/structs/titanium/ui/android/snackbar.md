---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/Android/Snackbar.yml
---
# Titanium.UI.Android.Snackbar

<TypeHeader/>

## Overview

For design guidelines, see
[Material design: Snackbars](https://material.io/components/snackbars)

## Examples

### Show a Snackbar

Display a Snackbar with an action button.

``` js
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
```

<ApiDocs/>
