---
editUrl: https://github.com/appcelerator-modules/ti.cloud/edit/master/apidoc/KeyValues/KeyValues.yml
---
# Modules.Cloud.KeyValues

<TypeHeader/>

## Examples

### Set a Key-Value

This example sets a key-value and checks the response.

``` js
Cloud.KeyValues.set({
    name: 'welcome_message',
    value: 'Welcome to Appcelerator Cloud Services'
}, function (e) {
    if (e.success) {
        alert('Success');
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
```

### Get a Key-Value

This example gets a key-value and checks the response.

``` js
Cloud.KeyValues.get({
    name: 'welcome_message'
}, function (e) {
    if (e.success) {
        var keyvalue = e.keyvalues[0];
        alert('Success:\n' +
            'name: ' + keyvalue.name + '\n' +
            'value: ' + keyvalue.value);
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
```

### Append a Key-Value

This example appends a value to a key-value and checks the response.

``` js
Cloud.KeyValues.append({
    name: 'welcome_message',
    value: ', take a look around'
}, function (e) {
      if (e.success) {
          var keyvalue = e.keyvalues[0];
          alert('Success:\n' +
              'name: ' + keyvalue.name + '\n' +
              'value: ' + keyvalue.value);
      } else {
          alert('Error:\n' +
              ((e.error && e.message) || JSON.stringify(e)));
      }
});
```

### Increment a Key-Value

This example increments a key-value and checks the response.

``` js
Cloud.KeyValues.increment({
    name: 'score',
    value: 1
}, function (e) {
      if (e.success) {
          var keyvalue = e.keyvalues[0];
          alert('Success:\n' +
              'name: ' + keyvalue.name + '\n' +
              'value: ' + keyvalue.value);
      } else {
          alert('Error:\n' +
              ((e.error && e.message) || JSON.stringify(e)));
      }
});
```

### Remove a Key-Value

This example deletes a key-value and checks the response.

``` js
Cloud.KeyValues.remove({
    name: 'welcome_message'
}, function (e) {
      if (e.success) {
          alert('Success');
      } else {
          alert('Error:\n' +
              ((e.error && e.message) || JSON.stringify(e)));
      }
});
```

<ApiDocs/>
