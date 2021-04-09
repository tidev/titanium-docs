---
editUrl: https://github.com/appcelerator-modules/ti.ldap/edit/master/apidoc/Connection.yml
---
# Modules.LDAP.Connection

<TypeHeader/>

## Examples

### Connect

connection.connect({
  uri: "ldap://10.10.1.0:389"
}, function(e) {
  // Success
  Ti.API.info(JSON.stringify(e));
}, function(e) {
  // Error
  Ti.API.error(JSON.stringify(e));
  alert(e.message);
});

### Simple Bind

connection.simpleBind({
  dn: dn.value,
  password: password.value
}, function(e) {
  // Success
  Ti.API.info(JSON.stringify(e));
}, function(e) {
  // Error
  Ti.API.error(JSON.stringify(e));
  alert(e.message);
});

### SASL Bind

connection.saslBind({
  mech: "DIGEST-MD5",
  password: password.value,
  authorizationId: authorizationId.value,
  authenticationId: authenticationId.value
}, function(e) {
  // Success
  Ti.API.info(JSON.stringify(e));
}, function(e) {
  // Error
  Ti.API.error(JSON.stringify(e));
  alert(e.message);
});

### Search

var searchRequest = connection.search({
  async: true,
  base: base.value,
  scope: ldap.SCOPE_CHILDREN,
  filter: filter.value.length > 0 ? filter.value : null,
  attrs: attrs.value.length > 0 ? attrs.value.split(',') : null,
  async: asyncSwitch.value,
  timeLimit: timeLimit.value.length > 0 ? timeLimit.value : null
}, function(e) {
  showSearchResult(e.result);
}, function(e) {
  // Error
  Ti.API.error(JSON.stringify(e));
  alert(e.message);
});

<ApiDocs/>
