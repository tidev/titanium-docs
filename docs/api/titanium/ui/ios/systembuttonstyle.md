# Titanium.UI.iOS.SystemButtonStyle

<TypeHeader/>

## Overview

These constants represent standard iOS system button styles that affect the 
[Button](Titanium.UI.Button), [ButtonBar](Titanium.UI.ButtonBar), and 
[TabbedBar](Titanium.UI.iOS.TabbedBar) UI elements.

The different styles are used in different places. For normal buttons which are **not** 
contained in a nav bar, toolbar, button bar or tabbed bar, the following styles apply:

* `BORDERED`. Simple button style with a rounded border and a white background. 
            The default style for normal buttons.
* `DONE`. Like the bordered button, but with a blue background. Button style for a button 
        that indicates completion, such as OK, Save, or Go. 
* `PLAIN` Button style for an undecorated button. 

Note that if you specify the `PLAIN` style, you must style the button using the other button 
properties. For example, there is no indication that the button has been pressed unless you set 
other properties for the selected state, such as `backgroundSelectedImage` and `selectedColor`.

When you add a button to a [Toolbar](Titanium.UI.iOS.Toolbar), the styles have a slightly 
different effect:

* `PLAIN` Button style for an undecorated button with large text and a *glow* effect when the 
button is pressed. Default style for buttons in toolbars.
* `BORDERED`. Simple button style with a rounded border and a light blue background. 
* `DONE`. Like the bordered button, but with a dark blue background. 

For `TabbedBar` and `ButtonBar` controls, styles have the following meaning:

* `PLAIN`. Default style for `ButtonBar` and `TabbedBar`.
* `BORDERED`. Creates a bar like the `PLAIN` bar, but with a heavier border.
translucent buttons that allow the bar's background color to show through.

<ApiDocs/>
