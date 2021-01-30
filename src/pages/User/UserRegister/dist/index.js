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
var antd_1 = require("antd");
var react_1 = require("react");
var umi_1 = require("umi");
var style_less_1 = require("./style.less");
var FormItem = antd_1.Form.Item;
var Option = antd_1.Select.Option;
var InputGroup = antd_1.Input.Group;
var passwordStatusMap = {
    ok: (react_1["default"].createElement("div", { className: style_less_1["default"].success },
        react_1["default"].createElement(umi_1.FormattedMessage, { id: "useranduserregister.strength.strong" }))),
    pass: (react_1["default"].createElement("div", { className: style_less_1["default"].warning },
        react_1["default"].createElement(umi_1.FormattedMessage, { id: "useranduserregister.strength.medium" }))),
    poor: (react_1["default"].createElement("div", { className: style_less_1["default"].error },
        react_1["default"].createElement(umi_1.FormattedMessage, { id: "useranduserregister.strength.short" })))
};
var passwordProgressMap = {
    ok: 'success',
    pass: 'normal',
    poor: 'exception'
};
var UserRegister = function (_a) {
    var submitting = _a.submitting, dispatch = _a.dispatch, userAndUserRegister = _a.userAndUserRegister;
    var _b = react_1.useState(0), count = _b[0], setcount = _b[1];
    var _c = react_1.useState(false), visible = _c[0], setvisible = _c[1];
    var _d = react_1.useState('86'), prefix = _d[0], setprefix = _d[1];
    var _e = react_1.useState(false), popover = _e[0], setpopover = _e[1];
    var confirmDirty = false;
    var interval;
    var form = antd_1.Form.useForm()[0];
    react_1.useEffect(function () {
        if (!userAndUserRegister) {
            return;
        }
        var account = form.getFieldValue('mail');
        if (userAndUserRegister.status === 'ok') {
            antd_1.message.success('注册成功！');
            umi_1.history.push({
                pathname: '/user/register-result',
                state: {
                    account: account
                }
            });
        }
    }, [userAndUserRegister]);
    react_1.useEffect(function () { return function () {
        clearInterval(interval);
    }; }, []);
    var onGetCaptcha = function () {
        var counts = 59;
        setcount(counts);
        interval = window.setInterval(function () {
            counts -= 1;
            setcount(counts);
            if (counts === 0) {
                clearInterval(interval);
            }
        }, 1000);
    };
    var getPasswordStatus = function () {
        var value = form.getFieldValue('password');
        if (value && value.length > 9) {
            return 'ok';
        }
        if (value && value.length > 5) {
            return 'pass';
        }
        return 'poor';
    };
    var onFinish = function (values) {
        dispatch({
            type: 'userAndUserRegister/submit',
            payload: __assign(__assign({}, values), { prefix: prefix })
        });
    };
    var checkConfirm = function (_, value) {
        var promise = Promise;
        if (value && value !== form.getFieldValue('password')) {
            return promise.reject(umi_1.formatMessage({ id: 'useranduserregister.password.twice' }));
        }
        return promise.resolve();
    };
    var checkPassword = function (_, value) {
        var promise = Promise;
        // 没有值的情况
        if (!value) {
            setvisible(!!value);
            return promise.reject(umi_1.formatMessage({ id: 'useranduserregister.password.required' }));
        }
        // 有值的情况
        if (!visible) {
            setvisible(!!value);
        }
        setpopover(!popover);
        if (value.length < 6) {
            return promise.reject('');
        }
        if (value && confirmDirty) {
            form.validateFields(['confirm']);
        }
        return promise.resolve();
    };
    var changePrefix = function (value) {
        setprefix(value);
    };
    var renderPasswordProgress = function () {
        var value = form.getFieldValue('password');
        var passwordStatus = getPasswordStatus();
        return value && value.length ? (react_1["default"].createElement("div", { className: style_less_1["default"]["progress-" + passwordStatus] },
            react_1["default"].createElement(antd_1.Progress, { status: passwordProgressMap[passwordStatus], className: style_less_1["default"].progress, strokeWidth: 6, percent: value.length * 10 > 100 ? 100 : value.length * 10, showInfo: false }))) : null;
    };
    return (react_1["default"].createElement("div", { className: style_less_1["default"].main },
        react_1["default"].createElement("h3", null,
            react_1["default"].createElement(umi_1.FormattedMessage, { id: "useranduserregister.register.register" })),
        react_1["default"].createElement(antd_1.Form, { form: form, name: "UserRegister", onFinish: onFinish },
            react_1["default"].createElement(FormItem, { name: "mail", rules: [
                    {
                        required: true,
                        message: umi_1.formatMessage({ id: 'useranduserregister.email.required' })
                    },
                    {
                        type: 'email',
                        message: umi_1.formatMessage({ id: 'useranduserregister.email.wrong-format' })
                    },
                ] },
                react_1["default"].createElement(antd_1.Input, { size: "large", placeholder: umi_1.formatMessage({ id: 'useranduserregister.email.placeholder' }) })),
            react_1["default"].createElement(antd_1.Popover, { getPopupContainer: function (node) {
                    if (node && node.parentNode) {
                        return node.parentNode;
                    }
                    return node;
                }, content: visible && (react_1["default"].createElement("div", { style: { padding: '4px 0' } },
                    passwordStatusMap[getPasswordStatus()],
                    renderPasswordProgress(),
                    react_1["default"].createElement("div", { style: { marginTop: 0 } },
                        react_1["default"].createElement(umi_1.FormattedMessage, { id: "useranduserregister.strength.msg" })))), overlayStyle: { width: 240 }, placement: "bottomLeft", visible: visible },
                react_1["default"].createElement(FormItem, { name: "password", className: form.getFieldValue('password') &&
                        form.getFieldValue('password').length > 0 &&
                        style_less_1["default"].password, rules: [
                        {
                            validator: checkPassword
                        },
                    ] },
                    react_1["default"].createElement(antd_1.Input, { size: "large", type: "password", placeholder: umi_1.formatMessage({ id: 'useranduserregister.password.placeholder' }) }))),
            react_1["default"].createElement(FormItem, { name: "confirm", rules: [
                    {
                        required: true,
                        message: umi_1.formatMessage({ id: 'useranduserregister.confirm-password.required' })
                    },
                    {
                        validator: checkConfirm
                    },
                ] },
                react_1["default"].createElement(antd_1.Input, { size: "large", type: "password", placeholder: umi_1.formatMessage({ id: 'useranduserregister.confirm-password.placeholder' }) })),
            react_1["default"].createElement(FormItem, null,
                react_1["default"].createElement(antd_1.Button, { size: "large", loading: submitting, className: style_less_1["default"].submit, type: "primary", htmlType: "submit", disabled: true },
                    react_1["default"].createElement(umi_1.FormattedMessage, { id: "useranduserregister.register.register" })),
                react_1["default"].createElement(umi_1.Link, { className: style_less_1["default"].login, to: "/user/login" },
                    react_1["default"].createElement(umi_1.FormattedMessage, { id: "useranduserregister.register.sign-in" }))))));
};
exports["default"] = umi_1.connect(function (_a) {
    var userAndUserRegister = _a.userAndUserRegister, loading = _a.loading;
    return ({
        userAndUserRegister: userAndUserRegister,
        submitting: loading.effects['userAndUserRegister/submit']
    });
})(UserRegister);
