import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { IconButton } from '@mui/material';
import {
  errorMessage,
  regularExpression
} from '../../../../utilities/validators';
import styles from './TaxesItem.module.css';
import {
  useDeleteTaxesMutation,
  useUpdateTaxesMutation
} from '../../../../services/api/books/BookiApi';
import { FormInputText } from '../../../forms/FormInputText';

export const TaxesItem = (data) => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState({ field: data.name, err: null });
  const [value, setValue] = useState({
    field: data.value,
    err: null
  });

  const [updateTaxes] = useUpdateTaxesMutation();
  const [deleteTaxes] = useDeleteTaxesMutation();

  const updateFnTaxes = () => {
    updateTaxes({
      ...data,
      name: name.field,
      value: Number(value.field) / 100
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
              variant="standard"
              label="nombre del impuesto"
              txtError={errorMessage.lowercase}
              reg={regularExpression.lowerCase}
              size="small"
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
          ) : (
            data.value * 100
          )}
        </td>
        <td>
          {!!edit && (
            <IconButton
              className={styles.saveBtn}
              size="large"
              onClick={() => updateFnTaxes()}>
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
            size="large"
            onClick={() => deleteTaxes(data.id)}>
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </td>
      </tr>
    </tbody>
  );
};
