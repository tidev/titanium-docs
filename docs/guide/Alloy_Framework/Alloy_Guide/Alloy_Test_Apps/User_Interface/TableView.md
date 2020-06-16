---
title: TableView
weight: '200'
---

# TableView

Demonstrates basic use of TableView control.

::: tip 💡 Example App Source Location
You can find this example app in the Alloy repository under [samples/apps/ui/tableview](https://github.com/appcelerator/alloy/tree/master/samples/apps/ui/tableview). Check the [instructions](/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/) how to run these sample projects.
:::

A [TableView](#!/api/Titanium.UI.TableView) is used to present vertically scrolling rows of information, optionally organized into sections. A TableView can include a SearchBar to let users search the table contents.

![screenshot](./screenshot.png)

The main `index.xml` view displays two TableView controls in separate tabs. The second tab uses sections to organize table rows.

To create a table, you add a `<TableView/>` element that contains one or more `<TableViewRow>` elements, and optionally `<HeaderView/>` and `<FooterView/>` elements. Use `<TableViewSection/>` elements to organize rows into sections. To include a search bar in the table, include a `<SearchBar/>` element; to specify the field to search on, add a `filterAttribute` attribute to the `<TableView/>` element, as shown below.

**app/views/index.xml**

```xml
<Alloy>
    <TabGroup>
        <Tab title="Basic Rows">
            <Window title="Basic Rows">
                <TableView>
                    <HeaderView>
                        <View backgroundColor="#a00" height="50dp"/>
                    </HeaderView>
                    <FooterView>
                        <View backgroundColor="#0a0" height="50dp"/>
                    </FooterView>
                    <TableViewRow><Label>Row 1</Label></TableViewRow>
                    <TableViewRow><Label>Row 2</Label></TableViewRow>
                    <TableViewRow><Label>Row 3</Label></TableViewRow>
                    <TableViewRow><Label>Row 4</Label></TableViewRow>
                    <TableViewRow><Label>Row 5</Label></TableViewRow>
                </TableView>
            </Window>
        </Tab>
        <Tab title="Sections &amp; Rows">
            <Window title="Sections &amp; Rows">
                <TableView filterAttribute="title">
                    <SearchBar platform="android,ios"/>
                    <TableViewSection>
                        <HeaderView>
                            <View backgroundColor="#a00" height="50dp"/>
                        </HeaderView>
                        <FooterView>
                            <View backgroundColor="#0a0" height="50dp"/>
                        </FooterView>
                        <TableViewRow title="Row 1"/>
                        <TableViewRow title="Row 2"/>
                        <TableViewRow title="Row 3"/>
                    </TableViewSection>
                    <TableViewSection headerTitle="Section 2">
                        <TableViewRow title="Row 1"/>
                        <TableViewRow title="Row 2"/>
                        <TableViewRow title="Row 3"/>
                    </TableViewSection>
                    <TableViewSection headerTitle="Section 3">
                        <TableViewRow title="Row 1"/>
                        <TableViewRow title="Row 2"/>
                        <TableViewRow title="Row 3"/>
                    </TableViewSection>
                </TableView>
            </Window>
        </Tab>
    </TabGroup>
</Alloy>
```

## See also

* [Titanium.UI.TableView](#!/api/Titanium.UI.TableView) API reference

* [TableView Binding](/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/Alloy_Test_Models/TableView_Binding/) sample application
