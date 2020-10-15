---
title: Titanium Angular Basics
weight: '20'
---

# Titanium Angular Basics

## Project structure

Let's take a closer look at the directory structure of your new Titanium Angular project created from the default template:

**Titanium Angular project structure**

```
.
└── project-name
    ├── src
    ├── platform
    │   ├── android
    │   └── ios
    ├── Resources
    ├── .eslintrc.json
    ├── tiapp.xml
    └── tsconfig.json
```

These various files and folders all have a specific purpose:

* **src**: This folder contains all development resources and is pretty similar to a standard Angular project.

* **platform**: Contains platform specific files for Android and iOS

* **Resources**: A generated directory which contains resources for the final app build including Webpack bundles and resources such as images. **DO NOT EDIT ANY **OF THESE** FILES**

* **.eslintrc.json**: Configuration file for ESLint using [angular-eslint](https://github.com/angular-eslint/angular-eslint)

* **tiapp.xml**: This is the main configuration file for your project. You can make platform specific configurations and adjust general build or runtime settings. For more info see the [tiapp.xml and timodule.xml Reference](/guide/Titanium_SDK/Titanium_SDK_Guide/Appendices/tiapp.xml_and_timodule.xml_Reference/).

* **tsconfig.json**: Configuration file for TypeScript

Inside the `src` folder you'll find all important files that will bootstrap the Angular core inside a Titanium app. This is also the folder you'll be working with most of the time as it contains your Angular source files as well as all other app resources.

```
project-name
└── src
    ├── app
    │   ├── app.component.ts
    │   ├── app.module.ts
    │   └── ...
    ├── assets
    ├── main.ts
    ├── polyfills.ts
    └── ...
```

Here is what those various files and folder do:

* ****app/**app.component.ts**: The root component that will be loaded when your applications starts.

* ****app/**app.module.ts**: This contains the main module that configures a great part of your application.

* **assets:** Contains assets such as images. Similar to Alloy, all resources you would place under the `Resources` folder in classic apps go here instead.

* **main.ts**: The entry point to your application that bootstraps Angular and loads the `AppModule`.

* **polyfills.ts:** Contains additional polyfills needed by Angular. You can add your own extra polyfills to this file.

::: tip 💡 Ahead-of-time compilation issue
Among those files, you will notice additional files with an `.aot` file extension. Those are for Angular's Ahead-of-time compilation that is used for faster load times in production builds. This is currently not yet supported in the current Tech Preview.
:::

## Titanium Angular startup

The files in the `src/app` folder are almost identical to the files in an [Angular web application](https://angular.io/start). Let's take a closer look at those files to point out the differences, starting with the `main.ts.`

**main.ts**

```typescript
import './polyfills';
import { platformTitaniumDynamic } from 'titanium-angular';
import { AppModule } from './app/app.module';

platformTitaniumDynamic()
  .bootstrapModule(AppModule);
```

Through an import statement, we pull in the `platformTitaniumDynamic` function and a TypeScript class calles `AppModule`. The `platformTitaniumDynamic` function comes from the `titanium-angular` module, which provides the platform which is required to run Angular inside Titanium. Just like Angular's own `platformBrowserDynamic` function is used to setup Angular in an browser enviornment, `platformTitaniumDynamic` sets up Angular in Titanium App.

The following `bootstrapModule` function is the same as in an Angular web application. It expects an Angular module that is responsible for providing the main configuration of your app.

**app.module.ts**

```typescript
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { TitaniumModule } from 'titanium-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { IntroComponent } from './intro.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    IntroComponent,
    HomeComponent
  ],
  imports: [
    TitaniumModule,
    AppRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {

}
```

The two important things here to note are the `bootstrap` and `imports` properties. Through the `import` property, we pull in the `TitaniumModule`, which, for example, allows you to use Titanium elements as tags in templates but also does a lot more under the hood to properly setup Angular for the use in Titanium.

The `bootstrap` property defines that, after Angular is done with its internal bootstrap process, it loads the `AppComponent`. You can see an excerpt of the file bellow.

**app.component.ts**

```typescript
import { Component } from '@angular/core';

/**
 * This is the root component of your app which setups routing between the
 * different components via the `ti-router-outlet` directive.
 */
@Component({
  template: '<ti-router-outlet></ti-router-outlet>'
})
export class AppComponent {}
```

::: tip 💡 Component interaction with the template and Titanium views
If you open the other component files in your editor, you'll notice that the files contain different examples that demonstrate how you can interact with Titanium views within the component. This follows the same pattern as in a default Angular web application. Visit Angular's [Components & Templates](https://angular.io/guide/displaying-data) guide for an in depth tutorial on this topic.
:::

In the above excerpt, the `app.compoinent.ts` defines it's template through the template property. In such a template you can make use of Titanium UI elements to create your app's user interface.

## Titanium UI elements in Angular

The usage of Titanium UI elements is the main difference compared to building Angular apps on the web. Instead of the usual `div` or `span` elements you are used to when developing for browser environments, you compose your app's UI using various Titanium elements. There are a wide range of [Titanium UI](#!/api/Titanium.UI) elements that you can use for this matter.

To create a simple button, for example, you can use the `Button` element. This uses a [Titanium.UI.Button](#!/api/Titanium.UI.Button) which will be rendered as a `UIButton` on iOS, or as an `android.widget.Button` on Android. You don't need to know any implementation details from either of these native controls as Titanium does all of the actual rendering for you.

Let's take a look at some examples that will explain in detail how to use Titanium UI elements in Angular.

```xml
<Button #demoButton title="Tap me!" (click)="increaseTapCount()"></Button>
```

::: tip 💡 Hint
Note that all elements in an Angular template need to be closed by a matching tag. Self-closing elements, as you may know them from HTML, or maybe Alloy, are not allowed.
:::

In this example, we create a button, setting a property and also setting up an event listener. We also set a [template reference variable](https://angular.io/guide/template-syntax#template-reference-variables--var-) that allows you to access a specific element in the corrosponding component.

Here is what all of the above does in detail:

* `#demoButton`: This sets a template reference variable, which allows you to access this element elsewhere in the template or inside the component via the [ViewChild](https://angular.io/api/core/ViewChild) decorator.

* `title`: Sets the title property of the button.

* `(click)`: This sets up an event listener to the button's click event. It binds to the `increaseTapCount` method in the component class. You can also pass `$event` into the function to gain access to the Titanium event: `(click)="increaseTapCount($event)"`.

```xml
<Label color="white" [font]="{ fontSize: 32 }" top="100" left="10">Now on Titanium</Label>
```

This creates a new `Label` and sets some properties on it, just like you would on HTML elements. For elements that have a `text` or `title` property, you can write the text you want directly between the element tags. Titanium Angular will automatically populate those properties for you. The other attributes of the above code do the following:

* `color`: Sets the text color of the label. You can use common color names or hex values. For information about color values, see the "Colors" section of [Titanium.UI](#!/api/Titanium.UI) .

* `[font]`: This sets the label's [font](#!/api/Font) property. Note the square brakets around the property name. This instructs Angular to interpret the value as an JS expression which results in setting the \`fontSize\` property. It can also be used to bind the value from a component property by simply specifiying its name.

* `top`: Allows you to specify the top position of the label. The behavior and effect of this property depends in the used Layout and other positioning properties.

* `left`: Specify the left position of the label. The behavior and effect of this property depends on the used layout and other positioning properties.

## Layouts

To control how Titanium positions your UI elements, you have three different layouting behaviors to choose from. Refer to [Layouts Positioning and the View Hierarchy](/guide/Titanium_SDK/Titanium_SDK_How-tos/User_Interface_Fundamentals/Layouts_Positioning_and_the_View_Hierarchy/) and [layout property docs](#!/api/Titanium.UI.View-property-layout) to see how exactly each layout method works and how the different positioning properties behave in each layout.

To define a layout in an Angular template you can either specifiy the `layout` property or use the `HorizontalLayout` and `VerticalLayout` directives.

```xml
<View layout="vertical">
  <TextField hintText="Username"></TextField>
  <TextField hintText="Password"></TextField>
</View>
```

```xml
<VerticalLayout>
  <TextField hintText="Username"></TextField>
  <TextField hintText="Password"></TextField>
</VerticalLayout>
```

The layout directives internally also use a View that wraps the content and sets the layout property to either `horizontal` or `vertical`.
