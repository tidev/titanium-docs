/**
 * Currently broken because VuePress internally tries to resolve all pages to an import
 * to an actual file.
 *
 * @see internal/page-components
 */

module.exports = {
  additionalPages: [
    {
      path: '/api/titanium/blob.html',
      content: `---
sidebar: auto
metadataKey: Titanium.Blob
---

# Titanium.Blob

## Overview

Some content
`
    }
  ]
}