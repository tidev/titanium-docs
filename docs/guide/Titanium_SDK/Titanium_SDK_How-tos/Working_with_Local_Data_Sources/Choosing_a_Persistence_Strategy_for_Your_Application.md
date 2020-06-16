---
title: Choosing a Persistence Strategy for Your Application
weight: '10'
---

# Choosing a Persistence Strategy for Your Application

## Objective

Titanium provides various means to save data to the user's mobile device. In this chapter, you will examine those options and select the best technique for a given situation.

## Contents

Even the most rudimentary applications usually have some data storage requirements. As always, Titanium provides access to all the native functionality via its convenient, uniform interface. To use a device's local storage, the following objects are needed:

* `Titanium.App.Properties` is ideal for storing application-related settings

* `Titanium.Database` gives access to local SQLite3 databases

* `Titanium.Filesystem` facilitates file and directory manipulation

Each of these enable data to persist on a device across application restarts, power cycles, re-installation and even migration to a new device.

### Properties

The `Titanium.App.Properties` API provides a lightweight key/value store. Titanium provides methods for reading and writing string, integer, boolean, and array values in properties. Any data that can be JSON serialized can be stored in an application property. Properties are a great place to store small chunks of data, such as configuration data for your app. But if you've got a lot of data to store, or you need to set up relationships between those data points, you'd be better served putting it in a database.

### Database

Both iOS and Android include a SQLite3 database engine. If you're not familiar with SQLite, you might want to take a brief side trip to [http://sqlite.org](http://sqlite.org). In a nutshell, SQLite is a simplified database management system that supports [most of the SQL92 specification](http://sqlite.org/omitted.html), including most of the familiar SQL statements and even transactions.

The database is the appropriate place to store lots of structured data or when you need transactional support. You can define tables and columns, and enforce relationships between tables just as you would with a SQLServer or MySQL database. Data persists in the database until the user uninstalls your app or until you overwrite or remove the data.

### Filesystem

`Titanium.Filesystem` let's you read from and write to files on the user's device. Broadly speaking, your app is restricted to reading and writing its own files and cannot access files created by other apps. On Android devices, your app can save files to internal or external (SD card) storage. Files are a great place to store images or other binary data.

### What kind of data storage should I use?

The decision about which of the three local storage options you choose is usually determined by the following:

1. **Application Properties** - used when one or all of the following is true:

    * the data consists of simple key/value pairs

    * the data is related to the application rather than the user

    * the data does not require other data in order to be meaningful or useful

    * there only needs to be one version of the data stored at any one time

2. **Database** - used this when one or all of the following is true:

    * there are many similar data items

    * items of data relate to each other

    * you require flexibility over how the data will be presented when you retrieve it

    * the data accumulates over time, such as transaction, logging or archiving data

3. **Filesystem** - used when one or all of the following is true:

    * the data is already provided in file format

    * the data is an image file

::: warning ⚠️ Warning
Although the local database has the capability to store images in blob (binary) format, this won't lead to optimal performance from your application. Instead, use `Titanium.Database` to store the image file path and name in the database, and `Titanium.Filesystem` to manage the physical files.
:::

## References and Further Reading

* API docs:

    * [Properties API](http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.App.Properties-module)

    * [Database API](http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Database-module)

    * [Filesystem API](http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Filesystem-module)

* [Persistence demo app](https://github.com/appcelerator-archive/sample-persistence)

* [http://sqlite.org](http://sqlite.org)

## Summary

In this chapter, you examined the local storage options available to your Titanium apps. And we gave you some recommendations of which option to use in various situations. While we didn't dig into the implementation details yet, you got a chance to see when to use each of these persistence options. In the upcoming sections, we'll dig deep into each storage option.
