"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
var react_3 = require("react");
var index_less_1 = require("./index.less");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var data_1 = require("../../constant/data");
var umi_1 = require("umi");
var doc_1 = require("@/services/doc");
var dropdownRender = function (menus) {
    return (react_1["default"].createElement("div", { id: 'test', className: index_less_1["default"].dropdownClass }, menus));
};
var onChange = function (value) {
    if (typeof (value[value.length - 1]) == 'number') {
        umi_1.history.push("/showdoc?iddoc=" + value[value.length - 1]);
    }
};
var filter = function (inputValue, path) {
    return path.some(function (option) {
        return option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
    });
};
exports["default"] = (function () {
    var _a = react_3.useState([]), data = _a[0], setData = _a[1];
    react_2.useEffect(function () {
        doc_1.SelectAllDocList().then(function (r) {
            if (r)
                if (r.code == 200) {
                    data_1.docTypeOption.map(function (item, index) {
                        if (item.children.length === 0) {
                            for (var j = 0, len = r.data.length; j < len; j++) {
                                if (r.data[j].doctype == item.value) {
                                    var docItem = {
                                        value: r.data[j].iddoc,
                                        label: r.data[j].doctitle
                                    };
                                    item.children.push(docItem);
                                }
                            }
                        }
                        else {
                            item.children.map(function (citem) {
                                if (citem.children != undefined)
                                    if (citem.children.length === 0) {
                                        for (var j = 0, len = r.data.length; j < len; j++) {
                                            if (r.data[j].doctype == ('' + item.value + citem.value)) {
                                                var docItem = {
                                                    value: r.data[j].iddoc,
                                                    label: r.data[j].doctitle
                                                };
                                                citem.children.push(docItem);
                                            }
                                        }
                                    }
                                    else {
                                        citem.children.map(function (ditem) {
                                            if (ditem.children != undefined)
                                                if (ditem.children.length === 0) {
                                                    for (var j = 0, len = r.data.length; j < len; j++) {
                                                        if (r.data[j].doctype == ('' + item.value + citem.value + ditem.value)) {
                                                            var docItem = {
                                                                value: r.data[j].iddoc,
                                                                label: r.data[j].doctitle
                                                            };
                                                            ditem.children.push(docItem);
                                                        }
                                                    }
                                                }
                                        });
                                    }
                            });
                        }
                    });
                    // console.log(docTypeOption);
                    setData(data_1.docTypeOption);
                }
        });
    }, []);
    return (react_1["default"].createElement("div", { className: index_less_1["default"].container },
        react_1["default"].createElement("div", { id: "components-auto-complete-demo-certain-category" },
            react_1["default"].createElement(antd_1.Cascader, { size: "large", className: index_less_1["default"].dropdownCascader, options: data, onChange: onChange, bordered: false, suffixIcon: react_1["default"].createElement(icons_1.SearchOutlined, null), placeholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9", dropdownRender: dropdownRender, showSearch: { filter: filter, matchInputWidth: true } }))));
});
