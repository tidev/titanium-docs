---
title: Titanium SDK 13.1.1.GA - 29 January 2026
weight: '10'
---

## About this release

Titanium SDK 13.1.1 is a patch release of the SDK, addressing high-priority issues from previous releases.

As of this GA release, the previous Titanium SDK patch release (13.1.0) is no longer supported.

## Community Credits

* Hans Knöchel
  * update xcode in runner to 26.2 ([951b2ab](https://github.com/tidev/titanium_mobile/commit/951b2ab943edca700693d1b8e05797aa8b855f6f))

* Hendrik Bugdoll
  * reverted tabBarItem reuse & added missing initial values ([1a1079b](https://github.com/tidev/titanium_mobile/commit/1a1079baa659173f50339478379eb8feadf8467e))
  * completed Xcode task names for pretty build log ([b93f3da](https://github.com/tidev/titanium_mobile/commit/b93f3da5b900dd76de84789caa9ca1b087aad059))
  * fixed Android environment detection in CLI info ([ebf8de8](https://github.com/tidev/titanium_mobile/commit/ebf8de8f10dc49ca751f5fc542bc38069b71dbc3))

* Prashant Saini
  * apply null checks on `localOverlayProxy` ([229bb6a](https://github.com/tidev/titanium_mobile/commit/229bb6a52ddd1d8c45ac7f966865d2eb64983f6c))

* Michael Gangolf
  * upgrade gradle plugin ([8ce48bc](https://github.com/tidev/titanium_mobile/commit/8ce48bcead6c6633d24760678809655c4f5ca16d))
  * fix gradle warning in SDK build ([bb903e3](https://github.com/tidev/titanium_mobile/commit/bb903e3a3e917af14d4a95f89f7d0f96266614e3))
  * ioslib update ([56f968d](https://github.com/tidev/titanium_mobile/commit/56f968d3db1efc13db8c3fc83fb4ede0ccf04c6e))

* César Estrada
  * Resolve Mac Catalyst build failures and App Store distribution issues ([3f6de97](https://github.com/tidev/titanium_mobile/commit/3f6de975374e45e53855411ff9d5f30d441de21e))

## Bug Fixes

### Android platform

* apply null checks on `localOverlayProxy` ([229bb6a](https://github.com/tidev/titanium_mobile/commit/229bb6a52ddd1d8c45ac7f966865d2eb64983f6c))
* fixed Android environment detection in CLI info ([ebf8de8](https://github.com/tidev/titanium_mobile/commit/ebf8de8f10dc49ca751f5fc542bc38069b71dbc3))

### iOS platform

* Resolve Mac Catalyst build failures and App Store distribution issues ([3f6de97](https://github.com/tidev/titanium_mobile/commit/3f6de975374e45e53855411ff9d5f30d441de21e))
* reverted tabBarItem reuse & added missing initial values ([1a1079b](https://github.com/tidev/titanium_mobile/commit/1a1079baa659173f50339478379eb8feadf8467e))
