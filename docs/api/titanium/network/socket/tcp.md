# Titanium.Network.Socket.TCP

<ProxySummary/>

## Overview

Most socket operations are asynchronous. When you create a socket, you can define
callback functions to receive the results of API calls, as well as to handle incoming
data.

For example, for a client-side socket, you define
[connected](Titanium.Network.Socket.TCP.connected) and
[error](Titanium.Network.Socket.TCP.error) callback functions.

To connect to a remote host, call the socket's
[connect](Titanium.Network.Socket.TCP.connect) method. If the socket connects
successfully, your `connected` callback is invoked, and you can send and receive data
on the socket. If the socket connection fails, your `error` callback is invoked.

After a socket is connected, you can access it like any other <Titanium.IOStream>.
Note that the socket's `read` and `write` methods may block, so in most cases
you should use the asynchronous [read](Titanium.Stream.read), [write](Titanium.Stream.write)
and [pump](Titanium.Stream.pump) methods provided by the <Titanium.Stream> module,
rather than using the socket object's `read` and `write` methods directly.

A familiarity with the basics of BSD socket programming is recommended before using
sockets with Titanium.

Use the <Titanium.Network.Socket.createTCP> method to create a TCP socket.

## Examples

### Simple Socket IO using Stream.pump

The following example uses the [pump](Titanium.Stream.pump) method from the <Titanium.Stream>
module to read data from a socket. The `pump` method registers a callback that is
called repeatedly to process incoming data from the socket.

    var socket = Ti.Network.Socket.createTCP({
        host: 'blog.example.com', port: 80,
        connected: function (e) {
            Ti.API.info('Socket opened!');
            Ti.Stream.pump(e.socket, readCallback, 1024, true);
            Ti.Stream.write(socket, Ti.createBuffer({
                value: 'GET http://blog.example.com/index.html HTTP/1.1\r\n\r\n'
            }), writeCallback);
        },
            error: function (e) {
            Ti.API.info('Error (' + e.errorCode + '): ' + e.error);
        },
    });
    socket.connect();

    function writeCallback(e) {
        Ti.API.info('Successfully wrote to socket.');
    }

    function readCallback(e) {
        if (e.bytesProcessed == -1)
        {
            // Error / EOF on socket. Do any cleanup here.
            ...
        }
        try {
            if(e.buffer) {
                var received = e.buffer.toString();
                Ti.API.info('Received: ' + received);
            } else {
                Ti.API.error('Error: read callback called with no buffer!');
            }
        } catch (ex) {
            Ti.API.error(ex);
        }
    }

### Listening Socket Example

The following sample shows a trivial example of using a listening
socket. In this case, the application simply sends messages to itself,
using the loopback address.

    // Hostname to listen on/connect to. Here we use the loopback
    // address. iOS also supports Ti.Platform.address (the address of
    // the WiFi interface).
    // Android supports only the loopback address.

    var hostname = '127.0.0.1';

    var clientSocket = Ti.Network.Socket.createTCP({
        host : hostname,
        port : 40404,
        connected : function(e) {
            Ti.API.info('Client socket connected!');
            Ti.Stream.pump(e.socket, pumpCallback, 1024, true);
            e.socket.write(Ti.createBuffer({
                value : 'A message from a connecting socket.'
            }));
        },
        error : function(e) {
            Ti.API.info('Error (' + e.errorCode + '): ' + e.error);
        }
    });

    function writeCallback(e) {
        Ti.API.info('Successfully wrote to socket.');
    }

    function pumpCallback(e) {
        // Has the remote socket closed its end?
        if (e.bytesProcessed < 0) {
            Ti.API.info("Closing client socket.");
            clientSocket.close();
            return;
        }
        try {
            if(e.buffer) {
                var received = e.buffer.toString();
                Ti.API.info('Received: ' + received);
            } else {
                Ti.API.error('Error: read callback called with no buffer!');
            }
        } catch (ex) {
            Ti.API.error(ex);
        }
    }

    //Create a socket and listen for incoming connections
    var listenSocket = Ti.Network.Socket.createTCP({
        host : hostname,
        port : 40404,
        accepted : function(e) {
            // This where you would usually store the newly-connected socket, e.inbound
            // so it can be used for read / write operations elsewhere in the app.
            // In this case, we simply send a message then close the socket.
            Ti.API.info("Listening socket <" + e.socket + "> accepted incoming connection <" + e.inbound + ">");
            e.inbound.write(Ti.createBuffer({
                value : 'You have been connected to a listening socket.\r\n'
            }));
            e.inbound.close();
            // close the accepted socket

        },
        error : function(e) {
            Ti.API.error("Socket <" + e.socket + "> encountered error when listening");
            Ti.API.error(" error code <" + e.errorCode + ">");
            Ti.API.error(" error description <" + e.error + ">");
        }
    });
    // Starts the socket listening for connections, does not accept them
    listenSocket.listen();
    Ti.API.info("Listening now...");

    // Tells socket to accept the next inbound connection. listenSocket.accepted gets
    // called when a connection is accepted via accept()
    Ti.API.info("Calling accept.");
    listenSocket.accept({
        timeout : 10000
    });

    // Call connect after a short timeout to ensure the listening socket is ready to go.
    Ti.API.info("Setting timer to connect.");
    setTimeout(function(e)
    {
        Ti.API.info("Calling connect on client socket.");
       clientSocket.connect();
    }, 500);

<ApiDocs/>
