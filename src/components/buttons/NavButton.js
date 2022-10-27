import { Link as LinkRouter } from 'react-router-dom';
import styles from './NavButton.module.css';

export const NavButton = ({ text, address, icon, type }) => {
  const choose = {
    navbar: styles.NaviButton,
    menu: styles.MenuButton
  };
  return (
    <LinkRouter className={choose[type]} to={address}>
      {icon}
      {text}
    </LinkRouter>
  );
};
