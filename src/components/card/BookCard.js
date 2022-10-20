import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Bookcard.css';
import { Link } from 'react-router-dom';
import React from 'react';

export const BookCard = ({
  title,
  subtitle,
  isbn13,
  price,
  image
}) => {
  return (
    <div className="card-container">
      <div className="card-img">
        <img className="book-img" src={image} alt={title} />
      </div>
      <div className="card-info">
        <h4>{title}</h4>
        <p className="author-book">author</p>
        <p className="price-book">{price}</p>
      </div>
      <div className="card-buttons">
        <Link
          to={`/categoria/libros/${isbn13}`}
          style={{ textDecoration: 'none' }}>
          <Button size="small" variant="contained">
            Detalles
          </Button>
        </Link>
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
