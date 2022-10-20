import React, { useState } from 'react';
import { RegisterButton } from '../../buttons/RegisterButton';
import { FormInputText } from '../../forms/FormInputText';
/*
! realizar el manejo de errores
*/
export const Login = () => {
  const [email, setEmail] = useState({ field: '', err: null });
  const [password, setpassword] = useState({ field: '', err: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormInputText
          state={email}
          setState={setEmail}
          id="email"
          label="Correo electrónico"
          variant="outlined"
          size="small"
        />
        <FormInputText
          state={password}
          setState={setpassword}
          id="password"
          label="Contraseña"
          variant="outlined"
          size="small"
        />
        <RegisterButton
          variant="outlined"
          label="Inicar sesión"
          type="submit"
        />
      </form>
      <div>
        <p>¿Has olvidado tu contraseña?</p>
      </div>
    </div>
  );
};
