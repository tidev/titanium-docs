---
title: Managing API Builder Applications
weight: '40'
---

# Managing API Builder Applications

To view the details of an API Builder application, select it from the Dashboard home page **Apps** tab.

## View API Builder Application Information

For API Builder applications, the **Overview** tab displays creation, publication, and build status information as well as the allocated container points and the server count. The number of Allocated Container Points is the total container points allocated to the application. Note this may not accurately reflect the number of container points currently in use by the application. The App Server Settings configuration can be updated by clicking the **Action Menu** icon in the upper-right of the screen and selecting **Edit**. Additionally, the application can be restarted by clicking the **Action Menu** icon and selecting **Restart App**. You can also permanently delete the selected application by clicking the **Action Menu** icon and selecting **Delete**. To confirm the deletion of the selected application, type the name of the application you would like to delete permanently, and select, **I understand that this a permanent and irreversible action. Continue**.

### Restart Application

To restart the application server:

1. Click the **Action Menu** icon.

2. Select **Restart App**.

3. Confirm that you want to restart the application. Select **Continue** on the confirmation screen to restart the application and return to the **Overview** tab. Select **Cancel** on the confirmation screen to return to the **Overview** tab without restarting the application.

### Change App Server Settings

To update the App Server Settings:

1. Click the **Action Menu** icon.

2. Select **Edit**.

3. Update the **Container Type** by selecting a container type from the drop-down menu. The listed container types are:

    * Dev

    * Small

    * Medium

    * Large

    * XLarge

4. Update the **Min Container Count**.

5. Update the **Max Container Count**.

6. Enter any **Environmental Variables**.

7. Click the **Update Config** button to update your App Server Settings and return to the **Overview** tab. Click the **Cancel** button to return to the **Overview** tab without updating your App Service Settings.

### Delete the application

To delete the application:

1. Click the **Action Menu** icon.

2. Select **Delete**.

3. Confirm you want to delete the application. To permanently delete the application, type the name of the application you would like to delete permanently, and select, **I understand that this a permanent and irreversible action. Continue**. Click the **Cancel** button to return the Overview tab without deleting the application.

## View Analytics

The **Analytics** tab displays the Total number of AMPLIFY Runtime requests made during the provided time range either by path or by the path and query string. To toggle on and off the analytics information displayed in the chart, click the on the item in the table legend. To export the metrics data, click the **Action Menu** icon in the upper-right of the screen and select **Chart**. For details on exporting the metrics, refer to the **Export Data** section of [Viewing Analytics](#undefined).

## View Connected Applications

The **Apps** tab displays a list of applications (Titanium or native) that are consuming the selected API Builder app and Mobile Backend Services. Select an application from the list to manage it.

## View Publish History

The **Publish History** tab displays the publication history of your application.

## View and Filter API Logs

The **Logs** tab displays a paginated table of all API access or application calls made by your application to the selected API Builder application service.

The Logs table includes the following fields:

* **URL** – Requested URL.

* **Remote IP** – IP of the client that made the request.

* **Response Time** – Time spent responding to the request.

* **Container** – ID of the application server container used to handle the request.

* **Date/Time** – Date and time of the request in UTC.

To view the access logs, select the **Access** tab. To view the application logs, select the **Application** tab.

## View Documentation

The **Documentation** tab displays a list of links to the API Builder guides and other resources.
