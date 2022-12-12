---
title: CommonJS Modules in Titanium
weight: '20'
---

# CommonJS Modules in Titanium

## Synopsis

Titanium SDK is moving toward the adoption of the CommonJS module specification as the way in which end users of the platform structure their JavaScript code. While CommonJS Modules are a "standard" [specification](http://wiki.commonjs.org/wiki/Modules/1.1), there are differences in implementation across multiple technology stacks.

::: tip 💡 Hint
Since Titanium SDK 7.1.0, you can also use ES6+ classes to export your modules instead, e.g. by using `export default class MyClass` and `import` statements. It will be transpiled down to ES5, so all native platforms can benefit from it today, without restricting certain functionalities to higher platform levels.
:::

### Definitions

* **Module** - Any CommonJS-compliant module which will be consumed in a Titanium SDK application. This can be a JavaScript file included with an application, or a native extension to Titanium which exposes a JavaScript API.

* **Resources** - The Resources directory of a Titanium application, where the user's source code lives before any processing by our build system. **Note**: For Alloy, CommonJS modules are placed in `app/lib`

* `exports` - a free variable within a module, to which multiple properties may be added to create a public interface

* `module.exports` - an object within a module, which may be REPLACED by an object representing the public interface to the module

## CommonJS Module Specification implementation

Our specific implementation of the [CommonJS Module Specification](http://wiki.commonjs.org/wiki/Modules/1.1) is based on (and the early implementation on Android taken directly from) that of [node.js](http://nodejs.org/docs/v0.6.0/api/modules.html). While we should not consider our implementation a direct clone of node, we should favor node conventions where possible to foster reuse of modules across both environments.

### Simple usage

In order to use a module within Titanium, you must use the `require` function, which is built in to the global scope in every JavaScript context.

```javascript
var myModule = require('MyModule');
```

The string passed to `require` must be resolvable to either a native/compiled module that Titanium SDK has access to, or a JavaScript module provided in the Resources directory of the Titanium SDK application. The `require` function returns an JavaScript object, with properties, functions, and other data assigned to it which form the public interface to the module. If the module we loaded into the application above exposed a function `sayHello`, which would print a name and a welcome message to the console, it would be accessed in this way:

```javascript
var myModule = require('MyModule');
myModule.sayHello('Kevin');
// Console output: "Hello Kevin!"
```

### Native/Compiled versus JavaScript modules

When a module is required, Titanium must first determine whether or not to load a native/compiled module or a JavaScript module shipped within the Resources directory of a Titanium SDK application. Titanium will prefer to load a native module first. The deployment and processing of native modules is beyond the scope of this specification, but at the time of this writing, native modules can be deployed globally on a developer machine, or inside a **modules** directory in the top-level Titanium SDK project directory.

#### Native/Compiled modules

Native/compiled modules are identified by a single string, specified within the global app configuration in tiapp.xml. Given the following configuration for a native/compiled module in tiapp.xml:

```xml
<modules>
   <module version="1.0">ti.paypal</module>
</modules>
```

and the following code within a Titanium SDK application:

```javascript
var paypal = require('ti.paypal');
```

Titanium will load the `ti.paypal` native module, and will NOT attempt to look for or load a module from Resources. If a native module is not found for the string passed to `require`, Titanium will look for a JavaScript module in the Resources.

#### JavaScript modules

Modules may also be loaded as JavaScript files from the Resources directory of the application. In Titanium SDK, a JavaScript module is associated with a single JavaScript file. When the module is loaded, the JavaScript file will be evaluated and the public interface of the module will be populated.

### JavaScript module path resolution

When dealing with JavaScript modules from Resources, the string passed to `require` is considered to be a path to the JavaScript file, minus the ".js" extension. If the path string is not prefixed by a `./`, `../`, or similar, it is assumed that the module is being referenced relative to the Resources directory. In a Titanium project with a CommonJS module file located in `Resources/app/lib/myModule.js`, that module could be loaded as such: `var myModule = require('app/lib/myModule');`.

Similarly, if the path is prefixed with a `/`, the module path is also resolved relative to the Resources directory. For the module above, another valid loading syntax would be `var myModule = require('/app/lib/myModule');`.

Relative paths may be specified as well. Assume we have modules located in the following locations:

* `Resources/app/ui/SomeCustomView.js`

* `Resources/app/ui/widgets/SomeOtherCustomView.js`

* `Resources/app/lib/myModule.js`

Now assume we are writing code inside the `SomeCustomView.js` module file. The following are valid `require` statements:

**SomeCustomView.js**

```javascript
var myModule = require('../lib/myModule');
var SomeOtherCustomView = require('./widgets/SomeOtherCustomView');
```

### JavaScript module composition

As in the [CommonJS Module specification](http://wiki.commonjs.org/wiki/Modules/1.1), inside the module JavaScript file, there will be a special variable called `exports` to which properties may be added for the public interface of the module.

```
exports.sayHello = function(name) {
    Ti.API.info('Hello '+name+'!');
};

exports.version = 1.4;
exports.author = 'Jon Doe';
```

As many properties as desired can be added to the exports object.

Alternately, if the module author wishes to make the exported value from the module an object of their own design and choosing, there is a non-standard (but common, as with node.js) extension to the Module specification which allows for this. The `module.exports` object is available within the module file, and may be assigned any value which the developer would like to return from the `require` function for their module. This is most commonly used for functions which act as object constructors. The following would be a typical use case for this:

```javascript
function Person(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.fullName = function() {
    return this.firstName+' '+this.lastName;
};

module.exports = Person;
```

Usage:

**Resources/app.js**

```javascript
var Person = require('Person');
var johnDoe = new Person('John', 'Doe');
var johnDoeName = johnDoe.fullName(); // "John Doe"
```

#### Antipatterns and unsupported behavior

No direct assignments may be made to the exports object:

```javascript
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

exports = Person; // THIS IS NOT OK AND PROBABLY WON'T WORK
```

Similarly, you should not mix and match usage of `module.exports` and `exports.*`:

```javascript
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

module.exports = Person; // This is okay, but...
exports.foo = 'bar'; // This is discouraged - use one or the other
```

Also, it is recommended that you not mix and match assignments to `module.exports` and `exports` - use one or the other:

```javascript
exports.foo = 'bar';
module.exports.fooToo = 'something else'; // Not good style - use one or the other.
```

### Caching

When a JavaScript module is loaded, the object returned by `require` should be cached by Titanium and provided again to consumers without evaluating the module's JavaScript code multiple times. If a developer thinks they want their module code evaluated multiple times, they should really be creating a module with a function that can be called multiple times. There's no valid use case for re-evaluating JavaScript in a module over and over.

### Security and sandboxing

As in the [CommonJS Module specification](http://wiki.commonjs.org/wiki/Modules/1.1), all modules have their own private scope. Variables declared within the module file are private - anything that needs to be made public should be added to the exports object. For more information on sandboxing, refer to the CommonJS module spec.

#### Stateful modules

All modules in Titanium are created once, and then passed by reference on subsequent occasions when the module is required. Because of this, modules themselves may have state variables, which are properties of the "singleton" object represented by the module.

**app.js**

```javascript
var stateful = require('statefulModule');
var score = require('scoreModule');

var window = Ti.UI.createWindow({
  backgroundColor: 'white',
  title: 'Click window to score'
});

window.addEventListener('click', function() {
  try {
    Ti.API.info('The latest score is ' + score.latestScore());
    Ti.API.info('Adding ' + stateful.getPointStep() + ' points to score...');

    score.pointsWon();

    Ti.API.info('The latest score is ' + score.latestScore());
    Ti.API.info('Setting points per win to 10');
    stateful.setPointStep(10);
    Ti.API.info('Adding ' + stateful.getPointStep() + ' points to score ...');

    score.pointsWon();
    Ti.API.info('The latest score is ' + score.latestScore());
    Ti.API.info('---------- Info ----------');
    Ti.API.info('stateful.getPointStep() returns: ' + stateful.getPointStep());
    Ti.API.info('stateful.stepVal value is: ' + stateful.stepVal); // will always return default of 5
    Ti.API.info('**************************');
  } catch(e) {
    alert('An error has occurred: ' + e);
  }
});

window.open();
```

**scoreModule.js**

```javascript
var appStateful = require('statefulModule'); // a reference to the "stateful" variable in app.js that contains the stateful module
var _score = 0; // default

exports.pointsWon = function() {
  _score += appStateful.getPointStep();
};

exports.pointsLost = function() {
  _score -= appStateful.getPointStep();
};

exports.latestScore = function() {
  return _score;
};
```

**statefulModule.js**

```javascript
var _stepVal = 5; // default

exports.setPointStep = function(value) {
  _stepVal = value;
};

exports.getPointStep = function() {
  return _stepVal;
};

exports.stepVal = _stepVal;
```

**NOTE:** A module is created once per Titanium JavaScript context, so if additional contexts are created, new module objects will be created. For more on JavaScript contexts, [see here](/guide/Titanium_SDK/Titanium_SDK_How-tos/Cross-Platform_Mobile_Development_In_Titanium/Coding_Strategies/#execution-contexts).

#### Global variables

There shall not be ANY global variables in a Titanium application shared across all modules. Any data a module or any objects exposed by a module require should be passed in during construction or initialization.

## JavaScript module examples

Here are some examples of modules we expect developers to implement:

### Utility libraries

**logger.js**

```javascript
exports.info = function(str) {
    Titanium.API.info(new Date() + ': ' + str);
};

exports.debug = function(str) {
    Titanium.API.debug(new Date() + ': ' + str);
};
```

Usage:

```javascript
var logger = require('logger');
logger.info('some log statement I wanted with a timestamp');
```

### Packages of related functionality

**geo.js**

```javascript
function Point(x,y) {
    this.x = x;
    this.y = y;
}

function Line(start,end) {
    this.start = start;
    this.end = end;
}

Line.prototype.slope = function() {
    return (this.end.y - this.start.y) / (this.end.x - this.start.x);
};

Line.prototype.yIntercept = function() {
    return this.start.y - (this.slope() * this.start.x);
};

// Export the public interface
exports.Point = Point;
exports.Line = Line;
```

Usage:

```javascript
var Geo = require('lib/geo');

var startPoint = new Geo.Point(1, -5);
var endPoint = new Geo.Point(10, 2);

var line = new Geo.Line(startPoint, endPoint);
var slopeValue = line.slope();
```

### Instantiable objects

**Person.js**

```javascript
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.fullName = function() {
    return this.firstName + ' ' + this.lastName;
};

module.exports = Person;
```

Usage:

```javascript
var Person = require('Person');
var johnDoe = new Person('John', 'Doe');
var johnDoeName = johnDoe.fullName(); // "John Doe"
```

### Node.js support

Titanium supports node.js modules and structures the `require()` handling based on the node.js require-specification. Read more about this topic in the [dedicated Node.js guide](/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Node.js_Support/).
