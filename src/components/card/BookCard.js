import styles from './BookCard.module.css';
import React from 'react';
import { NavButton } from '../buttons/NavButton';
import { ButtonAddToCart } from '../cart/ButtonAddCart';

export const BookCard = (book) => {
  const { id, title, authors, price, imgUrl, format } = book;
  const money = price;
  const author = authors[0].name;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImg}>
        <img className={styles.bookImg} src={imgUrl} alt={title} />
      </div>
      <div className={styles.cardInfo}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.propContainer}>
          <p className={styles.propText}>Autor:</p>
          <p className={styles.bookAuthor}>{author}</p>
        </div>
        <div className={styles.propContainer}>
          <p className={styles.propText}>formato: </p>
          <p className={styles.format}>{format}</p>
        </div>
        <div className={styles.propContainer}>
          <p className={styles.propText}>Precio:</p>
          <p className={styles.priceBook}>
            {money.toLocaleString('es-CO', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
              style: 'currency',
              currency: 'COP'
            })}
          </p>
        </div>
      </div>
      <div className={styles.cardButtons}>
        <NavButton
          text="Detalles"
          address={`/categoria/libros/${id}`}
          type="menu"
        />
        {/* addToCart={addToCart} */}
        <ButtonAddToCart id={id} data={book} type="card" />
      </div>
    </div>
  );
};
