import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { FormInputText } from '../../forms/FormInputText';
import './registerFrom.css';
import React, { useState } from 'react';
import { FormSelectDocumentType } from '../../forms/FormSelectDocumentType';

export const RegisterForm = () => {
  const [name, setName] = useState({ field: '', err: null });
  const [email, setEmail] = useState({ field: '', err: null });
  const [password, setPassword] = useState({
    field: '',
    err: null
  });
  const [password2, setPassword2] = useState({
    field: '',
    err: null
  });
  const [cellphone, setCellphone] = useState({
    field: '',
    err: null
  });

  const [documentType, setDocumentType] = useState('');

  const [numDocument, setNumDocument] = useState({
    field: '',
    err: null
  });

  const regularExpression = {
    name: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,15}$/,
    email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    cellphone: /^\d{9,10}$/,
    numDocument: /^\d{6,10}$/
  };

  const errorMessage = {
    name: 'El nombre debe tener entre 4 y 40 letras',
    email: 'El email no es válido',
    password:
      'La contraseña deben contener entre 6 15 caracteres, una mayúscula y un número',
    password2: 'Las contraseñas no coinciden',
    cellphone: 'El número de celular no es válido',
    numDocument: 'El número de documento no es válido'
  };

  const confirmPass = () => {
    if (password.field.length > 0) {
      if (password.field !== password2.field) {
        setPassword2((prevState) => {
          return { ...prevState, err: !0 };
        });
      } else {
        setPassword2((prevState) => {
          return { ...prevState, err: !1 };
        });
      }
    }
  };

  const example = [
    {
      id: 1,
      name: 'Juan'
    },
    {
      id: 2,
      name: 'Pedro'
    },
    {
      id: 3,
      name: 'Maria'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      name: name.field,
      password: password.field,
      email: email.field,
      cellphone: cellphone.field,
      documentType: documentType,
      numDocument: numDocument.field
    });
  };

  return (
    <div className="form-container">
      <div className="title-form">
        <h2>Registro</h2>
      </div>
      <div>
        <p>Todos los campos son obligatorios.</p>
      </div>
      <form onSubmit={handleSubmit} className="bodyForm">
        <FormInputText
          state={name}
          setState={setName}
          id="name"
          label="Nombre completo"
          variant="outlined"
          size="small"
          reg={regularExpression.name}
          txtError={errorMessage.name}
          tam="90%"
        />

        <FormInputText
          state={email}
          setState={setEmail}
          id="email"
          label="Correo electrónico"
          variant="outlined"
          size="small"
          reg={regularExpression.email}
          txtError={errorMessage.email}
          tam="90%"
        />

        <FormInputText
          state={cellphone}
          setState={setCellphone}
          id="cellphone"
          label="Teléfono celular"
          variant="outlined"
          size="small"
          reg={regularExpression.cellphone}
          txtError={errorMessage.cellphone}
          tam="90%"
          helperText="Ejemplo: 3112345678"
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
          tam="90%"
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
          tam="90%"
        />

        <FormSelectDocumentType
          state={documentType}
          setState={setDocumentType}
          id="documentType"
          label="Tipo de documento"
          data={example}
        />

        <FormInputText
          state={numDocument}
          setState={setNumDocument}
          id="numDocument"
          label="Numero de documento"
          variant="outlined"
          size="small"
          reg={regularExpression.numDocument}
          txtError={errorMessage.numDocument}
          tam="90%"
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
  );
};
