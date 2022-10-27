import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { MenuButton } from '../../buttons/MenuButtons';
import styles from './MenuUser.module.css';
import { NavButton } from '../../buttons/NavButton';

export const MenuUser = () => {
  return (
    <div className={styles.menu}>
      <MenuButton
        addres="formUser"
        text="Cuenta"
        icon={<PersonOutlineOutlinedIcon />}
      />
      <MenuButton
        addres="payment"
        text="Metodos pago"
        icon={<PaymentOutlinedIcon />}
      />
      <MenuButton
        addres="address"
        text="Libreta direcciones"
        icon={<ImportContactsOutlinedIcon />}
      />
      <MenuButton
        addres="orders"
        text="Historial ordenes"
        icon={<FormatListBulletedOutlinedIcon />}
      />
      <NavButton
        addres="home"
        type="menu"
        text="Cerrar sesión"
        icon={<LogoutOutlinedIcon />}
      />
    </div>
  );
};
