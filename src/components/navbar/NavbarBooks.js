import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

export const NavbarBooks = () => {
  return (
    <div style={{ background: 'black' }}>
      <RouterLink to="/user/id/dashboard">
        <p>user</p>
      </RouterLink>
      <Button variant="text">
        <Typography variant="body2" style={{ color: 'white' }}>
          Libros
        </Typography>
      </Button>
      <Button variant="text">
        <Typography variant="body2" style={{ color: 'white' }}>
          E-books
        </Typography>
      </Button>
    </div>
  );
};
