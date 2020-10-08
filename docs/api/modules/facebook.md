---
editUrl: https://github.com/appcelerator-modules/ti.facebook/edit/master/apidoc/Facebook.yml
---
# Modules.Facebook

<TypeHeader/>

## Overview

The Facebook module is used for connecting your application with Facebook. 
This module supports the following features:

* Logging in to Facebook and authorizing your application with either the
  [Login button](Modules.Facebook.LoginButton) or programatically.

* Making requests through the Facebook Graph API v3 using the
  [requestWithGraphPath()](Modules.Facebook.requestWithGraphPath) method.

## Getting Started

To use the Facebook module, you need a Facebook application. To create a Facebook App,
go to the Facebook Developer App: [developers.facebook.com/apps](https://developers.facebook.com/apps).

- Edit the `modules` section of your tiapp.xml file to include this module:

    ``` xml
    <modules>
        <!-- Add the appropriate line(s) to your modules section -->
        <module platform="android">facebook</module>
        <module platform="iphone">facebook</module>
    </modules>
    ```

- Instantiate the module with the `require('facebook')` method, then make subsequent API calls
  with the new Facebook object.

    ``` javascript
    var fb = require('facebook');
    fb.permissions = [FACEBOOK_APP_PERMISSIONS]; // e.g. ['email']
    fb.initialize();
    fb.authorize();
    ```

### Additional iOS Setup Steps

For the iOS platform, in the `ios plist dict` section of your `tiapp.xml` file, add the following keys:

  * `FacebookAppID` key with your Facebook App ID as the string value
  * `FacebookDisplayName` key with your Facebook App name (the one from `developer.facebook.com`) as the string value
  * `CFBundleURLTypes` key with a single-element array containing a dict as the value, where the dict contains:
      * `CFBundleURLName` key with the application app ID (same value as the `id` in the `tiapp.xml` file) as the string value
      * `CFBundleURLSchemes` key with a single-element array containing the Facebook App ID prefixed with `fb` as a string value

For example:

``` xml
<ti:app>
    <ios>
        <plist>
            <dict>
                <key>CFBundleURLTypes</key>
                <array>
                    <dict>
                        <key>CFBundleURLName</key>
                        <!-- Application ID same as the id value in the tiapp.xml file -->
                        <string>APP_ID</string>
                        <key>CFBundleURLSchemes</key>
                        <array>
                            <!-- Prefix the Facebook App ID with 'fb' -->
                            <string>fbFACEBOOK_APP_ID</string>
                        </array>
                    </dict>
                </array>
                <key>FacebookAppID</key>
                <!-- Facebook App ID -->
                <string>FACEBOOK_APP_ID</string>
                <key>FacebookDisplayName</key>
                <!-- Facebook App Name from developer.facebook.com -->
                <string>FACEBOOK_APP_NAME</string>
            </dict>
        </plist>
    </ios>
</ti:app>
```

To enable the use of Facebook dialogs (e.g., Login, Share), you also need to include the following key and values in `tiapp.xml`
to handle the switching in and out of your app:

``` xml
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>fbapi</string>
    <string>fb-messenger-api</string>
    <string>fbauth2</string>
    <string>fbshareextension</string>
</array>
```

If you are using the older Ti.Facebook Module 4.0.5 and wish to support iOS9, you will instead need to include the following key
and values in `tiapp.xml` to handle the switching in and out of your app:

``` xml
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>fbapi</string>
    <string>fbapi20130214</string>
    <string>fbapi20130410</string>
    <string>fbapi20130702</string>
    <string>fbapi20131010</string>
    <string>fbapi20131219</string>
    <string>fbapi20140410</string>
    <string>fbapi20140116</string>
    <string>fbapi20150313</string>
    <string>fbapi20150629</string>
    <string>fbauth</string>
    <string>fbauth2</string>
    <string>fb-messenger-api20140430</string>
</array>
```

For iOS 9+ and Titanium 5.0.0.GA and above, App Transport Security is disabled by default.
If you choose to enable it, you have to set the following keys and values in `tiapp.xml` `<ios>` section for facebook module:

``` xml
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSExceptionDomains</key>
        <dict>
            <key>facebook.com</key>
            <dict>
                <key>NSIncludesSubdomains</key> 
                <true/>
                <key>NSExceptionRequiresForwardSecrecy</key> 
                <false/>
            </dict>
            <key>fbcdn.net</key>
            <dict>
                <key>NSIncludesSubdomains</key> 
                <true/>
                <key>NSExceptionRequiresForwardSecrecy</key>  
                <false/>
            </dict>
            <key>akamaihd.net</key>
            <dict>
                <key>NSIncludesSubdomains</key> 
                <true/>
                <key>NSExceptionRequiresForwardSecrecy</key> 
                <false/>
            </dict>
        </dict>
</dict>
```

### Additional Android Setup Steps

For the Android platform, you need to:

  * Add the Facebook Login activity to the Android manifest
  * Add the Facebook App ID to the Android resources `string.xml` file
  * Create a Facebook proxy and associate it with the current active activity

**Modify the Android Manifest**

Add the Facebook Login activity to the `android manifest` section of your `tiapp.xml` file.
You may need to add the `manifest` and `application` elements.

``` xml
<ti:app>
    <android xmlns:android="http://schemas.android.com/apk/res/android">
        <manifest>
            <application>
                <activity android:name="com.facebook.FacebookActivity" 
                          android:theme="@android:style/Theme.Translucent.NoTitleBar" 
                          android:label="YourAppName" 
                          android:configChanges="keyboard|keyboardHidden|screenLayout|screenSize|orientation" />
                <meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>

                <provider android:name="com.facebook.FacebookContentProvider"
                          android:authorities="com.facebook.app.FacebookContentProvider<YOUR_APP_ID>"
                          android:exported="true" />
            </application>
        </manifest>
    </android>
<ti:app>
```

**Add the Facebook App ID to Android Resources**

Add a string element to the `/platform/android/res/values/strings.xml` file with the `name`
attribute set to `facebook_app_id` and the node text set to your Facebook App ID. Create the
file if it does not exist.

``` xml
<resources>
    <string name="facebook_app_id">FACEBOOK_APP_ID</string>
</resources>
```
    
**Generate the Key Hashes**

Facebook requires you to add the Key Hash of the Android app in order for you to use the module. 
Steps to get the Key Hash as follows. Alternatively, if you do not have the correct Key Hash on 
the Android App, the App will give an error message when you login with the Key Hash of the App 
which you can then copy.

Use the following command to generate and receive the key-hashpath of your app. To do do, 
replace `<sdk-version>` with your SDK-version and run:

``` sh
keytool -exportcert -alias androiddebugkey -keystore ~/Library/Application\ Support/Titanium/mobilesdk/osx/<sdk-version>/dev_keystore | openssl sha1 -binary | openssl base64
```

You would also require, to fill up the Google Play Package Name which is the Application ID 
and the Class Name which is the Application ID followed by the Application Name concatenated 
with the word Activity. Example, an App called Kitchensink with Application ID of 
"com.appcelerator.kitchensink" will have the Class Name as "com.appcelerator.kitchensink.KitchensinkActivity".
Alternatively, you can check the Class Name in `<project>/build/android/AndroidManifest.xml` which is 
generated when you build the project. The launcher activity is the Class Name of the Application.

For more info, please see https://developers.facebook.com/docs/android/getting-started

**Create a Facebook Proxy**

Use the [createActivityWorker()](Modules.Facebook.createActivityWorker) method to create a
Facebook proxy. Pass the method a dictionary with the `lifecycleContainer` property set to
the current active instance of a standalone Window (window not contained in a tab group) or TabGroup.
Create the proxy before calling the `open()` method on either the window or tab group.

The Facebook module needs to hook into the lifecycle events of the current active activity
in order to synchronize its state between various activities in the application, for example,
to update the label of the Login button when the user logs in or out of Facebook.

Attach the proxy to the Window or TabGroup object, so it does not get garbage collected.

``` javascript
win.fbProxy = fb.createActivityWorker({ lifecycleContainer: win });
```

## Module API Usage

### Facebook Login and Authorization

To use Facebook, a user must logged into Facebook and explicitly authorize the application to
perform certain actions, such as accessing profile information or posting status messages.

Call [authorize](Modules.Facebook.authorize) to prompt the user to login and authorize
the application. Before calling this method, set the <Modules.Facebook.permissions> property
if additional permissions are needed.

Which approach you take depends on your UI and how central Facebook is to your
application.

### Manage Read and Write Permissions

In order to read or write content to a user's Facebook page, you need to request permission from
the user.  You can either request permissions when the user authorizes your application or
request permissions on the fly.

Before the user logs in and authorizes the application, you can request permissions for the
application to use by either: Setting the <Modules.Facebook.permissions> property if you are using `authorize()` 
method to have the user login and authorize the application.

For a complete list of permissions, see the [official Facebook Permissions Reference](https://developers.facebook.com/docs/facebook-login/permissions/)

**Refresh Application Permissions**

Since the user can selectively turn application permissions on and off from their Facebook
page, the application may need to refresh its granted permissions.

To refresh the application's permissions, call the
[refreshPermissionsFromServer()](Modules.Facebook.refreshPermissionsFromServer) method, then
listen for the <Modules.Facebook.tokenUpdated> event to be notified when permissions are updated.

``` javascript
fb.addEventListener('tokenUpdated', function (e) {
    Ti.API.info('Updated permissions: ' + JSON.stringify(fb.permissions));
});
fb.refreshPermissionsFromServer();
```

### Share Dialogs

The Share dialog prompts a person to publish an individual story or an Open Graph story
to their timeline. This does not require the user to authorize your app or any extended permissions,
so it is the easiest way to enable sharing.

Pass either method parameters you want to add to the post, such as a `link` or `hashtag`, or to
share the user's status, do not pass any parameters to the methods. Note: The `link` parameter is
**required** by the Facebook SDK.

To monitor if the share request succeeded or not, listen to the <Modules.Facebook.shareCompleted>
event.

``` javascript
fb.addEventListener('shareCompleted', function (e) {
    if (e.success) {
        Ti.API.info('Share request succeeded.');
    } else {
        Ti.API.warn('Failed to share.');
    }
});

fb.presentShareDialog({
    link: 'https://appcelerator.com/',
    hashtag: 'codestrong'
});
```

For details on the Share dialog, see the
[official Facebook Share Dialogs documentation](https://developers.facebook.com/docs/sharing/reference/share-dialog).

### Game Requests Dialog

To send a game request to a user, call the
[presentSendRequestDialog()](Modules.Facebook.presentSendRequestDialog) method and pass the
method a dictionary with the `message` property set the message you want to send the invited user.
Optional: You can set the `title` property with a title string. You can also set the `data` property
with a dictionary of custom parameters. If you want to preselect users to send invite to, you can set
the `to` property with string of values that are facebook ids seperated by comma.

To monitor if the request succeeded or not, listen to the <Modules.Facebook.requestDialogCompleted> event.

``` javascript
fb.addEventListener('requestDialogCompleted', function (e) {
    if (e.success) {
        Ti.API.info('request succeeded.');
    } else {
        Ti.API.warn('Failed to share.');
    }
});

fb.presentSendRequestDialog({
    message: 'Go to https://appcelerator.com/',
    title: 'Invitation to Appcelerator',
    recipients: ['123456789', '987654321'],
    data: {
        badge_of_awesomeness: '1',
        social_karma: '5'
    }
});
```

For details on game request dialogs see the
[official Facebook Request Dialogs documentation](https://developers.facebook.com/docs/games/services/gamerequests).

### Messenger Button

The Messenger button provides a quick mechanism for users to share content to the Facebook Messenger.
A click on the button can share the content to multiple users.

To create a Messenger button, call the [createMessengerButton()](Modules.Facebook.createMessengerButton)
method and pass the "mode" and "style" properties:

``` javascript
var messengerButton = fb.createMessengerButton({
    mode: fb.MESSENGER_BUTTON_MODE_RECTANGULAR
    style: fb.MESSENGER_BUTTON_STYLE_BLUE
});
win.add(messengerButton);
```

For more information, see the [MessengerButton API reference](Modules.Facebook.MessengerButton).

## Examples

### Authorize

Shows official Facebook dialog for logging in the user and prompting the user to approve your
requested permissions.  Listen for the module's [login](Modules.Facebook.login) event to
determine whether the request succeeded.

``` javascript
var fb = require('facebook');
fb.initialize();
fb.addEventListener('login', function (e) {
    if (e.success) {
        alert('Logged in with User ID: ' + e.uid + ', Name: ' + JSON.parse(e.data).name);
        label.text = 'Logged In = ' + fb.loggedIn;
    }
    else if (e.cancelled) {
        // user cancelled
        alert('cancelled');
    }
    else {
        alert(e.error);
    }
});
fb.authorize();
```

### Logout

Logout the user and forget the authorization token.  The
[logout](Modules.Facebook.logout) event is fired after the user is logged out.

``` javascript
fb.addEventListener('logout', function (e) {
    alert('Logged out');
});
fb.logout();
```

### Authorize/Logout Using the Facebook LoginButton

You can use the the native Facebook [LoginButton](Modules.Facebook.LoginButton)
to allow the user to log in as required. The button updates its state automatically depending
on whether the user is logged in or not.  When the user is logged in, then the button
will show "Logout", and vice-versa.

Note that you don't need to set a click listener or anything else on the button.
To be notified when the user logs in or out, add event listeners for the
[login](Modules.Facebook.login) and [logout](Modules.Facebook.logout) events
provided by the Facebook module, as in the example below.

``` javascript
// Don't forget to set your requested permissions, else the login button won't be effective.
var win = Ti.UI.createWindow({ backgroundColor: 'white' });
var fb = require('facebook');

fb.addEventListener('login', function (e) {
    if (e.success) {
        alert('Logged in');
    }
});
fb.addEventListener('logout', function (e) {
    alert('Logged out');
});

if (Ti.Platform.name === 'android') {
    win.fbProxy = fb.createActivityWorker({ lifecycleContainer: win });
}

// Add the button.  Note that it doesn't need a click event listener.
win.add(fb.createLoginButton({
        readPermissions: ['read_stream','email'],
        top: 50
}));

win.open()
```

### Simple Graph API Call

This example makes a call to the "me" graph path, which represents the current
user. The JSON results are simply displayed in an alert.  This example assumes
the user is already logged in. You can check this with <Modules.Facebook.loggedIn>.

``` javascript
fb.requestWithGraphPath('me', {}, 'GET', function (e) {
    if (e.success) {
        alert(e.result);
    } else if (e.error) {
        alert(e.error);
    } else {
        alert('Unknown response');
    }
});
```

### Post a Photo Using the Graph API from the Gallery.

This example posts a photo to the user's account using the Graph API.
This requires the "publish_actions" permission.

``` javascript
var b1 = Ti.UI.createButton({
    title: 'Upload Photo from Gallery with Graph API'
});

b1.addEventListener('click', function () {
    Titanium.Media.openPhotoGallery({
        success: function (event) {
            b1.title = 'Uploading Photo...';
            var data = { picture: event.media };
            // If publish_actions permission is not granted, request it
            if (fb.permissions.indexOf('publish_actions') === -1) {
                fb.requestNewPublishPermissions(['publish_actions'], fb.AUDIENCE_FRIENDS, function (e) {
                    if (!e.success) {
                        Ti.API.info('Publish permission error');
                        return;
                    }
                    if (e.cancelled) {
                        Ti.API.info('Publish permission cancelled');
                        return;
                    }
                    
                    Ti.API.info('Permissions: ' + fb.permissions);
                    fb.requestWithGraphPath('me/photos', data, 'POST', showRequestResult);
                });
            } else {
                fb.requestWithGraphPath('me/photos', data, 'POST', showRequestResult);
            }
        },
        error: function (e) {
            Ti.API.error('Error opening photo gallery: ' + e.error);
        }
    });
});
```

For more information on posting photos, see:

* [Photo in the Facebook Graph API Reference](https://developers.facebook.com/docs/graph-api/reference/photo)

### Post a Photo Using the Graph API with an image in resources directory

This example posts a photo to the user's account using the Graph API.
This requires the "publish_actions" permission.

``` javascript
var b2 = Ti.UI.createButton({
    title: 'Upload Photo from file with Graph API',
    left: 10, 
    right: 10, 
    top: 90, 
    height: 80
});

b2.addEventListener('click', function () {
    b2.title = 'Uploading Photo...';
    var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images', 'flower.jpg');
    var blob = f.read();
    var data = {
        picture: blob
    };
    // If publish_actions permission is not granted, request it
    if (fb.permissions.indexOf('publish_actions') < 0) {
        fb.requestNewPublishPermissions(['publish_actions'], fb.AUDIENCE_FRIENDS, function (e) {
            if (e.success) {
                Ti.API.info('Permissions: ' + fb.permissions);
                fb.requestWithGraphPath('me/photos', data, 'POST', showRequestResult);
            }
            if (e.error) {
                Ti.API.info('Publish permission error');
            }
            if (e.cancelled) {
                Ti.API.info('Publish permission cancelled');
            }
        });
    } else {
        fb.requestWithGraphPath('me/photos', data, 'POST', showRequestResult);
    }
});
```

For more information on posting photos, see:

* [Photo in the Facebook Graph API Reference](https://developers.facebook.com/docs/graph-api/reference/photo)

### Show a basic Share Dialog

This example shows how to show a basic Share Dialog.

``` javascript
var button = Ti.UI.createButton({
    title: 'Share URL with Share Dialog'
});

button.addEventListener('click', function () {
    fb.presentShareDialog({
        link: 'https://appcelerator.com/',
        hashtag: 'codestrong'
    });
});
```

For more information on Facebook Dialogs, see:

* [Facebook Share Dialog Reference](https://developers.facebook.com/docs/sharing/reference/share-dialog)

### Share content to the Facebook Messenger

This example shows how to share images, GIF's and videos to the Facebook messenger.

``` javascript
var btn = Ti.UI.createButton({
    title: 'Share media to messenger'
});
btn.addEventListener('click', function (e) {
    var media = [
        Ti.UI.createView({ height: 30, width: 30,backgroundColor: '#ff0' }).toImage(), // Image blob
        Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'test.gif').read(), // GIF Blob
        Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'movie.mp4').read() // Video Blob
    ];

    var options = Ti.UI.createOptionDialog({
        options: ['Photo', 'GIF', 'Video', 'Cancel'],
        cancel: 3
    });
    options.addEventListener('click', function (e) {
        if (e.index == 3) {
            return;
        }
        FB.shareMediaToMessenger({
            media: media[e.index],
            metadata: 'Ti rocks!',
            link: 'https://appcelerator.com',
        });
    });
    options.show();
});
```

For more information on sharing media to the Facebook Messenger, see:

* [Facebook Messenger Reference](https://developers.facebook.com/docs/messenger)

### Requesting additional permissions

This example shows how to use the `requestNewPublishPermissions` method to request additional permissions
to publish a post to the user's wall.

``` javascript
fb.requestNewPublishPermissions(['publish_actions'], fb.AUDIENCE_FRIENDS, function (e) {
    if (e.success) {
        fb.requestWithGraphPath('me/feed', null, 'POST', showRequestResult);
    } else {
        Ti.API.debug('Failed authorization due to: ' + e.error);
    }
});
```

<ApiDocs/>
