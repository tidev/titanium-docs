# Titanium.Network.Socket.UDP

<TypeHeader/>

## Overview

Most socket operations are asynchronous. When you create a socket, you can define
callback functions to receive the results of API calls, as well as to handle incoming
data.

For example, for a client-side socket, you define
[started](Titanium.Network.Socket.UDP.started) and
[error](Titanium.Network.Socket.UDP.error) callback functions.

A familiarity with the basics of BSD socket programming is recommended before using
sockets with Titanium.

Use the <Titanium.Network.Socket.createUDP> method to create a UDP socket.

## Examples

### Simple UDP Socket

var socket = Ti.Network.Socket.createUDP({
    started: function (e) {
        socket.sendString(e.port, e.address, "Hello, World!");
    },
    data: function (e) {
        alert(e.stringData);
        Ti.API.info('Socket received data: ' + e.stringData);
        Ti.API.info('bytes: ' + e.bytesData.length);
        Ti.API.info('address: ' + e.address);
        Ti.API.info('port: ' + e.port);
    },
    error: function (e) {
        alert('Socket error: ' + e.error);
    }
});
socket.start(6262);

<ApiDocs/>
