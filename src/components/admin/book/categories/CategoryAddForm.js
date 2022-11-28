import React, { useState } from 'react';
import { useCreateCategoryMutation } from '../../../../services/api/books/BookiApi';
import {
  errorMessage,
  regularExpression
} from '../../../../utilities/validators';
import { FormInputText } from '../../../forms/FormInputText';

export const CategoryAddForm = () => {
  const [createCategory] = useCreateCategoryMutation();
  const [name, setName] = useState({ field: '', err: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    createCategory({
      name: name.field
    });

    setName({ field: '', err: null });
    console.log('submit');
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormInputText
        id="name"
        state={name}
        setState={setName}
        variant="standard"
        label="Nombre Categoria"
        size="small"
        txtError={errorMessage.lowercase}
        reg={regularExpression.lowerCase}
        tam="100%"
        req={true}
      />
      <button>
        <p>Guardar</p>
      </button>
    </form>
  );
};
