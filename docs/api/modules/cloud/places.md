# Modules.Cloud.Places

<ProxySummary/>

## Examples

### Create Place

This example creates a new place and checks the response.

    Cloud.Places.create({
        name: 'Appcelerator HQ',
        state: 'California',
        website: 'https://www.appcelerator.com'
    }, function (e) {
        if (e.success) {
            var place = e.places[0];
            alert('Success:\n' +
                'id: ' + place.id + '\n' +
                'name: ' + place.name + '\n' +
                'updated_at: ' + place.updated_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Show a Place

This example retrieves information about a place and checks the response.

    Cloud.Places.show({
        place_id: savedPlaceId
    }, function (e) {
        if (e.success) {
            var place = e.places[0];
            alert('Success:\n' +
                'id: ' + place.id + '\n' +
                'name: ' + place.name + '\n' +
                'updated_at: ' + place.updated_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Search for Places

This example searches for places and checks the response.

    Cloud.Places.search({
        latitude: lat,
        longitude: lon
    }, function (e) {
        if (e.success) {
            alert('Success:\n' +
                'Count: ' + e.places.length);
            for (var i = 0; i < e.places.length; i++) {
                var place = e.places[i];
                alert('id: ' + place.id + '\n' +
                      'name: ' + place.name + '\n' +
                      'longitude: ' + place.longitude + '\n' +
                      'latitude: ' + place.latitude + '\n' +
                      'updated_at: ' + place.updated_at);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Query for Places

This example requests a list of places and checks the response.

    Cloud.Places.query({
        page: 1,
        per_page: 20,
        where: {
            lnglat: {
                '$nearSphere': [-122.23,37.12],
                '$maxDistance': 0.00126
            }
        }
    }, function (e) {
        if (e.success) {
            alert('Success:\n' +
                'Count: ' + e.places.length);
            for (var i = 0; i < e.places.length; i++) {
                var place = e.places[i];
                alert('id: ' + place.id + '\n' +
                      'name: ' + place.name + '\n' +
                      'longitude: ' + place.longitude + '\n' +
                      'latitude: ' + place.latitude + '\n' +
                      'updated_at: ' + place.updated_at);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Update a Place

This example updates a place and checks the response.

    Cloud.Places.update({
        place_id: savedPlaceId,
        city: 'Mountain View'
    }, function (e) {
        if (e.success) {
            var place = e.places[0];
            alert('Success:\n' +
                'id: ' + place.id + '\n' +
                'name: ' + place.name + '\n' +
                'updated_at: ' + place.updated_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Remove a Place

This example deletes a place and checks the response.

    Cloud.Places.remove({
        place_id: savedPlaceId
    }, function (e) {
        if (e.success) {
            alert('Success');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

<ApiDocs/>
