"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var querystring_1 = require("querystring");
var authority_1 = require("@/utils/authority");
var umi_1 = require("umi");
var login_1 = require("@/services/login");
var utils_1 = require("@/utils/utils");
var antd_1 = require("antd");
var token_1 = require("@/utils/token");
var user_1 = require("@/services/user");
// TODO dva here @umijs/plugin-model  & current user here
var UserModel = {
    namespace: 'user',
    state: {
        currentUser: {}
    },
    effects: {
        fetch: function (_, _a) {
            var response;
            var call = _a.call, put = _a.put;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, call(user_1.query)];
                    case 1:
                        response = _b.sent();
                        return [4 /*yield*/, put({
                                type: 'save',
                                payload: response
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        },
        fetchCurrent: function (_, _a) {
            var response;
            var call = _a.call, put = _a.put;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        response = token_1.getUser();
                        return [4 /*yield*/, put({
                                type: 'saveCurrentUser',
                                payload: response
                            })];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, put({
                                type: 'changeLoginStatus',
                                payload: response
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        },
        login: function (_a, _b) {
            var response, urlParams, params, redirect, redirectUrlParams;
            var payload = _a.payload;
            var call = _b.call, put = _b.put;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, call(login_1.fakeAccountLogin, payload)];
                    case 1:
                        response = _c.sent();
                        return [4 /*yield*/, put({
                                type: 'changeLoginStatus',
                                payload: response
                            })];
                    case 2:
                        _c.sent();
                        console.log(response);
                        // Login successfully
                        if (response.status === 'ok') {
                            token_1.saveUser(response);
                            urlParams = new URL(window.location.href);
                            params = utils_1.getPageQuery();
                            antd_1.message.success('🎉 🎉 🎉  登录成功！');
                            redirect = params.redirect;
                            if (redirect) {
                                redirectUrlParams = new URL(redirect);
                                if (redirectUrlParams.origin === urlParams.origin) {
                                    redirect = redirect.substr(urlParams.origin.length);
                                    if (redirect.match(/^\/.*#/)) {
                                        redirect = redirect.substr(redirect.indexOf('#') + 1);
                                    }
                                }
                                else {
                                    window.location.href = '/';
                                    return [2 /*return*/];
                                }
                            }
                            umi_1.history.replace(redirect || '/');
                        }
                        return [2 /*return*/];
                }
            });
        },
        logout: function () {
            token_1.removeUser();
            var redirect = utils_1.getPageQuery().redirect;
            // Note: There may be security issues, please note
            if (window.location.pathname !== '/user/login' && !redirect) {
                umi_1.history.replace({
                    pathname: '/user/login',
                    search: querystring_1.stringify({
                        redirect: window.location.href
                    })
                });
            }
        }
    },
    reducers: {
        changeLoginStatus: function (state, _a) {
            var payload = _a.payload;
            authority_1.setAuthority(payload.currentAuthority);
            return __assign(__assign({}, state), { status: payload.status, type: payload.type });
        },
        saveCurrentUser: function (state, action) {
            return __assign(__assign({}, state), { currentUser: action.payload || {} });
        },
        changeNotifyCount: function (state, action) {
            if (state === void 0) { state = {
                currentUser: {}
            }; }
            return __assign(__assign({}, state), { currentUser: __assign(__assign({}, state.currentUser), { notifyCount: action.payload.totalCount, unreadCount: action.payload.unreadCount }) });
        }
    }
};
exports["default"] = UserModel;
