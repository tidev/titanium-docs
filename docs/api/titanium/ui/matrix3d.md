# Titanium.UI.Matrix3D

<TypeHeader/>

## Overview

The 3D Matrix is created by <Titanium.UI.createMatrix3D>. A 3D transform is
used to rotate, scale, translate, or skew the objects in three-dimensional
space. A 3D transform  is represented by a 4 by 4 matrix.

You create an `identity matrix` by creating a 3D Matrix with an empty
constructor.

## Examples

### Apply a 3D Matrix to a Label

Move a label through a translation that repositions it from 100px to 200px from the top of
the display.

``` js
var win = Ti.UI.createWindow({
  backgroundColor: 'white'
});

var label = Ti.UI.createLabel({
  font: { fontSize : 50 },
  text: 'Titanium',
  textAlign: 'center',
  top: 100
});
win.add(label);

var button = Ti.UI.createButton({
  title: 'Animate',
  bottom: 20,
  width: 200,
  height: 40
});
win.add(button);

button.addEventListener('click', function() {
  var t1 = Ti.UI.createMatrix3D();
  t1 = t1.translate(0, 100, 200);
  t1.m34 = 1.0 / -90.0;
  var a1 = Ti.UI.createAnimation();
  a1.transform = t1;
  a1.duration = 800;
  label.animate(a1);
});
win.open();
```


<ApiDocs/>
