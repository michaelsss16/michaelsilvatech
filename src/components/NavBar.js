import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Constantes from "../Util/Constantes.js";

function NavBar() {
  return (
    <AppBar position="static" component="nav" aria-label="Barra de navegação">
      <Toolbar>
        <Typography 
          variant="h6" 
          sx={{ flexGrow: 1 }} 
          aria-label="Michael Silva Tech"
        >
          Michael Silva Tech
        </Typography>
        <Button 
          color="inherit" 
          component={Link} 
          to="/" 
          aria-label="Ir para a página inicial"
        >
          Página Inicial
        </Button>
        <Button 
          color="inherit" 
          component={Link} 
          to={Constantes.RotaArtigos} 
          aria-label="Ir para a seção de artigos"
        >
          Artigos
        </Button>
        <Button 
          color="inherit" 
          component={Link} 
          to={Constantes.RotaSobre} 
          aria-label="Ir para sobre"
        >
          Sobre
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
