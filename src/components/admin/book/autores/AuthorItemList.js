import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { IconButton } from '@mui/material';
import { FormInputText } from '../../../forms/FormInputText';
import {
  regularExpression,
  errorMessage
} from '../../../../utilities/validators';
import {
  useDeleteAuthorMutation,
  useUpdateAuthorMutation
} from '../../../../services/api/books/authorApi';
import styles from './AuthorItemList.module.css';

export const AuthorItemList = (data) => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState({ field: data.name, err: null });
  const [year, setYear] = useState({
    field: data.bornYear,
    err: null
  });
  const [country, setCountry] = useState({
    field: data.country,
    err: null
  });
  const [deleteAuthor] = useDeleteAuthorMutation();
  const [updateAuthor] = useUpdateAuthorMutation();

  const updateFn = () => {
    updateAuthor({
      id: data.id,
      name: name.field,
      bornYear: year.field,
      country: country.field
    });
    setEdit(false);
  };
  return (
    <tbody>
      <tr key={data.id}>
        <td>
          {edit ? (
            <FormInputText
              id="name"
              state={name}
              setState={setName}
              label="Nombre completo"
              variant="standard"
              size="small"
              txtError={errorMessage.lowercase}
              reg={regularExpression.lowerCase}
              text
              helper="4 Caracteres minimo"
              tam="100%"
              req={true}
            />
          ) : (
            data.name
          )}
        </td>
        <td>
          {edit ? (
            <FormInputText
              id="bornYear"
              state={year}
              setState={setYear}
              label="Año de nacimiento"
              variant="standard"
              size="small"
              txtError={errorMessage.year}
              reg={regularExpression.fourth}
              helper="4 Caracteres minimo"
              tam="100%"
              req={true}
            />
          ) : (
            data.bornYear
          )}
        </td>
        <td>
          {edit ? (
            <FormInputText
              id="country"
              state={country}
              setState={setCountry}
              label="País de origen"
              variant="standard"
              size="small"
              reg={regularExpression.lowerCase}
              txtError={errorMessage.lowercase}
              helper="4 Caracteres minimo"
              tam="100%"
              req={true}
            />
          ) : (
            data.country
          )}
        </td>
        <td>
          {!!edit && (
            <IconButton
              className={styles.saveBtn}
              size="large"
              onClick={() => updateFn()}>
              <SaveIcon fontSize="inherit" />
            </IconButton>
          )}

          <IconButton
            className={styles.editBtn}
            size="large"
            onClick={() => setEdit(!edit)}>
            <EditIcon fontSize="inherit" />
          </IconButton>

          <IconButton
            className={styles.deleteBtn}
            onClick={() => deleteAuthor(data.id)}
            size="large">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </td>
      </tr>
    </tbody>
  );
};
