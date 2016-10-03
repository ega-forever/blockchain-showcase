const CreateMessagesInterceptor = require('./messages/CreateMessageInterceptor'),
  GetMessageInterceptor = require('./messages/GetMessagesInterceptor'),
  GetMessageBodyInterceptor = require('./messages/GetMessageBodyInterceptor'),
  DeleteMessagesInterceptor = require('./messages/DeleteMessagesInterceptor'),
  EditMessagesInterceptor = require('./messages/EditMessageInterceptor');


module.exports = {
  CreateMessagesInterceptor,
  GetMessageInterceptor,
  GetMessageBodyInterceptor,
  DeleteMessagesInterceptor,
  EditMessagesInterceptor
};
