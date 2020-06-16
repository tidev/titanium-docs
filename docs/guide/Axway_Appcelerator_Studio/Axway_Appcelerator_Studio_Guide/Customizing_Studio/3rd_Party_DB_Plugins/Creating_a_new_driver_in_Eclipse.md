---
title: Creating a new driver in Eclipse
weight: '40'
---

# Creating a new driver in Eclipse

## Introduction

This Help topic will teach you how to create a new driver in Eclipse for SQL Explorer and RadRails. This is the second step in configuring SQL Explorer to work with RadRails. You will need to [deploy ConnectorJ](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/3rd_Party_DB_Plugins/Deploying_ConnectorJ/) before following the instructions below.

## Instructions

To create a new driver in Eclipse using the ConnectorJ drivers:

1. In Eclipse, switch to the SQL Explorer perspective.

2. In the Connections View, click the **Create New Connection Profile** button to open a **Create New Connection Profile** window.

3. On the **Create New Connection Profile** window, click the **Add/Edit Drivers** button to open the **Preferences (Filtered)** window. In the **Preferences (Filtered)** window, click the **Add** button to open a **Create New Driver** window.

4. On the **Create New Driver** window, specify the information for your new driver:

    1. In the **Name** field, type **MySQL Connector/J Driver** for the name of your driver.

    2. In the **Example URL** field, type an example URL for your driver if you have one. (e.g. "jdbc:mysql://localhost:3306/").

    3. Click the **Extra Class Path** tab, and click the **New** button to add the classpath for ConnectorJ.

    4. Browse to the location for your **mysql-connector-java-5.1.7-bin.jar** file that you unzipped as part of the [Deploying ConnectorJ](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/3rd_Party_DB_Plugins/Deploying_ConnectorJ/) Help topic.

    5. In the **Driver Class Name** field, type **com.mysql.jdbc.Driver** for your driver.
        The **Create New Driver** window should look similar to the image below.

        ![CreateNewDriver](./CreateNewDriver.png)
    6. Click the **OK** button to create the driver.

SQL Explorer creates the new driver for you in Eclipse.

This will open a **Create New Connection Profile** wizard. For the next step in [Configuring the Eclipse SQL Explorer plug-in](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/3rd_Party_DB_Plugins/Configuring_the_Eclipse_SQL_Explorer_plug-in/), see [Creating a new connection in SQL Explorer](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/3rd_Party_DB_Plugins/Creating_a_new_connection_in_SQL_Explorer/).

## Related Topics

* [Configuring the Eclipse SQL Explorer plug-in](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/3rd_Party_DB_Plugins/Configuring_the_Eclipse_SQL_Explorer_plug-in/)

* [Installing the SQL Explorer plug-in](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/3rd_Party_DB_Plugins/Installing_the_SQL_Explorer_plug-in/)

* [Deploying ConnectorJ](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/3rd_Party_DB_Plugins/Deploying_ConnectorJ/)

* [Creating a new connection in SQL Explorer](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/3rd_Party_DB_Plugins/Creating_a_new_connection_in_SQL_Explorer/)

* [Connecting to the database application](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/3rd_Party_DB_Plugins/Connecting_to_the_database_application/)

* [Using SQL Explorer](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/3rd_Party_DB_Plugins/Using_SQL_Explorer/)
