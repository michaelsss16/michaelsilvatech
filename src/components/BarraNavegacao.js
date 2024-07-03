import React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const BarraNavegacao = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Curso de canto</Typography>

        <div style={{ marginLeft: 'auto' }}>
          <Button variant="outlined">Botão de ação</Button>
          <IconButton onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-app"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)} // Controla a visibilidade do menu
            onClose={handleMenuClose}
            style={{ // Estiliza o Menu para mostrar/ocultar
              display: Boolean(anchorEl) ? 'block' : 'none',
            }}
          >
            <MenuItem onClick={handleMenuClose}>Página 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Página 2</MenuItem>
            <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default BarraNavegacao;
