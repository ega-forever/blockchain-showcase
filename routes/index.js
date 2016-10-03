var services = require('../services'),
  messages = require('../factories').messages,
  config = require('../config'),
  _ = require('lodash');

module.exports = app=> {

  app.all('*', (req, res, next)=> {

    let responseSettings = {
      "AccessControlAllowOrigin": req.headers.origin,
      "AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
      "AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
      "AccessControlAllowCredentials": true
    };

    res.header("Access-Control-Allow-Credentials", responseSettings.AccessControlAllowCredentials);
    res.header("Access-Control-Allow-Origin", responseSettings.AccessControlAllowOrigin);
    res.header("Access-Control-Allow-Headers", (req.headers['access-control-request-headers']) ? req.headers['access-control-request-headers'] : "x-requested-with");
    res.header("Access-Control-Allow-Methods", (req.headers['access-control-request-method']) ? req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods);

    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
  });


  app.get('/', (req, res)=> {
    res.send(messages.Generic.success);
  });


//** messages **//


  app.post('/api/messages',
    services.CreateMessagesInterceptor,
    (req, res)=> {
      res.json(messages.Generic.success);
    });

  app.get('/api/messages',
    services.GetMessageInterceptor,
    (req, res)=> {
      res.json(messages.Generic.success);
    });

  app.get('/api/messages/:id',
    services.GetMessageBodyInterceptor,
    (req, res)=> {
      res.json(messages.Generic.success);
    });


  app.delete('/api/messages',
    services.DeleteMessagesInterceptor,
    (req, res)=> {
      res.json(messages.Generic.success);
    });

  app.put('/api/messages',
    services.EditMessagesInterceptor,
    (req, res)=> {
      res.json(messages.Generic.success);
    });



};
