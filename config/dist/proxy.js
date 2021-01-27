"use strict";
exports.__esModule = true;
/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
exports["default"] = {
    dev: {
        '/api/': {
            target: 'http://localhost:8108',
            changeOrigin: true,
            pathRewrite: { '^': '' }
        }
    },
    test: {
        '/api/': {
            target: 'http://localhost:8108',
            changeOrigin: true,
            pathRewrite: { '^': '' }
        }
    },
    pre: {
        '/api/': {
            target: 'http://localhost:8108',
            changeOrigin: true,
            pathRewrite: { '^': '' }
        }
    },
    proxy: {
        '/api': {
            target: 'http://localhost:8108',
            changeOrigin: true,
            pathRewrite: { '^/api': '' }
        }
    }
};
