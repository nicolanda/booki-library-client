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

  const regularExpression = {
    name: /^[a-zA-ZÀ-ÿ\s]{4,40}$/ // letter, space and acent
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
            tam="60%"
          />

          {/* <FormInputText
            id="password"
            type="password"
            label="password"
            variant="outlined"
            size="small"
            tam="60%"
          /> */}

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
