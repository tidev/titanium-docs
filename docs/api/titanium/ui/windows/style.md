# Titanium.UI.Windows.Style

<ProxySummary/>

## Overview

Styles let you reuse control properties for a consistent appearance across multiple controls.
Use [Titanium.UI.Windows.createStyle()](Titanium.UI.Windows.createStyle) method
and use `source` property to indicate where to load XAML template.

    var style = Ti.UI.Windows.createStyle({
        source: 'ms-appx:///Styles.xaml'
    });

In `Styles.xaml`, you can define a theme using `ResourceDictionary.ThemeDictionaries`
and any `Style` with unique key like below.

    <ResourceDictionary
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation" 
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">

        <ResourceDictionary.ThemeDictionaries>
            <ResourceDictionary x:Key="Light">
                <SolidColorBrush x:Key="ButtonBorderBrush" Color="Blue"/>
                <SolidColorBrush x:Key="ButtonBorderBrushPointerOver" Color="Pink"/>
                <SolidColorBrush x:Key="ButtonBorderBrushPressed" Color="Yellow"/>
            </ResourceDictionary>
        </ResourceDictionary.ThemeDictionaries>
        
        <Style x:Key="ButtonStyle" TargetType="Button">
            <Setter Property="BorderThickness" Value="2" />
        </Style>
    </ResourceDictionary>

Then, use `apply` to apply style and theme to the component.

    //
    // Apply Theme and Style
    //
    var button = Ti.UI.createButton({
        title: 'Button with XAML Theme and Style'
    });
    style.apply(button, 'ButtonStyle');

If you want to apply theme only and you don't need specific `Style`, you can omit second parameter in `apply`.

    //
    // Apply Theme only
    //
    var button = Ti.UI.createButton({
        title: 'Button with XAML Theme'
    });
    style.apply(button);

For more information about XAML Style and Theme, 
refer to [XAML styles](https://docs.microsoft.com/en-us/windows/uwp/controls-and-patterns/xaml-styles).

<ApiDocs/>
