"use strict";
exports.__esModule = true;
var react_1 = require("react");
var index_less_1 = require("./index.less");
var antd_1 = require("antd");
var doc_ts_1 = require("@/services/doc.ts");
var pro_layout_1 = require("@ant-design/pro-layout");
var umi_1 = require("umi");
exports["default"] = (function (props) {
    var _a = react_1.useState([]), listData = _a[0], setListData = _a[1];
    console.log(props.location);
    react_1.useEffect(function () {
        doc_ts_1.Selectquery(props.location).then(function (r) {
            if (r)
                if (r.code == 200) {
                    setListData(r.data);
                }
        });
    }, [props.location]);
    var onImgError = function (e) {
        console.log(e);
        e.target.src = "http://www.hanhuikrkr.com:7112/404.jpg";
    };
    return (react_1["default"].createElement(pro_layout_1.PageContainer, null,
        react_1["default"].createElement("div", { className: index_less_1["default"].g_listContainer },
            react_1["default"].createElement("div", { id: "components-list-demo-vertical" },
                react_1["default"].createElement(antd_1.List, { itemLayout: "vertical", size: "large", dataSource: listData, footer: react_1["default"].createElement("div", { style: { textAlign: 'center' } }), renderItem: function (item) { return (react_1["default"].createElement(antd_1.List.Item, { key: item.iddoc + item.doctitle, extra: react_1["default"].createElement("div", { style: { width: "240px" } },
                            react_1["default"].createElement("img", { className: index_less_1["default"].ex_img, alt: "logo", src: item.docpicab || "http://www.hanhuikrkr.com:7112/404.jpg", onError: onImgError })) },
                        react_1["default"].createElement(antd_1.List.Item.Meta, { avatar: react_1["default"].createElement(antd_1.Avatar, { src: "http://www.hanhuikrkr.com:7112/57887545.png" }), title: react_1["default"].createElement(umi_1.Link, { to: "/showdoc?iddoc=" + item.iddoc }, item.doctitle), description: item.doctime.toLocaleString().replace("T", " ").slice(0, -5) }),
                        item.docab)); } })))));
});
