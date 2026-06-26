---
title: Titanium.UI.Matrix2D
properties:
  - name: a
    type: Number
    summary: The entry at position [1,1] in the matrix.
  - name: b
    type: Number
    summary: The entry at position [1,2] in the matrix.
  - name: c
    type: Number
    summary: The entry at position [2,1] in the matrix.
  - name: d
    type: Number
    summary: The entry at position [2,2] in the matrix.
  - name: tx
    type: Number
    summary: The entry at position [3,1] in the matrix.
  - name: ty
    type: Number
    summary: The entry at position [3,2] in the matrix.
methods:
  - name: invert
    summary: Returns a matrix constructed by inverting this matrix.
    returns:
      type: Titanium.UI.Matrix2D
  - name: multiply
    summary: Returns a matrix constructed by combining two existing matrices.
    description: >
      <p>The argument, <code>t2</code> is concatenated to the matrix instance
      against which the function is invoked. The<br>

      resulting matrix is the result of multiplying this matrix by
      <code>t2</code>. You might perform several<br>

      multiplications in order to create a single matrix that contains the
      cumulative effects of<br>

      several transformations.</p>

      <p>Note that matrix operations are not commutative -- the order in which
      you concatenate matrices<br>

      is important. That is, the result of multiplying matrix <code>t1</code> by
      matrix <code>t2</code> does not necessarily<br>

      equal the result of multiplying matrix <code>t2</code> by matrix
      <code>t1</code>.</p>
    parameters:
      - name: t2
        type: Titanium.UI.Matrix2D
        summary: The second matrix.
    returns:
      type: Titanium.UI.Matrix2D
  - name: rotate
    summary: Returns a matrix constructed by rotating this matrix.
    description: >
      <p>There are two distinct versions of this method, depending on whether
      one argument<br>

      or two are specified.</p>

      <ul>

      <li><code>rotate(angle)</code>. The standard <code>rotate</code>
      method.</li>

      <li><code>rotate(fromAngle, toAngle)</code>. Android only. Used for
      specifying rotation<br>

      animations.</li>

      </ul>

      <p>In both cases, a positive value specifies clockwise rotation and a
      negative value<br>

      specifies counter-clockwise rotation.</p>

      <p>Details for each version are discussed below.</p>

      <h4>rotate(angle)</h4>

      <p>Returns a matrix constructed by rotating this matrix.</p>

      <p>Note that the resulting  matrix only expresses the final
      transformation, not the<br>

      direction of the rotation. For example, the matrix produced by
      <code>m1.rotate(-10)</code><br>

      is identical to the matrix produced by <code>m1.rotate(350)</code> and
      <code>m1.rotate(710)</code>.</p>

      <p>Note that if you specify a rotation matrix as the
      <code>transform</code> property of an<br>

      animation, the animation animates the view from its current rotation to
      the<br>

      rotation represented by the matrix by its shortest path. So to rotate a
      view<br>

      in a complete circle, the easiest method is to chain together three
      animations,<br>

      rotating 120 degrees each time.</p>

      <p>For the purposes of animation, it should be noted that the rotation
      angle is<br>

      normalized to the range -180 &lt;= angle &lt; 180. In other<br>

      words, an angle of 180 degrees is normalized to -180. This makes no
      difference<br>

      except when determining which direction an animation rotates. 179 degrees
      rotates<br>

      rotate clockwise, but 180 degrees is normalized to -180, so rotates
      counter-clockwise.</p>

      <h4>rotate(angle, toAngle) -- Android Only</h4>

      <p>This is an Android-specific method used for creating rotation
      animations.<br>

      Returns a <code>Matrix2D</code> object that represents a rotation from
      <code>angle</code> to <code>toAngle</code>.</p>

      <p>Angles are specified in degrees. Positive values represent clockwise
      rotation, and negative values<br>

      represent counter-clockwise rotation. Values are not normalized, so for
      example an<br>

      angle of 720 degrees represents two complete clockwise revolutions.</p>

      <p>The resulting object cannot be expressed as an affine transform, but
      can be used with the<br>

      <a href="/api/titanium/ui/animation">Titanium.UI.Animation.transform</a>
      property to specify a rotation animation.</p>
    parameters:
      - name: angle
        type: Number
        summary: >
          Angle to rotate to, in degrees. On Android, if <code>toAngle</code> is
          specified, this specifies<br>

          the starting angle for a rotation animation.<br>
      - name: toAngle
        type: Number
        summary: Ending angle for a rotation animation, in degrees. Android only.
        optional: true
    returns:
      type: Titanium.UI.Matrix2D
  - name: scale
    summary: >
      Returns a <code>Matrix2D</code> object that specifies a scaling animation
      from one scale to another.<br>
    description: >
      <p>There are two distinct versions of this method, depending on whether
      two arguments<br>

      or four are specified.</p>

      <ul>

      <li><code>scale(sx, sy)</code>. The standard <code>scale</code>
      method.</li>

      <li><code>scale(fromSx, fromSy, toSx, toSy)</code>. Android only. Used for
      specifying a<br>

      scaling animation from one size to another.</li>

      </ul>

      <h4>scale(sx, sy)</h4>

      <p>Returns a matrix constructed by applying a scale transform to this
      matrix.<br>

      Scaling the current matrix by <code>sx</code> along the X axis and by
      <code>sy</code> along the Y axis.</p>

      <h4>scale(sx, sy, toSx, toSy) -- Android Only</h4>

      <p>This Android-specific method returns a <code>Matrix2D</code> object
      that can be used to<br>

      create a scaling animation from one scale factor to another scale
      factor.</p>

      <p>The resulting object cannot be expressed as an affine transform, but
      can be used with the<br>

      <a href="/api/titanium/ui/animation">Titanium.UI.Animation.transform</a>
      property to specify a scaling animation.</p>
    parameters:
      - name: sx
        type: Number
        summary: >
          Horizontal scaling factor. If <code>toSx</code> and <code>toSy</code>
          are specified,<br>

          this specifies the starting horizontal scaling factor, at the
          beginning<br>

          of an animation.<br>
      - name: sy
        type: Number
        summary: >
          Vertical scaling factor. If <code>toSx</code> and <code>toSy</code>
          are specified,<br>

          this specifies the starting vertical scaling factor, at the beginning
          of<br>

          an animation.<br>
      - name: toSx
        type: Number
        summary: >
          Ending horizontal scaling factor, at the end of an animation.<br>

          If specified, <code>toSy</code> must be specified as well. Android
          only.<br>
        optional: true
      - name: toSy
        type: Number
        summary: >
          Ending vertical scaling factor, at the end of an animation.<br>

          If specified, <code>toSx</code> must be specified as well. Android
          only.<br>
        optional: true
    returns:
      type: Titanium.UI.Matrix2D
  - name: translate
    summary: >-
      Returns a matrix constructed by applying a translation transform to this
      matrix.
    parameters:
      - name: tx
        type: Number
        summary: Horizontal component of the translation.
      - name: ty
        type: Number
        summary: Vertical component of the translation.
    returns:
      type: Titanium.UI.Matrix2D
examples:
  - title: Apply a 2D Matrix to a Label
    code:
      - content: |-
          var win = Ti.UI.createWindow();

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
        language: js
    intro: The following uses a 2D matrix to translate a label in the y direction.
---

# Titanium.UI.Matrix2D

The 2D Matrix is an object for holding values for an affine transformation matrix.

A 2D matrix is used to rotate, scale, translate, or skew the objects in a two-dimensional space.
A 2D affine transformation can be  represented by a 3 by 3 matrix:

&lt;table&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;i&gt;a&lt;/i&gt;&lt;/td&gt;
      &lt;td&gt;&lt;i&gt;b&lt;/i&gt;&lt;/td&gt;
      &lt;td&gt;0&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;i&gt;c&lt;/i&gt;&lt;/td&gt;
      &lt;td&gt;&lt;i&gt;d&lt;/i&gt;&lt;/td&gt;
      &lt;td&gt;0&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;i&gt;tx&lt;/i&gt;&lt;/td&gt;
      &lt;td&gt;&lt;i&gt;ty&lt;/i&gt;&lt;/td&gt;
      &lt;td&gt;1&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;

The third column is constant (0,0,1).

On iOS, the matrix terms, `a`, `b`, `c`, `d`, `tx`, and `ty`,
are available as properties. On Android, the matrix terms are not available as properties.

Use the [Titanium.UI.createMatrix2D](/api/titanium/ui) method to create a new 2D matrix. You can
pass an optional &lt;Matrix2DCreationDict&gt; dictionary to the method to initialize the
matrix. For example, the following creates a new matrix with a 45 degree rotation.

``` js
var matrix = Ti.UI.createMatrix2D({
    rotate: 45
});
```

If you pass no arguments, `createMatrix2D` returns an identity matrix.


**Extends:** `Titanium.Proxy` · **Since:** 8.0.0 · **Platforms:** android, iphone, ipad, macos

<ApiProperties />

<ApiMethods />

<ApiExamples />

