import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Collapse,
  Divider,
} from '@mui/material';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Dashboard as DashboardIcon,
  PostAdd as PostAddIcon,
  Category as CategoryIcon,
  Person as PersonIcon,
  Assessment as AnalyticsIcon,
  Comment as CommentIcon,
  Pageview as PageviewIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  height: 'auto',
  marginTop: '80px',
  marginBottom: '20px',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: 'var(--background-color)', // Usando la variable para el fondo
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: `calc(${theme.spacing(7)} + 1px)`,
  height: 'auto',
  marginTop: '80px',
  marginBottom: '20px',
  overflowX: 'hidden',
  backgroundColor: 'var(--background-color)', // Usando la variable para el fondo
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
  })
);

export default function NavbarLateral() {
  const [open, setOpen] = React.useState(false);
  const [selectedMenu, setSelectedMenu] = React.useState(null);
  const [menuState, setMenuState] = React.useState({
    publicaciones: false,
    usuarios: false,
    comentarios: false,
    paginas: false,
    ajustes: false,
  });

  const [isMobile, setIsMobile] = React.useState(false);

  const drawerRef = React.useRef(null); // Usamos un ref para el Drawer

  // Detectar el cambio de tamaño de la ventana y si es móvil
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // O ajustar a tu umbral de mobile
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Llamar al inicio para verificar el tamaño

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cerrar el Drawer si está abierto y se cambia a móvil
  React.useEffect(() => {
    if (isMobile && open) {
      setOpen(false);  // Cerrar automáticamente el Drawer cuando cambia a móvil
    }
  }, [isMobile]); // Este useEffect se ejecuta cada vez que cambia isMobile

  // Detectar clics fuera del Drawer y cerrar tanto el Drawer como los submenús
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target) && open) {
        setOpen(false); // Cerrar el Drawer si se hace clic fuera
        setMenuState({
          publicaciones: false,
          usuarios: false,
          comentarios: false,
          paginas: false,
          ajustes: false,
        }); // Cerrar todos los submenús
      }
    };

    if (open && !isMobile) {
      // Solo habilitar el detector de clics si el Drawer está abierto y estamos en escritorio
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Limpiar el evento al desmontar el componente
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open, isMobile]); // Asegurarse de que se ejecute cada vez que cambien las dependencias

  const handleDrawerToggle = () => {
    setOpen(!open);

    if (open) {
      // Cuando el Drawer se cierra, cerramos todos los submenús
      setMenuState({
        publicaciones: false,
        usuarios: false,
        comentarios: false,
        paginas: false,
        ajustes: false,
      });
    }
  };

  const toggleMenu = (menu) => {
    setMenuState((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu], // Alterna entre abierto y cerrado
    }));
  };

  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu);
    if (isMobile) {
      // En mobile, al seleccionar un submenú, cerramos todos los demás y alternamos el seleccionado
      setMenuState((prevState) => {
        const newState = {
          publicaciones: false,
          usuarios: false,
          comentarios: false,
          paginas: false,
          ajustes: false,
        };
        newState[menu] = !prevState[menu]; // Alterna el submenú
        return newState;
      });
    } else {
      // En escritorio, cierra todos los submenús y abre solo el seleccionado
      if (!open) {
        setOpen(true); // Abre el drawer si está cerrado
      }
      setMenuState((prevState) => {
        const newState = {
          publicaciones: false,
          usuarios: false,
          comentarios: false,
          paginas: false,
          ajustes: false,
        };
        newState[menu] = !prevState[menu]; // Alterna el submenú
        return newState;
      });
    }
  };

  const handleIconClick = (menu) => {
    if (isMobile) {
      // En mobile, al hacer clic sobre el icono de un menú, alternamos la visibilidad
      setMenuState((prevState) => {
        const newState = {
          publicaciones: false,
          usuarios: false,
          comentarios: false,
          paginas: false,
          ajustes: false,
        };
        newState[menu] = !prevState[menu]; // Alterna el submenú
        return newState;
      });
    } else {
      if (!open) {
        setOpen(true); // Abre el drawer si está cerrado
      }
      setMenuState((prevState) => {
        const newState = {
          publicaciones: false,
          usuarios: false,
          comentarios: false,
          paginas: false,
          ajustes: false,
        };
        newState[menu] = !prevState[menu]; // Alterna el submenú
        return newState;
      });
    }
  };

  return (
    <Drawer ref={drawerRef} variant="permanent" open={open}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: 0,
          height: '10px',
        }}
      >
        <IconButton onClick={handleDrawerToggle}>
          {open ? (
            <ChevronLeftIcon sx={{ color: 'var(--text-color)' }} />
          ) : (
            <ChevronRightIcon sx={{ color: 'var(--text-color)' }} />
          )}
        </IconButton>
      </Box>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            selected={selectedMenu === 'dashboard'}
            onClick={() => handleMenuSelect('dashboard')}
          >
            <ListItemIcon sx={{ color: 'var(--text-color)' }}>
              <DashboardIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Dashboard" sx={{ color: 'var(--text-color)' }} />}
          </ListItemButton>
        </ListItem>
        {/* Publicaciones */}
        <ListItem disablePadding>
          <ListItemButton
            selected={selectedMenu === 'publicaciones'}
            onClick={() => handleMenuSelect('publicaciones')}
          >
            <ListItemIcon sx={{ color: 'var(--text-color)' }}>
              <PostAddIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Publicaciones" sx={{ color: 'var(--text-color)' }} />}
          </ListItemButton>
        </ListItem>
        <Collapse in={menuState.publicaciones} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleMenuSelect('todas-publicaciones')}>
              {open ? (
                <ListItemText primary="Todas las publicaciones" sx={{ color: 'var(--text-color)' }} />
              ) : (
                <ListItemIcon sx={{ color: 'var(--text-color)' }}>
                  <PostAddIcon />
                </ListItemIcon>
              )}
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleMenuSelect('crear-publicacion')}>
              {open ? (
                <ListItemText primary="Crear nueva publicación" sx={{ color: 'var(--text-color)' }} />
              ) : (
                <ListItemIcon sx={{ color: 'var(--text-color)' }}>
                  <PostAddIcon />
                </ListItemIcon>
              )}
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleMenuSelect('categorias')}>
              {open ? (
                <ListItemText primary="Categorías" sx={{ color: 'var(--text-color)' }} />
              ) : (
                <ListItemIcon sx={{ color: 'var(--text-color)' }}>
                  <CategoryIcon />
                </ListItemIcon>
              )}
            </ListItemButton>
          </List>
        </Collapse>
        {/* Usuarios */}
        <ListItem disablePadding>
          <ListItemButton
            selected={selectedMenu === 'usuarios'}
            onClick={() => handleMenuSelect('usuarios')}
          >
            <ListItemIcon sx={{ color: 'var(--text-color)' }}>
              <PersonIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Usuarios" sx={{ color: 'var(--text-color)' }} />}
          </ListItemButton>
        </ListItem>
        <Collapse in={menuState.usuarios} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleMenuSelect('todos-usuarios')}>
              {open ? (
                <ListItemText primary="Todos los usuarios" sx={{ color: 'var(--text-color)' }} />
              ) : (
                <ListItemIcon sx={{ color: 'var(--text-color)' }}>
                  <PersonIcon />
                </ListItemIcon>
              )}
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleMenuSelect('nuevo-usuario')}>
              {open ? (
                <ListItemText primary="Agregar nuevo usuario" sx={{ color: 'var(--text-color)' }} />
              ) : (
                <ListItemIcon sx={{ color: 'var(--text-color)' }}>
                  <PersonIcon />
                </ListItemIcon>
              )}
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleMenuSelect('roles')}>
              {open ? (
                <ListItemText primary="Gestión de Roles" sx={{ color: 'var(--text-color)' }} />
              ) : (
                <ListItemIcon sx={{ color: 'var(--text-color)' }}>
                  <PersonIcon />
                </ListItemIcon>
              )}
            </ListItemButton>
          </List>
        </Collapse>
        {/* Estadísticas */}
        <ListItem disablePadding>
          <ListItemButton
            selected={selectedMenu === 'estadisticas'}
            onClick={() => handleMenuSelect('estadisticas')}
          >
            <ListItemIcon sx={{ color: 'var(--text-color)' }}>
              <AnalyticsIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Estadísticas" sx={{ color: 'var(--text-color)' }} />}
          </ListItemButton>
        </ListItem>
        {/* Comentarios */}
        <ListItem disablePadding>
          <ListItemButton
            selected={selectedMenu === 'comentarios'}
            onClick={() => handleMenuSelect('comentarios')}
          >
            <ListItemIcon sx={{ color: 'var(--text-color)' }}>
              <CommentIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Comentarios" sx={{ color: 'var(--text-color)' }} />}
          </ListItemButton>
        </ListItem>
        <Collapse in={menuState.comentarios} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleMenuSelect('todos-comentarios')}>
              {open ? (
                <ListItemText primary="Todos los comentarios" sx={{ color: 'var(--text-color)' }} />
              ) : (
                <ListItemIcon sx={{ color: 'var(--text-color)' }}>
                  <CommentIcon />
                </ListItemIcon>
              )}
            </ListItemButton>
          </List>
        </Collapse>
        {/* Páginas */}
        <ListItem disablePadding>
          <ListItemButton
            selected={selectedMenu === 'paginas'}
            onClick={() => handleMenuSelect('paginas')}
          >
            <ListItemIcon sx={{ color: 'var(--text-color)' }}>
              <PageviewIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Páginas" sx={{ color: 'var(--text-color)' }} />}
          </ListItemButton>
        </ListItem>
        <Collapse in={menuState.paginas} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleMenuSelect('todas-paginas')}>
              {open ? (
                <ListItemText primary="Todas las páginas" sx={{ color: 'var(--text-color)' }} />
              ) : (
                <ListItemIcon sx={{ color: 'var(--text-color)' }}>
                  <PageviewIcon />
                </ListItemIcon>
              )}
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleMenuSelect('crear-pagina')}>
              {open ? (
                <ListItemText primary="Crear nueva página" sx={{ color: 'var(--text-color)' }} />
              ) : (
                <ListItemIcon sx={{ color: 'var(--text-color)' }}>
                  <PageviewIcon />
                </ListItemIcon>
              )}
            </ListItemButton>
          </List>
        </Collapse>
        {/* Ajustes */}
        <ListItem disablePadding>
          <ListItemButton
            selected={selectedMenu === 'ajustes'}
            onClick={() => handleMenuSelect('ajustes')}
          >
            <ListItemIcon sx={{ color: 'var(--text-color)' }}>
              <SettingsIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Ajustes" sx={{ color: 'var(--text-color)' }} />}
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
