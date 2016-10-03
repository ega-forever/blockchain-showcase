/**
 * @EditMessageInterceptor edit message
 * @params in req.body: {header:message_header, body:message_body}
 */


const messageCtrl = require('../../controllers').messageCtrl,
  MessageModel = require('../../models').MessageSchema,
  messages = require('../../factories').messages;

module.exports = (req, res, next)=> {


  let messageModel = new MessageModel(req.body);

  if (messageModel.validateSync() != null || req.body._id == null) {
   return res.send(messages.Generic.fail);
  }

  messageCtrl.mongoose.modify({_id: messageModel._id}, messageModel)
    .then(()=>next())
    .catch(()=>res.send(messages.Generic.fail))


};