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
        value: '11',
        label: 'JavaScript',
        children: [
            {
                value: '01',
                label: 'js-1',
                children: [
                    {
                        value: '01',
                        label: 'js-1-1'
                    },
                ]
            },
            {
                value: '02',
                label: 'js-2',
                children: [
                    {
                        value: '01',
                        label: 'js-2-1'
                    },
                ]
            },
        ]
    },
    {
        value: '12',
        label: '计算机网络',
        children: [
            {
                value: '01',
                label: 'jw-1',
                children: [
                    {
                        value: '01',
                        label: 'jw-1-1'
                    },
                ]
            },
        ]
    },
];
exports.projectData = [{
        id: "1",
        owner: "韩麾",
        title: "HANHUI BLOG",
        cover: "http://hanhuikrkr.com:7112/hanhuiblog84.png",
        subDescription: "采用umi构建的个人的学习博客网站",
        updatedAt: "2021年1月30日",
        href: "/"
    }];
