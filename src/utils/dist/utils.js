"use strict";
exports.__esModule = true;
exports.createHash = exports.getPageQuery = exports.isAntDesignProOrDev = exports.isAntDesignPro = exports.isUrl = void 0;
var querystring_1 = require("querystring");
/* eslint no-useless-escape:0 import/prefer-default-export:0 */
var reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
exports.isUrl = function (path) { return reg.test(path); };
exports.isAntDesignPro = function () {
    if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
        return true;
    }
    return window.location.hostname === 'preview.pro.ant.design';
};
// 给官方演示站点用，用于关闭真实开发环境不需要使用的特性
exports.isAntDesignProOrDev = function () {
    var NODE_ENV = process.env.NODE_ENV;
    if (NODE_ENV === 'development') {
        return true;
    }
    return exports.isAntDesignPro();
};
exports.getPageQuery = function () { return querystring_1.parse(window.location.href.split('?')[1]); };
exports.createHash = function (hashLength) {
    // 默认长度 24
    return Array.from(Array(Number(hashLength) || 24), function () { return Math.floor(Math.random() * 36).toString(36); }).join('');
};
