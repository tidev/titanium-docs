---
editUrl: https://github.com/appcelerator-modules/Ti.SafariDialog/edit/master/apidoc/AuthenticationSession.yml
---
# Modules.SafariDialog.AuthenticationSession

<TypeHeader/>

## Overview

The `AuthenticationSession` puts the user in control of whether they want to use 
their existing logged-in session from Safari. The app provides a URL that points 
to the authentication webpage. The page will be loaded in a secure view controller. 
From the webpage, the user can authenticate herself and grant access to the app. 
On completion, the service will send a callback URL with an authentication token, 
and this URL will be passed to the app by the `callback`.

The callback URL usually has a custom URL scheme. For the app to receive the 
callback URL, it needs to either register the custom URL scheme in its Info.plist, 
or set the scheme to `scheme` argument in the initializer.

If the user has already logged into the web service in Safari or other apps via 
the `AuthenticationSession`, it is possible to share the existing login information. 
An alert will be presented to get the user's consent for sharing their existing login
information. If the user cancels the alert, the session will be canceled, and 
the callback will be called.

If the user taps Cancel when showing the login webpage for the web service, 
the session will be canceled, and the callback will be called as well.

The app can cancel the session by calling `cancel()`. This will also dismiss 
the window that is showing the web service's login page.

### Requirements

The AuthenticationSession API is available with the Titanium SDK starting with Release 6.3.0.
This module only works with devices running iOS 11.0 and later.
Please make sure you have at least Xcode 9 to build to the required sources.

### Getting Started

Create a new authentication session by providing a `url` and `scheme`, create an event-listener and start:
    
    var Safari = require('ti.safaridialog');
    
    var authSession = Safari.createAuthenticationSession({
      url: 'https://example.com/oauth?callbackURL=myapp://',
      scheme: 'myapp://'
    });
    
    authSession.addEventListener('callback', function(e) {
      if (!e.success) {
          Ti.API.error('Error authenticating: ' + e.error);
          return;
      }
      
      Ti.API.info('Callback URL: ' + e.callbackURL);
    });
    
    authSession.start(); // Or cancel() to cancel it manually.

<ApiDocs/>
