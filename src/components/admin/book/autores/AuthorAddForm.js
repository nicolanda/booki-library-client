import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import {
  errorMessage,
  regularExpression
} from '../../../../utilities/validators';
import { FormInputText } from '../../../forms/FormInputText';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './AuthorAddForm.module.css';
import { useCreateAuthorMutation } from '../../../../services/api/books/authorApi';

export const AuthorAddForm = () => {
  const req = false;
  const [nameForm, setNameForm] = useState({ field: '', err: null });
  const [yearForm, setYearForm] = useState({ field: '', err: null });
  const [country, setCountry] = useState({ field: '', err: null });
  const [items, setItems] = useState([]);
  const { lowerCase, fourth } = regularExpression;
  const [createAuthor] = useCreateAuthorMutation();
  /*
    !cambiando el nombre de estados verificar si estan pasando al arrelgo completo
  */
  const hanldeSubmitForm = (e) => {
    e.preventDefault();
    if (
      nameForm.err === !1 &&
      yearForm.err === !1 &&
      country.err === !1
    ) {
      setItems((prev) => [
        ...prev,
        {
          name: nameForm.field.trim(),
          bornYear: Number(yearForm.field),
          country: country.field.trim()
        }
      ]);

      setNameForm({ field: '', err: null });
      setYearForm({ field: '', err: null });
      setCountry({ field: '', err: null });
    } else {
      setNameForm({ ...nameForm, err: !0 });
      setYearForm({ ...yearForm, err: !0 });
      setCountry({ ...country, err: !0 });
    }
  };

  const handleDeleteItemTable = (index) => {
    setItems((prev) => prev.filter((item, i) => i !== index));
  };

  const handleCreateAthors = () => {
    console.log(items);
    // createAuthor({ items });
  };
  return (
    <div className={styles.containerForm}>
      <div className={styles.partForm}>
        <h2>Formulario</h2>
        <div className={styles.line}></div>
        <form onSubmit={hanldeSubmitForm}>
          <div className={styles.bodyForm}>
            <FormInputText
              id="name"
              state={nameForm}
              setState={setNameForm}
              label="Nombre completo"
              variant="outlined"
              size="small"
              reg={lowerCase}
              helper="El nombre debe tener al menos 4 caracteres"
              txtError={errorMessage.lowercase}
              tam="100%"
              req={req}
            />
            <FormInputText
              id="year"
              state={yearForm}
              setState={setYearForm}
              label="Año de nacimiento"
              variant="outlined"
              size="small"
              reg={fourth}
              txtError={errorMessage.year}
              helper="El año debe tener al menos 4 caracteres"
              tam="100%"
              req={req}
            />
            <FormInputText
              id="country"
              state={country}
              setState={setCountry}
              label="País de origen"
              variant="outlined"
              size="small"
              reg={lowerCase}
              txtError={errorMessage.lowercase}
              helper="El pais debe tener al menos 4 caracteres"
              tam="100%"
              req={req}
            />
          </div>
          <div className={styles.conBtnForm}>
            <button>
              <p>Agregar</p>
            </button>
          </div>
        </form>
      </div>
      <div className={styles.partTable}>
        <h2>Tabla de autores</h2>
        <div className={styles.line}></div>
        <div className={styles.containerItemTable}>
          {items.map((item, index) => (
            <div className={styles.itemsTable} key={index}>
              <p className={styles.itemName}>
                {item.name}, {item.year}, {item.country}
              </p>
              <IconButton
                onClick={() => handleDeleteItemTable(index)}
                className={styles.deleteButton}
                aria-label="delete"
                size="small">
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </div>
          ))}
        </div>
        <div>
          <button onClick={handleCreateAthors}>
            <p>Guardar</p>
          </button>
        </div>
      </div>
    </div>
  );
};
