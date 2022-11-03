import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './CarduUser.module.css';

export const CardUser = () => {
  let name = 'Jhon Doe';
  return (
    <div className={styles.cuContainer}>
      <div className={styles.imgContainer}>
        <AccountCircleIcon
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 55
          }}
        />
      </div>
      <div className={styles.cuTextcontainer}>
        <h3 className={styles.cuTitle}>Hola, {name}!</h3>
        <p className={styles.cuAuxText}>Bienvenido a su cuenta</p>
      </div>
    </div>
  );
};
