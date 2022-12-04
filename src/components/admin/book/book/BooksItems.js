import React from 'react';
import styles from './BooksItems.module.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { useDeleteBookMutation } from '../../../../services/api/books/BookiApi';
import { BookEditForm } from './BookEditForm';

export const BooksItems = ({ data }) => {
  const [deleteBook] = useDeleteBookMutation();
  const [edit, setEdit] = React.useState(false);
  const money = data.price.toLocaleString('es-CO', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'COP'
  });
  const discount = data.price_discount.value * 100;
  const tax = data.price_tax.value * 100;
  // console.log(data);
  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.imgContainer}>
          <div className={styles.frame}>
            <img
              className={styles.imgItem}
              src={data.imgUrl}
              alt={data.title}
            />
          </div>
        </div>
        <div>
          <p>
            <b>Titulo:</b> {data.title}
          </p>
          <p>Autores: </p>
          {data.authors.map((author) => {
            return <p key={author.id}>{author.name}</p>;
          })}
          <p>precio: {money}</p>
          <p>descuento: {discount} %</p>
          <p>impuesto: {tax} %</p>
          <p>formato: {data.format}</p>
        </div>
        <div>
          <IconButton
            className={styles.editBtn}
            size="small"
            onClick={() => {
              setEdit(!edit);
            }}>
            <EditIcon fontSize="inherit" />
          </IconButton>

          <IconButton
            className={styles.deleteBtn}
            size="small"
            onClick={() => deleteBook(data.id)}>
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </div>
      </div>
      {edit && (
        <div>
          <BookEditForm data={data} />
        </div>
      )}
    </div>
  );
};
