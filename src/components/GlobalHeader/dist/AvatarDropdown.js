"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var react_1 = require("react");
var umi_1 = require("umi");
var HeaderDropdown_1 = require("../HeaderDropdown");
var index_less_1 = require("./index.less");
var AvatarDropdown = /** @class */ (function (_super) {
    __extends(AvatarDropdown, _super);
    function AvatarDropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onMenuClick = function (event) {
            var key = event.key;
            if (key === 'logout') {
                var dispatch = _this.props.dispatch;
                if (dispatch) {
                    dispatch({
                        type: 'user/logout'
                    });
                }
                return;
            }
            umi_1.history.push("/account/" + key);
        };
        return _this;
    }
    AvatarDropdown.prototype.render = function () {
        var _a = this.props, _b = _a.currentUser, currentUser = _b === void 0 ? {
            avatar: '',
            name: ''
        } : _b, menu = _a.menu;
        var menuHeaderDropdown = (react_1["default"].createElement(antd_1.Menu, { className: index_less_1["default"].menu, selectedKeys: [], onClick: this.onMenuClick },
            menu && (react_1["default"].createElement(antd_1.Menu.Item, { key: "center" },
                react_1["default"].createElement(icons_1.UserOutlined, null),
                "\u4E2A\u4EBA\u4E2D\u5FC3")),
            menu && (react_1["default"].createElement(antd_1.Menu.Item, { key: "settings" },
                react_1["default"].createElement(icons_1.SettingOutlined, null),
                "\u4E2A\u4EBA\u8BBE\u7F6E")),
            menu && react_1["default"].createElement(antd_1.Menu.Divider, null),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "logout" },
                react_1["default"].createElement(icons_1.LogoutOutlined, null),
                "\u9000\u51FA\u767B\u5F55")));
        return currentUser && currentUser.name ? (react_1["default"].createElement(HeaderDropdown_1["default"], { overlay: menuHeaderDropdown },
            react_1["default"].createElement("span", { className: index_less_1["default"].action + " " + index_less_1["default"].account },
                react_1["default"].createElement(antd_1.Avatar, { size: "small", className: index_less_1["default"].avatar, src: currentUser.avatar, alt: "avatar" }),
                react_1["default"].createElement("span", { className: index_less_1["default"].name + " anticon" }, currentUser.name)))) : (react_1["default"].createElement("span", { className: index_less_1["default"].action + " " + index_less_1["default"].account },
            react_1["default"].createElement(antd_1.Spin, { size: "small", style: {
                    marginLeft: 8,
                    marginRight: 8
                } })));
    };
    return AvatarDropdown;
}(react_1["default"].Component));
exports["default"] = umi_1.connect(function (_a) {
    var user = _a.user;
    return ({
        currentUser: user.currentUser
    });
})(AvatarDropdown);
