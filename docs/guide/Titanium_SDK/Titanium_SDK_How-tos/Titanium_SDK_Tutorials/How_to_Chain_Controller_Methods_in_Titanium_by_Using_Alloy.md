---
title: How to Chain Controller Methods in Titanium by Using Alloy
weight: '50'
---

# How to Chain Controller Methods in Titanium by Using Alloy

Titanium and Alloy has as great feature to create controllers and be reactive to triggers or call methods without creating a pointer.

For the purpose of this tutorial, let's assume that we want to open a modal settings view and react to the settings being saved BEFORE closing the view. In this case, we might typically write:

```javascript
var settings = Alloy.createController(“screens/settings”);
settings.getView().open({modal:true});
settings.on("saved", function( ){
  // do stuff here
  settings = null;
});
```

This approach is fine, but it’s a lot of code.

With Alloy, you can chain methods and do ALL this without ever creating the pointer variable:

```
Alloy.createController(“screens/settings”).on("saved", function( ){
  // do stuff here
}).getView().open({modal: true});
```

We can achieve the same thing in a few lines of code with no pointer created or potential memory leak issues.

This tutorial was originally posted in a blog post by [Jason Keen](https://devblog.axway.com/author/jkneen/) entitled [How to Chain Controller Methods in Titanium by Using Alloy](https://devblog.axway.com/mobile-apps/chain-controller-methods-in-alloy/?utm_source=Axway+Developer&utm_campaign=646e139983-BLOG_ROUNDUP_2019_MAY_17&utm_medium=email&utm_term=0_763a3fa2c9-646e139983-431333853).
