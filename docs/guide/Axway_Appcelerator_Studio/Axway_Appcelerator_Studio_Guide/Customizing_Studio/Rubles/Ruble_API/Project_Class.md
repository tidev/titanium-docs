---
title: Project Class
weight: '70'
---

# Project Class

The Project class contains methods and properties for interacting with a project inside Studio.

## Usage

Examples of how you might interact with instance and static methods of the project class.

### Instance:

```
cmd.invoke {|context|  Ruble::Terminal.open("rake test", context.project.to_dir.path) }
```

### Static

```
# Also generate a project for the bundle and add it in the workspace?
proj = Ruble::Project.create(base_name, :location => converted_bundle_path)
```

## Project Methods

Project objects have the following properties and methods:

| Property | Description |
| --- | --- |
| `name` | The name of the project. Usually, the basename of the root project directory. |
| `exists?` | True if the project exists on disk. |
| `to_dir` | Returns the `Dir` corresponding to the project's root. |
| `refresh(shallow = false)` | Forces a refresh of the project. Pass in true to force only a shallow refresh of the project and direct members. |
| `is_open?` | Returns true if the project is open. |
| `is_closed?` | Opposite of `is_open?.` |
| `open` | If the project isn't currently open, open it. |
| `close` | Close the project. |
| `make_current` | Make the project the current/active one highlighted by the App Explorer. |
| `rails?` | Query method to tell if a project has a rails nature. |

There are also several useful static methods defined on the Ruble::Project class that can be useful in ruby code outside of a command:

| Method | Description |
| --- | --- |
| `find(name)` | Find the named project in the workspace. |
| `all` | Return all projects in an array. |
| `create(name, PROJECT_OPTIONS = {})` | Create a new project with the given name and PROJECT\_OPTIONS. |
| `current` | Returns the "current"/"active" project. |
