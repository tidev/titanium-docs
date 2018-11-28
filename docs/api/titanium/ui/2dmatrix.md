---
breadcrumbLabel: 2DMatrix
sidebar: auto
---

# Titanium.UI.2DMatrix

<ProxySummary/>

## Overview

A 2D matrix is used to rotate, scale, translate, or skew the objects in a two-dimensional space.
A 2D affine transformation can be  represented by a 3 by 3 matrix:

<table>
<tr><td><i>a</i></td><td><i>b</i></td><td>0</td></tr>
<tr><td><i>c</i></td><td><i>d</i></td><td>0</td></tr>
<tr><td><i>tx</i></td><td><i>ty</i></td><td>1</td></tr>
</table>

The third column is constant (0,0,1).

On iOS, the matrix terms, `a`, `b`, `c`, `d`, `tx`, and `ty`,
are available as properties. On Android, the matrix terms are not available as properties.

Use the <Titanium.UI.create2DMatrix> method to create a new 2D matrix. You can
pass an optional <MatrixCreationDict> dictionary to the method to initialize the
matrix. For example, the following creates a new matrix with a 45 degree rotation.

    var m = Ti.UI.create2DMatrix({
        rotate: 45
    });

If you pass no arguments, `create2DMatrix` returns an identity matrix.

<ApiDocs/>
