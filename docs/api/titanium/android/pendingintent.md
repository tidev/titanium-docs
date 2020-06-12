# Titanium.Android.PendingIntent

<TypeHeader/>

## Overview

Use the <Titanium.Android.createPendingIntent> method to create a pending intent.

The type of `Intent` you pass to `createPendingIntent`  determines what kind of 
`PendingIntent` is created.  Each type corresponds directly with a get method on 
Android's PendingIntent:

*   To create a `PendingIntent` that starts an activity, pass in an activity intent, 
    created with [createIntent](Titanium.Android.createIntent). This is equivalent to
    calling the native Android `PendingIntent.getActivity` method. See
    [PendingIntent.getActivity in the Android API Reference](https://developer.android.com/reference/android/app/PendingIntent.html#getActivity(android.content.Context, int, android.content.Intent, int))

*    To create a `PendingIntent` that starts a service, pass in a service intent,
    created with [createServiceIntent](Titanium.Android.createServiceIntent). This is 
     equivalent to calling the native Android `PendingIntent.getService` method. See 
     [PendingIntent.getService in the Android API Reference](https://developer.android.com/reference/android/app/PendingIntent.html#getService(android.content.Context, int, android.content.Intent, int)).

The `PendingIntent` is always associated with the activity that was the current activity
when the intent was created.

Note that this `PendingIntent` is designed primarily to be used with the 
[Notification](Titanium.Android.Notification) object. It does not support all features 
of the native Android `PendingIntent` -- in particular, 
broadcast pending intents are not supported.

See also: 

*   [PendingIntent in the Android API Reference](https://developer.android.com/reference/android/app/PendingIntent.html)

<ApiDocs/>
