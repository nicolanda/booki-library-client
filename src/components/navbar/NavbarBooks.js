import React from 'react';
import { NavButton } from '../buttons/NavButton';
import styles from './NavbarBooks.module.css';

export const NavbarBooks = () => {
  return (
    <div className={styles.container}>
      <NavButton
        text="Usuario ! delete"
        address="/user/id/dashboard"
        type="navbar"
      />
      <NavButton
        text="Libros"
        address="/categoria/libros"
        type="navbar"
      />
      <NavButton
        text="Fisicos"
        address="/categoria/libros"
        type="navbar"
      />
      <NavButton
        text="E-Books"
        address="/categoria/libros"
        type="navbar"
      />
    </div>
  );
};
