import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarUser } from '../navbar/NavbarUser';
import styles from './HeaderReg.module.css';

export const HeaderReg = () => {
  return (
    <div>
      <NavbarUser />
      <div className={styles.hdContainer}>
        <div className={styles.txtButton}>
          <Link
            to="/"
            style={{ textDecoration: 'none', color: 'white' }}>
            <h1>Libreria Booki</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};
