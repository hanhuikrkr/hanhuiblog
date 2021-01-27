"use strict";
exports.__esModule = true;
exports.removeUser = exports.saveUser = exports.getUser = exports.decodeToken = exports.removeToken = exports.saveToken = exports.getToken = void 0;
var jwt_decode_1 = require("jwt-decode");
var TOKEN_KEY = 'SYS_TOKEN';
var USER_KEY = 'HANHUIBLOG_USER';
exports.getToken = function () {
    return window.localStorage.getItem(TOKEN_KEY);
};
exports.saveToken = function (data) {
    window.localStorage.setItem(TOKEN_KEY, data);
};
exports.removeToken = function () {
    window.localStorage.removeItem(TOKEN_KEY);
};
exports.decodeToken = function () {
    var params = window.localStorage.getItem(USER_KEY);
    if (params !== null)
        return jwt_decode_1["default"](params);
    else
        return null;
};
exports.getUser = function () {
    var params = window.localStorage.getItem(USER_KEY);
    if (params !== null)
        return JSON.parse(params);
    else
        return null;
};
exports.saveUser = function (data) {
    window.localStorage.setItem(USER_KEY, JSON.stringify(data));
};
exports.removeUser = function () {
    console.log('删除本地用户信息');
    window.localStorage.removeItem(USER_KEY);
};
exports["default"] = { getToken: exports.getToken, saveToken: exports.saveToken, removeToken: exports.removeToken, decodeToken: exports.decodeToken, getUser: exports.getUser, saveUser: exports.saveUser, removeUser: exports.removeUser };
