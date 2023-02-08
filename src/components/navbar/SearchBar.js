import styles from './SearchBar.module.css';
import { Link, Link as RouterLink } from 'react-router-dom';
import { IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
export const SearchBar = () => {
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.cartItems.length;
  console.log(cartItems);
  return (
    <div className={styles.searchBar}>
      <div className={styles.btnBooki}>
        <RouterLink className={styles.btnLink} to="/">
          <h1>Libreria Booki</h1>
        </RouterLink>
      </div>
      <div className={styles.txtField}>
        <TextField
          className={styles.txtInp}
          id="filled-basic"
          variant="filled"
          label="Buscar"
          size="small"
          color="grey"
        />
        <IconButton aria-label="search" size="large">
          <SearchIcon className={styles.searchIcon} />
        </IconButton>
      </div>
      <div className={styles.kartContainer}>
        <Link to="/cart">
          <IconButton arial-label="cart" size="large">
            <ShoppingCartIcon className={styles.kartIcon} />
          </IconButton>
        </Link>
        <div className={styles.kartSeparator} />
        <div className={styles.kartText}>
          <p>{cartItems}</p>
        </div>
      </div>
    </div>
  );
};
