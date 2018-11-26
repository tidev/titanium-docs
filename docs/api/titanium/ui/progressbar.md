---
breadcrumbLabel: ProgressBar
sidebar: auto
---

# Titanium.UI.ProgressBar

<ProxySummary/>

## Overview

<table id="platformComparison">
  <tr>
    <td><img src="images/progressbar/progressbar_android.png" height="50" /></td>
    <td><img src="images/progressbar/progressbar_ios.png" height="25" /></td>
    <td><img src="images/progressbar/progressbar_wp.png" height="25" /></td>
  </tr>
  <tr><th>Android</th><th>iOS</th><th>Windows Phone</th></tr>
</table>

A progress bar is used for displaying an ongoing activity with a defined progression.
For an activity without a defined progression, you can use [Titanium.UI.ActivityIndicator](Titanium.UI.ActivityIndicator).

Unlike most views, progress bars are hidden by default, so you must explicitly
show the progress bar.

Use the [createProgressBar](Titanium.UI.createProgressBar) method or **`<ProgressBar>`** Alloy element to create a progress bar.

### Android Platform Notes

In SDK 3.0, use [Titanium.UI.Android.ProgressIndicator](Titanium.UI.Android.ProgressIndicator) to display a progress indicator
in a modal dialog or window title bar. Use `ProgressBar` to display the progress bar inside
another view.

### iOS Platform Notes

On iOS, to display the progress bar in the window title bar, assign the progress bar object
to the window's [titleControl](Titanium.UI.Window.titleControl) property.
Make sure the window is modal and not full screen, and that the navigation bar is not hidden.

<ApiDocs/>
