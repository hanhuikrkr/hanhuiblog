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
var waitTime = function (time) {
    if (time === void 0) { time = 100; }
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(true);
        }, time);
    });
};
// async function getFakeCaptcha(req: Request, res: Response) {
//   await waitTime(2000);
//   return res.json('captcha-xxx');
// }
// 代码中会兼容本地 service mock 以及部署站点的静态数据
exports["default"] = {
    // 支持值为 Object 和 Array
    'GET /api/currentUser': {
        name: 'Serati Ma',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        email: 'antdesign@alipay.com',
        signature: '海纳百川，有容乃大',
        title: '交互专家',
        group: '蚂蚁集团－某某某事业群－某某平台部－某某技术部－UED',
        tags: [
            {
                key: '0',
                label: '很有想法的'
            },
            {
                key: '1',
                label: '专注设计'
            },
            {
                key: '2',
                label: '辣~'
            },
            {
                key: '3',
                label: '大长腿'
            },
            {
                key: '4',
                label: '川妹子'
            },
            {
                key: '5',
                label: '海纳百川'
            },
        ],
        notifyCount: 12,
        unreadCount: 11,
        country: 'China',
        geographic: {
            province: {
                label: '浙江省',
                key: '330000'
            },
            city: {
                label: '杭州市',
                key: '330100'
            }
        },
        address: '西湖区工专路 77 号',
        phone: '0752-268888888'
    },
    // GET POST 可省略
    'GET /api/users': [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park'
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park'
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park'
        },
    ],
    // TODO
    'POST /api/login/account': function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, password, userName, type;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, password = _a.password, userName = _a.userName, type = _a.type;
                    return [4 /*yield*/, waitTime(2000)];
                case 1:
                    _b.sent();
                    if (password === 'user' && userName === 'admin') {
                        res.send({
                            status: 'ok',
                            type: type,
                            currentAuthority: 'admin'
                        });
                        return [2 /*return*/];
                    }
                    if (password === 'user' && userName === 'user') {
                        res.send({
                            status: 'ok',
                            type: type,
                            currentAuthority: 'user'
                        });
                        return [2 /*return*/];
                    }
                    if (type === 'mobile') {
                        res.send({
                            status: 'ok',
                            type: type,
                            currentAuthority: 'admin'
                        });
                        return [2 /*return*/];
                    }
                    res.send({
                        status: 'error',
                        type: type,
                        currentAuthority: 'guest'
                    });
                    return [2 /*return*/];
            }
        });
    }); },
    'POST /api/register': function (req, res) {
        res.send({ status: 'ok', currentAuthority: 'user' });
    },
    'GET /api/500': function (req, res) {
        res.status(500).send({
            timestamp: 1513932555104,
            status: 500,
            error: 'error',
            message: 'error',
            path: '/base/category/list'
        });
    },
    'GET /api/404': function (req, res) {
        res.status(404).send({
            timestamp: 1513932643431,
            status: 404,
            error: 'Not Found',
            message: 'No message available',
            path: '/base/category/list/2121212'
        });
    },
    'GET /api/403': function (req, res) {
        res.status(403).send({
            timestamp: 1513932555104,
            status: 403,
            error: 'Unauthorized',
            message: 'Unauthorized',
            path: '/base/category/list'
        });
    },
    'GET /api/401': function (req, res) {
        res.status(401).send({
            timestamp: 1513932555104,
            status: 401,
            error: 'Unauthorized',
            message: 'Unauthorized',
            path: '/base/category/list'
        });
    }
};
