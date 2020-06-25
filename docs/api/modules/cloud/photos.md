# Modules.Cloud.Photos

<TypeHeader/>

## Examples

### Create Photo

This example creates a new photo and checks the response.

    Cloud.Photos.create({
        photo: Titanium.Filesystem.getFile('photo.jpg')
    }, function (e) {
        if (e.success) {
            var photo = e.photos[0];
            alert('Success:\n' +
                'id: ' + photo.id + '\n' +
                'filename: ' + photo.filename + '\n' +
                'size: ' + photo.size,
                'updated_at: ' + photo.updated_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Show a Photo

This example retrieves information about a photo and checks the response.

    Cloud.Photos.show({
        photo_id: savedPhotoId
    }, function (e) {
        if (e.success) {
            var photo = e.photos[0];
            alert('Success:\n' +
                'id: ' + photo.id + '\n' +
                'filename: ' + photo.filename + '\n' +
                'updated_at: ' + photo.updated_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Search for Photos

This example searches for photos and checks the response.

    Cloud.Photos.search({
        user_id: savedUserId
    }, function (e) {
        if (e.success) {
            alert('Success:\n' +
                'Count: ' + e.photos.length);
            for (var i = 0; i < e.photos.length; i++) {
                var photo = e.photos[i];
                alert('id: ' + photo.id + '\n' +
                      'name: ' + photo.name + '\n' +
                      'filename: ' + photo.filename + '\n' +
                      'updated_at: ' + photo.updated_at);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Query for Photos

This example requests a list of photos and checks the response.

    Cloud.Photos.query({
        page: 1,
        per_page: 20,
        where: {
            coordinates: {
                '$nearSphere': [-122.23,37.12],
                '$maxDistance': 0.00126
            }
        }
    }, function (e) {
        if (e.success) {
            alert('Success:\n' +
                'Count: ' + e.photos.length);
            for (var i = 0; i < e.photos.length; i++) {
                var photo = e.photos[i];
                alert('id: ' + photo.id + '\n' +
                      'name: ' + photo.name + '\n' +
                      'filename: ' + photo.filename + '\n' +
                      'updated_at: ' + photo.updated_at);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Update a Photo

This example updates a photo and checks the response.

    Cloud.Photos.update({
        photo_id: savedPhotoId,
        photo: Titanium.Filesystem.getFile('newphoto.jpg'),
        tags: 'mountains'
    }, function (e) {
        if (e.success) {
            var photo = e.photos[0];
            alert('Success:\n' +
                'id: ' + photo.id + '\n' +
                'filename: ' + photo.filename + '\n' +
                'updated_at: ' + photo.updated_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Remove a Photo

This example deletes a photo and checks the response.

    Cloud.Photos.remove({
        photo_id: savedPhotoId
    }, function (e) {
        if (e.success) {
            alert('Success');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

<ApiDocs/>
