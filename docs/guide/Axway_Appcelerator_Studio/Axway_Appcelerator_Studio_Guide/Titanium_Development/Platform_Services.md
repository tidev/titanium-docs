---
title: Platform Services
weight: '130'
---

# Platform Services

## Introduction

Appcelerator Services are a set of features that are enabled through Appcelerator Studio and tracked on the Appcelerator Dashboard. These features include:

* **API Builder**: Mobile backend-as-a-service solution providing commonly used features, such as user management, push notification, integration with social networks and cloud storage provided by Mobile Backend Services. Using API Builder Cloud and Arrow Builder, developers can quickly and easily create mobile-optimized APIs that manage data from multiple data sources, such as SAP, Salesforce.com, Oracle, Sharepoint and others. For more information, see the [Axway API Builder](/guide/Axway_API_Builder/).

* **AMPLIFY Crash **Analytics****: Provides real-time crash reporting with diagnostic information and breadcrumb trail support.

* **Appcelerator Analytics**: Track your applications' user adoption and engagement. Understand how your application is used, which features are not used and decide what will go in the next version of your application. For more information, see [AMPLIFY Appcelerator Analytics](/guide/AMPLIFY_Appcelerator_Services/AMPLIFY_Appcelerator_Services_Guide/AMPLIFY_Appcelerator_Analytics/).

You can monitor and manage these services using the Appcelerator Dashboard at [https://platform.appcelerator.com](https://platform.appcelerator.com).

For information on using the dashboard, see [AMPLIFY Dashboard](/guide/AMPLIFY_Dashboard/).

## Enable Appcelerator Services

To enable Appcelerator Services for a Titanium or Alloy project:

* When creating a new application in Appcelerator Studio, make sure the **Enable Appcelerator Services** checkbox is enabled.

* For a previously created project, open your `tiapp.xml` file, then click the **Enable Services** button under the _Appcelerator Service_ section.

Appcelerator Studio injects code in to the `tiapp.xml` file to enable these services for your project. See code examples below. Do not modify these changes or else you will disable these services.

### tiapp.xml

The following changes are made to the `tiapp.xml` file to enable Appcelerator Services for both classic mobile and Alloy projects.

**tiapp.xml**

```xml
<!-- Set keys for the ArrowDB service -->
    <property name="acs-api-key-production" type="string">API_KEY_PROD</property>
    <property name="acs-authbase-url" type="string">ACS_AUTH_URL</property>
    <property name="acs-base-url" type="string">ACS_BASE_URL</property>
    <property name="acs-api-key-development" type="string">API_KEY_DEV</property>

    <!-- Enable the Appcelerator Analytics service -->
    <analytics>true</analytics>

    <!-- All services require the ACCESS_WIFI_STATE and INTERNET permissions -->
    <android xmlns:android="http://schemas.android.com/apk/res/android">
        <manifest>
            <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
            <uses-permission android:name="android.permission.INTERNET"/>
        </manifest>
    </android>

    <!-- Include module for Appcelerator Cloud services -->
    <modules>
        <module platform="commonjs">ti.cloud</module>
    </modules>
```

#### Android Permissions

The application requires the following Android permissions to use AMPLIFY Appcelerator Services for Titanium applications.

| Permission | Required By |
| --- | --- |
| ACCESS\_WIFI\_STATE | All services to access the Wi-Fi state of the device. |
| INTERNET | All services to access the Appcelerator Platform servers. |

## Troubleshooting

### Unable to enable Appcelerator Services

If more than one person is working on the same project and you try to enable Appcelerator Services after it has already been enabled once, the enablement process may freeze. To resolve this issue, copy the `tiapp.xml` from the user who first enabled Appcelerator Services.
