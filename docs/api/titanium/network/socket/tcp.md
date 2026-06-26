---
title: Titanium.Network.Socket.TCP
properties:
  - name: host
    type: String
    summary: The host to connect to or listen on.
    description: >
      <p>Can only be modified when this socket is in the <a
      href="Titanium.Network.Socket.INITIALIZED">INITIALIZED</a> state.</p>

      <p>Supports both IPv4 and IPv6 addresses.</p>
  - name: port
    type: Number
    summary: The port to connect to or listen on.
    description: >
      <p>Can only be modified when this socket is in the <a
      href="Titanium.Network.Socket.INITIALIZED">INITIALIZED</a> state.</p>
  - name: secure
    type: Boolean
    summary: Creates a secure socket.
    platforms:
      - android
    since: 12.1.0
  - name: listenQueueSize
    type: Number
    summary: >-
      Max number of pending incoming connections to be allowed when the socket
      is in the <a href="Titanium.Network.Socket.LISTENING">LISTENING</a> state.
    description: >
      <p>Any incoming connections received while the max number of pending
      connections has<br>

      been reached will be rejected.</p>
  - name: timeout
    type: Number
    summary: >-
      Timeout, in milliseconds, for <code>connect</code> and all
      <code>write</code> operations.
    description: >
      <p>Can only be modified when this socket is in the <a
      href="Titanium.Network.Socket.INITIALIZED">INITIALIZED</a> state.</p>
  - name: connected
    type: Callback<ConnectedCallbackArgs>
    summary: >-
      Callback to be fired when the socket enters the &quot;connected&quot;
      state.
    description: >
      <p>Only invoked following a successful <a
      href="Titanium.Network.Socket.TCP.connect">connect</a><br>

      call.</p>

      <p>Can only be modified when this socket is in the <a
      href="Titanium.Network.Socket.INITIALIZED">INITIALIZED</a> state.</p>
  - name: error
    type: Callback<ErrorCallbackArgs>
    summary: >-
      Callback to be fired when the socket enters the <a
      href="Titanium.Network.Socket.ERROR">ERROR</a> state.
  - name: accepted
    type: Callback<AcceptedCallbackArgs>
    summary: Callback to be fired when a listener accepts a connection.
  - name: state
    type: Number
    summary: Current state of the socket.
methods:
  - name: connect
    summary: Attempts to connect the socket to its host/port.
    description: >
      <p>Throws an exception if the socket is in a <a
      href="Titanium.Network.Socket.CONNECTED">CONNECTED</a><br>

      or <a href="Titanium.Network.Socket.LISTENING">LISTENING</a> state.<br>

      Throws an exception if a valid host and port has not been set on this
      socket.</p>

      <p>Non-blocking; connection attempts are asynchronous.</p>
  - name: listen
    summary: Attempts to start listening on the socket's host/port.
    description: >
      <p>The <code>listen</code> call will attempt to listen on the specified
      host and/or port<br>

      property for the socket if they are set.</p>

      <p>Non-blocking; may return before the socket is fully open and
      listening.</p>

      <p>If the socket is already in a <a
      href="Titanium.Network.Socket.LISTENING">LISTENING</a> or<br>

      <a href="Titanium.Network.Socket.CONNECTED">CONNECTED</a> state,
      <code>listen</code> throws an exception<br>

      and sets the socket state to <a
      href="Titanium.Network.Socket.ERROR">ERROR</a>, but does<br>

      <strong>not</strong> fire the error callback.</p>

      <p>Any error encountered after the socket starts listening results in the
      error<br>

      callback being fired.</p>
  - name: accept
    summary: >-
      Tells a <a href="Titanium.Network.Socket.LISTENING">LISTENING</a> socket
      to accept a connection request at the top of a listener's request queue
      when one becomes available.
    description: >
      <p>Non-blocking; if there are no connections in the queue, sets a flag so
      that<br>

      the socket accepts the next incoming connection immediately.</p>

      <p>Takes an argument, an &lt;AcceptDict&gt; object which assigns options
      to the new<br>

      connection.  If the socket is already flagged to accept the next
      connection,<br>

      the existing accept options will be updated to use the newly specified
      <code>options</code><br>

      object.</p>

      <p>The <code>accepted</code> callback is called when a new connection is
      accepted as a result of<br>

      calling <code>accept</code>. The callback argument holds a reference to a
      new socket,<br>

      representing the accepted connection.</p>

      <p>Note that the connected callback is <strong>not</strong> called on the
      newly created socket.<br>

      This is because the socket is created in the<br>

      <a href="Titanium.Network.Socket.CONNECTED">CONNECTED</a> state, so it
      never transitions<br>

      to the <code>CONNECTED</code> state.</p>

      <p>Throws an exception if called on a socket that is not in a<br>

      <a href="Titanium.Network.Socket.LISTENING">LISTENING</a> state.</p>
    parameters:
      - name: options
        type: AcceptDict
        summary: Options to be set on next accepted socket.
  - name: close
    summary: Closes a socket.
    description: >
      <p>Throws exception if the socket is not in a <a
      href="Titanium.Network.Socket.CONNECTED">CONNECTED</a><br>

      or <a href="Titanium.Network.Socket.LISTENING">LISTENING</a> state.
      Blocking.</p>
examples:
  - title: Simple Socket IO using Stream.pump
    code:
      - content: |-
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
        language: js
    intro: >-
      The following example uses the [pump](Titanium.Stream.pump) method from
      the <Titanium.Stream>

      module to read data from a socket. The `pump` method registers a callback
      that is

      called repeatedly to process incoming data from the socket.
  - title: Listening Socket Example
    code:
      - content: >-
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


          // Create a socket and listen for incoming connections

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


          // Tells socket to accept the next inbound connection.
          listenSocket.accepted gets

          // called when a connection is accepted via accept()

          Ti.API.info("Calling accept.");

          listenSocket.accept({
              timeout : 10000
          });


          // Call connect after a short timeout to ensure the listening socket
          is ready to go.

          Ti.API.info("Setting timer to connect.");

          setTimeout(function(e)

          {
              Ti.API.info("Calling connect on client socket.");
              clientSocket.connect();
          }, 500);
        language: js
    intro: |-
      The following sample shows a trivial example of using a listening
      socket. In this case, the application simply sends messages to itself,
      using the loopback address.
---

# Titanium.Network.Socket.TCP

TCP socket that implements the `Titanium.IOStream` interface.

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

After a socket is connected, you can access it like any other [Titanium.IOStream](/api/titanium/iostream).
Note that the socket's `read` and `write` methods may block, so in most cases
you should use the asynchronous [read](Titanium.Stream.read), [write](Titanium.Stream.write)
and [pump](Titanium.Stream.pump) methods provided by the [Titanium.Stream](/api/titanium/stream) module,
rather than using the socket object's `read` and `write` methods directly.

A familiarity with the basics of BSD socket programming is recommended before using
sockets with Titanium.

Use the [Titanium.Network.Socket.createTCP](/api/titanium/network/socket) method to create a TCP socket.


**Extends:** `Titanium.IOStream` · **Since:** 1.7 · **Platforms:** android, iphone, ipad, macos

<ApiProperties />

<ApiMethods />

<ApiExamples />

