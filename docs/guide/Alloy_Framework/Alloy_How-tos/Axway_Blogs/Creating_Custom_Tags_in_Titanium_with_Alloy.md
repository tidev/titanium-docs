---
title: Creating Custom Tags in Titanium with Alloy
weight: '40'
---

# Creating Custom Tags in Titanium with Alloy

### September 18, 2019 written by Jason Kneen

Titanium when used with Alloy MVC is an incredible fast way to build cross-platform native apps using XML, JavaScript and TSS (Titanium Style Sheets).

Using Alloy means you can separate your content from your styling from your business logic in a way that reduces the amount of JavaScript code you write, making reading the layouts of your views and screens much easier.
```
<Alloy>
    <NavigationWindow>
        <Window class="container">
            <ScrollView layout="vertical">
                <ImageView top="75" class="logo" />
                <View class="insetWithBorder" top="25" height="260">
                    <View layout="vertical" height="Ti.UI.SIZE" top="0">
                        <Label class="insetViewTitle">Sign in</Label>
                        <Label class="insetViewText">Register a new account or sign in with your email and password.</Label>
                        <TextField id="email" top="25" hintText="Email" />
                        <TextField id="password" hintText="Password" />
                    </View>
                    <View class="line" />
                    <Button class="insetViewButton left" onClick="doRegister">Register</Button>
                    <View class="verticalLine" />
                    <Button class="insetViewButton right" onClick="doSignin">Sign-in</Button>
                </View>
            </ScrollView>
        </Window>
    </NavigationWindow>
</Alloy>
```
The view above is a good example of an Alloy view, where it's easy to read through and see the child / parent relationship between elements, and specific layout instructions.

The challenge when it comes to writing cross-platform applications is being able to keep views like this as simple as possible, reducing the amount of platform specific sections or separate platform files.

For an app I'm working on I needed to have a checkbox — a web style checkbox showing a tick. In the past I've always pushed back and advised pushing back to clients who want specific controls that don't “fit” on the platform, but *sometimes* you do need to stick to specific designs and that means writing specialist controls or UI components.

There are a few ways that I could go about writing a checkbox control. I could write the XML directly into the view and the JavaScript to control it in the linked controller. If I do that it's not making my code or control reusable without copying and pasting into another project.

I could write a Widget — this could be shared within another project, but I'd have to copy the folder over, then add it to the dependancies section in the `config.json` — not a big deal or a lot of work but there is a quicker and simpler way.

One of the cool features of Alloy is the ability to redefine or customise Alloy XML tags. For example, you can override the `Label` tag to run your own code that creates a normal label but adds a default color of `#000` so it doesn't appear in white on Android.

You can also completely rewrite tags or write new ones — this is a technique I'm going to use here.

So, the first step is to decide on the name of the tag — I'm going with `CheckBox`. Next, I need to create a new file to handle the creation of the new tag.

I've added a new file called `checkbox.js` in the `app/lib` folder containing:
```
exports.createCheckBox = function (args) {
    return Ti.UI.createView(args);
}
```
Next, I've added the a new line to my `view.xml`:
```
<CheckBox module="checkbox" id="termsAccepted" caption="I agree to the terms of use" />
```
You will notice that the XML includes a property called `module` set to the same name as our file (without the `.js` extension). This tells Alloy for *this* tag, to look in the `checkbox.js` for a function called `createCheckBox`, pass it the arguments from the XML / TSS and to expect back a `Ti.UI.*` based visual component such as a View, Button, Label etc.

I'd like my CheckBox control to do a few things:

1. It needs a border box that displays / hides a tick when clicked
2. It needs a caption that appears to the right of the box
3. The caption needs to be clickable and styled (for showing an underline for terms and conditions)

To do all this, I'll need the CheckBox tag to return a view, and in that view will be the child controls I need. I'll use the CheckBox attributes to pass through styling details, caption text and functions to handle click events.

So firstly, I'll need to add a "wrapper" view that will hold everything:

```
// wrapper for caption and checkbox
var wrapper = Ti.UI.createView({
    top: args.top || 5,
    width: Ti.UI.SIZE,
    height: Ti.UI.SIZE,
    layout: "horizontal",
    left: args.left || 20,
    right: args.right || null,
    checked: args.checked || false
});
```
Notice that I'm creating a view, and taking attributes from the `args` variable, defaulting to my own settings if they are not present.

Next, I need to create the box:
```
// create the box itself
var box = Ti.UI.createView({
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: "#02A9F4"
});
```
Now I need to deal with a caption and if it's been defined, have the caption underlined so I'll need to use an attributed string:
```
// setup attributed string
var attr = Ti.UI.createAttributedString({
    text: args.caption
});

// checks for underline property and
// uses attributed string to style
if (args.underline) {
    attr.applyProperties({
        attributes: [{
            type: Ti.UI.ATTRIBUTE_UNDERLINES_STYLE,
            value: Ti.UI.ATTRIBUTE_UNDERLINE_STYLE_SINGLE,
            range: [0, args.caption.length]
        }]
    })
}

// create the caption
var caption = Ti.UI.createLabel({
    color: "#000",
    attributedString: attr,
    left: 10,
    text: args.caption,
    font: {
        fontSize: 10
    }
});
```
Next, I need to add the tick and in this case I'm using unicode characters in order to avoid having to use an image although you could use an image if you wanted to.
```
// create the tick using unicode
var tick = Ti.UI.createLabel({
    text: "\u2713",
    left: 1,
    color: "#02A9F4",
    font: {
        fontWeight: "bold"},
    visible: false
});
```
To pick up click events I need to add event handlers for the box and the caption:
```
// click event for the caption, in case you want
// to link to something else (e.g. terms etc.)
caption.addEventListener("click" function () {
    wrapper.fireEvent("captionClick";
});

// check on and off the box, update checked
// value and fire a change event
box.addEventListener("click" function () {
    tick.visible = !tick.visible
    wrapper.checked = !wrapper.checked;
    box.fireEvent("change" {
        checked: wrapper.checked
    });
});
```
The the click events I'm handling them both slightly differently. For the box click I'm taking care of changing the state of the tick, updating the `checked` attribute of the wrapper and firing an event that that outside code can use. For the caption click I'm just firing the event.

Finally, I need to add all these components to the wrapper view, and return it at the end of the function:
```
// add all the things
wrapper.add(box)
box.add(tick);
wrapper.add(caption);

return wrapper;
```
Here's the complete `checkbox.js` file:
```
exports.createCheckBox = function (args) {

    // wrapper for caption and checkbox
    var wrapper = Ti.UI.createView({
        top: args.top || 5,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        left: args.left || 20,
        right: args.right || null,
        checked: args.checked || false
    });

    // create the box itself
    var box = Ti.UI.createView({
        width: 15,
        height: 15,
        borderWidth: 1,
        borderColor: "#02A9F4"
    });

    // setup attributed string
    var attr = Ti.UI.createAttributedString({
        text: args.caption
    });

    // checks for underline property and
    // uses attributed string to style
    if (args.underline) {
        attr.applyProperties({
            attributes: [{
                type: Ti.UI.ATTRIBUTE_UNDERLINES_STYLE,
                value: Ti.UI.ATTRIBUTE_UNDERLINE_STYLE_SINGLE,
                range: [0, args.caption.length]
            }]
        })
    }

    // create the caption
    var caption = Ti.UI.createLabel({
        color: "#000",
        attributedString: attr,
        left: 10,
        text: args.caption,
        font: {
            fontSize: 10
        }
    });

    // create the tick using unicode
    var tick = Ti.UI.createLabel({
        text: "\u2713",
        left: 1,
        color: "#02A9F4",
        font: {
            fontWeight: "old"},
        visible: false
    });

    // click event for the caption, in case you want
    // to link to something else (e.g. terms etc.)
    caption.addEventListener("click" function () {
        wrapper.fireEvent("captionClick";
    });

    // check on and off the box, update checked
    // value and fire a change event
    box.addEventListener("click" function () {
        tick.visible = !tick.visible
        wrapper.checked = !wrapper.checked;
        box.fireEvent("change" {
            checked: wrapper.checked
        });
    });

    // add all the things
    wrapper.add(box)
    box.add(tick);
    wrapper.add(caption);

    return wrapper;
}
```
That's it! By updating my `view.xml` to the following:
```
<CheckBox module="checkbox" id="termsAccepted" onCaptionClick="doShowTerms" underline="true" caption="I agree to the terms of use" />       
```
I can show a cross-platform CheckBox on iOS and Android, the user can click the terms and conditions text and I can respond to that click, and when they click the box it will update the `checked` property.

There's so much more you can do with custom tags; building custom TextFields that support icons, error handling, or creating an Accordion tag to collapse / show its contents.

Creating custom Alloy tags is an incredibly powerful way to build a suite of controls to use in your projects that are as easy to use as dropping into the `lib` folder. You can even make it easy to use in views by updating the `Alloy` tag:
```
<Alloy module="ui">
```
Once you've made that change, Alloy will check your `app/lib/ui.js` file for any override or new controls and if not found, it'll use the default Alloy implementation.

So with a single file (or collection of files for different tags) you can write testable cross-platform components that can be easily reused across your apps and projects.

Also worth mentioning you can invoke this control without using Alloy and in a normal JavaScript file — just use:
```
var checkbox = require("checkbox").createCheckBox(args);
```
Have you created any custom tags or customised tags or created widgets for UI controls? Point us to some of your examples and you could feature in our “Featured Modules and Widgets” blog posts.
* [Back to Axway Blogs](/guide/Alloy_Framework/Alloy_How-tos/Axway_Blogs/)
