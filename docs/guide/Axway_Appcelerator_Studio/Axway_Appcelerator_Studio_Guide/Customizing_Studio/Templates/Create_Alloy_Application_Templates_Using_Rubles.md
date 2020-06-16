---
title: Create Alloy Application Templates Using Rubles
weight: '10'
---

# Create Alloy Application Templates Using Rubles

To create Alloy templates via Rubles, add the following block to `bundle.rb`:

```
project_template "Alloy Template Test" do |t|
    t.type = :titanium_mobile
    t.location = "templates/slider.zip"
    t.description = "Test Alloy templates"
    t.tags = ['Alloy']
end
```

We recommend that you use the type (`t.type`) and tags (`t.tags`) shown in this code block. The location (`t.location`) points to the zip file that contains all the files to be added or overwritten after the default Alloy project is created.

When creating the zip file, make sure you are zipping only Alloy project content.
