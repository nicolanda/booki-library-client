import { NavLink } from 'react-router-dom';
import styles from './MenuButton.module.css';
export const MenuButton = ({ text, addres, icon }) => {
  return (
    <NavLink
      key={text}
      to={addres}
      className={({ isActive }) =>
        isActive ? styles.menuActive : styles.menuNorm
      }>
      {icon}
      {text}
    </NavLink>
  );
};
