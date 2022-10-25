import { Outlet } from 'react-router-dom';
import { Header } from '../components/header/Header';
import { CardUser } from '../components/users/cardUser/CardUser';
import { MenuUser } from '../components/users/menu/MenuUser';
import './dashboard.css';

export const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="dashContainer">
        <div className="navContainer">
          <CardUser />
          <MenuUser />
        </div>
        <div className="dataContainer">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
