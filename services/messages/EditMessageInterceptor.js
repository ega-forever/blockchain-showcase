/**
 * @EditMessageInterceptor edit message
 * @params in req.body: {header:message_header, body:message_body}
 */


const messageCtrl = require('../../controllers').messageCtrl,
  messages = require('../../factories').messages,
  _ = require('lodash');

module.exports = (req, res, next)=> {

  if (req.body._id == null || req.body.header == null) {
    return res.send(messages.Generic.fail);
  }

  messageCtrl.mongoose.modify({_id: req.body._id}, _.pick(req.body, ['_id', 'header', 'body']))
    .then(()=>next())
    .catch(()=>res.send(messages.Generic.fail))


};