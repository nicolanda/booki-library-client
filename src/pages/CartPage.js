import { CardItem } from '../components/cart/CardItem';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import { ImproveCount } from '../components/reducerComp/ImproveCount';

export const CartPage = ({ infobook }) => {
  return (
    <div>
      <Header />
      <div>
        <div>
          <CardItem />
        </div>
        <div>
          <div>
            <h4>Total</h4>
          </div>
          <div>
            <p>money</p>
          </div>
        </div>
        {/* <br />
        <div>
          <hr />
          <ImproveCount />
        </div> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
};
