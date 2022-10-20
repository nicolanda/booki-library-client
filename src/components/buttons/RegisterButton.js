import { Button } from '@mui/material';
import React from 'react';

export const RegisterButton = (props) => {
  const { type, variant, label } = props;
  return (
    <div>
      <Button variant={variant} type={type}>
        {label}
      </Button>
    </div>
  );
};
