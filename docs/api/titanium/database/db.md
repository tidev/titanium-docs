---
title: Titanium.Database.DB
properties:
  - name: file
    type: Titanium.Filesystem.File
    summary: >
      A <code>File</code> object representing the file where this database is
      stored. Must only be used for<br>

      setting file properties.<br>
    platforms:
      - android
      - iphone
      - ipad
      - macos
    since:
      android: 5.4.0
      iphone: 2.0.0
      ipad: 2.0.0
  - name: lastInsertRowId
    type: Number
    summary: The identifier of the last populated row.
  - name: name
    type: String
    summary: The name of the database.
  - name: rowsAffected
    type: Number
    summary: The number of rows affected by the last query.
methods:
  - name: close
    summary: >
      Closes the database and releases resources from memory. Once closed, this
      instance is no<br>

      longer valid and should not be used. On iOS, also closes all <a
      href="/api/titanium/database/result-set">Titanium.Database.ResultSet</a><br>

      instances that exist.<br>
  - name: execute
    summary: >
      Executes an SQL statement against the database and returns a
      <code>ResultSet</code>.<br>
    parameters:
      - name: sql
        type: String
        summary: SQL to execute. May include placeholders for parameter substitution.
      - name: vararg
        type: String, Array<String>, Object, Array<Object>
        summary: >
          Either a variable ordered list of zero or more values, or an array of
          values,<br>

          to be substituted with the respective <code>?</code> placeholder of
          the query.<br>
        optional: true
    returns:
      type: Titanium.Database.ResultSet
  - name: executeAsync
    summary: >
      Asynchronously executes an SQL statement against the database and fires a
      callback with a possible <code>Error</code> argument, and a second
      argument holding a possible <code>ResultSet</code>.<br>
    parameters:
      - name: query
        type: String
        summary: >-
          SQL query to execute. May include placeholders for parameter
          substitution.
      - name: vararg
        type: String, Array<String>, Object, Array<Object>
        summary: >
          Either a variable ordered list of zero or more values, or an array of
          values,<br>

          to be substituted with the respective <code>?</code> placeholder of
          the query.<br>
        optional: true
      - name: callback
        type: Callback<Object, Titanium.Database.ResultSet>
        summary: Callback when query execution has completed.
        optional: true
    returns:
      type: Promise<Titanium.Database.ResultSet>
      summary: >-
        On SDK 10+, this method will return a `Promise` whose resolved value is
        equivalent to that passed to the optional callback argument.
  - name: executeAll
    summary: >
      Synchronously executes an array of SQL statements against the database and
      returns an array of <code>ResultSet</code>.<br>

      On failure, this will throw an <a href="BatchQueryError">Error</a> that
      reports the failed index and partial results<br>
    parameters:
      - name: queries
        type: Array<String>
        summary: Array of SQL queries to execute.
    returns:
      type: Array<Titanium.Database.ResultSet>
  - name: executeAllAsync
    summary: >
      Asynchronously executes an array of SQL statements against the database
      and fires a callback with a possible Error, and an array of
      <code>ResultSet</code>.<br>

      On failure, this will call the callback with an <a
      href="PossibleBatchQueryError">Error</a> that reports the failed
      <code>index</code>, and a second argument with the partial
      <code>results</code>.<br>
    parameters:
      - name: queries
        type: Array<String>
        summary: Array of SQL queries to execute.
      - name: callback
        type: Callback<PossibleBatchQueryError, Array<Titanium.Database.ResultSet>>
        summary: Callback when query execution has completed.
        optional: true
    returns:
      type: Promise<Array<Titanium.Database.ResultSet>>
      summary: >
        On SDK 10+, this method will return a `Promise` whose resolved value is
        equivalent to that passed to the optional callback argument.

        If the `Promise` is rejected, the `Error` will have custom properties
        indicating the `index` of the failed query, and the partial `results` up
        to that failure. See <PossibleBatchQueryError>.
  - name: remove
    summary: >
      Removes the database files for this instance from disk. WARNING: this is a
      destructive<br>

      operation and cannot be reversed. All data in the database will be lost;
      use with caution.<br>
---

# Titanium.Database.DB

The `Database` instance returned by [Titanium.Database.open](/api/titanium/database) or [Titanium.Database.install](/api/titanium/database).

**Extends:** `Titanium.Proxy` · **Since:** 0.1 · **Platforms:** android, iphone, ipad, macos

<ApiProperties />

<ApiMethods />

