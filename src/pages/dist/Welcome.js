"use strict";
exports.__esModule = true;
var react_1 = require("react");
var pro_layout_1 = require("@ant-design/pro-layout");
var antd_1 = require("antd");
var Welcome_less_1 = require("./Welcome.less");
var SearchComponent_1 = require("./SearchComponent");
var CodePreview = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement("pre", { className: Welcome_less_1["default"].pre },
        react_1["default"].createElement("code", null,
            react_1["default"].createElement(antd_1.Typography.Text, { copyable: true }, children))));
};
exports["default"] = (function () {
    return (react_1["default"].createElement(pro_layout_1.PageContainer, null,
        react_1["default"].createElement("div", { className: Welcome_less_1["default"].searchbox_component },
            react_1["default"].createElement(SearchComponent_1["default"], null))));
});
