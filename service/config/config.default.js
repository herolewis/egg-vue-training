/* eslint valid-jsdoc: "off" */

'use strict';

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

    config.sequelize = {
        dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        dialectOptions: {
            charset: 'utf8mb4'
        },
        // database: '',
        // host: '',
        // port: '3306',
        // username: '',
        // password: '',
        // timezone: '+08:00'
    };

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

    //
    // config.mysql = {
    //   // 单数据库信息配置
    //   client: {
    //     // host
    //     host: 'rm-bp1f87x2437q5r89a.mysql.rds.aliyuncs.com',
    //     // 端口号
    //     port: '3306',
    //     // 用户名
    //     user: 'insentek',
    //     // 密码
    //     password: '',
    //     // 数据库名
    //     database: 'insentek_test',
    //   },
    //   // 是否加载到 app 上，默认开启
    //   app: true,
    //   // 是否加载到 agent 上，默认关闭
    //   agent: false,
    // };

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig
    };
};
