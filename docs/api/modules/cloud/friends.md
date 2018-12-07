# Modules.Cloud.Friends

<ProxySummary/>

## Examples

### Add a friend

This example adds a friend and checks the response.

    Cloud.Friends.add({
        user_ids: checked.join(",")
    }, function (e) {
        if (e.success) {
            alert('Friend(s) added');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Show friend requests

This example shows pending friend requests and checks the response.

    Cloud.Friends.requests(function (e) {
        if (e.success) {
            alert('Success:\n' +
                'Count: ' + e.friend_requests.length);
            for (var i = 0; i < e.friend_requests.length; i++) {
                var user = e.friend_requests[i].user;
                alert('id: ' + user.id + '\n' +
                    'first name: ' + user.first_name + '\n' +
                    'last name: ' + user.last_name);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Approve friend requests

This example approves pending friend requests and checks the response.

    Cloud.Friends.approve({
        user_ids: checked.join(",")
    }, function (e) {
        if (e.success) {
            alert('Friend(s) approved');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Remove friends

This example removes friends and checks the response.

    Cloud.Friends.remove({
        user_ids: checked.join(",")
    }, function (e) {
        if (e.success) {
            alert('Friend(s) removed');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Search for friends

This example requests information about particular friends and checks the response.

    Cloud.Friends.search({
        user_id: searchID
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

<ApiDocs/>
