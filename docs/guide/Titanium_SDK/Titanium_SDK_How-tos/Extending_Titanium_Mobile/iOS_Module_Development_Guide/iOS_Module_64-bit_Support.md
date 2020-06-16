---
title: iOS Module 64-bit Support
weight: '40'
---

# iOS Module 64-bit Support

## Overview

Starting February 1, 2015, Apple will require that all **new** App Store submissions be [compiled using the iOS 8 SDK, and support 64-bit architectures](https://developer.apple.com/news/?id=10202014a), and starting June 1, 2015, all **updated** applications will also need to follow the [same requirements](https://developer.apple.com/news/?id=12172014b).

Any module included with your project must support 64-bit architectures.

## Module Builds

To update an existing iOS module and make it 64-bit compatible follow these steps:

1. Open the module's Xcode project.

2. Accept recommended updates (via the ! symbol in the window title)

3. Update each of the TARGET (not project) architectures to standard aka `$(ARCHS_STANDARD)`. This can be done by selecting _Architectures_ and hitting the _delete_ key on the keyboard.

4. Set the **iOS Deployment Target** to iOS 6.0 or newer.

That's it. Build the module normally with this Release and it should now be 64-bit compatible. To verify, run the following command:

```
cd /PATH/TO/MODULE/
xcrun lipo -info build/lib.<MODULE_NAME>.a
```

And the output should be:

```
Architectures in the fat file: build/lib.your_module_here.a are: armv7 i386 x86_64 arm64
```

Add the `architectures` field to the `manifest` file with the architectures to support. To find out which architectures the SDK supports, create a module using this Release and open its manifest file(s). Copy the `architectures` field from the `manifest` file to the `manifest` file of the module you want to build. Android and iOS support difference architectures. Once the `architectures` field is added, build the module.

**Note:**

::: warning ⚠️ Warning
Starting with Release 4.0.0, the build will fail if the `architectures` field is missing or the architectures do not match the architectures the Titanium SDK supports.

For example, add the following lines to the respected manifest files:

```
ios/manifest:
architectures: armv7 arm64 i386 x86_64
```
:::

## Troubleshooting

### Couldn't find module: X for architecture: X

If you see the following error:

**Error Log**

```
[ERROR] Script Error Couldn't find module: ti.barcode for architecture: arm64
```

This could happen if:

* The module being required is not included in the _tiapp.xml_.

* The module being required does not have the architecture the app is running on (arm64 in this case).

#### Solution(s):

* The module needs to be rebuilt with 64-bit support. See the instructions above.

### Undefined symbols for architecture

See some log examples below.

**Error Log**

```
[TRACE] Undefined symbols for architecture x86_64:
[TRACE] "OBJC_CLASS$_CPTBarPlot", referenced from:
[TRACE] objc-class-ref in libti.charts.a(TiChartsBarPlotProxy.o)
[TRACE] "OBJC_CLASS$_CPTTheme", referenced from:
[TRACE] objc-class-ref in libti.charts.a(TiChartsChart.o)
[TRACE] "_CPTDecimalFromDouble", referenced from:
[TRACE] -[TiChartsChart refreshPlotSpaces] in libti.charts.a(TiChartsChart.o)
[TRACE] "OBJC_CLASS$_CPTPieChart", referenced from:
[TRACE] objc-class-ref in libti.charts.a(TiChartsPiePlotProxy.o)
[TRACE] "OBJC_CLASS$_CPTScatterPlot", referenced from:
[TRACE] objc-class-ref in libti.charts.a(TiChartsLinePlotProxy.o)
[TRACE] "OBJC_CLASS$_CPTPlotRange", referenced from:
[TRACE] objc-class-ref in libti.charts.a(TiChartsParsers.o)
[TRACE] "OBJC_CLASS$_CPTPlotSymbol", referenced from:
[TRACE] objc-class-ref in libti.charts.a(TiChartsParsers.o)
[TRACE] "OBJC_CLASS$_CPTFill", referenced from:
[TRACE] objc-class-ref in libti.charts.a(TiChartsParsers.o)
[TRACE] "OBJC_CLASS$_CPTMutableTextStyle", referenced from:
[TRACE] objc-class-ref in libti.charts.a(TiChartsParsers.o)
[TRACE] "OBJC_CLASS$_CPTColor", referenced from:
[TRACE] objc-class-ref in libti.charts.a(TiChartsParsers.o)
[TRACE] "OBJC_CLASS$_CPTGradient", referenced from:
[TRACE] objc-class-ref in libti.charts.a(TiChartsParsers.o)
[TRACE] "_kCPTPlainBlackTheme", referenced from:
[TRACE] -[TiChartsModule THEME_BLACK] in libti.charts.a(TiChartsModule.o)
[TRACE] "_CPTDecimalFromInteger", referenced from:
[TRACE] +[TiChartsParsers parseAxis:properties:usingPlotSpace:def:] in libti.charts.a(TiChartsParsers.o)
[TRACE] "OBJC_CLASS$_CPTMutableLineStyle", referenced from:
[TRACE] objc-class-ref in libti.charts.a(TiChartsParsers.o)
[TRACE] "OBJC_CLASS$_CPTGraphHostingView", referenced from:
[TRACE] objc-class-ref in libti.charts.a(TiChartsChart.o)
[TRACE] "OBJC_CLASS$_CPTXYAxis", referenced from:
[TRACE] objc-class-ref in libti.charts.a(TiChartsParsers.o)
[TRACE] "_CPTDecimalFromFloat", referenced from:
[TRACE] +[TiChartsParsers parsePlotRange:def:] in libti.charts.a(TiChartsParsers.o)
[TRACE] +[TiChartsParsers parseAxis:properties:usingPlotSpace:def:] in libti.charts.a(TiChartsParsers.o)
[TRACE] +[TiChartsParsers decimalFromFloat:def:] in libti.charts.a(TiChartsParsers.o)
[TRACE] "_kCPTStocksTheme", referenced from:
[TRACE] -[TiChartsModule THEME_STOCKS] in libti.charts.a(TiChartsModule.o)
[TRACE] "_kCPTSlateTheme", referenced from:
[TRACE] -[TiChartsModule THEME_SLATE] in libti.charts.a(TiChartsModule.o)
[TRACE] "OBJC_CLASS$_CPTXYGraph", referenced from:
[TRACE] objc-class-ref in libti.charts.a(TiChartsChart.o)
[TRACE] "_kCPTPlainWhiteTheme", referenced from:
[TRACE] -[TiChartsModule THEME_WHITE] in libti.charts.a(TiChartsModule.o)
[TRACE] "OBJC_CLASS$_CPTConstraints", referenced from:
[TRACE] objc-class-ref in libti.charts.a(TiChartsParsers.o)
[TRACE] "_kCPTDarkGradientTheme", referenced from:
[TRACE] -[TiChartsModule THEME_DARK_GRADIENT] in libti.charts.a(TiChartsModule.o)
[TRACE] -[TiChartsChart configureTheme:] in libti.charts.a(TiChartsChart.o)
[TRACE] ld: symbol(s) not found for architecture x86_64
[TRACE] clang: error: linker command failed with exit code 1 (use -v to see invocation)
```

This may happen if your module depends on a 3rd party library that does not include the x86\_64 bit architecture.

#### Solution(s):

* Rebuild the module with a new build of the library that includes the missing architecture (x86\_64 in this case).

**Error Log**

```javascript
[TRACE] Undefined symbols for architecture i386:
[TRACE]   "std::basic_ios<char, std::char_traits<char> >::clear(std::_Ios_Iostate)", referenced from:
[TRACE]       zxing::datamatrix::DecodedBitStreamParser::decodeBase256Segment(zxing::Ref<zxing::BitSource>, std::basic_ostringstream<char, std::char_traits<char>, std::allocator<char> >&) in libti.redlaser.a(DecodedBitStreamParser-A3FB460F2223A592.o)
[TRACE]   "std::basic_ostringstream<char, std::char_traits<char>, std::allocator<char> >::basic_ostringstream(std::_Ios_Openmode)", referenced from:
[TRACE]       zxing::qrcode::Detector::computeDimension(zxing::Ref<zxing::ResultPoint>, zxing::Ref<zxing::ResultPoint>, zxing::Ref<zxing::ResultPoint>, float) in libti.redlaser.a(Detector-204A1016DECC248B.o)
[TRACE]       zxing::datamatrix::DecodedBitStreamParser::decode(zxing::ArrayRef<unsigned char>) in libti.redlaser.a(DecodedBitStreamParser-A3FB460F2223A592.o)
[TRACE]       zxing::GridSampler::checkAndNudgePoints(zxing::Ref<zxing::BitMatrix>, std::vector<float, std::allocator<float> >&) in libti.redlaser.a(GridSampler.o)
[TRACE]       zxing::qrcode::DecodedBitStreamParser::decodeByteSegment(zxing::Ref<zxing::BitSource>, std::string&, int) in libti.redlaser.a(DecodedBitStreamParser-A7315F1F645B0479.o)
[TRACE]       zxing::qrcode::DecodedBitStreamParser::decodeNumericSegment(zxing::Ref<zxing::BitSource>, std::string&, int) in libti.redlaser.a(DecodedBitStreamParser-A7315F1F645B0479.o)
[TRACE]       zxing::qrcode::Mode::forBits(int) in libti.redlaser.a(Mode.o)
[TRACE]   "std::basic_ostream<char, std::char_traits<char> >& std::operator<<<std::char_traits<char> >(std::basic_ostream<char, std::char_traits<char> >&, char const*)", referenced from:
[TRACE]       zxing::qrcode::Detector::computeDimension(zxing::Ref<zxing::ResultPoint>, zxing::Ref<zxing::ResultPoint>, zxing::Ref<zxing::ResultPoint>, float) in libti.redlaser.a(Detector-204A1016DECC248B.o)
[TRACE]   "std::basic_ostringstream<char, std::char_traits<char>, std::allocator<char> >::str() const", referenced from:
[TRACE]       zxing::qrcode::Detector::computeDimension(zxing::Ref<zxing::ResultPoint>, zxing::Ref<zxing::ResultPoint>, zxing::Ref<zxing::ResultPoint>, float) in libti.redlaser.a(Detector-204A1016DECC248B.o)
[TRACE]   "std::_Rb_tree_insert_and_rebalance(bool, std::_Rb_tree_node_base*, std::_Rb_tree_node_base*, std::_Rb_tree_node_base&)", referenced from:
[TRACE]       std::_Rb_tree<std::tr1::shared_ptr<NLBarcodeResult>, std::tr1::shared_ptr<NLBarcodeResult>, std::_Identity<std::tr1::shared_ptr<NLBarcodeResult> >, NLCompareBarcodeResults, std::allocator<std::tr1::shared_ptr<NLBarcodeResult> > >::_M_insert(std::_Rb_tree_node_base*, std::_Rb_tree_node_base*, std::tr1::shared_ptr<NLBarcodeResult> const&) in libti.redlaser.a(NLRecognizerBase.o)
[TRACE]       std::_Rb_tree<std::pair<std::tr1::shared_ptr<NLBarcodeResult>, std::tr1::shared_ptr<NLBarcodeResult> >, std::pair<std::tr1::shared_ptr<NLBarcodeResult>, std::tr1::shared_ptr<NLBarcodeResult> >, std::_Identity<std::pair<std::tr1::shared_ptr<NLBarcodeResult>, std::tr1::shared_ptr<NLBarcodeResult> > >, std::less<std::pair<std::tr1::shared_ptr<NLBarcodeResult>, std::tr1::shared_ptr<NLBarcodeResult> > >, std::allocator<std::pair<std::tr1::shared_ptr<NLBarcodeResult>, std::tr1::shared_ptr<NLBarcodeResult> > > >::_M_insert(std::_Rb_tree_node_base*, std::_Rb_tree_node_base*, std::pair<std::tr1::shared_ptr<NLBarcodeResult>, std::tr1::shared_ptr<NLBarcodeResult> > const&) in libti.redlaser.a(NLRecognizerBase.o)
[TRACE]       std::_Rb_tree<std::tr1::weak_ptr<NLBarcodeResult>, std::tr1::weak_ptr<NLBarcodeResult>, std::_Identity<std::tr1::weak_ptr<NLBarcodeResult> >, NLCompareAssociatedBarcodeResults, std::allocator<std::tr1::weak_ptr<NLBarcodeResult> > >::_M_insert(std::_Rb_tree_node_base*, std::_Rb_tree_node_base*, std::tr1::weak_ptr<NLBarcodeResult> const&) in libti.redlaser.a(NLRecognizerBase.o)
[TRACE]   "std::string::c_str() const", referenced from:
[TRACE]       zxing::qrcode::Detector::computeDimension(zxing::Ref<zxing::ResultPoint>, zxing::Ref<zxing::ResultPoint>, zxing::Ref<zxing::ResultPoint>, float) in libti.redlaser.a(Detector-204A1016DECC248B.o)
[TRACE]   "std::basic_string<char, std::char_traits<char>, std::allocator<char> >::~basic_string()", referenced from:
[TRACE]       __GLOBAL__I_a in libti.redlaser.a(StatusManager.o)
[TRACE]       zxing::qrcode::Detector::computeDimension(zxing::Ref<zxing::ResultPoint>, zxing::Ref<zxing::ResultPoint>, zxing::Ref<zxing::ResultPoint>, float) in libti.redlaser.a(Detector-204A1016DECC248B.o)
[TRACE]   "std::basic_ostringstream<char, std::char_traits<char>, std::allocator<char> >::~basic_ostringstream()", referenced from:
[TRACE]       zxing::qrcode::Detector::computeDimension(zxing::Ref<zxing::ResultPoint>, zxing::Ref<zxing::ResultPoint>, zxing::Ref<zxing::ResultPoint>, float) in libti.redlaser.a(Detector-204A1016DECC248B.o)
[TRACE]       zxing::datamatrix::DecodedBitStreamParser::decode(zxing::ArrayRef<unsigned char>) in libti.redlaser.a(DecodedBitStreamParser-A3FB460F2223A592.o)
[TRACE]       zxing::GridSampler::checkAndNudgePoints(zxing::Ref<zxing::BitMatrix>, std::vector<float, std::allocator<float> >&) in libti.redlaser.a(GridSampler.o)
[TRACE]       zxing::qrcode::DecodedBitStreamParser::decodeByteSegment(zxing::Ref<zxing::BitSource>, std::string&, int) in libti.redlaser.a(DecodedBitStreamParser-A7315F1F645B0479.o)
[TRACE]       zxing::qrcode::DecodedBitStreamParser::decodeNumericSegment(zxing::Ref<zxing::BitSource>, std::string&, int) in libti.redlaser.a(DecodedBitStreamParser-A7315F1F645B0479.o)
[TRACE]       zxing::qrcode::Mode::forBits(int) in libti.redlaser.a(Mode.o)
[TRACE]   "std::ostream::operator<<(int)", referenced from:
[TRACE]       zxing::qrcode::Detector::computeDimension(zxing::Ref<zxing::ResultPoint>, zxing::Ref<zxing::ResultPoint>, zxing::Ref<zxing::ResultPoint>, float) in libti.redlaser.a(Detector-204A1016DECC248B.o)
[TRACE]       zxing::datamatrix::DecodedBitStreamParser::decodeAsciiSegment(zxing::Ref<zxing::BitSource>, std::basic_ostringstream<char, std::char_traits<char>, std::allocator<char> >&, std::basic_ostringstream<char, std::char_traits<char>, std::allocator<char> >&) in libti.redlaser.a(DecodedBitStreamParser-A3FB460F2223A592.o)
[TRACE]       zxing::datamatrix::DecodedBitStreamParser::decodeC40Segment(zxing::Ref<zxing::BitSource>, std::basic_ostringstream<char, std::char_traits<char>, std::allocator<char> >&) in libti.redlaser.a(DecodedBitStreamParser-A3FB460F2223A592.o)
[TRACE]       zxing::datamatrix::DecodedBitStreamParser::decodeTextSegment(zxing::Ref<zxing::BitSource>, std::basic_ostringstream<char, std::char_traits<char>, std::allocator<char> >&) in libti.redlaser.a(DecodedBitStreamParser-A3FB460F2223A592.o)
[TRACE]       zxing::datamatrix::DecodedBitStreamParser::decodeEdifactSegment(zxing::Ref<zxing::BitSource>, std::basic_ostringstream<char, std::char_traits<char>, std::allocator<char> >&) in libti.redlaser.a(DecodedBitStreamParser-A3FB460F2223A592.o)
[TRACE]       zxing::GridSampler::checkAndNudgePoints(zxing::Ref<zxing::BitMatrix>, std::vector<float, std::allocator<float> >&) in libti.redlaser.a(GridSampler.o)
[TRACE]       zxing::qrcode::DecodedBitStreamParser::decodeByteSegment(zxing::Ref<zxing::BitSource>, std::string&, int) in libti.redlaser.a(DecodedBitStreamParser-A7315F1F645B0479.o)
[TRACE]       ...
[TRACE]   "std::_Rb_tree_rebalance_for_erase(std::_Rb_tree_node_base*, std::_Rb_tree_node_base&)", referenced from:
[TRACE]       NLRecognizerBase::FindMinMaxFoundLinesForCode(std::tr1::shared_ptr<NLBarcodeResult>) in libti.redlaser.a(NLRecognizerBase.o)
[TRACE]       std::_Rb_tree<std::tr1::shared_ptr<NLBarcodeResult>, std::tr1::shared_ptr<NLBarcodeResult>, std::_Identity<std::tr1::shared_ptr<NLBarcodeResult> >, NLCompareBarcodeResults, std::allocator<std::tr1::shared_ptr<NLBarcodeResult> > >::erase(std::_Rb_tree_iterator<std::tr1::shared_ptr<NLBarcodeResult> >, std::_Rb_tree_iterator<std::tr1::shared_ptr<NLBarcodeResult> >) in libti.redlaser.a(NLRecognizerBase.o)
[TRACE]       ITFBarcodeRecognizer::Stage2Recognize() in libti.redlaser.a(ITFBarcodeRecognizer.o)
[TRACE]       Code39BarcodeRecognizer::AddPartialBarcode(NSMutableString*, bool, bool) in libti.redlaser.a(Code39BarcodeRecognizer.o)
[TRACE]       Code39BarcodeRecognizer::Stage2Recognize() in libti.redlaser.a(Code39BarcodeRecognizer.o)
[TRACE]       PDF417BarcodeRecognizer::Stage2Recognize() in libti.redlaser.a(PDF417BarcodeRecognizer.o)
[TRACE]       CodabarBarcodeRecognizer::Stage2Recognize() in libti.redl
[TRACE] aser.a(CodabarBarcodeRecognizer.o)
[TRACE]       ...
[TRACE]   "std::ios_base::Init::~Init()", referenced from:
[TRACE]       __GLOBAL__I_a in libti.redlaser.a(BarcodePickerController.o)
[TRACE]       __GLOBAL__I_a in libti.redlaser.a(Widget_QRCodeReader.o)
[TRACE]       __GLOBAL__I_a in libti.redlaser.a(ZXingDecoder.o)
[TRACE]       __GLOBAL__I_a in libti.redlaser.a(Widget_DataMatrixReader.o)
[TRACE]       __GLOBAL__I_a in libti.redlaser.a(CameraControl.o)
[TRACE]       __GLOBAL__I_a in libti.redlaser.a(Decoder-DD22F2D71AAA0F2E.o)
[TRACE]       __GLOBAL__I_a in libti.redlaser.a(BarcodePhotoEngine.o)
[TRACE]       ...
[TRACE]   "std::_Rb_tree_decrement(std::_Rb_tree_node_base*)", referenced from:
[TRACE]       std::_Rb_tree<std::tr1::shared_ptr<NLBarcodeResult>, std::tr1::shared_ptr<NLBarcodeResult>, std::_Identity<std::tr1::shared_ptr<NLBarcodeResult> >, NLCompareBarcodeResults, std::allocator<std::tr1::shared_ptr<NLBarcodeResult> > >::_M_insert_unique(std::_Rb_tree_iterator<std::tr1::shared_ptr<NLBarcodeResult> >, std::tr1::shared_ptr<NLBarcodeResult> const&) in libti.redlaser.a(NewLaserEngine.o)
[TRACE]       std::_Rb_tree<std::tr1::shared_ptr<NLBarcodeResult>, std::tr1::shared_ptr<NLBarcodeResult>, std::_Identity<std::tr1::shared_ptr<NLBarcodeResult> >, NLCompareBarcodeResults, std::allocator<std::tr1::shared_ptr<NLBarcodeResult> > >::_M_insert_unique(std::tr1::shared_ptr<NLBarcodeResult> const&) in libti.redlaser.a(NLRecognizerBase.o)
[TRACE]       std::_Rb_tree<std::pair<std::tr1::shared_ptr<NLBarcodeResult>, std::tr1::shared_ptr<NLBarcodeResult> >, std::pair<std::tr1::shared_ptr<NLBarcodeResult>, std::tr1::shared_ptr<NLBarcodeResult> >, std::_Identity<std::pair<std::tr1::shared_ptr<NLBarcodeResult>, std::tr1::shared_ptr<NLBarcodeResult> > >, std::less<std::pair<std::tr1::shared_ptr<NLBarcodeResult>, std::tr1::shared_ptr<NLBarcodeResult> > >, std::allocator<std::pair<std::tr1::shared_ptr<NLBarcodeResult>, std::tr1::shared_ptr<NLBarcodeResult> > > >::_M_insert_unique(std::pair<std::tr1::shared_ptr<NLBarcodeResult>, std::tr1::shared_ptr<NLBarcodeResult> > const&) in libti.redlaser.a(NLRecognizerBase.o)
[TRACE]       std::_Rb_tree<std::tr1::weak_ptr<NLBarcodeResult>, std::tr1::weak_ptr<NLBarcodeResult>, std::_Identity<std::tr1::weak_ptr<NLBarcodeResult> >, NLCompareAssociatedBarcodeResults, std::allocator<std::tr1::weak_ptr<NLBarcodeResult> > >::_M_insert_unique(std::tr1::weak_ptr<NLBarcodeResult> const&) in libti.redlaser.a(NLRecognizerBase.o)
[TRACE]   "std::basic_ostream<char, std::char_traits<char> >& std::__ostream_insert<char, std::char_traits<char> >(std::basic_ostream<char, std::char_traits<char> >&, char const*, int)", referenced from:
[TRACE]       zxing::datamatrix::DecodedBitStreamParser::decodeAsciiSegment(zxing::Ref<zxing::BitSource>, std::basic_ostringstream<char, std::char_traits<char>, std::allocator<char> >&, std::basic_ostringstream<char, std::char_traits<char>, std::allocator<char> >&) in libti.redlaser.a(DecodedBitStreamParser-A3FB460F2223A592.o)
[TRACE]       zxing::datamatrix::DecodedBitStreamParser::decodeC40Segment(zxing::Ref<zxing::BitSource>, std::basic_ostringstream<char, std::char_traits<char>, std::allocator<char> >&) in libti.redlaser.a(DecodedBitStreamParser-A3FB460F2223A592.o)
[TRACE]       zxing::datamatrix::DecodedBitStreamParser::decodeTextSegment(zxing::Ref<zxing::BitSource>, std::basic_ostringstream<char, std::char_traits<char>, std::allocator<char> >&) in libti.redlaser.a(DecodedBitStreamParser-A3FB460F2223A592.o)
[TRACE]       zxing::datamatrix::DecodedBitStreamParser::decodeAnsiX12Segment(zxing::Ref<zxing::BitSource>, std::basic_ostringstream<char, std::char_traits<char>, std::allocator<char> >&) in libti.redlaser.a(DecodedBitStreamParser-A3FB460F2223A592.o)
[TRACE]       zxing::datamatrix::DecodedBitStreamParser::decodeBase256Segment(zxing::Ref<zxing::BitSource>, std::basic_ostringstream<char, std::char_traits<char>, std::allocator<char> >&) in libti.redlaser.a(DecodedBitStreamParser-A3FB460F2223A592.o)
[TRACE]       zxing::GridSampler::checkAndNudgePoints(zxing::Ref<zxing::BitMatrix>, std::vector<float, std::allocator<float> >&) in libti.redlaser.a(GridSampler.o)
[TRACE]       zxing::qrcode::DecodedBitStreamParser::decodeByteSegment(zxing::Ref<zxing::BitSource>, std::string&, int) in libti.redlaser.a(DecodedBitStreamParser-A7315F1F645B0479.o)
[TRACE]       ...
[TRACE]   "std::string::substr(unsigned long, unsigned long) const", referenced from:
[TRACE]       RLVerifySignature(char const*) in libti.redlaser.a(StatusManager.o)
[TRACE]   "std::_Rb_tree_increment(std::_Rb_tree_node_base const*)", referenced from:
[TRACE]       -[BarcodePhotoEngine findBarcodesInPixelLine:] in libti.redlaser.a(BarcodePhotoEngine.o)
[TRACE]       -[BarcodePhotoEngine nlFindBarcodesInPixmap:withStepCount:] in libti.redlaser.a(BarcodePhotoEngine.o)
[TRACE]       void std::_Rb_tree<std::tr1::shared_ptr<NLBarcodeResult>, std::tr1::shared_ptr<NLBarcodeResult>, std::_Identity<std::tr1::shared_ptr<NLBarcodeResult> >, NLCompareBarcodeResults, std::allocator<std::tr1::shared_ptr<NLBarcodeResult> > >::_M_insert_unique<std::_Rb_tree_const_iterator<std::tr1::shared_ptr<NLBarcodeResult> > >(std::_Rb_tree_const_iterator<std::tr1::shared_ptr<NLBarcodeResult> >, std::_Rb_tree_const_iterator<std::tr1::shared_ptr<NLBarcodeResult> >) in libti.redlaser.a(NewLaserEngine.o)
[TRACE]       NLRecognizerBase::FindMinMaxScanLines() in libti.redlaser.a(NLRecognizerBase.o)
[TRACE]       NLRecognizerBase::Stage2Recognize() in libti.redlaser.a(NLRecognizerBase.o)
[TRACE]       NLRecognizerBase::PerformBarcodeAssociations() in libti.redlaser.a(NLRecognizerBase.o)
[TRACE]       NLRecognizerBase::FindMinMaxFoundLinesForCode(std::tr1::shared_ptr<NLBarcodeResult>) in libti.redlaser.a(NLRecognizerBase.o)
[TRACE]       ...
[TRACE]   "std::_Rb_tree_increment(std::_Rb_tree_node_base*)", referenced from:
[TRACE]       std::_Rb_tree<std::tr1::shared_ptr<NLBarcodeResult>, std::tr1::shared_ptr<NLBarcodeResult>, std::_Identity<std::tr1::shared_ptr<NLBarcodeResult> >, NLCompareBarcodeResults, std::allocator<std::tr1::shared_ptr<NLBarcodeResult> > >::_M_insert_unique(std::_Rb_tree_iterator<std::tr1::shared_ptr<NLBarcodeResult> >, std::tr1::shared_ptr<NLBarcodeResult> const&) in libti.redlaser.a(NewLaserEngine.o)
[TRACE]       std::_Rb_tree<std::tr1::shared_ptr<NLBarcodeResult>, std::tr1::shared_ptr<NLBarcodeResult>, std::_Identity<std::tr1::shared_ptr<NLBarcodeResult> >, NLCompareBarcodeResults, std::allocator<std::tr1::shared_ptr<NLBarcodeResult> > >::erase(std::_Rb_tree_iterator<std::tr1::shared_ptr<NLBarcodeResult> >, std::_Rb_tree_iterator<std::tr1::shared_ptr<NLBarcodeResult> >) in libti.redlaser.a(NLRecognizerBase.o)
[TRACE]   "std::string::assign(std::string const&)", referenced from:
[TRACE]       RealtimeReader::ReadBarcode(int) in libti.redlaser.a(RealtimeReader.o)
[TRACE]   "std::__throw_out_of_range(char const*)", referenced from:
[TRACE]       std::vector<NLRecognizerBase*, std::allocator<NLRecognizerBase*> >::at(unsigned long) in libti.redlaser.a(NewLaserEngine.o)
[TRACE]       std::vector<float, std::allocator<float> >::at(unsigned long) in libti.redlaser.a(Code39BarcodeRecognizer.o)
[TRACE]       std::vector<int, std::allocator<int> >::at(unsigned long) in libti.redlaser.a(Code93BarcodeRecognizer.o)
[TRACE]       std::deque<unsigned long, std::allocator<unsigned long> >::_M_range_check(unsigned long) const in libti.redlaser.a(BitQueue.o)
[TRACE]   "std::__throw_length_error(char const*)", referenced from:
[TRACE]       std::vector<NLRecognizerBase*, std::allocator<NLRecognizerBase*> >::_M_insert_aux(__gnu_cxx::__normal_iterator<NLRecognizerBase**, std::vector<NLRecognizerBase*, std::allocator<NLRecognizerBase*> > >, NLRecognizerBase* const&) in libti.redlaser.a(NewLaserEngine.o)
[TRACE]       std::vector<zxing::Ref<zxing::Reader>, std::allocator<zxing::Ref<zxing::Reader> > >::_M_insert_aux(__gnu_cxx::__normal_iterator<zxing::Ref<zxing::Reader>*, std::vector<zxing::Ref<zxing::Reader>, std::allocator<zxing::Ref<zxing::Reader> > > >, zxing::Ref<zxing::Reader> const&) in libti.redlaser.a(MultiFormatReader-BA2714D9B0BBE187.o)
[TRACE]       std::vector<float, std::allocator<float> >::_M_fill_insert(__gnu_cxx::__normal_iterator<float*, std::vector<float, std::allocator<float> > >, unsigned long, float const&) in libti.redlaser.a(RunLengths.o)
[TRACE]       std::vector<unsigned long, std::allocator<unsigned long> >::_M_fill_insert(__gnu_cxx::__normal_iterator<unsigned long*, std::vector<unsigned long, std::allocator<unsigned long> > >, unsigned
[TRACE]  long, unsigned long const&) in libti.redlaser.a(BlurryEANBarcodeRecognizer.o)
[TRACE]       std::vector<float, std::allocator<float> >::_M_insert_aux(__gnu_cxx::__normal_iterator<float*, std::vector<float, std::allocator<float> > >, float const&) in libti.redlaser.a(BlurryEANBarcodeRecognizer.o)
[TRACE]       std::vector<unsigned long, std::allocator<unsigned long> >::_M_insert_aux(__gnu_cxx::__normal_iterator<unsigned long*, std::vector<unsigned long, std::allocator<unsigned long> > >, unsigned long const&) in libti.redlaser.a(BlurryEANBarcodeRecognizer.o)
[TRACE]       std::vector<int, std::allocator<int> >::_M_insert_aux(__gnu_cxx::__normal_iterator<int*, std::vector<int, std::allocator<int> > >, int const&) in libti.redlaser.a(Code93BarcodeRecognizer.o)
[TRACE]       ...
[TRACE]   "std::string::assign(char const*, unsigned long)", referenced from:
[TRACE]       RLVerifySignature(char const*) in libti.redlaser.a(StatusManager.o)
[TRACE]       RealtimeReader::ReadBarcode(int) in libti.redlaser.a(RealtimeReader.o)
[TRACE]   "std::basic_string<char, std::char_traits<char>, std::allocator<char> >::~basic_string()", referenced from:
[TRACE]       RealtimeReader::ReadBarcode(int) in libti.redlaser.a(RealtimeReader.o)
[TRACE]       zxing::String::~String() in libti.redlaser.a(Str-C8AC91D7FBB4649E.o)
[TRACE]       zxing::String::~String() in libti.redlaser.a(Str-C8AC91D7FBB4649E.o)
[TRACE]       zxing::Exception::~Exception() in libti.redlaser.a(Exception-8C97FE099093317C.o)
[TRACE]       zxing::Exception::~Exception() in libti.redlaser.a(Exception-8C97FE099093317C.o)
[TRACE]       zxing::Exception::~Exception() in libti.redlaser.a(Exception-8C97FE099093317C.o)
[TRACE]       zxing::qrcode::DecodedBitStreamParser::decode(zxing::ArrayRef<unsigned char>, zxing::qrcode::Version*) in libti.redlaser.a(DecodedBitStreamParser-A7315F1F645B0479.o)
[TRACE]       ...
[TRACE]   "std::basic_string<char, std::char_traits<char>, std::allocator<char> >::basic_string(char const*, std::allocator<char> const&)", referenced from:
[TRACE]       RLVerifySignature(char const*) in libti.redlaser.a(StatusManager.o)
[TRACE]       __GLOBAL__I_a in libti.redlaser.a(StatusManager.o)
[TRACE]       RealtimeReader::ReadBarcode(int) in libti.redlaser.a(RealtimeReader.o)
[TRACE]       zxing::Exception::Exception(char const*) in libti.redlaser.a(Exception-8C97FE099093317C.o)
[TRACE]   "std::string::_Rep::_M_destroy(std::allocator<char> const&)", referenced from:
[TRACE]       -[BarcodePhotoEngine occipitalFindBarcodesInPixmap:] in libti.redlaser.a(BarcodePhotoEngine.o)
[TRACE]       RLVerifySignature(char const*) in libti.redlaser.a(StatusManager.o)
[TRACE]       RealtimeReader::ReadBarcode(int) in libti.redlaser.a(RealtimeReader.o)
[TRACE]       zxing::datamatrix::Decoder::decode(zxing::Ref<zxing::BitMatrix>) in libti.redlaser.a(Decoder-94FE04638513C594.o)
[TRACE]       zxing::qrcode::Decoder::decode(zxing::Ref<zxing::BitMatrix>) in libti.redlaser.a(Decoder-98341D73C74B247B.o)
[TRACE]       zxing::GridSampler::checkAndNudgePoints(zxing::Ref<zxing::BitMatrix>, std::vector<float, std::allocator<float> >&) in libti.redlaser.a(GridSampler.o)
[TRACE]       zxing::qrcode::DecodedBitStreamParser::decodeByteSegment(zxing::Ref<zxing::BitSource>, std::string&, int) in libti.redlaser.a(DecodedBitStreamParser-A7315F1F645B0479.o)
[TRACE]       ...
[TRACE]   "std::string::find(char const*, unsigned long, unsigned long) const", referenced from:
[TRACE]       RLVerifySignature(char const*) in libti.redlaser.a(StatusManager.o)
[TRACE]   "std::basic_string<char, std::char_traits<char>, std::allocator<char> >::basic_string(std::string const&)", referenced from:
[TRACE]       RealtimeReader::ReadBarcode(int) in libti.redlaser.a(RealtimeReader.o)
[TRACE]       zxing::MultiFormatReader::decodeInternal(zxing::Ref<zxing::BinaryBitmap>) in libti.redlaser.a(MultiFormatReader-BA2714D9B0BBE187.o)
[TRACE]       zxing::GlobalHistogramBinarizer::getBlackRow(int, zxing::Ref<zxing::BitArray>) in libti.redlaser.a(GlobalHistogramBinarizer.o)
[TRACE]       zxing::GlobalHistogramBinarizer::getBlackMatrix() in libti.redlaser.a(GlobalHistogramBinarizer.o)
[TRACE]       zxing::String::String(std::string const&) in libti.redlaser.a(Str-C8AC91D7FBB4649E.o)
[TRACE]       zxing::datamatrix::Decoder::correctErrors(zxing::ArrayRef<unsigned char>, int) in libti.redlaser.a(Decoder-94FE04638513C594.o)
[TRACE]       zxing::qrcode::Decoder::correctErrors(zxing::ArrayRef<unsigned char>, int) in libti.redlaser.a(Decoder-98341D73C74B247B.o)
[TRACE]       ...
[TRACE]   "std::ios_base::Init::Init()", referenced from:
[TRACE]       __GLOBAL__I_a in libti.redlaser.a(BarcodePickerController.o)
[TRACE]       __GLOBAL__I_a in libti.redlaser.a(Widget_QRCodeReader.o)
[TRACE]       __GLOBAL__I_a in libti.redlaser.a(ZXingDecoder.o)
[TRACE]       __GLOBAL__I_a in libti.redlaser.a(Widget_DataMatrixReader.o)
[TRACE]       __GLOBAL__I_a in libti.redlaser.a(CameraControl.o)
[TRACE]       __GLOBAL__I_a in libti.redlaser.a(Decoder-DD22F2D71AAA0F2E.o)
[TRACE]       __GLOBAL__I_a in libti.redlaser.a(BarcodePhotoEngine.o)
[TRACE]       ...
[TRACE]   "std::string::_Rep::_S_empty_rep_storage", referenced from:
[TRACE]       -[BarcodePhotoEngine occipitalFindBarcodesInPixmap:] in libti.redlaser.a(BarcodePhotoEngine.o)
[TRACE]       RLVerifySignature(char const*) in libti.redlaser.a(StatusManager.o)
[TRACE]       RealtimeReader::ReadBarcode(int) in libti.redlaser.a(RealtimeReader.o)
[TRACE]       zxing::datamatrix::Decoder::decode(zxing::Ref<zxing::BitMatrix>) in libti.redlaser.a(Decoder-94FE04638513C594.o)
[TRACE]       zxing::qrcode::Decoder::decode(zxing::Ref<zxing::BitMatrix>) in libti.redlaser.a(Decoder-98341D73C74B247B.o)
[TRACE]       zxing::GridSampler::checkAndNudgePoints(zxing::Ref<zxing::BitMatrix>, std::vector<float, std::allocator<float> >&) in libti.redlaser.a(GridSampler.o)
[TRACE]       zxing::qrcode::DecodedBitStreamParser::decodeByteSegment(zxing::Ref<zxing::BitSource>, std::string&, int) in libti.redlaser.a(DecodedBitStreamParser-A7315F1F645B0479.o)
[TRACE]       ...
[TRACE]   "std::basic_stringbuf<char, std::char_traits<char>, std::allocator<char> >::str() const", referenced from:
[TRACE]       zxing::datamatrix::DecodedBitStreamParser::decode(zxing::ArrayRef<unsigned char>) in libti.redlaser.a(DecodedBitStreamParser-A3FB460F2223A592.o)
[TRACE]       zxing::GridSampler::checkAndNudgePoints(zxing::Ref<zxing::BitMatrix>, std::vector<float, std::allocator<float> >&) in libti.redlaser.a(GridSampler.o)
[TRACE]       zxing::qrcode::DecodedBitStreamParser::decodeByteSegment(zxing::Ref<zxing::BitSource>, std::string&, int) in libti.redlaser.a(DecodedBitStreamParser-A7315F1F645B0479.o)
[TRACE]       zxing::qrcode::DecodedBitStreamParser::decodeNumericSegment(zxing::Ref<zxing::BitSource>, std::string&, int) in libti.redlaser.a(DecodedBitStreamParser-A7315F1F645B0479.o)
[TRACE]       zxing::qrcode::Mode::forBits(int) in libti.redlaser.a(Mode.o)
[TRACE]   "std::string::append(std::string const&)", referenced from:
[TRACE]       RLVerifySignature(char const*) in libti.redlaser.a(StatusManager.o)
[TRACE]   "std::string::append(char const*, unsigned long)", referenced from:
[TRACE]       RLVerifySignature(char const*) in libti.redlaser.a(StatusManager.o)
[TRACE]       zxing::qrcode::DecodedBitStreamParser::append(std::string&, unsigned char const*, unsigned long, char const*) in libti.redlaser.a(DecodedBitStreamParser-A7315F1F645B0479.o)
[TRACE] ld: symbol(s) not found for architecture i386
[TRACE] clang: error: linker command failed with exit code 1 (use -v to see invocation)
[ERROR] ** BUILD FAILED **
[ERROR] The following build commands failed:
[ERROR]         Ld build/Debug-iphonesimulator/Mod_redlaser.app/Mod_redlaser normal i386
[ERROR] (1 failure)
```

This log shows a number of linker errors referencing the "_std_" namespace. This happens because the library used by the module needs the "_std_" standard library. As of 3.5.0.GA Titanium uses the "_libc++ (LLVM standard library)"_ so we now need to specify when to link with the _libstdc++_ library.

#### Solution(s):

* In the _module.xcconfig_, tell the compiler to link against the _libstdc++_ library by adding the following line as you would when including a framework.

    **module.xcconfig**

    ```
    OTHER_LDFLAGS=$(inherited) -lstdc++.6.0.9
    ```

### Module building for armv7, i386, and arm64 but not x86\_64

If you have already followed the instructions above to update the module to 64-bit and it builds 3 of the desired architectures but not x86\_64, you may need to update the _build.py_ in the module project.

#### Solution(s):

Here are two different ways to update the _build.py_:

* Edit the existing _build.py_

    1. Open the _build.py_ in a text editor

    2. Search for "**\-arch i386**" if you find it, remove that text so that the line looks something like this

        **build.py**

        ```python
        rc = os.system("xcodebuild -sdk iphonesimulator -configuration Release")
        ```

    3. Rebuild your module, and see if it includes x86\_64 using _xcrun lipo --info_ as mentioned above.

* Update the _build.py_

    1. Create a new module using the same _moduleid_ as the module you are updating

    2. Copy the new _build.py_ it into your old module (overwriting the old _build.py_)

    3. Rebuild your module, and see if it includes x86\_64 using _xcrun lipo --info_ as mentioned above.
