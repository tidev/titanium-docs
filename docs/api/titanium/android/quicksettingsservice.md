# Titanium.Android.QuickSettingsService

<ProxySummary/>

## Overview

A special kind of service providing access to a tile in the quick settings menu. Used for customization
and event handling of the tile. Usage is similar to default <Titanium.Android.Service> but with the
addition of some specific attributes and methods. This service is not started from within the application 
with the help of an Intent, but instead whenever the custom tile is added in the quick settings menu by the
user. Applications can have multiple tiles in the quick settigs menu, but a <Titanium.Android.QuickSettingsService>
corresponds to a single one - you need separate service file for every tile.

To create a service file:

  1. Write the JavaScript code you want the service to execute in a separate file.
     The service can execute any Titanium APIs but you should only use non-UI APIs.
  2. Register the service in your `tiapp.xml` file. Refer to the example below.

  Icons used for the 'icon' attribute in the service declaration in tiapp.xml must
  be in the Android drawables folder, so they you should be put under
  `platform/android/res/drawable`
  Icons added with the setIcon method can be outside the directory.

To get a reference to the `Service` inside the JavaScript service code, use the
<Titanium.Android.currentService> property to retrieve a reference to the service,

Further Reading:

  * [Android Quick Settings Tile API](https://developer.android.com/about/versions/nougat/android-7.0.html#tile_api)

## Examples

### Update Tile Example

This example shows how to create a service in JavaScript.
It will update the Tile in quick settings according to the
user's interaction.

File: updatequicksettings.js:

    var service = Ti.Android.currentService;
    service.addEventListener('click', function () {

      if (service.getState() == Ti.Android.TILE_STATE_ACTIVE) {
        service.setState(Ti.Android.TILE_STATE_INACTIVE);
        service.setLabel('Inactive');
        service.setIcon('inactive.png');
      } else {
        service.setState(Ti.Android.TILE_STATE_ACTIVE);
        service.setLabel('Active');
        service.setIcon('active.png');
      }
      service.updateTile();
    }

Register the service in tiapp.xml:

    <ti:app>
        <android xmlns:android="http://schemas.android.com/apk/res/android">
            <services>
                <service url="updatequicksettings.js" type="quicksettings" label="Active" icon="active.png"/>
            </services>
        </android>
    </ti:app>

<ApiDocs/>
