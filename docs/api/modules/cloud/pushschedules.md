# Modules.Cloud.PushSchedules

<TypeHeader/>

## Overview

The following APIs are only available for Appcelerator Platform customers.  You must be an
application admin to use these APIs.

The PushSchedules API lets you schedule push notifications to be delivered to your application users
on a recurring or one-time basis.

You may create up to 100 scheduled push notifications for your application.
Datetime fields use the ISO 8601 format, for example, `YYYY-MM-DDTHH:mm:ss+ZZZZ`.

For information on configuring and setting up push notifications,
see the [Push Notifications guide](https://docs.appcelerator.com/platform/latest/#!/guide/Push_Notifications).

## Examples

### Create a scheduled push notification

This example schedules a push notification to be sent only once within the five-day perid.

    Cloud.PushSchedules.create({
        schedule: {
            name: 'push schedule',
            start_time: '2015-09-05T10:11',
            recurrence: {
                interval: 'weekly',
                end_time: '2015-09-10T10:11'
            },
            push_notification: {
                payload: 'hello world',
                channel: 'channelOne'
            }
        }
    }, function(e) {
        if (e.success) {
            Ti.API.info('Success! \n id: ' + e.push_schedules[0].id);
        } else {
            Ti.API.error('Error: ' + ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Remove a scheduled push notification

This example deletes the specified scheduled push notification.

    Cloud.PushSchedules.remove({
        ids: savedPushId
    }, function(e){
        if (e.success) {
            Ti.API.info("Success!");
        } else {
            Ti.API.error('Error: ' + ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Query scheduled push notifications

This example retrieves all scheduled push notifications.

    Cloud.PushSchedules.query({}, function(e) {
        if (e.success) {
            Ti.API.info("List of scheduled push notifications:");
            e.push_schedules.forEach(function(push){
                Ti.API.info("\t" + push.name);
            });
        } else {
            Ti.API.error('Error: ' + ((e.error && e.message) || JSON.stringify(e)));
        }
    });

<ApiDocs/>
