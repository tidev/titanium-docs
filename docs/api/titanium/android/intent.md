---
breadcrumbLabel: Intent
sidebar: auto
---

# Titanium.Android.Intent

<ProxySummary/>

## Overview

In Android, applications and application components cannot directly communicate with each other.
In order to communicate with another application, use an intent. An intent is a message sent
to the Android OS. Android directs the message to an application or application component based
on the intent's settings.

To receive an intent, an application needs to declare an Intent Filter. An intent filter
indicates to the Android OS that your application can handle certain data types or URIs.
For details on using Intent Filters, see the
[Android Intent Filters guide](https://docs.appcelerator.com/platform/latest/#!/guide/Android_Intent_Filters).

Intents can be used to start an activity, start a service or start a broadcast.

  * To create an intent to start an **Activity**, use the <Titanium.Android.createIntent> method.
  * To create an intent to start a **Broadcast**, use the <Titanium.Android.createBroadcastIntent> method.
  * To create an intent to start a **Service**, use the <Titanium.Android.createServiceIntent> method.

You can create either an implicit intent or an explicit intent.

An *explicit intent* specifies the application or application component to launch. To create an
explicit intent, specify the Intent's `className` and `packageName` properties to specify the
application component to launch or the `url` property to specify a JavaScript file to handle
the data.

An *implicit intent* does not specify a particular application.  Android will present the options
to the user of which applications to launch if a default application was not selected to handle
a particular data type or content URI. To create an implicit intent, do not specify the
`className`, `packageName` or `url` properties.

Note that the parameters to create a Service Intent are different than the ones used to
create an Activity or Broadcast.  The properties and methods listed below
are used for Activity and Broadcast Intents.  See the <Titanium.Android.createServiceIntent> method
for the parameters to create a Service Intent.

### Action

The `action` property specifies the action you want the activity to perform, or in the case of
broadcasts, the action that just completed you want to report.

Titanium exposes some of the Android Intent actions as the `Titanium.Android.ACTION_*` constants.
Note that some of these actions are for system-level broadcasts that only Android can send.
If Titanium has not exposed a particular constant, you can pass the string value listed in the
Android API reference guide instead.

You can also define your own custom action names. Use a reverse domain scheme to name the
action to avoid potential conflicts, for example, `com.appcelerator.action.LINT`.
Custom actions are only useful to communicate between your applications and application
activities using intents.

### Data

The [data](Titanium.Android.Intent.data) property specifies a content URI you want the activity to handle.

The [type](Titanium.Android.Intent.type) property specifies a MIME type the activity can handle.

For Broadcast Intents, do not use the `data` or `type` properties. Use extras to pass data.
See the *Extras* section below.

### Category

Add a category to your Intent by invoking the [addCategory()](Titanium.Android.Intent.addCategory)
method on it.  A category provides additional details about the purpose of the intent.
Note that most categories are only useful for intent filters.

Titanium exposes some of the Android Intent categories as the `Titanium.Android.CATEGORY_*` constants.
Note that some of these categories are for Notifications.  If Titanium has not exposed a
particular constant, you can pass the string value listed in the Android API reference instead.

You can also define your own custom category names. Use a reverse domain scheme to name the
category to avoid potential conflicts, for example, `org.foo.category.SUPER`.
Custom categories are only useful to communicate between your applications and application
activities using intents.

### Flags

Bitwise-OR flags with the Intent's [flags](Titanium.Android.Intent.flags) property
or pass a flag to the [addFlags()](Titanium.Android.Intent.addFlags) method.
Flags modify the behavior of the intent.

Titanium exposes some of the Android Intent flags as the `Titanium.Android.FLAG_*` constants.
If Titanium has not exposed a particular constant, you can pass the constant value listed in
the Android API reference instead.

### Extras

Extras are key-value pairs that are useful to pass on extra data with the Intent that can be
used by another application component.

  * Use one of the `get*Extra()` methods to retrieve the data. Pass the method the extra key.
  * Use the [hasExtra()](Titanium.Android.Intent.hasExtra) method to check if the intent contains an extra.
    Pass the method the key of the extra.
  * Use the [putExtra()](Titanium.Android.Intent.putExtra) method to add data to the intent.
    Pass the method the extra key and data.

Titanium exposes the Android-defined extra keys as the `Titanium.Android.EXTRA_*` constants.
You can also define your own custom extra keys to use between your applications and application
components.

### Further Reading

  * [Android Intents guide](https://docs.appcelerator.com/platform/latest/#!/guide/Android_Intents)
  * [Android Developer: Intent](https://developer.android.com/reference/android/content/Intent.html)

<ApiDocs/>
