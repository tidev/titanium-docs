---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Modules/Cloud/Chats/Chats.yml
---
# Modules.Cloud.Chats

<TypeHeader/>

## Examples

### Create Chat Message

This example sends a chat message to a list of users and checks the response.

    Cloud.Chats.create({
        to_ids: ids.join(','),
        message: 'Good morning'
    }, function (e) {
        if (e.success) {
            for (var i = 0; i < e.chats.length; i++) {
                var chat = e.chats[i];
                alert('Success:\n' +
                    'From: ' + chat.from.first_name + ' ' + chat.from.last_name + '\n' +
                    'Updated: ' + chat.updated_at + '\n' +
                    'Message: ' + chat.message);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Query for Chat Message

This example requests a list of chat messages and checks the response.

    Cloud.Chats.query({
        participate_ids: ids.join(','),
        where: {
            updated_at: { '$gt': last_update_time }
        }
    }, function (e) {
        if (e.success) {
            for (var i = 0; i < e.chats.length; i++) {
                var chat = e.chats[i];
                alert('Success:\n' +
                    'From: ' + chat.from.first_name + ' ' + chat.from.last_name + '\n' +
                    'Updated: ' + chat.updated_at + '\n' +
                    'Message: ' + chat.message);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Get Chat Groups

This example requests a lists of chat groups that the current user belongs to and checks 
the response.

    Cloud.Chats.getChatGroups(function (e) {
        if (e.success) {
            for (var i = 0; i < e.chats.length; i++) {
                var group = e.chat_groups[i];
                alert('Success:\n' +
                    'id: ' + group.id + '\n' +
                    'created_at: ' + group.created_at + '\n' +
                    'number of users: ' + group.participate_users.length);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

<ApiDocs/>
