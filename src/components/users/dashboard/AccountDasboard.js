import { useState } from 'react';
import { FormInputText } from '../../forms/FormInputText';
import {
  regularExpression,
  errorMessage
} from '../../../utilities/validators';
import { FormSelectDocumentType } from '../../forms/FormSelectDocumentType';
import styles from './AccountDashboard.module.css';

export const AccountDashboard = () => {
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

  const regExp = regularExpression;
  const errMes = errorMessage;

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

  return (
    <div className={styles.container}>
      <h1 className={styles.titles}>Tu cuenta</h1>
      <div className={styles.infoForm}>
        <div>
          <p className={styles.infoText}>Información personal</p>
        </div>
        <div>
          <p> button edicion</p>
        </div>
      </div>
      <div className={styles.line}></div>
      <form className={styles.formUser}>
        <FormInputText
          className={styles.input}
          state={name}
          setState={setName}
          id="name"
          label="Nombre completo"
          variant="outlined"
          size="small"
          reg={regExp.name}
          txtError={errMes.name}
          tam="90%"
        />

        <FormInputText
          state={email}
          setState={setEmail}
          id="email"
          label="Correo electrónico"
          variant="outlined"
          size="small"
          reg={regExp.email}
          txtError={errMes.email}
          tam="90%"
        />

        <FormInputText
          state={cellphone}
          setState={setCellphone}
          id="cellphone"
          label="Teléfono celular"
          variant="outlined"
          size="small"
          reg={regExp.cellphone}
          txtError={errMes.cellphone}
          tam="90%"
          helperText="Ejemplo: 3112345678"
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
          reg={regExp.numDocument}
          txtError={errMes.numDocument}
          tam="90%"
        />
        <button type="submit">Guardar cambios</button>
      </form>
      <div>
        <div>
          <h1 className={styles.titles}>Contraseña</h1>
        </div>
        <div className={styles.infoForm}>
          <div>
            <p className={styles.infoText}>Cambiar contraseña</p>
          </div>
          <div>
            <p> button edicion</p>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <form className={styles.passForm}>
        <div className={styles.contentPassForm}>
          <FormInputText
            state={password}
            setState={setPassword}
            id="password"
            type="password"
            label="Contraseña"
            variant="outlined"
            size="small"
            reg={regExp.password}
            txtError={errMes.password}
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
            txtError={regExp.password2}
            confirmPass={confirmPass}
            tam="90%"
          />
        </div>
        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
};
