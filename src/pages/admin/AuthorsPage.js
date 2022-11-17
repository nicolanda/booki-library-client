import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './AuthorsPage.module.css';
import { FormInputText } from '../../components/forms/FormInputText';
import {
  regularExpression,
  errorMessage
} from '../../utilities/validators';
import { AuthorList } from '../../components/admin/book/autores/AuthorList';
import { AuthorAddForm } from '../../components/admin/book/autores/AuthorAddForm';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

export const AuthorsPage = () => {
  const [showForm, setShowForm] = useState(null);

  // const dispatch = useDispatch();

  // console.log(items);
  return (
    <div className={styles.container}>
      <h1 className={styles.titles}>Autores</h1>
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
      {showForm && <AuthorAddForm />}
      <div>
        <h1 className={styles.titles}>Lista de autores</h1>
      </div>
      <div className={styles.line}></div>
      <AuthorList />
    </div>
  );
};
