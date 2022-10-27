import styles from './Home.module.css';
import React from 'react';
import { Header } from '../components/header/Header';
import { BookCard } from '../components/card/BookCard';
import { uniquePositions } from '../utilities/uniquePositions';

export const Home = ({ infobook }) => {
  return (
    <div>
      <Header />
      <div>
        <div className={styles.container}>
          <img
            className={styles.banner}
            src="images/banner-booki.jpg"
            alt="banner-library"
          />
        </div>
        <div className={styles.recommended}>
          <div className={styles.title}>
            <h2>Libros recomendados</h2>
          </div>
          <div className={styles.card}>
            <div className={styles.cards}>
              {infobook &&
                uniquePositions(infobook, 3).map((book) => (
                  <BookCard key={book.isbn13} {...book} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
