import './MenuUser.css';
import { Button, ButtonGroup } from '@mui/material';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
// <ButtonGroup orientation="vertical">

export const MenuUser = () => {
  return (
    <ButtonGroup className="menuusergroup">
      <Link className="menuuserlink" to="formUser">
        <Button
          className="btn"
          size="small"
          startIcon={<PersonOutlineOutlinedIcon />}
          endIcon={
            <ArrowForwardOutlinedIcon
              sx={{
                display: {
                  lg: 'block',
                  xs: 'none'
                }
              }}
            />
          }>
          Cuenta
        </Button>
      </Link>
      <Link className="menuuserlink" to="payment">
        <Button
          className="btn"
          size="small"
          startIcon={<PaymentOutlinedIcon />}
          endIcon={
            <ArrowForwardOutlinedIcon
              sx={{
                display: {
                  lg: 'block',
                  xs: 'none'
                }
              }}
            />
          }>
          Metodos pago
        </Button>
      </Link>
      <Link className="menuuserlink" to="address">
        <Button
          className="btn"
          size="small"
          startIcon={<ImportContactsOutlinedIcon />}
          endIcon={
            <ArrowForwardOutlinedIcon
              sx={{
                display: {
                  lg: 'block',
                  xs: 'none'
                }
              }}
            />
          }>
          Libreta direcciones
        </Button>
      </Link>
      <Link className="menuuserlink" to="orders">
        <Button
          className="btn"
          size="small"
          startIcon={<FormatListBulletedOutlinedIcon />}
          endIcon={
            <ArrowForwardOutlinedIcon
              sx={{
                display: {
                  lg: 'block',
                  xs: 'none'
                }
              }}
            />
          }>
          Historial ordenes
        </Button>
      </Link>
      <Link className="menuuserlink" to="/">
        <Button
          className="btn close"
          size="small"
          startIcon={<LogoutOutlinedIcon />}>
          Cerrar sesión
        </Button>
      </Link>
    </ButtonGroup>
  );
};
