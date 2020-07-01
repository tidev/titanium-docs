---
title: JavaScript Development Primer
weight: '30'
---

# JavaScript Development Primer

## Objective

In this section, you will take a brief look at JavaScript development and the resources you might explore to expand your JavaScript skills.

## Overview

JavaScript is a powerful, lightweight and dynamic object-oriented programming language. It is one of the most widely deployed in the world, being shipped with every major web browser, giving it a good pedigree for cross-platform client development. It is leveraged by some of the largest and diverse communities of programmers, meaning there is never likely to be a shortage of skills. These are just some of the reasons that support why JavaScript was chosen as the language of choice for Titanium.

While Javascript popularity stems from its strong web browser presence, it has become much more than a tool for web interactivity. Many people are building servers, games, productivity tools and every other type of app conceivable with Javascript. Here's a short list of what Javascript has been doing lately.

* Every major web browser supports JavaScript; most supporting one of the standardized ECMAScript versions

* Node.js is an event-driven server-side JavaScript implementation, supporting asynchronous I/O for high performance web applications

* OpenOffice supports JavaScript (among other languages) for scripting the suite's applications

* Various supersets of JavaScript or higher-level languages seek to standardize programming patterns, add advanced features, and so forth. Systems like CoffeeScript, Objective-J, Quby, and more "compile" to JavaScript for broadest possible support in the web browser

* Titanium is, of course, a JavaScript framework for mobile app development (see [ECMA-262-5 Compliance](#undefined) for more info on language support and standards compliance).

Here are a few of the features of the language that make it a favorite among its developers:

* Dynamic typing (which allows [Duck typing](http://en.wikipedia.org/wiki/Duck_typing))

* [Functional programming](http://en.wikipedia.org/wiki/Functional_programming)

* Convenient object literal notation

* A small set of standard functions and syntactical elements - learn the whole language in a day!

* [Closures](http://en.wikipedia.org/wiki/Closure_(computer_science))

## JavaScript Resources

JavaScript can be a truly powerful tool when you've learned to how to master it. Teaching JavaScript is outside of the scope of our documentation. So, here are a few resources to help you get started.

### Online and virtual courses

The following is an alphabetical list of online JavaScript course offerings that you might find helpful.

* [Codecademy](http://www.codecademy.com/#!/exercise/0) is a interactive scripting tutorial site with both free and paid courses

* [JavaScript Master Class](http://javascriptmasterclass.com/) is an online course offered by Amy Hoy & Thomas Fuchs. You'll need to register and pay for this course but seems to get good reviews.

* Stanford's CS101 course uses JavaScript, lecture notes and projects are available at [http://www.stanford.edu/class/cs101/](http://www.stanford.edu/class/cs101/)

* [Udemy](http://www.udemy.com/search?q=javascript) offers paid and free video-based courses on JavaScript and other topics

* Take free online courses in JavaScript and programming for the web from top universities and institutions including Microsoft and W3C from [edX](https://www.edx.org/learn/javascript)

### Online Books and Resources

The following are some recommended JavaScript resources, freely-available on the web, that you will likely want to refer to while you build your Titanium application.

* [Eloquent JavaScript](http://eloquentjavascript.net/) is an excellent learning resource that is available as an interactive website, downloadable HTML file, or printed book

* Mozilla maintains an [excellent JavaScript documentation site](https://developer.mozilla.org/en/javascript), which very conveniently leaves out the DOM-specific programming tasks (which you'll rarely use in a native Titanium application). The MDC JavaScript site provides two key elements - an [API doc source for JavaScript object types](https://developer.mozilla.org/en/JavaScript/Reference) and an [introduction to programming JavaScript in general](https://developer.mozilla.org/en/JavaScript/Guide). The JavaScript Guide will contain some browser-specific items that aren't included in the Titanium JavaScript environment, but the core techniques will be the same.

* Considered by many to be the premier JavaScript expert in the world, Douglas Crockford maintains a listing of JavaScript resources [on his personal website](http://javascript.crockford.com/), all of which are definitely worth checking out. Many technologies pioneered by Crockford are embedded in Titanium in one way or another, including his [JSLint code validator](http://www.jslint.com/) and [public domain JSON serialization library](http://www.json.org/).

* [JavaScript in 10 minutes](https://github.com/spencertipping/js-in-ten-minutes) is a terse and dense guide to advanced JavaScript. It's not for the beginner, but it's packed full of tips, tricks, and inside-knowledge for the more advanced JavaScripter.

* Google, a major purveyor of JavaScript awesomeness, has published [a set of JavaScript code style guidelines](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml). Following these guidelines is certain to make your Javascript code more effective and maintainable.

* [Learning Advanced JavaScript](http://ejohn.org/apps/learn/) from John Resig, the creator of jQuery. As you can see from its [stated goal](http://ejohn.org/apps/learn/#2), this is advanced stuff to be studied once you master the basics.

### Print Books

Here are a few good books to get you started. These should be considered required reading for those serious about understanding Javascript and leveraging it to its full capacity.

* [JavaScript: The Good Parts](http://oreilly.com/catalog/9780596517748/), by Douglas Crockford

* [JavaScript: The Definitive Guide](http://oreilly.com/catalog/9780596805524/), by David Flanagan

* [JavaScript Patterns](http://oreilly.com/catalog/9780596806767), by Stoyan Stefanov

* [Eloquent JavaScript](http://www.amazon.com/gp/product/1593272820?ie=UTF8&tag=marijhaver-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=1593272820), by Marijn Haverbeke

## A few best practices

There's a large number of good references on JavaScript best practices available but, especially for developers coming to Titanium with a limited background in it, we'd like to share the most important to ensure high-quality applications.

### Don't pollute the global scope!

In a JavaScript execution context, all variables are global by default. The only means of scoping variables is to place them inside of a function. (Within a function, if you don't include the `var` keyword, your variables will be treated as global variables.) A much better approach than global variables/functions is to enclose all your application's API functions and properties into a single variable (namespace). This will minimize the chances of your code colliding with other code or libraries you include in the context later.

**app.js**

```javascript
// BAD - we put five variables in the global scope which could be clobbered
var key = 'value',
    foo = 'bar',
    charlie = 'horse';

function helper() {
    //help out
}

function info(msg) {
    helper(msg);
    Ti.API.info(msg);
}

// Better - define a single namespace to hold all your variables
var myapp = {}; // namespace and only global variable
myapp.key = 'value';

/* Or, define the namespace and a few variables all at once with
var myapp = {
    key: 'value',
    foo: 'bar',
    charlie: 'horse'
};
*/

// add a function to your namespace
myapp.dosomething = function(foo) {
  // do something
};

// extend and encapsulate by using self-calling functions
(function() {
    function helper() {
        // this is a private function not directly accessible from the global scope
    }

    myapp.info = function(msg) {
    // added to the app's namespace, so a public function
        helper(msg);
        Ti.API.info(msg)
    };
})();
// you could then call your function with
myapp.info('Hello World');
```

### Use === and !== instead of == and !=

JavaScript will automatically convert values in a conditional test unless you tell it not to.

```javascript
var testme = '1';

if (testme == 1) {
  // this will be executed because '1' is converted to an integer!
}
```

Called by some the "Compare, damn it!" operator, `===` performs what a `==` operator might in other languages. If the two operands are equal in _both_ type and value, `===` will return true and `!==` will return false, which is almost always what you mean. This is a common gotcha and fits nicely in the category of JavaScript language quirks.

```javascript
var testme = '1';

if (testme === 1) {
  // this will not be executed
}
```

### Ternary operator

JavaScript ternary operator is a handy way of turning a conditional block into a single statement. This lets you conditionally assign a value to a variable or object property. The value after the `?` is assigned if the conditional statement is `true`. The value after the `:` is assigned if the conditional statement is `false`.

```javascript
// You could do this
if (somecondition === somevalue) {
  var xyz = 'abc';
} else {
  var xyz = '123';
}

// but this is more compact
var xyz = (somecondition === somevalue) ? 'abc' : '123';
```

### Lots of variables? Use a comma

You don't need to put `var` in front of every variable - you can use commas to replace:

```javascript
var foo = true;
var me = 'awesome';
```

with

```javascript
var foo = true, me = 'awesome';
```

### Efficient loops

In most situations, checking the length of an array during every iteration can be slow. Moreso when working with Titanium proxy objects (that represent some native structure). So rather than writing:

```javascript
var names = ['Jeff','Nolan','Marshall','Don'];

for (var i=0; i < names.length; i++) {
    process(names[i]);
}
```

It is better to only get the length of the array only once, as in:

```javascript
var names = ['Jeff','Nolan','Marshall','Don'];

for (var i=0,j=names.length; i<j; i++) {
    process(names[i]);
}
```

### Wrap self-calling functions in parenthesis

[Self-calling functions](http://2007-2010.lovemikeg.com/2008/08/17/a-week-in-javascript-patterns-self-invocation/) are a useful pattern for encapsulating private variables and functions in JavaScript. As you start to realize the utility of self-calling functions, you may be tempted to write a self-calling function as:

```javascript
var myValue = function() {
    //do stuff
    return someValue;
}();
```

While syntactically correct, someone reading this code (missing the () at the end of the function declaration) might think you are assigning a function to `myValue`, rather than the return value of the function. A better way to write this is with wrapping parentheses:

```javascript
var myValue = (function() {
    //do stuff
    return someValue;
})();
```

In this case, it is more clear that `myValue` is not a function, but the return value of the function.

### Summary

You briefly looked at JavaScript development and the resources you might explore to expand your JavaScript skills. This was a lightning fast assessment of coding style and practices that will aid in becoming a better Javascript developer. It is far from a comprehensive list, though, and is not meant to be training material per se. It is highly recommended that you go out and get at least one, if not all of the books mentioned in order to gain a true understanding of the scope and power of the language.
