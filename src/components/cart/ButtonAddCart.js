import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
import styles from './ButtonAddCart.module.css';
export const ButtonAddToCart = ({ type, id, data }) => {
  const chooseType = {
    card: styles.cardButton,
    cart: styles.cartButton
  };

  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('add item: ' + id);
    dispatch(addToCart(data));
  };

  return (
    <div>
      {
        {
          card: (
            <button
              className={chooseType[type]}
              onClick={handleClick}>
              <p>Agregar</p>
              <AddShoppingCartIcon fontSize="medium" />
            </button>
          ),
          cart: (
            <button
              className={chooseType[type]}
              onClick={handleClick}>
              <p>Añadir al carrito</p>
              <AddShoppingCartIcon fontSize="large" />
            </button>
          )
        }[type]
      }
    </div>
  );
};
