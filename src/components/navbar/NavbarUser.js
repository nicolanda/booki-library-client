import styles from './NavbarUser.module.css';
import { NavButton } from '../buttons/NavButton';

export const NavbarUser = () => {
  // let location = useLocation();
  return (
    <div className={styles.nvuButtonContainer}>
      <NavButton
        address="/user/login"
        text="Inicio sesión"
        type="navbar"
      />
      <NavButton
        address="/user/register"
        text="registrarse"
        type="navbar"
      />
    </div>
  );
};
