import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import styles from './ProductPage.module.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { politicies } from '../policies/data';
import { ButtonAddToCart } from '../components/cart/ButtonAddCart';
import { InputBar } from '../components/cart/InputBar.';
import { useGetBookByIdQuery } from '../services/api/books/BookiApi';

export const ProductPage = () => {
  const [isActive, setIsActive] = useState(true);
  const [showPolicies, setShowPoliticies] = useState(false);

  const { id } = useParams();
  const {
    data: bookData,
    isLoading,
    error,
    isUninitialized
  } = useGetBookByIdQuery(id);
  if (isLoading) return <p>Loading...</p>;
  console.log(bookData);
  if (error) return <p>Something went wrong: {error.message}</p>;
  if (isUninitialized) return <p>Uninitialized</p>;
  const {
    title,
    isbn,
    editorial,
    price,
    imgUrl,
    details,
    language,
    edition,
    pages,
    format,
    authors
  } = bookData;

  const author = authors[0].name;
  const data = {
    id: id,
    title: title,
    authors: authors,
    price: price,
    imgUrl: imgUrl,
    format: format,
    money: price,
    author: author,
    isbn: isbn
  };

  const money = price.toLocaleString('es-CO', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'COP'
  });

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.containerProduct}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={imgUrl} alt={title} />
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.featuredCon}>
            <div className={styles.cart}>
              <div className={styles.textCart}>
                <h1>{title}</h1>
              </div>

              <div className={styles.infoTxtCon}>
                <div className={styles.bookAuthors}>
                  <h4>Autores</h4>
                  <div>
                    {Array.isArray(authors) ? (
                      authors.map((author) => (
                        <p key={author.name}>{author.name}</p>
                      ))
                    ) : (
                      <p>{authors.name}</p>
                    )}
                  </div>
                </div>
                <div className={styles.containerPrice}>
                  <h4>Precio</h4>
                  <p>{money}</p>
                </div>
              </div>
              <div className={styles.menuOrder}>
                <div className={styles.menuQuantity}>
                  <InputBar />
                </div>
                {/* addToCart={addToCart} */}
                <div>
                  <ButtonAddToCart id={id} data={data} type="cart" />
                </div>
              </div>
            </div>

            <div className={styles.bkCards}>
              <div className={styles.cardCon1}>
                <div className={styles.bookInfo}>
                  <h4>editorial</h4>
                  <p>{editorial}</p>
                </div>
                <div className={styles.bookInfo}>
                  <h4>ISBN</h4>
                  <p>{isbn}</p>
                </div>
                <div className={styles.bookInfo}>
                  <h4>Formato</h4>
                  <p>{format}</p>
                </div>
              </div>
              <div className={styles.cardCon2}>
                <div className={styles.bookInfo}>
                  <h4>Idioma</h4>
                  <p>{language}</p>
                </div>
                <div className={styles.bookInfo}>
                  <h4>Edicion</h4>
                  <p>{edition}</p>
                </div>
                <div className={styles.bookInfo}>
                  <h4>Paginas</h4>
                  <p>{pages}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.desc}>
            <div
              className={styles.descTitle}
              onClick={() => setIsActive(!isActive)}>
              <div className={styles.itemTitles}>
                <h2>Descripción</h2>
                {isActive ? <RemoveIcon /> : <AddIcon />}
              </div>
            </div>
            {isActive ? <p>{details}</p> : ''}
          </div>

          <div
            className={styles.poli}
            onClick={() => setShowPoliticies(!showPolicies)}>
            <div className={styles.poliTitle}>
              <h2>Políticas de envío</h2>
              {showPolicies ? <RemoveIcon /> : <AddIcon />}
            </div>
            {showPolicies ? (
              <div>
                <div className={styles.detailDelivery}>
                  <h3>Detalles del envio</h3>
                  <p>{politicies.delivery.details}</p>
                  <p>{politicies.delivery.especial}</p>
                </div>
                <div className={styles.times}>
                  <h3>Tiempos de despacho</h3>
                  <ul className={styles.list}>
                    <li>
                      <b>Ciudades principales</b>{' '}
                      {politicies.time.principals}
                    </li>
                    <li>
                      <b> Ciudades intermedias: </b>
                      {politicies.time.intermediates}
                    </li>
                    <li>
                      <b>Envios internacionales: </b>
                      {politicies.time.international}
                    </li>
                    <li>
                      <b>Tiempo de entrega: </b>
                      {politicies.time.available}
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
