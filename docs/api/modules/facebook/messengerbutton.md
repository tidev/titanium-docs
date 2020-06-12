# Modules.Facebook.MessengerButton

<TypeHeader/>

## Overview

Use the [createMessengerButton()](Modules.Facebook.createMessengerButton) method to create a Messenger button.
You must set the <Modules.Facebook.MessengerButton.mode> and <Modules.Facebook.MessengerButton.style> 
before the button is rendered.

The messenger button differences between a rectangular and a circular button mode. In addition, you can set
different styles by using the constants <Modules.Facebook.MESSENGER_BUTTON_STYLE_BLUE>, <Modules.Facebook.MESSENGER_BUTTON_STYLE_WHITE>, 
or <Modules.Facebook.MESSENGER_BUTTON_STYLE_WHITE_BORDERED> to personalize the button. Note: The mode and style property can only be set
on creation. The title of the button can be localized by setting a localization for the key "Send".

The messenger button has a click event to interact with the Facebook messenger. This can for example be done by 
calling <Modules.Facebook.presentMessengerDialog>. 

This functionality is currently iOS-only.

## Examples

### Messenger button to share the Appcelerator website.

var fb = require("facebook");
var messengerButton = fb.createMessengerButton({
    mode: fb.MESSENGER_BUTTON_MODE_RECTANGULAR
    style: fb.MESSENGER_BUTTON_STYLE_BLUE
});

messengerButton.addEventListener("click", function() {
    fb.presentMessengerDialog({
        title: "Appcelerator Titanium rocks!", // The title of the link
        description: "Shared from my Titanium application", // The description of the link
        link: "https://appcelerator.com", // The link you want to share
        to: [] // The user id's you want to preselect in the dialog
    });
});

win.add(messengerButton);

<ApiDocs/>
