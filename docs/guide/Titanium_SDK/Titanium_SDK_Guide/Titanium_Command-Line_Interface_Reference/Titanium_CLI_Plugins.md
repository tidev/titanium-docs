---
title: Titanium CLI Plugins
weight: '20'
---

# Titanium CLI Plugins

## Introduction

This article discusses CLI plugins that can be hooked into the Titanium CLI. With a plugin, you can either create your own CLI command or hook into existing CLI commands using functions or events. Plugins can either be available globally or on a per-project basis. These APIs are supported with the Titanium CLI 3.1.0 and SDK Release 3.1.0 and later unless otherwise specified.

## Plugins

### Structure

Create a folder for your plugin. You can optionally include a version folder directly under the plugin folder. Create a `commands` folder for your CLI plugin commands and a `hooks` folder for your CLI plugin hooks. Both of these folders will contain JavaScript files that implement your commands or hooks, respectively. Currently, the `package.json` file is not used.

The CLI executes each JavaScript file in the `commands` and `hooks` directory. If you have a JavaScript file with helper functions, place that file in a directory that is not named `commands` or `hooks`. For example, in the file structure below, a helper library is placed in the `libs` folder.

```
myplugin
└── 1.0
    ├── commands
    │   └── mycommand.js
    ├── hooks
    │   └── myhook.js
    ├── libs
    │   └── helper.js
    └── package.json
```

### Using a Plugin

Plugins can either be global or required in per project.

**To include a plugin globally**, add the paths to CLI configuration options `paths.commands` and `paths.hooks`. For example, run the following CLI commands to add the command and hook files:

```
ti config -a paths.commands /path/to/myplugin/1.0/commands/
ti config -a paths.hooks /path/to/myplugin/1.0/hooks
```

These command and hooks will be executed each time you run the Titanium CLI.

**To include a plugin for a specific project:**

1. Create a folder called `plugins` in your Titanium project. This will be at the same-level as the `Resources` folder.

2. Copy your plugin to the `plugins` folder.

3. Open your `tiapp.xml` file.

4. Add your plugin information to the plugins section. Specify the plugin's folder name as node text of the plugin element. You can optionally specify the version attribute to use a specific version of the plugin. For example:

    ```xml
    <ti:app xmlns:ti="http://ti.appcelerator.org">
        <plugins>
            <plugin version="1.0">myplugin</plugin>
        </plugins>
    </ti:app>
    ```

This plugin will be executed each time the project is built. Note that only hooks are supported when required in locally.

## Commands

To add a command to the CLI, you need to create a JavaScript file in your plugin's `commands` folder and add the path of the file to the `paths.commands` CLI configuration setting. The name of the JavaScript file is used as the command name. This command file registers with the CLI help command to output your commands options based on the exported properties defined in the command file and the object returned by the command's exported `config` method. The CLI automatically performs validation against the options you specify in the command file.

**myplugin/1.0/commands/mycommand.js**

```javascript
// Indicates supported CLI version for the command
// This command must be ran with CLI 3.2.0 or later
exports.cliVersion = ">=3.2";
// Short help description: ti help
exports.desc = "sample custom CLI command";
// Extended help description: ti mycommand --help
exports.extendedDesc = "Prints a message to the console depending on the options used";

// Used by the CLI to retrieve the help information
// Return a JSON object describing the available options and flags
exports.config = function (logger, config, cli) {
  return {
        // Set to false if the user should be logged in to execute the command
    noAuth: true,
        // Set to false if you want to output the CLI banner
        skipBanner: true,
        // Add your command-line flags
        flags: {
            // Name of flag
            foobar: {
                // Flag shorthand
                abbr: 'F',
                // Help description
                desc: 'Print out, "Hello, World!"'
            }
        },
        // Add your command-line options
        options: {
            // Name of option
            type: {
                // Option shorthand
                abbr: 'T',
                // Default value
                default: 'bar',
                // Help description
                desc: 'Specify the foo type',
                // Possible options values
                // CLI does automatic validation against these values
                values: ['bar', 'baz']
            }
        }
  };
};

// Executed after calling the command but before running it
// Use to validate command-line options and flags
exports.validate = function (logger, config, cli) {
    // Use the cli.argv property to retrieve the passed in options
};

// Executed after calling the command and after the validate method
exports.run = function (logger, config, cli) {
    if (cli.argv.foobar) {
        logger.log("Hello, World!");
    }
    else {
        logger.log("I pity the foo" + cli.argv.type + "!");
    }
};
```

### CLI Command API

All of the following APIs are optional. Prepend the APIs with the `exports` variables to expose them as public.

#### Properties

**cliVersion**: `String`
Specify which version(s) of the CLI the command supports. For example, "3.2.0" specifies the command only supports version 3.2.0, while ">=3.2.0" specifies the command supports version 3.2.0 and greater.

**desc**: `String`
Defines the shorthand help description of the command when executing `titanium --help`.

**extenededDesc**: `String`
Defines the extended help description of the command when using the `--help` option with the command.

**title**: String
Title to display in the help menu. If not specified, the filename is used (without the extension).

#### Functions

##### config

Use the `config` method to define the command-line options and flags for the command. The CLI uses the information returned by this method to output information to the help command and provide basic validation of the command-line options.

**Syntax**

```
config (Object logger, Object config, Object cli): Object
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| logger | `Object` | Handle to the logger object. See [logger](#logger). |
| config | `Object` | CLI configuration options. Same properties as reported by the `titanium config` command. |
| cli | `Object` | Handle to the CLI object. See [cli](#cli). |

**Returns:**

Returns an object specifying the commands configurable options. All properties are optional.

| Name | Type | Description |
| --- | --- | --- |
| `noAuth` | `Boolean` | If set to true, the user does not need to be logged in to use the command. If set to false, the user is required to be logged in to use the command. |
| `skipBanner` | `Boolean` | If set to true, the CLI's banner message is not outputted to the console. If set to false, the CLI's banner message is outputted to the console when the command is executed. |
| `flags` | `Object` | Contains key-value pairs for the command-line flags. The key is the name of the flag, while the value is an object with the following optional key-value pairs:<br /><br />| Name | Type | Description |<br />| --- | --- | --- |<br />| abbr | `String` | Shorthand notation for the flag. Use capital letters. Lowercase letters is the notation used by global CLI flags. If there is a conflict, the flag will be ignored. |<br />| desc | `String` | Help description for the flag. |<br /><br />**Example**:<br /><br />```javascript<br />// Implements: ti mycommand -F<br />var optObj = {<br />    flags: {<br />        myFlag : {<br />            abbr: 'F',<br />            desc: 'This flag does something awesome!'<br />        }<br />    }<br />};<br />``` |
| `options` | `Object` | Contains key-value pairs for the command-line options. The key is the name of the option, while the value is an object with the following optional key-value pairs:<br /><br />| Name | Type | Description |<br />| --- | --- | --- |<br />| abbr | `String` | Shorthand notation for the flag. Use capital letters. Lowercase letters is the notation used by global CLI flags. If there is a conflict, the flag will be ignored. |<br />| default | `String/Number/Boolean` | Default value for the option. |<br />| desc | `String` | Help description for the flag. |<br />| values | `Array<String/Number/Boolean>` | Values that the option will accept. The CLI will automatically validate the option against these values when the command is invoked. |<br /><br />**Example**:<br /><br />```javascript<br />//Implements: ti mycommand -O neko<br />var optObj = {<br />    options: {<br />        myOption : {<br />            abbr: 'O',<br />            default: 'cat',<br />            desc: 'I like chicken! I like tuna!',<br />            values: ['cat', 'chat', 'gato', 'neko']<br />        }<br />    }<br />};<br />``` |

##### validate

Use the `validate` method to execute code after the command is invoked but before actually running the command. This method can be used to provide advance validation of the command-line options.

**Syntax**

```
validate (Object logger, Object config, Object cli): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| logger | `Object` | Handle to the logger object. See [logger](#logger). |
| config | `Object` | CLI configuration options. Same properties as reported by the `titanium config` command. |
| cli | `Object` | Handle to the CLI object. See [cli](#cli). |

##### run

Use the `run` method to execute the command when it is invoked.

**Syntax**

```
run (Object logger, Object config, Object cli): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| logger | `Object` | Handle to the logger object. See [logger](#logger). |
| config | `Object` | CLI configuration options. Same properties as reported by the `titanium config` command. |
| cli | `Object` | Handle to the CLI object. See [cli](#cli). |

## Function and Event Hooks

CLI hooks allow you to execute code when the CLI commands are invoked. Hooks are evaluated for every command regardless if they are used or not. The build, clean and create commands have additional hooks compared to the other CLI commands. Hooks are available as either functions or events.

Functions are designed to modify the build process by modifying the build arguments and results. Functions have a pre and post callbacks, which are executed before and after a execution step. By default, the function is a post callback if you only specify one. The callbacks are passed in a data object and a callback. Both parameters are optional. After you are done executing your function hook and if you passed in the callback, invoke the callback function and pass it an error and data object. If you do not invoke the callback, the CLI process stops and cannot continue to the next step.

E vents are not designed to modify the build process and can only stop the build process using the `process.exit()` method. Event hooks only execute one callback. The callback is passed a builder object and a callback. After you are done executing your event hook, invoke the callback function without any parameters.

To add a hook to the CLI, create a JavaScript file in your plugin's `hooks` folder. To globally add the hook to always be executed, add the path of the file to the `paths.commands` CLI configuration setting. To add it locally to a project, add the plugin containing the hook to your project and add a plugin entry to the project's tiapp.xml file. Note that local hooks cannot call every hook event. The earliest hook a local plugin can call is `cli:post-validate`.

In the hook file, call the `init` method to setup your hook events and functions. Use the CLI object's `on` method to bind hook events and functions to callbacks. This is explained in further detail in the next section.

For multiple executed hooks, set the priority to change when the hook is executed. By default, all hooks have a priority value of 1000. A hook with a lower priority value is executed before one with a higher priority.

### Listening to Hooks

In the `init` method of the hook, use the passed in CLI object to bind your methods to hook events or functions by using the CLI object's `on` method. The `on` method is similar to `addEventListener`. The first parameter is the name of the hook event or function; and the second parameter is either the callback function, or a JavaScript object that contains the callback function(s) and optionally a priority value.

The callback function can either be passed nothing, a data object or a data object and a callback function. If the callback function is passed, you need to invoke it with an `err` and `data` object after executing the hook.

```javascript
exports.cliVersion = ">=3.2";
exports.init = function(logger, config, cli, nodeappc) {

    // Function or event hook
    cli.on(hookName, function (data) {
        /* Do some stuff */
    });

    // Function or event hook
    cli.on(hookName, function (data, callback) {
        /* Do some stuff */
        callback(err, data);
    });

    // Function hook only
    cli.on(hookName, {
        priority: 999,
        pre: function () { ... },
        post: function () { ... }
    });
};
```

### Order of Hooks

When invoking a CLI command, the hooks are fired in the order below if a global plugin is loaded. For local plugins, hooks can only be monitored starting with the `cli:post-validate` event hook.

Certain commands, such as the build, clean or create command, fire additional hook events. For builds, the events vary by platform, and whether you are building a production application or not.

1. **Invoke a CLI command**

2. cli:go (First hook that can be monitored by global plugins)

3. \[command.config\] if invoking the build, clean or create command

4. cli:command-loaded

5. cli:pre-validate

6. **CLI displays its banner message.**

7. cli:post-validate (First hook that can be monitored by local plugins)

8. cli:pre-execute

9. \[help:header\] if the help menu is invoked

10. cli:post-execute or other command hooks if invoking the build, clean or create command (see description below)

**Android build hooks**

The following hooks are fired after the cli:pre-execute hook when building a project for the Android platform:

1. build.pre.construct

2. build.pre.compile

3. build.android.startEmulator

4. build.android.copyResource (all builds) / build.android.compileJsFile (device and distribution builds only)

5. build.android.titaniumprep (device and distribution builds only)

6. build.android.writeAndroidManifest

7. build.android.aapt

8. build.android.javac

9. build.android.proguard (requires special settings)

10. build.android.dexer

11. build.android.jarsigner

12. build.android.zipalign

13. build.post.compile

14. build.finalize

**iOS build hooks**

The following hooks are fired after the cli:pre-execute hook when building a project for the iOS platform:

1. build.pre.construct

2. build.pre.compile

3. build.ios.copyResource (all builds) / build.ios.compileJsFile (device and distribution builds only)

4. build.ios.prerouting (device and distribution builds only)

5. build.ios.titaniumprep (device and distribution builds only)

6. build.ios.xcodebuild

7. build.ios.writeEntitlements

8. build.ios.writeExtensionEntitlements

9. build.ios.writeBuildManifest

10. build.post.compile

11. build.finalize

**Other platform build hooks**

The following hooks are fired after the cli:pre-execute hook when building a project for non-Android or non-iOS platforms:

1. build.pre.construct

2. build.pre.compile

3. build.post.compile

4. build.finalize

### Examples

#### Execute a Script Before Building a Project

The following example checks for a custom application property in the tiapp.xml file and executes a script before starting the build process. If the return code returned by the script is non-zero, the CLI stops.

```javascript
exports.init = function (logger, config, cli, nodeappc) {
    cli.on("build.pre.construct", function () {
        // Check for a custom tiapp property: <property name="fooFeature">true</property>
        if (cli.tiapp.properties.fooFeature && cli.tiapp.properties.fooFeature.value == 'true') {
            var rv = exec("bash foo.sh");
            if (rv.code) {
                logger.error("Script returned the following error code: " + rv.code);
                process.exit();
            }
        }
    });
};
```

#### Modify Android Dexer Command

The following example modifies the arguments passed to the dexer command if the correct module is included in the project.

```javascript
exports.init = function (logger, config, cli, nodeappc) {
    cli.on("build.android.dexer", { pre: function (data, next) {
        logger.log("build.android.dexer - com.foo.mymodule modifications".yellow);
        // Helper function to locate compatible modules
        nodeappc.timodule.find(
            cli.tiapp.modules,            // Modules included in the project
            'android',
            data.ctx.deployType,          // Current deploy type
            data.ctx.titaniumSdkVersion,  // Titanium SDK version used to build the project
            config.paths.modules,         // Additional module search paths, searches TiSDK install directories by default
            logger,
            function (modules) {
                // Callback to cycle through found modules
                for (var i = 0; i < modules.found.length; i++) {
                    if (modules.found[i].id == "com.foo.mymodule") {
                        // Modify the arguments if the correct module is found
                        var jarPath = modules.found[i].modulePath + "/class.foo.jar";
                        data.args[1].push("-javaagent " + jarPath);
                        break;
                    }
                }
            }
        );

        // Pass the modified params on
        next(null, data);
    }});
};
```

### CLI Hook API

Prepend the APIs with the `exports` variables to expose them as public.

#### Properties

**cliVersion**: String
Specify which version(s) of the CLI the command supports. For example, "3.2.0" specifies the command to only support version 3.2.0, while ">=3.2.0" specifies the command to support version 3.2.0 and greater.

#### Functions

##### init

Use the `init` method to initialize the hook. Implement the hook listeners, which hook into the CLI commands, inside this function.

**Syntax**

```
init (Object logger, Object config, Object cli, [Object nodeappc]): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| logger | `Object` | Handle to the logger object. See [logger](#logger). |
| config | `Object` | CLI configuration options. Same properties as reported by the `titanium config` command. |
| cli | `Object` | Handle to the CLI object. See [cli](#cli). |
| nodeappc | `Object` | Handle to the node-appc object. See [nodeappc](#nodeappc). |

## CLI Common API

### cli

The CLI class.

#### Properties

**argv**: Object
Command-line arguments passed to the CLI.

**command**: Object
Information about the command invoked, such as the complete command-line options.

**completion**: Boolean
Indicates if tab completion is enabled or not.

**config**: Object
Information reported by the `titanium config` command as a JSON object.

**env**: Object
Information about the Titanium build environment similar to `titanium info -t titanium`.

**globalContext**: Object
CLI command, flag and option context.

**hooks**: Object
Information about the currently loaded CLI hooks.

**logger**: Object
Handle to the logger object.

**scannedCommandPaths**: Object
List of directories scanned for CLI commands.

**sdk**: Object
Information about the Titanium SDK the application is being built against.

**startTime**: Number
Start time of the command as a Unix Timestamp.

**tiapp**: Object
The `tiapp.xml` file of the project in JSON format.

**version**: Number
CLI version.

#### Functions

##### emit

Fires a hook event.

```
emit(String hookName, [Object context], [Function callback])
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| hookName | `String` | Name of the hook. |
| context | `Object` | Context to send to the hook callback. |
| callback | `Function` | Function to call after the event finishes firing. |

##### on

Binds a callback to a hook.

```
on(String hookName, Function/Object callback)
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| hookName | `String` | Name of the hook. |
| callback | `Function/Object` | Function to call after the event finishes firing.<br /><br />If an object is used, specify any of the optional properties:<br /><br />| Name | Type | Description |<br />| --- | --- | --- |<br />| post | `Function` | Callback to execute after the hook finishes. |<br />| pre | `Function` | Callback to execute before the hook starts. |<br />| priority | `Number` | Hook execution priority. Lower values are executed first. Default value is 1000. | |

#### Events

The hook events are namespaced. If a command name is the first element, then that event is only triggered by that command. Events prefixed with "cli" are executed for all CLI commands (except for the `cli:post-execute` hook). If an event contains a platform name, then it is only executed for that platform (except for the config hooks).

Properties returned by the events are listed below.

##### build.android.aapt (function hook)

Fired when executing the aapt executable to package Android resources.

##### build.android.compileJsFile (function hook)

Fired when compiling a JavaScript file for production builds.

##### build.android.config (function hook)

Fired when configuring the build options for Android.

##### build.android.copyResource (function hook)

Fired when copying a file from the Resources folder to the build folder.

##### build.android.dexer (function hook)

Fired when executing the dx script.

##### build.android.jarsigner (function hook)

Fired when executing the jarsigner executable to sign the APK file.

##### build.android.javac (function hook)

Fired when executing the javac executable to compile the source code.

##### build.android.proguard (function hook)

Fired when running ProGuard for code obfuscation. Requires special settings.

##### build.android.startEmulator (function hook)

Fired after starting the Android emulator.

##### build.android.titaniumprep (function hook)

Fired when the titanium\_prep executable encrypts the JavaScript files. Only fired when the build target is `device` or `dist-playstore`.

##### build.android.writeAndroidManifest (function hook)

Fired when writing the `AndroidManifest.xml` file.

##### build.android.zipalign (function hook)

Fired when executing the zipalign executable to ZIP align the APK file.

##### build.config (function hook)

Fired when configuring the build options.

##### build.finalize (event hook)

Fired when the build completes.

##### build.ios.config (function hook)

Fired when configuring the build options for iOS.

##### build.ios.compileJsFile (function hook)

Fired when compiling a JavaScript file for production builds.

##### build.ios.copyResource (function hook)

Fired when copying a file from the Resources folder to the build folder.

##### build.ios.prerouting (event hook)

Fired before the titaniumprep hook. Only fired when the build target is `device` or `dist-*`.

##### build.ios.titaniumprep (function hook)

Fired when the titanium\_prep executable encrypts the JavaScript files. Only fired when the build target is `device` or `dist-*`.

##### build.ios.writeBuildManifest (function hook)

Fired when writing the `build-manifest.json` file.

##### build.ios.xcodebuild (function hook)

Fired when the xcodebuild executable is invoked.

##### build.ios.writeEntitlements (function hook)

Fired when the project entitlements file is written.

##### build.ios.writeExtensionEntitlements (function hook)

Fired when the extension entitlements file is written.

##### build.mobileweb.config (function hook)

Fired when configuring the build options for Mobile Web.

##### build.post.compile (event hook)

Fired after the build completes.

##### build.pre.compile (event hook)

Fired before starting the pre-compile phase, such as copying and encrypting resources..

##### build.pre.construct (event hook)

Fired when initializing build options before the pre-compilation phase.

##### clean.config (event hook)

Fire when configuring the clean options.

##### clean.post (event hook)

Fired after cleaning the project.

##### clean.pre (event hook)

Fired before cleaning the project.

##### cli:command-loaded (event hook)

Fired after command paths have been scanned and all command files are loaded in to the CLI. Only available for globally required hooks.

##### cli:go (event hook)

Fired right after invoking a CLI command. Only available for globally required hooks.

##### cli:post-execute (event hook)

Fired after the command executes.

##### cli:post-validate (event hook)

Fired after validating the command options. First hook available for locally required hooks.

##### cli:pre-execute (event hook)

Fired before executing the command but after validation. Only available for globally required hooks.

##### cli:pre-validate (event hook)

Fire before validating the command options. Only available for globally required hooks.

##### create.config (event hook)

Fired when configuring the create options. Available on Release 3.3.0 and later.

##### create.finalize (event hook)

Fired when the create command completes. Available on Release 3.3.0 and later.

##### create.post (event hook)

Fired after executing the create command. Available on Release 3.3.0 and later.

##### create.pre (event hook)

Fired before executing the create command. Available on Release 3.3.0 and later.

##### help:header (event hook)

Fired before the help menu is displayed.

#### Event Properties

##### Event Hook

| Name | Type | Description |
| --- | --- | --- |
| args | `Array` | Arguments passed to the function specified by the `fn` property. |
| cli | `Object` | Handle to the CLI object. |
| command | `Object` | Information about the command invoked, such as the complete command-line options. |
| ctx | `Object` | Event-specific context. |
| fn | `Function` | Function before the hook callback. |
| result | `Array` | Return value of executing the function `fn`. |
| type | `String` | Name of the hook fired. |

##### Function Hook

| Name | Type | Description |
| --- | --- | --- |
| args | `Array` | Arguments passed to the function specified by the `fn` property. |
| ctx | `Object` | Command- and platform-specific context. |
| fn | `Function` | Function invoked between the pre and post hook callbacks. |
| result | `Array` | Return value of executing the function `fn`. Only available for post functions. |
| type | `String` | Name of the hook fired. |

### logger

The logger class based on the winston library. Use this class to output messages to the console.

#### Properties

**levels**: `Array<String>` – READ-ONLY
Log levels.

#### Functions

##### debug

Outputs a debug-level message to the console.

**Syntax**

```
debug(String message): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| message | String | Message to display in the console. |

##### error

Outputs a error-level message to the console.

**Syntax**

```
error(String message): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| message | `String` | Message to display in the console. |

##### exception

Outputs a JavaScript error object to the console. Outputs the error message and stack trace.

**Syntax**

```
exception(Error e): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| e | `Error` | This is a standard JavaScript Error object. Refer to the [ECMAScript Language Specification Section 15.11](http://www.ecma-international.org/ecma-262/5.1/#sec-15.11) for more information. |

##### getLevels

Retrieves the settable log levels.

**Syntax**

```
getLevels(void): Array<String>
```

**Returns**:

Array of strings indicating the possible settable log levels.

##### info

Outputs an info-level message to the console.

**Syntax**

```
info(String message): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| message | `String` | Message to display in the console. |

##### log

Outputs a generic log message to the console. This message does not have a log level associated with it.

**Syntax**

```
log(String message): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| message | `String` | Message to display in the console. |

##### setLevel

Sets the highest log level to display. Pass one of the the logger's levels property as the argument, for example, `logger.levels.info`.

**Syntax**

```
setLevel(Number logLevel): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| logLevel | `Number` | Value indicating the highest log level that may be outputted to the console. |

##### silence

Set to true to disable console output or false to enable console output.

**Syntax**

```
silence(Boolean val): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| val | `Boolean` | Disable (true) or enable (false) console output. |

##### trace

Outputs a trace-level message to the console.

**Syntax**

```
trace(String message): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| message | `String` | Message to display in the console. |

##### warn

Outputs a warning-level message to the console.

**Syntax**

```
warn(String message): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| message | `String` | Message to display in the console. |

### nodeappc

The node-appc class provides access to various utility libraries.

#### async

Namespace for helper library built on top of the async library.

##### parallel method

Run multiple tasks in parallel.

**Syntax**

```
parallel (Object context, Array<Functions> tasks, Function callback): void
```

**Parameters** :

| Name | Type | Description |
| --- | --- | --- |
| `context` | `Object` | Context to pass to the tasks |
| `tasks` | `Array<Function>` | Array of tasks |
| `callback` | `Function` | A function to call after executing all the tasks |

##### series method

Run multiple tasks in series.

**Syntax**

```
series (Object context, Array<Functions> tasks, Function callback): void
```

**Parameters** :

| Name | Type | Description |
| --- | --- | --- |
| `context` | `Object` | Context to pass to the tasks |
| `tasks` | `Array<Function>` | Array of tasks |
| `callback` | `Function` | A function to call after executing all the tasks |

#### busyindicator

CLI busyindicator class. Create an instance of this class, then use the `start` and `stop` methods to start and stop the indicator, respectively.

##### constructor

Constructor method.

```
new busyindicator(void): Object
```

##### start

Starts the busy indicator.

```
start(void): void
```

##### stop

Stops the busy indicator.

```
stop(void): void
```

Example

```javascript
cli.on("build.post.compile", function(){
    var busy = new nodeappc.busyindicator();
    busy.start();
    // do stuff
    busy.stop();
});
```

#### clitools

Namespace for Mac OS X command-line tools helper library.

##### detect method

Detects if the Mac OS X command-line tools are installed.

**Syntax**

```
detect ([Object cli], Function callback): void
```

**Parameters** :

| Name | Type | Description |
| --- | --- | --- |
| `cli` | `Object` | Handle to the CLI object. |
| `callback` | `Function` | Callback function. Takes an optional object as its only parameter, which contains the environment information. |

#### encoding

Namespace for string encoding/decoding helper library.

##### decodeOctalUTF8 method

Decodes a string with octals to a UTF-8 string.

**Syntax**

```
decodeOctalUTF8 (String input): String
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| `input` | `String` | String to decode |

**Returns**:

Decoded string.

**Example**:

```javascript
var hello = nodeappc.encoding.decodeOctalUTF8('\110\145\154\154\157');
logger.log(hello); //> 'Hello'
```

#### environ

Namespace for OS and Titanium SDK environment helper library.

##### getOSInfo method

Retrieves OS and Node.js information.

**Syntax**

```
getOSInfo (Function callback): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| callback | `Function` | Callback to invoke when done. Takes an optional object as its only parameter, which contains the environment information. |

**Example:**

```
nodeappc.environ.getOSInfo(function(result){
    logger.log(JSON.stringify(result));
});
```

##### getSDK method

Retrieves information about the specified SDK.

**Syntax**

```
getSDK (String version): Object
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| version | `String` | Version of the SDK, for example, "3.2.0.GA". |

**Returns:**

Information about the SDK or null if it cannot found.

**Example:**

```javascript
var tiSDK = nodeappc.environ.getSDK('3.2.1.GA');
if (tiSDK) {
    logger.log(JSON.stringify(tiSDK));
}
```

#### exception

CLI AppcException class. Create an instance of this class by passing in an error message, then invoke:

* `dump(logger)` to output the error message to the console

* `log(String error)` to log additional errors

* `toString(void)` to convert the error to a string

##### constructor

Constructor method.

```
new exception(String message): Object
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| message | `String` | Error message to log |

##### dump method

Outputs the exception to the console using the specified logger handle.

```
dump(Object logger): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| logger | `Object` | Handle to a logger instance |

##### log method

Logs another error message for the exception.

```
dump(String error): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| message | `String` | Error message to log |

##### toString method

Converts the exception to a string

```
toString(): String
```

**Returns**:

Exception as a string value.

##### Example

```javascript
var err = new nodeappc.exception("Oh noes!");
err.dump(logger); //> '[ERROR] Oh noes!'
err.log("Warning, Will Robinson");
logger.log(err.toString()); //> 'Oh noes!\nWarning, Will Robinson!'
```

#### haxm

Namespace for Intel HAXM helper library.

##### detect method

Detects if HAXM is installed.

**Syntax**

```
detect ([Object config,] [Object options,] Function callback): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| config | `Object` | CLI configuration object. |
| options | `Object` | Device options:<br /><br />| Name | Type | Description |<br />| --- | --- | --- |<br />| bypassCache | `Boolean` | If set to false, returns the cached info. If set to true, retrieves values directly from the system. | |
| callback | `Function` | Callback to invoke when done. Takes an optional object as its only parameter, which contains the environment information. |

**Example:**

```
nodeappc.hamx.detect(function(result){
    logger.log(JSON.stringify(result));
});
```

#### image

Namespace for the image helper library built on top of the imgscalr library.

##### resize method

Resizes the source image according to the destination parameters.

**Syntax**

```
resize (String src, Array<Object> dest, [Function callback], [Object logger]): void
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| src | `String` | CLI configuration object. |
| dst | `Array<Object>` | Array of objects specifying the required destination properties:<br /><br />| Name | Type | Description |<br />| --- | --- | --- |<br />| file | `String` | Path and name of the resize images. |<br />| height | `Number` | Height to scale the image. |<br />| width | `Number` | Width to scale the image. | |
| callback | `Function` | Callback to invoke when done. Takes an optional error and result objects as its only parameter. |
| logger | `Object` | Handle to the logger object. |

**Example:**

```javascript
var dst = {
    file: "/tmp/Default2.png",
    width: 240,
    height: 360
};
nodeappc.image.resize("/tmp/Default.png", [dst], function(error, result) {
    logger.log(result);
}, logger);
```

#### jdk

Namespace for the Java helper library.

##### detect method

Detects if Java and the JDK are installed.

**Syntax**

```
detect ([Object config], [Object options], Function callback): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| config | `Object` | CLI configuration object. |
| options | `Object` | Device options:<br /><br />| Name | Type | Description |<br />| --- | --- | --- |<br />| bypassCache | `Boolean` | If set to false, returns the cached info. If set to true, retrieves values directly from the system. | |
| callback | `Function` | Callback to invoke when done. Takes an optional results object as its only parameter, which contains the environment information. |

**Example:**

```
nodeappc.jdk.detect(config, function(result){
    dump(result);
});
```

#### net

Namespace for the network helper library.

##### interface method

Detects all network interfaces.

**Syntax**

```
interfaces (Function callback): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| callback | `Function` | Callback to invoke when done. Takes an optional results object as its only parameter, which contains the environment information. |

**Example:**

```
nodeappc.net.interfaces(function(result){
    dump(result);
});
```

##### online method

Detects if the current computer is online.

**Syntax**

```
interfaces (Function callback): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| callback | `Function` | Callback to invoke when done. Takes an optional error object and result value as its only parameter. The results value is a boolean value indicating if the computer is online or not. |

**Example:**

```
nodeappc.net.online(function(err, result){
    if (result){
        logger.info("We haz interwebs!");
    }
});
```

##### urlEncode method

Converts an object into an escaped URL-safe string.

**Syntax**

```
urlEncode (Object obj): String
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| obj | `Object` | Object to convert |

**Returns:**

An escaped URL-safe string.

**Example:**

```javascript
var obj = {
    "_session_id": "11223344deadbeef",
    "message_id": "00998877"
};
var str = nodeappc.net.urlEncode(obj);
logger.log(str); //> _session_id=11223344deadbeef&message_id=00998877
```

#### plist

CLI plist class. Create an instance of this class by passing it a file (or nothing to create an empty plist file), then invoke the methods on the object to traverse to update the progress.

##### constructor

Constructor method.

**Syntax**

```
new plist ([String file]): Object
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| file | `String` | plist file to open and parse |

**Returns:**

plist file in JSON format or an empty dictionary.

#### progress

CLI progress bar class. Create an instance of this class by passing it a format string and options object, then invoke the `tick` method to update the progress.

##### constructor

Constructor method.

**Syntax**

```
new progress (String format, Object options): Object
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| format | `String` | Use the following strings to format the progress bar:<br /><br />* ':bar' - progress bar<br />    <br />* ':current' - current progress value<br />    <br />* ':total' - total progress value<br />    <br />* ':elapsed' - current elapsed time of the task<br />    <br />* ':eta' - estimated time when the task completes<br />    <br />* ':percent' - percent value of the current progress<br />    <br />* ':paddedPercent' - padded percent value of the current progress |
| options | `Object` | Optional progress bar options:<br /><br />| Name | Type | Description |<br />| --- | --- | --- |<br />| complete | `String` | Character to indicate completed progress in the bar. |<br />| incomplete | `String` | Character to indicate incomplete progress in the bar. |<br />| total | `Number` | Total number to be tracked by the progress bar. |<br />| width | `Number` | Width in characters of the progress bar. | |

##### tick method

Increments the progress and redraws the progress bar.

**Syntax**

```
tick ([Number len]): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| len | `Number` | Value to increment to progress bar by. Default value is 1. |

##### Example

```javascript
/*
    Displays the following progress bar:
    80% [================================........] 0.2s
*/

var bar = new nodeappc.progress('  :paddedPercent [:bar] :etas', {
    complete: '='.cyan,
    incomplete: '.'.grey,
    width: 40,
    total: 10
});
var timer = setInterval(function(){
    bar.tick();
    if (bar.complete) {
        console.log('\ncomplete\n');
        clearInterval(timer);
    }
}, 100);
```

#### string

Namespace for the string helper library.

##### capitalize method

Capitalizes the string.

**Syntax**

```
capitalize (String str): String
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| str | `String` | String to capitalize. |

**Returns:**

Capitalized string.

##### levenshtein method

Calculates the [Levenshtein distance](http://en.wikipedia.org/wiki/Levenshtein_distance) of two strings.

**Syntax**

```
levenshtein (String str1, String str2): Number
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| str1 | `String` | First string. |
| str2 | `String` | Second string. |

**Returns:**

The distance between the two strings.

##### lpad method

Pads the left side of a string so that the total length equals the specified length. If the string is longer than the length, the string is not padded.

**Syntax**

```
lpad (String str, Number len, [String pad]): String
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| str | `String` | String to pad. |
| len | `Number` | Total length of the string. |
| pad | `String` | Character to use as the padding. Default is a space. |

**Returns:**

Padded string.

##### renderColumns method

Renders an array of items into columns.

**Syntax**

```
renderColumns (Array<String> items, Number margin, Number maxwidth): String
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| items | `Array<String>` | Array of items to render. |
| margin | `String` | Row title in the left margin. |
| maxwidth | `Number` | Maximum width before wrapping. |

**Returns:**

Formatted string.

##### rpad method

Pads the right side of a string so that the total length equals the specified length. If the string is longer than the length, the string is not padded.

**Syntax**

```
lpad (String str, Number len, [String pad]): String
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| str | `String` | String to pad. |
| len | `Number` | Total length of the string. |
| pad | `String` | Character to use as the padding. Default is a space. |

**Returns:**

Padded string.

##### suggest method

Compares a string to an array of options and suggests close matches based on a given threshold.

**Syntax**

```
suggest (String str, Array<Strings> options, Function logger, [Number threshold]): void
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| str | `String` | String to find a match for. |
| options | `Array<String>` | Array of strings to find a match with. |
| logger | `Function` | Callback to output the suggestions. Takes one string value as a parameter. |
| threshold | `Number` | Match threshold. Default is 3. |

##### wrap method

Inserts line breaks into a string so that the text does not exceed the specified width.

**Syntax**

```
wrap (String str, [Number width]): String
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| str | `String` | String to wrap. |
| wrap | `Number` | Length to wrap the text. Default is the console width. |

**Returns:**

Wrapped string.

##### Examples

```javascript
var str1 = "saturday",
    str2 = "sunday",
    cmd = "confound",
    commands = ["build", "clean", "config", "create", "help", "info", "setup", "status"];

logger.log(nodeappc.string.capitalize(str1)); //> Saturday

logger.log(nodeappc.string.levenshtein(str1, str2)); //> 3

logger.log(nodeappc.string.lpad(str1, 25, "$")); //> $$$$$$$$$$$$$$$$$saturday

logger.log(nodeappc.string.rpad(str2, 25, "$")); //> sunday$$$$$$$$$$$$$$$$$$$

logger.log(nodeappc.string.renderColumns([str1, str2], "Le weekend", 50)); //> Le weekend: saturday     sunday

logger.log(nodeappc.string.suggest(cmd, commands, function(result){
    logger.log(result);
}, 5));

/*
Did you mean this?
    config
    info
*/

logger.log(nodeappc.string.wrap("The quick brown fox jumps over the lazy dog.", 25));

/*
The quick brown fox jumps
over the lazy dog.
*/
```

#### subprocess

Namespace for the helper library to spawn subprocesses.

##### findExecutable method

Tries to locate the executable.

**Syntax**

```
findExecutable (Array<String>/String files, Function callback): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| files | `Array<String>/String` | Executable to locate or locations to check. |
| callback | `Function` | Callback to invoke when done. Takes an error and results object as its first and second parameters, respectively. |

**Example:**

```javascript
var commands = ["/usr/local/bin/grep", "/usr/bin/grep"];
nodeappc.subprocess.findExecutable(commands, function(err, res){
    if (res != null) {
        logger.info("Found grep command: " + res);
    }
})
```

##### getRealName method

Try to get the 8.3 formatted file name for Windows systems. Returns the original file name for Mac OS X.

**Syntax**

```
getRealName (String file, Function callback): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| file | `String` | Executable to locate or absolute location to check. |
| callback | `Function` | Callback to invoke when done. Takes an error and results object as its first and second parameters, respectively. |

##### run method

Spawns a new process.

**Syntax**

```
run (String cmd, Array args, [Object options], Function callback): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| cmd | `String` | Executable to run. |
| args | `Array` | Arguments to pass to the command. |
| opts | `Object` | Options to pass to the spawn command. See the [Node.js: Child Process documentation](http://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options). |
| callback | `Function` | Callback to invoke when done. Takes a code, results, and error object as its first, second and third parameters, respectively. |

**Example:**

```
// Finds all the PNG images in the project
nodeappc.subprocess.findExecutable("find", function(error, result){
    if (result) {
        nodeappc.subprocess.run(result, [".", "-name", "\*.png"], function(code, res, err){
            if (res) {
                logger.log(res);
            }
        });
    }
});
```

#### time

Namespace for the time-formatting helper library.

##### prettyDiff method

Format the time difference between two JavaScript Date objects in to an easily readable format.

**Syntax**

```
prettyDiff (Date from, Date to, Object options): String
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| from | `Date` | First date. |
| to | `Date` | Second date. |
| options | `Object` | Options:<br /><br />| Name | Type | Description |<br />| --- | --- | --- |<br />| colorize | `Boolean` | If set to true, colorizes the output. False by default. |<br />| hideMS | `Boolean` | If set to true, hides the millisecond results. False by default. |<br />| showFullName | `Boolean` | If set to true, uses the full name rather than an abbreviation. False by default. | |

**Returns**:

Formatted string describing the difference between the date.

**Example:**

```javascript
var date1 = new Date(1980, 1, 21, 20, 41, 0, 0),
    date2 = Date.now();

var diff = nodeappc.time.prettyDiff(date1, date2, {hideMS: true, showFullName: true});
logger.log(diff); //> 12445 days 18 hours 30 minutes 50 seconds
```

##### timestamp method

Creates an ISO-like timestamp.

**Syntax**

```
timestamp (void): String
```

**Returns** :

Timestamp.

**Example:**

```
logger.log(nodeappc.time.timestamp()); //> 2014-03-20T23:15:04.815+0000
```

#### timodule

Namespace for Titanium module helper library.

##### detect method

Scans the specified paths for Titanium module as well as all known Titanium SDK directories.

**Syntax**

```
detect (Array<String> searchPaths, Object logger, Function callback): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| `searchPaths` | `Array<String>` | Paths to search for modules. |
| `logger` | `Object` | Handle to the CLI object. |
| `callback` | `Function` | Callback function. Takes an optional object as its only parameter, which contains the module information. |

##### find method

Finds Titanium modules with the specified restrictions and groups them in to found, missing, incompatible and conflict categories.

**Syntax**

```
find (Array<Object> modules, Array<String>/String platform, Array<String>/String deployType, String sdkVersion, Array<String> searchPaths, Object logger, Function callback): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| modules | `Array<Object>` | Modules to search for. |
| platform | `Array<String>/String` | Platforms to search for. |
| deployTypes | `Array<String>/String` | Deploy types to search for. |
| sdkVersion | `String` | SDK version for minimum SDK version check. |
| `searchPaths` | `Array<String>` | Paths to search for modules. |
| `logger` | `Object` | Handle to the CLI object. |
| `callback` | `Function` | Callback function. Takes an optional object as its only parameter, which contains the module information. |

##### scopedDetect method

Only scans the specified paths for Titanium module.

**Syntax**

```
scopedDetect (Array<String> searchPaths, Object config, Object logger, Function callback): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| `searchPaths` | `Array<String>` | Paths to search for modules. |
| `config` | `Object` | CLI configuration object. |
| `logger` | `Object` | Handle to the CLI object. |
| `callback` | `Function` | Callback function. Takes an optional object as its only parameter, which contains the module information. |

#### tiplugin

Namespace for Titanium plugin helper library.

##### detect method

Scans the specified paths for Titanium plugins as well as any globally or user-configured search paths.

**Syntax**

```
detect (String projectDir, Object config, Object logger, Function callback): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| `projectDir` | `String` | Project path to search for plugins. |
| `config` | `Object` | CLI configuration object. |
| `logger` | `Object` | Handle to the CLI object. |
| `callback` | `Function` | Callback function. Takes an optional object as its only parameter, which contains the plugin information. |

##### find method

Finds Titanium plugins with the specified restrictions and groups them in to found or missing categories.

**Syntax**

```
find (Array<Object> plugins, Array<String> searchPaths, Object logger, Function callback): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| `plugins` | `Array<Object>` | Plugins to search for. |
| `searchPaths` | `String` | Path to the project directory. |
| `config` | `Object` | CLI configuration object. |
| `logger` | `Object` | Handle to the CLI object. |
| `callback` | `Function` | Callback function. Takes an optional object as its only parameter, which contains the plugin information. |

##### scopedDetect method

Only scans the specified paths for Titanium plugins.

**Syntax**

```
scopedDetect (Array<String> searchPaths, Object config, Object logger, Function callback): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| `searchPaths` | `Array<String>` | Paths to search for modules. |
| `config` | `Object` | CLI configuration object. |
| `logger` | `Object` | Handle to the CLI object. |
| `callback` | `Function` | Callback function. Takes an optional object as its only parameter, which contains the plugin information. |

#### util

Namespace for the miscellaneous utility library.

##### mix method

Mix multiple objects into a single object.

**Syntax**

```
mix (Object obj1, ...): Object
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| obj1 | `Object` | First object to mix in other objects with. |
| ... | `Object` | More objects to mix in with the first object. |

**Returns**:

Mixed object.

##### mixObj method

Deep mixes multiple objects into a single object.

**Syntax**

```
mixObj (Object obj1, ...): Object
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| obj1 | `Object` | First object to mix in other objects with. |
| ... | `Object` | More objects to mix in with the first object. |

**Returns**:

Mixed object.

##### Example

```javascript
var object1 = {
    foo: "bar",
    colors: ["red", "green", "blue"],
    car: {
        make: "Ford",
        model: "Fiesta"
    }
};
var object2 = {
    foo: "baz",
    colors: ["cyan", "magenta", "yellow", "black"],
    box: {
        make: "Apple",
        model: "MacBook Pro",
        model_id: "MacBookPro9,1"
    }
};
dump(nodeappc.util.mix(object1, object2));
/*
{ foo: 'baz',
  colors:
   [ 'cyan',
     'magenta',
     'yellow',
     'black' ],
  car: { make: 'Ford', model: 'Fiesta' },
  box:
   { make: 'Apple',
     model: 'MacBook Pro',
     model_id: 'MacBookPro9,1' } }
*/

dump(nodeappc.util.mixObj(object1, object2));

/*
{ foo: 'baz',
  colors:
   [ 'cyan',
     'magenta',
     'yellow',
     'black',
     'cyan',
     'magenta',
     'yellow',
     'black' ],
  car: { make: 'Ford', model: 'Fiesta' },
  box:
   { make: 'Apple',
     model: 'MacBook Pro',
     model_id: 'MacBookPro9,1' } }
*/
```

#### xcconfig

Loads an Xcode xcconfig file and converts it to JSON format. Pass the file as the only required parameter to the constructor.

**Example:**

```javascript
var json_obj = new nodeappc.xcconfig('/path/to/file.xcconfig');
```

#### xml

Namespace for the XML parsing utility library. Use the [xmldom](https://www.npmjs.org/package/xmldom) library to provide an XML document to the library.

##### forEachAttr method

Loops through the attributes for an XML DOM object and invokes the callback for each attribute found.

**Syntax**

```
forEachAttr (Object node, Function callback): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| node | `Object` | XML node. |
| callback | `Function` | Callback function. Takes an object as it only parameter, which represents the attribute information. |

##### forEachElement method

Loops through the elements for an XML DOM object and invokes the callback for each element found.

**Syntax**

```
forEachElement (Object node, Function callback): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| node | `Object` | XML node. |
| callback | `Function` | Callback function. Takes an object as it only parameter, which represents the element information. |

##### getAttr method

Retrieves and parses an attribute of an XML node. If the attribute does not exist, an empty string is returned.

**Syntax**

```
getAttr (Object node, String attr): Primitive
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| node | `Object` | XML node. |
| attr | `String` | Attribute to get. |

**Returns:**

Returns the value of the attribute or an empty string if it does not exist.

##### getValue method

Determines if the XML node has a child node and returns it.

**Syntax**

```
getValue (Object node): String
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| node | `Object` | XML node. |

**Returns:**

Returns the value of the child node.

##### parse method

Parse a XML value and coverts it to a JavaScript value.

**Syntax**

```
parse (String value): Primitive
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| value | `String` | Value of the XML node. |

**Returns:**

Returns the value of the node as a JavaScript primitive.

##### Example

```javascript
var DOMParser = require('xmldom').DOMParser;
var doc = new DOMParser().parseFromString(
    '<xml xmlns="a" xmlns:c="./lite">\n'+
        '\t<child>test</child>\n'+
        '\t<child>\n'+
        '\t\t<grandchild>test</grandchild>\n'+
        '\t</child>\n'+
    '</xml>'
    ,'text/xml');
doc.documentElement.setAttribute('x','y');
doc.documentElement.setAttributeNS('./lite','c:x','y2');

nodeappc.xml.forEachElement(doc, function(node){
    if (node.attributes) {
        nodeappc.xml.forEachAttr(node, function(attr){
            var attr_val = nodeappc.xml.getAttr(node, attr.name);
            logger.log (attr.name + " = " + attr_val);
        });
    }
});

/*
OUTPUTS:
xmlns = a
xmlns:c = ./lite
x = y
c:x = y2
*/
```

#### version

Namespace for a version helper library.

##### eq method

Converts two versions to three segment format, then compares if they are equal.

```
eq(String version1, String version2): Boolean
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `version1` | `String` | First version to compare |
| `version2` | `String` | Second version to compare |

**Returns**:

True is the versions are equal otherwise false.

##### format method

Formats a version based on the minimum or maximum number of segments.

```
format(String version, Number min, Number max, [Boolean chopDash]): String
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `version` | `String` | Version to format |
| `min` | `Number` | Minimum number of segments |
| `min` | `Number` | Maximum number of segments |
| `chopDash` | `Boolean` | If true, remove everything after a dash in the version string |

**Returns**:

Formatted version string.

##### gt method

Converts two versions to three segment format, then compares if the first one is greater than the second one.

```
gt(String version1, String version2): Boolean
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `version1` | `String` | First version to compare |
| `version2` | `String` | Second version to compare |

**Returns**:

True is the first version is greater than the second version otherwise false.

##### gte method

Converts two versions to three segment format, then compares if the first one is greater than or equal to the second one.

```
gte(String version1, String version2): Boolean
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `version1` | `String` | First version to compare |
| `version2` | `String` | Second version to compare |

**Returns**:

True is the first version is greater than or equal to the second version otherwise false.

##### lt method

Converts two versions to three segment format, then compares if the first one is less than the second one.

```
lt(String version1, String version2): Boolean
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `version1` | `String` | First version to compare |
| `version2` | `String` | Second version to compare |

**Returns**:

True is the first version is less than the second version otherwise false.

##### lte method

Converts two versions to three segment format, then compares if the first one is less than or equal to the second one.

```
lte(String version1, String version2): Boolean
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `version1` | `String` | First version to compare |
| `version2` | `String` | Second version to compare |

**Returns**:

True is the first version is less than or equal to the second version otherwise false.

##### parseMax method

Determines the maximum possible version in the supplied range.

```
lte(String range): String
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `range` | `String` | Space-delimited list of versions or version expressions, such as ">3.2.0" or "<3.2.0" |

**Returns**:

Determined maximum version.

##### parseMin method

Determines the minimum possible version in the supplied range.

```
lte(String range): String
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `range` | `String` | Space-delimited list of versions or versions expressions, such as ">3.2.0" or "<3.2.0" |

**Returns**:

Determined minimum version.

##### satisfies method

Determines if a version occurs in the supplied versions.

```
satisfies(String version, String range, [Boolean maybe]): Boolean
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `version` | `String` | Version to check |
| `range` | `String` | Space-delimited list of versions or version expressions, such as ">3.2.0" or "<3.2.0" |
| `maybe` | `Boolean` | If true and the version is greater than at least one of the supplied version, returns "maybe". |

**Returns**:

Returns true if found or "maybe" if it meets the maybe property condition, otherwise false.

##### sort method

Sorts the array of versions from smallest to largest.

```
sort(Array<String> versions): Array<String>
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `versions` | `Array<String>` | Array of versions to sort |

**Returns**:

Sorted array of versions from smallest to largest.

##### Example

```javascript
var ver = nodeappc.version.format("3.3", 3, 3, true);
logger.log(ver); //> 3.3.0

ver = nodeappc.version.eq("3.2", "3.2.0");
logger.log(ver); //> true

ver = nodeappc.version.lt("3.2.1.1", "3.2.1");
logger.log(ver); //> false

ver = nodeappc.version.lte("3.2.1.1", "3.2.1");
logger.log(ver); //> true

ver = nodeappc.version.gt("3.2.1.1", "3.2.1");
logger.log(ver); //> false

ver = nodeappc.version.gte("3.2.1.1", "3.2.1");
logger.log(ver); //> true

var range = ">2.1.4 || <3.2.0";
ver = nodeappc.version.parseMax(range);
logger.log(ver); //> 3.2.0

ver = nodeappc.version.parseMin(range);
logger.log(ver); //> 2.1.4

ver = nodeappc.version.satisfies("3.1.3", range);
logger.log(ver); //> true

var versions = ["3.1.3", "3.3", "2.1.3", "3.2.1"];
ver = nodeappc.version.sort(versions);
logger.log(ver); //> 2.1.3,3.1.3,3.2.1,3.3
```

#### zip

Namespace for the ZIP archive helper library built on top of the adm-zip library.

##### unzip method

Decompresses a ZIP archive.

**Syntax**

```
unzip(String file, String dest, Object opts, Function callback): void
```

**Parameters**:

| Name | Type | Description |
| --- | --- | --- |
| `file` | `String` | The file to extract |
| `dest` | `String` | The destination to extract the files to |
| `opts` | `Object` | Optional extract options:<br /><br />| Name | Type | Default | Description |<br />| --- | --- | --- | --- |<br />| `visitor` | `Function` |  | A function to call when visiting each file being extracted |<br />| `overwrite` | `Boolean` | `true` | If true, overwrites files on extraction |<br />| `defaultPerm` | `Number` | `0644` | The default file permissions; should be in octet format | |
| `callback` | `Function` | A function to call when done extracting all files |
