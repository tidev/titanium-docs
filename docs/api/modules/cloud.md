---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Modules/Cloud/Cloud.yml
---
# Modules.Cloud

<TypeHeader/>

## Overview

Appcelerator DB and Arrow Push provides a wide array of automatically-scaled data storage
and web services, such as user logins, photo uploads, checkins, status updates, and push 
notifications, without the need to learn multiple third-party SDKs or do any 
server-side programming. Remote calls to ArrowDB are done using REST APIs, which may be used with any
client technology that supports HTTP.

The Cloud module's specialized objects, such as `Users`, make accessing 
ArrowDB as simple as using any of Titanium's other APIs, due to their familiar and intuitive API schemas.
You can also use the <Modules.Cloud.sendRequest> method to invoke 
ArrowDB REST APIs directly. This approach requires some additional configuration for each method call,
but it lets you use new ArrowDB APIs as soon as they are available.

For a more detailed overview of ArrowDB and how to configure an application to use it, refer to the
[Integrate with Mobile Backend Services](https://docs.appcelerator.com/platform/latest/#!/guide/Integrate_with_Mobile_Backend_Services).
    
### Using the Modules.Cloud Module

The Modules.Cloud module is bundled with the Titanium SDK as an optional CommonJS module. 
To use it, import the module with `require('ti.cloud')`, and then begin calling the methods 
on its various objects. For example, the following code uses the `Modules.Cloud.Users.login` 
method to login the user with the specified login and password:

    var Cloud = require('ti.cloud');

    Cloud.Users.login({
        login: 'test@mycompany.com',
        password: 'test_password'
    }, function (e) {
        if (e.success) {
            var user = e.users[0];
            alert('Success:\n' +
                'id: ' + user.id + '\n' +
                'sessionId: ' + Cloud.sessionId + '\n' +
                'first name: ' + user.first_name + '\n' +
                'last name: ' + user.last_name);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Invoking ArrowDB REST APIs Directly with sendRequest()

The `Modules.Cloud.sendRequest` method lets you directly invoke ArrowDB REST APIs. The following example,
equivalent to the previous one, invokes the [users/login.json](https://docs.appcelerator.com/arrowdb/latest/#!/api/Users-method-login) 
method directly to login a user.

    Cloud.sendRequest({
        url : "users/login.json",
        method : "POST",
        data : {
            login : 'test@mycompany.com',
            password : 'test_password'
        }
    }, function(e) {// The callback called when the request completes
        if (e.success) {
            var user = e.users[0];
            alert('Success:\n' + 
                'id: ' + user.id + '\n' + 
                'sessionId: ' + Cloud.sessionId + '\n' + 
                'first name: ' + user.first_name + '\n' + 
                'last name: ' + user.last_name);
        } else {
            alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
        }
    });     


### tiapp.xml Properties

Studio will create a pair of API keys (Development and Production) for each Titanium
application depending on the user preference specified when creating the proejct. These keys
will be stored in the `tiapp.xml` file.  One of the keys will be used during application
builds depending on the build type (development or production).

The supported properties in the `tiapp.xml` file are:

    <property name="acs-api-key-development" type="string">YOUR DEVELOPMENT API KEY HERE</property>
    <property name="acs-api-key-production" type="string">YOUR PRODUCTION API KEY HERE</property>
    <property name="acs-api-key" type="string">YOUR API KEY HERE</property>

If a deployment-specific setting is provided (production or development) then that value will
be used for the current deployment environment.

There is also an optional setting to allow you to change the base URL for ArrowDB requests. You 
will most likely never need to specify this. It can be specified deployment-specific, or
generic:

    <property name="acs-base-url-development" type="string">DEVELOPMENT API URL HERE</property>
    <property name="acs-base-url-production" type="string">PRODUCTION API URL HERE</property>
    <property name="acs-base-url" type="string">API URL HERE</property>

By default, Ti.Cloud always uses SSL for communicating with the ArrowDB servers. This behavior can be overridden
by setting the URLs with their non-SSL counterpart.

    <property name="acs-base-url" type="string">https://api.cloud.appcelerator.com</property>

To disable SSL, add this line to the application code:

    Cloud.useSecure = false;

<ApiDocs/>
