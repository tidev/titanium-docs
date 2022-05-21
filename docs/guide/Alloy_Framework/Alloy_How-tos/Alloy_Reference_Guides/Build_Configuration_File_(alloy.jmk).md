---
title: Build Configuration File (alloy.jmk)
weight: '20'
---

# Build Configuration File (alloy.jmk)

Alloy provides hooks to customize the compilation process using a special JavaScript file called a JS Makefile (JMK). The file needs to be named `alloy.jmk` and located in the project's `app` directory. This file can be used for common administration tasks or to fine tune the build process. It will be loaded automatically by the Alloy command line during compilation.

Example of a JMK file:

**alloy.jmk**

```javascript
task('pre:compile', function(event, logger) {
    logger.showTimestamp = true;
    logger.info('building project at '+ event.dir.project);
});

task('post:compile', function(event, logger) {
    logger.info('compile finished!');
});
```

To customize the build process, call the task function with the event name and provide a function callback, which will be called when the event is triggered by the compiler.

These are the event names (or compiler tasks):

* `pre:load:` called after the project is cleaned and before copying any assets to the `Resources` folder.

* `pre:compile`: called before the compiler starts.

* `post:compile`: called after the compiler finishes but before it exits.

* `compile:app.js`: called just after the compilation of the main `app.js` file but before the code is written to disk.

The function callback provides two arguments: `event` and `logger`.

The `event` object provides a set of objects and values which may be useful for building tasks:

| Object/Value | Description |
| --- | --- |
| adapters  <br />(Array) | List of adapters. |
| alloyConfig  <br />(Object) | Contains Alloy compiler configuration information.<br /><br />* **platform** : either `android` or `ios`.<br />    <br />* **file**: file to target for selective compilation.<br />    <br />* **deploytype** : compilation environment type: either development, test or production.<br />    <br />* **beautify** : if set to `true`, the output from UglifyJS will be beautified. |
| autoStyle  <br />(Boolean) | If set to `true`, autostyle is enabled for the entire project. |
| dependencies  <br />(Object) | Value of the `dependencies` key in the `config.json` file. |
| dir  <br />(Object) | Contains directory paths to various resources.<br /><br />* **home** : absolute path to the Alloy project's `app` directory.<br />    <br />* **project** : absolute path to the Alloy project's root directory.<br />    <br />* **resources** : absolute path to the Alloy project's `Resource` directory.<br />    <br />* **resourcesAlloy** : absolute path to the Alloy project's `Resource/alloy` directory.<br />    <br />* **assets** : absolute path to the Alloy project's assets.<br />    <br />* **config** : absolute path to the Alloy project's config.<br />    <br />* **controllers** : absolute path to the Alloy project's controllers.<br />    <br />* **migrations** : absolute path to the Alloy project's migrations.<br />    <br />* **models** : absolute path to the Alloy project's models.<br />    <br />* **styles** : absolute path to the Alloy project's styles.<br />    <br />* **themes** : absolute path to the Alloy project's themes.<br />    <br />* **views** : absolute path to the Alloy project's views.<br />    <br />* **widgets** : absolute path to the Alloy project's widgets.<br />    <br />* **builtins** : absolute path to the Alloy tool builtins.<br />    <br />* **template** : absolute path to the Alloy tool templates. |
| sourcemap  <br />(Boolean) | If `true`, generates the source mapping files for use with the Studio debugger and other functions.  <br />These files maps the generated Titanium files in the `Resources` directory to the ones in the `app` directory. |
| theme  <br />(String) | Name of the theme being used. |
| code  <br />(String) | **Only present for the `compile:app.js` task.** Contains the contents of the `app.js` file. |
| appJSFile  <br />(String) | **Only present for the `compile:app.js` task.** Contains the the absolute path to the `app.js` file. |

The `logger` object provides a reference to the logger, which defines the following methods and properties:

## Properties

**DEBUG**: Number READONLY
Output all log messages.

**INFO**: Number READONLY
Output all log messages except debug messages.

**WARN**: Number READONLY
Output only warning and error log messages.

**ERROR**: Number READONLY
Output only error log messages.

**NONE**: Number READONLY
Disable log messages.

**logLevel**: Number
Sets which log messages to output.

**showTimestamp**: Boolean
If true, outputs timestamp with the log messages.

**stripColors**: Boolean
If true, suppresses color output.

## Methods

**debug (String msg)**
Outputs a debug log message.

Parameters:

* msg : String
    Message to output.

Returns:

* void

**info (String msg)**
Outputs an info log message.

Parameters:

* msg : String
    Message to output.

Returns:

* void

**warn (String msg)**
Outputs a warning log message.

Parameters:

* msg : String
    Message to output.

Returns:

* void

**error (String msg)**
Outputs an error log message.

Parameters:

* msg : String
    Message to output.

Returns:

* void
