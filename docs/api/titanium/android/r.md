# Titanium.Android.R

<TypeHeader/>

## Overview

To access your application's resources, use <Titanium.App.Android.R>.

These properties and sub-properties correspond directly to the properties of the the `android.R`
class, and should have the same syntax. For example, to retrieve the "OK" string in Android:

    Ti.Android.currentActivity.getString(Ti.Android.R.string.ok);

See also: [android.R](https://developer.android.com/reference/android/R.html) in the
Android Developer Reference.

Starting in Titanium SDK 7.3.0, this API exposes all Android related R classes
for the usage in Hyperloop. For example, it can be used to access `menu` resources
as part of native user interfaces, e.g. `BottomNavigationView` or `RecyclerView`.
See an example in the [Hyperloop Sample App](https://github.com/appcelerator/hyperloop-examples) for details!

<ApiDocs/>
