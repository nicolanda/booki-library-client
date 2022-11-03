import styles from './AddressDashboard.module.css';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { AddressForm } from '../../forms/adress/AddressForm';
import { useState } from 'react';

export const AddressDashboard = () => {
  const [showAddressForm, setShowAddressForm] = useState(null);
  console.log(showAddressForm);
  return (
    <div className={styles.container}>
      <h1 className={styles.titles}>Libreta de direcciones</h1>
      <div className={styles.line}></div>
      <div className={styles.addressCon}>
        <h3>contenedor de direcciones</h3>
      </div>
      <div className={styles.containerBtn}>
        <button
          onClick={() => setShowAddressForm(!1)}
          className={styles.btn}>
          <RemoveCircleOutlineIcon />
          Canelar nueva direccion
        </button>
        <button
          onClick={() => setShowAddressForm(!0)}
          className={styles.btn}>
          <AddCircleOutlineIcon />
          Agregar nueva direccion
        </button>
      </div>
      {showAddressForm && (
        <div className={styles.form}>
          <h1 className={styles.titles}>Formulario de direcciones</h1>
          <div className={styles.line}></div>
          <AddressForm />
        </div>
      )}
    </div>
  );
};
