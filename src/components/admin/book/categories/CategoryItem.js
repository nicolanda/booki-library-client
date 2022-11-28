import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { IconButton } from '@mui/material';
import {
  errorMessage,
  regularExpression
} from '../../../../utilities/validators';
import { FormInputText } from '../../../forms/FormInputText';
import styles from './CategoryItem.module.css';
import {
  useDeleteCategoryMutation,
  useUpdateCategoryMutation
} from '../../../../services/api/books/BookiApi';

export const CategoryItem = (data) => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState({ field: data.name, err: null });

  const [updateCategory] = useUpdateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  const updateFnCategory = () => {
    updateCategory({ ...data, name: name.field });
    setEdit(false);
  };
  return (
    <tbody>
      <tr key={data.id}>
        <td>{data.id}</td>
        <td>
          {edit ? (
            <FormInputText
              id={data.id}
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
          ) : (
            data.name
          )}
        </td>
        <td>
          {!!edit && (
            <IconButton
              className={styles.saveBtn}
              size="large"
              onClick={updateFnCategory}>
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
            onClick={() => deleteCategory(data.id)}>
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </td>
      </tr>
    </tbody>
  );
};
