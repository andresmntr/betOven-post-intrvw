//import

const API_URL = 'wss://app.betoven.io:8443/';

export const peticionAlServidor = (numeroRespuestas, mensajeEnviar, funcionCallBack) => {
  var socket = new WebSocket(API_URL);
  var mensajesRespuesta = [];
  try {
    socket.onopen = (event) => {
      socket.send("WSTANDARD");
      socket.send("W" + mensajeEnviar);
      if (numeroRespuestas > 0) { socket.send("R" + numeroRespuestas); }
      else { socket.close(); }
    }
    socket.onmessage = (event) => {
      mensajesRespuesta.push(event.data);
      if (mensajesRespuesta.length === numeroRespuestas) { socket.close(); }
    }
    socket.onclose = (event) => {
      funcionCallBack(mensajesRespuesta);
    }
  } catch (e) {
    return e;
  }
}