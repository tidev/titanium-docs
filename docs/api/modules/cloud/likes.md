# Modules.Cloud.Likes

<ProxySummary/>

## Examples

### Create a Like

This example creates a new like and checks the response.

    Cloud.Likes.create({
        user_id: someUserId
    }, function (e) {
        if (e.success) {
            alert('Created!');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Remove a Like

This example deletes a like and checks the response.

    Cloud.Likes.remove({
        user_id: someUserId
    }, function (e) {
        if (e.success) {
            alert('Removed');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

<ApiDocs/>
