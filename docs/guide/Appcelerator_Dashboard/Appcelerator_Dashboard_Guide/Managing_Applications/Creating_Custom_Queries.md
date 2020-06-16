---
title: Creating Custom Queries
weight: '80'
---

# Creating Custom Queries

## Introduction

By default, Dashboard provides metric analytics for AMPLIFY Runtime Requests, Average Session Length, Install, Events, Mobile Backend Service Requests, Push Notifications, Sessions, and Unique Devices. The Custom Queries feature enables you to create custom queries based on your application-specific metrics and analytical needs or expand upon the provided default analytics to meet your specific analytics needs.

## Queries Overview

To access the _Queries Overview_ screen, select the **Custom Queries** tab on the Dashboard home page.

![custom_queries_overview](./custom_queries_overview.png)

Note that if you have not created any custom queries, selecting the **Custom Queries** tab will transfer you to the _Queries_ screen. The _Queries_ screen enables creating, previewing, editing, saving, and deleting custom analytics queries. You can also filter custom queries. To access the _Queries_ screen from the _Queries Overview_ screen, click the **\+ Query** button or click on a custom query tile. To navigate from the _Queries_ screen to the _Queries Overview_ screen, select **All Queries** from the Saved Queries drop-down menu.

![custom_queries](./custom_queries.png)

## Creating Queries without filtering

To create a custom query without filtering:

1. Enter a query name in the **Name** field.

2. Select a **Method**. The Method drop-down menu selections are:

    * Count

    * Cardinality

    * Average

    * Sum

    * Min

    * Max

3. Select a **Field**. The Field drop-down menu selections are:

    * Custom - If selected, enter the custom field information.

    * Event

    * Application

    * Platform

    * Platform Version

    * Environment

    * Country

    * Session

    * Session Length

4. Select a **Grouping**. The Grouping drop-down menu selections are:

    * Custom - If selected, enter the custom grouping information.

    * Event

    * Application

    * Platform

    * Platform Version

    * Environment

    * Country

    * Session

    * Session Length - If selected, enter an **Interval**. The entered interval is the range to use when grouping numeric values.

5. (Optional) Select the **Map** checkbox to display the results on a map instead of a chart. Please note this is not possible for averages.

6. Select a **Date Range**. The Date Range drop-down menu selections are:

    * From/To - If selected, enter the From and To dates and times. **Queries with From/To date ranges cannot be saved.**

    * Custom - If selected, select a custom date range.

        * Number of Months

        * Number of Days

        * Number of Hours

        * Number of Minutes

    * 3 Months

    * 30 Days

    * 7 Days

    * 24 Hours

    * 60 Minutes

7. (Optional) Select the **Include current period** checkbox to Include up to the end of the current period for which there will be only partial data.

8. (Optional) Click **Preview** to preview your custom query. The Custom Query section will be updated to display your custom query analytics preview.

9. Click **Save** to save your custom query. Your custom query will be saved, the Saved Queries drop-down menu will be updated to include your saved custom query, the Custom Query section will be updated to display your custom query analytics, and your custom query will be available on the _Queries Overview_ screen.

## Creating Queries with filtering

To create a custom query with filtering:

1. Enter a query name in the **Name** field.

2. Select a **Method**. The Method drop-down menu selections are:

    * Count

    * Cardinality

    * Average

    * Sum

    * Min

    * Max

3. Select a **Field**. The Field drop-down menu selections are:

    * Custom - If selected, enter the custom field information.

    * Event

    * Application

    * Platform

    * Platform Version

    * Environment

    * Country

    * Session

    * Session Length

4. Select a **Grouping**. The Grouping drop-down menu selections are:

    * Custom - If selected, enter the custom grouping information.

    * Event

    * Application

    * Platform

    * Platform Version

    * Environment

    * Country

    * Session

    * Session Length - If selected, enter an **Interval**. The entered interval specifies the range to use when grouping numeric values.

5. (Optional) Select the **Map** checkbox to display the results on a map instead of a chart. Please note this is not possible for averages.

6. Select a **Date Range**. The Date Range drop-down menu selections are:

    * From/To - If selected, enter the From and To dates and times. **Queries with From/To date ranges cannot be saved.**

    * Custom - If selected, select a custom date range.

        * Number of Months

        * Number of Days

        * Number of Hours

        * Number of Minutes

    * 3 Months

    * 30 Days

    * 7 Days

    * 24 Hours

    * 60 Minutes

7. (Optional) Select the **Include current period** checkbox to Include up to the end of the current period for which there will be only partial data.

8. (Optional) Click **Preview** to preview your custom query. The Custom Query section will be updated to display your custom query analytics preview.

9. Select **Basic**.

10. For Match, select either **All** or **Any**.

11. Click the **Plus** icon to add a filter.

12. Select the type of filter. The type of filter drop-down menu selections are:

    * Custom - If selected, enter the custom field information.

    * Event

    * Application

    * Platform

    * Platform Version

    * Environment

    * Country

    * Session

    * Session Length

13. Select a filter operand. The filter operand selections are:

    * Equals

    * Not

    * Starts with

    * Ends with

    * Greater than

    * Greater than or equal to

    * Less than

    * Less than or equal to

14. Complete the operand field or make a selection from the drop-down menu. The field selections are based on the selected filter type. To fetch the available field selections over the selected time range, click the **Magnify** icon. Optionally, you can select **Advanced** and enter the JSON coded filter.

15. Click **Save** to save to save your custom query. Your custom query will be saved, the Saved Queries drop-down menu will be updated to include your saved custom query, the Custom Query section will be updated to display your custom query analytics, and your custom query will be available on the _Queries Overview_ screen.

## Previewing Queries

To preview a custom query and not save it, click **Submit**. The Custom Query section will be updated to display your custom query analytics.

## Saving Queries

To save a custom query, click **Save**. Your custom query will be saved, the Saved Queries drop-down menu will be updated to include your saved custom query, the Custom Query section will be updated to display your custom query analytics, and your custom query will be available on the _Queries Overview_ screen.

## Clearing Queries

To clear the custom query selections and fields, click **Clear**.

## Editing Queries

To edit a custom query:

1. Select the custom query to edit from the Saved Queries drop-down menu or from the _Queries Overview_ screen.

    ![custom_queries_edit](./custom_queries_edit.png)
2. Edit the **Method**, **Field**, **Grouping**, and **Date Range** selections as needed.

3. (Optional) Click **Preview** to preview your custom query changes. The Custom Query section will be updated to display your custom query analytics changes.

4. Edit the filtering as needed.

5. Click **Save** to save your custom query changes. The Custom Query section will be updated to display your custom query analytics changes.

## Deleting Queries

To delete a custom query:

1. Select the custom query to delete from the Saved Queries drop-down menu or from the _Queries Overview_ screen.

2. Click **Delete**.

3. Enter the name of the query to delete in the _Delete Confirmation_ screen.

4. To confirm the query deletion, click **I understand that this is a permanent and irreversible action. Continue**.

## Filtering Queries

You can filter queries using either basic filtering or advanced filtering.

### Basic Filtering

To configure basic filtering:

1. Select **Basic**.

2. For Match, select either **All** or **Any**.

3. Click the **Plus** icon to add a filter.

4. Select the type of filter. The type of filter drop-down menu selections are:

    * Custom - If selected, enter the custom field information.

    * Event

    * Application

    * Platform

    * Platform Version

    * Environment

    * Country

    * Session

    * Session Length

5. Select a filter operand. The filter operand selections are:

    * Equals

    * Not

    * Starts with

    * Ends with

    * Greater than

    * Greater than or equal to

    * Less than

    * Less than or equal to

6. Complete the operand field or make a selection from the drop-down menu. The selections are based on the selected filter type. To fetch the available field selections over the selected time range, click the **Magnify** icon.

7. (Optional) To add additional filters, click the **Plus** icon.

8. To save the configured filtering as part of a custom query, click **Save**.

### Advanced Filtering

To configure advanced filtering:

1. Select **Advanced**.

2. Enter a JSON coded filter in the code field. Note that the code field will be highlighted unless a valid filter code is entered. For example, to create a filter to match application installation in the production environment, enter the following code in the field:

    ```
    {
        "$match": {
            "event": "app.install",
            "distribution.environment": "production"
        }
    }
    ```

3. To save the configured filtering as part of a custom query, click **Save**.

### Delete Filters

To delete a filter, select the **Delete** icon associated with the filter to delete.

## Custom Data Query Example

If a `featureEvent` is specified:

```javascript
function doClick(e) {
  Ti.Analytics.featureEvent('testFeature',
{
    testString: 'hello world'
  }
);
  alert($.label.text);
}
$.index.open();
```

The query to filter on the data `testString` that is attached to the `featureEvent` would be a `data.testString` equal to hello world.
