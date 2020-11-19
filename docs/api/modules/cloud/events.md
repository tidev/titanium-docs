---
editUrl: https://github.com/appcelerator-modules/ti.cloud/edit/master/apidoc/Events/Events.yml
---
# Modules.Cloud.Events

<TypeHeader/>

## Examples

### Create Event

This example creates a new event and checks the response.

    Cloud.Events.create({
        name: 'Celebration',
        start_time: starttime,
        duration: 3600,
        recurring: 'monthly',
        recurring_count: 5
    }, function (e) {
        if (e.success) {
            var event = e.events[0];
            alert('Success:\n' +
                'id: ' + event.id + '\n' +
                'name: ' + event.name + '\n' +
                'updated_at: ' + event.updated_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Show an Event

This example retrieves information about a event and checks the response.

    Cloud.Events.show({
        event_id: savedEventId
    }, function (e) {
        if (e.success) {
            var event = e.events[0];
            alert('Success:\n' +
                'id: ' + event.id + '\n' +
                'name: ' + event.name + '\n' +
                'updated_at: ' + event.updated_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Show Occurrences for an Event

This example retrieves information about an event's occurrences and checks the response.

    Cloud.Events.showOccurrences({
        event_id: savedEventId
    }, function (e) {
        if (e.success) {
            alert('Success:\n' +
                'Count: ' + e.event_occurrences.length);
            for (var i = 0; i < e.event_occurrences.length; i++) {
                var event = e.event_occurrences[i].event;
                alert('id: ' + event.id + '\n' +
                      'name: ' + event.name + '\n' +
                      'start time: ' + event.start_time + '\n' +
                      'updated_at: ' + place.updated_at);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Query Events

This example requests a list of events and checks the response.

    Cloud.Events.query(function (e) {
        if (e.success) {
            alert('Success:\n' +
                'Count: ' + e.events.length);
            for (var i = 0; i < e.events.length; i++) {
                var event = e.events[i];
                alert('id: ' + event.id + '\n' +
                      'name: ' + event.name + '\n' +
                      'start time: ' + event.start_time + '\n' +
                      'updated_at: ' + place.updated_at);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Query Event Occurrences

This example retrieves a list of event occurrences and checks the response.

    Cloud.Events.queryOccurrences(function (e) {
        if (e.success) {
            alert('Success:\n' +
                'Count: ' + e.event_occurrences.length);
            for (var i = 0; i < e.event_occurrences.length; i++) {
                var event = e.event_occurrences[i].event;
                alert('id: ' + event.id + '\n' +
                      'name: ' + event.name + '\n' +
                      'start time: ' + event.start_time + '\n' +
                      'updated_at: ' + place.updated_at);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Search Events

This example requests a list of events and checks the response.

    Cloud.Events.search({
        place_id: savedPlaceId,
        start_time: startTime,
    }, function (e) {
        if (e.success) {
            alert('Success:\n' +
                'Count: ' + e.events.length);
            for (var i = 0; i < e.events.length; i++) {
                var event = e.events[i];
                alert('id: ' + event.id + '\n' +
                      'name: ' + event.name + '\n' +
                      'start time: ' + event.start_time + '\n' +
                      'updated_at: ' + place.updated_at);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Search Event Occurrences

This example retrieves a list of event occurrences and checks the response.

    Cloud.Events.searchOccurrences({
        place_id: savedPlaceId,
        start_time: startTime
    }, function (e) {
        if (e.success) {
            alert('Success:\n' +
                'Count: ' + e.event_occurrences.length);
            for (var i = 0; i < e.event_occurrences.length; i++) {
                var event = e.event_occurrences[i].event;
                alert('id: ' + event.id + '\n' +
                      'name: ' + event.name + '\n' +
                      'start time: ' + event.start_time + '\n' +
                      'updated_at: ' + place.updated_at);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Search for events

This example searches for events and checks the response.

    Cloud.Events.search({
        latitude: lat,
        longitude: lon
    }, function (e) {
        if (e.success) {
            alert('Success:\n' +
                'Count: ' + e.events.length);
            for (var i = 0; i < e.events.length; i++) {
                var event = e.events[i];
                alert('id: ' + event.id + '\n' +
                      'name: ' + event.name + '\n' +
                      'longitude: ' + event.longitude + '\n' +
                      'latitude: ' + event.latitude + '\n' +
                      'updated_at: ' + event.updated_at);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Update an Event

This example updates a event and checks the response.

    Cloud.Events.update({
        event_id: savedEventId,
        name: 'Annual Celebration',
        start_time: starttime,
        duration: 3600,
        recurring: 'monthly',
        recurring_count: 5
    }, function (e) {
        if (e.success) {
            var event = e.events[0];
            alert('Success:\n' +
                'id: ' + event.id + '\n' +
                'name: ' + event.name + '\n' +
                'updated_at: ' + event.updated_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Remove an Event

This example deletes a event and checks the response.

    Cloud.Events.remove({
        event_id: savedEventId
    }, function (e) {
        if (e.success) {
            alert('Removed');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

<ApiDocs/>
