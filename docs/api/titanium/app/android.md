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

### Change Android icon at runtime

Add these `<activity-alias>` nodes into the tiapp.xml `<application>` block:

``` xml
<activity-alias android:enabled="true" android:name=".default" android:targetActivity=".TestActivity" android:exported="true">
    <intent-filter>
        <action android:name="android.intent.action.MAIN"/>
        <category android:name="android.intent.category.LAUNCHER"/>
    </intent-filter>
</activity-alias>
<activity-alias android:icon="@mipmap/ic_launcher" android:name=".red" android:enabled="false" android:targetActivity=".TestActivity" android:exported="true">
    <intent-filter>
        <action android:name="android.intent.action.MAIN"/>
        <category android:name="android.intent.category.LAUNCHER"/>
    </intent-filter>
</activity-alias>
```

Change the `android:targetActivity` to point at your main activity, `android:name` is used inside the JavaScript code
to switch between the alias nodes and `android:icon` will be the new icon.

In Javascript, this can be accessed as follows.

``` js
const win = Ti.UI.createWindow({layout: "vertical"});

const btn1 = Ti.UI.createButton({title: "switch to red"});
const btn2 = Ti.UI.createButton({title: "switch to default"});

btn1.addEventListener("click", function() {
  Ti.App.Android.changeIcon({
    from: "default",
    to: "red"
  });
});
btn2.addEventListener("click", function() {
  Ti.App.Android.changeIcon({
    from: "red",
    to: "default"
  });
});

win.add([btn1, btn2]);
win.open();
```

<ApiDocs/>
