---
breadcrumbLabel: RemoteViews
sidebar: auto
---

# Titanium.Android.RemoteViews

<ProxySummary/>

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
[Titanium.App.Android.R](Titanium.App.Android.R) object to reference the view's ID. For example, if you have a 
view with the ID `notify_imageview`, you can refer to it using:
    
    Ti.App.Android.R.id.notify_imageview

See also: 

*   [RemoteViews](https://developer.android.com/reference/android/widget/RemoteViews.html)
    in the Android Developer Reference.

*   [XML Layouts](https://developer.android.com/guide/topics/ui/declaring-layout.html)
    in the Android Developer Guide.

<ApiDocs/>
