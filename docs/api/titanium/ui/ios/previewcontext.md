# Titanium.UI.iOS.PreviewContext

<ProxySummary/>

## Overview

The PreviewContext is created by the <Titanium.UI.iOS.createPreviewContext> method. You must set
the `pop` and `preview` properties when creating a `PreviewContext` object.

Use this class to configure the previewing context which is displayed while "peeking" a view.

Note: This feature requires iOS 9 and a 3D-Touch capable device (such as iPhone 6S or iPhone 6S Plus).
You cannot test 3D touch on the iOS simulator.
To check if the current device supports 3D touch, use the <Titanium.UI.iOS.forceTouchSupported>
property and consider using the `longpress` event to provide a fallback to your users on
non-3D-touch devices.

See also:

* [iOS Developer Library: Adopting 3D Touch on iPhone](https://developer.apple.com/library/content/documentation/UserExperience/Conceptual/Adopting3DTouchOniPhone/3DTouchAPIs.html)

## Examples

### PreviewContext example using a Button as receiver.

The example below creates a new preview context and assigns a `window`, `actions` and a `contentHeight`.
After that, we assign the preview context to a view which will trigger the "peeking" of it. Note, that this
is independent from the click event of the view itself.

    var actions = [];
    var win = Ti.UI.createWindow({
        backgroundColor: "white"
    });

    // The view to be previewed while popping.
    var previewView = Ti.UI.createView({
        backgroundColor: "blue"
    });

    // The window to be opened after popping the preview.
    var detailWindow = Ti.UI.createWindow({
        backgroundColor: "yellow"
    });

    detailWindow.add(Ti.UI.createLabel({
        text: "You made it!"
    }));

    // The actions to be added to the preview context.
    var action = Ti.UI.iOS.createPreviewAction({
        title: "Preview Action",
        style: Ti.UI.iOS.PREVIEW_ACTION_STYLE_DEFAULT
    });

    action.addEventListener("click", function(e) {
        alert("Title: " + e.title + " / Style: " + e.style+" / Index: " + e.index);
    });

    var subAction = Ti.UI.iOS.createPreviewAction({
        title: "Preview Subaction"
    })

    subAction.addEventListener("click", function(e) {
        alert("Title: " + e.title + " / Style: " + e.style+" / Subindex: " + e.index);
    });

    var actionGroup = Ti.UI.iOS.createPreviewActionGroup({
        title: "More actions...",
        style: Ti.UI.iOS.PREVIEW_ACTION_STYLE_DESTRUCTIVE,
        actions: [subAction]
    });

    actions.push(action);
    actions.push(actionGroup);

    // Create the preview context
    var context = Ti.UI.iOS.createPreviewContext({
        preview: previewView,
        actions: actions, // Can have both Ti.UI.iOS.PreviewAction + Ti.UI.iOS.PreviewActionGroup
    	 contentHeight: 300 // When unspecified, we use the available height
    });

    // Fired after popping the preview
    context.addEventListener("pop", function(e) {
        detailWindow.open();
    });

    // Assign the preview context
    var button = Ti.UI.createButton({
        previewContext: context, // Will be ignored on unsupported devices
        title : "Open Window!",
        backgroundColor: "#A6171C",
        width: 200,
        height: 50,
        tintColor: "#fff"
    });

    win.add(button);
    win.open();

### PreviewContext example using a ListView as receiver.

var actions = [];
var win = Ti.UI.createWindow({
    backgroundColor: "white"
});

// The view to be previewed while popping.
var previewView = Ti.UI.createView({
    backgroundColor: "blue"
});

// The window to be opened after popping the preview.
var detailWindow = Ti.UI.createWindow({
    backgroundColor: "yellow"
});

detailWindow.add(Ti.UI.createLabel({
    text: "You made it!"
}));

// The actions to be added to the preview context.
var action = Ti.UI.iOS.createPreviewAction({
    title: "Preview Action",
    style: Ti.UI.iOS.PREVIEW_ACTION_STYLE_DEFAULT
});

action.addEventListener("click", function(e) {
    alert(
        "Title: " + e.title +
        "\nStyle: " + e.style +
        "\nIndex: " + e.index +
        "\nSectionIndex: " + e.sectionIndex +
        "\nItemIndex: " + e.itemIndex
    );
});

actions.push(action);

// Create the preview context
var context = Ti.UI.iOS.createPreviewContext({
    preview: previewView,
    actions: actions, // Can have both Ti.UI.iOS.PreviewAction + Ti.UI.iOS.PreviewActionGroup
    contentHeight: 300 // When unspecified, we use the available height
});

// Fired after peeking the preview
// Use this event to configure the preview depending on the sectionIndex / itemIndex
context.addEventListener("peek", function(e) {
    Ti.API.warn("sectionIndex: " + e.sectionIndex);
    Ti.API.warn("itemIndex: " + e.itemIndex);
});

// Fired after popping the preview
context.addEventListener("pop", function(e) {
    detailWindow.open();
});

// Assign the preview context
var listView = Ti.UI.createListView({
    previewContext: context, // Will be ignored on unsupported devices
});

var section1 = Ti.UI.createListSection({
    headerTitle: "Section 1"
});

var section2 = Ti.UI.createListSection({
    headerTitle: "Section 2"
});

var items = [];

for(var i = 1; i <= 5; i++) {
    items.push({
        properties: {
            title: "Cell #" + i
        }
    });
}

section1.setItems(items);
section2.setItems(items);
listView.setSections([section1, section2]);

win.add(listView);
win.open();

<ApiDocs/>
