---
title: Titanium Angular Routing
weight: '30'
---

# Titanium Angular Routing

Up to this point most of the Angular concepts are the same as in a normal Angular web application. This makes it possible to share a great part of you application logic within Angular regardless of whether your develop for the web or Titanium apps.

Starting with the application routing however, there are a few fundamental changes. How to setup and use routing in Titanium Angular will be described in detail here. If you haven't dealt with routing in Angular before, the [Routing & Navigation](https://angular.io/guide/router) guide is a great read.

## Setting up routing

If you followed our [Titanium Angular Getting Started Guide](/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_and_Angular/Titanium_Angular_Getting_Started_Guide/) and [Titanium Angular Basics](/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_and_Angular/Titanium_Angular_Basics/) guides you noticed that until now everything revolved around the `app.component.ts` and `app.component.html`. Let's change that and move to multiple components and setup the routing for those.

First, open `app/src/app.component.ts` and copy its content to `app/src/intro.component.ts`. Do the same for `app/src/app.component.html` and copy it over to `app/src/intro.component.html`. Open `intro.component.ts` again and change the component name and its template to reflect those recent changes.

**intro.component.ts**

```typescript
@Component({
    templateUrl: "./intro.component.html"
})
export class IntroComponent implements AfterViewInit, OnInit {
  ...
}
```

Now, open `app.component.ts` and replace it with an empty `AppComponent`.

```
import { Component } from '@angular/core';

@Component({
    selector: "ti-app",
    templateUrl: "./app.component.html"
})
export class AppComponent { }
```

After that, open `app.component.html` and replace its content with the Titanium router outlet directive.

**app.component.html**

```html
<ti-router-outlet></ti-router-outlet>
```

This is the place where Angular will load the routed views.

To let Angular know which routes your application has, create another file named `app-routing.module.ts` and paste the following code into it.

```javascript
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { TitaniumRouterModule } from 'titanium-angular';

import { IntroComponent } from './intro.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/intro', pathMatch: 'full' },
    { path: 'intro', component: IntroComponent }
];

@NgModule({
    imports: [TitaniumRouterModule.forRoot(appRoutes)],
    exports: [TitaniumRouterModule]
})
export class AppRoutingModule { }
```

This will setup a route for your previously created Intro`Component` under the path `/intro`. It also instructs Angular to load this route upon the initial app launch by setting up a redirect for an empty path string.

::: tip 💡 Path routing in Titanium
You may be wondering how routing via paths is working inside a native app. The short answer is that we emulate the browsers [History API](https://developer.mozilla.org/en-US/docs/Web/API/History) and let Angular's router do its magic to load the configured components. We also make sure to properly handle native navigation events such the Android back button or the iOS swipe left-to-right gesture to trigger a back navigation.
:::

Finally, open up the `app.module.ts` and add imports for the `AppRoutingModule` and `IntroComponent`, add the module to the `imports` and the component to the `declarations` of the `AppModule` configuration. Your `app.module.ts` should look like this afterwards:

```
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { TitaniumModule } from 'titanium-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        TitaniumModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
```

You can now build your app again and routing will be enabled. But the app won't be any different than before so let's change that and see the router in action.

## Adding another component

Now that routing is in place, it is time to add a new component and navigate to it using the Angular Router. Create `app/src/home.component.ts` and paste the following code.

**home.component.ts**

```typescript
import { Component } from '@angular/core';

@Component({
    templateUrl: "./home.component.html"
})
export class HomeComponent {

}
```

Since we focus on the routing aspect here, we just use a very simple template. Create `app/src/home.component.html` and create the following user interface.

**home.component.html**

```html
<Window backgroundColor="#fafafa">
    <Label>Hello World!</Label>
</Window>
```

Now you need to go back to your `app-routing.module.ts` and add a route for your newly created component.

```javascript
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { TitaniumRouterModule } from 'titanium-angular';

import { IntroComponent } from './intro.component';
import { HomeComponent } from './home.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/intro', pathMatch: 'full' },
    { path: 'intro', component: IntroComponent },
    { path: 'home', component: HomeComponent }
];

@NgModule({
    imports: [TitaniumRouterModule.forRoot(appRoutes)],
    exports: [TitaniumRouterModule]
})
export class AppRoutingModule { }
```

After that, go to your `app.module.ts` and add the HomeComponent to the declarations property.

```
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { TitaniumModule } from 'titanium-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IntroComponent } from './intro.component';
import { HomeComponent } from 'home.component';

@NgModule({
    imports: [
        TitaniumModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        IntroComponent,
        HomeComponent
    ],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
```

At this point the routing setup is done and Angular knows about your new component and its route. The last thing that is missing now is to actually trigger the navigation. Go back to the `intro.component.html` and change the `Button` element that is marked with the `#demoButton` identifier to the following.

```xml
<Button #demoButton title="Tap me!" tiRouterLink="/home" bottom="40" height="40" width="150" backgroundColor="#1976d2" color="white" borderRadius="20"></Button>
```

Note the usage of the `tiRouterLink` directive which is used to trigger the navigation to a new route. You can use this directive on all elements that support the `click` Event. If you need to trigger the navigation from your code, for example, the click event isn't available or you need to execute some other logic first, you can also navigate using the `TitaniumRouter`. For this you inject the router into your component and then call the `navigate` or `navigateByUrl` methods as demonstrated by the code below.

```
import { TitaniumRouter } from 'titanium-angular';

class ExampleComponent {
  constructor(private router: TitaniumRouter) { }

  openHome() {
    this.router.navigate(['home']).catch(e => Ti.API.error(e.message));
  }
}
```

These methods take the same parameters as [navigate](https://angular.io/api/router/Router#navigate) and [navigateByUrl](https://angular.io/api/router/Router#navigateByUrl) from the original Angular router.

Thats it! If you build the app again and tap on the button, it will now navigate to your second component.

## Appendix

### Additional information on routing

In some guides, the routing configuration is added directly into the `app.module.ts` along wit the import of the `TitaniumRouter` (or it's web equvalent). That way you don't need a specilal module only for routing. For simple apps that only have a handful of views, this is totally fine. But as your app grows, you will find it useful to split up routing configurations over different modules and seperate routing concers from other app concerns.

For more details in this topic make sure to read the extensive Angular [Routing & Navigation](https://angular.io/guide/router) guide. There you will learn more about routing modules or feature modules and how to organize your routing using those. This goes far beyond the goal of this simple getting started guide. If you want to see an example of all this applied to Titanium Angular check the [ti-angular-example](https://github.com/appcelerator/titanium-angular/tree/master/ti-angular-example) app.
