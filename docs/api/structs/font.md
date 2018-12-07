# Font

<ProxySummary/>

## Overview

Available fonts vary by platform and device. On iOS, font support depends on the OS
version. On Android, font support depends on the OS version **and** device manufacturer.

Note that to update the font used by a UI component, you must set the object's `font`
property, like this:

    myLabel.font = {
        fontSize: 24,
        fontFamily: myFontName
    }

Changing the `font` object after assigning it does not reliably affect the underlying UI
component:

    // This may not work as expected
    myLabel.font.fontSize = 24;

### Custom Fonts

Custom TrueType (.ttf) or OpenType (.otf) fonts may be embedded in an application on iOS and
Android. (Note that you must have redistribution rights on the fonts you ship.)


In Alloy applications, custom fonts must be placed in a "fonts" folder in the platform-specific assets folder (<strong>app/assets/android/fonts</strong>, for example).
In classic Titanium applications, custom fonts must be placed in the **Resources/fonts** directory.

For an example of using custom fonts, see [Custom Fonts](https://docs.appcelerator.com/platform/latest/#!/guide/Custom_Fonts).

<ApiDocs/>
