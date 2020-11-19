---
editUrl: https://github.com/appcelerator-modules/ti.cloud/edit/master/apidoc/PhotoCollections/PhotoCollections.yml
---
# Modules.Cloud.PhotoCollections

<TypeHeader/>

## Examples

### Create Photo Collection

This example creates a new photo collection and checks the response.

    Cloud.PhotoCollections.create({
        name: 'Party Pictures'
    }, function (e) {
        if (e.success) {
            var collection = e.collections[0];
            alert('Success:\n' +
                'id: ' + collection.id + '\n' +
                'name: ' + collection.name + '\n' +
                'count: ' + collection.counts.total_photos + '\n'
                'updated_at: ' + collection.updated_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Show a Photo Collection

This example retrieves information about a photo collection and checks the response.

    Cloud.PhotoCollections.show({
        collection_id: savedPhotoCollectionId
    }, function (e) {
        if (e.success) {
            var collection = e.collections[0];
            alert('Success:\n' +
                'id: ' + collection.id + '\n' +
                'name: ' + collection.name + '\n' +
                'count: ' + collection.counts.total_photos + '\n'
                'updated_at: ' + collection.updated_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Search for Photo Collections

This example searches for collections and checks the response.

    Cloud.PhotoCollections.search({
        user_id: savedUserId
    }, function (e) {
        if (e.success) {
            alert('Success:\n' +
                'Count: ' + e.collections.length);
            for (var i = 0; i < e.collections.length; i++) {
                var collection = e.collections[i];
                alert('Success:\n' +
                    'id: ' + collection.id + '\n' +
                    'name: ' + collection.name + '\n' +
                    'count: ' + collection.counts.total_photos + '\n'
                    'updated_at: ' + collection.updated_at);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Show Photo Subcollections

This example requests a list of photo subcollections and checks the response.

    Cloud.PhotoCollections.showSubcollections({
        page: 1,
        per_page: 20,
        collection_id: savedCollectionId
    }, function (e) {
        if (e.success) {
            alert('Success:\n' +
                'Count: ' + e.collections.length);
            for (var i = 0; i < e.collections.length; i++) {
                var collection = e.collections[i];
                alert('Success:\n' +
                    'id: ' + collection.id + '\n' +
                    'name: ' + collection.name + '\n' +
                    'count: ' + collection.counts.total_photos + '\n'
                    'updated_at: ' + collection.updated_at);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Show Photo Collection Photos

This example requests a list of photos in a photo collections and checks the response.

    Cloud.PhotoCollections.showPhotos({
        page: 1,
        per_page: 20,
        collection_id: savedCollectionId
    }, function (e) {
        if (e.success) {
            if (!e.photos) {
                alert('Success: No photos');
            } else {
                alert('Success:\n' +
                    'Count: ' + e.collections.length);
                for (var i = 0; i < e.collections.length; i++) {
                    var collection = e.collections[i];
                    alert('Success:\n' +
                        'id: ' + collection.id + '\n' +
                        'name: ' + collection.name + '\n' +
                        'count: ' + collection.counts.total_photos + '\n'
                        'updated_at: ' + collection.updated_at);
                }
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Update a Photo Collection

This example updates a photo collection and checks the response.

    Cloud.PhotoCollections.update({
        collection_id: savedPhotoCollectionId,
        cover_photo_id: savedPhotoId
    }, function (e) {
        if (e.success) {
            var collection = e.collections[0];
            alert('Success:\n' +
                'id: ' + collection.id + '\n' +
                'name: ' + collection.name + '\n' +
                'count: ' + collection.counts.total_photos + '\n'
                'updated_at: ' + collection.updated_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Remove a Photo Collection

This example deletes a photo collection and checks the response.

    Cloud.PhotoCollections.remove({
        collection_id: savedPhotoCollectionId
    }, function (e) {
        if (e.success) {
            alert('Success');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

<ApiDocs/>
