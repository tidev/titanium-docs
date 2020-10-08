---
editUrl: https://github.com/appcelerator-modules/ti.facebook/edit/master/apidoc/LoginButton.yml
---
# Modules.Facebook.LoginButton

<TypeHeader/>

## Overview

Use the [createLoginButton()](Modules.Facebook.createLoginButton) method
to create a Login button. If you want to request user permissions when the
user logs in, set either the <Modules.Facebook.LoginButton.readPermissions> or
<Modules.Facebook.LoginButton.publishPermissions> property, but do not set both.  If both
properties are set, the application will throw an exception.  If neither property is set, by
default, only the `user_profile` permission is requested.

The Login button does not require a click event handler or any listeners.
Click events on the button are automatically handled by the Facebook module.

The button changes its label to reflect the current state of the Facebook
session.  For example, if the user is already logged in, the button will show "Logout".

### Android Platform Notes

In Android, the button's width will change depending on the current state it is in. When
logged out, it will show "Log in with Facebook" and its width will match the length of
the text. When logged in, it will show "Log out" and its width will match the length of
the text.

### iOS Platform Notes

In iOS, the width and height of the button can be changed using the `width` and `height` property.
The Facebook SDK 4.19.0 and later (used in Ti.Facebook 5.4.0 and later) provides an updated Login 
button. The title now is "Continue with Facebook" instead of "Login with Facebook" and the recommended 
height is 28px. Please always specify a height for best results.

<ApiDocs/>
