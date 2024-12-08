import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PostAddIcon from '@mui/icons-material/PostAdd';
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CommentIcon from '@mui/icons-material/Comment';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Collapse } from '@mui/material';

const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    maxWidth: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    backgroundColor: 'var(--background-color)', // Fondo de la barra lateral
    ...((open) ? openedMixin(theme) : closedMixin(theme)),
    '& .MuiDrawer-paper': {
      display: 'flex',
      backgroundColor: 'var(--background-color)',
      height: '100vh', // Asegurarse que el drawer cubra todo el alto
      marginTop: '80px',
      ...((open) ? openedMixin(theme) : closedMixin(theme)),
    },
  })
);

const NavbarLateral = ({ open, handleDrawerClose }) => {
  const [openCategories, setOpenCategories] = React.useState(false);
  const [openUsers, setOpenUsers] = React.useState(false);

  const handleClickCategories = () => {
    setOpenCategories(!openCategories);
  };

  const handleClickUsers = () => {
    setOpenUsers(!openUsers);
  };

  return (
    <Drawer variant="permanent" open={open} sx={{ minHeight: '100vh' }}>
      <DrawerHeader sx={{ margin: '-10px 0px -25px 0px' }}>
        <IconButton onClick={handleDrawerClose} sx={{ color: 'var(--text-color)' }}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {/* Dashboard */}
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton sx={{ minHeight: 48, px: 2.5 }}>
            <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', color: 'var(--text-color)' }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0, color: 'var(--text-color)' }} />
          </ListItemButton>
        </ListItem>

        {/* Publicaciones */}
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton sx={{ minHeight: 48, px: 2.5 }}>
            <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', color: 'var(--text-color)' }}>
              <PostAddIcon />
            </ListItemIcon>
            <ListItemText primary="Publicaciones" sx={{ opacity: open ? 1 : 0, color: 'var(--text-color)' }} />
          </ListItemButton>
        </ListItem>

        {/* Categorías */}
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton onClick={handleClickCategories} sx={{ minHeight: 48, px: 2.5 }}>
            <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', color: 'var(--text-color)' }}>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary="Categorías" sx={{ opacity: open ? 1 : 0, color: 'var(--text-color)' }} />
          </ListItemButton>
        </ListItem>
        <Collapse in={openCategories} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4, minHeight: 48 }}>
              <ListItemText primary="Gestionar Categorías" sx={{ color: 'var(--text-color)' }} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4, minHeight: 48 }}>
              <ListItemText primary="Gestionar Etiquetas" sx={{ color: 'var(--text-color)' }} />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Usuarios */}
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton onClick={handleClickUsers} sx={{ minHeight: 48, px: 2.5 }}>
            <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', color: 'var(--text-color)' }}>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Usuarios" sx={{ opacity: open ? 1 : 0, color: 'var(--text-color)' }} />
          </ListItemButton>
        </ListItem>
        <Collapse in={openUsers} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4, minHeight: 48 }}>
              <ListItemText primary="Gestionar Roles" sx={{ color: 'var(--text-color)' }} />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4, minHeight: 48 }}>
              <ListItemText primary="Ver Usuarios" sx={{ color: 'var(--text-color)' }} />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Estadísticas */}
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton sx={{ minHeight: 48, px: 2.5 }}>
            <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', color: 'var(--text-color)' }}>
              <AnalyticsIcon />
            </ListItemIcon>
            <ListItemText primary="Estadísticas" sx={{ opacity: open ? 1 : 0, color: 'var(--text-color)' }} />
          </ListItemButton>
        </ListItem>

        {/* Comentarios */}
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton sx={{ minHeight: 48, px: 2.5 }}>
            <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', color: 'var(--text-color)' }}>
              <CommentIcon />
            </ListItemIcon>
            <ListItemText primary="Comentarios" sx={{ opacity: open ? 1 : 0, color: 'var(--text-color)' }} />
          </ListItemButton>
        </ListItem>

        {/* Configuración */}
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton sx={{ minHeight: 48, px: 2.5 }}>
            <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', color: 'var(--text-color)' }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Configuración" sx={{ opacity: open ? 1 : 0, color: 'var(--text-color)' }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

const Layout = () => {
  const [open, setOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <NavbarLateral open={open} handleDrawerClose={handleDrawerToggle} />
    </Box>
  );
};

export default Layout;




