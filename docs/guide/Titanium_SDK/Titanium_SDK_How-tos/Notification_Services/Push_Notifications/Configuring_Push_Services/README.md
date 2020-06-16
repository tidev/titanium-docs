---
title: Configuring Push Services
weight: '10'
---

# Configuring Push Services

::: warning ⚠️ Warning
Google has transitioned from Google Cloud Messaging (GCM) to [Firebase Cloud Messaging](http://firebase.google.com/docs/cloud-messaging/) (FCM) technology for push. We encourage developers to use FCM.
:::

To send push notifications, Mobile Backend Services (MBS) relies on the FCM for Android applications, and the Apple Push Notification (APN) service for iOS applications. To use these services in your Titanium application, you first need to enable either FCM, or APN for your application, and then configure MBS with information about your push service. This guide walks you through the process of creating and configuring push services for your application.

## Configuring push services for iOS devices

To enable Apple Push Notification service for your application, you need to create an Apple Push Notification certificate and upload the certificate to the MBS server. Note that iOS simulators cannot receive Apple push notifications.

### Create and Upload a Push Notification Certificate

To create an Apple Push Notification certificate, you need to first create an Explicit App ID. The App ID identifies where to send the push notification, which is tied to the certificate when you create it. After you create the certificate, export the certificate to PKCS #12 format and upload it to the MBS server. This certificate allows the MBS server to communicate with the Apple Push Notification server.

#### Register an App ID

You first need to register an App ID for your application.

1. Log in to the [Apple Developer Member Center](https://developer.apple.com/membercenter/) as the Team Agent or Admin.

2. Click **Certificates, Identifiers & Profiles**.

3. Click **Identifiers**, then click the add (**+**) button near the top-right corner.

4. Under **App ID Description**, enter a value in the **Name** field.

5. Select the **App ID Prefix** to use. (You cannot use a Wildcard App ID for an application with push notifications.)

6. In the the **App ID Suffix** section, select **Explicit App ID** and enter your application's ID.

    ::: tip ✅
    This is the value of the `<id>` element in your project's **tiapp.xml** file.
    :::

7. Under **App Services**, check the **Push Notifications** checkbox.

8. Click **Continue**, **Submit**, and **Done** to complete the process.

The next step is to generate a certificate that approves your application for the Apple Push Notification service.

#### Generate an Apple Push Notification Certificate

These directions cover how to generate an Apple Push Notification certificate for both testing (Development) and production (Distribution). Only step #4 differs based on which certificate you create.

1. Log in to the [Apple Developer Member Center](https://developer.apple.com/membercenter/) as the Team Agent or Admin.

2. Click **Certificates, Identifiers & Profiles**.

3. Click **Certificates**, then click the add (**+**) button near the top-right corner.

4. For application in development, select **Apple Push Notification service SSL (Sandbox)**. For production applications, select **Apple Push Notification service SSL (Sandbox & Production)**, then click **Continue**.

5. Select the App ID that you created previously from the drop-down list, then click **Continue**.

6. Follow the instructions provided for creating a Certificate Signing Request (CSR). Click **Continue** once you've created the CSR.

7. Locate the CSR you created and click **Generate**. You are returned to the Certificates page with the status listed as Pending. Wait a moment then refresh the page in your browser. If asked to approve the request, click **Approve**.

8. Click **Download** to download the certificate (.cer) file to your computer.

9. Double-click the file to install it into your keychain.

Now that you've created the push notification certificate, you need to export it in a format that you provide API Builder.

#### Export the Certificate

Once you've created the certificate, you need to export it in a format that you can provide to API Builder.

1. Open **Keychain Access** (Applications > Utilities > Keychain Access).

2. Under **Categories** in the the left side navigation, click **My Certificates**.

3. Select the certificate you installed previously and select **File > Export Items...**.

4. Select **Personal Information Exchange (.p12)** from the File Format menu and click **Save**.

5. Enter a password for the certificate, then click **Save**.

Keychain exports your certificate as a PKCS #12 file that you upload to MBS to enable Apple Push Notification for your application.

#### Upload certificate to Dashboard

You use [Dashboard](http://platform.appcelerator.com/) to upload the .p12 certificate file to API Builder and enable notifications within your application.

**To upload the certificate using Dashboard:**

1. Open [Dashboard](https://platform.appcelerator.com/) and select your MBS application from the **Apps** drop-down menu.

2. Select **Push Notifications** on the left-side navigation.

3. Select the **iOS** tab.

4. Click **Choose File**, locate the .p12 file you exported previously, and click **Open**.

5. In the **Certificate Password** field enter the password you selected when you generated the certificate.

    ![iOS_push_configuration_latest](./iOS_push_configuration_latest.png)
6. Click **Save Changes**. If the password you entered was incorrect, an error dialog will alert you.

## Configuring push services for Android devices

To enable push services for your Android application, create a Firebase project, and obtain a send.

### Configuring API Builder application for FCM service

With FCM enabled, you need to update your application's settings page in [Dashboard](https://platform.appcelerator.com/) with the API key and sender ID you generated.

**To configure API Builder for push notifications using Dashboard:**

1. Open [Dashboard](https://dashboard.appcelerator.com/) and select your application from the **Apps** drop-down menu.

2. Click **Push Notifications** on the left-side navigation.

3. Select the **Android** tab.

4. Enter the server key in the **Server Key** field and the sender ID in the **Sender ID** field. To find your Server Key and Sender ID, go to [Firebase](https://firebase.google.com/). From there, click on **Settings** (cog) > **Cloud Messaging**. This page will show your Sender ID (should be the same as your project number) and your Server Key.

    ![Android_cloud_messaging_conf_latest](./Android_cloud_messaging_conf_latest.png)
5. Click **Save Changes**.

**Note**: If you are still seeing the following error message when pushing a notification, uninstall the app and rebuild it:

```
Exception Type: GCM; Error Code: 3006; Error Message: The sender_id contained in the registration_id does not match the sender_id used to register with the GCM servers
```
