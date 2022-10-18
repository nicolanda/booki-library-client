import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderReg = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: '#232020',
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'relative',
          gap: '.5rem'
        }}>
        <Link to="/user/login" style={{ textDecoration: 'none' }}>
          <Button
            size="small"
            variant="outlined"
            sx={{ mt: 1, mb: 1 }}
            style={{
              color: 'white',
              borderColor: 'white',
              textTransform: 'none'
            }}>
            Inicio Sesion
          </Button>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button
            size="small"
            variant="outlined"
            sx={{ mt: 1, mb: 1, mr: 1 }}
            style={{
              color: 'white',
              borderColor: 'white',
              textTransform: 'none'
            }}>
            Home
          </Button>
        </Link>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#776d6d'
        }}>
        <div
          style={{
            fontFamily: 'Roboto',
            color: 'white',
            textWeight: 'black',
            fontStyle: 'italic',
            fontSize: '.8rem',
            width: '7rem'
          }}>
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
