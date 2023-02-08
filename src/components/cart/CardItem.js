// import { booksData } from '../../utilities/rawData';
import styles from './CardItem.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { InputBar } from './InputBar.';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../features/cartSlice';

export const CardItem = ({ data }) => {
  // const example = booksData[0];
  const dispatch = useDispatch();
  const { title, isbn, imgUrl, price, authors, itemQuantity } = data;

  const money = price.toLocaleString('es-CO', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'COP'
  });

  const total_money = (price * itemQuantity).toLocaleString('es-CO', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'COP'
  });
  const name = authors[0].name;

  const handleRemoveFromCart = (product) => {
    console.log('remove from cart', product);
    dispatch(removeFromCart(product));
  };

  return (
    <div className={styles.itemContainer}>
      <div className={styles.imgContainer}>
        <div className={styles.frame}>
          <img className={styles.imgItem} src={imgUrl} alt={title} />
        </div>
      </div>
      <div className={styles.textContainer}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.txt}>Author: {name}</p>
        <p className={styles.txt}>Isbn: {isbn}</p>
      </div>
      <div className={styles.priceContainer}>
        <div>
          <div>
            <h4 className={styles.title}>Unit.</h4>
          </div>
          <div>
            <p>{money}</p>
          </div>
        </div>
        <div>
          <InputBar data={data} />
        </div>
      </div>
      <div className={styles.totalContainer}>
        <div>
          <h4 className={styles.title}>Total</h4>
        </div>
        <div>
          <p>{total_money}</p>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <IconButton
          className={styles.deleteButton}
          onClick={() => handleRemoveFromCart(data)}>
          <DeleteIcon fontSize="medium" />
        </IconButton>
      </div>
    </div>
  );
};
