---
editUrl: https://github.com/appcelerator/titanium_mobile_windows/edit/master/apidoc/WindowsOnly/Titanium.UI.Windows.CommandBar.yml
---
# Titanium.UI.Windows.CommandBar

<TypeHeader/>

## Overview

The command bar displays a row of buttons used to indicate additional actions the user can
perform. For Windows Store applications, right-click on the application to reveal the command
bar.

To create a command bar, first create buttons and separator objects using the following methods:

  * [Titanium.UI.Windows.createAppBarButton()](Titanium.UI.Windows.createAppBarButton)
  * [Titanium.UI.Windows.createAppBarToggleButton()](Titanium.UI.Windows.createAppBarToggleButton)
  * [Titanium.UI.Windows.createAppBarSeparator()](Titanium.UI.Windows.createAppBarSeparator) --
    only appears on Windows Store applications.

Then, pass an array of button and separator objects to the `items` property when creating a
command bar with the [Titanium.UI.Windows.createCommandBar()](Titanium.UI.Windows.createCommandBar)
method.

Finally, add the command bar to a Titanium.UI.Window object.

    var backButton = Ti.UI.Windows.createAppBarButton({
            icon: Ti.UI.Windows.SystemIcon.BACK
        }),
        likeButton = Ti.UI.Windows.createAppBarToggleButton({
            icon: Ti.UI.Windows.SystemIcon.LIKEDISLIKE
        }),
        forwardButton = Titanium.UI.Windows.createAppBarButton({
            icon: Ti.UI.Windows.SystemIcon.FORWARD
        }),
        commandBar = Ti.UI.Windows.createCommandBar({
            items: [backButton, likeButton, forwardButton]
        }),
    win = Ti.UI.createWindow();
    win.add(commandBar);
    win.open();

<ApiDocs/>
