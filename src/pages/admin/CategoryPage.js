import { useState } from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import styles from './CategoryPage.module.css';
import { CategoriesList } from '../../components/admin/book/categories/CategoriesList';
import { CategoryAddForm } from '../../components/admin/book/categories/CategoryAddForm';

export const CategoryPage = () => {
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
          Cancelar nueva Categoria
        </button>
        <button
          onClick={() => setShowForm(!0)}
          className={styles.btn}>
          <AddCircleOutlineIcon />
          Agregar nuevo Categoria
        </button>
      </div>
      {showForm && <CategoryAddForm />}
      <div>
        <h1 className={styles.titles}>Lista de Categorias</h1>
      </div>
      <div className={styles.line}></div>
      <CategoriesList />
    </div>
  );
};
