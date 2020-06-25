# Modules.Cloud.ACLs

<TypeHeader/>

## Examples

### Create an ACL

This example creates an ACL object and checks the response.

    Cloud.ACLs.create({
        name: 'testACL',
        reader_ids: readers.ids.join(','),
        writer_ids: writers.ids.join(','),
        public_read: "false",
        public_write: "false"
    }, function (e) {
        if (e.success) {
            alert('Created!');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Update an ACL

This example updates an ACL object and checks the response.

    Cloud.ACLs.update({
        name: 'testACL',
        reader_ids: '',
        writer_ids: '',
        public_read: "true",
        public_write: "true"
    }, function (e) {
        if (e.success) {
            alert('Updated!');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Show an ACL

This example requests an ACL object and checks the response.

    Cloud.ACLs.show({
        name: 'testACL'
    }, function (e) {
        if (e.success) {
            alert('Shown!');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Remove an ACL

This example deletes an ACL object and checks the response.

    Cloud.ACLs.remove({
        name: 'testACL'
    }, function (e) {
        if (e.success) {
            alert('Removed!');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Add user to an ACL

This example adds a user to an ACL object and checks the response.

    Cloud.ACLs.addUser({
        name: 'testACL',
        reader_ids: readers.ids.join(','),
        writer_ids: writers.ids.join(',')
    }, function (e) {
        if (e.success) {
            alert('Added!');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Remove user from an ACL

This example removes a user from an ACL object and checks the response.

    Cloud.ACLs.removeUser({
        name: 'testACL',
        reader_ids: readers.ids.join(','),
        writer_ids: writers.ids.join(',')
    }, function (e) {
        if (e.success) {
            alert('Removed!');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Check user permissions

This example checks a user's permissions in an ACL and checks the response.

    Cloud.ACLs.checkUser({
        name: 'testACL',
        user_id: userID
    }, function (e) {
        if (e.success) {
            alert('Read Permission: ' + e.permission['read permission'] +
                  '\nWrite Permission: ' + e.permission['write permission']);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

<ApiDocs/>
