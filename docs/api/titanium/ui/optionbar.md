---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/OptionBar.yml
---
# Titanium.UI.OptionBar

<TypeHeader/>

## Overview

This is a view which shows a list of options where only 1 option is selectable by the user.

On iOS, this displays a
[segmented control](https://developer.apple.com/design/human-interface-guidelines/ios/controls/segmented-controls/).

On Android, this displays a
[toggle button group](https://material.io/components/buttons/android#toggle-button).

Use the <Titanium.UI.createOptionBar> method to create a Option Bar.

## Examples

### Text-Only Buttons

Creates an option bar of text buttons.

``` js
const win = Ti.UI.createWindow();
const optionBar = Ti.UI.createOptionBar({
  labels: [ 'Option 1', 'Option 2', Option 3 ]
});
optionBar.addEventListener('click', (e) => {
  Ti.API.info(`Option ${e.index} was selected.`);
});
win.add(optionBar);
win.open();
```

### Image-Only Buttons

Creates an option bar of image-only buttons.

``` js
const win = Ti.UI.createWindow();
const optionBar = Ti.UI.createOptionBar({
  labels: [
    { image: '/Option1.png' },
    { image: '/Option2.png' },
    { image: '/Option3.png' },
  ]
});
optionBar.addEventListener('click', (e) => {
  Ti.API.info(`Option ${e.index} was selected.`);
});
win.add(optionBar);
win.open();
```

### Buttons with Text and Images

Creates an option bar where each button shows an image to the left of its text.
This is only supported on Android. On iOS, if you set the `image` property,
then the `title` property is ignored.

``` js
const win = Ti.UI.createWindow();
const optionBar = Ti.UI.createOptionBar({
  labels: [
    { image: '/Option1.png', title: 'Option 1' },
    { image: '/Option2.png', title: 'Option 2' },
    { image: '/Option3.png', title: 'Option 3' },
  ]
});
optionBar.addEventListener('click', (e) => {
  Ti.API.info(`Option ${e.index} was selected.`);
});
win.add(optionBar);
win.open();
```

<ApiDocs/>
