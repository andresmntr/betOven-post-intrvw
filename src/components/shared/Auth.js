import React, { useState, useEffect } from 'react';
import { peticionAlServidor } from '../../services/api';

export const AuthContext = React.createContext();
export const API_URL = 'wss://app.betoven.io:8443/';

const Auth = ({ children }) => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [lerror, setlError] = useState();

  const setCurrentUser = newUser => {
    setUser(newUser);

    if (!newUser) {
      sessionStorage.removeItem('token');
    }
  };

  useEffect(() => {
    const authenticate = () => {

      var token = sessionStorage.getItem('token');
      const tokenValido = (respuestaServidor) => {
        if (respuestaServidor.length === 0) {
          window.alert("Imposible comunicarse con el servidor");
          setInitialLoading(false);
        }
        else if (respuestaServidor[0] === "/TokenInvalido/") {
          setCurrentUser(null);
          setInitialLoading(false);
          sessionStorage.setItem('token', null);
        }
        else {
          setCurrentUser(respuestaServidor);
          setInitialLoading(false);
        }
      };
      if (token){
        peticionAlServidor(1, '/CnsPts/' + token + '/', tokenValido);
      }
      else{
        setCurrentUser(null);
        setInitialLoading(false);
      }
    };

    authenticate();
  }, []);

  if (initialLoading) {
    return <h4>Loading...</h4>;
  }

  const context = { user, lerror, setCurrentUser, setInitialLoading, setlError };
  return (
    <AuthContext.Provider value={context}>
      {children(context.user)}
    </AuthContext.Provider>
  )
};

export default Auth;