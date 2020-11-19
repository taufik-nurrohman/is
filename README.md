Conditional Utility
===================

I like to group all type checking tasks into helper functions like this to be used internally. This has the advantage in case of code minification.

These functions are very inspired by PHP which already has standard functions such as `is_array()`, `is_object()`, `is_string()`, etc.

Usage
-----

### Browser

~~~ html
<script src="./@taufik-nurrohman/is/index.js"></script>
<script>
console.log(isString('false'));
</script>
~~~

### Browser Module

~~~ html
<script type="module">
import {isString} from './@taufik-nurrohman/is/index.mjs';

console.log(isString('false'));
</script>
~~~

### CommonJS Module

~~~ js
const {isString} = require('@taufik-nurrohman/is');

console.log(isString('false'));
~~~

### ECMAScript Module

~~~ js
import {isString} from '@taufik-nurrohman/is';

console.log(isString('false'));
~~~

Methods
-------

### isArray(any)

### isBoolean(any)

### isComment(any)

### isDefined(any)

### isDocument(any)

### isElement(any)

### isFloat(number)

### isFunction(any)

### isInteger(number)

### isNode(any)

### isNull(any)

### isNumber(any)

### isNumeric(string)

### isObject(any, isPlainObject = false)

### isPattern(any)

### isScalar(any)

### isSet(any)

### isString(any)

### isText(any)

### isWindow(any)
