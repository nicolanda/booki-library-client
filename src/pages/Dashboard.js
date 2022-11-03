import { Outlet } from 'react-router-dom';
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/header/Header';
import { CardUser } from '../components/users/cardUser/CardUser';
import { MenuUser } from '../components/users/menu/MenuUser';
import styles from './Dashboard.module.css';

export const Dashboard = () => {
  return (
    <div className={styles.pageContainer}>
      <div>
        <Header />
      </div>
      <div className={styles.dashContainer}>
        <div className={styles.navContainer}>
          <CardUser />
          <MenuUser />
        </div>
        <div className={styles.outletContainer}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};
