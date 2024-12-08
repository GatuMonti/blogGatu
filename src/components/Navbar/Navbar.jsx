import React from 'react';
import { AppBar, Box, Toolbar, Container } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import UserAvatar from './UserAvatar';
import ListNavBar from './ListNavBar';
import Logo from './Logo';

const Navbar = () => {

  const userRole = 'admin';

  return (
    <AppBar
      position="static"
      sx={{
        fontFamily: 'var(--font-family)',
        backgroundColor: 'var(--background-color)',
        boxShadow: 'none',
        borderBottom: '0.2px solid rgba(128, 128, 128, 0.3)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <ListNavBar />
          <UserAvatar role={userRole} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;