---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/Android/FloatingActionButton.yml
---
# Titanium.UI.Android.FloatingActionButton

<TypeHeader/>

## Overview

For design guidelines, see
[Material design: Snackbars](https://material.io/components/buttons-floating-action-button)

## Examples

### Show a floating action button (FAB)

``` js
const win = Ti.UI.createWindow();
const fab = Ti.UI.Android.createFloatingActionButton({
  bottom: 10,
  right: 10,
  image: "/appicon.png"
});
win.add(fab);
win.open();
```

<ApiDocs/>
