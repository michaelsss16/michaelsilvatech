import React from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";

import PaginaInicial from './Pages/PaginaInicial.js'
import PowerShell from './Pages/PowerShell.js'

const Categoria = () => (
  <div>
    <h2>Categorias</h2>
    <p>Explore diferentes categorias de tutoriais e dicas, como:</p>
    <ul>
      <li>Programação Básica</li>
      <li>Uso de Leitores de Tela</li>
      <li>Ferramentas de Desenvolvimento Acessíveis</li>
    </ul>
  </div>
);

const Artigos = () => (
  <div>
    <h2>Artigos</h2>
    <p>Leia artigos e notícias sobre tecnologia e acessibilidade.</p>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/michaelsilvatech">Página Inicial</Link>
          </li>
          <li>
            <Link to="/categoria">Categorias</Link>
          </li>
          <li>
            <Link to="/artigos">Artigos</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/michaelsilvatech" element={<PaginaInicial />} />
        <Route path="/categoria" element={<Categoria />} />

        <Route path="/artigos" element={<Artigos />} />
        <Route path="/artigos/powershell" element={<PowerShell />} />
      </Routes>
    </BrowserRouter>
  );
}
