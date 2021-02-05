"use strict";
exports.__esModule = true;
exports.projectData = exports.docTypeOption = exports.colorIndex = void 0;
//色彩管理
exports.colorIndex = [
    '#2ae0c8',
    '#a2e1d4',
    '#acf6ef',
    '#cbf5fb',
    '#bdf3d4',
    '#e6e2c3',
    '#e3c887',
    '#fad8be',
    '#fbb8ac',
    '#fe6673',
    '#666666',
    '#666699',
    '#6666CC',
    '#6666FF',
    '#669966',
    '#669999',
    '#6699CC',
    '#6699FF',
    '#66CC66',
    '#66CC99',
    '#66CCCC',
    '#66CCFF',
    '#66FF66',
    '#66FF99',
    '#66FFCC',
    '#66FFFF',
    '#996666',
    '#996699',
    '#9966CC',
    '#9966FF',
    '#999966',
    '#999999',
    '#9999CC',
    '#9999FF',
    '#99CC66',
    '#99CC99',
    '#99CCCC',
    '#99CCFF',
    '#99FF66',
    '#99FF99',
    '#99FFCC',
    '#99FFFF',
];
exports.docTypeOption = [
    {
        // 110000
        value: '11',
        label: 'JavaScript',
        children: [
            {
                value: '0100',
                label: 'JS 中万物皆对象'
            },
            {
                value: '0200',
                label: '原型与继承'
            },
            {
                value: '0300',
                label: 'proxy代理'
            },
            {
                value: '0400',
                label: '基本引用类型'
            },
            {
                value: '0500',
                label: '基础知识'
            },
            {
                value: '0600',
                label: '迭代器与生成器'
            },
            {
                value: '0700',
                label: 'Promise与async'
            },
            {
                value: '0800',
                label: '模块'
            },
            {
                value: '0900',
                label: 'BOM和DOM傻傻分不清'
            },
            {
                value: '1000',
                label: 'JS里的坑'
            },
            {
                value: '1100',
                label: '手写时间'
            },
            {
                value: '1200',
                label: '网络请求'
            },
            {
                value: '1300',
                label: '事件'
            },
        ]
    },
    {
        // 120000
        value: '12',
        label: '计算机网络',
        icon: 'icon-network',
        children: [
            {
                value: '01',
                label: 'HTTP',
                children: [
                    {
                        value: '01',
                        label: 'http本身'
                    }, {
                        value: '02',
                        label: 'Ajax 解决浏览器缓存问题'
                    }, {
                        value: '03',
                        label: '常见状态码'
                    }, {
                        value: '04',
                        label: 'http方法'
                    }, {
                        value: '05',
                        label: 'GET和POST的区别'
                    }, {
                        value: '06',
                        label: 'Request/response'
                    },
                    {
                        value: '07',
                        label: 'Web缓存'
                    },
                    {
                        value: '08',
                        label: 'HTTP 2.0'
                    },
                    {
                        value: '09',
                        label: 'HTTPS & TLS'
                    },
                ]
            },
            {
                value: '0500',
                label: 'CDN缓存'
            },
            {
                value: '0400',
                label: 'DNS'
            },
            {
                value: '0200',
                label: '基础知识'
            },
            {
                value: '03',
                label: 'TCP',
                children: [
                    {
                        value: '01',
                        label: 'TCP报文结构'
                    }, {
                        value: '02',
                        label: '可靠数据传输原理'
                    }, {
                        value: '03',
                        label: '流量控制'
                    }, {
                        value: '04',
                        label: '拥塞控制'
                    }, {
                        value: '05',
                        label: 'TCP 保证可靠性'
                    }, {
                        value: '06',
                        label: 'TCP 为什么四次挥手'
                    },
                    {
                        value: '07',
                        label: 'TCP 握手为什么 3 次'
                    },
                ]
            },
        ]
    },
    {
        // 130000
        value: '130000',
        label: 'HTML'
    },
    {
        // 140000
        value: '14',
        label: '基础知识',
        children: [{
                value: '0100',
                label: '正则表达式'
            }]
    },
    {
        // 150000
        value: '15',
        label: '浏览器',
        children: [{
                value: '0100',
                label: 'Event loop'
            }, {
                value: '0200',
                label: '原生事件'
            }, {
                value: '0300',
                label: ' Cookie-Session 、Jwt 两种身份认证机制'
            }, {
                value: '0400',
                label: 'Service Worker'
            }, {
                value: '0500',
                label: '渲染机制'
            }, {
                value: '0600',
                label: '跨域'
            }, {
                value: '0700',
                label: '前端路由'
            }, {
                value: '0800',
                label: '几种方式实现存储功能'
            },]
    },
    {
        // 160000
        value: '16',
        label: 'css',
        children: [{
                value: '0100',
                label: '常见问题'
            }, {
                value: '02',
                label: '基础知识',
                children: [
                    {
                        value: '01',
                        label: '定位'
                    }, {
                        value: '02',
                        label: '动画'
                    }, {
                        value: '03',
                        label: '布局'
                    }, {
                        value: '04',
                        label: '盒模型'
                    }
                ]
            }]
    },
    {
        value: '980000',
        label: '算法'
    },
    {
        name: name,
        value: '990000',
        icon: 'icon-lvyou',
        label: '随手记',
        sort: 990000,
        component: './DocList'
    },
];
exports.projectData = [{
        id: "1",
        owner: "韩麾",
        title: "HANHUI BLOG",
        githref: "https://github.com/hanhuikrkr/hanhuiblog",
        cover: "http://hanhuikrkr.com:7112/hanhuiblog84.png",
        subDescription: "采用umi构建的个人的学习博客网站",
        updatedAt: "2021年1月30日",
        href: "/"
    }];
