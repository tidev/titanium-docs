---
title: Dashboard 4.1.0
weight: '70'
---

# Dashboard 4.1.0

Dashboard 4.1.0 is a minor release, which includes behavior changes, new features, improvements and bug fixes.

## Behavior Changes

* In the **Apps** menu, renamed **All Projects** to **All**. Clicking on **All** opens the **All** page displaying all of your projects.

* In the **All** page (formerly the **All Projects** page), changed the **Native** type to **Java** and **Objective-C** types for registered Android and iOS apps, respectively.

* Capped maximum date range to one year in date filters. Previously, there was not a maximum date range.

## New Features

* New Add menu (**+**) in the top navigation bar. Click the add button, then select:

    * **Register App for Services** to register a new Android or iOS application with the Appcelerator Platform

    * **Create ArrowDB Datasource** to create a new standalone ArrowDB datasource

    * **Add Org Member** to add a new member to your organization. Note the **Add Org Member** option will be hidden if you do not have any seats to allocate

* Add ability to create standalone ArrowDB datasources (an ArrowDB datasource that is not tied to a specific client application). To create a new ArrowDB datasource:

    1. Click the Add menu (**+**) in the top navigation bar

    2. Select **Create ArrowDB Datasource**

    3. Enter a name for the ArrowDB datasource

    4. If you have multiple environments, select the environment to enable.

    5. Click **OK**. Dashboard will redirect you to the new ArrowDB datasource.

* Add ability to rename ArrowDB datasources. To rename a datasource:

    1. Select the datasource from the **Apps** menu or the **All** page.

    2. Click the Edit button to the right of the datasource name.

    3. Enter a new name for the datasource.

    4. Click **OK**.

* Add a link to [http://status.appcelerator.com](http://status.appcelerator.com/) to the footer. Click the **Status** link in the footer.

* In the **All** page (formerly the **All Projects** page), added the ability to filter projects by type. Click the **All**, **Apps**, **Arrow** or **ArrowDB** links to view only those types of projects.

## Fixed Issues

* When creating event funnels in the dashboard, some events that can be found under the "Events" tab cannot be found under the "Event Funnels" tab when searching.

* Fixed an issue where favoriting the app did not pin it down to the top of the Apps drop-down list.

* Fixed an issue where the Performance page did not load.
