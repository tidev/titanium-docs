---
title: Hyperloop and Android - Using Third Party Android Libraries
weight: '10'
---

# Hyperloop and Android - Using Third Party Android Libraries

With Hyperloop, you can use native Android libraries directly in Titanium using Javascript. In this short tutorial, we will use an existing third party AAR library in our app.

The library we will use is [Parked Text View](https://github.com/foxsake/ParkedTextView) – which is basically a textfield with a static and a variable text:

![slack_1](./slack_1.png)

## The AAR file

First, you will have to download the compiled version of the library or build it yourself using gradle. Since the binary is not available in this repo or on [maven central](http://search.maven.org/), you have to clone the repo and run `gradle build` in the main folder. The AAR file is included in the demo Github repo at: [https://github.com/m1ga/hyperloop.parkedText](https://github.com/m1ga/hyperloop.parkedText)

## Setting up the app

In the next step, we create a new Titanium project with `ti create` and click **Yes** to “Would you like to enable native API access with Hyperloop for this app?”.

We create a folder called `app/platform/android/` and copy the AAR file into this folder.

The Parked Text Github repo has a _Usage_ section with some information on how to include the view but some parts are missing, so we have to look at the main Java file which is located [here](https://github.com/foxsake/ParkedTextView/blob/master/parkedtextview/src/main/java/com/goka/parkedtextview/ParkedTextView.java).

There we can find the basic constructor `public ParkedTextView(Context context)` and some useful public methods – `setHintText(), setParkedText() or setParkedHintColor()` – which we are going to use.

### Importing classes

In Java, you would import a class like this:

```
import android.view.View;
View view = new View();
```

The equivalent in Hyperloop would be:

```javascript
const View = require("android.view.View");
const view = new View();
```

Before we can create the `ParkedTextView` object, we need to create the context that is used inside the constructor:

```javascript
const Activity = require("android.app.Activity");
const context = new Activity(Ti.Android.currentActivity);
```

The `ParkedTextView` class is `com.goka.parkedtextview.ParkedTextView,` which needs to be imported like this:

```javascript
const ParkedTextView = require("com.goka.parkedtextview.ParkedTextView");
const parkedView = new ParkedView(context);
```

### Use the component

Now, we have a JavaScript UI component we can use in our Titanium project in a way we use normal UI components and call some methods:

```
parkedView.setParkedTextColor("#000000");
parkedView.setParkedHintColor("#999999");
parkedView.setParkedText(".slack.com");
parkedView.setHintText("your-team");
```

Add it to our window or a view:

```
$.index.add(parkedView); // $.view.add(parkedView);
```

### Listen to events

Android TextView uses the [TextWatcher ()](https://developer.android.com/reference/android/text/TextWatcher.html) to listen to the change events.

```javascript
const TextWatcher = require("android.text.TextWatcher");
```

This provides three listeners that we assign to Javascript callback functions:

```javascript
const textWatcher = new TextWatcher({
    onTextChanged: onTextChanged,
    afterTextChanged: afterTextChanged,
    beforeTextChanged: beforeTextChanged
});
function beforeTextChanged( ) {
    console.log("Before: " + parkedView.getText());
}
function onTextChanged( ) {
    console.log("Changed: " + parkedView.getText());
}
function afterTextChanged(s) {
    console.log("After: " + s);
}
```

### Layout

The last step is to apply a layout, so it will take as much space as needed (like `Ti.UI.SIZE`). To do that, we use the Android LayoutParams. First, import the classes:

```javascript
const LayoutParams = require("android.widget.FrameLayout.LayoutParams");
const ViewGroupLayoutParams = require("android.view.ViewGroup.LayoutParams");
```

Then, apply the layout:

```javascript
const layoutParams = new LayoutParams(ViewGroupLayoutParams.WRAP_CONTENT, ViewGroupLayoutParams.WRAP_CONTENT, Gravity.CENTER);
parkedView.setLayoutParams(layoutParams);
```

### Done

The app is ready now! And, the library will be used in our app and receive the text the user types in.

![slack](./slack.png)

The full example is available at [https://github.com/m1ga/hyperloop.parkedText](https://github.com/m1ga/hyperloop.parkedText)

This document was adapted from [Appcelerator blog post: Hyperloop and Android: Using Third Party Android Libraries](https://www.appcelerator.com/blog/2018/12/hyperloop-and-android-using-third-party-android-libraries/?utm_source=Axway+Appcelerator&utm_campaign=bf1687b383-BLOG_ROUNDUP_2018_12_14&utm_medium=email&utm_term=0_763a3fa2c9-bf1687b383-430799269)
