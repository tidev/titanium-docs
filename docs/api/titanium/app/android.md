---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/App/Android/Android.yml
---
# Titanium.App.Android

<TypeHeader/>

## Overview

For more information, refer to the official documentation on the Android Developer website about 
[application resources](https://developer.android.com/guide/topics/resources/index.html).

## Examples

### Custom String Resource

Custom Android resources may be placed in `platform/android` in the project root.  
For example, to utilize a custom localization file, create and populate 
`platform/android/res/values/mystrings.xml` with the following data.

``` xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="mystring">testing 1 2 3</string>
</resources>
```

In Javascript, this can be accessed as follows.

``` js
var activity = Ti.Android.currentActivity;
var R = Ti.App.Android.R;

var mystring = activity.getString(R.string.mystring);
Ti.API.debug("mystring = " + mystring);
```

<ApiDocs/>
