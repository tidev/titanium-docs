---
title: Using SQL Explorer
weight: '70'
---

# Using SQL Explorer

## Introduction

This Help topic will teach you how to use SQL Explorer with RadRails after you have connected to your database. This is the final step in configuring SQL Explorer to work with RadRails. You will need to [connect to your database](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/3rd_Party_DB_Plugins/Connecting_to_the_database_application/) before following the instructions below.

## Instructions

This section explains how to do some of the most common tasks that you will perform in SQL Explorer.

### Creating a new database

To create a new database in SQL Explorer, paste the SQL below into the SQL editor and click the **Execute** button:

```
CREATE DATABASE cookbook;
```

### Creating a new table

To create a new database table in SQL Explorer, paste the following SQL into your SQL Editor and click the **Execute** button:

```
CREATE TABLE `recipes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `instructions` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

### Inserting data into a table

To insert data into a database table in SQL Explorer, paste the following SQL code into your SQL Editor and click the **Execute** button:

```
INSERT INTO `recipes`
  (title, instructions)
VALUES
  ('test', 'this is a test record');
```

### Querying a table

To query a database table, paste the following SQL code into your SQL Editor and click the **Execute** button:

```
SELECT *
  FROM `recipes`;
```

Additionally, you can use a generated SELECT statement to query a table. To generate a SELECT statement:

1. In the Database Structure View, navigate to the table that you want to query.

2. Right-click the table that you want to query, and select **Generate Select Statement** from the context menu.

SQL Explorer generates the SELECT statement for you.

### Additional resources

The following list includes additional links for SQL Explorer documentation:

::: tip
\***SQL Explorer web site and documentation** - [http://eclipsesql.sourceforge.net/](http://eclipsesql.sourceforge.net/)
\***MySQL 5.1 Reference** - [http://dev.mysql.com/doc/refman/5.1/en/index.html](http://dev.mysql.com/doc/refman/5.1/en/index.html)
\***Configuring SQLExplorer Access** - [http://www.onjava.com/pub/a/onjava/2005/05/11/sqlexplorer.html?page=2](http://www.onjava.com/pub/a/onjava/2005/05/11/sqlexplorer.html?page=2)
:::

## Related Topics

* [Configuring the Eclipse SQL Explorer plug-in](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/3rd_Party_DB_Plugins/Configuring_the_Eclipse_SQL_Explorer_plug-in/)

* [Installing the SQL Explorer plug-in](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/3rd_Party_DB_Plugins/Installing_the_SQL_Explorer_plug-in/)

* [Deploying ConnectorJ](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/3rd_Party_DB_Plugins/Deploying_ConnectorJ/)

* [Creating a new driver in Eclipse](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/3rd_Party_DB_Plugins/Creating_a_new_driver_in_Eclipse/)

* [Creating a new connection in SQL Explorer](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/3rd_Party_DB_Plugins/Creating_a_new_connection_in_SQL_Explorer/)

* [Connecting to the database application](/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/3rd_Party_DB_Plugins/Connecting_to_the_database_application/)
