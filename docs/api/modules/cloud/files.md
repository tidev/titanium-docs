# Modules.Cloud.Files

<ProxySummary/>

## Examples

### Create File

This example creates a new file and checks the response.

    Cloud.Files.create({
        name: 'test.dat',
        file: Titanium.Filesystem.getFile('test.dat')
    }, function (e) {
        if (e.success) {
            var file = e.files[0];
            alert('Success:\n' +
                'id: ' + file.id + '\n' +
                'name: ' + file.name + '\n' +
                'updated_at: ' + file.updated_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Show a File

This example retrieves information about a file and checks the response.

    Cloud.Files.show({
        file_id: savedFileId
    }, function (e) {
        if (e.success) {
            var file = e.files[0];
            alert('Success:\n' +
                'id: ' + file.id + '\n' +
                'name: ' + file.name + '\n' +
                'updated_at: ' + file.updated_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Query for Files

This example requests a list of files and checks the response.

    Cloud.Files.query({
        page: 1,
        per_page: 20
    }, function (e) {
        if (e.success) {
            alert('Success:\n' +
                'Count: ' + e.files.length);
            for (var i = 0; i < e.files.length; i++) {
                var file = e.files[i];
                alert('id: ' + file.id + '\n' +
                    'name: ' + file.name + '\n' +
                    'updated_at: ' + file.updated_at);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Update a File

This example updates a file and checks the response.

    Cloud.Files.update({
        file_id: savedFileId,
        name: 'Notice'
    }, function (e) {
        if (e.success) {
            var file = e.files[0];
            alert('Success:\n' +
                'id: ' + file.id + '\n' +
                'name: ' + file.name + '\n' +
                'updated_at: ' + file.updated_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Remove a File

This example deletes a file and checks the response.

    Cloud.Files.remove({
        file_id: savedFileId
    }, function (e) {
        if (e.success) {
            alert('Removed');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

<ApiDocs/>
