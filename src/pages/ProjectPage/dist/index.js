"use strict";
exports.__esModule = true;
var antd_1 = require("antd");
var react_1 = require("react");
var umi_1 = require("umi");
var data_1 = require("@/constant/data");
var style_less_1 = require("./style.less");
var Option = antd_1.Select.Option;
var FormItem = antd_1.Form.Item;
var Paragraph = antd_1.Typography.Paragraph;
var getKey = function (id, index) { return id + "-" + index; };
var ProjectPage = function (_a) {
    var loading = _a.loading;
    var cardList = data_1.projectData && (react_1["default"].createElement(antd_1.List, { rowKey: "id", loading: loading, grid: {
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4
        }, dataSource: data_1.projectData, renderItem: function (item) { return (react_1["default"].createElement(umi_1.Link, { to: item.href },
            react_1["default"].createElement(antd_1.List.Item, null,
                react_1["default"].createElement(antd_1.Card, { className: style_less_1["default"].card, hoverable: true, cover: react_1["default"].createElement("img", { alt: item.title, src: item.cover }) },
                    react_1["default"].createElement(antd_1.Card.Meta, { title: react_1["default"].createElement("a", { href: item.href }, item.title), description: react_1["default"].createElement(Paragraph, { className: style_less_1["default"].item, ellipsis: { rows: 2 } }, item.subDescription) }),
                    react_1["default"].createElement("div", { className: style_less_1["default"].cardItemContent },
                        react_1["default"].createElement("span", null, item.updatedAt),
                        react_1["default"].createElement("div", { className: style_less_1["default"].avatarList },
                            react_1["default"].createElement(antd_1.Avatar, { src: "http://www.hanhuikrkr.com:7112/57887545.png" }))))))); } }));
    var formItemLayout = {
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 }
        }
    };
    return (react_1["default"].createElement("div", { className: style_less_1["default"].coverCardList },
        react_1["default"].createElement("div", { className: style_less_1["default"].cardList }, cardList)));
};
exports["default"] = umi_1.connect(function (_a) {
    var projectPage = _a.projectPage, loading = _a.loading;
    return ({
        projectPage: projectPage,
        loading: loading.models.projectPage
    });
})(ProjectPage);
