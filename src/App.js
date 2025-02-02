import React from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";

import PaginaInicial from './Pages/PaginaInicial.js'
import PowerShell from './Pages/PowerShell.js'
import Artigos from './Pages/Artigos.js'

export default function App() {
	return (
		<BrowserRouter>
			<nav className="navbar navbar-light">
				<ul className="nav navbar-nav">
					<li>
						<Link to="/michaelsilvatech">Página Inicial</Link>
					</li>
					<li>
						<Link to="/michaelsilvatech/artigos">Artigos</Link>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path="/michaelsilvatech" element={<PaginaInicial />} />
				<Route path="/michaelsilvatech/artigos" element={<Artigos />} />
				<Route path="/michaelsilvatech/artigos/powershell" element={<PowerShell />} />
			</Routes>
		</BrowserRouter>
	);
}
