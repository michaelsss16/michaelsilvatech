import { Route, Link } from "react-router-dom";

function Artigos() {
	return (
		<div>

<h1>Artigos</h1>
<p>Explore artigos sobre acessibilidade e tecnologia. Aprenda como tornar o mundo digital mais inclusivo!</p>

<ol>
		<li>
		  <h2>Power shell: Guia Completo com NVDA</h2>
		  <p>Aprenda a trabalhar com o windows power shell de forma acessível com o leitor de tela NVDA.</p>
		  <Link to="/artigos/powershell"> Leia mais</Link>
		</li>
	  </ol>
		</div>
	);
}

export default Artigos;