import { useState } from 'react';
import { FormInputText } from '../../forms/FormInputText';
import {
  regularExpression,
  errorMessage
} from '../../../utilities/validators';

export const AccountDashboard = () => {
  const [name, setName] = useState({ field: '', err: null });

  const regExp = regularExpression;
  const errMes = errorMessage;

  return (
    <div>
      <h1>Tu cuenta</h1>
      <div>
        <div>
          <h2>Informacion personal</h2>
        </div>
        <div>
          <p> button edicion</p>
        </div>
      </div>
      <div>
        <form>
          <FormInputText
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
        </form>
      </div>
    </div>
  );
};
