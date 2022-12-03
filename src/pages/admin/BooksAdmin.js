import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { BookAddForm } from '../../components/admin/book/book/BookAddForm';
import { BooksItems } from '../../components/admin/book/book/BooksItems';
import { useGetAllBooksQuery } from '../../services/api/books/BookiApi';
import styles from './BooksAdmin.module.css';

export const BooksAdmin = () => {
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
      {/* <div>
        <BookAddForm />
      </div> */}

      <div>
        {infoBooks.map((book) => {
          return <BooksItems key={book.id} data={book} />;
        })}
      </div>
    </div>
  );
};
