import { booksData } from '../../utilities/rawData';
import styles from './CardItem.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { InputBar } from './InputBar.';
import { IconButton } from '@mui/material';

export const CardItem = ({ title, ibsn, imgUrl }) => {
  const example = booksData[0];
  const money = example.price.toLocaleString('es-CO', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'COP'
  });
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imgContainer}>
        <img
          className={styles.imgItem}
          src={example.imgUrl}
          alt={example.title}
        />
      </div>
      <div className={styles.textContainer}>
        <h4 className={styles.title}>{example.title}</h4>
        <p className={styles.txt}>Author: {example.authors.name}</p>
        <p className={styles.txt}>Isbn: {example.isbn}</p>
      </div>
      <div className={styles.priceContainer}>
        <div>
          <h4 className={styles.title}>Unit.</h4>
          <p>{money}</p>
        </div>
        <div>
          <InputBar />
        </div>
      </div>
      <div className={styles.totalContainer}>
        <div>
          <h4 className={styles.title}>Total</h4>
        </div>
        <div>
          <p>{money}</p>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <IconButton className={styles.deleteButton}>
          <DeleteIcon fontSize="medium" />
        </IconButton>
      </div>
    </div>
  );
};
