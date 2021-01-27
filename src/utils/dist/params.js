"use strict";
exports.__esModule = true;
exports.unparam = exports.param = void 0;
var toString = Object.prototype.toString;
var isArray = Array.isArray ||
    function (val) {
        return toString.call(val) === '[object Array]';
    };
var isValidParamValue = function (val) {
    var t = typeof val;
    // If the type of val is null, undefined, number, string, boolean, return TRUE.
    return val === null || (t !== 'object' && t !== 'function');
};
var endsWith = function (str, suffix) {
    var index = str.length - suffix.length;
    return index >= 0 && str.indexOf(suffix, index) === index;
};
var encode = encodeURIComponent;
var decode = function (s) {
    try {
        return decodeURIComponent(s.replace(/\+/g, ' '));
    }
    catch (err) {
        return s;
    }
};
exports.param = function (o, serializeArray, sep, eq) {
    if (serializeArray === void 0) { serializeArray = true; }
    if (sep === void 0) { sep = '&'; }
    if (eq === void 0) { eq = '='; }
    var buf = [];
    for (var key in o) {
        var val = o[key];
        key = encode(key);
        // val is valid non-array value
        if (isValidParamValue(val)) {
            buf.push(key);
            if (val !== undefined) {
                buf.push(eq, encode(val + ''));
            }
            buf.push(sep);
        }
        // val is not empty array
        else if (isArray(val) && val.length) {
            for (var i = 0; i < val.length; ++i) {
                var v = val[i];
                if (isValidParamValue(v)) {
                    // ?aParam[]=value1&aParam[]=value2&aParam[]=value3
                    buf.push(key, serializeArray ? encode('[]') : '');
                    if (v !== undefined) {
                        buf.push(eq, encode(v + ''));
                    }
                    buf.push(sep);
                }
            }
        }
        // ignore other cases, including empty array, Function, RegExp, Date etc.
    }
    buf.pop();
    return buf.join('');
};
/**
 * query字符串转为对象
 */
exports.unparam = function (str, sep, eq) {
    str = str + '';
    sep = sep || '&';
    eq = eq || '=';
    var ret = {};
    var pairs = str.split(sep);
    var length = pairs.length;
    var key, val;
    if (!str) {
        return ret;
    }
    for (var i = 0; i < length; ++i) {
        var eqIndex = pairs[i].indexOf(eq);
        if (eqIndex === -1) {
            // 没有=
            key = decode(pairs[i]);
            val = undefined;
        }
        else {
            // remember to decode key!
            key = decode(pairs[i].substring(0, eqIndex));
            val = decode(pairs[i].substring(eqIndex + 1));
            if (endsWith(key, '[]')) {
                key = key.substring(0, key.length - 2);
            }
        }
        if (key in ret) {
            if (isArray(ret[key])) {
                ret[key].push(val);
            }
            else {
                ret[key] = [ret[key], val];
            }
        }
        else {
            ret[key] = val;
        }
    }
    return ret;
};
