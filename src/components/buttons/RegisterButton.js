import { Button } from '@mui/material';
import React from 'react';
import './RegisterButton.css';

export const RegisterButton = (props) => {
  const { nameClass, type, variant, label } = props;

  const typeButton = {
    regButton: 'regButton'
  };

  return (
    <Button
      className={typeButton[nameClass]}
      variant={variant}
      type={type}>
      {label}
    </Button>
  );
};
