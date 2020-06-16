---
title: SQL Keywords
weight: '130'
---

# SQL Keywords

Demonstrates using SQLite keywords to assign data types to SQL columns in a model configuration file.

::: tip 💡 App Folder Location
alloy/test/apps/**models/sql\_keywords**
:::

An Alloy model configuration file accepts SQL Keywords such as = [AUTOINCREMENT](https://www.sqlite.org/autoinc.html) and PRIMARY KEY, the sample application demonstrates.

**app/models/fighters.js**

```javascript
exports.definition = {
  config: {
    "columns": {
      name: 'TEXT',
      nickname: 'TEXT',
      // column values can have types with keywords
      fighterId: 'INTEGER PRIMARY KEY AUTOINCREMENT'
    },
    "adapter": {
      "type": "sql",
      "collection_name": "fighters",
      "idAttribute": "fighterId"
    }
  }
};
```
