---
editUrl: https://github.com/appcelerator-modules/ti.cloud/edit/master/apidoc/Messages/Messages.yml
---
# Modules.Cloud.Messages

<TypeHeader/>

## Examples

### Create Message

This example creates a new message and checks the response.

    Cloud.Messages.create({
        to_ids: toSet.ids.join(','),
        body: 'Hello World',
        subject: 'Test Message'
    }, function (e) {
        if (e.success) {
            var message = e.messages[0];
            alert('Success:\n' +
                'id: ' + message.id + '\n' +
                'subject: ' + message.subject + '\n' +
                'body: ' + message.body + '\n' +
                'updated_at: ' + message.updated_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Reply to a Message

This example replies to a message and checks the response.

    Cloud.Messages.reply({
        message_id: savedMessageId,
        body: 'Welcome'
    }, function (e) {
        if (e.success) {
            var message = e.messages[0];
            alert('Success:\n' +
                'id: ' + message.id + '\n' +
                'subject: ' + message.subject + '\n' +
                'body: ' + message.body + '\n' +
                'updated_at: ' + message.updated_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Show a Message

This example retrieves information about a message and checks the response.

    Cloud.Messages.show({
        message_id: savedMessageId
    }, function (e) {
        if (e.success) {
            var message = e.messages[0];
            alert('Success:\n' +
                'id: ' + message.id + '\n' +
                'subject: ' + message.subject + '\n' +
                'body: ' + message.body + '\n' +
                'updated_at: ' + message.updated_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Show Inbox Messages

This example requests a list of messages in the inbox and checks the response.

    Cloud.Messages.showInbox(function (e) {
        if (e.success) {
            alert('Success:\n' +
                'Count: ' + e.messages.length);
            for (var i = 0; i < e.messages.length; i++) {
                var message = e.messages[i];
                alert('Success:\n' +
                    'id: ' + message.id + '\n' +
                    'subject: ' + message.subject + '\n' +
                    'body: ' + message.body + '\n' +
                    'updated_at: ' + message.updated_at);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Show Sent Messages

This example requests a list of messages that have been sent and checks the response.

    Cloud.Messages.showSent(function (e) {
        if (e.success) {
            alert('Success:\n' +
                'Count: ' + e.messages.length);
            for (var i = 0; i < e.messages.length; i++) {
                var message = e.messages[i];
                alert('Success:\n' +
                    'id: ' + message.id + '\n' +
                    'subject: ' + message.subject + '\n' +
                    'body: ' + message.body + '\n' +
                    'updated_at: ' + message.updated_at);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Show Message Threads

This example requests a list of message threads and checks the response.

    Cloud.Messages.showThreads(function (e) {
        if (e.success) {
            alert('Success:\n' +
                'Count: ' + e.messages.length);
            for (var i = 0; i < e.messages.length; i++) {
                var message = e.messages[i];
                alert('Success:\n' +
                    'id: ' + message.id + '\n' +
                    'thread id: ' + message.thread_id + '\n' +
                    'subject: ' + message.subject + '\n' +
                    'body: ' + message.body + '\n' +
                    'updated_at: ' + message.updated_at);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Show Thread Messages

This example requests a list of messages in a thread and checks the response.

    Cloud.Messages.showThread({
        thread_id: savedThreadId
    }, function (e) {
        if (e.success) {
            alert('Success:\n' +
                'Count: ' + e.messages.length);
            for (var i = 0; i < e.messages.length; i++) {
                var message = e.messages[i];
                alert('Success:\n' +
                    'id: ' + message.id + '\n' +
                    'thread id: ' + message.thread_id + '\n' +
                    'subject: ' + message.subject + '\n' +
                    'body: ' + message.body + '\n' +
                    'updated_at: ' + message.updated_at);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Remove a Message

This example deletes a message and checks the response.

    Cloud.Messages.remove({
        message_id: savedMessageId
    }, function (e) {
        if (e.success) {
            alert('Removed');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Remove Thread Messages

This example deletes all messages in a thread and checks the response.

    Cloud.Messages.removeThread({
        thread_id: savedThreadId
    }, function (e) {
        if (e.success) {
            alert('Removed');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

<ApiDocs/>
