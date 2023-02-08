import { Link as LinkRouter } from 'react-router-dom';
import styles from './NavButton.module.css';

export const NavButton = ({ text, address, icon, type, logout }) => {
  const choose = {
    navbar: styles.NaviButton,
    menu: styles.MenuButton
  };

  const handleLogout = () => {
    console.log('logout');
  };
  return (
    <LinkRouter
      className={choose[type]}
      to={address}
      onClick={handleLogout}>
      {icon}
      {text}
    </LinkRouter>
  );
};
