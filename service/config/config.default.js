/* eslint valid-jsdoc: "off" */

'use strict';
const sequelize = require('./sequelize.js');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1562658818184_7974';

    // add your middleware config here
    config.middleware = [];
    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks'
        }
    };
    config.news = {
        pageSize: 5,
        serverUrl: 'https://hacker-news.firebaseio.com/v0'
    };

    config.sequelize = sequelize;

    config.security = {
        csrf: {
            enable: false
        },
        domainWhiteList: ['*']
    };
    config.cors = {
        // credentials: true,
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
    };
    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig
    };
};
