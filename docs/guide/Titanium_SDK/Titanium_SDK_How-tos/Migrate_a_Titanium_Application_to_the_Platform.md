---
title: Migrate a Titanium Application to the Platform
weight: '140'
---

# Migrate a Titanium Application to the Platform

## Titanium Community Analytics, ACS and Push, and Node.ACS Deactivation

On October 3, 2016, Appcelerator shut down its community analytics, ACS & Push, and Node.ACS servers.

For continued cloud services, please login at [https://billing.axway.com/billing](https://billing.axway.com/billing) and adjust to your account as needed.

## Migrate a Titanium Application to the Platform

Before you can use your Titanium apps with the Platform, you'll need to import them. Don't worry, it's quick and painless!

### First, make a backup!

It's always a good idea to make a backup of your project or make sure you have a clean Git project before continuing with changes below. The import process will modify the project's `tiapp.xml` file.

The import process will create a new GUID for your application and attempt to activate Platform services unless it is an existing Platform app. The new GUID is required to send analytic data to the Platform servers. You can use either [Appcelerator Studio](/guide/Axway_Appcelerator_Studio/) or [Appcelerator CLI](/guide/Appcelerator_CLI/) to import your existing Titanium app.

### Replace or keep existing ACS keys

By default, the import process will generate new keys for Arrow DB services in the `tiapp.xml` file. If the application was already integrated with ACS for push notifications and/or data, answer no if asked if you want to replace the keys or change the `acs-api-key-*` keys back when it is done.

### Using Appcelerator Studio

Follow these steps and your app will be imported into the Platform.

1. First, verify that you have **Appcelerator Studio 4.x or later** installed. If you are using Titanium Studio, this procedure will not work.

2. On the main dashboard, click the **Import an existing project** button.

3. You will be presented with an Import dialog. Select **Appcelerator** > **Existing Mobile Project**, then click the **Next** **\>** button.

### Using Appcelerator CLI

Follow these steps and your app will be imported into the Platform.

1. First, verify that you have the [Appcelerator CLI](/guide/Appcelerator_CLI/) installed. If you are using the Titanium CLI, this procedure will not work.

2. Once installed, you can import your existing Titanium app by running the following in your console from the Titanium project directory: `appc new --import`
