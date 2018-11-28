---
breadcrumbLabel: ActivityIndicator
sidebar: auto
---

# Titanium.UI.ActivityIndicator

<ProxySummary/>

## Overview

<table id="platformComparison">
  <tr>
    <td><img src="images/activityindicator/activityindicator_android.png" height="75" /></td>
    <td><img src="images/activityindicator/activityindicator_ios.png" height="75" /></td>
    <td><img src="images/activityindicator/activityindicator_wp.png" height="75" /></td>
  </tr>
  <tr><th>Android</th><th>iOS</th><th>Windows Phone</th></tr>
</table>

An activity indicator can be used to show the progress of an operation in the UI to let the
user know that some action is taking place. An activity indicator consists of a spinning
animation and an optional text message, and is used to indicate an ongoing activity of
indeterminate length. To show progress, use <Titanium.UI.ProgressBar> instead.

Use the <Titanium.UI.createActivityIndicator> method or **`<ActivityIndicator>`** Alloy element to
create an `ActivityIndicator` object.

`ActivityIndicator` is a view and, like any view, must be added to a window or other top-level
view before it can be shown. Unlike most views, `ActivityIndicator` is hidden by
default and must be shown explicitly by calling its <Titanium.UI.ActivityIndicator.show> method.

<ApiDocs/>
