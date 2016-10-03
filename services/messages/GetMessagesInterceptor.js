const messageCtrl = require('../../controllers').messageCtrl,
  messages = require('../../factories').messages;

module.exports = (req, res, next)=> {


  messageCtrl.mongoose.getCollection({}, '_id header')
    .then(docs=>res.send(docs))
    .catch(()=>res.send(messages.Generic.fail))


};