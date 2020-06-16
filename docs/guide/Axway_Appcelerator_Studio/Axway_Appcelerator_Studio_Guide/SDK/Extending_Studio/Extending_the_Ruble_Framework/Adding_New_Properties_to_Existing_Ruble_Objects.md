---
title: Adding New Properties to Existing Ruble Objects
weight: '10'
---

# Adding New Properties to Existing Ruble Objects

If you add new properties to an existing Ruble object, you'll need to make a few related changes. Here, we discuss the addition of a new "Icon" property to the Project Template Element. This is a property that enables a user to set a path to an icon for a project template.

## Update the element class

We update the model element to contain the new getter and setters. Note that we expect a string value and return a string value here. If the end object type is more complex, you may need to create separate methods to serialize and deserialize from a string value.

In com.aptana.scripting.model.ProjectTemplateElement:

```
/*
 * setIconPath
 */
public void setIcon(String iconPath)
{
  fIconPath = iconPath;
}

/*
 * getIconPath
 */
public String getIcon()
{
  return fIconPath;
}
```

## Update the project\_template.rb wrapper file

This is the wrapper the Ruby code interacts with. This is translated into the getIcon and setIcon calls above.

In plugins/com.aptana.scripting/framework/ruble/project.template.rb:

```
def icon
  @jobj.icon
end

def icon=(path)
  @jobj.icon = path
end
```

## Update the Bundle View

The Bundle View shows the properties for the current selected element.

Update com.aptana.scripting.ui.views.ProjectTemplateNode to add an item to the existing enum for the new property:

```
...
},
ICON(Messages.ProjectTemplateNode_Project_Template_Icon_Path)
{
  public Object getPropertyValue(ProjectTemplateNode node)
  {
    return node.projectTemplate.getIcon();
  }
};
...
```
