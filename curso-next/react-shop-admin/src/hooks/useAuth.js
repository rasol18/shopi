import React, { useState, createContext, useContext } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endPoints from '@services/api/';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  //ingresa los valores de inicio de sesion del usuario en la api//
  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    //renombra a data como accestoken y manda el token de acceso a la api//
    const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);

    //si se recibe un toquen lo logueo lo guarda en las cookies//
    if (access_token) {
      //agrega la informacion a las cookies//
      const token = access_token.access_token;
      //se modifica la cookie poniendole un nombre, luego un value y al final cuanto tiempo va a durar//
      Cookie.set('token', token, { expires: 5 });
      //agrega en el headers de la api la propiedad authorizatin conel token de autenticacion como valor//
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      //le pide a la api el profile del usuario//
      const { data: user } = await axios.get(endPoints.auth.profile);
      setUser(user);
    }
  };
  //cierra la sesion//
  const logOut = () => {
    //remueve las cookies de la sesion//
    Cookie.remove('token');
    setUser(null);
    delete axios.defaults.headers.Authorization;
    //redirije a la pantalla principal//
    window.location.href = '/login';
  };

  return {
    user,
    signIn,
    logOut,
  };
}
