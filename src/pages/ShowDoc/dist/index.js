"use strict";
exports.__esModule = true;
var react_1 = require("react");
var markdown_it_1 = require("markdown-it");
// 导入编辑器的样式
var hljs = require('highlight.js');
require("react-markdown-editor-lite/lib/index.css");
require("./vs2015.css");
// 初始化Markdown解析器
var mdParser = new markdown_it_1["default"]({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            console.log(lang);
            try {
                return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + '</code></pre>';
            }
            catch (__) { }
        }
        return '<pre class="hljs"><code>' + mdParser.utils.escapeHtml(str) + '</code></pre>';
    }
});
exports["default"] = (function (props) {
    var _a = react_1.useState(''), text = _a[0], setText = _a[1];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { dangerouslySetInnerHTML: { __html: mdParser.render(text) } })));
});
