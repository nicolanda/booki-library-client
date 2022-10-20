import React from 'react';
import { Header } from '../components/header/Header';
import { Navbar } from '../components/navbar/Navbar';
import { BookCard } from '../components/card/BookCard';
import { uniquePositions } from '../utilities/uniquePositions';
import './home.css';

export const Home = ({ infobook }) => {
  return (
    <div>
      <Header />
      <Navbar />
      <div>
        <div className="banner-container">
          <img
            className="home-banner"
            src="images/banner-booki.jpg"
            alt="banner-library"
          />
        </div>
        <div className="recommended">
          <div className="recommended-title">
            <h2>Libros recomendados</h2>
          </div>
          <div className="recommended-card-container">
            <div className="all-cards">
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
