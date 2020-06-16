---
title: Sample Actions
weight: '80'
---

# Sample Actions

## Requirements

The examples in this page use the _**Prototype**_ library, which is included by default inside a portal. However, the same concepts may be applied using other implementations.

## Description

These set of actions can retrieve a list of available _Sample_ projects, and import a specific sample into the workspace.
Samples are contributed to the Studio via extensions, or via the scripting mechanism (_Rubles_).

## Invocation

This command is executed immediately in a synchronous way.

## List the available Samples

To get the JSON list of samples, _dispatch_ this call:

```
samples = dispatch($H({
  controller: 'portal.samples',
  action: "getSamples"
}).toJSON()).evalJSON();
```

The returned JSON holds this information:

| key | description |
| --- | --- |
| category | The sample's category |
| name | The name of the sample |
| id | A unique sample identifier which should also be used when importing a sample |
| description | A description of the sample |
| image | (currently empty for all samples) Will hold an image URL for the sample |

## Import a Sample

When importing a sample, the _dispatch_ call should use a _sample id_ that was retrieved via the _getSamples_ action.
Here is a _dispatch_ example:

```
dispatch($H({
  controller: 'portal.samples',
  action: "importSample",
  args: [sampleID].toJSON()
}).toJSON());
```

## Listening to Sample Changes

It is possible that some of the samples are loaded or removed after the portal is opened. In this case, the Studio fires events that indicate a Sample addition or removal.
Here is a sample of a way you can listen to such events (based on the [studio3-sdk](https://github.com/aptana/studio3-sdk) sample):

```
eventsDispatcher.addObserver('samples', function(e) { portal.samples.update(e); });
```

The _update_ call receives an event object that holds the following information, and can be used to update the UI:

| key | value |
| --- | --- |
| event | The event identifier (in this case, always 'samples') |
| eventType | 'added' or 'deleted' |
| data | A JSON representation of the Sample-Info (as described above) |
