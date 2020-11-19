---
editUrl: https://github.com/appcelerator-modules/ti.cloud/edit/master/apidoc/Objects/Objects.yml
---
# Modules.Cloud.Objects

<TypeHeader/>

## Examples

### Create Custom Object

This example creates a new custom object and checks the response.

    Cloud.Objects.create({
        classname: 'cars',
        fields: {
            make: 'nissan',
            color: 'blue',
            year: 2005
        }
    }, function (e) {
        if (e.success) {
            var car = e.cars[0];
            alert('Success:\n' +
                'id: ' + car.id + '\n' +
                'make: ' + car.make + '\n' +
                'color: ' + car.color + '\n' +
                'year: ' + car.year + '\n' +
                'created_at: ' + car.created_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Show Custom Objects

This example requests information about custom objects and checks the response.

    Cloud.Objects.show({
        classname: 'cars',
        ids: [ savedCar1.id, savedCar2.id ]
    }, function (e) {
        if (e.success) {
            alert('Success:\n' +
                'Count: ' + e.cars.length);
            for (var i = 0; i < e.cars.length; i++) {
                var car = e.cars[i];
                alert('id: ' + cars.id + '\n' +
                    'make: ' + car.make + '\n' +
                    'color: ' + car.color + '\n' +
                    'year: ' + car.year + '\n' +
                    'created_at: ' + car.created_at);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Update Custom Object

This example updates a custom object and checks the response.

    Cloud.Objects.update({
        classname: 'cars',
        id: savedCar1.id,
        fields: {
            color: 'purple',
            mileage: 10000
        }
    }, function (e) {
        if (e.success) {
            var car = e.cars[0];
            alert('Success:\n' +
                'id: ' + car.id + '\n' +
                'make: ' + car.make + '\n' +
                'color: ' + car.color + '\n' +
                'year: ' + car.year + '\n' +
                'mileage: ' + car.mileage + '\n' +
                'updated_at: ' + car.updated_at);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Remove Custom Object

This example deletes a custom object and checks the response.

    Cloud.Objects.remove({
        classname: 'cars',
        id: savedCar1.id
    }, function (e) {
        if (e.success) {
            alert('Success');
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

### Query for Custom Objects

This example requests information about custom objects and checks the response.

    Cloud.Objects.query({
        classname: 'cars',
        page: 1,
        per_page: 10,
        where: {
            color: 'blue'
        }
    }, function (e) {
        if (e.success) {
            alert('Success:\n' +
                'Count: ' + e.cars.length);
            for (var i = 0; i < e.cars.length; i++) {
                var car = e.cars[i];
                alert('id: ' + cars.id + '\n' +
                    'make: ' + car.make + '\n' +
                    'color: ' + car.color + '\n' +
                    'year: ' + car.year + '\n' +
                    'created_at: ' + car.created_at);
            }
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });

<ApiDocs/>
