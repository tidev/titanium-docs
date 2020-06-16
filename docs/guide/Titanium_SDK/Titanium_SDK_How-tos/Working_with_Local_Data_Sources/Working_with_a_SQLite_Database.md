---
title: Working with a SQLite Database
weight: '30'
---

# Working with a SQLite Database

## Introduction

Android, iOS and Windows support [SQLite3](https://sqlite.org), the SQL-based relational database management system (RDMS), for local data storage. There are a few things to note when you first work with SQLite, that may influence the way you develop with it:

* SQLite stores data in a simple text file. There is no granular security or user privileges for data therefore anyone with filesystem access to it may read its contents.

* There are only five underlying data types; NULL, INTEGER, REAL, TEXT and BLOB. For more detail see [Datatypes In SQLite Version 3](http://www.sqlite.org/datatype3.html).

* Binary objects (BLOBs) are stored as text representations, thus access to BLOBs is not optimal. It is recommend to store BLOBs on the filesystem and store the filesystem path in the database.

* SQLite supports concurrent read access, but enforces sequential write access. This is because a filesystem lock is placed on the file during write operations. This is an important point to bear in mind with multi-threaded applications.

* Referential integrity is not enabled by default. See [SQLite Foreign Key Support](http://www.sqlite.org/foreignkeys.html) for more information.

* RIGHT and FULL OUTER JOINs are not supported.

* There is limited ALTER TABLE support; columns may not be modified or deleted.

Titanium provides access to SQLite via the following classes:

| Class | Description |
| --- | --- |
| [Titanium.Database](#!/api/Titanium.Database) | Root module for working with databases |
| [Titanium.Database.DB](#!/api/Titanium.Database.DB) | Database handle |
| [Titanium.Database.ResultSet](#!/api/Titanium.Database.ResultSet) | Contains data returned by SQL queries |

## Creating and installing databases

Initializing a database can be done through the following methods:

* Create an empty database and define its structure and contents via SQL statements embedded within your app logic.

* Install a predefined database (with or without data) that is shipped with your app.

The choice of which method to use depends on the complexity of the database structure and whether the initialized database contains static or dynamic data. See _Best Practices_ below for further discussion.

### Opening a database

To open (or create and open) a database, use the `Titanium.Database.open()` method. If the database you specify to open doesn't exist, Titanium will create it for you. Whether the database exists or Titanium creates it for you, this call will return a database connection handle that you'll use in subsequent database operations.

```javascript
var db = Ti.Database.open('weatherDB');
```

There are a few platform specifics:

* On iOS, the database file that's created is automatically assigned the .sql extension, while on Android no extension is added.

* By default on iOS, database files will be included in iCloud backups (iOS 5.0.1+). See below for more info.

* On Android, the database is created on the internal storage (you could move it, or use the install procedure to put it on external storage). The standard location on internal storage is _/data/data/com.example.yourappid/databases/dbname_

### Controlling backups to iCloud (iOS only)

By default, database files will be included in iCloud backups (iOS 5.0.1+). Unless you are unable to recover or regenerate the data, it is recommended to remove database files from backups. Apps may be rejected by Apple for backing up unnecessary or inappropriate files. You can mark files and databases so that they're not backed up:

```javascript
var db = Ti.Database.open('TiBountyHunter');
db.file.setRemoteBackup(false);
```

This value should only need to be set once by your app, but setting it multiple times will not cause problems. For files distributed with your app, this will need to be set on app startup. This flag will only affect iOS versions 5.0.1 and later, but is safe to set on earlier versions. Note that setting this property to `false` will also prevent the file identified by this object from being backed up to iTunes.

For more information, see:

* [`Titanium.Database.DB.file` property](#!/api/Titanium.Database.DB-property-file)

* [`Titanium.FileSystem.File.remoteBackup` property](#!/api/Titanium.Filesystem.File-property-remoteBackup)

### Creating database tables

Titanium does not include abstraction an library for working with SQLite databases; working with databases requires standard SQL statements. (Don't know SQL? There are lots of tutorials available, such as this one, this one, or this Google search resultset.) Use the `CREATE TABLE IF NOT EXISTS` statement to safely create tables – if they already exist, the statement will be ignored.

```javascript
//bootstrap the database
var db = Ti.Database.open('TiBountyHunter');
db.execute('CREATE TABLE IF NOT EXISTS fugitives(id INTEGER PRIMARY KEY, name TEXT, captured INTEGER, url TEXT, capturedLat REAL, capturedLong REAL);');
db.close();
```

You might notice that we closed the database when done. Closing database connections and resultsets is important to do for performance reasons. You're dealing with a single-user, memory constrained environment in which connection pooling is not important. The time to open/close connections is less of a hit that consuming memory by keeping connections open.

### Installing an existing database

If you choose to package a pre-existing database file with your app, it must be installed before use. Use the [`Titanium.Database.install()`](#!/api/Titanium.Database-method-install) method to copy the database file from the Resources directory and open it. This will return a reference to the open database. Note if the database already exists, the copy action will be ignored and the existing database will be opened.

```javascript
var db = Ti.Database.install('/mydata/weatherDB', 'weatherDB');
```

In this example `weatherDB` will be copied to the application's databases directory (see notes above on where that is). We recommend you specify the absolute path to the database file, with / corresponding to your app's Resources directory. If you do not, the source file might not be found. On Android, the system will create an empty database with the given name. But since it contains no tables, your app will crash on your first attempt at access the database.

## Working with database contents

SQLite (and by extension Titanium) supports a fairly complete list of SQL statements. You'll use these to manipulate the data in your database. Typical tasks include inserting new data, retrieving data, updating data, and deleting data.

### Storing data

In order to insert records to a database, you should pass an SQL `INSERT` statement to the `Titanium.Database.DB.execute()` method. While you could use string concatenation to construct the `INSERT` statement, SQLite and Titanium's `execute()` method support the safer technique of using unnamed parameterized queries. I.e, you enter question marks as placemarkers where you would like each variable containing your data to be substituted, as follows:

```
db.execute('INSERT INTO city (name,continent,temp_f,temp_c,condition_id) VALUES (?,?,?,?,?)', importName, importContinent, importTempF, importTempC, dbConditionId);
```

It's commonplace for tables to include an auto-incrementing primary key, representing a unique ID for each row. You would typically use such IDs to access individual rows to update them or delete them. You can obtain the row ID associated with a newly inserted row by examining the `lastInsertRowId` property:

```javascript
db.execute('INSERT INTO city (name,continent,temp_f,temp_c,condition_id) VALUES (?,?,?,?,?)', importName, importContinent, importTempF, importTempC, dbConditionId);
var lastID = db.lastInsertRowId; // presumes `city` has an auto-increment column
```

### Retrieving data

You can retrieve data from the database using a typical SQL `SELECT` query, passed to `execute()` like the examples above. This method returns a [`Titanium.Database.ResultSet`](#!/api/Titanium.Database.ResultSet) object, which you use to access the queried data.

(The `execute()` method always returns a result set object, but it's not all that useful with `CREATE TABLE` and other queries shown previously.)

The result set data is available using the methods that the `ResultSet` object provides. In the following code, a loop is used to iterate through each row, and only ends when `isValidRow()` returns false. The `fieldByName()` method allows you to refer to each field by its database column name, or an alias you assign in the SQL statement. At each iteration of the loop, it is necessary to move the ResultSet row pointer to the next row, using the `next()` method.

```javascript
var cityWeatherRS = db.execute('SELECT id,name,continent FROM city');
while (cityWeatherRS.isValidRow()) {
  var cityId = cityWeatherRS.fieldByName('id');
  var cityName = cityWeatherRS.fieldByName('name');
  var cityContinent = cityWeatherRS.fieldByName('continent');
  Ti.API.info(cityId + ' ' + cityName + ' ' + cityContinent);
  cityWeatherRS.next();
}
cityWeatherRS.close();
```

You may join related tables together, just as you would in standard SQL. The following returns all the `city` records and includes the weather conditions summary for each, if it exists.

```
db.execute('SELECT city.id,name,cond.id,cond.summary,cond.icon FROM city LEFT JOIN condition cond WHERE city.condition_id = cond.id');
```

Of course, you can select subsets of data by providing conditions within your `SELECT` statements. For example, the following returns only those records where the weather summary is "Partly Cloudy":

```javascript
var cityWeatherRS = db.execute('SELECT city.id AS city_id,name,cond.id AS cond_id,cond.summary,cond.icon FROM city LEFT JOIN condition cond WHERE city.condition_id = cond.id WHERE cond.summary=?', "Partly Cloudy");
```

Notice here that the `city.id` and `cond.id` columns have been aliased. This is because the `fieldByName()` method would not be able to distinguish between them if you simply passed their column name, `fieldByName(id)`. Thus, the ResultSet code would look like this:

```javascript
while (cityWeatherRS.isValidRow()) {
  var cityId = cityWeatherRS.fieldByName('city_id');
  var cityName = cityWeatherRS.fieldByName('name');
  var cityConditionId = cityWeatherRS.fieldByName('cond_id');
  var cityConditionSummary = cityWeatherRS.fieldByName('summary');
  var cityConditionIcon = cityWeatherRS.fieldByName('icon');
  Ti.API.info(cityId + ' ' + cityName + ' ' + cityConditionId + ' ' + cityConditionSummary + ' ' + cityConditionIcon);
  cityWeatherRS.next();
}
cityWeatherRS.close();
```

### Updating data

To update a database row you would use the `UPDATE` statement along with parameterized queries as shown above for inserting data. For example:

```
db.execute('UPDATE condition SET icon=? WHERE id=?',importIcon,dbConditionId);
```

### Deleting data

You can delete one or more rows from a table using the `DELETE` statement. Make sure to supply a condition or all rows in the table will be deleted. SQLite also supports the `DROP TABLE` syntax to remove an entire table from the database.

```
db.execute('DELETE FROM city WHERE id=?',cityId);
```

### Truncating (emptying) a table

You can empty a table of all its contents, but SQLite doesn't include the typical TRUNCATE command to do so. You use the `DELETE` command:

```
db.execute('DELETE FROM city'); // would empty the table!
```

## Manipulating the database's structure

SQLite supports various commands for modifying an existing database. These include: DROP, ALTER, and the PRAGMA commands.

### Dropping a table

Dropping a table removes it from the database. You can't recover it or undo your action once it's done. To prevent an error from being thrown if the table is already deleted, you can add the IF EXISTS clause:

```
db.execute('DROP TABLE IF EXISTS tablename');
```

### Altering a table

SQLite supports a limited subset of the ALTER TABLE command. You can add columns or rename a table. But, you cannot remove or rename a column from a table. These are both supported commands:

* ALTER _tablename_ ADD COLUMN _column\_definition_

* ALTER _tablename_ RENAME TO _newname_ – to rename a table

(To be clear, not being able to remove or rename columns is a SQLite limitation, not a Titanium limit.)

### PRAGMA commands

The [PRAGMA commands](http://www.sqlite.org/pragma.html) provide SQLite-specific tools for determining the structure of the database and its tables and to set database operation parameters. Of these, only a few are useful in a mobile OS environment. These include table\_info(), index\_list(), integrity\_check(), and so forth. See the SQLite site for the full list of commands.

## Best practices

We recommend the following as best practices:

* Close database connections and resultsets as soon as you're done with them.

* Batch inserts/updates by wrapping them in a transaction.

* Don't ship a large pre-populated database with your app, download it instead

* Store a version number in your database for easier app updating.

### Close the database and resultset with each operation

In a mobile app, you're dealing with a single-user, memory constrained environment in which connection pooling is not important. The time to open/close connections is less of a hit that consuming memory by keeping connections open.

Furthermore, SQLite enforces sequential write-access to the database (one process at a time). This makes it vital that you close the database connection when you have completed any `INSERT` or `UPDATE` operations. If you don't, you might receive "DatabaseObjectNotClosed" exceptions when your script next attempts to write to it.

```
cityWeatherRS.close(); // close the resultset when you're done reading from it
db.close(); // and close the database connection
```

### Use transactions to speed batch inserts

Let's say you have a loop that does ten inserts or updates. By wrapping them in a transaction, you create a single insert operation against the database rather than ten operations. The single operation can be significantly faster than those individual updates. The downside is that if any of the updates fail, the entire batch is rolled back.

```javascript
// you get a bunch of data, maybe from the network, to save in the db
var playlist = [];
playlist.push({disc:'Leon Live', artist:'Leon Russell', comment:'Gospel, blues and rock rolled into one'});
playlist.push({disc:'Animal Notes', artist:'Crack the Sky', rating:'Obscure but rocking'});
// etc.

var db = Ti.Database.open('myDatabase');
db.execute('BEGIN'); // begin the transaction
for (var i=0, var j=playlist.length; i < j; i++) {
  var item = playlist[i];
  db.execute('INSERT INTO albums (disc, artist, rating) VALUES (?, ?, ?)', item.disc, item.artist, item.comment);
}
db.execute('COMMIT');
db.close();
```

### Use a minimal pre-populated database

Shipping a pre-populated database with your app increases the size of the app's package making for slower downloads from the App Store or Google Play. It also consumes more storage space on the user's device. The `Resources` directory is read-only on the device, therefore the distributed database file cannot be deleted, resulting in two copies of this file on the user's device.

Rather than shipping a large pre-populated database, you can ship a "skeleton" database file instead. This would be a database with the minimum amount of data required for the application to run. Then, on first launch, ask the user's authorization to download a replacement from a remote source, using something like the following method:

```javascript
var updateMyDatabase = function(newdata) {
  // logic here to delete existing content and insert new data
  // maybe you've retrieved a bunch of JSON encoded data that you
  // rehydrate, loop through, and insert into your tables
}
buttonInstallRemote.addEventListener('click', function(){
  var c = Ti.Network.createHTTPClient();
  c.setTimeout(10000);
  c.onload = function(e){
      updateMyDatabase(this.responseData);
      Ti.UI.createAlertDialog({title: 'Info', message: 'Database installed', buttonNames: ['OK']}).show();
    };
  c.onerror = function(e){
      Ti.UI.createAlertDialog({title: 'Error', message: 'Error: ' + e.error, buttonNames: ['OK']}).show();
    };
    c.open('GET',"http://example.com/getNewDatabaseData);
    c.send();
});
```

### Store a version number to ease database updates

By storing a version number within your database, you can detect which version is installed and take action as needed. For example, your app might determine that version 1.0 of your database is installed, then create new tables or alter existing tables. However, if you don't have a version identifier in your database, you'll be left guessing: is the user really running the old version or did a previous update fail? Are they downloading a new app version or upgrading an existing version? Whatever the scenario, we recommend you include a "version" table in your database in which you store a database version number.

If you've failed to do this, you might be able to use a PRAGMA command like the following to detect if a certain column is present and by doing so differentiate between an old and new version of your database.

```javascript
// ADD COLUMN TO A TABLE
var addColumn = function(dbname, tblName, newFieldName, colSpec) {
  var db = Ti.Database.open(dbname);
  var fieldExists = false;
  resultSet = db.execute('PRAGMA TABLE_INFO(' + tblName + ')');
  while (resultSet.isValidRow()) {
    if(resultSet.field(1)==newFieldName) {
      fieldExists = true;
    }
    resultSet.next();
  } // end while
  if(!fieldExists) {
    // field does not exist, so add it
    db.execute('ALTER TABLE ' + tblName + ' ADD COLUMN '+newFieldName + ' ' + colSpec);
  }
  db.close();
};
```
