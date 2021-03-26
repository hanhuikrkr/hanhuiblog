"use strict";
exports.__esModule = true;
var createHash = function (hashLength) {
    // 默认长度 24
    return Array.from(Array(Number(hashLength) || 24), function () {
        return Math.floor(Math.random() * 36).toString(36);
    }).join('');
};
exports["default"] = [
    {
        path: '/',
        component: '../layouts/BlankLayout',
        routes: [
            {
                path: '/user',
                component: '../layouts/UserLayout',
                routes: [
                    {
                        name: 'login',
                        path: '/user/login',
                        component: './User/login'
                    },
                    {
                        name: '注册页',
                        path: '/user/userregister',
                        component: './User/UserRegister'
                    },
                ]
            },
            {
                path: '/',
                component: '../layouts/SecurityLayout',
                routes: [
                    {
                        path: '/',
                        component: '../layouts/BasicLayout',
                        authority: ['admin', 'user'],
                        routes: [
                            {
                                path: '/',
                                redirect: '/welcome'
                            },
                            {
                                path: '/welcome',
                                name: 'welcome',
                                icon: 'icon-smile',
                                component: './Welcome'
                            },
                            {
                                path: '/showdoc',
                                component: './ShowDoc'
                            },
                            {
                                path: '/alertdoc',
                                component: './AlertDocPage'
                            },
                            {
                                path: '/admin',
                                name: 'admin',
                                icon: 'crown',
                                authority: ['admin'],
                                routes: [
                                    {
                                        path: '/admin/sub-page',
                                        name: 'sub-page',
                                        component: './AlertDocList',
                                        authority: ['admin']
                                    },
                                    {
                                        path: '/admin/uploadDoc',
                                        name: '上传文档',
                                        component: './UploadDoc/index.tsx',
                                        authority: ['admin']
                                    },
                                ]
                            },
                            {
                                // 110000
                                icon: 'icon-js',
                                name: 'JavaScript',
                                path: createHash(24),
                                routes: [
                                    {
                                        name: 'JS 中万物皆对象',
                                        component: './DocList',
                                        sort: 110100,
                                        path: createHash(24)
                                    },
                                    {
                                        name: '原型与继承',
                                        sort: 110200,
                                        path: createHash(24),
                                        component: './DocList'
                                    },
                                    {
                                        name: 'proxy代理',
                                        sort: 110300,
                                        component: './DocList',
                                        path: createHash(24)
                                    },
                                    {
                                        name: '函数',
                                        sort: 111400,
                                        component: './DocList',
                                        path: createHash(24)
                                    },
                                    {
                                        name: '基本引用类型',
                                        sort: 110400,
                                        component: './DocList',
                                        path: createHash(24)
                                    },
                                    {
                                        name: '基础知识',
                                        sort: 110500,
                                        component: './DocList',
                                        path: createHash(24)
                                    },
                                    {
                                        name: '迭代器与生成器',
                                        sort: 110600,
                                        component: './DocList',
                                        path: createHash(24)
                                    },
                                    {
                                        name: 'Promise与async',
                                        sort: 110700,
                                        component: './DocList',
                                        path: createHash(24)
                                    },
                                    {
                                        name: '模块',
                                        sort: 110800,
                                        component: './DocList',
                                        path: createHash(24)
                                    },
                                    {
                                        name: 'BOM和DOM傻傻分不清',
                                        sort: 110900,
                                        component: './DocList',
                                        path: createHash(24)
                                    },
                                    {
                                        name: 'JS里的坑',
                                        sort: 111000,
                                        component: './DocList',
                                        path: createHash(24)
                                    },
                                    {
                                        name: '手写时间',
                                        sort: 111100,
                                        component: './DocList',
                                        path: createHash(24)
                                    },
                                    {
                                        name: '网络请求',
                                        sort: 111200,
                                        component: './DocList',
                                        path: createHash(24)
                                    },
                                    {
                                        name: '事件',
                                        sort: 111300,
                                        component: './DocList',
                                        path: createHash(24)
                                    },
                                ]
                            },
                            {
                                // 120000
                                name: '计算机网络',
                                icon: 'icon-network',
                                path: createHash(24),
                                routes: [
                                    {
                                        value: '01',
                                        name: 'HTTP',
                                        path: createHash(24),
                                        routes: [
                                            {
                                                value: '01',
                                                name: 'http本身',
                                                component: './DocList',
                                                path: createHash(24),
                                                sort: 120101
                                            },
                                            {
                                                value: '02',
                                                name: 'Ajax 解决浏览器缓存问题',
                                                component: './DocList',
                                                path: createHash(24),
                                                sort: 120102
                                            },
                                            {
                                                value: '03',
                                                name: '常见状态码',
                                                component: './DocList',
                                                path: createHash(24),
                                                sort: 120103
                                            },
                                            {
                                                value: '04',
                                                name: 'http方法',
                                                component: './DocList',
                                                path: createHash(24),
                                                sort: 120104
                                            },
                                            {
                                                value: '05',
                                                name: 'GET和POST的区别',
                                                component: './DocList',
                                                path: createHash(24),
                                                sort: 120105
                                            },
                                            {
                                                value: '06',
                                                name: 'Request/response',
                                                component: './DocList',
                                                path: createHash(24),
                                                sort: 120106
                                            },
                                            {
                                                value: '07',
                                                name: 'Web缓存',
                                                component: './DocList',
                                                path: createHash(24),
                                                sort: 120107
                                            },
                                            {
                                                value: '08',
                                                name: 'HTTP 2.0',
                                                component: './DocList',
                                                path: createHash(24),
                                                sort: 120108
                                            },
                                            {
                                                value: '09',
                                                name: 'HTTPS & TLS',
                                                component: './DocList',
                                                path: createHash(24),
                                                sort: 120109
                                            },
                                        ]
                                    },
                                    {
                                        value: '0500',
                                        name: 'CDN缓存',
                                        component: './DocList',
                                        path: createHash(24),
                                        sort: 120500
                                    },
                                    {
                                        value: '0400',
                                        name: 'DNS',
                                        component: './DocList',
                                        path: createHash(24),
                                        sort: 120400
                                    },
                                    {
                                        value: '0200',
                                        name: '基础知识',
                                        component: './DocList',
                                        path: createHash(24),
                                        sort: 120200
                                    },
                                    {
                                        value: '03',
                                        name: 'TCP',
                                        path: createHash(24),
                                        routes: [
                                            {
                                                value: '01',
                                                name: 'TCP报文结构',
                                                component: './DocList',
                                                path: createHash(24),
                                                sort: 120301
                                            },
                                            {
                                                value: '02',
                                                name: '可靠数据传输原理',
                                                component: './DocList',
                                                path: createHash(24),
                                                sort: 120302
                                            },
                                            {
                                                value: '03',
                                                name: '流量控制',
                                                component: './DocList',
                                                path: createHash(24),
                                                sort: 120303
                                            },
                                            {
                                                value: '04',
                                                name: '拥塞控制',
                                                component: './DocList',
                                                path: createHash(24),
                                                sort: 120304
                                            },
                                            {
                                                value: '05',
                                                name: 'TCP 保证可靠性',
                                                component: './DocList',
                                                path: createHash(24),
                                                sort: 120305
                                            },
                                            {
                                                value: '06',
                                                name: 'TCP 为什么四次挥手',
                                                component: './DocList',
                                                path: createHash(24),
                                                sort: 120306
                                            },
                                            {
                                                value: '07',
                                                name: 'TCP 握手为什么 3 次',
                                                component: './DocList',
                                                path: createHash(24),
                                                sort: 120307
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                // 130000
                                sort: 130000,
                                name: 'HTML',
                                icon: 'icon-HTML-fill',
                                component: './DocList',
                                path: createHash(24)
                            },
                            {
                                // 140000
                                value: '14',
                                name: '基础知识',
                                icon: 'icon-jichu',
                                path: createHash(24),
                                routes: [
                                    {
                                        sort: 140100,
                                        name: '正则表达式',
                                        component: './DocList',
                                        path: createHash(24)
                                    },
                                ]
                            },
                            {
                                // 150000
                                value: '15',
                                name: '浏览器',
                                icon: 'icon-chrome',
                                path: createHash(24),
                                routes: [
                                    {
                                        value: '0100',
                                        name: '浏览器缓存',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 150100
                                    },
                                    {
                                        value: '0200',
                                        name: '原生事件',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 150200
                                    },
                                    {
                                        value: '0300',
                                        name: ' Cookie-Session 、Jwt 两种身份认证机制',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 150300
                                    },
                                    {
                                        value: '0400',
                                        name: 'Service Worker',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 150400
                                    },
                                    {
                                        value: '0500',
                                        name: '渲染机制',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 150500
                                    },
                                    {
                                        value: '0600',
                                        name: '跨域',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 150600
                                    },
                                    {
                                        value: '0700',
                                        name: '前端路由',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 150700
                                    },
                                    {
                                        value: '0800',
                                        name: '几种方式实现存储功能',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 150800
                                    },
                                    {
                                        value: '0900',
                                        name: '性能优化',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 150900
                                    },
                                ]
                            },
                            {
                                // 160000
                                value: '16',
                                name: 'CSS',
                                icon: 'icon-css',
                                path: createHash(24),
                                routes: [
                                    {
                                        value: '0100',
                                        name: '常见问题',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 160100
                                    },
                                    {
                                        value: '02',
                                        name: '基础知识',
                                        path: createHash(24),
                                        routes: [
                                            {
                                                value: '01',
                                                name: '定位',
                                                path: createHash(24),
                                                component: './DocList',
                                                sort: 160201
                                            },
                                            {
                                                value: '02',
                                                name: '动画',
                                                path: createHash(24),
                                                component: './DocList',
                                                sort: 160202
                                            },
                                            {
                                                value: '03',
                                                name: '布局',
                                                path: createHash(24),
                                                component: './DocList',
                                                sort: 160203
                                            },
                                            {
                                                value: '04',
                                                name: '盒模型',
                                                path: createHash(24),
                                                component: './DocList',
                                                sort: 160204
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                // 200000
                                value: '20',
                                icon: 'icon-youhua',
                                name: '优化',
                                path: createHash(24),
                                routes: [
                                    {
                                        value: '0100',
                                        name: '常见问题',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 200100
                                    },
                                    {
                                        value: '0200',
                                        name: '网络优化',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 200200
                                    },
                                    {
                                        value: '0300',
                                        name: '缓存优化',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 200300
                                    },
                                    {
                                        value: '0400',
                                        name: '前端渲染',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 200400
                                    },
                                    {
                                        value: '0500',
                                        name: '服务响应',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 200500
                                    },
                                    {
                                        value: '0600',
                                        name: '资源请求',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 200600
                                    },
                                    {
                                        value: '0700',
                                        name: '预加载',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 200700
                                    },
                                ]
                            },
                            {
                                // 210000
                                value: '21',
                                icon: 'icon-node-js',
                                name: 'NodeJS',
                                path: createHash(24),
                                routes: [
                                    {
                                        value: '0100',
                                        name: '常见问题',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 210100
                                    },
                                    {
                                        value: '0200',
                                        name: '基础知识',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 210200
                                    },
                                    {
                                        value: '0300',
                                        name: '异步I/O',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 210300
                                    },
                                    {
                                        value: '0400',
                                        name: '异步编程',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 210400
                                    },
                                    {
                                        value: '0500',
                                        name: '内存控制',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 210500
                                    },
                                    {
                                        value: '0600',
                                        name: '网络编程',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 210600
                                    },
                                    {
                                        value: '0700',
                                        name: 'web开发',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 210700
                                    },
                                ]
                            },
                            {
                                // 220000
                                value: '22',
                                icon: 'icon-react',
                                name: 'React',
                                path: createHash(24),
                                routes: [
                                    {
                                        value: '0100',
                                        name: '常见问题',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 220100
                                    },
                                    {
                                        value: '0200',
                                        name: '基础知识',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 220200
                                    },
                                    {
                                        value: '0300',
                                        name: 'Mobx',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 220300
                                    },
                                    {
                                        value: '0400',
                                        name: 'Hooks',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 220400
                                    },
                                    {
                                        value: '0500',
                                        name: 'ReactDom',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 220500
                                    },
                                    {
                                        value: '0600',
                                        name: '事件机制',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 220600
                                    },
                                    {
                                        value: '0700',
                                        name: '样式处理',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 220700
                                    },
                                    {
                                        value: '0800',
                                        name: '组件',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 220800
                                    },
                                    {
                                        value: '0900',
                                        name: '源码解析',
                                        path: createHash(24),
                                        component: './DocList',
                                        sort: 220900
                                    },
                                ]
                            },
                            {
                                value: '980000',
                                icon: 'icon-suanfaguanligongju',
                                name: '算法',
                                sort: 980000,
                                path: createHash(24),
                                component: './DocList'
                            },
                            {
                                value: '990000',
                                icon: 'icon-lvyou',
                                name: '随手记',
                                sort: 990000,
                                path: createHash(24),
                                component: './DocList'
                            },
                            {
                                name: '个人项目',
                                path: '/project',
                                icon: 'icon-xiangmu',
                                component: './ProjectPage'
                            },
                            {
                                component: './404'
                            },
                        ]
                    },
                    {
                        component: './404'
                    },
                ]
            },
        ]
    },
    {
        component: './404'
    },
];
