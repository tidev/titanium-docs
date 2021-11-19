---
title: Android Intent Filters
weight: '20'
---

# Android Intent Filters

## Introduction

Android Intent Filters give applications the ability to receive implicit intents from other Android applications. An intent is a message object, usually containing data, sent by another application to start a new application to handle the data. Intents are sent to the Android OS, which directs the intent to the appropriate application to handle the data. If more than one application can handle the data, Android presents a dialog to the user to select an application to launch. An intent filter indicates to the Android OS that your application can handle certain data types or URIs. For example, if a user opens their browser and highlights some text, the user can share that text with other Android apps, such as an e-mail application, SMS application or a social networking application.

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>The user highlights the text and<br>clicks the <strong class=" ">Share</strong> button.</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>The <strong class=" ">Share</strong> dialog appears and<br>the user can select the application<br>to send the text to, such as...</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>...an e-mail application,</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>...an SMS application</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>...or a social networking<br>application like Google+.</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/43287298/HighlightText.png" alt="images/download/attachments/43287298/HighlightText.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/43287298/ShareDialog.png" alt="images/download/attachments/43287298/ShareDialog.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/43287298/EmailClient.png" alt="images/download/attachments/43287298/EmailClient.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/43287298/SmsClient.png" alt="images/download/attachments/43287298/SmsClient.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/43287298/GooglePlusShare.png" alt="images/download/attachments/43287298/GooglePlusShare.png" class="confluence-embedded-image"></p><p></p></td></tr></tbody></table>

**Please ask your Confluence administrator to update the license for the [MultiExcerpt Plugin for Confluence 4+](https://plugins.atlassian.com/plugins/biz.artemissoftware.confluence.multiexcerpt.MultiExcerptMacro) .**
**Admin Info: The error is: license VERSION\_MISMATCH**

## Receive an implicit intent

To advertise to the Android OS that the application can receive an implicit intent, declare `<intent-filter>` elements in the `tiapp.xml` file for each data type you want the application to receive.

### Modify the Android manifest section

Before declaring an intent filter, you need to copy the `<activity>` node containing your application's default root activity from the `build/android/AndroidManifest.xml` file to the Android manifest section in the `tiapp.xml` file.

1. Build your project once to generate the `AndroidManifest.xml` file.

2. Open the `build/android/AndroidManifest.xml` file and and copy the `<activity>` node that contains your default root activity. The `android:name` attribute will contain the name of your application.

    **android/build/AndroidManifest.xml**

    ```xml
    <manifest xmlns:android="http://schemas.android.com/apk/res/android" package="com.example.sample" android:versionCode="1" android:versionName="1.0">
        <uses-sdk android:minSdkVersion="14" android:targetSdkVersion="19"/>
        <application android:icon="@drawable/appicon" android:label="My App" android:name="MyappApplication" android:debuggable="false" android:theme="@style/Theme.AppCompat">

            <!-- Copy this activity node -->
            <activity android:name=".YourapplicationnameActivity" android:label="@string/app_name" android:theme="@style/Theme.Titanium" android:configChanges="keyboardHidden|orientation|screenSize">
                <intent-filter>
                    <action android:name="android.intent.action.MAIN"/>
                    <category android:name="android.intent.category.LAUNCHER"/>
                </intent-filter>
            </activity>
            <activity android:name="org.appcelerator.titanium.TiActivity" android:configChanges="keyboardHidden|orientation|screenSize"/>
            <activity android:name="org.appcelerator.titanium.TiTranslucentActivity" android:configChanges="keyboardHidden|orientation|screenSize" android:theme="@style/Theme.AppCompat.Translucent"/>
            <activity android:name="ti.modules.titanium.ui.android.TiPreferencesActivity" android:configChanges="screenSize"/>
        </application>
        <uses-permission android:name="android.permission.INTERNET"/>
        <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
        <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
        <uses-permission android:name="android.permission.ACCESS_MOCK_LOCATION"/>
    </manifest>
    ```

3. Paste the default root activity into the Android section of your `tiapp.xml` file inside the `<application>` element. You may need to add the `<manifest>` and `<application>` elements to the `<android>` element of your `tiapp.xml` file:

    **tiapp.xml**

    ```xml
    <ti:app xmlns:ti="http://ti.appcelerator.org">
        <android xmlns:android="http://schemas.android.com/apk/res/android">
            <manifest>
                <application>
                    <activity android:name=".YourapplicationnameActivity" android:label="@string/app_name" android:theme="@style/Theme.Titanium" android:configChanges="keyboardHidden|orientation|screenSize">
                        <intent-filter>
                            <action android:name="android.intent.action.MAIN"/>
                            <category android:name="android.intent.category.LAUNCHER"/>
                        </intent-filter>
                    </activity>
                </application>
            </manifest>
        </android>
    </ti:app>
    ```

Note that the `<activity>` node you just copied over already contains an `<intent-filter>` element. The elements inside the filter describe to the Android OS that this activity is the initial activity to launch for the application. Do not remove this intent filter or the application will not be available in the application launcher menu.

::: warning ⚠️ Warning
If you change the name of the application, you will need to copy the newly generated `android:name` value from the `AndroidManifest.xml` file and overwrite the old value in the `tiapp.xml` file.
:::

### Declare intent filters

To declare an intent filter, add **`<intent-filter>`** elements as children of the `<activity>` describing the default root activity of the application. For each `<intent-filter>`, you must add:

* one or more `<action>` elements to it to describe which actions the activity can perform

* the `<category android:name="android.intent.category.DEFAULT"/>` element to allow it to receive implicit intents as well as any additional categories you want to add to describe the purpose of the activity

* and a `<data>` element describing which data types the activity can receive

The elements are described in more detail below.

After adding an `<intent-filter>` tag, add the following children elements to it:

* **`<action/>`** element: Describes which actions the activity can do. Assign the `android:name` attribute an action. An action is one of the `ACTION_*` constants from the [Android Intent class](http://developer.android.com/reference/android/content/Intent.html). Remove the `ACTION_` prefix from the constant, then prefix it with the `android.intent.action` namespace. Examples:

    * `<action android:name="android.intent.action.SEND"/>`: Data can be sent to the activity.

    * `<action android:name="android.intent.action.VIEW"/>`: Data can be viewed by the activity.

* **`<category/>`** element: Provides additional details about the activity. Assign the `android:name` attribute a category. A category is one of the `CATEGORY_*` constants from the [Android Intent class](http://developer.android.com/reference/android/content/Intent.html). Remove the `CATEGORY_` prefix from the constant, then prefix it with the `android.intent.category` namespace. Examples:

    * `<category android:name="android.intent.category.BROWSABLE"/>`: Indicates that the activity can be invoked from a browser by clicking a link

* **`<data/>`** element: Describes the data type the activity can handle. You can either describe the data type as a MIME type with the `android:mimeType` attribute or as an URI using the `android:scheme`, `android:host`, `android:port`, `android:path`, `android:pathPrefix` and `android:pathPattern` attributes that take on the form: `<scheme>://<host>:<port>/[<path>|<pathPrefix>|<pathPattern>]`. Note that all URI attributes are optional except if the `scheme` attribute is not defined, all other URI attributes are ignored, and if the `host` attribute is not defined, all other URI attributes except `scheme` are ignored. Examples:

    * `<data android:mimeType="image/*"/>`: Activity can accept intents with the image/\* MIME type depending on the action.

    * `<data android:scheme="http" host="www.fakedomain.com"/>`: Activity can accept URIs that start with `http://www.fakedomain.com` depending on the action.

::: tip 💡 Hint
For the actions and categories, you can also define your own custom action and category names. Use a reverse domain scheme to name the actions and categories to avoid potential conflicts, for example, `com.appcelerator.action.LINT` or `org.foo.category.SUPER`. The custom actions and categories are only useful to communicate between your applications and application activities using intents.
:::

Additionally, you can overwrite the appearance of the option in the **Share** dialog by using the following `<intent-filter>` attributes:

* `android:icon`: Icon to display in the **Share** dialog. Place the icon file in the `/platform/android/res/drawable/` folder and reference the image file by removing its extension and prefixing it with `@drawable/`, for example, `@drawable/filename`. By default, uses the application's icon.

* `android:label`: Title displayed in the **Share** dialog. By default, uses the application name.

* `android:priority`: Integer used to determine the priority to give to the application. By default, set to `0`. Can be assigned a value between `-1000` and `1000`, inclusive.

**tiapp.xml**

```xml
<!-- slimmed down some of the nodes for example -->
<ti:app>
    <android>
        <manifest>
            <application>
                <activity android:name=".YourapplicationnameActivity">
                    <!-- default intent filter for launching activity -->
                    <intent-filter>
                        <action android:name="android.intent.action.MAIN"/>
                        <category android:name="android.intent.category.LAUNCHER"/>
                    </intent-filter>
                    <!-- example filter to retrieve or view plain text -->
                    <!-- adds a custom title and icon for the share option -->
                    <intent-filter android:label="Translate To Pig Latin" android:icon="@drawable/pig">
                        <data android:mimeType="text/plain"/>
                        <action android:name="android.intent.action.SEND"/>
                        <action android:name="android.intent.action.VIEW"/>
                        <category android:name="android.intent.category.DEFAULT"/>
                    </intent-filter>
                </activity>
            </application>
        </manifest>
    </android>
</ti:app>
```

### Retrieve data passed to the activity

To retrieve data sent to an activity using an intent, the application needs to retrieve the intent that launched the activity, then use the Intent reference to get the data URI or extras sent with the intent.

* To get the intent of the root activity, use the `Titanium.App.Android.launchIntent` property.

* To get the intent of an activity that has an **open** Window or TabGroup, get a reference to the activity using the `activity` property of the Window or TabGroup object, then access the intent using the activity's `intent` property or `getIntent()` method.

* To get the intent of other activities, use the `Titanium.Android.currentActivity` property to get a reference to the activity, then access the intent using the activity's `intent` property or `getIntent()` method.

```javascript
// Retrieve intent that launched the application (root activity)
var rootIntent = Ti.App.Android.launchIntent;
// Retrieve intent that launched the window
var uiActivity = win.activity;
var uiIntent = uiActivity.getIntent();
// Retrieve intent that launch the activity
var activity = Ti.Android.currentActivity;
var intent = activity.getIntent();
```

To retrieve the data URI sent with the intent, simply access the `data` property of the intent or call the intent's `getData()` method.

```javascript
var uri = intent.getData();
```

To retrieve extras sent with the intent, call the intent's `hasExtra()` method and pass it the property to retrieve to verify the data exists, then call one of the intent's `get*Extra()` methods and pass it the same property name to retrieve the data.

The example below checks for EXTRA\_TEXT data sent with the intent.

```javascript
var extra;
if (intent.hasExtra(Ti.Android.EXTRA_TEXT) && (extra = intent.getStringExtra(Ti.Android.EXTRA_TEXT))) {
    // Do something with the extra
}
```

### Respond to the calling activity

To send a response back to the calling activity, the called activity needs to call its `setResult()` method, then call the `finish()` method to close the called activity in order to send the result.

::: warning ⚠️ Warning
The calling activity needs to call the `startActivityForResult()` method instead of the `startActivity()` in order to process the result. See [Android Intents: Start an activity with an intent](/guide/Titanium_SDK/Titanium_SDK_How-tos/Platform_API_Deep_Dives/Android_API_Deep_Dives/Android_Intents/#start-an-activity-with-an-intent).
:::

Pass a `Titanium.Android.RESULT_*` constant to the `setResult()` method to indicate the result of the activity and an optional intent object as the second parameter. Use the intent object to send data back to the calling activity.

The example below returns a string once the activity is created.

**someactivity.js**

```javascript
// Get a reference to this activity
var activity = Ti.Android.currentActivity;

// Bind callback to activity's create event
activity.onCreate = function() {

    // Create a blank activity to send data back
    var intent = Ti.Android.createIntent({});
    intent.putExtra(Ti.Android.EXTRA_TEXT, 'foobar');

    // Set the result code and send data back to calling activity
    activity.setResult(Ti.Android.RESULT_OK, intent);

    // Close the activity to return the result
    activity.finish();
}
```

## MIME Type intent filter example

This example creates an Alloy application that will accept a string from an external application to set the text in a text area widget.

The view code for the application displays a text area and button.

**app/views/index.xml**

```xml
<Alloy>
    <Window>
        <TextArea id='textArea'/>
        <Button id='button' onClick='toPigLatin'>Translate</Button>
    </Window>
</Alloy>
```

**app/styles/index.tss**

```javascript
"Window" : {
  layout: 'vertical'
}
"#textArea" : {
  top: '25dp',
  height: '500dp',
  width: Ti.UI.FILL
}
"#button" : {
  top: '15dp'
}
```

The controller code retrieves the text string sent to the application if an external application used an intent to start it.

**app/controllers/index.js**

```javascript
$.index.open();

if (OS_ANDROID) {
    var launchIntent = Ti.App.Android.launchIntent;
    var extra;
    if (launchIntent.hasExtra(Ti.Android.EXTRA_TEXT) && (extra = launchIntent.getStringExtra(Ti.Android.EXTRA_TEXT))) {
        $.textArea.value = extra;
    }
}

function toPigLatin () {
    // translate $.textArea.value to Pig Latin or some such nonsense
}
```

Now build the application once to generate the `AndroidManifest.xml` file.

Next, declare the intent filter in the `tiapp.xml` file.

1. Copy the default root activity from the `AndroidManifest.xml` file to the Android manifest section of the `tiapp.xml`.

2. Add an `<intent-filter>` element as a child of the `<activity>` element.

3. Add a `<data>` element as a child of the `<intent-filter>` element, then assign `text/plain` to the `android:mimeType` attribute to tell Android the activity can handle plain text data.

4. Add a `<category>` element as a child of the `<intent-filter>` element. Assign `android.intent.category.DEFAULT` to the `android:name` attribute to tell Android that the activity wants to receive implicit Intents.

5. Add an `<action>` element as a child of the `<intent-filter>` element, then assign `android.intent.action.SEND` to the `android:name` attribute to tell Android that the application can receive plain text data.

Note that the activity already had an intent filter declared indicating that the application should be available in the application launcher.

**tiapp.xml**

```xml
<ti:app>
    <android>
        <manifest>
            <activity android:name=".GibberishActivity"
                      android:label="Gibberish" android:theme="@style/Theme.Titanium"
                      android:configChanges="keyboardHidden|orientation">
                <intent-filter>
                    <action android:name="android.intent.action.MAIN"/>
                    <category android:name="android.intent.category.LAUNCHER"/>
                </intent-filter>
                <intent-filter android:label="Translate to Pig Latin">
                    <data android:mimeType="text/plain"/>
                    <category android:name="android.intent.category.DEFAULT"/>
                    <action android:name="android.intent.action.SEND"/>
                </intent-filter>
            </activity>

        </manifest>
    </android>
<ti:app>
```

You now have an app that is ready to receive Intents. Install it on either an Android device or emulator and make sure it runs. Close the application. Now you can test the Intent Filter by doing the following:

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Open your Android browser and go to a website.<br>Select some text, then click the <strong class=" ">Share</strong> button.</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>You should be greeted with an Intent list that<br>looks something like this.</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>Select your app in the list and you will then be directed<br>to your application containing the string you highlighted.</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/43287610/SelectText.png" alt="images/download/attachments/43287610/SelectText.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/43287610/ShareDialog.png" alt="images/download/attachments/43287610/ShareDialog.png" class="confluence-embedded-image"></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><img src="images/download/attachments/43287610/ApplicationWithText.png" alt="images/download/attachments/43287610/ApplicationWithText.png" class="confluence-embedded-image"></p></td></tr></tbody></table>

## URI intent filter example

This example creates a very simple application that will make itself available to a very specific intent. The application will present itself in the intent list anytime we click on a link that is destined to [http://www.appcelerator.com](http://www.appcelerator.com).

The code for the application simply displays a label to the user that tells them we know they just clicked on a link to www.appcelerator.com.

**Resources/app.js**

```javascript
Ti.UI.backgroundColor = '#fff';

var win = Ti.UI.createWindow();
var label = Ti.UI.createLabel({
  text:"I'll bet you just clicked on a link to http://www.appcelerator.com",
  color:'#000',
  font: {
    fontSize:32
  },
  width:'80%'
});
win.add(label);

win.open();
```

If you build and run it, your output should look roughly like this:

![app](./app.png)

Next, declare the intent filter in the `tiapp.xml`.

1. Copy the default root activity from the `AndroidManifest.xml` file to the Android manifest section of the `tiapp.xml`.

2. Add an `<intent-filter>` element as a child of the `<activity>` element.

3. Add a `<data>` element as a child of the `<intent-filter>` element, then assign `http` to the `android:scheme` attribute and `www.appcelerator.com` to the `android:host` attribute. This tells Android the activity can handle HTTP requests targeted at the host [www.appcelerator.com](http://www.appcelerator.com).

4. Add a `<category>` element as a child of the `<intent-filter>` element. Assign `android.intent.category.DEFAULT` to the `android:name` attribute to tell Android that the activity wants to receive implicit Intents.

5. Add another `<category>` element. Assign `android.intent.category.BROWSABLE` to the `android:name` attribute to tell Android that the request can come from the browser.

6. Add an `<action>` element as a child of the `<intent-filter>` element, then assign `android.intent.action.VIEW` to the `android:name` attribute to states that the activity will be handling VIEW intents.

Note that the activity already had an intent filter declared indicating that the application should be available in the application launcher.

**tiapp.xml**

```xml
<ti:app>
    <android>
        <manifest>
            <activity android:name=".IntentFilterTestActivity"
                      android:label="Intent Filter Test" android:theme="@style/Theme.Titanium"
                      android:configChanges="keyboardHidden|orientation">
                <intent-filter>
                    <action android:name="android.intent.action.MAIN" />
                    <category android:name="android.intent.category.LAUNCHER" />
                </intent-filter>
                <intent-filter>
                    <data android:scheme="http" android:host="www.appcelerator.com"/>
                    <category android:name="android.intent.category.DEFAULT" />
                    <category android:name="android.intent.category.BROWSABLE" />
                    <action android:name="android.intent.action.VIEW" />
                </intent-filter>
            </activity>

        </manifest>
    </android>
<ti:app>
```

You now have an app that is ready to receive Intents. Install it on either an Android device or emulator and make sure it runs. Close the application. Now you can test the Intent Filter by doing the following:

1. Open your Android browser.

2. Search for "appcelerator" on google.com.

3. Click the link for [http://www.appcelerator.com](http://www.appcelerator.com).

You should be greeted with an Intent list that looks something like this:

![intent_test](./intent_test.png)

Select your app in the list and you will then be directed to your application containing the "I'll bet you just clicked on a link to www.appcelerator.com" label.

## Further reading

* [Android Developers: Intents and Intent Filters](http://developer.android.com/guide/topics/intents/intents-filters.html)

* [Android Developers: `<intent-filter>`](http://developer.android.com/guide/topics/manifest/intent-filter-element.html)

* [Appcelerator Enterprise Mobility Blog: Android Intents](http://www.appcelerator.com/blog/2011/08/android-intents/)
