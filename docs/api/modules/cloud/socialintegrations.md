# Modules.Cloud.SocialIntegrations

<TypeHeader/>

## Examples

### Log in External Account

This example logs a user in using an external account and checks the response

    Cloud.SocialIntegrations.externalAccountLogin({
        type: 'facebook',
        token: Ti.Facebook.accessToken
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

### Link in External Account

This example links an external account and checks the response

    Cloud.SocialIntegrations.externalAccountLink({
        type: 'facebook',
        token: Ti.Facebook.accessToken
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

### Search for Facebook Friends

This example retrieves a list of Facebook Friends and checks the response

    Cloud.SocialIntegrations.searchFacebookFriends(function (e){
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

<ApiDocs/>
