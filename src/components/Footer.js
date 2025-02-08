import { AppBar, Toolbar, Typography, Link, Container } from "@mui/material";

function Footer() {
  return (
    <AppBar 
      position="static" 
      component="footer" 
      sx={{ marginTop: "auto", backgroundColor: "primary.dark" }} 
      aria-label="Rodapé do site"
    >
      <Container maxWidth="md">
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} Michael Silva Tech. Todos os direitos reservados.
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
