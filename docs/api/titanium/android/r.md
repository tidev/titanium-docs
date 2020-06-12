# Titanium.Android.R

<TypeHeader/>

## Overview

To access system-wide resources your application's resources, use
<Titanium.Android.R>.
To access your application's resources, use <Titanium.App.Android.R>.

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
See an example in the [Hyperloop Sample App](https://github.com/appcelerator/hyperloop-examples) for details!

<ApiDocs/>
