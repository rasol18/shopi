import { useState } from 'react';

const useAlert = (options) => {
  const defaultOptions = {
    active: false,
    message: '',
    type: '',
    autoClose: true,
  };
  //recibe la informacion desestructurada//
  const [alert, setAlert] = useState({
    ...defaultOptions,
    ...options,
  });

  //si alert no esta activo mostrara lo siguiente//
  const toogleAlert = () => {
    setAlert(!alert.active);
  };
  return {
    alert,
    setAlert,
    toogleAlert,
  };
};

export default useAlert;
