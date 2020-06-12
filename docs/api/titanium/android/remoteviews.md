# Titanium.Android.RemoteViews

<TypeHeader/>

## Overview

`RemoteViews` is an API for referencing and updating a remote view hierarchy that
lives in another process, for example, in a [Notification](Titanium.Android.Notification).

To create a remote view hierarchy, you must define an Android XML layout for the views
you want to display, and place the XML file in the `platform/android/res/layout` inside your
project folder. See the examples for a sample XML layout and sample code for creating a
remote view.

To use a remote view hierarchy in a notification, see
[Notification.contentView](Titanium.Android.Notification.contentView).

Because the remote view hierarchy belongs to another process, you cannot call methods on it
directly, but you can call methods on the `RemoteViews` object to update views in the
heirarchy by ID. To reference a view inside the layout, use the
<Titanium.App.Android.R> object to reference the view's ID. For example, if you have a 
view with the ID `notify_imageview`, you can refer to it using:
    
``` js
Ti.App.Android.R.id.notify_imageview
```

See also: 

*   [RemoteViews](https://developer.android.com/reference/android/widget/RemoteViews.html)
    in the Android Developer Reference.

*   [XML Layouts](https://developer.android.com/guide/topics/ui/declaring-layout.html)
    in the Android Developer Guide.

## Examples

### Create a Remote View

The following code excerpt creates a `RemoteViews` object based on a custom layout 
called `custom_layout.xml`, and set a label's text.

``` js
var AppR = Ti.App.Android.R;
var customLayout = Ti.Android.createRemoteViews({ layoutId: AppR.layout.custom_layout });
customLayout.setTextViewText(AppR.id.custom_text, "Click Me!");
```

This example uses a simple custom layout:

``` xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
        android:layout_width="fill_parent" 
        android:layout_height="fill_parent" 
        android:orientation="vertical" >
    <TextView android:id="@+id/custom_text"
            android:layout_width="fill_parent"
            android:layout_height="fill_parent"
            android:background="#ffffff"
            android:textColor="#aaff0000"
            android:textStyle="italic"
            android:gravity="center"
            android:text="Hello, I am a TextView" />
</LinearLayout>
```

The layout file for this example must be placed in
`platform/android/res/layout/custom_layout.xml`.

<ApiDocs/>
