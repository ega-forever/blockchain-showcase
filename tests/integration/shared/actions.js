const config = require('../../../config'),
  _ = require('lodash');


module.exports = (()=> {

  let messages = [];


  return {
    buildRequest: (params = {}, conf = {})=> {

      return _.merge({
          url: `${config.domain}/api/${conf.route}`,
          method: conf.type,
          headers: [
            {
              name: 'content-type',
              value: 'application/x-www-form-urlencoded'
            }
          ]
        },
        conf.type == "GET" ? {qs: params} :
        {form: params}
      );

    },
    messages: {
      add: m=> messages.push(m),
      remove: m=>_.pull(messages, m),
      get: ()=>_.clone(messages)
    }
  }


}).call();
