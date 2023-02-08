import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../../services/api/books/BookiApi';
import { RegisterButton } from '../../buttons/RegisterButton';
import { FormInputText } from '../../forms/FormInputText';
import styles from './Login.module.css';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';

export const Login = () => {
  const [email, setEmail] = useState({ field: '', err: null });
  const [password, setpassword] = useState({ field: '', err: null });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [
    loginUser,
    { data: logindata, isSuccess: isLoginSucces, isError, error }
  ] = useLoginUserMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({
      email: email.field,
      password: password.field
    });
  };

  useEffect(() => {
    if (isLoginSucces) {
      console.log(logindata);
      Cookies.set('token', logindata.token);
    }
  }, [isLoginSucces]);

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
