import React from 'react';
import NavbarLateral from '../components/DahsBoardAdmin/NavbarLateral.jsx';
import ContenidoPrincipalAdmin from '../components/DahsBoardAdmin/ContenidoPrincipalAdmin.jsx';
import { Box} from '@mui/material';

const DashBoardAdmin = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavbarLateral />
      <ContenidoPrincipalAdmin />
    </Box>
  );
}

export default DashBoardAdmin;