import React from 'react';
import { Typography } from '@mui/material';
import { Adb as AdbIcon } from '@mui/icons-material';

const Logo = () => {
  return (
    <>
      <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'var(--font-family)',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'var(--text-color)',
          textDecoration: 'none',
        }}
      >
        LOGO
      </Typography>
    </>
  );
};

export default Logo;
