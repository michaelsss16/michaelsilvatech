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
						<Link to="/artigos">Artigos</Link>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path="/michaelsilvatech" element={<PaginaInicial />} />
				<Route path="/artigos" element={<Artigos />} />
				<Route path="/artigos/powershell" element={<PowerShell />} />
			</Routes>
		</BrowserRouter>
	);
}
