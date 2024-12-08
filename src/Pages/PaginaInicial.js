import { Link, Route, Routes, BrowserRouter } from "react-router-dom";

import PowerShell from './PowerShell.js'

function PaginaInicial() {
	return (
		<div>
			<h1>Bem-vindo ao Michael Silva Tech!</h1>
			<p>
				Este é um site dedicado a tecnologia para pessoas com deficiência visual.
				Aqui você encontrará dicas, tutoriais de programação e conteúdos sobre
				acessibilidade digital para tornar o aprendizado mais inclusivo e eficaz.
			</p>
			<div>
				<h2> Vídeo mais recente</h2>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/tEhtRjrKBQQ?si=tuJtd9vT0QaJ7Nwe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
			</div>

			<div>
				<h2> Power Shell</h2>
				<p>Aprenda a trabalhar com o Windows Power Shell para tornar a programação mais eficiente e robusta, com o leitor de tela NVDA.</p>
				<Link to="/artigos/powershell">PowerShell</Link>
			</div>

<div>
				<h2>Dicas TalkBack e Android</h2>
				<p>Aprenda a utilizar ao máximo o TalkBack no Android para tornar sua experiência com dispositivos móveis mais acessível. Nesta playlist, você encontrará dicas e tutoriais para personalizar e otimizar o TalkBack para suas necessidades. <a href="https://www.youtube.com/watch?v=tEhtRjrKBQQ&list=PLUUzL2T6zbBZA7DLEqSUG53E5k0G-tCMY">Acesse a playlist completa aqui.</a></p>
			</div>
		</div>
	);
}

export default PaginaInicial;