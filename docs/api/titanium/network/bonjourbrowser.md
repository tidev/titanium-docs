# Titanium.Network.BonjourBrowser

<TypeHeader/>

## Overview

Use the <Titanium.Network.createBonjourBrowser> method to create a `BonjourBrowser` instance.

If your application publishes Bonjour services itself, that service will be discovered 
by the browser if necessary; be prepared to perform a check if you do not want to list 
local services as available.  Bonjour service browsing is an asynchronous operation, 
meaning that you should be extremely careful when caching values from the `services` 
property returned by the `updatedservices` event.  In particular, if you maintain a 
local copy of available services and a user tries to connect to one, you should be prepared 
to handle failures gracefully; the next `updatedservices` event should provide the new 
services list, but you should not rely on it being delivered before user input.  When 
a window which uses Bonjour browsing is closed, if you do not want to continue searching, 
you must call the stop() method.

<ApiDocs/>
