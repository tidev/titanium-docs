---
title: Titanium.UI.Matrix3D
properties:
  - name: m11
    type: Number
    summary: The entry at position [1,1] in the matrix.
  - name: m12
    type: Number
    summary: The entry at position [1,2] in the matrix.
  - name: m13
    type: Number
    summary: The entry at position [1,3] in the matrix.
  - name: m14
    type: Number
    summary: The entry at position [1,4] in the matrix.
  - name: m21
    type: Number
    summary: The entry at position [2,1] in the matrix.
  - name: m22
    type: Number
    summary: The entry at position [2,2] in the matrix.
  - name: m23
    type: Number
    summary: The entry at position [2,3] in the matrix.
  - name: m24
    type: Number
    summary: The entry at position [2,4] in the matrix.
  - name: m31
    type: Number
    summary: The entry at position [3,1] in the matrix.
  - name: m32
    type: Number
    summary: The entry at position [3,2] in the matrix.
  - name: m33
    type: Number
    summary: The entry at position [3,3] in the matrix.
  - name: m34
    type: Number
    summary: The entry at position [3,4] in the matrix.
  - name: m41
    type: Number
    summary: The entry at position [4,1] in the matrix.
  - name: m42
    type: Number
    summary: The entry at position [4,2] in the matrix.
  - name: m43
    type: Number
    summary: The entry at position [4,3] in the matrix.
  - name: m44
    type: Number
    summary: The entry at position [4,4] in the matrix.
methods:
  - name: invert
    summary: Returns a matrix constructed by inverting this matrix.
    returns:
      type: Titanium.UI.Matrix3D
  - name: multiply
    summary: Returns a matrix constructed by combining two existing matrix.
    description: >
      <p>The result of this function is the first matrix multiplied by the
      second matrix. You might perform<br>

      several multiplications in order to create a single matrix that contains
      the cumulative effects of<br>

      several transformations. Note that matrix operations are not commutative -
      the order in which<br>

      you concatenate matrices is important. That is, the result of multiplying
      matrix t1 by matrix t2<br>

      does not necessarily equal the result of multiplying matrix t2 by matrix
      t1.</p>
    parameters:
      - name: t2
        type: Titanium.UI.Matrix3D
        summary: Matrix to concatenate to this matrix.
    returns:
      type: Titanium.UI.Matrix3D
  - name: rotate
    summary: Returns a matrix constructed by rotating this matrix.
    parameters:
      - name: angle
        type: Number
        summary: >-
          The angle, in degrees, by which to rotate the matrix. A positive value
          specifies counterclockwise rotation and a negative value specifies
          clockwise rotation.
      - name: x
        type: Number
        summary: The x part of the vector about which to rotate.
      - name: 'y'
        type: Number
        summary: The y part of the vector about which to rotate.
      - name: z
        type: Number
        summary: The z part of the vector about which to rotate.
    returns:
      type: Titanium.UI.Matrix3D
  - name: scale
    summary: Returns a matrix constructed by scaling this matrix.
    parameters:
      - name: sx
        type: Number
        summary: The value by which to scale x values of the matrix.
      - name: sy
        type: Number
        summary: The value by which to scale y values of the matrix.
      - name: sz
        type: Number
        summary: The value by which to scale z values of the matrix.
    returns:
      type: Titanium.UI.Matrix3D
  - name: translate
    summary: Returns a matrix constructed by translating an existing matrix.
    parameters:
      - name: tx
        type: Number
        summary: The value by which to move x values with the matrix.
      - name: ty
        type: Number
        summary: The value by which to move y values with the matrix.
      - name: tz
        type: Number
        summary: The value by which to move z values with the matrix.
    returns:
      type: Titanium.UI.Matrix3D
examples:
  - title: Apply a 3D Matrix to a Label
    code:
      - content: |-
          var win = Ti.UI.createWindow();

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
        language: js
    intro: >-
      Move a label through a translation that repositions it from 100px to 200px
      from the top of

      the display.
---

# Titanium.UI.Matrix3D

The 3D Matrix is an object for holding values for a 3D affine transform.

The 3D Matrix is created by [Titanium.UI.createMatrix3D](/api/titanium/ui). A 3D transform is
used to rotate, scale, translate, or skew the objects in three-dimensional
space. A 3D transform  is represented by a 4 by 4 matrix.

You create an `identity matrix` by creating a 3D Matrix with an empty
constructor.


**Extends:** `Titanium.Proxy` · **Since:** 8.0.0 · **Platforms:** iphone, ipad, macos

<ApiProperties />

<ApiMethods />

<ApiExamples />

