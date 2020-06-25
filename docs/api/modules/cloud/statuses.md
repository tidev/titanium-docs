# Modules.Cloud.Statuses

<TypeHeader/>

## Examples

### Create a Status

This example creates a status and checks the response.

    Cloud.Statuses.create({
        place_id: myPlaceId,
        message: 'What a great view!',
        photo: Titanium.Filesystem.getFile('photo.jpg')
    }, function (e) {
        if (e.success) {
            var status = e.statuses[0];
            alert('Success:\n' +
                'id: ' + status.id + '\n' +
                'place: ' + status.place.name);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Search Status

This example requests information about a user's status and checks the response.

    Cloud.Statuses.search({
        user_id: someUserId
    }, function (e) {
        if (e.success) {
            alert('Success:\n' +
                'Count: ' + e.statuses.length);
            for (var i = 0; i < e.statuses.length; i++) {
                var status = e.statuses[i];
                alert('id: ' + status.id + '\n' +
                      'message: ' + status.message + '\n' +
                      'updated_at: ' + status.updated_at);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Query Status

This example requests information about statuses and checks the response.

    Cloud.Statuses.query({
        page: 1,
        per_page: 20,
        order: '-updated_at'
    }, function (e) {
        if (e.success) {
            for (var i = 0; i < e.statuses.length; i++) {
                var status = e.statuses[i];
                alert('Success:\n' +
                   'id: ' + status.id + '\n' +
                   'message: ' + status.message + '\n' +
                   'updated_at: ' + status.updated_at);
             }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

<ApiDocs/>
