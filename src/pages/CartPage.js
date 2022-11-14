import { CardItem } from '../components/cart/CardItem';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import { ImproveCount } from '../components/reducerComp/ImproveCount';
import styles from './CartPage.module.css';

export const CartPage = ({ cart, deleteFromCart }) => {
  return (
    <div>
      <Header />
      <div className={styles.storeContainer}>
        <div className={styles.itemContainer}>
          {cart.map((item, idx) => (
            <CardItem
              key={idx}
              data={item}
              deleteFromCart={deleteFromCart}
            />
          ))}
        </div>
        <div className={styles.totalContainer}>
          <div>
            <h4>Total</h4>
          </div>
          <div>
            <p>money</p>
          </div>
          <div>
            <button>Buy</button>
          </div>
        </div>
        {/* <br />
        <div>
          <hr />
          <ImproveCount />
        </div> */}
      </div>
      <Footer />
    </div>
  );
};
