---
breadcrumbLabel: TCPSocket
sidebar: auto
---

# Titanium.Network.TCPSocket

<ProxySummary/>

## Overview

Sockets are nontrivial; it is recommended that anyone using them be familiar with the basics of BSD sockets.  All sockets use TCP connections, and are asynchronous for read operations, so your program should be ready to receive 'read' events at any point.  Socket references cannot be transferred to socket objects, and vice-versa - socket references are an internal mechanism which is used only to determine which sockets to send data to and read data from.  For listening sockets, it is highly recommended that you use the [INADDR_ANY](Titanium.Network.INADDR_ANY) constant as the host name.  If a window containing a socket is closed, the socket MUST be closed also unless you intend to continue to receive data, otherwise the socket will consume resources (and potentially cause conflicts with opening the window again, if a listener) until the program is restarted.  Be aware of the differences between the listen() and connect() functions; attempting to use one when you mean the other may result in errors, unpredictable behavior, or both.

<ApiDocs/>
