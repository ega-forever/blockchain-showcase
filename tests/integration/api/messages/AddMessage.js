const expect = require('chai').expect,
  Promise = require('bluebird'),
  request = Promise.promisify(require('request')),
  shared = require('../../shared'),
  _ = require('lodash');


module.exports = ()=> {


  it('adding messages', function (done) {
    this.timeout(15000);
    request(shared.actions.buildRequest({header: 'testHeader', body: 'testBody'},
      {route: 'messages', type: 'POST'}
    )).spread((response, body)=> {
        body = JSON.parse(body);
        expect(body.success).to.equal(true);
        done();
      })
      .catch((err) => {
        //log.info('err =', err);
        done(err);
      });
  });

};
