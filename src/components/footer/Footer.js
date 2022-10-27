import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton, Typography } from '@mui/material';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={styles.foContainer}>
      <div className={styles.foContainerIcons}>
        <IconButton
          aria-label="Linked"
          size="large"
          href="https://www.linkedin.com/in/nicolas-landazabal-73b88966/"
          target="_blank"
          sx={{
            bgcolor: 'white'
          }}>
          <LinkedInIcon sx={{ color: '#01579b' }} />
        </IconButton>
        <IconButton
          aria-label="Facebook"
          size="large"
          href="https://www.facebook.com/nico.landa.04/"
          target="_blank"
          sx={{
            bgcolor: 'white'
          }}>
          <FacebookIcon sx={{ color: '#01579b' }} />
        </IconButton>
        <IconButton
          aria-label="Github"
          size="large"
          href="https://github.com/nicolanda"
          target="_blank"
          sx={{
            bgcolor: 'white'
          }}>
          <GitHubIcon sx={{ color: 'black' }} />
        </IconButton>
      </div>
      <div>
        <Typography
          sx={{
            mt: 1,
            color: 'white'
          }}>
          © 2022 Nicolas Landazabal, derechos reservados.
        </Typography>
      </div>
    </div>
  );
};
