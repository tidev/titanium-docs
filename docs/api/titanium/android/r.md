---
title: Titanium.Android.R
properties:
  - name: anim
    type: Object
    summary: >
      Animation resources. See<br>

      <a
      href="https://developer.android.com/reference/android/R.anim.html">R.anim</a><br>

      in the Android Developer Reference.<br>
  - name: animator
    type: Object
    summary: >
      Animator resources. See<br>

      <a
      href="https://developer.android.com/reference/android/R.animator.html">R.animator</a><br>

      in the Android Developer Reference.<br>
    since: 7.3.0
  - name: array
    type: Object
    summary: >
      Array resources. See <a
      href="https://developer.android.com/reference/android/R.array.html">R.array</a><br>

      in the Android Developer Reference.<br>
  - name: attr
    type: Object
    summary: >
      Attribute resources. See<br>

      <a
      href="https://developer.android.com/reference/android/R.attr.html">R.attr</a><br>

      in the Android Developer Reference.<br>
  - name: bool
    type: Object
    summary: >
      Boolean resources. See<br>

      <a
      href="https://developer.android.com/reference/android/R.bool.html">R.bool</a><br>

      in the Android Developer Reference.<br>
    since: 7.3.0
  - name: color
    type: Object
    summary: >
      Color resources. See<br>

      <a
      href="https://developer.android.com/reference/android/R.color.html">R.color</a><br>

      in the Android Developer Reference.<br>
  - name: dimen
    type: Object
    summary: >
      Dimension resources.  See<br>

      <a
      href="https://developer.android.com/reference/android/R.dimen.html">https://developer.android.com/reference/android/R.dimen.html</a><br>

      in the Android Developer Reference.<br>
  - name: drawable
    type: Object
    summary: >
      Drawable resources. See<br>

      <a
      href="https://developer.android.com/reference/android/R.drawable.html">R.drawable</a><br>

      in the Android Developer Reference.<br>
  - name: fraction
    type: Object
    summary: >
      Fraction resources. See<br>

      <a
      href="https://developer.android.com/reference/android/R.fraction.html">R.fraction</a><br>

      in the Android Developer Reference.<br>
    since: 7.3.0
  - name: id
    type: Object
    summary: >
      ID resources.  See<br>

      <a
      href="https://developer.android.com/reference/android/R.id.html">R.id</a><br>

      in the Android Developer Reference.<br>
  - name: integer
    type: Object
    summary: >
      Integer resources. See<br>

      <a
      href="https://developer.android.com/reference/android/R.integer.html">R.integer</a><br>

      in the Android Developer Reference.<br>
  - name: interpolator
    type: Object
    summary: >
      Interpolator resources. See<br>

      <a
      href="https://developer.android.com/reference/android/R.interpolator.html">R.fraction</a><br>

      in the Android Developer Reference.<br>
    since: 7.3.0
  - name: layout
    type: Object
    summary: >
      Layout resources. See<br>

      <a
      href="https://developer.android.com/reference/android/R.layout.html">R.layout</a><br>

      in the Android Developer Reference.<br>
  - name: menu
    type: Object
    summary: >
      Menu resources. See<br>

      <a
      href="https://developer.android.com/reference/android/R.menu.html">R.menu</a><br>

      in the Android Developer Reference.<br>
    since: 7.3.0
  - name: mipmap
    type: Object
    summary: >
      Mipmap resources. See<br>

      <a
      href="https://developer.android.com/reference/android/R.mipmap.html">R.mipmap</a><br>

      in the Android Developer Reference.<br>
    since: 7.3.0
  - name: plurals
    type: Object
    summary: >
      Plurals resources. See<br>

      <a
      href="https://developer.android.com/reference/android/R.plurals.html">R.plurals</a><br>

      in the Android Developer Reference.<br>
    since: 7.3.0
  - name: raw
    type: Object
    summary: >
      Raw resources. See<br>

      <a
      href="https://developer.android.com/reference/android/R.raw.html">R.raw</a><br>

      in the Android Developer Reference.<br>
    since: 7.3.0
  - name: string
    type: Object
    summary: >
      String resources. See<br>

      <a
      href="https://developer.android.com/reference/android/R.string.html">R.string</a><br>

      in the Android Developer Reference.<br>
  - name: style
    type: Object
    summary: >
      Style resources. See<br>

      <a
      href="https://developer.android.com/reference/android/R.style.html">R.style</a><br>

      in the Android Developer Reference.<br>
  - name: styleable
    type: Object
    summary: >
      Styleable resources. See<br>

      <a
      href="https://developer.android.com/reference/android/R.styleable.html">R.styleable</a><br>

      in the Android Developer Reference.<br>
  - name: transition
    type: Object
    summary: >
      Transition resources. See<br>

      <a
      href="https://developer.android.com/reference/android/R.transition.html">R.transition</a><br>

      in the Android Developer Reference.<br>
    since: 7.3.0
  - name: xml
    type: Object
    summary: >
      XML resources. See<br>

      <a
      href="https://developer.android.com/reference/android/R.xml.html">R.xml</a><br>

      in the Android Developer Reference.<br>
    since: 7.3.0
---

# Titanium.Android.R

The Titanium binding of the native Android `R` class, giving access to
Android system-wide resources or application resources.


To access system-wide resources your application's resources, use
[Titanium.Android.R](/api/titanium/android/r).
To access your application's resources, use [Titanium.App.Android.R](/api/titanium/app/android/r).

These properties and sub-properties correspond directly to the properties
of the the `android.R` class, and should have the same syntax.
To retrieve the "OK" string from system resources in Android:

``` js
Ti.Android.currentActivity.getString(Ti.Android.R.string.ok);
```

If the file  `platform/android/res/drawable/icon.png` exists in the
project, it can be accessed using its resource name, as follows:

``` js
var resid = Titanium.App.Android.R.drawable.icon;
```

See also:
[android.R](https://developer.android.com/reference/android/R.html) in the
Android Developer Reference.
For more information, refer to the official documentation on the Android
Developer website about
[accessing application resources](https://developer.android.com/guide/topics/resources/accessing-resources.html).

Starting in Titanium SDK 7.3.0, this API exposes all Android related R classes
for the usage in Hyperloop. For example, it can be used to access `menu` resources
as part of native user interfaces, e.g. `BottomNavigationView` or `RecyclerView`.
See an example in the [Hyperloop Sample App](https://github.com/tidev/hyperloop-examples) for details!


**Extends:** `Titanium.Proxy` · **Since:** 1.5 · **Platforms:** android

<ApiProperties />

