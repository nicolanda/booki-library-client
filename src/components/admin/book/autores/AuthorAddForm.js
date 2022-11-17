import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import {
  errorMessage,
  regularExpression
} from '../../../../utilities/validators';
import { FormInputText } from '../../../forms/FormInputText';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './AuthorAddForm.module.css';

export const AuthorAddForm = () => {
  const req = false;
  const [name, setName] = useState({ field: '', err: null });
  const [year, setYear] = useState({ field: '', err: null });
  const [country, setCountry] = useState({ field: '', err: null });
  const [items, setItems] = useState([]);
  const { lowerCase, fourth } = regularExpression;

  const hanldeSubmitForm = (e) => {
    e.preventDefault();
    if (name.err === !1 && year.err === !1 && country.err === !1) {
      setItems((prev) => [
        ...prev,
        { name: name.field, year: year.field, country: country.field }
      ]);

      setName({ field: '', err: null });
      setYear({ field: '', err: null });
      setCountry({ field: '', err: null });
    } else {
      setName({ ...name, err: !0 });
      setYear({ ...year, err: !0 });
      setCountry({ ...country, err: !0 });
    }
  };

  const handleDeleteItemTable = (index) => {
    setItems((prev) => prev.filter((item, i) => i !== index));
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
              state={name}
              setState={setName}
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
              state={year}
              setState={setYear}
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
          <button>
            <p>save</p>
          </button>
        </div>
      </div>
    </div>
  );
};
