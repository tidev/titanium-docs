---
title: Titanium.Android.Intent
properties:
  - name: action
    type: String
    summary: The action associated with this intent.
    description: >
      <p>Specify one of the <code>ACTION</code> constants from <a
      href="/api/titanium/android">Titanium.Android</a>, or an
      application-specific custom action string.</p>
  - name: className
    type: String
    summary: >
      The Java class name of the activity associated with this intent<br>

      (<a href="Titanium.Android.Intent.packageName">packageName</a> must also
      be set).<br>
  - name: data
    type: String
    summary: The Intent's Data URI.
    description: >
      <p>The data URI can be set when the intent is created. It is read-only
      after the<br>

      intent is created.</p>

      <p>For more information on data URIs, see:<br>

      <a
      href="https://developer.android.com/reference/android/content/Intent.html#setData(android.net.Uri)">Intent.setData
      in the Android API Reference</a></p>
  - name: flags
    type: Number
    summary: Intent flags.
  - name: packageName
    type: String
    summary: The fully-qualified Java package name of the activity.
  - name: type
    type: String
    summary: The MIME type for this Intent.
    description: >
      <p>The MIME type can be set when the intent is created. It is read-only
      after the<br>

      intent is created.</p>

      <p>For information on MIME types and intents, see:<br>

      <a
      href="https://developer.android.com/reference/android/content/Intent.html#setType(java.lang.String)">Intent.setType
      in the Android API Reference</a>.</p>
  - name: url
    type: String
    summary: The URL to a Titanium JavaScript Activity.
methods:
  - name: addCategory
    summary: Adds a category to this Intent.
    parameters:
      - name: name
        type: String
        summary: The category name.
  - name: addFlags
    summary: Adds to the existing flags on the <code>Intent</code>.
    description: >
      <p>The specified flag are combined with the existing flags using a bitwise
      OR.</p>
    parameters:
      - name: flags
        type: Number
        summary: Bitwise OR of the flags to add to the existing set.
  - name: getBlobExtra
    summary: >-
      Get a <a href="/api/titanium/blob">Titanium.Blob</a> property from this
      <code>Intent</code>.
    parameters:
      - name: name
        type: String
        summary: >-
          The <a href="/api/titanium/blob">Titanium.Blob</a> extra to get, most
          commonly <a
          href="/api/titanium/android/extra_stream">Titanium.Android.EXTRA_STREAM</a>.
    returns:
      type: Titanium.Blob
  - name: getBooleanExtra
    summary: Get a boolean property from this Intent.
    parameters:
      - name: name
        type: String
        summary: Property to get.
      - name: default
        type: Boolean
        summary: >-
          Default value to return if property does not exist or is of a
          different type.
    returns:
      type: Boolean
  - name: getData
    summary: Get the Data URI from this <code>Intent</code>.
    returns:
      type: String
  - name: getDoubleExtra
    summary: Get a double property from this <code>Intent</code>.
    parameters:
      - name: name
        type: String
        summary: Property to get.
      - name: default
        type: Number
        summary: >-
          Default value to return if property does not exist or is of a
          different type.
    returns:
      type: Number
  - name: getIntExtra
    summary: Get an integer property from this <code>Intent</code>.
    parameters:
      - name: name
        type: String
        summary: Property to get.
      - name: default
        type: Number
        summary: >-
          Default value to return if property does not exist or is of a
          different type.
    returns:
      type: Number
  - name: getLongExtra
    summary: Get a long property from this <code>Intent</code>.
    parameters:
      - name: name
        type: String
        summary: Property to get.
      - name: default
        type: Number
        summary: >-
          Default value to return if property does not exist or is of a
          different type.
    returns:
      type: Number
  - name: getStringExtra
    summary: Get a string property from this <code>Intent</code>.
    description: >
      <p>Can also be used to get the string representation of a property that's
      stored<br>

      as an Android <code>Parcel</code>, such as a URI.</p>

      <p>Titanium does not support <code>getParcelableExtra</code> due to the
      inability to translate<br>

      all of its possible return types to JavaScript.</p>

      <p>See also:<br>

      [getParcelableExtra](https://developer.android.com/reference/android/content/Intent.html#getParcelableExtra(java.lang.String)<br>

      in the Android Developer Reference.</p>
    parameters:
      - name: name
        type: String
        summary: Property to get.
    returns:
      type: String
  - name: hasExtra
    summary: >-
      Returns <code>true</code> if this <code>Intent</code> has the specified
      property.
    parameters:
      - name: name
        type: String
        summary: Property name to check for.
    returns:
      type: Boolean
  - name: putExtra
    summary: Puts an extra property on this <code>Intent</code>.
    parameters:
      - name: name
        type: String
        summary: Name of the property to add.
      - name: value
        type: any
        summary: Property value to set.
  - name: putExtraUri
    summary: >-
      Put a URI property on this <code>Intent</code> (useful for <a
      href="/api/titanium/android/extra_stream">Titanium.Android.EXTRA_STREAM</a>).
    parameters:
      - name: name
        type: String
        summary: The property name.
      - name: value
        type: String, Array<String>
        summary: The URI, as a string or a string array.
examples:
  - title: Create an Intent for Launching an Activity
    code:
      - content: |-
          var intent = Ti.Android.createIntent({
              action: Ti.Android.ACTION_MAIN,
              url: 'activity1.js'
          });
          intent.addCategory(Ti.Android.CATEGORY_LAUNCHER);
          Ti.Android.currentActivity.startActivity(intent);
        language: js
    intro: This example creates an intent and uses it to launch a new activity.
  - title: Create an Intent to get a Contact URI
    code:
      - content: |-
          var intent = Ti.Android.createIntent({
              action: Ti.Android.ACTION_GET_CONTENT,
              type: "vnd.android.cursor.item/phone"
          });
        language: js
    intro: >-
      This example creates an intent to retrieve contact information from the
      user's

      contacts.
  - title: Pick a Photo from the Photo Gallery
    code:
      - content: |-
          var intent = Ti.Android.createIntent({
              action: Ti.Android.ACTION_PICK,
              type: "image/*"
          });
          intent.addCategory(Ti.Android.CATEGORY_DEFAULT);
        language: js
    intro: This example creates an intent to pick an image from the photo gallery.
  - title: Create an ImageView from an Image Send Intent
    code:
      - content: |-
          <ti:app>
              <android>
                  <manifest>
                      <application>
                          <activity android:name=".YourapplicationnameActivity">
                              <intent-filter>
                                  <data android:mimeType="image/*"/>
                                  <action android:name="android.intent.action.SEND"/>
                                  <category android:name="android.intent.category.DEFAULT"/>
                              </intent-filter>
                          </activity>
                      </application>
                  </manifest>
              </android>
          </ti:app>
        language: xml
      - content: |-
          var win = Ti.UI.createWindow({
                backgroundColor: '#fff',
                fullscreen: false,
                exitOnClose: true
            });
            win.addEventListener('open', function(e) {
                var intent = Ti.Android.currentActivity.getIntent();
                var iname = Ti.Android.EXTRA_STREAM;
                if (intent && intent.hasExtra(iname)) {
                    // Create ImageView from TiBlob
                    var blob = intent.getBlobExtra(iname);
                    win.add(Ti.UI.createImageView({
                        image: blob,
                        height: 300,
                        width: 300,
                        left: 0,
                        top: 0
                    }));
                } else {
                    Ti.API.info('No extra named "' + iname + '" found in Intent');
                }
            });
            win.open();
            
        language: js
    intro: >-
      This example requires that an intent filter be set up in the project's
      `tiapp.xml` file.

      After copying the default root activity of your application from the
      `AndroidManifest.xml`

      file to the Android manifest section of the `tiapp.xml` file, add an
      intent filter.

      For detailed instructions, refer to the

      [Android Intent Filters
      guide](https://titaniumsdk.com/guide/Titanium_SDK/Titanium_SDK_How-tos/Platform_API_Deep_Dives/Android_API_Deep_Dives/Android_Intent_Filters.html).


      You can trigger this intent filter by long pressing on an image in the
      Android gallery

      and selecting "share".


      `tiapp.xml`:
---

# Titanium.Android.Intent

Message objects passed between Android application components.

In Android, applications and application components cannot directly communicate with each other.
In order to communicate with another application, use an intent. An intent is a message sent
to the Android OS. Android directs the message to an application or application component based
on the intent's settings.

To receive an intent, an application needs to declare an Intent Filter. An intent filter
indicates to the Android OS that your application can handle certain data types or URIs.
For details on using Intent Filters, see the
[Android Intent Filters guide](https://titaniumsdk.com/guide/Titanium_SDK/Titanium_SDK_How-tos/Platform_API_Deep_Dives/Android_API_Deep_Dives/Android_Intent_Filters.html).

Intents can be used to start an activity, start a service or start a broadcast.

  * To create an intent to start an **Activity**, use the [Titanium.Android.createIntent](/api/titanium/android) method.
  * To create an intent to start a **Broadcast**, use the [Titanium.Android.createBroadcastIntent](/api/titanium/android) method.
  * To create an intent to start a **Service**, use the [Titanium.Android.createServiceIntent](/api/titanium/android) method.

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
are used for Activity and Broadcast Intents.  See the [Titanium.Android.createServiceIntent](/api/titanium/android) method
for the parameters to create a Service Intent.

#### Action

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

#### Data

The [data](Titanium.Android.Intent.data) property specifies a content URI you want the activity to handle.

The [type](Titanium.Android.Intent.type) property specifies a MIME type the activity can handle.

For Broadcast Intents, do not use the `data` or `type` properties. Use extras to pass data.
See the *Extras* section below.

#### Category

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

#### Flags

Bitwise-OR flags with the Intent's [flags](Titanium.Android.Intent.flags) property
or pass a flag to the [addFlags()](Titanium.Android.Intent.addFlags) method.
Flags modify the behavior of the intent.

Titanium exposes some of the Android Intent flags as the `Titanium.Android.FLAG_*` constants.
If Titanium has not exposed a particular constant, you can pass the constant value listed in
the Android API reference instead.

#### Extras

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

#### Further Reading

  * [Android Intents guide](https://titaniumsdk.com/guide/Titanium_SDK/Titanium_SDK_How-tos/Platform_API_Deep_Dives/Android_API_Deep_Dives/Android_Intent_Filters.html)
  * [Android Developer: Intent](https://developer.android.com/reference/android/content/Intent.html)


**Extends:** `Titanium.Proxy` · **Since:** 1.5 · **Platforms:** android

<ApiProperties />

<ApiMethods />

<ApiExamples />

