---
title: Lists and Tables and Proxy Properties
weight: '70'
---

# Lists and Tables and Proxy Properties

Demonstrates use of Alloy elements to proxy ListView and TableView controls and their properties.

::: tip 💡 Example App Source Location
You can find this example app in the Alloy repository under [alloy/test/apps/ui/lists\_proxy\_properties](https://github.com/appcelerator/alloy/tree/master/samples/apps/ui/lists_proxy_properties). Check the [instructions](/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/) how to run these sample projects.
:::

![screenshot](./screenshot.png)

For properties that are assigned Titanium proxies, such as Views or Buttons, you can declare these properties as XML markup. For example, the `<HeaderView/>` element is used to proxy the `headerView` property for a [ListSection](#!/api/Titanium.UI.ListSection) or [TableViewSection](#!/api/Titanium.UI.TableViewSection) object. This sample demonstrates use of the following proxies:

* `<ListView>`: [Titanium.UI.ListView](#!/api/Titanium.UI.ListView)

    * `<FooterView>`: [Titanium.UI.ListView.footerView](#!/api/Titanium.UI.ListView-property-footerView)

    * `<HeaderView>`: [Titanium.UI.ListView.headerView](#!/api/Titanium.UI.ListView-property-headerView)

    * `<PullView>`: [Titanium.UI.ListView.pullView](#!/api/Titanium.UI.ListView-property-pullView)

    * `<SearchBar>` or `<SearchView platform="android">` – [Titanium.UI.ListView.searchView](#!/api/Titanium.UI.ListView-property-searchView)

* `<ListSection>`: [Titanium.UI.ListSection](#!/api/Titanium.UI.ListSection)

    * `<FooterView>`: [Titanium.UI.ListSection.footerView](#!/api/Titanium.UI.ListSection-property-footerView)

    * `<HeaderView>`: [Titanium.UI.ListSection.headerView](#!/api/Titanium.UI.ListSection-property-headerView)

* `<TableView>`: [Titanium.UI.TableView](#!/api/Titanium.UI.TableView)

    * `<FooterView>`: [Titanium.UI.TableView.footerView](#!/api/Titanium.UI.TableView-property-footerView)

    * `<HeaderPullView>`: [Titanium.UI.TableView.headerPullView](#!/api/Titanium.UI.TableView-property-headerPullView)

    * `<HeaderView>`: [Titanium.UI.TableView.headerView](#!/api/Titanium.UI.TableView-property-headerView)

    * `<Search>`: [Titanium.UI.TableView.search](#!/api/Titanium.UI.TableView-property-search)

* `<TableViewSection>`: [Titanium.UI.TableViewSection](#!/api/Titanium.UI.TableViewSection)

    * `<FooterView>`: [Titanium.UI.TableViewSection.footerView](#!/api/Titanium.UI.TableViewSection-property-footerView)

    * `<HeaderView>`: [Titanium.UI.TableViewSection.headerView](#!/api/Titanium.UI.TableViewSection-property-headerView)

The main application view, lists.xml, is loaded programmatically by the index.js view-controller.

**app/controllers/index.js**

```javascript
var major = parseInt(Ti.Platform.version.split(".")[0], 10);
if (OS_IOS || (OS_ANDROID && major >= 3)) {
    Alloy.Globals.top = OS_IOS && major >= 7 ? 20 : 0;
    Alloy.createController('lists').getView().open();
} else {
    Alloy.createController('not_supported').getView().open();
}
```

**app/views/lists.xml**

```xml
<Alloy>
    <TabGroup>
        <Tab title="tableview">
            <Window>
                <TitleControl>
                    <Label class="titleControl">TableView</Label>
                </TitleControl>
                <TableView>
                    <!-- header and footer views -->
                    <Require src="wrapper"/>
                    <!-- TIMOB-11994 prevents the searchbar from showing on iOS -->
                    <!-- search, shorthand with Ti.UI.SearchBar -->
                    <SearchBar class="search" platform="ios"/>
                    <!-- search, shorthand with Ti.UI.Android.SearchView -->
                    <SearchView ns="Ti.UI.Android" class="search" platform="android"/>
                    <!-- headerPullView -->
                    <HeaderPullView platform="ios">
                        <View class="pull">
                            <Label color="#F2F4F4" bottom="25dp">headerPullView</Label>
                        </View>
                    </HeaderPullView>
                    <TableViewRow title="row 1"/>
                    <TableViewRow title="row 2"/>
                    <TableViewRow title="row 3"/>
                    <TableViewRow title="row 4"/>
                    <!-- table section -->
                    <TableViewSection>
                        <!-- header and footer views -->
                        <Require src="wrapper" isSection="true"/>
                        <TableViewRow title="row 1.1"/>
                        <TableViewRow title="row 1.2"/>
                        <TableViewRow title="row 1.3"/>
                        <TableViewRow title="row 1.4"/>
                    </TableViewSection>
                </TableView>
            </Window>
        </Tab>
        <Tab title="listview">
            <Window>
                <TitleControl>
                    <Label class="titleControl">ListView</Label>
                </TitleControl>
                <ListView>
                    <!-- header and footer views -->
                    <Require src="wrapper"/>
                    <!-- search, shorthand with Ti.UI.SearchBar -->
                    <SearchBar class="search" platform="ios"/>
                    <!-- search, shorthand with Ti.UI.Android.SearchView -->
                    <SearchView ns="Ti.UI.Android" class="search" platform="android"/>
                    <!-- pullView -->
                    <PullView platform="ios">
                        <View class="pull">
                            <Label color="#F2F4F4" bottom="25dp">pullView</Label>
                        </View>
                    </PullView>
                    <!-- plain section -->
                    <ListSection>
                        <ListItem title="row 1" searchableText="row 1"/>
                        <ListItem title="row 2" searchableText="row 2"/>
                        <ListItem title="row 3" searchableText="row 3"/>
                        <ListItem title="row 4" searchableText="row 4"/>
                    </ListSection>
                    <ListSection>
                        <!-- header and footer views -->
                        <Require src="wrapper" isSection="true"/>
                        <ListItem title="row 1.1" searchableText="row 1.1"/>
                        <ListItem title="row 1.2" searchableText="row 1.2"/>
                        <ListItem title="row 1.3" searchableText="row 1.3"/>
                        <ListItem title="row 1.4" searchableText="row 1.4"/>
                    </ListSection>
                </ListView>
            </Window>
        </Tab>
    </TabGroup>
</Alloy>
```

## See also

* [Proxy Properties](/guide/Alloy_Framework/Alloy_Guide/Alloy_Test_Apps/User_Interface/Proxy_Properties/) in the Alloy developer guide

* [Alloy ListView Guide](/guide/Titanium_SDK/Titanium_SDK_How-tos/User_Interface_Deep_Dives/ListViews/Alloy_ListView_Guide/)
