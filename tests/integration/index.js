require('dotenv/config');
const shared = require('./shared'),
  api = require('./api');


process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

describe('tests', ()=> {

  describe('POST api/messages (create message)', api.messages.addMessage);

  describe('GET api/messages (get messages)', api.messages.getMessage);

  describe('PUT api/messages (modify message)', api.messages.editMessage);

  describe('DELETE api/messages (delete message)', api.messages.removeMessage);


});
