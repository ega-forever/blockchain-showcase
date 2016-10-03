/**
 * @factories root point
 */


const GenericMessageFactory = require('./messages/GenericMessageFactory');

module.exports = {
  messages: {
    Generic: GenericMessageFactory
  }
};
