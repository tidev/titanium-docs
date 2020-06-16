---
title: Modeling a User Account and Authentication
weight: '80'
---

# Modeling a User Account and Authentication

Demonstrates creating a user login and authentication flow using a data model.

::: tip App Folder Location
alloy/test/apps/**models/login**
:::

The application initially presents a login form (username is **user** and password is **password**). Upon successful login, the application presents three tabs: Profile, About Us, and Settings. The first two tabs display information about the user persisted to a SQL database. The Settings tab lets the user change their email address, and set the application's background color and image.

The main `index.js` view-controller uses the [Alloy.createController()](#!/api/Alloy-method-createController) method to conditionally display the `app/views/login.xml` or `app/views/home.xml` view depending on whether the model's `validateAuth()` method returns "true" or "false".

**app/controllers/index.js**

```javascript
if (OS_IOS) {
    // If the user is already logged in, show the home view. If
    // the user is not yet login, show the login view.
    Alloy.createController(Alloy.Models.user.validateAuth() ? 'home' : 'login').getView().open();
} else {
    $.index.open();
}
```

::: tip 💡 Hint
The sample's UI was designed for iOS devices only, but can easily be adapted to Android or other platforms.
:::

The home.xml view defines a TabGroup with the three tabs, "Profile", "About Us" and "Settings". Each tab contains UI elements that are bound to the user model data – for example, `<Label text="{user.realname}" top="10"/>` or `<Window title="Settings" barColor="{user.themeBGColor}">`.

**app/views/home.xml**

```xml
<Alloy>
    <TabGroup>
        <Tab title="Profile">
            <Window title="Profile" barColor="{user.themeBGColor}">
                <RightNavButton><Button class="logout" onClick="logout"/></RightNavButton>
                <Label text="{user.realname}" top="10"/>
                <Label text="{user.email}" top="40"/>
                <ImageView width="100%" image="{user.themeImage}" bottom="0"/>
            </Window>
        </Tab>
        <Tab title="About Us">
            <Window title="About Us" barColor="{user.themeBGColor}">
                <!-- <RightNavButton><Button class="logout" onClick="logout"/></RightNavButton> -->
                <WebView url="https://en.wikipedia.org/wiki/Banana"/>
            </Window>
        </Tab>
        <Tab title="Settings">
            <Window title="Settings" barColor="{user.themeBGColor}">
                <!-- <RightNavButton><Button class="logout" onClick="logout"/></RightNavButton> -->
                <TableView id="themes" onClick="setTheme">
                    <TableViewSection headerTitle="Email">
                        <TableViewRow>
                            <TextField id="email" value="{user.email}" onBlur="setEmail" />
                        </TableViewRow>
                    </TableViewSection>
                    <TableViewSection headerTitle="Themes">
                        <TableViewRow title="Default" id="theme0"/>
                        <TableViewRow title="Banana" id="theme1"/>
                        <TableViewRow title="Jeans" id="theme2"/>
                    </TableViewSection>
                </TableView>
            </Window>
        </Tab>
    </TabGroup>
</Alloy>
```

**app/views/login.xml**

```xml
<Alloy>
    <Window>
        <ScrollView>
            <View class="container">
                <ImageView id="logo"/>
                <TextField id="username" onReturn="focusPassword"/>
                <TextField id="password" onReturn="login"/>
                <Button id="loginButton" onClick="login">Login</Button>
                <Label id="motto">"There's always a banana."</Label>
            </View>
        </ScrollView>
    </Window>
</Alloy>
```

The `user.js` model file defines the data schema used to represent the `user` model, and defines model fields for the username, email and theme. These fields are bound to UI elements in the home.xml view. The `user` model is also extended with custom functions that are used to log the user in and out, and to validate the user's session (the function used to determine what view to display initially).

The model's `transform()` function appends the `themeBGColor` and `themeColor` properties to the model data before it's sent to the view for rendering, based on the value of the `theme` model property.

::: tip 💡 Hint
For purposes of demonstration, the authentication key, username and password are hard-coded into the application.
:::

**app/models/user.js**

```javascript
var moment = require('alloy/moment');
var USERNAME = 'user',
    PASSWORD = 'password',
    AUTHKEY = 'somelongauthkeyforvalidation';
exports.definition = {
  config: {
    "columns": {
      "username":"text primary key",
            "realname":"text",
            "email":"text",
      "loggedIn":"integer",
            "loggedInSince":"text",
            "authKey":"text",
            "theme":"integer"
    },
    "adapter": {
      "type": "sql",
      "collection_name": "user",
            "idAttribute": "username"
    }
  },
  extendModel : function(Model) {
        _.extend(Model.prototype, {
            login: function(username, password) {
        // Fake login used for demonstration. Don't do this.
                if (username === USERNAME && password === PASSWORD) {
                    this.set({
                        loggedIn: 1,
                        loggedInSince: moment().format('YYYY-MM-DD HH:mm:ss.SSS'),
                        authKey: AUTHKEY
                    });
                    this.save();
                    return true;
                } else {
                    return false;
                }
            },
            logout: function() {
                this.set({
                    loggedIn: 0,
                    loggedInSince: '',
                    authKey: ''
                });
                this.save();
            },
            validateAuth: function() {
                if (this.get('loggedIn') === 1 && this.get('authKey') === AUTHKEY) {
                    return true;
                } else {
                    return false;
                }
            },
            transform: function() {
                var t = this.toJSON();
                t.themeBGColor = t.theme === 2 ? '#00f' : t.theme === 1 ? '#ff0' : '#963';
                t.themeImage = t.theme === 2 ? '/jeans.png' : t.theme === 1 ? '/banana.jpg' : '/family.jpg';
                return t;
            }
        });
        return Model;
    }
};
```
