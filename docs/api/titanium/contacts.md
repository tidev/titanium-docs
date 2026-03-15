---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Contacts/Contacts.yml
---
# Titanium.Contacts

<TypeHeader/>

## Overview

See examples for more information.

### iOS Platform Notes

On iOS, the contacts database may be modified by an external application, causing any `Person` or
`Group` objects you've retrieved to be out of sync with the database. The IDs of these objects are
not guaranteed to remain the same, so updating an object when it is out of sync may have
unpredictable results.

To avoid this, listen for the [reload](Titanium.Contacts.reload) event. When you receive a
`reload` event, you should assume that any existing `Person` or `Group` objects are invalid and
reload them from the `Contacts` module before modifying them.

See the examples for a sample use of the `reload` event.

If 'ABAddressBookErrorDomain error 0' occurs, it implies that you are not allowed to add or edit
certain fields. Check your default account in the iOS settings under contacts. If it's not 'iCloud',
most likely it will not support fields such as alternateBirthday or socialProfile.

These APIs are unavailable on macOS if the app is built on a version of Xcode < 12.

## Examples

### Request access to the address book

``` js
var performAddressBookFunction = function(){...};
var addressBookDisallowed = function(){...};
if (Ti.Contacts.hasContactsPermissions()) {
    performAddressBookFunction();
} else {
    Ti.Contacts.requestContactsPermissions(function(e) {
        if (e.success) {
            performAddressBookFunction();
        } else {
            addressBookDisallowed();
        }
    });
}
```

### Query Existing System Address Book Records

Output to the console all properties of all people.

``` js
var singleValue = [
  'recordId', 'firstName', 'middleName', 'lastName', 'fullName', 'prefix', 'suffix',
  'nickname', 'firstPhonetic', 'middlePhonetic', 'lastPhonetic', 'organization',
  'jobTitle', 'department', 'note', 'birthday', 'created', 'modified', 'kind'
];
var multiValue = [
  'email', 'address', 'phone', 'instantMessage', 'relatedNames', 'date', 'url'
];
var people = Ti.Contacts.getAllPeople();
Ti.API.info('Total contacts: ' + people.length);
for (var i=0, ilen=people.length; i<ilen; i++){
  Ti.API.info('---------------------');
  var person = people[i];
  for (var j=0, jlen=singleValue.length; j<jlen; j++){
    Ti.API.info(singleValue[j] + ': ' + person[singleValue[j]]);
  }
  for (var j=0, jlen=multiValue.length; j<jlen; j++){
    Ti.API.info(multiValue[j] + ': ' + JSON.stringify(person[multiValue[j]]));
  }
}
```

### Add New System Address Book Records

Create two new records in the system address book. Note that the <Titanium.Contacts.Person>
object is queried in the same way that it is created (as shown in the previous example.)

``` js
Ti.API.info('Saving contact...');
Ti.Contacts.createPerson({
  firstName: 'Paul',
  lastName: 'Dowsett',
  address:{
    work:[
      {
        CountryCode: 'gb', // determines how the address is displayed
        Street: '200 Brook Drive\nGreen Park',
        City: 'Reading',
        County: 'Berkshire',
        Country: 'England',
        ZIP: 'RG2 6UB'
      },
      {
        CountryCode: 'gb', // determines how the address is displayed
        Street: '1 St Pauls Road\nClerkenwell',
        City: 'City of London',
        State: 'London',
        Country: 'England',
        ZIP: 'EC1 1AA'
      }
    ],
    home:[
      {
        CountryCode: 'gb', // determines how the address is displayed
        Street: '2 Boleyn Court',
        City: 'London',
        State: 'Greenwich',
        Country: 'England',
        ZIP: 'SE10'
      }
    ]
  },
  birthday: '2012-01-01T12:00:00.000+0000',
  instantMessage:{
    home:[
      {
        service: 'AIM',
        username: 'leisureAIM'
      },
      {
        service: 'MSN',
        username: 'no_paul_here@msn.com'
      }
    ],
    work:[
      {
        service: 'AIM',
        username: 'seriousAIM'
      }
    ]
  },
  organization: 'Appcelerator',
  phone:{
    mobile: ['07900 000001', '07900 000002'],
    work: ['+44 (0)118 925 6128', '+44 (0)118 000 0000']
  },
  url:{
    homepage: ['www.google.com'],
    work: ['www.titaniumsdk.com', 'www.example.com']
  }
});
Ti.API.info('Contact saved');

Ti.API.info('Saving contact...');
var workAddress1 = {
  'CountryCode': 'us',
  'Street':  '440 N. Bernardo Avenue',
  'City': 'Mountain View',
  'State': 'California',
  'Country': 'United States',
  'ZIP': '94043'
};

Ti.Contacts.createPerson({
  firstName:'Arthur',
  lastName:'Evans',
  address:{
    'work':[workAddress1]
  }
});
Ti.API.info('Contact saved');
```

### Repopulate contact data if it was modified externally

Listen for the `reload` event to repopulate the contact data
if it was modified externally, for example, in the iOS Contacts app.

``` js
var win = Ti.UI.createWindow();
var table = Ti.UI.createTableView();

// Repopulate contact data
function reloadContacts() {
    var contacts = Ti.Contacts.getAllPeople();
    var data = [];
    for (var i = 0; i < contacts.length; i++) {
        var title = contacts[i].fullName;
        if (!title || title.length === 0) {
            title = "(no name)";
        }
        var row = Ti.UI.createTableViewRow({
            title: title
        });
        data.push(row);
    }
    table.data = data;
}

Ti.Contacts.addEventListener('reload', function(e){
    alert('Reloading contacts. Your contacts were changed externally!');
    reloadContacts();
});

// initial call to populate contact data
reloadContacts();

win.add(table);
win.open();
```

<ApiDocs/>
