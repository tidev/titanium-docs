---
breadcrumbLabel: TCP
sidebar: auto
---

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

After a socket is connected, you can access it like any other [Titanium.IOStream](Titanium.IOStream).
Note that the socket's `read` and `write` methods may block, so in most cases
you should use the asynchronous [read](Titanium.Stream.read), [write](Titanium.Stream.write)
and [pump](Titanium.Stream.pump) methods provided by the [Titanium.Stream](Titanium.Stream) module,
rather than using the socket object's `read` and `write` methods directly.

A familiarity with the basics of BSD socket programming is recommended before using
sockets with Titanium.

Use the [createTCP](Titanium.Network.Socket.createTCP) method to create a TCP socket.

<ApiDocs/>
