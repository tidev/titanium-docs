---
editUrl: https://github.com/appcelerator-modules/ti.cloud/edit/master/apidoc/Clients/Clients.yml
---
# Modules.Cloud.Clients

<TypeHeader/>

## Examples

### Geolocate a Client

This example locates a client and checks the response.

``` js
Cloud.Clients.geolocate({
    ip_address: clientIPAddress
}, function (e) {
    if (e.success) {
        alert('Success:\n' +
            'ip_address: ' + e.ip_address + '\n' +
            'latitude: ' + e.location.latitude + '\n' +
            'longitude: ' + e.location.longitude);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
```

<ApiDocs/>
