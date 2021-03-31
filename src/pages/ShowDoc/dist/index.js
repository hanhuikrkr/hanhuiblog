"use strict";
exports.__esModule = true;
var react_1 = require("react");
var markdown_it_1 = require("markdown-it");
var markdown_it_emoji_1 = require("markdown-it-emoji");
var markdown_it_sub_1 = require("markdown-it-sub");
var markdown_it_sup_1 = require("markdown-it-sup");
var markdown_it_footnote_1 = require("markdown-it-footnote");
var markdown_it_deflist_1 = require("markdown-it-deflist");
var markdown_it_abbr_1 = require("markdown-it-abbr");
var markdown_it_ins_1 = require("markdown-it-ins");
var markdown_it_mark_1 = require("markdown-it-mark");
var markdown_it_task_lists_1 = require("markdown-it-task-lists");
var markdown_it_container_1 = require("markdown-it-container");
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
})
    .use(markdown_it_emoji_1["default"])
    .use(markdown_it_sub_1["default"])
    .use(markdown_it_sup_1["default"])
    .use(markdown_it_footnote_1["default"])
    .use(markdown_it_deflist_1["default"])
    .use(markdown_it_abbr_1["default"])
    .use(markdown_it_ins_1["default"])
    .use(markdown_it_mark_1["default"])
    .use(markdown_it_task_lists_1["default"])
    .use(markdown_it_container_1["default"]);
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
