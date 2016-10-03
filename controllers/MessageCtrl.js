/**
 * @MessageCtrl handle operations under MessageSchema
 */

const messageSchema = require('../models').MessageSchema,
  messages = require('../factories').messages,
  config = require('../config'),
  Promise = require('bluebird');

Promise.promisifyAll(require("mongoose"));


module.exports = {

  mongoose: {
    get: (criteria, select = {})=>
      messageSchema.findOne(criteria)
        .select(select)
        .then((doc)=> Promise.resolve(doc)),

    add: (messageModel)=>
      messageModel.save(),

    modify: (id, obj)=>
      messageSchema.update({_id: id}, obj)
        .then((doc)=> Promise.resolve(doc)),

    remove: (criteria)=>
      messageSchema.remove(criteria)
        .exec(err => {
          if (err) {
            Promise.reject(messages.Generic.fail);
          }

          Promise.resolve();
        }),

    getCollection: (criteria, select = {})=>
      messageSchema.find(criteria)
        .select(select)
        .exec()
        .then((doc)=>Promise.resolve(doc))
  }
};
