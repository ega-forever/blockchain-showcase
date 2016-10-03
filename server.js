const express = require('express'),
  mongoose = require('mongoose'),
  config = require('./config'),
  routes = require('./routes'),
  cluster = require('cluster'),
  numCPUs = require('os').cpus().length,
  _ = require('lodash'),
  bodyParser = require('body-parser'),
  session = require('express-session');


if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

} else {

  let app = express();
  let server = require('http').Server(app);


  app.enable('trust proxy');
  app.use(bodyParser());
  app.use(require('morgan')('combined'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  mongoose.connect(config.mongoUrl);
  routes(app);


  server.listen(config.expressPort, function () {
    console.log('NO SSL app started at port: ' + config.expressPort);
  });

}