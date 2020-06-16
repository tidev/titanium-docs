---
title: Managing Non-Titanium Client Applications in Dashboard
weight: '10'
---

# Managing Non-Titanium Client Applications in Dashboard

To use Appcelerator Platform Services in your Android and iOS applications, you need to first register an application in Appcelerator Dashboard. Registering the application defines the name, platform, and other metadata about the application. Once you've registered the application in Dashboard, you can download the libraries and frameworks to integrate Appcelerator Platform Services into your application. Appcelerator Dashboard also generates a new Mobile Backend Services datasource and the application keys required to enable the services in your app.

## Register an Application for Services

### Register an APS SDK application

Appcelerator Platform Services (APS) SDK for iOS and Android provides support for Appcelerator Analytics and Cloud services for your Android applications built with the native Android APIs and Java and iOS applications built with the native iOS APIs and Objective-C or Swift.

To register an APS SDK application for services:

1. Sign in to the [AMPLIFY Platform](https://platform.axway.com/).

2. Click the Add menu (**+**) and select **Register App for Services** to open the _Register App for Services_ form.

3. Enter the **Name** of the application.

4. Select **APS SDK** from the _Type_ selection menu.

    ![RegisterAppForService_latest_APSSDK](/images/guide/download/attachments/60148494/RegisterAppForService_latest_APSSDK.png)
5. Select a **Platform** (**Andriod** or **iOS**).

6. Optionally, enter a unique **Identifier** for your application.

7. Optionally, enter a **Description** for your application.

8. Select **Services** for your application by selecting or deselecting the check-boxes for the following:

    * Analytics

    * Provision Cloud Services (Mobile Backend Services)

9. Add teams to the application from your organization by clicking the add (**+**) button in the Assign Teams list.

10. Click **OK**.

Appcelerator Dashboard displays the **Services** tab for your application. Follow the directions to add Platform Services to your application.

### Register an API or Microservice application

To register an API or microservice application:

1. Sign in to the [AMPLIFY Platform](https://platform.axway.com/).

2. Click the Add menu (**+**) and select **Register App for Services** to open the _Register App for Services_ form.

3. Enter the **Name** of the application.

4. Select **API/Microservice** from the _Type_ selection menu.

    ![RegisterAppForService_latest_API](/images/guide/download/attachments/60148494/RegisterAppForService_latest_API.png)
5. Enter a **Platform** for your application.

6. Optionally, enter a unique **Identifier** for your application.

7. Optionally, enter a **Description** for your application.

8. Select **Services** for your application by selecting or deselecting the check-boxes for the following:

    * Analytics

    * Provision Cloud Services (Mobile Backend Services)

9. Add teams to the application from your organization by clicking the add (**+**) button in the Assign Teams list.

10. Click **OK**.

### Register a Website or Web application

To register a Website or Web application:

1. Sign in to the [AMPLIFY Platform](https://platform.axway.com/).

2. Click the Add menu (**+**) and select **Register App for Services** to open the _Register App for Services_ form.

3. Enter the **Name** of the application.

4. Select **Website/Web App** from the _Type_ selection menu.

    ![RegisterAppForService_latest_Web](/images/guide/download/attachments/60148494/RegisterAppForService_latest_Web.png)
5. Enter a **Platform** for your application.

6. Optionally, enter a unique **Identifier** for your application.

7. Optionally, enter a **Description** for your application.

8. Select **Services** for your application by selecting or deselecting the check-boxes for the following:

    * Analytics

    * Provision Cloud Services (Mobile Backend Services)

9. Add teams to the application from your organization by clicking the add (**+**) button in the Assign Teams list.

10. Click **OK**.

### Register a Custom application

To register a custom application (other than APS SDK, API/Microservice, or Website/Web applications):

1. Sign in to the [AMPLIFY Platform](https://platform.axway.com/).

2. Click the Add menu (**+**) and select **Register App for Services** to open the _Register App for Services_ form.

3. Enter the **Name** of the application.

4. Select **Other** from the _Type_ selection menu.

    ![RegisterAppForService_latest_Other](/images/guide/download/attachments/60148494/RegisterAppForService_latest_Other.png)
5. Enter a **Platform** for your application.

6. Optionally, enter a unique **Identifier** for your application.

7. Optionally, enter a **Description** for your application.

8. Select **Services** for your application by selecting or deselecting the check-boxes for the following:

    * Analytics

    * Provision Cloud Services (Mobile Backend Services)

9. Add teams to the application from your organization by clicking the add (**+**) button in the Assign Teams list.

10. Click **OK**.

## Enable Platform Services

After you have created your client application, Dashboard directs you to the **Services** tab for the application. The **Services** tab displays the current status of the Cloud and Analytics services. When the client application is first created, the Cloud and Analytics services are automatically enabled. Follow the directions in the tab to add Platform Services to your application.

The **Services** tab also provides the functionality for you to generate a new security key. To generate a new security key:

1. Use the **Environment** drop-down list to select the environment for which you want to generate the new key.

2. Click **Generate a New Key**.

3. Verify that you want to generate a new key for the selected environment. Click **Continue** to generate the new key. Click **Cancel** to return to the Services tab without generating a new key.

To integrate the Cloud and Analytics services with your application:

1. Click the **Download** button to download the APS SDK, unpack it, and then add the library to your project.

2. Copy the code snippets to your application as instructed to enable the services. Before copying and pasting the code snippet to enable or initialize services, use the **Environment** drop-down list to select the environment to which to deploy your application.

For more detailed instructions, see the [Quick Start Guide for Android APS SDK](/guide/AMPLIFY_Appcelerator_Services/AMPLIFY_Appcelerator_Platform_Services_How-tos/AMPLIFY_Appcelerator_Services_Native_SDKs/AMPLIFY_Appcelerator_Platform_Services_for_Android/Quick_Start_Guide_for_Android_APS_SDK/) and [Quick Start Guide for iOS APS SDK](/guide/AMPLIFY_Appcelerator_Services/AMPLIFY_Appcelerator_Platform_Services_How-tos/AMPLIFY_Appcelerator_Services_Native_SDKs/AMPLIFY_Appcelerator_Platform_Services_for_iOS/Quick_Start_Guide_for_iOS_APS_SDK/) guides.

![PlatformServicesInstructions_new](./PlatformServicesInstructions_new.png)

If you need to later return to these Enable Platform Services instructions, do the following:

1. Select the **Projects** tab and select the application. Dashboard displays the **Overview** tab of the application.

2. Select the **Services** tab.
