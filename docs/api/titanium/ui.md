# Titanium.UI

<ProxySummary/>

## Overview

The UI module is responsible for native user-interface components and interaction inside
Titanium.  The goal of the UI module is to provide a native experience along with native
performance by compiling Javascript code into their native counterparts as part of the
build process.

### Design

The UI module is broken down into 3 major area:

* **Views** - [Views](Titanium.UI.View) are containers that host visual elements such as
controls or other views.  Views can have their properties customized, such as their border color
and radius, can fire events such as swipe events or touches, and can optionally contain a
hierarchy or other views as children. In Titanium, most views are specialized to perform both a
visual function and set of interaction behaviors such as [Table View](Titanium.UI.TableView) or
[Coverflow View](Titanium.UI.iOS.CoverFlowView).  Views are always named with the suffix `View`.

* **Controls** - controls, or sometimes referred as widgets, are visual elements such as
[sliders](Titanium.UI.Slider),  [buttons](Titanium.UI.Button) and [switches](Titanium.UI.Switch).
They provide a visual element which has a defined behavior and typical have special
configuration and special events.  Controls themselves are views and also inherit a views
properties, functions and events.

* **Windows** - [Windows](Titanium.UI.Window) are typically top-level visual constructs that are
the main part of your interface. An application will always have at least one window and windows
can take different shapes and sizes, can have display and interaction properties such as
fullscreen or modal and can be customized, such as changing their opacity or background color.
Windows themselves are views and also inherit a views properties, functions and events. There
are a few specialization of Windows such as a [Tab Group](Titanium.UI.TabGroup) which offer
additional behavior beyond the basic Window.

Titanium uses the [Factory Pattern](http://en.wikipedia.org/wiki/Factory_method_pattern) for
constructing objects and a general naming pattern for APIs.  For example, to construct a
[Alert Dialog](Titanium.UI.AlertDialog), you call the method <Titanium.UI.createAlertDialog>.
To create a [TextArea](Titanium.UI.TextArea), you call the method <Titanium.UI.createTextArea>.
Once an object is created, it will be available until it goes out of scope.

### Optimizations

UI objects are optimized by Titanium to not be realized into the drawing context and placed into
the device UI surface until needed.  That means that you can create UI objects, set their
properties and add them to their hierarchy without much worry about memory or performance.
When the native drawing surface needs to render a specific view or control, Titanium will
automatically create the view as needed.  Additionally, Titanium is optimized to also release
memory once the view is no longer needed, on screen or in low memory situations.  However, it's
a good idea to help Titanium along in certain cases where you are no longer using objects.  For
example, you should call `close` on a [Window](Titanium.UI.Window) instance when you are no
longer using it.  You can safely call `open` on the window again to re-open it.

### Global Context and Threading

Be careful with the objects that are created in `app.js` but only used once. Since the `app.js`
context is global and generally is not garbage collected until the application exits, you
should think about the design of your application as it relates to this fact.

[Window](Titanium.UI.Window) objects that are opened up with the `url` property to another
JavaScript file provide a nice way to decompose your application into smaller units.

Additionally, Window objects created with a `url` value run in a separate JavaScript context
and thread. While all UI processing is done on the main UI thread, other processing inside
a Window or the `app.js` that does not have UI interaction will run in its own thread.

The other benefit of using the `url` property is that when the window is closed, resources
allocated in the window's context can be immediately cleaned up, saving resources such as
memory and CPU.

For more information, see the sections "Sub-contexts" and "Passing Data Between Contexts" on the
[Window](Titanium.UI.Window) reference page.

### Portability

Titanium components are designed to be portable across as many platforms as it supports.
However, there are cases where a device either does not support a specific feature or capability
or where it support additional functionality.  For cases where the device OS supports
capabilities that other platforms do not, we attempt to place those capabilities in a separate
namespace, such as <Titanium.UI.iPhone>. However, in cases where the control is in a common
namespace and support additional features, we continue to place that functionality directly on
the object.

### Events

Event listeners must be defined before their respective events are likely to be fired, otherwise
they are not guaranteed to be called. The open and focus [Window](Titanium.UI.Window) event
listeners, for instance, must be defined before the window is opened.

Evaluating events as late as possible while bearing the above consideration in mind, however,
can significantly improve application responsiveness. For example, an event listener for a
click event may be defined after the parent window has been opened.

### Colors

Many UI components have properties that control their color.

Colors may be specified as a hex triplet to determine the red, green and blue channels. Thus,
`'#000000'` is specified for black, `'#ff0000'` for red, `'#00ff00'` for green, `'#0000ff'` for
blue, and `'#ffffff'` for white, etc. A channel may be abbreviated when its two hex digits are
identical, such as `'#000'`, `'#f00'`, `'#0f0#'`, `'#00f'` and `'#fff'` for the above colors,
respectively.

An additional alpha channel is supported as a prefix to the hex triplet. So, to make
the purple-like color `'#ff00ff'` semi-opaque, you could use an alpha value of `'55'`, giving,
`'#55ff00ff'` or `'#5f0f'`.

Note that while the pound symbol, `#`, is not mandatory on iOS when using the hex triplet format,
it is recommended to include it to provide compatibility with other platforms.

iOS also accepts colors specified in the form, `rgb(R,G,B)` and `rgba(R,G,B,A)`, with the color
channels inside the parethesis represented by integer numbers between `0` and `255` and the
alpha channel by a float number between `0` and `1.0` (transparent to opaque, respectively).
For example, an opaque purple could be obtained using `'rgb(255,0,255)'` and a semi-opaque purple
using `'rgba(255,0,255,0.3)'`. Note that although this format will work if the `rgb` or `rgba`
prefix is omitted, this is not officially supported and thus not recommended.

Alternatively, the following set of color names are recognized.

`'aqua'`, `'black'`, `'blue'`, `'brown'`, `'cyan'`, `'darkgray'`, `'fuchsia'`, `'gray'`,
`'green'`, `'lightgray'`, `'lime'`, `'magenta'`, `'maroon'`, `'navy'`, `'olive'`, `'orange'`,
`'pink'`, `'purple'`, `'red'`, `'silver'`, `'teal'`, `'white'`, `'yellow'`.

All color properties also accept a value of `'transparent'`.

On Android, if you want to create a semi-transparent window, set the `opacity`
property **before** opening the window.

On iOS, you can set a global tinting using <Titanium.UI.tintColor>. All child views will inherit
the tint color by default and are able to override the color using `tintColor` on their own views.
The default `tintColor` on iOS is the blue (system-color).

If a color property is undefined, the default color of the particular UI element is applied.
If a color value is not valid on iOS, the default color is applied, whereas, on Android, the
color yellow is applied.

## Examples

### Color Demo

The following example demonstrates all the color formats, and color names, that are intended
to be supported by Titanium. See the [description](Titanium.UI) section for details.

    var colorArray = [
      '#ff00ff', '#f0f', 'rgb(255,0,255)',
      'transparent', '#55ff00ff', '#5f0f', 'rgba(255,0,255,0.3)',
      'aqua', 'black', 'blue', 'brown', 'cyan', 'darkgray', 'fuchsia', 'gray', 'green',
      'lightgray', 'lime', 'magenta', 'maroon', 'navy', 'olive', 'orange', 'pink',
      'purple', 'red', 'silver', 'teal', 'white', 'yellow',
    ];
    var win = Ti.UI.createWindow({
      backgroundColor: 'black',
      exitOnClose: true,
      fullscreen: false,
      layout: 'vertical',
      title: 'Color Demo'
    });
    var rows = [];
    var row;
    for (var i=0, ilen = colorArray.length; i < ilen; i++){
      row = Ti.UI.createTableViewRow({
        color:'black',
        backgroundColor: colorArray[i],
        title: colorArray[i],
        height: 40
      });
      rows.push(row);
    }
    var table = Ti.UI.createTableView({
      data: rows,
      backgroundColor: 'white'
    });
    win.add(table);
    win.open();

<ApiDocs/>
