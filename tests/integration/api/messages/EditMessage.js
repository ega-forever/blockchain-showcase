const expect = require('chai').expect,
  Promise = require('bluebird'),
  request = Promise.promisify(require('request')),
  shared = require('../../shared'),
  _ = require('lodash');


module.exports = ()=> {


  it('editing messages', function (done) {
    this.timeout(15000);
    Promise.all([
      request(shared.actions.buildRequest({
          header: 'testHeader22',
          body: 'testBody22',
          _id: _.get(shared.actions.messages.get(), '[0]._id')
        }, {route: 'messages', type: 'PUT'})),
        request(shared.actions.buildRequest({}, {
          route: `messages/${_.get(shared.actions.messages.get(), '[0]._id')}`,
          type: 'GET'
        }))
    ]).spread((resA, resB)=> {
        expect(JSON.parse(_.head(resA).body).success).to.equal(true);
       expect(JSON.parse(_.head(resB).body).body).to.equal('testBody22');
        done();
      })
      .catch((err) => {
        //log.info('err =', err);
        done(err);
      });
  });

};
