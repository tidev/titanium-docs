---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/Clipboard/Clipboard.yml
---
# Titanium.UI.Clipboard

<TypeHeader/>

## Overview

The Clipboard is a temporary data store, used to save a single item of data that may then
be accessed by the user using UI copy and paste interactions within an app or between apps.

On iOS, the module's `setData()` and `getData()` methods enable multiple representations of the
same data item to be stored together with their respective
[MIME type](http://en.wikipedia.org/wiki/Internet_media_type) to describe their format. For
example, `'text'` and `'text/plain'` for text, and `'image/jpg'` and `'image/png'` for an image.
iOS Will report back the type of data representation in `getItems()` as 
[Universal Type Identifiers](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html).

When working with text, either of the `getData()`/`setData()` methods may be used with a `'text/plain'` type, or
the `getText()`/`hasText()`/`setText()` methods without the need to specify the type.

Android currently only supports text data to be stored.

### Clipboard Data Types

The `getText()`/`hasText()`/`setText()` methods are equivalent to calling `getData()`/`setData()` with a `'text'` or `'text/plain'`
type. These work with plain Unicode strings.

An image is stored using the `'image'` type, or an explicit image MIME type, and is returned as
a <Titanium.Blob> (binary) type.

A URL is stored with the `'url'` or `'text/uri-list'` type, and is returned as a string.

Any data type that is specified but not correctly mapped to a clipboard type by the system is
retrieved as a <Titanium.Blob> type.

## Examples

### Copy Text to the Clipboard

Clear the clipboard and output the resulting empty clipboard to console.

Then, store the string, "hello", to the clipboard and output it from the clipboard to the
console.

``` js
Ti.API.info('Deleting all text in Clipboard');
Ti.UI.Clipboard.clearText();
Ti.API.info('Clipboard.getText(): ' + Ti.UI.Clipboard.getText()); // returns empty string on Android and undefined on iOS
Ti.API.info('Set text Clipboard to hello');
Ti.UI.Clipboard.setText('hello');
Ti.API.info('Clipboard.hasText(), should be true: ' + Ti.UI.Clipboard.hasText()); // returns true on Android and 1 on iOS
Ti.API.info('Clipboard.getText(), should be hello: ' + Ti.UI.Clipboard.getText());
```

### Set multiple items including privacy options (iOS 10 and later)

The items are represented as an array that holds different objects of key-value items. Optionally,
you can set privacy options described in `Ti.UI.CLIPBOARD_OPTION_*`. Note that you can not have the
same two keys in one object and the key must match a valid mime-type. If no valid mime-type is specified

``` js
var win = Ti.UI.createWindow({
    backgroundColor: "#fff"
});

var btn1 = Ti.UI.createButton({
    title: "Set clipboard items",
    top: 40
});

var btn2 = Ti.UI.createButton({
    title: "Get clipboard items",
    top: 80
});

btn1.addEventListener("click", function () {
  const options = {};
  options[Ti.UI.CLIPBOARD_OPTION_LOCAL_ONLY] = true;
  options[Ti.UI.CLIPBOARD_OPTION_EXPIRATION_DATE] = new Date(2030, 4, 20);

    Ti.UI.Clipboard.setItems({
      items: [{
          "text/plain": "John",
      },{
          "text/plain": "Doe"
      }],
      options
  });
});

btn2.addEventListener("click", function () {
    alert(Ti.UI.Clipboard.getItems());
});

win.add(btn1);
win.add(btn2);
win.open();
```

### Use of named clipboard in iOS

``` js
var clipboard1 = Ti.UI.createClipboard({
    name: 'myClipboard',
    allowCreation: true
});
clipboard1.setText('hello');

var clipboard2 = Ti.UI.createClipboard({
    name: 'myClipboard'
});

Ti.API.info('Clipboard name is: ' + clipboard1.name);
Ti.API.info('Both clipboards should return "hello"');
Ti.API.info('clipboard1.getText() ' + clipboard1.getText());
Ti.API.info('clipboard2.getText() ' + clipboard2.getText());
```

### Use of unique named clipboard in iOS

``` js
var clipboard = Ti.UI.createClipboard({
    unique: true
});
clipboard.setText('hello');

Ti.API.info('clipboard name is: ' + clipboard.name);
Ti.API.info('clipboard.getText() ' + clipboard.getText());
```

<ApiDocs/>
