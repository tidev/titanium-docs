# Titanium.Network.BonjourService

<TypeHeader/>

## Overview

You can obtain a `BonjourService` instance by calling <Titanium.Network.createBonjourService> 
or from the `service` list from a [BonjourBrowser](Titanium.Network.BonjourBrowser)  
`updatedservices` event.   

You can only publish Bonjour services attached to a socket which is currently listening; 
you cannot publish a service for a remotely connected socket.  If you stop the Bonjour 
service and wish to close the socket it uses, it is strongly recommended that you stop 
the service first.  When a window which publishes a Bonjour service is closed, you must 
stop the service if the associated socket is also to be closed, or if it is no longer 
necessary to publish.  Bonjour service resolution and publishing is asynchronous.

## Examples

### Resolve local HTTP/TCP services

The following code excerpt looks for http-based TCP zeroconf services on the local network.
It then attempts to resolve the service, establishing a socket that can be used for communications.

``` js
// Create the Bonjour Browser (looking for http)
var httpBonjourBrowser = Ti.Network.createBonjourBrowser({
  serviceType: '_http._tcp',
  domain: 'local'
});

// Handle updated services
httpBonjourBrowser.addEventListener('updatedservices', function (e) {
  for (var service of e.services) {
      // callback style
      service.resolve(120, (err, success) => {
          console.log(service.socket);
          console.log(service.socket.port);
          console.log(service.socket.host);
      });
  }
});

// Start searching
httpBonjourBrowser.search();
```

### Create and Publish a local HTTP/TCP service

The following code excerpt creates a zeroconf bonjour service and publishes it out to the local network.
A TCP Socket is used to handle listening for clients and communicating.

``` js
// Create the Bonjour Service
var localService = Ti.Network.createBonjourService({
  name: 'example',
  type: '_test._tcp',
  domain: 'local.'
});

// Create the socket we'll tie to the service
var bonjourSocket = Ti.Network.Socket.createTCP({
  host: '127.0.0.1',
  port: 40401,
  accepted: function (e) {
    // Here you handle clients connecting
    Ti.API.info("Listening socket <" + e.socket + "> accepted incoming connection <" + e.inbound + ">");
    e.inbound.write(Ti.createBuffer({
      value: 'You have been connected to a listening socket.\r\n'
    }));
    e.inbound.close();
  },
  error: function (e) {
    // handle errors...
    Ti.API.error("Socket <" + e.socket + "> encountered error when listening");
    Ti.API.error(" error code <" + e.errorCode + ">");
    Ti.API.error(" error description <" + e.error + ">");
  }
});

// Make the socket listen for connections
bonjourSocket.listen();

// Make the socket accept incoming connections
bonjourSocket.accept({ timeout: 10000 });

// Publish the service
localService.publish(bonjourSocket, fnction (err, bool) {
  // Now you can find the service on your network (including using a Ti.Network.BonjourBrowser)
});
```

<ApiDocs/>
