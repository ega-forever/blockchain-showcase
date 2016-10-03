/**
 * @config
 */

require('dotenv').config();

module.exports = {
  expressPort: parseInt(process.env.SERVER_API_PORT) || 8080,
  mongoUrl: process.env.SERVER_API_MONGO_URL || 'mongodb://localhost:27017/data',
  domain: process.env.SERVER_API_DOMAIN || 'http://localhost:8080'
};
