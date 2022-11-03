import { TextField } from '@mui/material';
import { useState } from 'react';
import { FormInputText } from '../FormInputText';
import { AddressSelect } from './AddressSelect';
import { regularExpression } from '../../../utilities/validators';
import styles from './AddressForm.module.css';

export const AddressForm = () => {
  const [nameA, setNameA] = useState('');
  const [addressee, setAddressee] = useState('');
  const [postalcode, setPostalcode] = useState({
    field: '',
    err: null
  });
  const [house, setHouse] = useState('');
  const [department, setDeparment] = useState('');
  const [city, setCity] = useState('');

  const casitas = [
    { id: 1, name: 'casita1' },
    { id: 2, name: 'casita2' },
    { id: 3, name: 'casita3' }
  ];
  const data1 = [
    { id: 1, name: 'Cundinamarca' },
    { id: 2, name: 'Antioquia' },
    { id: 3, name: 'aaaaaaaaaaaaaaaaaaaaaaa' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameA);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <TextField
        state={nameA}
        onChange={(e) => setNameA(e.target.value)}
        id="name"
        label="Nombre de la dirección"
        size="small"
        helperText="Casa, oficina, ..."
        required
      />
      <div className={styles.section}>
        <TextField
          className={styles.name}
          state={addressee}
          onChange={(e) => setAddressee(e.target.value)}
          id="addressee"
          label="Nombre"
          size="small"
          helperText="nombre de la persona que recibe"
          required
        />
        <div className={styles.hSelect}>
          <AddressSelect
            state={house}
            setState={setHouse}
            label="Tipo de vivienda"
            txt="Tipo de vivienda"
            id="department"
            tam="100%"
            data={casitas}
          />
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.code}>
          <FormInputText
            state={postalcode}
            setState={setPostalcode}
            id="code"
            label="Codigo"
            variant="outlined"
            size="small"
            reg={regularExpression.numWhite}
            helper="Codigo postal"
            tam="100%"
            req={!1}
          />
        </div>
        <TextField
          state={addressee}
          className={styles.address}
          onChange={(e) => setAddressee(e.target.value)}
          id="addressee"
          label="dirección"
          size="small"
          helperText="dirección: P sherman calle wallaby 42 sydney"
          required
        />
      </div>
      <div className={styles.section}>
        <div className={styles.aSelect}>
          <AddressSelect
            state={department}
            setState={setDeparment}
            label="Departamento"
            txt="Seleccione un departamento"
            id="department"
            tam="100%"
            data={data1}
          />
        </div>
        <TextField
          className={styles.city}
          state={city}
          onChange={(e) => setCity(e.target.value)}
          id="city"
          required
          label="Ciudad"
          size="small"
        />
      </div>
      <div className={styles.containerBtn}>
        <button type="submit" className={styles.btn}>
          <p>Guardar</p>
        </button>
      </div>
    </form>
  );
};
