var AWS = require('aws-sdk');
'use strict';

module.exports.enviarMensaje = async (event) => {
  console.log(JSON.stringify(event));
  const respuesta = sendEventBridge(event);
  return respuesta;
};

try {
  
  function sendEventBridge(event) {
    const eventBridge = new AWS.EventBridge({ region: 'us-east-1' }); 

    function filtro(personas) {
      return personas.edad >= 20;
    }
    const res = event.personas.filter(filtro);
    console.log(res);
    return eventBridge.putEvents({
      
      Entries: [
        {
          EventBusName: 'test',
          Source: 'mensajeTest',
          DetailType: 'UserSignUp',
          Detail: JSON.stringify({"personas": res})
      },
      ]
    }).promise()
   }
  
} catch (error) {
  console.log(error.message)
}