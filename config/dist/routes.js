"use strict";
exports.__esModule = true;
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
                        icon: 'smile',
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
                                icon: 'smile',
                                component: './Welcome'
                            },
                            {
                                path: '/showdoc',
                                component: './ShowDoc'
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
                                        icon: 'smile',
                                        component: './ShowDoc',
                                        authority: ['admin']
                                    },
                                    {
                                        path: '/admin/uploadDoc',
                                        name: '上传文档',
                                        icon: 'smile',
                                        component: './UploadDoc/index.tsx',
                                        authority: ['admin']
                                    },
                                ]
                            },
                            {
                                name: 'list.table-list',
                                icon: 'table',
                                path: '/list',
                                component: './DocList'
                            },
                            {
                                name: 'JavaScript',
                                icon: 'smile',
                                path: '/javascript',
                                component: './DocList'
                            },
                            {
                                name: '计算机网络',
                                icon: 'smile',
                                path: '/network',
                                component: './DocList',
                                routes: [
                                    {
                                        name: 'TCP',
                                        icon: 'smile',
                                        path: '/Network/Tcp?sort=110101',
                                        component: './DocList'
                                    },
                                ]
                            },
                            {
                                name: '个人项目',
                                icon: 'smile',
                                path: '/project',
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
