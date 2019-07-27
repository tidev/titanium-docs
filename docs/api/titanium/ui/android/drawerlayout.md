# Titanium.UI.Android.DrawerLayout

<TypeHeader/>

## Overview

DrawerLayout acts as a top-level container for window content that allows for interactive "drawer"
views to be pulled out from one or both vertical edges of the window.

As per the Android Design guide, any drawers positioned to the left/start should always contain
content for navigating around the application, whereas any drawers positioned to the right/end
should always contain actions to take on the current content.

For design guidelines, see
[Google Design Guidelines: DrawerLayout](https://developer.android.com/training/implementing-navigation/nav-drawer.html)

## Examples

### Simple DrawerLayout

The following code shows a simple drawer-layout usage.


    var win = Ti.UI.createWindow();

    var leftView = Ti.UI.createView({ backgroundColor:'red' });
    var centerView = Ti.UI.createView({ backgroundColor:'yellow' });
    var rightView = Ti.UI.createView({ backgroundColor:'orange' });

    var drawer = Ti.UI.Android.createDrawerLayout({
        leftView: leftView,
        centerView: centerView,
        rightView: rightView
    });
    var btn = Ti.UI.createButton({ title: 'RIGHT' });

    btn.addEventListener('click', function() {
        drawer.toggleRight();
    });

    centerView.add(btn);

    win.addEventListener('open', function(){
        var activity = win.getActivity(),
            actionBar = activity.getActionBar();

        if (actionBar) {
            actionBar.displayHomeAsUp = true;
            actionBar.onHomeIconItemSelected = function() {
                drawer.toggleLeft();
            };
        }
    });

    win.add(drawer);
    win.open();

<ApiDocs/>
