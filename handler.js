var AWS = require('aws-sdk');
'use strict';

module.exports.enviarMensaje = async (event) => {
  console.log(JSON.stringify(event));
  const respuesta = sendEventBridge(event);
  return respuesta;
};

function sendEventBridge(event) {
  const eventBridge = new AWS.EventBridge({ region: 'us-east-1' }); 
  return eventBridge.putEvents({
    Entries: [
      {
        EventBusName: 'test',
        Source: 'mensajeTest',
        DetailType: 'UserSignUp',
        Detail: JSON.stringify(event)
    },
    ]
  }).promise()
 }
