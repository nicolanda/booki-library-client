import { useState } from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { DiscountAddForm } from '../../components/admin/book/discounts/DiscountAddForm';
import { DiscountList } from '../../components/admin/book/discounts/DiscountList';
import styles from './DiscountPage.module.css';

export const DiscountPage = () => {
  const [showForm, setShowForm] = useState(null);
  return (
    <div className={styles.container}>
      <h1 className={styles.titles}>Descuentos</h1>
      <div className={styles.line}></div>
      <div className={styles.containerBtn}>
        <button
          onClick={() => setShowForm(!1)}
          className={styles.btn}>
          <RemoveCircleOutlineIcon />
          Canelar nuevo Descunto
        </button>
        <button
          onClick={() => setShowForm(!0)}
          className={styles.btn}>
          <AddCircleOutlineIcon />
          Agregar nuevo Descuento
        </button>
      </div>
      {showForm && <DiscountAddForm />}
      <div>
        <h1 className={styles.titles}>Lista de Descuentos</h1>
      </div>
      <div className={styles.line}></div>
      <DiscountList />
    </div>
  );
};
