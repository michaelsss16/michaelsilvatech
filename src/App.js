import React from "react";
import { Routes, Route, HashRouter, Link } from "react-router-dom";

import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import PaginaInicial from './Pages/PaginaInicial.js'
import PowerShell from './Pages/PowerShell.js'
import Artigos from './Pages/Artigos.js'
import NotFound from './Pages/NotFound.js'
import Sobre from './Pages/Sobre.js'

export default function App() {
	return (
		<HashRouter>

			<NavBar />
			<main>
				<Routes>
					<Route path="/" element={<PaginaInicial />} />
					<Route path="/artigos" element={<Artigos />} />
					<Route path="/artigos/powershell" element={<PowerShell />} />
					<Route path="/sobre" element={<Sobre />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</HashRouter>
	);
}
