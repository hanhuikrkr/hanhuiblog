"use strict";
exports.__esModule = true;
var react_1 = require("react");
var markdown_it_1 = require("markdown-it");
var doc_ts_1 = require("@/services/doc.ts");
// 导入编辑器的样式
var hljs = require('highlight.js');
require("./md.css");
require("react-markdown-editor-lite/lib/index.css");
require("./vs2015.css");
var react_2 = require("react");
var index_less_1 = require("./index.less");
// 初始化Markdown解析器
var mdParser = new markdown_it_1["default"]({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + '</code></pre>';
            }
            catch (__) { }
        }
        return '<pre class="hljs"><code>' + mdParser.utils.escapeHtml(str) + '</code></pre>';
    },
    linkify: true,
    typographer: true
});
exports["default"] = (function (props) {
    var _a = react_1.useState(''), text = _a[0], setText = _a[1];
    react_2.useEffect(function () {
        doc_ts_1.SelectDocData(props.location.query).then(function (r) {
            if (r)
                if (r.code == 200) {
                    setText(r.data.doctext);
                }
        });
    });
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: index_less_1["default"].textContainer },
            react_1["default"].createElement("div", { className: "markdown-body", dangerouslySetInnerHTML: { __html: mdParser.render(text) } }))));
});
