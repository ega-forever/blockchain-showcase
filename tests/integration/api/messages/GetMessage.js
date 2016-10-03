const expect = require('chai').expect,
  Promise = require('bluebird'),
  request = Promise.promisify(require('request')),
  shared = require('../../shared'),
  _ = require('lodash');


module.exports = ()=> {


  it('getting messages', function (done) {
    this.timeout(15000);
    request(shared.actions.buildRequest({},
      {route: 'messages', type: 'GET'}
    )).spread((response, body)=> {
        body = JSON.parse(body);
        expect(body).to.be.instanceof(Array);
        expect(body).to.have.length.above(0);
        expect(body).to.have.deep.property('[0]._id');
        shared.actions.messages.add(_.head(body));
        done();
      })
      .catch((err) => {
        //log.info('err =', err);
        done(err);
      });
  });


  it('getting message\'s body', function (done) {
    this.timeout(15000);
    request(shared.actions.buildRequest({},
      {route: `messages/${_.get(shared.actions.messages.get(), '[0]._id')}`, type: 'GET'}
    )).spread((response, body)=> {
        body = JSON.parse(body);

      console.log(body);
      expect(body.body).to.be.a('string');
        done();
      })
      .catch((err) => {
        //log.info('err =', err);
        done(err);
      });
  });


};
