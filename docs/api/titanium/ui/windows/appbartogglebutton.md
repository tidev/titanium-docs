# Titanium.UI.Windows.AppBarToggleButton

<TypeHeader/>

## Overview

Unlike the <Titanium.UI.Windows.AppBarButton>, the toggle button has a swtich state, like a
checkbox.

To create an application bar button, use the
[Titanium.UI.Windows.createAppBarToggleButton()](Titanium.UI.Windows.createAppBarToggleButton) method
and set the `icon` property to one of the `Titanium.UI.Windows.SystemIcon` constants.

    var likeButton = Ti.UI.Windows.createAppBarToggleButton({
        icon: Titanium.UI.Windows.SystemIcon.LIKEDISLIKE
    });

Then, add the button to a `Titanium.UI.Windows.CommandBar` object.

<ApiDocs/>
