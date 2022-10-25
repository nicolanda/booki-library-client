import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/header/Header';
import { getInfoBook } from '../services/getAllBooks/getAllBooks';
import './productpage.css';

export const ProductPage = () => {
  let { isbn } = useParams();
  const [infoBook, setInfoBook] = useState([]);

  useEffect(() => {
    getInfoBook(isbn).then((data) => {
      setInfoBook(data);
    });
  }, [isbn]);

  let {
    authors,
    desc,
    image,
    isbn13,
    language,
    pages,
    price,
    publisher,
    title,
    year
  } = infoBook;

  console.log(infoBook);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="img-container">
          <img className="img-book" src={image} alt={title} />
        </div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <div>
            <p>editorial</p>
            <p>name editorial</p>
          </div>
          <div>
            <p>formato</p>
            <p>f. libro</p>
          </div>
          <div>
            <p>autores</p>
            <p>nombre autor</p>
          </div>
          <div>
            <p>presentación</p>
            <p>taba dura</p>
          </div>
          <div>
            <p>categoria</p>
            <p>drama</p>
          </div>
        </div>
      </div>
    </div>
  );
};
