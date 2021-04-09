---
editUrl: https://github.com/appcelerator-modules/ti.ldap/edit/master/apidoc/LDAP.yml
---
# Modules.LDAP

<TypeHeader/>

## Overview

## Desription

Provides access to LDAP directory servers by utilizing the [OpenLDAP library][openldap] (iOS) and [UnboundID LDAP SDK for Java][unboundid] (Android).

## Dependencies

This module requires Release 2.1.3 or newer of the Titanium SDK.

This module does not include support for the ARMv6 architecture on iOS. Refer to the [Titanium Mobile 2.1.3.RC Release Notes](http://docs.appcelerator.com/titanium/release-notes/?version=2.1.3.RC)
for further details about ARMv6 support.

## Getting Started

View the [Using Titanium Modules](http://docs.appcelerator.com/platform/latest/#!/guide/Using_Titanium_Modules) document for instructions on getting
started with using this module in your application.

## Accessing the Module

Use `require` to access this module from JavaScript:

  var ldap = require("ti.ldap");

The `ldap` variable is a reference to the module object.

## LDAP Resources

Visit the [OpenLDAP][openldap] or [UnboundID LDAP SDK for Java][unboundid] websites for details on the LDAP implementations used in this module.

## LDAP Version

This module supports version 3 of the Lightweight Directory Access Protocol (LDAPv3).

## Interaction

The basic interaction for accessing an LDAP directory server is as follows:

1. Create a connection object (`createConnection`)
2. Connect to the server (`connect`)
3. Bind to the server (`simpleBind` or `saslBind`)
4. Search the directory (`search`)
5. Iterate on the search results (`firstEntry`, `nextEntry`, `firstAttribute`, `nextAttribute`)
6. Disconnect from the server (`disconnect`)

## LDAPS and Cert Files

When using ldaps:// set `useTLS` to true when calling `createConnection`. If you use TLS and do not pass a `certFile` to the `createConnection` method, the server's certificate will be accepted automatically. TLS must be enabled for the `certFile` to be used to validate the server's cert.

### Android

The cert needs to be a BKS keystore ([Instructions for creating BKS keystore][bks.instructions]). A BKS keystore can be created by using [importcert.sh][importcert.sh]. Ensure that you use [bouncycastle jar v146 or older][bouncycastle.jar] or you may get the following exception when using the keystore.

    "java.io.IOException: Wrong version of key store."

Before using the keystore in the app, make sure that it is in the `applicationData` directory, it will not work if the keystore is in the `resourcesDirectory`.

### iOS

The cert should be a pem file. 

If you receive the following error:

    [ERROR] Error initializing TLS: Can't contact LDAP server (error:14090086:SSL routines:SSL3_GET_SERVER_CERTIFICATE:certificate verify failed (self signed certificate in certificate chain))

You may need to pass your `caCertFile` to `createConnection`.

<ApiDocs/>
