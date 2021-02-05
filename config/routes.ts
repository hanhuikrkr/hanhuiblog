export default [
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
            component: './User/login',
          },
          {
            name: '注册页',
            path: '/user/userregister',
            component: './User/UserRegister',
          },
        ],
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
                redirect: '/welcome',
              },
              {
                path: '/welcome',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
              },
              {
                path: '/showdoc',
                component: './ShowDoc',
              },
              {
                path: '/alertdoc',
                component: './AlertDocPage',
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
                    authority: ['admin'],
                  },
                  {
                    path: '/admin/uploadDoc',
                    name: '上传文档',
                    component: './UploadDoc/index.tsx',
                    authority: ['admin'],
                  },
                ],
              },

              {
                name: 'JavaScript',
                path: '/javascript',
                component: './DocList',
                routes: [
                  {
                    name: 'JS 中万物皆对象',
                    path: '/javascript/jsobject?sort=110100',
                    component: './DocList',
                  },
                  {
                    name: '原型与继承',
                    path: '/javascript/jsobject?sort=110200',
                    component: './DocList',
                  },
                  {
                    name: 'proxy代理',
                    path: '/javascript/jsobject?sort=110300',
                    component: './DocList',
                  },
                  {
                    name: '基本引用类型',
                    path: '/javascript/jsobject?sort=110400',
                    component: './DocList',
                  },
                  {
                    name: '基础知识',
                    path: '/javascript/jsobject?sort=110500',
                    component: './DocList',
                  },
                  {
                    name: '迭代器与生成器',
                    path: '/javascript/jsobject?sort=110600',
                    component: './DocList',
                  },
                  {
                    name: 'Promise与async',
                    path: '/javascript/jsobject?sort=110700',
                    component: './DocList',
                  },
                  {
                    name: '模块',
                    path: '/javascript/jsobject?sort=110800',
                    component: './DocList',
                  },
                  {
                    name: 'BOM和DOM傻傻分不清',
                    path: '/javascript/jsobject?sort=110900',
                    component: './DocList',
                  },
                  {
                    name: 'JS里的坑',
                    path: '/javascript/jsobject?sort=111000',
                    component: './DocList',
                  },
                  {
                    name: '网络请求',
                    path: '/javascript/jsobject?sort=111200',
                    component: './DocList',
                  },
                  {
                    name: '事件',
                    path: '/javascript/jsobject?sort=111300',
                    component: './DocList',
                  },{
                    name: '手写时间',
                    path: '/javascript/jsobject?sort=111100',
                    component: './DocList',
                  },
                ],
              },
              {
                name: '计算机网络',
                path: '/network',
                component: './DocList',
                routes: [
                  {
                    name: 'TCP',
                    path: '/Network/Tcp?sort=110101',
                    component: './DocList',
                  },
                ],
              },
              {
                name: '个人项目',
                path: '/project',
                component: './ProjectPage',
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
