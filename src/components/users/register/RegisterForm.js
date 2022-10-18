import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { FormInputText } from '../../forms/FormInputText';
import './registerFrom.css';
import { useState } from 'react';

export const RegisterForm = () => {
  const [name, setName] = useState({ field: '', valid: null });
  const [password, setPassword] = useState({
    field: '',
    valid: null
  });
  const [password2, setPassword2] = useState({
    field: '',
    valid: null
  });

  const regularExpression = {
    name: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/ // letter, space and acent
  };

  const errorMessage = {
    name: 'El nombre debe tener entre 4 y 40 letras',
    password:
      'La contraseña deben contener almenos 6 caracteres, una mayúscula y un número',
    password2: 'Las contraseñas no coinciden'
  };

  const confirmPass = () => {
    if (password.field.length > 0) {
      if (password.field !== password2.field) {
        setPassword2((prevState) => {
          return { ...prevState, valid: !0 };
        });
      } else {
        setPassword2((prevState) => {
          return { ...prevState, valid: !1 };
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="form-container">
      <div className="title-form">
        <h2>Registro</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="body-form">
          <FormInputText
            state={name}
            setState={setName}
            id="name"
            label="Nombre completo"
            variant="outlined"
            size="small"
            reg={regularExpression.name}
            txtError={errorMessage.name}
            tam="60%"
          />

          <FormInputText
            state={password}
            setState={setPassword}
            id="password"
            type="password"
            label="Contraseña"
            variant="outlined"
            size="small"
            reg={regularExpression.password}
            txtError={errorMessage.password}
            tam="60%"
          />

          <FormInputText
            state={password2}
            setState={setPassword2}
            id="password2"
            type="password"
            label="Repetir contraseña"
            variant="outlined"
            size="small"
            txtError={errorMessage.password2}
            confirmPass={confirmPass}
            tam="60%"
          />

          <div className="button-form">
            <Button
              aria-label="send"
              variant="contained"
              type="submit"
              endIcon={<SendIcon />}>
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
