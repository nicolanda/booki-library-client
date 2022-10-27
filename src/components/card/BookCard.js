import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styles from './BookCard.module.css';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

export const BookCard = ({
  title,
  subtitle,
  isbn13,
  price,
  image
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImg}>
        <img className={styles.bookImg} src={image} alt={title} />
      </div>
      <div className={styles.cardInfo}>
        <h4>{title}</h4>
        <p className={styles.bookAuthor}>author</p>
        <p className={styles.priceBook}>{price}</p>
      </div>
      <div className={styles.cardButtons}>
        <RouterLink
          className={styles.cardLink}
          to={`/categoria/libros/${isbn13}`}>
          <Button size="small" variant="contained">
            Detalles
          </Button>
        </RouterLink>
        <Button
          size="small"
          variant="contained"
          endIcon={<AddShoppingCartIcon />}>
          Agregar
        </Button>
      </div>
    </div>
  );
};
