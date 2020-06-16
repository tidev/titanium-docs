---
title: Using native Android XML layouts in Hyperloop
weight: '20'
---

# Using native Android XML layouts in Hyperloop

## Overview

This guide demonstrates how to use native Android XML layouts in Titanium by loading them via Hyperloop. Example views are the [RecyclerView](https://developer.android.com/guide/topics/ui/layout/recyclerview.html), [BottomNavigationView](https://developer.android.com/reference/android/support/design/widget/BottomNavigationView.html) and [FloatingActionButton](https://developer.android.com/reference/android/support/design/widget/FloatingActionButton.html).

## Usage

1\. Create a new XML layout (like \`main\_content.xml\`) in "app/platform/android/res/layout" (Alloy) or "platform/android/res/layout" (Classic). Example:

```xml
<android.support.design.widget.CoordinatorLayout
    android:id="@+id/main_content"
    android:theme="@style/Theme.AppCompat.Light"
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent">
          <ListView
              android:id="@+id/lvToDoList"
              android:layout_width="match_parent"
              android:layout_height="match_parent" />
          <android.support.design.widget.FloatingActionButton
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:layout_gravity="bottom|right"
              android:layout_margin="16dp"
              android:src="@drawable/ic_action_share"
              app:layout_anchor="@id/lvToDoList"
              app:layout_anchorGravity="bottom|right|end" />
</android.support.design.widget.CoordinatorLayout>
```

2\. Create an \`LayoutInflater\` class to inflate layouts (ES6+ style here):

```javascript
import Context from 'android.content.Context';
import Inflater from 'android.view.LayoutInflater';

const inflater = Inflater.cast(activity.getApplicationContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE));
```

3\. Receive the R.layout.\* ID required to inflate its view:

```javascript
import Activity from 'android.app.Activity';

const activity = new Activity(Ti.Android.currentActivity);
// 'main_content' = file name, 'layout' = resource, e.g. app/platform/android/res/layout
// Can also be used to receive other R.* values like R.color.*, R.string.* etc.
const resID = activity.getResources().getIdentifier('main_content', 'layout', activity.getPackageName());
```

4\. That's it! Inflate the view and add it to your Titanium view:

```javascript
const view = inflater.inflate(resIDFromString('main_content', 'layout'), null);
myView.add(view);
```

## Output

Here is an example of using the previous code to load a FloatingActionButton inside a CoordinatorLayout:

![Screenshot_1519057240](./Screenshot_1519057240.png)

## Full Example

For a full example and many other native examples, see the [Hyperloop Sample App](https://github.com/appcelerator/hyperloop-examples) for details.
