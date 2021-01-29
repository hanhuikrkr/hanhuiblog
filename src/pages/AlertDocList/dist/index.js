"use strict";
exports.__esModule = true;
var doc_1 = require("@/services/doc");
var antd_1 = require("antd");
var react_1 = require("react");
var react_2 = require("react");
var data = [
    {
        iddoc: '1',
        doctitle: 'John Brown',
        docab: 'New York No. 1 Lake Park'
    }
];
exports["default"] = (function () {
    var _a = react_2.useState([]), data = _a[0], setData = _a[1];
    react_1.useEffect(function () {
        doc_1.SelectAllDocList().then(function (r) {
            if (r)
                if (r.code == 200) {
                    console.log(r.data);
                    setData(r.data);
                }
        });
    }, []);
    var onDelete = function (param) {
        var params = { iddoc: param };
        doc_1.DeleteOneDoc(params).then(function (res) {
            doc_1.SelectAllDocList().then(function (r) {
                if (r)
                    if (r.code == 200) {
                        console.log(r.data);
                        setData(r.data);
                    }
            });
        });
    };
    var columns = [
        {
            title: '标题',
            dataIndex: 'doctitle',
            key: 'doctitle',
            render: function (text) { return React.createElement("a", null, text); }
        },
        {
            title: '简介',
            dataIndex: 'docab',
            key: 'docab'
        },
        {
            title: 'Action',
            key: 'action',
            render: function (text, record) { return (React.createElement(antd_1.Space, { size: "middle" },
                React.createElement("a", { onClick: function () { return onDelete(record.iddoc); } }, "\u5220\u9664"),
                React.createElement("a", { href: "/alertdoc?iddoc=" + record.iddoc }, "\u4FEE\u6539"))); }
        },
    ];
    return React.createElement(antd_1.Table, { columns: columns, dataSource: data });
});
