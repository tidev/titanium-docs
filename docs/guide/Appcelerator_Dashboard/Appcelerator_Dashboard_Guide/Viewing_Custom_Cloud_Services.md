---
title: Viewing Custom Cloud Services
weight: '70'
---

# Viewing Custom Cloud Services

If you created an API Builder application and associated it with your organization, or the client application makes requests to an API Builder application using the Titanium HTTP client, you can view information about the API Builder application in Dashboard. To associate an API Builder application with a client application built with Java or Objective-C, you need to add a `x-native-id` header to the HTTP request.

## API Builder API calls metric details screen

To view aggregate data about all your organization's API Builder applications, from the _Overview_ view, select **Cloud API Calls (Custom)** from the **Metrics** menu.

The Cloud API Calls (Custom) metric details page opens. This page displays data about all of your organization's API Builder applications, such as total API calls to the application, CPU usage, memory usage and a number of Titanium client applications making calls to the API Builder application.

![NodeACSAPICall](./NodeACSAPICall.png)

Click on a Service Name to view more details about the API Builder application.

## API Builder application details screen

When you select an API Builder application in either the client application's Cloud Custom Service tab or Cloud API Calls (Custom) metric details page, its details are displayed on a new page. From the details screen, you can view basic information about the application and a log of API calls made to the application.

### Overview

Click on the **Overview** button to view basic information about the application. This page displays:

* The endpoint URL to access the application

* Creation and last published date of the application

* Total API calls made to the application

* Number of cloud containers used by the application

* Overall CPU and memory usage and also broken down by cloud containers

If you are an organization administrator, you can also see a list of the connected client applications using the API Builder application. Click on the application name to open the application's Cloud Custom Services tab.

![NodeACSOverviewTab](./NodeACSOverviewTab.png)

### Logs

Click the Logs button to display a list of API calls made to the application. Each entry in the log lists the URL path, response time, remote IP that made the call, the cloud container that handled the call, and the date and time of the request.

![NodeACSLogsTab](./NodeACSLogsTab.png)

## Viewing API Builder applications used by a client application

From the Application Details screen, you can view the API Builder applications the client application is using. To view the list:

1. Select the application from the **Apps** tab.

2. Click the **Cloud** tab.

3. Click the **Custom Services** sub-tab.

Click on a Service Name to view more details about the API Builder application.
