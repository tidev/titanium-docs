# Titanium.Database.ResultSet

<TypeHeader/>

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

## Examples

### Using ResultSet

The following code will create a database and execute SQL statements that will create a 
table, insert data into it, query the table and iterate through the returned
`ResultSet`.

``` js
var db = Ti.Database.open('mydb1Installed');
db.execute('CREATE TABLE IF NOT EXISTS people (name TEXT, phone_number TEXT, city TEXT)');
db.execute('DELETE FROM people');

var thisName = 'Arthur';
var thisPhoneNo = '1-617-000-0000';
var thisCity = 'Mountain View';
db.execute('INSERT INTO people (name, phone_number, city) VALUES (?, ?, ?)', thisName, thisPhoneNo, thisCity);

var personArray = ['Paul','020 7000 0000', 'London'];
db.execute('INSERT INTO people (name, phone_number, city) VALUES (?, ?, ?)', personArray);

var rows = db.execute('SELECT rowid,name,phone_number,city FROM people');
Ti.API.info('Row count: ' + rows.rowCount);

var fieldCount = rows.fieldCount;
Ti.API.info('Field count: ' + fieldCount);

while (rows.isValidRow()){
  Ti.API.info('Person ---> ROWID: ' + rows.fieldByName('rowid') + ', name:' + rows.field(1) + ', phone_number: ' + rows.fieldByName('phone_number') + ', city: ' + rows.field(3));
  rows.next();
}
rows.close();
db.close();
```

Note that the above `SELECT` query contains the [rowid](http://www.sqlite.org/lang_createtable.html#rowid)
field, which contains an SQLite-specific unique identifier for each row.

<ApiDocs/>
