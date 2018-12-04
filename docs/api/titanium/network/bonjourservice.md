# Titanium.Network.BonjourService

<ProxySummary/>

## Overview

You can obtain a `BonjourService` instance by calling <Titanium.Network.createBonjourService> 
or from the `service` list from a [BonjourBrowser](Titanium.Network.BonjourBrowser)  
`updatedservices` event.   

You can only publish Bonjour services attached to a socket which is currently listening; 
you cannot publish a service for a remotely connected socket.  If you stop the Bonjour 
service and wish to close the socket it uses, it is strongly recommended that you stop 
the service first.  When a window which publishes a Bonjour service is closed, you must 
stop the service if the associated socket is also to be closed, or if it is no longer 
necessary to publish.  Unlike other network operations, Bonjour service resolution and 
publishing is synchronous, so be aware that your code may block while resolution is going 
on.  In particular, you may wish to display UI elements indicating background activity 
before beginning resolution.

<ApiDocs/>
