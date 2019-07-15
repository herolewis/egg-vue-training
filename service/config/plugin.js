'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
// had enabled by egg
// static: {
//   enable: true,
// }
//   enable: true,
//   package: 'egg-view-nunjucks',
// };
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

exports.mysql = {
  enable: true, // 开启
  package: 'egg-mysql', // 对应哪个包
};

exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.sequelize = {
    enable: true,
    package: 'egg-sequelize',
};
exports.cors = {
    enable: true,
    package: 'egg-cors',
};
