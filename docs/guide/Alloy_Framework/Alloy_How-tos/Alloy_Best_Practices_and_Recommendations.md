---
title: Alloy Best Practices and Recommendations
weight: '10'
---

# Alloy Best Practices and Recommendations

This guide provides recommendations for writing Alloy applications. This guide supplements the existing Titanium SDK [Best Practices and Recommendations](/guide/Titanium_SDK/Titanium_SDK_Guide/Best_Practices_and_Recommendations/) guide with a primary focus on the [Coding Best Practices](/guide/Titanium_SDK/Titanium_SDK_Guide/Best_Practices_and_Recommendations/Coding_Best_Practices/) and [Style and Conventions](/guide/Titanium_SDK/Titanium_SDK_Guide/Best_Practices_and_Recommendations/Style_and_Conventions/) pages.

## Titanium-to-Alloy Guidance

### In my Titanium application, I previously loaded libraries upon startup. In organizing my patterns with MVC, do I need to organize application functionality further under namespaces within controllers?

Not unless you want to. If you have a pre-existing set of functionality that you want to make available globally throughout your app, there is no reason to further sub-categorize it unless it serves you in terms of organization or scalability. There is nothing preventing you from requiring your pre-existing modules in all your Alloy controllers, or even making a single global reference to your module that can be referenced throughout your app. For example:

**apps/alloy.js**

```javascript
// Alloy.Globals.refToYourModule will be available in all controllers
Alloy.Globals.refToYourModule = require('yourModule');
```

### Are there best practices to employ within controllers for performance?

The same best practices that apply to traditional Titanium development still apply in the world of Alloy. In fact, everything you can do in traditional Titanium development you can do in Alloy's controllers. Use the [Coding Best Practices](/guide/Titanium_SDK/Titanium_SDK_Guide/Best_Practices_and_Recommendations/Coding_Best_Practices/) you learned with traditional Titanium development in Alloy. That said, the best trick you can use now is taking advantage of the compiler directives to speed up runtime performance. Refer to [Alloy Controllers: Conditional Code](/guide/Alloy_Framework/Alloy_Guide/Alloy_Controllers/#ConditionalCode).

### Is there a best practice that I should use to help out Alloy for my own organization here, as I did in the standard Titanium applications?

It depends on the size and depth of your existing organization. You need to determine if it makes sense to bend Alloy around your existing organization, or bend your existing organization around Alloy. One of the driving forces behind Alloy was a need to standardize the many disparate Titanium coding methodologies out there. In doing so, your projects will be cleaner and more in line with best practices, but also give it a familiar feel and structure that makes it easier for other developers to help and contribute.

## Coding Style Best Practices

### Naming Conventions

* Do not use double underscore prefixes on variables, properties, or function names (e.g., `__foo`). They are reserved for use in Alloy. If you use them, there is potential for conflicts and unexpected behavior.

* Do not use JavaScript reserved words as IDs. For a complete list, see [Reserved Words](/guide/Titanium_SDK/Titanium_SDK_Guide/Best_Practices_and_Recommendations/Reserved_Words/).

### Global Variables

* Do not declare global variables in app.js and use them in other files. Such usage is currently allowed but not recommended, and it will be deprecated in the future. Users who wish to use globals in Alloy applications can declare the following in their JS files:

```javascript
var Alloy = require('alloy'), Backbone = require('alloy/backbone'), _ = require('alloy/underscore')._;
```

As an example:

```javascript
if (typeof Alloy === 'undefined') {
    var Alloy = require('alloy');
}
if (typeof Backbone === 'undefined') {
    var Backbone = require('alloy/backbone');
}
if (typeof _ === 'undefined') {
    var _ = require('alloy/underscore')._;
}

var loading = Alloy.createWidget("com.appcelerator.loading");
```

### Global Events

Although you can use `Ti.App.fireEvent('name')` to call an event declared as `Ti.App.addEventListener('name', functionAttached)`, this is not recommended at all because this will cross the bridge between native and JavaScript lands, which involves some steps you will not be noticed about, but that bad managed can finish in memory leaks and, in any case, slower processes.

Instead of that, you can use better approaches, depending on the problem you are addressing:

* If you have the classic problem communication between a master - child screens (you need that a child event triggers something in the parent), then use the callback approach: you can pass a function to be called as a callback when needed:

```javascript
//master.js
...
function openChild() {
    Alloy.createController('child', {callback: refreshData});
}
function refreshData(value) {
  // Do the refresh part of master here
}
...

//child.js
...
var args = arguments[0] || {};

function refreshParent() {
    // You can pass here a return value to the parent
  args.callback(true);
}
...
```

* If you need to communicate between different parts of the app, then use the Backbone dispatcher approach: create a global object with Backbone capabilities. You can do either, declare it in a file and require it when needed or, more practical, create it in `alloy.js` file to be available to all your project. Another advantage of use the Backbone approach is that you can cancel the events in any place because are global:

```javascript
//alloy.js
...
Alloy.Events = _.clone(Backbone.Events);
...

//controller_a.js
...
// Prepare a "listener" to execute some work when called
Alloy.Events.on('updateMainUI', refreshData);  // Instead of use Ti.App.addEventListener('updateMainUI', refreshData);

function refreshData(value) {
  // Do what you need here
    // Maybe a "onetime use" event? you can deactivate it here by calling Alloy.Events.off('updateMainUI');
}

// Remember to disable it when no needed (probably when you close your controller) to avoid memory leaking problems
$.controller_a.addEventListener('close', function() {
    Alloy.Events.off('updateMainUI');
});
...

//controller_b.js
...
// Call the "listener" to execute the work
Alloy.Events.trigger('updateMainUI');  // Instead of use Ti.App.fireEvent('updateMainUI');
...
```

**Note:** in the first example, Alloy c ontrollers are Backbone event dispatchers as well. So you could do also `Alloy.createController('child').on('refresh', refreshData)` to get the same behavior of a callback approach but with Backbone approach, and then trigger the event when you need it.
