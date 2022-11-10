import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styles from './ButtonAddCart.module.css';
export const ButtonAddToCart = ({ type, addToCart, id }) => {
  const chooseType = {
    card: styles.cardButton,
    cart: styles.cartButton
  };
  return (
    <div>
      {
        {
          card: (
            <button
              className={chooseType[type]}
              onClick={() => addToCart(id)}>
              <p>Agregar</p>
              <AddShoppingCartIcon fontSize="medium" />
            </button>
          ),
          cart: (
            <button
              className={chooseType[type]}
              onClick={() => addToCart(id)}>
              <p>Añadir al carrito</p>
              <AddShoppingCartIcon fontSize="large" />
            </button>
          )
        }[type]
      }
    </div>
  );
};
