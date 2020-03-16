import { useContext } from 'react';
import { AuthContext } from "../components/shared/Auth";
import { peticionAlServidor } from './api';

export function useAuth() {
  const { setCurrentUser, setInitialLoading, setlError } = useContext(AuthContext);

  const signIn = (username, password) => {
    //sign in with the server
    const mensajeEnviar = "/LogInn/" + username + "/" + password + "/";
    
    const finDelLogin = (respuestaServidor) => {
      if (respuestaServidor.length === 0) {
        window.alert("Imposible comunicarse con el servidor");
      }
      else if (respuestaServidor[0] === "/CredIncorrect/") {
        setlError('error de autenticación');
        setCurrentUser(null);
        setInitialLoading(false);
      }
      else if (respuestaServidor[0].substring(0, 15) === "/LogInCorrecto/") {
        sessionStorage.setItem('token', respuestaServidor[0].substring(15, 55));
        setCurrentUser(respuestaServidor);
        setInitialLoading(false);
      }
    }

    setInitialLoading(true);
    peticionAlServidor(1, mensajeEnviar, finDelLogin);

  };

  const signOut = () => {
    // signOut from the server
    const token = sessionStorage.getItem('token');

    const refresh = () => {
      sessionStorage.removeItem('token');
    }
    if (token != null) {
      console.log('el token es distinto de null');
      peticionAlServidor(0, '/LogOut/' + token + '/', refresh);
      setCurrentUser(null);
    }
    else {
      console.log('el token es null');
      refresh();
    }
  };
  return { signIn, signOut }
}