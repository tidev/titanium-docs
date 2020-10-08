---
editUrl: https://github.com/appcelerator-modules/titanium-apple-sign-in/edit/master/apidoc/LoginButton.yml
---
# Modules.Applesignin.LoginButton

<TypeHeader/>

## Examples

### Login button to signin

``` javascript
var AppleSignin = require('ti.applesignin');

var win = Ti.UI.createWindow({
    backgroundColor: '#fff'
});

var signInButton = AppleSignin.createLoginButton({
    type: AppleSignin.BUTTON_TYPE_SIGNIN,
    style: AppleSignin.BUTTON_STYLE_BLACK,
    top: 150,
    height: 50,
    width: 300,
    borderRadius: 10
});

signInButton.addEventListener('click', function () {
    AppleSignin.authorize({
        scopes: [AppleSignin.AUTHORIZATION_SCOPE_EMAIL, AppleSignin.AUTHORIZATION_SCOPE_FULLNAME]
    });
});

AppleSignin.addEventListener('login', function (e) {
    if (e.success === true) {
            alert('Login successfully');
        } else {
            alert('Login failed');
        }
});

win.add(signInButton);
win.open();
```

<ApiDocs/>
