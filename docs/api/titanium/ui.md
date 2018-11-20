---
title: Titanium.UI
breadcrumbLabel: UI
sidebar: auto
---

<Breadcrumb/>

# Titanium.UI

<ProxySummary/>

## Overview

The UI module is responsible for native user-interface components and interaction inside Titanium. The goal of the UI module is to provide a native experience along with native performance by compiling Javascript code into their native counterparts as part of the build process.

### Design
The UI module is broken down into 3 major area:

#### Views
Views are containers that host visual elements such as controls or other views. Views can have their properties customized, such as their border color and radius, can fire events such as swipe events or touches, and can optionally contain a hierarchy or other views as children. In Titanium, most views are specialized to perform both a visual function and set of interaction behaviors such as Table View or Coverflow View. Views are always named with the suffix View.

#### Controls
Controls, or sometimes referred as widgets, are visual elements such as sliders, buttons and switches. They provide a visual element which has a defined behavior and typical have special configuration and special events. Controls themselves are views and also inherit a views properties, functions and events.

#### Windows
Windows are typically top-level visual constructs that are the main part of your interface. An application will always have at least one window and windows can take different shapes and sizes, can have display and interaction properties such as fullscreen or modal and can be customized, such as changing their opacity or background color. Windows themselves are views and also inherit a views properties, functions and events. There are a few specialization of Windows such as a Tab Group which offer additional behavior beyond the basic Window.

### Creating Titanium Objects
Titanium uses the Factory Pattern for constructing objects and a general naming pattern for APIs. For example, to construct a Alert Dialog, you call the method `Ti.UI.createAlertDialog`. To create a TextArea, you call the method `Ti.UI.createTextArea.` Once an object is created, it will be available until it goes out of scope.

### Optimizations
UI objects are optimized by Titanium to not be realized into the drawing context and placed into the device UI surface until needed. That means that you can create UI objects, set their properties and add them to their hierarchy without much worry about memory or performance. When the native drawing surface needs to render a specific view or control, Titanium will automatically create the view as needed. Additionally, Titanium is optimized to also release memory once the view is no longer needed, on screen or in low memory situations. However, it's a good idea to help Titanium along in certain cases where you are no longer using objects. For example, you should call close on a Window instance when you are no longer using it. You can safely call open on the window again to re-open it.

### Global Context and Threading <Badge text="STILL VALID?" type="warn"/>
Be careful with the objects that are created in app.js but only used once. Since the app.js context is global and generally is not garbage collected until the application exits, you should think about the design of your application as it relates to this fact.

Window objects that are opened up with the url property to another JavaScript file provide a nice way to decompose your application into smaller units.

Additionally, Window objects created with a url value run in a separate JavaScript context and thread. While all UI processing is done on the main UI thread, other processing inside a Window or the app.js that does not have UI interaction will run in its own thread.

The other benefit of using the url property is that when the window is closed, resources allocated in the window's context can be immediately cleaned up, saving resources such as memory and CPU.

For more information, see the sections "Sub-contexts" and "Passing Data Between Contexts" on the Window reference page.

### Portability
Titanium components are designed to be portable across as many platforms as it supports. However, there are cases where a device either does not support a specific feature or capability or where it support additional functionality. For cases where the device OS supports capabilities that other platforms do not, we attempt to place those capabilities in a separate namespace, such as Titanium.UI.iPhone. However, in cases where the control is in a common namespace and support additional features, we continue to place that functionality directly on the object.

### Events
Event listeners must be defined before their respective events are likely to be fired, otherwise they are not guaranteed to be called. The open and focus Window event listeners, for instance, must be defined before the window is opened.

Evaluating events as late as possible while bearing the above consideration in mind, however, can significantly improve application responsiveness. For example, an event listener for a click event may be defined after the parent window has been opened.

<ApiDocs/>