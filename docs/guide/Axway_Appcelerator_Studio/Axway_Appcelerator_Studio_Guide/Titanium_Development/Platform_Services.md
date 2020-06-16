---
title: Platform Services
weight: '130'
---

# Platform Services

## Introduction

Appcelerator Services are a set of features that are enabled through Appcelerator Studio and tracked on the Appcelerator Dashboard. These features include:

* **API Builder**: Mobile backend-as-a-service solution providing commonly used features, such as user management, push notification, integration with social networks and cloud storage provided by Mobile Backend Services. Using API Builder Cloud and Arrow Builder, developers can quickly and easily create mobile-optimized APIs that manage data from multiple data sources, such as SAP, Salesforce.com, Oracle, Sharepoint and others. For more information, see the [Axway API Builder](/guide/Axway_API_Builder/).

* **Appcelerator Test**: Integrated automated functional testing for your application, powered by SOASTA services. Using Appcelerator Test, developers and testers collaborate to record tests directly on the mobile device, execute tests and analyze the results. For more information, see [Appcelerator Test](#undefined)

* **Appcelerator Performance**: Monitors your application's health, crashes and overall performance, powered by our own [crash server service](#CrashServer). Using Appcelerator Performance, developers are able to diagnose why applications crash and focus on specific issues based on user feedback. For more information, see [Appcelerator Performance Management](#undefined).

* **Appcelerator Analytics**: Track your applications' user adoption and engagement. Understand how your application is used, which features are not used and decide what will go in the next version of your application. For more information, see [Appcelerator Analytics](/guide/AMPLIFY_Appcelerator_Services/AMPLIFY_Appcelerator_Services_Guide/Appcelerator_Analytics/).

You can monitor and manage these services using the Appcelerator Dashboard at [https://platform.appcelerator.com](https://platform.appcelerator.com).

For information on using the dashboard, see [Appcelerator Dashboard](/guide/Appcelerator_Dashboard/).

## Enable Appcelerator Services

To enable Appcelerator Services for a Titanium or Alloy project:

* When creating a new application in Appcelerator Studio, make sure the **Enable Appcelerator Services** checkbox is enabled.

* For a previously created project, open your `tiapp.xml` file, then click the **Enable Services** button under the _Appcelerator Service_ section.

Appcelerator Studio injects code in to the `tiapp.xml` file to enable these services for your project. See code examples below. Do not modify these changes or else you will disable these services.

### tiapp.xml

The following changes are made to the `tiapp.xml` file to enable Appcelerator Services for both classic mobile and Alloy projects.

**tiapp.xml**

```xml
<!-- Crittercism Application ID for Appcelerator Performance service -->
    <property name="com-apm-id" type="string">CRITTERCISM_APP_ID</property>

    <!-- Set keys for the ArrowDB service -->
    <property name="acs-api-key-production" type="string">API_KEY_PROD</property>
    <property name="acs-authbase-url" type="string">ACS_AUTH_URL</property>
    <property name="acs-base-url" type="string">ACS_BASE_URL</property>
    <property name="acs-api-key-development" type="string">API_KEY_DEV</property>

    <!-- Enable the Appcelerator Analytics service -->
    <analytics>true</analytics>

    <!-- Android Manifest keys for the Appcelerator Test service -->
    <android xmlns:android="http://schemas.android.com/apk/res/android">
        <manifest>
            <application>
                <activity
                    android:configChanges="keyboardHidden|orientation"
                    android:label="<AppName>"
                    android:name=".<Appname>androidActivity" android:theme="@style/Theme.Titanium">
                    <intent-filter>
                        <action android:name="android.intent.action.MAIN"/>
                        <category android:name="android.intent.category.LAUNCHER"/>
                    </intent-filter>
                    <intent-filter>
                        <data android:scheme="touchtest-<GUID>"/>
                        <action android:name="android.intent.action.VIEW"/>
                        <category android:name="android.intent.category.BROWSABLE"/>
                        <category android:name="android.intent.category.DEFAULT"/>
                    </intent-filter>
                </activity>
                <service android:enabled="true" android:exported="false" android:name="com.soasta.android.touchtest.TouchTestService"/>
            </application>
            <!-- All services require the ACCESS_WIFI_STATE and INTERNET permissions -->
            <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
            <uses-permission android:name="android.permission.INTERNET"/>
            <!-- The Appcelerator Test service requires READ_PHONE_STATE, BLUETOOTH, and BLUETOOTH_ADMIN permissions -->
            <uses-permission android:name="android.permission.READ_PHONE_STATE"/>
            <uses-permission android:name="android.permission.BLUETOOTH"/>
            <uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>
            <!-- The Appcelerator Performance and Test services require the GET_TASKS permission -->
            <uses-permission android:name="android.permission.GET_TASKS"/>
        </manifest>
    </android>

    <!-- Include modules for Appcelerator Performance, Cloud and Test services -->
    <modules>
        <module platform="commonjs">ti.cloud</module>
        <module platform="android">com.appcelerator.apm</module>
        <module platform="iphone">com.appcelerator.apm</module>
        <module deploy-type="test" platform="iphone" version="1.0">com.soasta.touchtest</module>
        <module deploy-type="development" platform="iphone" version="1.0">com.soasta.touchtest</module>
        <module deploy-type="test" platform="android" version="1.0">com.soasta.touchtest</module>
        <module deploy-type="development" platform="android" version="1.0">com.soasta.touchtest</module>
    </modules>

    <!-- Configure Appcelerator Test settings -->
    <ios>
        <plist>
            <dict>
                <key>CFBundleURLTypes</key>
                <array>
                    <dict>
                        <key>CFBundleTypeRole</key>
                        <string>Editor</string>
                        <key>CFBundleURLName</key>
                        <string>PACKAGE</string>
                        <key>CFBundleURLSchemes</key>
                        <array>
                            <string>touchtest-<GUID></string>
                        </array>
                    </dict>
                </array>
            </dict>
        </plist>
    </ios>
    <plugins>
        <plugin>com.soasta.touchtest.android</plugin>
    </plugins>

    <property name="com-soasta-touchtest-version" type="string">VERSION</property>
    <property name="com-soasta-touchtest-ios-appId" type="string">TEST_APP_ID</property>
```

#### Android Permissions

The application requires the following Android permissions to use AMPLIFY Appcelerator Services for Titanium and Alloy applications.

| Permission | Required By |
| --- | --- |
| ACCESS\_WIFI\_STATE | All services to access the Wi-Fi state of the device. |
| BLUETOOTH | The Test service to uniquely identify the device. |
| BLUETOOTH\_ADMIN | The Test service to uniquely identify the device. |
| GET\_TASKS | * The Performance service to accurately log which activity caused a crash or error<br />    <br />* The Test service to detect UI changes, UI interactions and playback changes. |
| INTERNET | All services to access the Appcelerator Platform servers. |
| READ\_PHONE\_STATE | The Test service to uniquely identify the device. |

## Troubleshooting

### Unable to enable Appcelerator Services

If more than one person is working on the same project and you try to enable Appcelerator Services after it has already been enabled once, the enablement process may freeze. To resolve this issue, copy the `tiapp.xml` from the user who first enabled Appcelerator Services.
