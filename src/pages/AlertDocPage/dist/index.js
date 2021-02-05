"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
var React = require("react");
var markdown_it_1 = require("markdown-it");
var react_markdown_editor_lite_1 = require("react-markdown-editor-lite");
var antd_1 = require("antd");
var data_1 = require("../../constant/data");
var index_less_1 = require("./index.less");
var umi_1 = require("umi");
var doc_ts_1 = require("@/services/doc.ts");
// 导入编辑器的样式
var hljs = require('highlight.js');
require("react-markdown-editor-lite/lib/index.css");
require("highlight.js/styles/vs.css");
var react_1 = require("react");
var react_2 = require("react");
var doc_ts_2 = require("@/services/doc.ts");
// 注册插件（如果有的话）
// MdEditor.use(YOUR_PLUGINS_HERE);
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
var filter = function (inputValue, path) {
    return path.some(function (option) {
        return option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
    });
};
function onChange(value) { }
var dropdownRender = function (menus) {
    return (React.createElement("div", { id: 'test', className: index_less_1["default"].dropdownClass }, menus));
};
var onFinishFailed = function (errorInfo) {
    console.log('Failed:', errorInfo);
};
exports["default"] = (function (props) {
    var form = antd_1.Form.useForm()[0];
    var _a = react_1.useState(''), text = _a[0], setText = _a[1];
    react_2.useEffect(function () {
        doc_ts_2.SelectDocData(props.location.query).then(function (r) {
            if (r)
                if (r.code == 200) {
                    console.log(r.data);
                    setText(r.data.doctext);
                    form.setFieldsValue({
                        doctitle: r.data.doctitle,
                        docab: r.data.docab,
                        docpicab: r.data.docpicab
                    });
                }
        });
    }, [props.location]);
    var handleEditorChange = function (_a) {
        var html = _a.html, text = _a.text;
        console.log(text);
        setText(text);
    };
    var onFinish = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var params, r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(values);
                    params = {
                        iddoc: props.location.query.iddoc,
                        doctext: values.doctext.text,
                        docab: values.docab,
                        docpicab: values.docpicab,
                        doctitle: values.doctitle,
                        docathorname: '韩麾',
                        doctype: parseInt(values.doctype.join(''))
                    };
                    console.log('Success:', params);
                    return [4 /*yield*/, doc_ts_1.updateDoc(params)];
                case 1:
                    r = _a.sent();
                    console.log(r);
                    if (r.code == 200) {
                        antd_1.notification.success({
                            message: '博客上传成功',
                            description: "\u300A" + params.doctitle + "\u300B"
                        });
                    }
                    umi_1.history.push({
                        pathname: '/welcome'
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(React.Fragment, null,
        React.createElement(antd_1.Form, { form: form, name: "basic", onFinish: onFinish, onFinishFailed: onFinishFailed, className: index_less_1["default"].uploaderFrom },
            React.createElement(antd_1.Form.Item, { name: "doctype", noStyle: true },
                React.createElement(antd_1.Cascader, { className: index_less_1["default"].dropdownCascader, options: data_1.docTypeOption, onChange: onChange, placeholder: "\u8BF7\u9009\u62E9\u4E3B\u9898", dropdownRender: dropdownRender, showSearch: { filter: filter, matchInputWidth: true } })),
            React.createElement(antd_1.Form.Item, { name: "doctitle", noStyle: true },
                React.createElement(antd_1.Input, { className: index_less_1["default"].dropdownCascader, placeholder: "\u8BF7\u8F93\u5165\u6807\u9898" })),
            React.createElement(antd_1.Form.Item, { name: "docab", noStyle: true },
                React.createElement(antd_1.Input, { className: index_less_1["default"].dropdownCascader, placeholder: "\u8BF7\u8F93\u5165\u6982\u8981" })),
            React.createElement(antd_1.Form.Item, { name: "docpicab", noStyle: true },
                React.createElement(antd_1.Input, { className: index_less_1["default"].dropdownCascader, placeholder: "\u8BF7\u8F93\u5165\u76F8\u5173\u56FE\u7247\u5730\u5740" })),
            React.createElement("div", { className: index_less_1["default"].mdEditorClass },
                React.createElement(antd_1.Form.Item, { name: "doctext", noStyle: true, valuePropName: "text" },
                    React.createElement(react_markdown_editor_lite_1["default"], { style: { height: '100%' }, renderHTML: function (text) { return mdParser.render(text); }, onChange: handleEditorChange, value: text }))),
            React.createElement(antd_1.Button, { className: index_less_1["default"].uploadBtn, type: "primary", htmlType: "submit" }, "Submit"))));
});
