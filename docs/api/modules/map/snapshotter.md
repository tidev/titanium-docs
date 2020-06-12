# Modules.Map.Snapshotter

<TypeHeader/>

## Examples

### Taking a simple snapshot

This is a map-example which creates a simple snapshot of the specified map-area.

    var MapModule = require('ti.map');

    var win = Ti.UI.createWindow({
        backgroundColor: 'white'
    });

    var Snapshotter = MapModule.createSnapshotter({
        mapType: MapModule.HYBRID_TYPE,
        region: {
            latitude: 37.3382,
            longitude: -121.8863,
            latitudeDelta: 0.4,
            longitudeDelta: 0.4
        },
        size: {
            width: 300, 
            height: 200
        }
    });
    
    Snapshotter.takeSnapshot({
        success: function(e) {
            var imageView = Ti.UI.createImageView({
                image: e.image
            });
            win.add(imageView);
        },
        error: function(e) {
            Ti.API.error("The snapshot could not be taken: " + e.error);
        }
    });

    win.open();

<ApiDocs/>
