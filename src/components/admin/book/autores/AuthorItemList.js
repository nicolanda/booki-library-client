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
import { useDispatch } from 'react-redux';
import {
  deleteAuthor,
  updateAuthor
} from '../../../../features/author/authorSlice';
import { Link, useParams } from 'react-router-dom';

export const AuthorItemList = ({ id, name, bornYear, country }) => {
  const { idAuthor } = useParams();
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [edit, setEdit] = useState(false);
  const [name1, setName1] = useState({ field: name, err: null });
  const [year, setYear] = useState({ field: bornYear, err: null });
  const [country1, setCountry1] = useState({
    field: country,
    err: null
  });

  const handleUpdate = (id) => {
    console.log('actualizar');
    setItems(() => [
      {
        name: name1.field,
        bornYear: year.field,
        country: country1.field
      }
    ]);
    dispatch(updateAuthor(id, items));
  };

  const handleDelete = async (id) => {
    console.log('eliminar');
    dispatch(deleteAuthor(id));
  };
  // const handleEdit = () => {
  //   setEdit(!edit);
  // };

  return (
    <tbody>
      <tr key={id}>
        <td>
          {edit ? (
            <FormInputText
              id="name"
              state={name1}
              setState={setName1}
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
            name
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
            bornYear
          )}
        </td>
        <td>
          {edit ? (
            <FormInputText
              id="country"
              state={country1}
              setState={setCountry1}
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
            country
          )}
        </td>
        <td>
          {edit ? (
            <IconButton size="large" onClick={handleUpdate}>
              <SaveIcon fontSize="inherit" />
            </IconButton>
          ) : (
            <IconButton size="large" onClick={() => setEdit(!edit)}>
              <EditIcon fontSize="inherit" />
            </IconButton>
            // <Link to={`${id}`}>

            // </Link>
          )}
          <IconButton onClick={() => handleDelete(id)} size="large">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </td>
      </tr>
    </tbody>
  );
};
