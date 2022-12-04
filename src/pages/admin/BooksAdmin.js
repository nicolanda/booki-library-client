import React, { useState } from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { BookAddForm } from '../../components/admin/book/book/BookAddForm';
import { BooksItems } from '../../components/admin/book/book/BooksItems';
import { useGetAllBooksQuery } from '../../services/api/books/BookiApi';
import styles from './BooksAdmin.module.css';

export const BooksAdmin = () => {
  const [showForm, setShowForm] = useState(null);
  const {
    data: infoBooks,
    isLoading,
    isUninitialized,
    isError
  } = useGetAllBooksQuery();
  if (isUninitialized) return <div>Uninitialized</div>;
  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Cargando...</div>;

  console.log(infoBooks);

  return (
    <div className={styles.container}>
      <h1 className={styles.titles}>Libros</h1>
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

      {!!showForm && (
        <div>
          <BookAddForm />
        </div>
      )}

      <div>
        {infoBooks.map((book) => {
          return <BooksItems key={book.id} data={book} />;
        })}
      </div>
    </div>
  );
};
