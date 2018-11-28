---
breadcrumbLabel: APSConnectionDelegate
sidebar: auto
---

# APSConnectionDelegate

<ProxySummary/>

## Overview

The APSConnectionDelegate protocol is an extension of the NSURLConnectionDelegate protocol.

Although all methods in this protocol are optional, the connection delegate must implement at least one of the methods to
participate in the authentication and resource management.

The deprecated methods as defined by the NSURLConnectionDelegate protocol are not supported.

In addition to the methods defined in the NSURLConnectionDelegate protocol this protocol defines one additional method.

`-(BOOL)willHandleChallenge:(NSURLAuthenticationChallenge *)challenge forConnection:(NSURLConnection *)connection`.

This method is called on the connection delegate only if it also implements the
`connection:willSendRequestForAuthenticationChallenge:` method of the NSURLConnectionDelegate protocol.
Return `true` if the connection delegate wants to handle this challenge.
Return `false` if the default delegate will handle this challenge.

If the connection delegate does not implement this method but implements `connection:willSendRequestForAuthenticationChallenge:`, the return
value is assumed to be `true` and all challenges will be forwarded to the connection delegate.

<ApiDocs/>
