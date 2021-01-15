---
editUrl: https://github.com/appcelerator-modules/ti.cloud/edit/master/apidoc/Users/Users.yml
---
# Modules.Cloud.Users

<TypeHeader/>

## Examples

### Create User

This example creates a new user and checks the response.

``` js
Cloud.Users.create({
    email: 'test@mycompany.com',
    first_name: 'test_firstname',
    last_name: 'test_lastname',
    password: 'test_password',
    password_confirmation: 'test_password'
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
```

### Log in User

This example logs a user in and checks the response.

``` js
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
```

### Show User

This example requests information about a user and checks the response.

``` js
Cloud.Users.show({
    user_id: savedUserInfo.id
}, function (e) {
    if (e.success) {
        var user = e.users[0];
        alert('Success:\n' +
            'id: ' + user.id + '\n' +
            'first name: ' + user.first_name + '\n' +
            'last name: ' + user.last_name);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
```

### Show Current User

This example requests information about the currently logged in user and checks the response.

``` js
Cloud.Users.showMe(function (e) {
    if (e.success) {
        var user = e.users[0];
        alert('Success:\n' +
            'id: ' + user.id + '\n' +
            'first name: ' + user.first_name + '\n' +
            'last name: ' + user.last_name);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
```

### Search for Users

This example requests information about particular users and checks the response.

``` js
Cloud.Users.search({
    q: 'test'
}, function (e) {
    if (e.success) {
        alert('Success:\n' +
            'Count: ' + e.users.length);
        for (var i = 0; i < e.users.length; i++) {
            var user = e.users[i];
            alert('id: ' + user.id + '\n' +
                'first name: ' + user.first_name + '\n' +
                'last name: ' + user.last_name);
          }
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
```

### Query for Users

This example requests information about specific users and checks the response.

``` js
Cloud.Users.query({
    page: 1,
    per_page: 10,
    where: {
        age: { '$gt': 28 },
        favorite_color: 'blue',
        first_name: 'joe'
    }
}, function (e) {
    if (e.success) {
        alert('Success:\n' +
            'Count: ' + e.users.length);
        for (var i = 0; i < e.users.length; i++) {
            var user = e.users[i];
            alert('id: ' + user.id + '\n' +
                'first name: ' + user.first_name + '\n' +
                'last name: ' + user.last_name);
          }
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
```

### Update User

This example updates information about the currently logged in user and checks the response.

``` js
Cloud.Users.update({
    email: 'joeuser@mycompany.com',
    first_name: 'joe',
    last_name: 'user',
    custom_fields: {
        favorite_color: 'blue',
        age: 25
    }
}, function (e) {
    if (e.success) {
        var user = e.users[0];
        alert('Success:\n' +
            'id: ' + user.id + '\n' +
            'first name: ' + user.first_name + '\n' +
            'last name: ' + user.last_name);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
```

### Logout User

This example logs out the current user and checks the response.

``` js
Cloud.Users.logout(function (e) {
    if (e.success) {
        alert('Success: Logged out');
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
```

### Remove User

This example deletes the current user and checks the response.

``` js
Cloud.Users.remove(function (e) {
    if (e.success) {
        alert('Success: Removed');
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
```

### Request Reset Password User

This example requests a password reset for a user and checks the response.

``` js
Cloud.Users.requestResetPassword({
    email: 'joeuser@mycompany.com'
}, function (e) {
    if (e.success) {
        alert('Success: Reset Request Sent');
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
```

<ApiDocs/>
