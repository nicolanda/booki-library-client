import { useState } from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import styles from './TaxesPage.module.css';
import { TaxesAddForm } from '../../components/admin/book/taxes/TaxesAddForm';
import { TaxesList } from '../../components/admin/book/taxes/TaxesList';

export const TaxesPage = () => {
  const [showForm, setShowForm] = useState(null);
  return (
    <div className={styles.container}>
      <h1 className={styles.titles}>Categorias</h1>
      <div className={styles.line}></div>
      <div className={styles.containerBtn}>
        <button
          onClick={() => setShowForm(!1)}
          className={styles.btn}>
          <RemoveCircleOutlineIcon />
          Canelar nuevo Autor
        </button>
        <button
          onClick={() => setShowForm(!0)}
          className={styles.btn}>
          <AddCircleOutlineIcon />
          Agregar nuevo Autor
        </button>
      </div>
      {showForm && <TaxesAddForm />}
      <div>
        <h1 className={styles.titles}>Lista de Categorias</h1>
      </div>
      <div className={styles.line}></div>
      <TaxesList />
    </div>
  );
};
