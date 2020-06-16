---
title: Built-ins
weight: '10'
---

# Built-ins

Demonstrates use of several built-in libraries included with Alloy that simplify certain functions, such as animations, string manipulation and display unit conversion.

::: tip 💡 App Folder Location
[alloy/samples/apps/**basics/builtins**](https://github.com/appcelerator/alloy/tree/master/samples/apps/basics/builtins)
:::

Alloy includes several [built-in libraries](#!/api/Alloy.builtins). To use these libraries in your project, you simply use the global `require()` function to include them. The sample demonstrates the [animation](#!/api/Alloy.builtins.animation) built-in's shake, flash, and flip features, and the [string](#!/api/Alloy.builtins.string) built-in's `trim()` function.

![ios](./ios.png)

The index.xml file defines the views to animate and assigns event handlers to their `onClick` handlers, which are defined in index.js.

**app/views/index.xml**

```xml
<Alloy>
    <Window>
        <View id="mover">
            <Label id="label">\t\t Trimmable String \t\t</Label>
        </View>
        <Button id="shake" onClick="shake">Shake</Button>
        <Button id="flash" onClick="flash">Flash</Button>
        <Button id="trim" onClick="trim">Trim</Button>
        <View class="flipper" platform="ios">
            <Label id="back" onClick="flip"/>
            <Label id="front" onClick="flip"/>
        </View>
    </Window>
</Alloy>
```

The view-controller assigns the animation library to a local variable named `animation` and then calls its various function in response to user input.

**app/controllers/index.js**

```javascript
var animation = require('/alloy/animation'),
    string = require('/alloy/string');

function shake(e) {
    animation.shake($.mover, 0, function (){
      alert("Shake ended.");
    });
}

function flash(e) {
    animation.flash($.mover);
}

function trim(e) {
  $.label.text = string.trim($.label.text);
}

if (OS_IOS) {
  function flip(e) {
    var front, back;
    e.bubbleParent = false;
    if (e.source === $.back) {
      front = $.back;
      back = $.front;
    } else {
      front = $.front;
      back = $.back;
    }
    animation.flipHorizontal(front, back, 500, function(e) {
      Ti.API.info('flipped');
    });
  }
}
$.index.open();
```

**app/styles/index.tss**

```javascript
'#index': {
  backgroundColor: '#fff',
  modal: false,
  exitOnClose: true,
  layout: 'vertical'
}

'#mover': {
  backgroundColor: '#a00',
  height: Ti.UI.SIZE,
  width: Ti.UI.SIZE,
  top: '20dp'
}

'#label': {
  color: '#eee',
  font: {
    fontSize: '28dp',
    fontWeight: 'bold'
  }
}

'.flipper': {
  height: 150,
  width: 150,
  top: 40,
  borderWidth: 1,
  borderColor: '#00f'
}

'#front': {
  text: 'front',
  color: '#000',
  backgroundColor: '#ccc',
  textAlign: 'center',
  height: Ti.UI.FILL,
  width: Ti.UI.FILL
}

'#back': {
  text: 'back',
  color: '#ccc',
  backgroundColor: '#000',
  textAlign: 'center',
  height: Ti.UI.FILL,
  width: Ti.UI.FILL
}

'Button': {
  width: Ti.UI.SIZE,
    height: Ti.UI.SIZE,
    color: '#000',
    top: '20dp'
}
```
