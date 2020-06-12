# Modules.Newsstand

<TypeHeader/>

## Overview

### Requirements
This module requires iOS 5 or greater

### Newsstand Resources
-   [Newsstand for Developers](https://developer.apple.com/newsstand/)
-   [Newsstand Kit Framework Reference](https://developer.apple.com/library/ios/#documentation/StoreKit/Reference/NewsstandKit_Framework/_index.html)

### Publishing
Apple allows you to update your app icon in iTunes connect so that the latest issue can always be displayed. Documentation around setting this up can be found in the [iTunes Connect Developer Guide](https://developer.apple.com/library/ios/#documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/14_Newsstand/Newsstand.html).

### Getting Started

View the [Using Titanium Modules](http://docs.appcelerator.com/titanium/latest/#!/guide/Using_Titanium_Modules) document for instructions on getting
started with using this module in your application.

### Accessing the Newsstand Module

   To access this module from JavaScript, you would do the following:

   	var Newsstand = require("ti.newsstand");

   The newsstand variable is a reference to the Module object.

### Setup

1. Setup the app as a Newsstand app by adding the code below to your tiapp.xml
2. Modify the `UINewsstandBindingEdge` and `UINewsstandBindingType` values to get different decorations on the icons. Available options can be found in Apple's [CoreFoundationKeys Documentation](https://developer.apple.com/library/mac/#documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html).
3. Add `newsstandicon.png` to the 'Resources/iphone' directory next to appicon.png
4. Run the app, you should see it in the Newsstand folder.
5. During development, be sure to call <Modules.Newsstand.enableDevMode> to remove the daily download limit.

tiapp.xml

	<ios>
        <plist>
            <dict>
                <key>CFBundleIcons</key>
                <dict>
                    <key>CFBundlePrimaryIcon</key>
                    <dict>
                        <key>CFBundleIconFiles</key>
                        <array>
                            <string>appicon.png</string>
                        </array>
                    </dict>
                    <key>UINewsstandIcon</key>
                    <dict>
                        <key>CFBundleIconFiles</key>
                        <array>
                            <string>newsstandicon.png</string>
                        </array>
                        <key>UINewsstandBindingEdge</key>
                        <string>UINewsstandBindingEdgeLeft</string>
                        <key>UINewsstandBindingType</key>
                        <string>UINewsstandBindingTypeMagazine</string>
                    </dict>
                </dict>
                <key>UINewsstandApp</key>
                <true/>
                <key>UIBackgroundModes</key>
                <array>
                    <string>newsstand-content</string>
                </array>
            </dict>
        </plist>
    </ios>

### Push Notifications

Push notifications can be sent to the device to notify it that a new issue is available. The notification payload must contain a "content-available" key set to 1. If this is not set, iOS will not allow the application to wake in the background to download a new issue.

	{
	  "aps":{
		"content-available":1,
	        },
	   "device_tokens": ["exampleToken4F2509D125889AED3466F4D1376B26C374190B3974739"]
	}

Use the <Titanium.Network.NOTIFICATION_TYPE_NEWSSTAND> type when calling <Titanium.Network.registerForPushNotifications>

	Ti.Network.registerForPushNotifications({
	    types:[
	        Ti.Network.NOTIFICATION_TYPE_NEWSSTAND
	    ],
	    success: eventSuccess,
	    error: eventError,
	    callback: eventCallback
	});

To enable your application to download assets in the background in response to a push notification, you *must* wrap 
your <Modules.Newsstand.Issue.downloadAsset> calls with calls to <Modules.Newsstand.beginBackgroundDownloadRequests> and <Modules.Newsstand.endBackgroundDownloadRequests>.

For example, the event callback specified for <Titanium.Network.registerForPushNotifications> might look like the following:

	function eventCallback(e) {
	  	if (e.data['content-available'] === 1) {
			Newsstand.beginBackgroundDownloadRequests();
			var issue = Newsstand.getIssue({
				name: issues[0].name
			});	
			if (!issue) {
				// if issue is not found then add it
				issue = Newsstand.addIssue({
					name: name,
					date: new Date()
				});
			}
			issue.downloadAsset({
				url: issues[0].content,
				userInfo: {
					id: 9999,
					name: 'TESTBACKGROUND'
				}
			});
			Newsstand.endBackgroundDownloadRequests();
	  	}
	}

<ApiDocs/>
