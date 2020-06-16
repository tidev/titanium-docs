---
title: A Simple Snippet
weight: '40'
---

# A Simple Snippet

## Overview

In this recipe, we show how to create a simple Ruble snippet, bind it to an activation trigger, and optionally place it in a menu.

## The Code

In the snippet below, we create a very simple snippet, bind it to the activation character "foo", and place it in a menu. This is the entire Ruble file, though you could ad the menu items and commands to your existing file.

```
require 'ruble'

bundle do |bundle|
  bundle.display_name = 'My Ruble'
  bundle.menu 'My Ruble' do |menu|
    menu.command 'My Snippet'
  end
end

snippet "My Snippet" do |snip|
  snip.trigger = "foo"
  snip.expansion = "my_super_snippet"
end
```

Once created and activated, type "foo" + TAB in your document and see "my\_super\_snippet" added to the document.
