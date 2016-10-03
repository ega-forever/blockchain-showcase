/**
 * @DeleteMessageInterceptor delete message
 * @params in req.body: {_id:message_id}
 */


const messageCtrl = require('../../controllers').messageCtrl,
  messages = require('../../factories').messages;

module.exports = (req, res, next)=> {

  if(!req.body._id){
    return res.send(messages.Generic.fail);
  }


  messageCtrl.mongoose.remove({_id: req.body._id})
    .then(()=>next())
    .catch(()=>res.send(messages.Generic.fail))


};