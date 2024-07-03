import React, { Component } from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home.js";
/* Componente Pagina Inicial */
const PaginaInicial = () => (
  <div>
    <h2>Página Inicial</h2>
  </div>
);

/* Componente Categoria */
const categoria= () => (
  <div>
    <h2>Categoria</h2>
  </div>
);

/* Componente de Artigos */
const artigos = () => (
  <div>
    <h2>Artigos</h2>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>

      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Pagina inicial</Link>
          </li>
        </ul>
      </nav>

      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>

  );
}