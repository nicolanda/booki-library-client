import { style } from '@mui/system';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RegisterButton } from '../../buttons/RegisterButton';
import { FormInputText } from '../../forms/FormInputText';
import styles from './Login.module.css';
/*
! realizar el manejo de errores
! realizar peticiones a la api
*/
export const Login = () => {
  const [email, setEmail] = useState({ field: '', err: null });
  const [password, setpassword] = useState({ field: '', err: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>
          <h1>Iniciar sersión en la librería Booki</h1>
        </div>
        <div className={styles.auxTitle}>
          <p>Ingresa los tus datos en el siguiente formulario</p>
        </div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <FormInputText
          state={email}
          setState={setEmail}
          id="email"
          label="Correo electrónico"
          variant="outlined"
          size="medium"
          tam="90%"
        />
        <FormInputText
          state={password}
          setState={setpassword}
          id="password"
          label="Contraseña"
          variant="outlined"
          size="medium"
          tam="90%"
        />
        <RegisterButton
          variant="outlined"
          label="Inicar sesión"
          type="submit"
          nameClass="regButton"
        />
      </form>
      <div>
        <NavLink to="/user/forgot-password" className={styles.link}>
          ¿Olvidaste tu contraseña?
        </NavLink>
      </div>
    </div>
  );
};
