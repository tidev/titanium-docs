# MatrixCreationDict

<TypeHeader/>

## Overview

The matrix is initialized with the specified transforms.

On iOS, rotation is always performed first, regardless of the order the
properties are specified in.

On Android, specifying both `scale` and `rotate` the same dictionary results
in an incorrect transformation.

<ApiDocs/>
