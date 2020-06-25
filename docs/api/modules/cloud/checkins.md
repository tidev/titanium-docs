# Modules.Cloud.Checkins

<TypeHeader/>

## Examples

### Create a Checkin

This example creates a checkin and checks the response.

    Cloud.Checkins.create({
        place_id: myPlaceId,
        message: 'What a great view!',
        photo: Titanium.Filesystem.getFile('photo.jpg')
    }, function (e) {
        if (e.success) {
            var checkin = e.checkins[0];
            alert('Success:\n' +
                'id: ' + checkin.id + '\n' +
                'place: ' + checkin.place.name);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Query for Checkins

This example requests information about checkins and checks the response.

    Cloud.Checkins.query({
        page: 1,
        per_page: 20,
        order: '-updated_at'
    }, function (e) {
        if (e.success) {
            for (var i = 0; i < e.checkins.length; i++) {
                var checkin = e.checkins[i];
                alert('Success:\n' +
                   'id: ' + checkin.id + '\n' +
                   'place: ' + checkin.place.name + '\n' +
                   'updated_at: ' + checkin.updated_at + '\n' +
                   'user: ' + checkin.user.first_name + ' ' + checkin.user.last_name);
             }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Show Checkin

This example requests information about a checkin and checks the response.

    Cloud.Checkins.show({
        checkin_id: myCheckinId
    }, function (e) {
        if (e.success) {
            var checkin = e.checkins[0];
            alert('Success:\n' +
                'id: ' + checkin.id + '\n' +
                'place: ' + checkin.place.name + '\n' +
                'updated_at: ' + checkin.updated_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Remove Checkin

This example deletes a checkin and checks the response.

    Cloud.Checkins.remove({
        checkin_id: myCheckinId
    }, function (e) {
        if (e.success) {
            alert('Success');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

<ApiDocs/>
