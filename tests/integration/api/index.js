const getMessage = require('./messages/GetMessage'),
  addMessage = require('./messages/AddMessage'),
  editMessage = require('./messages/EditMessage'),
  removeMessage = require('./messages/RemoveMessage');

module.exports = {
  messages: {
    getMessage,
    addMessage,
    editMessage,
    removeMessage
  }
};