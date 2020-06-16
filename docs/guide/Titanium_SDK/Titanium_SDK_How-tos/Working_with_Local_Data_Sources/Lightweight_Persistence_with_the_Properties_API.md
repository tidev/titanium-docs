---
title: Lightweight Persistence with the Properties API
weight: '20'
---

# Lightweight Persistence with the Properties API

## Objective

In this chapter, we'll dig deep into the `Ti.App.Properties` API. You'll learn how to store both simple and complex data in app properties and retrieve that data later.

## Contents

Both iOS and Android store app properties in special files on the filesystem. Natively, iOS properties are known as `NSUserDefaults`, which are stored in `.plist` files in the application's library directory. Android stores them in standard xml text files at `/data/data/com.domainname.appname/shared_prefs/titanium.xml`. Titanium provides a uniform means to set and get app properties via the `Titanium.App.Properties` API.

::: warning ⚠️ Warning
There isn't a specific limit on the amount of data you can store in properties. However, an application's property data is loaded into memory as the application launches, and exists there until it closes. This allows very rapid access to it, but at the cost of the increased baseline memory used by the application.
:::

### Reading and Writing Properties

`Titanium.App.Properties` has six sets of get/set methods for handling six different data types:

* **getBool() / setBool()**: for booleans (true, false)

* **getDouble() / setDouble()**: for double-precision floating point numbers

* **getInt() / setInt()**: for integers

* **getList() / setList()**: for arrays

* **getString() / setString()**: for strings

The _get_ methods accept a property name and its default value. Thus, if a property has never been set before, the default value will be returned. Each _set_ method requires a property name and property value pair. All of these methods are demonstrated below:

```javascript
var window = Titanium.UI.createWindow({
  backgroundColor: 'white'
});
var myArray = [
  { name: 'Name 1', address: '1 Main St' },
  { name: 'Name 2', address: '2 Main St'},
  { name: 'Name 3', address: '3 Main St'},
  { name: 'Name 4', address: '4 Main St' }
];
Ti.App.Properties.setString('myString','This is a string');
Ti.App.Properties.setInt('myInt',10);
Ti.App.Properties.setBool('myBool',true);
Ti.App.Properties.setDouble('myDouble',10.6);
Ti.App.Properties.setList('myList',myArray);
// **********************************************
// Notice the use of the second argument of the get* methods below
// that would be returned if no property exists with that name
// **********************************************
Ti.API.info('String: ' + Ti.App.Properties.getString('myString', 'This is a string default'));
Ti.API.info('Integer: ' + Ti.App.Properties.getInt('myInt', 20));
Ti.API.info('Boolean: ' + Ti.App.Properties.getBool('myBool', false));
Ti.API.info('Double: ' + Ti.App.Properties.getDouble('myDouble', 20.6));
Ti.API.info('List: ' + Ti.App.Properties.getList('myList'));
window.open();
```

This code outputs the following results:

```
String: This is a string
Integer: 10
Boolean: true
Double: 10.600000381469727
List:
  {  'address' :  '1 Main St' 'name' :  'Name 1' },
  {  'address' :  '2 Main St' 'name' :  'Name 2' },
  {  'address' :  '3 Main St' 'name' :  'Name 3' },
  {  'address' :  '4 Main St' 'name' :  'Name 4' }
```

### Storing JS objects as JSON in properties

If you have a complex Javascript object, you can convert it to a [JSON](http://en.wikipedia.org/wiki/JSON) string using `JSON.stringify()` provided by [Titanium.JSON](http://developer.appcelerator.com/apidoc/desktop/latest/Titanium.JSON), which will allow you to store it in the database using the [Titanium.App.Properties.setString()](http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.App.Properties.setString-method.html) method.

```javascript
var window = Titanium.UI.createWindow({
  backgroundColor: 'white'
});
var weatherData = { "reports" : [ { "city": "Mountain View", "condition": "Cloudy", "icon": "http://www.worldweather.org/img_cartoon/pic23.gif" }, { "city": "Washington, DC", "condition": "Mostly Cloudy", "icon": "http://www.worldweather.org/img_cartoon/pic20.gif" }, { "city": "Brasilia", "condition": "Thunderstorm", "icon": "http://www.worldweather.org/img_cartoon/pic02.gif" } ] };
Ti.App.Properties.setString('myJSON', JSON.stringify(weatherData));
var retrievedJSON=Ti.App.Properties.getString('myJSON', 'myJSON not found');
Ti.API.info("The myJSON property contains: " + retrievedJSON);
window.open();
```

This will output the following to the log:

```
The myJSON property contains: {"reports":[{"city":"Mountain View","condition":"Cloudy","icon":"http://www.worldweather.org/img_cartoon/pic23.gif"},{"city": "Washington, DC","condition": "Mostly Cloudy","icon": "http://www.worldweather.org/img_cartoon/pic20.gif"},{"city": "Brasilia","condition": "Thunderstorm","icon": "http://www.worldweather.org/img_cartoon/pic02.gif"}]}
```

This stored JSON string can later be converted back to a Javascript object using `JSON.parse()`:

```javascript
var myObject = JSON.parse(Ti.App.Properties.getString('myJSON'));
```

### Hands-on Practice

#### Goal

In this activity, you will write an app that prompts the user to select temperature units in either Celsius or Fahrenheit and then save that preference in an application property. When the app is loaded, the property should be read and used to update the UI accordingly. When complete, your app should look like the following:

#### Steps

1. Create a new Titanium Mobile project named `localdata` with an app ID of `com.appcelerator.localdata`

2. In app.js, follow our recommended coding best-practices to create a two-tabbed application with tabs titled Current Conditions and Units. You can omit the tab icons.

3. Define and assign a window to the Current Conditions tab, but you can leave that window empty. We'll use it in the 5.3 lab that follows.

4. Define and assign a window to the Units tab with the following characteristics:

    * Define and add a label with these properties:

        ```
        color: 'black',
        text: 'Fahrenheit',
        font: { fontSize: 22, fontWeight: 'bold' },
        left: 10,
        top: 5,
        height: 25
        ```

    * Define and add a "sub" label with these properties:

        ```
        color: 'black',
        text: 'Output will be shown in Celsius',
        font: { fontSize: 18 },
        left: 10,
        top: 40,
        height: 20
        ```

    * Define and add a switch positioned at `right: 10`, `top: 5` with an `auto` width. Its value should be a zero or one depending on the value of the `units` app property. If that property equals `c`, set the switch value to `0`, otherwise set it to `1`.

5. Add an event handler to the switch: if the switch value is `1`, update the sub-label text to read 'Output will be shown in Fahrenheit' and set the `units` app property equal to `f`. If the value of the switch is `0`, update the sub-label text to read 'Output will be shown in Celsius' and set the `units` app property equal to `c`.

6. Build your app for the simulator/emulator. The output should match the preceding picture. When you change the switch, the label should update. Close the app. When you reopen it, your preference should be saved and reloaded.

### References and Further Reading

* [API Docs: Properties](http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.App.Properties-module)

* [Finished code](http://assets.appcelerator.com.s3.amazonaws.com/app_u/ebook/5.2_localdata.zip)

## Summary

In this chapter, we dug into the `Ti.App.Properties` API. You learned how to store both simple and complex data in app properties and retrieve that data later.
