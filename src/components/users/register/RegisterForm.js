import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { FormInputText } from '../../forms/FormInputText';
import React, { useState } from 'react';
import { FormSelectDocumentType } from '../../forms/FormSelectDocumentType';
import styles from './RegisterForm.module.css';
import {
  errorMessage,
  regularExpression
} from '../../../utilities/validators';
import {
  useCreateUserMutation,
  useGetAllIdentificationsTypesQuery
} from '../../../services/api/books/BookiApi';

export const RegisterForm = () => {
  /* importe de peiticon */
  const [createUser] = useCreateUserMutation();
  /* estados de los campos */
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

  /* verificacion de las contraseñas */
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

  const {
    data: documenType,
    isLoading,
    isUninitialized,
    isError
  } = useGetAllIdentificationsTypesQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      name: name.field,
      password: password.field,
      email: email.field,
      cellphone: cellphone.field,
      // identificationTypeId: documentType,
      identificationNum: numDocument.field
    });

    createUser({
      name: name.field,
      password: password.field,
      email: email.field,
      cellphone: cellphone.field,
      identificationTypeId: documentType,
      identificationNum: numDocument.field
    });
  };

  // console.log(documentType);
  return (
    <div className={styles.containerForm}>
      <div className={styles.titleForm}>
        <h2>Registro</h2>
      </div>
      <div>
        <p>Todos los campos son obligatorios.</p>
      </div>
      <form onSubmit={handleSubmit} className={styles.bodyForm}>
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
          req={!0}
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
          req={!0}
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
          helper="Ejemplo: 3112345678"
          req={!0}
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
          req={!0}
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
          req={!0}
        />

        {isUninitialized || isLoading || isError ? (
          <p>Cargando...</p>
        ) : (
          <FormSelectDocumentType
            state={documentType}
            setState={setDocumentType}
            id="documentType"
            label="Tipo de documento"
            data={documenType}
            req={!0}
          />
        )}

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
          req={!0}
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
