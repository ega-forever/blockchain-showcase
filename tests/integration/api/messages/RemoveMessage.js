/**
 * @AddMessage
 * @unit - remove message from db and validate
 */



const expect = require('chai').expect,
  Promise = require('bluebird'),
  request = Promise.promisify(require('request')),
  shared = require('../../shared'),
  _ = require('lodash');


module.exports = ()=> {


  it('removing messages', function (done) {
    this.timeout(15000);


    Promise.all([
        request(shared.actions.buildRequest({_id: _.get(shared.actions.messages.get(), '[0]._id')}, {
          route: 'messages',
          type: 'DELETE'
        })),
        request(shared.actions.buildRequest({}, {
          route: 'messages',
          type: 'GET'
        }))

      ])
      .spread((resA, resB)=> {
        expect(JSON.parse(_.head(resA).body).success).to.equal(true);
        expect(_.find(_.head(resB.body), {_id:_.get(shared.actions.messages.get(), '[0]._id')})).to.be.undefined;
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

};
