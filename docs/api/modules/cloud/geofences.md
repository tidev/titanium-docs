---
editUrl: https://github.com/appcelerator-modules/ti.cloud/edit/master/apidoc/GeoFences/GeoFences.yml
---
# Modules.Cloud.GeoFences

<TypeHeader/>

## Overview

This feature is only available for **enterprise users**, and the current user must be an **application
admin** to create, update or remove geo-fence objects.

The ArrowDB GeoFences API lets you manage geographic regions with an associated JSON data payload.
Use this API to have the device query the ArrowDB server to retrieve data based on a location.

## Examples

### Create a geo-fence object

This example creates a new geo-fence object covering a 10 mile radius around San Francisco,
CA, USA, and checks the response.

      Cloud.GeoFences.create({
          geo_fence: {
              "loc":{"coordinates":[-122.4167,37.7833], "radius":"10/3959"},
              "payload":{"alert":"24-hour sale at our SF flagship store on 12/26!"},
              "start_time": "2014-12-25T00:00",
              "end_time":"2014-12-26T19:00"
          }
      }, function (e) {
          if (e.success) {
              Ti.API.info(JSON.stringify(e.geo_fences));
          } else {
              alert('Error:\n' +
                  ((e.error && e.message) || JSON.stringify(e)));
          }
      });

### Query for geo-fence objects

This example searches for geo-fence objects within 2 km of Oakland, CA, USA, and checks the response.

      Cloud.GeoFences.query({
          where:{
              "loc": { 
                  "$nearSphere" : { 
                      "$geometry" : { "type" : "Point", "coordinates" : [-122.2708,37.8044] },
                          "$maxDistance" : 2000
                      }
                  }
          }
      }, function (e) {
          if (e.success) {
              Ti.API.info(JSON.stringify(e.geo_fences));
          } else {
              alert('Error:\n' +
                  ((e.error && e.message) || JSON.stringify(e)));
          }
      });

### Update a geo-fence object

This example updates a geo-fence object and checks the response.

    Cloud.GeoFences.update({
        id: geoFenceId,
        geo_fence:{"loc":{"place_id":"531a1217447d300f05003b69","radius":"2/6371"}}
    }, function (e) {
        if (e.success) {
            Ti.API.info(JSON.stringify(e.geo_fences));
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Delete a geo-fence object

This example deletes a geo-fence object and checks the response.

    Cloud.GeoFences.remove({
        id: geoFenceId
    }, function (e) {
        if (e.success) {
            Ti.API.info(JSON.stringify(e));
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

<ApiDocs/>
