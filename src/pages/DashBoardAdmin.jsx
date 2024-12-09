import React from 'react';
import NavbarLateral from '../components/DahsBoardAdmin/NavbarLateral.jsx';
import ContenidoPrincipalAdmin from '../components/DahsBoardAdmin/ContenidoPrincipalAdmin.jsx';
import { Box } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex.js';

const DashBoardAdmin = () => {
  return (
    <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden', minHeight: '85vh' }}>
      <NavbarLateral />
      <ContenidoPrincipalAdmin />
    </Box>
  );
};

export default DashBoardAdmin;
