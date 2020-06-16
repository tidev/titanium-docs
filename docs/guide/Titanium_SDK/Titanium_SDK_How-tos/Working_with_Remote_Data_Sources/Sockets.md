---
title: Sockets
weight: '20'
---

# Sockets

## Overview

Support for listening and connecting sockets via TCP will allow application developers to incorporate lower level network logic into their applications.

## Sockets explained

[Titanium.Network.Socket.TCP](#!/api/Titanium.Network.Socket.TCP) implements the [Titanium.Stream](#!/api/Titanium.Stream) interface and therefore relies on [Titanium.Buffer](#!/api/Titanium.Buffer).

Socket operations are generally asynchronous and therefore socket callbacks are core to how one operation flows into the next. For example, when connecting to a remote host, you wait until the `connected` callback is invoked and initiate read and write operations from inside that callback.

Once a socket is connected, IO operations leave the scope of `Ti.Network.Socket` and move into the realm of general Stream IO. Again, because sockets are naturally asynchronous, IO interactions with them should generally be conducted through the `Ti.Stream` module. Lastly, while sockets can be an extremely powerful part of your developer tool box, network programming is non-trivial and investigation into the basics of how BSD sockets work is suggested.

## Usage examples

The following code excerpt creates a socket and connects to a remote server. When the socket connects, a callback function is invoked to interact with the socket. The callback function is shown in the next excerpt.

```javascript
//Create a socket, connect to another listening socket locally, write some data and then enter read loop
var connectSocket = Ti.Network.Socket.createTCP({
    host: 'google.com',
    port: 80,
    connected: function(e) {
        Ti.API.info("Socket <" + e.socket + "> connected to host <" + e.socket.host + ">");
        postConnect();
    },
    error: function(e) {
        Ti.API.error("Socket <" + e.socket + "> encountered error when connecting");
        Ti.API.error(" error code <" + e.errorCode + ">");
        Ti.API.error(" error description <" + e.error + ">");
    }
});
connectSocket.connect();
```

The following code excerpt shows the `postConnect` function used in the previous excerpt. It writes a message to the socket and then enters a read loop, reading data from the socket until the socket is closed.

```javascript
function postConnect()
{
    try {
        // write some data
        var outData = Ti.createBuffer({value:"Howdy remote socket! How are you?"});
        var bytesWritten = connectSocket.write(outData);
        Ti.API.info("<" + bytesWritten + "> bytes written to socket");

        // start read loop
        var readBuffer = Ti.createBuffer({length:1024});
        var bytesRead = 0;
        while ((bytesRead = connectSocket.read(readBuffer)) > -1) {
            var stringData = Ti.Codec.decodeString({source: readBuffer, length: bytesRead });
            Ti.API.info("received <" + bytesRead + "> bytes of data. String representation of data is <" + stringData + ">");
            readBuffer.clear(); // clear the buffer before the next read
        }
        Ti.API.info("socket has closed");
        connectSocket.close(); // close the socket on our end

    } catch (e) {
        // IO error on socket. socket is closed and connectSocket.error is called
    }
}
```

The following sample creates a listening socket – in this case, listening on the loopback address, which can be used for communicating with other processes on the same device. iOS also supports Ti.Platform.address (the address of the WiFi interface). Android supports only the loopback address.

```javascript
//Create a socket and listen for incoming connections
var listenSocket = Ti.Network.Socket.createTCP({
    // Hostname to listen on/connect to.
    host: '127.0.0.1'
    port: 40404,
    accepted: function(e) {
        // this where you would usually store the e.inbound value somewhere else so it can be used for
        // read / write operations elsewhere in the app
        Ti.API.info("Listening socket <" + e.socket + "> accepted incoming connection <" + e.inbound + ">");
        e.inbound.close(); // close the accepted socket

    },
    error: function(e) {
        Ti.API.error("Socket <" + e.socket + "> encountered error when listening");
        Ti.API.error(" error code <" + e.errorCode + ">");
        Ti.API.error(" error description <" + e.error + ">");
    }
});
// Starts listening for connections, does not accept them.
listenSocket.listen();

// Tells socket to accept the next inbound connection. Asynchronous.
// listenSocket.accepted callback is invoked when a connection is actually accepted.
listenSocket.accept();
```
