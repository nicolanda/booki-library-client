import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { BookCard } from '../components/card/BookCard';
import styles from './BooksPages.module.css';
import { useGetAllBooksQuery } from '../services/api/books/BookiApi';
import { CircularProgress } from '@mui/material';

export const BooksPages = () => {
  // { infobook } = props;
  const { data, isLoading, error, isSuccess } = useGetAllBooksQuery();
  const infobook = data;
  console.log(infobook);
  return (
    <div className={styles.pageContainer}>
      <Header />
      <div className={styles.bodyContainer}>
        <div className={styles.menuContainer}>
          <ul>
            <li>opcion 1</li>
            <li>opcion 2</li>
            <li>opcion 3</li>
          </ul>
        </div>
        {isLoading ? (
          <CircularProgress />
        ) : error ? (
          <p>An error ocurred</p>
        ) : (
          <div className={styles.gridResponsive}>
            {infobook.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
