---
breadcrumbLabel: ResultSet
sidebar: auto
---

# Titanium.Database.ResultSet

<ProxySummary/>

## Overview

A result set represents the results returned by a database query.

The [rowCount](Titanium.Database.ResultSet.rowCount) property identifies the number of
rows in the result set. The `ResultSet` object maintains an internal record of the 
current row. As shown in the example, you can use the 
[next](Titanium.Database.ResultSet.next) method to iterate through the rows in the set.

Use the [field](Titanium.Database.ResultSet.field) or
[fieldByName](Titanium.Database.ResultSet.fieldByName) methods to query the fields for
the current row.

On the iOS platform, closing the database also closes the result set, that is,
you can only access the result set if the database is currently open.

<ApiDocs/>
