import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './carduser.css';

export const CardUser = () => {
  let name = 'Jhon Doe';
  return (
    <div className="carduserContainer">
      <div className="carduserImg">
        <AccountCircleIcon sx={{ fontSize: 55 }} />
      </div>
      <div className="carduserTextcontainer">
        <h3 className="carduserTitle">Hola, {name}!</h3>
        <p className="carduserAuxtext">Bienvenido a su cuenta</p>
      </div>
    </div>
  );
};
