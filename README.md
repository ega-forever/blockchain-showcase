# blockchain-showcase

## to run backend:

1) get repo

2) under source dir run 'npm install'

3) create .env file in source dir. There, you can specify your mongo url (SERVER_API_MONGO_URL),

domain (SERVER_API_DOMAIN) and express port (SERVER_API_PORT). Default values are:

SERVER_API_PORT=8080

SERVER_API_MONGO_URL=mongodb://localhost:27017/data

SERVER_API_DOMAIN=http://localhost:8080

4)then run app with 'node server.js'

## endpoints

Every endpoint returns JSON object.

|#  |Type     |Route             |Response                                     |Params                                                       |Aim                |
|---|:--------|:-----------------|:--------------------------------------------|:------------------------------------------------------------|------------------:|
|1  |GET      |/                 |{"success": true}                            |                                                             |root route         |
|2  |POST     |/api/messages     |{"success": true}                            |header: message_header, body: message_body                   |create message     |
|3  |PUT      |/api/messages     |{"success": true}                            |header: message_header, body: message_body,_id:message_id    |edit message       |
|4  |DELETE   |/api/messages     |{"success": true}                            |_id:message_id                                               |remove message     |
|5  |GET      |/api/messages     |[{_id: message_id, header: message_header}]  |                                                             |get messages       |
|6  |GET      |/api/messages/:id |{_id: message_id, body: message_body}        |_id:message_id                                               |get message's body |


#Tests

to run tests just type in source folder: 'npm run integration'


