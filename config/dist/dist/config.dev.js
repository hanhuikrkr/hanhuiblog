"use strict";

exports.__esModule = true; // https://umijs.org/config/

var umi_1 = require("umi");

var defaultSettings_1 = require("./defaultSettings");

var routes_1 = require("./routes");

var REACT_APP_ENV = process.env.REACT_APP_ENV;
exports["default"] = umi_1.defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true
  },
  history: {
    type: 'browser'
  },
  locale: {
    // default zh-CN
    "default": ' zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index'
  },
  targets: {
    ie: 11
  },
  // umi routes: https://umijs.org/docs/routing
  routes: routes_1["default"],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings_1["default"].primaryColor
  },
  title: false,
  ignoreMomentLocale: true,
  // proxy: proxy[REACT_APP_ENV || 'dev'],
  proxy: {
    '/api': {
      'target': 'http://localhost:8108/',
      'changeOrigin': true,
      'pathRewrite': {
        '^': ''
      }
    }
  },
  manifest: {
    basePath: '/'
  },
  esbuild: {}
});