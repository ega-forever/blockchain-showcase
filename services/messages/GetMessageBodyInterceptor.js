const messageCtrl = require('../../controllers').messageCtrl,
  messages = require('../../factories').messages;

module.exports = (req, res, next)=> {

  if(!req.params.id){
    return res.send(messages.Generic.fail);
  }


  messageCtrl.mongoose.get({_id: req.params.id}, '_id body')
    .then(doc=>res.send(doc || {}))
    .catch(()=>res.send(messages.Generic.fail))


};