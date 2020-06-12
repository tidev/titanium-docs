# Modules.EncryptedDatabase

<TypeHeader/>

## Overview

This module exposes the same API as Titanium.Database, but it encrypts all content (even the schema) using
a password you specify.

<p class="note">Note: This feature requires a Pro or Enterprise subscription. More infos <a href="https://www.appcelerator.com/pricing/" target="_blank">here</a>!</p>

### Getting Started

-   View the [Using Titanium Modules](http://docs.appcelerator.com/platform/latest/#!/guide/Using_Titanium_Modules)
    document for instructions on getting started with using this module in your application.

### Accessing the Module

-   Use `require` to access this module from JavaScript:

        var encryptedDatabase = require('appcelerator.encrypteddatabase');

    The `encryptedDatabase` variable is a reference to the Module object.

### Example applications

-   Example applications are located in the `example` folder of the module:

    - `ToDo Alloy` demonstrates how to use this module with Alloy.
    - `JSON1-Extension` demonstrates how to use the SQLite JSON1 extension

## Examples

### Open an encrypted database

var DB = require('appcelerator.encrypteddatabase');
var instance = null;
var dataTofetch = null;
var win = Ti.UI.createWindow({
    backgroundColor: 'white'
});
win.addEventListener('open', function () {
    init();
    setup();
    insert();
    fetch();
    closeDB();
});
var indicator = Ti.UI.createActivityIndicator({
    color: 'green',
    message: 'Upgrading database ...',
    style: Ti.UI.ActivityIndicatorStyle.DARK,
    top: 100,
    height: Ti.UI.SIZE,
    width: Ti.UI.SIZE
});
function init() {
    // iOS: check if cipher upgrade is required
    if (Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad') {
        if (DB.isCipherUpgradeRequired) {
            // check if cipher upgrade required.
            if (DB.isCipherUpgradeRequired('test.db')) {
                Ti.API.info('upgrade of database required');
                indicator.show();
                DB.password = 'secret';
                Ti.API.info('Opening DB ...');
                instance = DB.open('test.db');
                indicator.hide();
                Ti.API.info('database upgrade complete');
                return;
            }
        }
    }
    DB.password = 'secret';
    Ti.API.info('Opening DB ...');
    instance = DB.open('test.db');
}
function setup() {
    instance.execute('CREATE TABLE IF NOT EXISTS testtable(id integer PRIMARY KEY);');
    instance.execute('INSERT OR IGNORE INTO testtable(id) VALUES (1);');
}
function insert() {
    var dataToInsertHandle = instance.execute('SELECT id FROM testtable ORDER BY id DESC LIMIT 1;');
    var dataToInsert = null;
    if(dataToInsertHandle.isValidRow()) {
        dataToInsert = (dataToInsertHandle.fieldByName('id') + 1);
        dataTofetch = dataToInsert;
    }
    instance.execute('INSERT OR IGNORE INTO testtable(id) VALUES (' + dataToInsert + ');');
}
function fetch() {
    var rowValue = null;
    var rowHandle = instance.execute('SELECT * FROM testtable WHERE id=' + dataTofetch + ';');
    if (rowHandle.isValidRow()) {
        rowValue = rowHandle.fieldByName('id');
    }
    alert('Fetched Data: ' + rowValue);
}
function closeDB() {
    instance.close();
}
win.add(indicator);
win.open();

### Use the JSON1-extension to encode/decode JSON-based content

var DB = require('appcelerator.encrypteddatabase');

var win = Ti.UI.createWindow({ backgroundColor: 'white' });
var btn = Ti.UI.createButton({ title: 'Trigger' });

btn.addEventListener('click', accessDatabase);

win.add(btn);
win.open();

function accessDatabase() {
    DB.password = 'secret';

    Ti.API.info('Opening DB ...');
    var instance = DB.open('test.db');

    instance.execute('CREATE TABLE IF NOT EXISTS user(name string, phone string);');
    instance.execute('INSERT into user (name, phone) VALUES("oz", json(\'{"cell":"+491765", "home":"+498973"}\'));');

    var dataToInsertHandle = instance.execute('select user.phone from user where user.name==\'oz\'');
    var result = dataToInsertHandle.isValidRow() ? dataToInsertHandle.fieldByName('phone') : null;

    alert('Fetched data: ' + result);
    Ti.API.info('Closing DB ...');
    instance.close();
}

<ApiDocs/>
