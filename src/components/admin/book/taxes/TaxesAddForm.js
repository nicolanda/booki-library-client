import React, { useState } from 'react';
import { useCreateTaxesMutation } from '../../../../services/api/books/BookiApi';
import {
  errorMessage,
  regularExpression
} from '../../../../utilities/validators';
import { FormInputText } from '../../../forms/FormInputText';

export const TaxesAddForm = () => {
  const [createTaxes] = useCreateTaxesMutation();
  const [name, setName] = useState({ field: '', err: null });
  const [value, setValue] = useState({ field: '', err: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    createTaxes({
      name: name.field,
      value: Number(value.field) / 100
    });

    setName({ field: '', err: null });
    setValue({ field: '', err: null });
    console.log('submit');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInputText
        id="name"
        state={name}
        setState={setName}
        variant="standard"
        label="nombre del impuesto"
        txtError={errorMessage.lowercase}
        reg={regularExpression.lowerCase}
        size="small"
        tam="100%"
        req={true}
      />
      <FormInputText
        id="value"
        state={value}
        setState={setValue}
        variant="standard"
        label="valor del impuesto %"
        txtError={errorMessage.onetohoundred}
        reg={regularExpression.onetohoundred}
        size="small"
        tam="100%"
        req={true}
      />
      <button>
        <p>Guardar</p>
      </button>
    </form>
  );
};
