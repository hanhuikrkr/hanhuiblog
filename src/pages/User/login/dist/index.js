"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var react_1 = require("react");
var pro_form_1 = require("@ant-design/pro-form");
var umi_1 = require("umi");
var index_less_1 = require("./index.less");
var LoginMessage = function (_a) {
    var content = _a.content;
    return (react_1["default"].createElement(antd_1.Alert, { style: {
            marginBottom: 24
        }, message: content, type: "error", showIcon: true }));
};
var Login = function (props) {
    var _a = props.userLogin, userLogin = _a === void 0 ? {} : _a, submitting = props.submitting;
    var status = userLogin.status, loginType = userLogin.type;
    var _b = react_1.useState('account'), type = _b[0], setType = _b[1];
    var intl = umi_1.useIntl();
    var handleSubmit = function (values) {
        var dispatch = props.dispatch;
        dispatch({
            type: 'login/login',
            payload: __assign(__assign({}, values), { type: type })
        });
    };
    return (react_1["default"].createElement("div", { className: index_less_1["default"].main },
        react_1["default"].createElement(pro_form_1["default"], { initialValues: {
                autoLogin: true
            }, submitter: {
                render: function (_, dom) { return dom.pop(); },
                submitButtonProps: {
                    loading: submitting,
                    size: 'large',
                    style: {
                        width: '100%'
                    }
                }
            }, onFinish: function (values) {
                handleSubmit(values);
                return Promise.resolve();
            } },
            status === 'error' && loginType === 'account' && !submitting && (react_1["default"].createElement(LoginMessage, { content: intl.formatMessage({
                    id: 'pages.login.accountLogin.errorMessage',
                    defaultMessage: '账户或密码错误（admin/ant.design)'
                }) })),
            react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(pro_form_1.ProFormText, { name: "userName", fieldProps: {
                        size: 'large',
                        prefix: react_1["default"].createElement(icons_1.UserOutlined, { className: index_less_1["default"].prefixIcon })
                    }, placeholder: intl.formatMessage({
                        id: 'pages.login.username.placeholder',
                        defaultMessage: '用户名: admin or user'
                    }), rules: [
                        {
                            required: true,
                            message: (react_1["default"].createElement(umi_1.FormattedMessage, { id: "pages.login.username.required", defaultMessage: "\u8BF7\u8F93\u5165\u7528\u6237\u540D!" }))
                        },
                    ] }),
                react_1["default"].createElement(pro_form_1.ProFormText.Password, { name: "password", fieldProps: {
                        size: 'large',
                        prefix: react_1["default"].createElement(icons_1.LockTwoTone, { className: index_less_1["default"].prefixIcon })
                    }, placeholder: intl.formatMessage({
                        id: 'pages.login.password.placeholder',
                        defaultMessage: '密码: ant.design'
                    }), rules: [
                        {
                            required: true,
                            message: (react_1["default"].createElement(umi_1.FormattedMessage, { id: "pages.login.password.required", defaultMessage: "\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01" }))
                        },
                    ] })),
            react_1["default"].createElement("div", { style: {
                    marginBottom: 24
                } },
                react_1["default"].createElement(pro_form_1.ProFormCheckbox, { noStyle: true, name: "autoLogin" },
                    react_1["default"].createElement("span", { style: {
                            color: 'white'
                        } }, "\u8BB0\u4F4F\u5BC6\u7801")),
                react_1["default"].createElement(umi_1.Link, { style: {
                        float: 'right',
                        color: 'white'
                    }, to: "/user/UserRegister" },
                    react_1["default"].createElement(umi_1.FormattedMessage, { id: "useranduserregister.login.signup", defaultMessage: "\u6CE8\u518C\u5E10\u53F7" }))))));
};
exports["default"] = umi_1.connect(function (_a) {
    var login = _a.login, loading = _a.loading;
    return ({
        userLogin: login,
        submitting: loading.effects['login/login']
    });
})(Login);
