import React from 'react';
import { Button } from '@mui/material';
import styles from './Registerbutton.module.css';

export const RegisterButton = (props) => {
  const { type, variant, label } = props;

  return (
    <Button
      className={styles.regButton}
      variant={variant}
      type={type}>
      {label}
    </Button>
  );
};
