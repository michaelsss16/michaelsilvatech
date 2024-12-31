# Tarefas de desenvolvimento 

-  Adição de página de erro not found  com redirecionamento para página inicial 
-    Adicionar e configurar barra de navegação 
-   Rotas em componente separado 
-   Definição de footer 
-   Alterar descrição no repositório 
-   Utilizar bootstrap: 
-   
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Michael Silva Tech: tecnologia, dicas e tutoriais de desenvolvimento web e programação." />
    <meta property="og:title" content="Michael Silva Tech" />
    <meta property="og:description" content="Michael Silva Tech: tecnologia, dicas e tutoriais de desenvolvimento web e programação." />
    <meta property="og:image" content="%PUBLIC_URL%/logo192.png" />
    <meta property="og:type" content="website" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>Michael Silva Tech</title>

    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-KyZXEAg3QhqLMpG8r+Knujsl5/0U4EERHj+21+oc+tFDFrBxKsDz3D7tvdCFfiFZ"
      crossorigin="anonymous"
    />

    <!-- Bootstrap Icons (opcional) -->
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css"
      rel="stylesheet"
    />
  </head>
  <body class="bg-light">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Michael Silva Tech</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#">Início</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sobre</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container py-5">
      <div class="text-center mb-5">
        <h1 class="display-4">Bem-vindo ao Michael Silva Tech</h1>
        <p class="lead">Tecnologia, dicas e tutoriais de desenvolvimento web e programação.</p>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Artigos</h5>
              <p class="card-text">Explore nossos artigos e tutoriais sobre tecnologia.</p>
              <a href="#" class="btn btn-primary">Leia mais</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Vídeos</h5>
              <p class="card-text">Assista aos nossos vídeos com dicas práticas.</p>
              <a href="#" class="btn btn-primary">Veja mais</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Comunidade</h5>
              <p class="card-text">Participe da nossa comunidade e colabore!</p>
              <a href="#" class="btn btn-primary">Saiba mais</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-dark text-white py-4">
      <div class="container text-center">
        <p class="mb-0">© 2024 Michael Silva Tech. Todos os direitos reservados.</p>
      </div>
    </footer>

    <!-- Bootstrap JS -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ENjdO4Dr2bkBIFxQpeo2AcnQy7WjLwQ2Lr59N8QeF7nN5K+8X+LvpVjIOfQPYKsg"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
