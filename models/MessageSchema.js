const mongoose = require('mongoose');

let Message = new mongoose.Schema({
  header: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

Message.index({ header: "text" });


module.exports = mongoose.model('Message', Message);
