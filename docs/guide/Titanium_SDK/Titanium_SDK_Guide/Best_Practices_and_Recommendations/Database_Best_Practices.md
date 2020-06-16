---
title: Database Best Practices
weight: '40'
---

# Database Best Practices

We recommend the following as best practices when working with databases in Titanium:

## Open and close the database and resultset with each operation

In a mobile app, you're dealing with a single-user, memory constrained environment in which connection pooling is not important. The time to open/close connections is less of a hit that consuming memory by keeping connections open.

Furthermore, SQLite enforces sequential write-access to the database (one process at a time). This makes it vital that you close the database connection when you have completed any `INSERT` or `UPDATE` operations. If you don't, you might receive "DatabaseObjectNotClosed" exceptions when your script next attempts to write to it.

```
cityWeatherRS.close(); // close the resultset when you're done reading from it
db.close(); // and close the database connection
```

## Use transactions to speed batch inserts

A (perhaps not so widely known) trick in the database world is to use [transactions](http://www.sqlteam.com/article/introduction-to-transactions) to speed up inserts. Let's say you have a loop that does ten inserts or updates. By wrapping them in a transaction, you create a single, mass operation against the database rather than ten little operations. The single operation can be significantly faster than those individual updates. The downside is that if any of the updates fail, the entire batch is rolled back.

```javascript
// you get a bunch of data, maybe from the network, to save in the db
var playlist = [];
playlist.push({disc:'Leon Live', artist:'Leon Russell', comment:'Gospel, blues and rock rolled into one'});
playlist.push({disc:'Animal Notes', artist:'Crack the Sky', rating:'Obscure but rocking'});
// etc.

var db = Ti.Database.open('myDatabase');
db.execute('BEGIN'); // begin the transaction
for(var i=0, var j=playlist.length; i < j; i++) {
  var item = playlist[i];
  db.execute('INSERT INTO albums (disc, artist, rating) VALUES (?, ?, ?)', item.disc, item.artist, item.comment);
}
db.execute('COMMIT');
db.close();
```

## Use a minimal pre-populated database

Shipping a pre-populated database with your app increases the size of the app's package file (ipa or apk) making for slower downloads from the App Store or Market. It also consumes more storage space on the user's device. Because the `Resources` directory is read-only on the device, the distribution database file cannot be deleted; installing the database copies it to the `ApplicationDataDirectory` folder, resulting in two copies of this file on the user's device.

Additionally, older versions of Android limited resource file sizes that require workarounds for large database files. Essentially, all your Android assets are packed into the APK file. Those assets are also compressed (except for a small list of graphics or other files known to not compress significantly). In Android 2.2 and earlier, the installer could not uncompress assets that were over 1 MB. So, if you had a 2 MB database file, your app would not be installable on older Android devices. Workarounds sometimes recommend naming your database with an extension like .mp3 that will flag the `aapt` packaging tool to not compress the file.

Rather than shipping a large pre-populated database, you can ship a "skeleton" database file instead. This would be a database with the minimum amount of data required for the application to run. Then, on first boot, ask the user's authorization to download a replacement from a remote source, using something like the following method:

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
    Ti.UI.createAlertDialog({title:'Info', message:'Database installed', buttonNames: ['OK']}).show();
  };
  c.onerror = function(e){
    Ti.UI.createAlertDialog({title:'Error', message:'Error: ' + e.error, buttonNames: ['OK']}).show();
  };
  c.open('GET',"http://example.com/getNewDatabaseData);
  c.send();
});
```

## Store a version number to ease database updates

By storing a version number within your database, you can detect which version is installed and take action as needed. For example, your app might determine that version 1.0 of your database is installed, then create new tables or alter existing tables. However, if you don't have a version identifier in your database, you'll be left guessing...is the user really running the old version or did a previous update fail? Are they downloading a new app version or upgrading an existing version? Whatever the scenario, we recommend you include a "version" table in your database in which you store a database version number.

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

## References and further information

* [SQLite Optimization FAQ](http://www.whoishostingthis.com/compare/sqlite/optimize/)
