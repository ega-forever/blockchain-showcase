const messageCtrl = require('../../controllers').messageCtrl,
  MessageModel = require('../../models').MessageSchema,
  messages = require('../../factories').messages;

module.exports = (req, res, next)=> {


  let messageModel = new MessageModel(req.body);

  if (messageModel.validateSync() != null) {
   return res.send(messages.Generic.fail);
  }

  messageCtrl.mongoose.add(messageModel)
    .then(()=>next())
    .catch(()=>res.send(messages.Generic.fail))


};