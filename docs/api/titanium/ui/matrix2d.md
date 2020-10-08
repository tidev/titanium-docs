---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/Matrix2D.yml
---
# Titanium.UI.Matrix2D

<TypeHeader/>

## Overview

A 2D matrix is used to rotate, scale, translate, or skew the objects in a two-dimensional space.
A 2D affine transformation can be  represented by a 3 by 3 matrix:

<table>
  <tbody>
    <tr>
      <td><i>a</i></td>
      <td><i>b</i></td>
      <td>0</td>
    </tr>
    <tr>
      <td><i>c</i></td>
      <td><i>d</i></td>
      <td>0</td>
    </tr>
    <tr>
      <td><i>tx</i></td>
      <td><i>ty</i></td>
      <td>1</td>
    </tr>
  </tbody>
</table>

The third column is constant (0,0,1).

On iOS, the matrix terms, `a`, `b`, `c`, `d`, `tx`, and `ty`,
are available as properties. On Android, the matrix terms are not available as properties.

Use the <Titanium.UI.createMatrix2D> method to create a new 2D matrix. You can
pass an optional <Matrix2DCreationDict> dictionary to the method to initialize the
matrix. For example, the following creates a new matrix with a 45 degree rotation.

``` js
var matrix = Ti.UI.createMatrix2D({
    rotate: 45
});
```

If you pass no arguments, `createMatrix2D` returns an identity matrix.

## Examples

### Apply a 2D Matrix to a Label

The following uses a 2D matrix to translate a label in the y direction.

``` js
var win = Ti.UI.createWindow({
  backgroundColor: 'white'
});

var label = Ti.UI.createLabel({
  font: { fontSize: 50 },
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
  var t1 = Ti.UI.createMatrix2D();
  t1 = t1.translate(0, 300);
  var a1 = Ti.UI.createAnimation();
  a1.transform = t1;
  a1.duration = 800;
  label.animate(a1);
});
win.open();
```

<ApiDocs/>
