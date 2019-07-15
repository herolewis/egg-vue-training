'use strict';
const { app, assert } = require('egg-mock/bootstrap');
const staff_result = {
  code: 0,
  message: 'success',
  status: 200,
  total: 1,
  list: [
    {
      id: 1,
      name: '黎叔',
      email: 'xin.li@insentek.com',
      active: 1,
      last_login_time: '2019-02-19T06:28:33.000Z',
      create_time: '2014-05-12T02:44:39.000Z',
      mobile: '18610298409',
      department: null,
      position: null,
    },
  ],
};

describe('test/app/controller/staff.test.js', () => {
  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should GET /', () => {
    return app.httpRequest()
      .get('/node/api/sys/users?page=1&limit=1')
      .expect(staff_result)
      .expect(200);
  });
});
