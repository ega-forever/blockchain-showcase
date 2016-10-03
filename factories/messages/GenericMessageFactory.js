/**
 * @GenericMessageFactory generic json response for success and fail requests
 */


module.exports = {
  fail: {
    error_code: 100,
    error_message: 'Generic error'
  },
  success: {
    success: true
  }
};
