export const isArray = x => Array.isArray(x);
export const isBoolean = x => false === x || true === x;
export const isComment = x => isNode(x) && /* Node.COMMENT_NODE */ 8 === x.nodeType;
export const isDefined = x => 'undefined' !== typeof x;
export const isDocument = x => isInstance(x, Document);
export const isElement = x => isNode(x) && /* Node.ELEMENT_NODE */ 1 === x.nodeType;
export const isFloat = x => isNumber(x) && 0 !== x % 1;
export const isFunction = x => 'function' === typeof x;
export const isInstance = (x, of) => x && isSet(of) && x instanceof of;
export const isInteger = x => isNumber(x) && 0 === x % 1;
export const isNode = x => isInstance(x, Node);
export const isNull = x => null === x;
export const isNumber = x => 'number' === typeof x;
export const isNumeric = x => /^-?(?:\d*.)?\d+$/.test(x + "");
export const isObject = (x, isPlain = true) => {
    if ('object' !== typeof x) {
        return false;
    }
    return isPlain ? isInstance(x, Object) : true;
};
export const isPattern = x => isInstance(x, RegExp);
export const isScalar = x => isBoolean(x) || isNumber(x) || isString(x);
export const isSet = x => isDefined(x) && !isNull(x);
export const isString = x => 'string' === typeof x;
export const isText = x => isNode(x) && /* Node.TEXT_NODE */ 3 === x.nodeType;
export const isWindow = x => isInstance(x, Window);
