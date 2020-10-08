---
editUrl: https://github.com/appcelerator/titanium_mobile_windows/edit/master/apidoc/WindowsOnly/Titanium.UI.Windows.AppBarButton.yml
---
# Titanium.UI.Windows.AppBarButton

<TypeHeader/>

## Overview

To create an application bar button, use the
[Titanium.UI.Windows.createAppBarButton()](Titanium.UI.Windows.createAppBarButton) method
and set the `icon` property to one of the `Titanium.UI.Windows.SystemIcon` constants.

    var addButton = Ti.UI.Windows.createAppBarButton({
        icon: Titanium.UI.Windows.SystemIcon.ADD
    });

Then, add the button to a `Titanium.UI.Windows.CommandBar` object.

<ApiDocs/>
