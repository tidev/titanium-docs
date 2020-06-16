---
title: Alloy Sync Adapters and Migrations
weight: '20'
---

# Alloy Sync Adapters and Migrations

## Sync Adapters

In Alloy, a sync adapter allows you to store and load your models to a persistent storage device, such as an on-device database or remote server. Alloy relies on the Backbone API to sync model data to persistent storage.

### Backbone Sync

Backbone syncs your models to persistent storage devices based on the implementation of the [Backbone.sync method](http://docs.appcelerator.com/backbone/0.9.2/#Sync). Since Backbone's primary use is for web applications, by default, the Backbone.sync method executes RESTful JSON requests to a URL specified by the Model.urlRoot or Collection.url attribute, when these classes are created.

Models are accessed from persistent storage (or the collection) based on its `id` attribute, which is usually the primary key assigned by the database. This behavior can be overridden by using the [`idAttribute` attribute](http://docs.appcelerator.com/backbone/0.9.2/#Model-idAttribute), which can specify a different model property to access a model. This field needs to contain unique values. The client application can also assign its own ID either when creating a model or in the implementation of the sync method rather than using the primary key returned by a server or database. Backbone also creates its own client ID (or cid) for each model, which assigns a unique identifier to models for the duration of the application. Use the [Model.cid attribute](http://docs.appcelerator.com/backbone/0.9.2/#Model-cid) and [Collection.getByCid](http://docs.appcelerator.com/backbone/0.9.2/#Collection-getByCid) method if you need to access models from a collection before it is saved to persistent storage.

The sync method depends on calls to other Backbone methods as described in the table below.

<table class="confluenceTable"><thead class=" "></thead><tfoot class=" "></tfoot><tbody class=" "><tr><td class="confluenceTd" rowspan="1" colspan="1"><p><strong class=" ">Backbone Method</strong></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><strong class=" ">Sync CRUD Method</strong></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><strong class=" ">Equivalent HTTP Method</strong></p></td><td class="confluenceTd" rowspan="1" colspan="1"><p><strong class=" ">Equivalent SQL Method</strong></p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Collection.fetch</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>read</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>GET</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>SELECT</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Collection.create (id == null)<br>or<br>Collection.create (id != null)</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>create<br>or<br>update</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>POST<br>or<br>PUT</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>INSERT<br>or<br>UPDATE</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Model.fetch</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>read</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>GET</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>SELECT</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Model.save (id == null)<br>or<br>Model.save (id != null)</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>create<br>or<br>update</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>POST<br>or<br>PUT</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>INSERT<br>or<br>UPDATE</p></td></tr><tr><td class="confluenceTd" rowspan="1" colspan="1"><p>Model.destroy</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>delete</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>DELETE</p></td><td class="confluenceTd" rowspan="1" colspan="1"><p>DELETE</p></td></tr></tbody></table>

For example, the code below describes the default sync method behavior with the following Backbone calls:

```javascript
// Since the urlRoot attribute is defined, all HTTP commands are to /library
var Book = Backbone.Model.extend({urlRoot:'/library'})
var book = new Book();

// Performs a POST on /library with the arguments as a payload and the server returns the id as 1
book.save({title:'Bossypants',author:'Tina Fey',checkout:false})

// Performs a GET on /library/1
book.fetch({id:1});

// Performs a PUT on /library/1 with the entire modified object as a payload.
book.save({checkout:true});

// Performs a DELETE on /library/1
book.destroy();
```

In Alloy, you need to use or implement a sync adapter to access persistent storage when using Alloy Model and Collection objects.

### Ready-Made Sync Adapters

Alloy provides a few ready-made sync adapters. In the 'adapter' object, set the 'type' to use one of the following:

* `sql` for the SQLite database on the Android and iOS platform.

* `properties` for storing data locally in the Titanium SDK context.

* `localStorage` for HTML5 localStorage on the Mobile Web platform. Deprecated since Alloy 1.5.0. Use the `properties` adapter instead. You do not need to define the `columns` object in the `config` object. If defined, the object is ignored.

These adapters are part of Alloy and are copied to the `Resources/alloy/sync` folder during compilation. These sync adapters assign the `id` attribute of the models, which means if you assign an ID when creating a model, it is overridden by any sync operations.

#### SQLite Sync Adapter

The `sql` sync adapter has a few extra features compared to the other sync adapters.

##### Fetch method accepts SQL Query

The Backbone.Collection.fetch method supports SQL queries as a parameter. Use `query` as the key in the dictionary object to create a simple query or query with a prepared statement. To use a simple query, set the `query` property to your SQL query. To use a query with a prepared statement, set `query.statement` to your SQL statement template and set `query.params` to the values you want to pass to the statement. For example:

```javascript
var library = Alloy.createCollection('book');
// The table name is the same as the collection_name value from the 'config.adapter' object. This may be different from the model name.
var table = library.config.adapter.collection_name;
// use a simple query
library.fetch({query:'SELECT * from ' + table + ' where author="' + searchAuthor + '"'});
// or a prepared statement
library.fetch({query: { statement: 'SELECT * from ' + table + ' where author = ?', params: [searchAuthor] }});
```

##### Fetch method accepts ID attribute

Since Alloy 1.3.0, to fetch a single model using its ID, pass a dictionary with one key-value pair, where `id` is the key and the model's ID as the value to retrieve that model, to the `fetch` method instead of using a SQL query. For example:

```
myModel.fetch({id: 123});
// is equivalent to
myModel.fetch({query: 'select * from ... where id = ' + 123 });
```

#### Columns accept SQLite keywords

The columns values accept SQLite keywords, such as AUTOINCREMENT and PRIMARY KEY. For example, the Alloy model file below defines the `book_id` to be an auto-incremented, primary key in the `books` table.

**app/models/book.js**

```javascript
exports.definition = {
    config: {
        "columns": {
            "title": "TEXT",
            "author": "TEXT",
            "book_id": "INTEGER PRIMARY KEY AUTOINCREMENT"
        },
        "adapter": {
            "type": "sql",
            "collection_name": "books",
            "idAttribute": "book_id"
        }
    }
}
```

##### Specify columns property as primary ID

Define the `idAttribute` key-value pair in the `config.adapter` object to use a `config.columns` key as the primary ID for the SQLite table, which is used as the model ID for Backbone Model and Collection objects. In the previous example, the `book_id` column is used as the primary key for the table. If this key is not set, Alloy creates the `alloy_id` column in the table and generates a default GUID as the model ID.

##### Specify a migration to use

Define the `migration` key-value pair in the `config.adapter` object to specify the database version to use. The value of this key is the datatime code of the migration file. Alloy upgrades or rolls back the database based on this value. If left undefined, Alloy upgrades the database based on the newest migration file.

##### Specify a database to use

Define the `db_name` key-value pair in the `config.adapter` object to specify the name of the database to use. If left undefined, Alloy uses the default database `_alloy_`.

##### Specify a database file to preload

Define the `db_file` key-value pair in the `config.adapter` object to specify the database file ('myfile.sqlite') to preload. Place this file in the `app/assets` directory of your Alloy project. Alloy creates a database using the name of the database file minus the file extension if one does not exist.

### Custom Sync Adapters

To create a custom sync adapter, create a JavaScript file in either `app/assets/alloy/sync` or `app/lib/alloy/sync`. During compilation, this file is copied to the `Resources/alloy/sync` folder. In the `config` object of the model file, set the `type` in the `adapter` object to the name of the JavaScript file minus the '.js' extension.

The sync adapter exports three functions:

* `module.exports.beforeModelCreate` (optional) - executes code before creating the Backbone.Model class. First passed parameter is the `config` object from the model file. If you add custom properties, such as server settings, to the configuration object, you can process them here. Second passed parameter is the name of the Alloy Model file. Returns a `config` object.

* `module.exports.afterModelCreate` (optional) - execute code after creating the Backbone.Model class. First passed parameter is the newly created Backbone.Model class. Second passed parameter is the name of the Alloy Model file.

* `module.exports.sync` - implement the [Backbone.sync method](http://docs.appcelerator.com/backbone/0.9.2/#Sync).

#### Example

For a sample of an adapter, refer to the [BookClient](https://github.com/appcelerator-developer-relations/BookClient) project. The client project syncs with the [BookService](https://github.com/appcelerator-developer-relations/BookService) project, which is a sample API Builder project that manages a book database with MongoHQ as a backend. The client project contains a sync adapter, located at `app/lib/alloy/sync/book_rest.js`, which uses HTTP requests to interact with the API Builder application.

## Migrations

A migration is a description of incremental changes to a database, which takes your database from version 1 to version X, with a migration file for each step in the evolution of your database schema. This is helpful to keep different versions of a database in sync. For example, when version 7 of your application is deployed, migrations are able to successfully update the database from versions 1 through 6.

In Alloy, migrations are defined by JavaScript files located in the `app/migrations` folder of the project. The file should be named the same as the model JavaScript file prefixed with 'YYYYMMDDHHmmss\_' (datetime code followed by an underscore), for example, `20120610049877_book.js`. Alloy applies the migrations from oldest to newest, according to the datetime code at the beginning of the file name.

The migration file contains two functions that need to be implemented: `migration.up(migrator``)` and `migration.down(migrator)`, where `migrator` is a special migration object that provides references to the database and table as well as some convenient functions for table operations (see table below). The `migration.up` function upgrades the database from the previous version, while the `migration.down` function rolls back the changes to the previous version.

Currently, migrations are only used with the `sql` sync adapter.

| Key | Description |
| --- | --- |
| `db` | Handle to a `Ti.Database` instance to interact with the SQLite database. Use this handle to execute SQL calls using `db.execute`.<br /><br />DO NOT CLOSE THIS HANDLE OR OPEN A SECOND INSTANCE OF THE DATABASE. This will cause fatal application errors. |
| `dbname` | Name of the database. |
| `table` | Name of the table. Same as value of the `config.adapter.collection_name` key of the Alloy Model file. |
| `idAttribute` | Name of the columns attribute to use as the primary key of the database. |
| `createTable` | Function to create a table in the database with the specified schema. Required parameter is the `columns` object from the configuration object of the Alloy Model file. |
| `dropTable` | Function to drop the current table from the database. |
| `insertRow` | Function to insert data into the table. Required parameter is a data object to insert in the table. Useful for preloading data. |
| `deleteRow` | Function to delete data from the table. Required parameter is a data object to remove from the table. Alloy uses an SQLite query based on the specified object to find the data to delete. |

For example, the migration file below is the initial version of the database that preloads some data in the table.

**app/migrations/20120610049877\_book.js**

```javascript
var preload_data = [
  {title: 'To Kill a Mockingbird', author:'Harper Lee'},
  {title: 'The Catcher in the Rye', author:'J. D. Salinger'},
  {title: 'Of Mice and Men', author:'John Steinbeck'},
  {title: 'Lord of the Flies', author:'William Golding'},
  {title: 'The Great Gatsby', author:'F. Scott Fitzgerald'},
  {title: 'Animal Farm', author:'George Orwell'}
];

migration.up = function(migrator) {
    migrator.createTable({
        "columns":
        {
            "book": "TEXT",
            "author": "TEXT"
        }
    });
    for (var i = 0; i < preload_data.length; i++) {
      migrator.insertRow(preload_data[i]);
    }
};

migration.down = function(migrator) {
    migrator.dropTable();
};
```

Suppose later, you want to include some additional information for your books, such as an ISBN. The below migration file upgrades or rolls back the changes. Since SQLite does not support the DROP COLUMN operation, the migration needs to create a temporary table to hold the data, drop the new database, create the old database, then copy the data back to the regressed table. Note that if the Alloy Model file does not specify an `idAttribute` property, Alloy creates the `alloy_id` column. This column needs to be copied over as part of the migration as shown below.

**app/migrations/20130118069778\_book.js**

```javascript
migration.up = function(migrator) {
    migrator.db.execute('ALTER TABLE ' + migrator.table + ' ADD COLUMN isbn INT;');
};

migration.down = function(migrator) {
    var db = migrator.db;
    var table = migrator.table;
    db.execute('CREATE TEMPORARY TABLE book_backup(title,author,alloy_id);')
    db.execute('INSERT INTO book_backup SELECT title,author,alloy_id FROM ' + table + ';');
    migrator.dropTable();
    migrator.createTable({
        columns: {
            title:"TEXT",
            author:"TEXT",
        },
    });
    db.execute('INSERT INTO ' + table + ' SELECT title,author,alloy_id FROM book_backup;');
    db.execute('DROP TABLE book_backup;');
};
```
