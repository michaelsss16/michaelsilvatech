import escalaMaiorLento from '../audios/em80.mp3';
import escalaMaiorNormal from '../audios/em120.mp3';
import escalaMaiorRapido from '../audios/em200.mp3';

function Aquecimentos() {
	return (
		<div>
			<h2>Aquecimento vocal</h2>

			<h3>Porque fazer o aquecimento vocal?</h3>
			<p>O aquecimento vocal é uma etapa essencial para qualquer cantor, pois prepara a voz para o uso;</p>
			<p>Os exercícios de aquecimento vocal ajudam a melhorar a flexibilidade, a resistência e a potência vocal.</p>

			<h3>Instruções: </h3>
			<ul>
				<li> Duração de dez minutos; </li>
				<li> Vibração de lábios, lingua, hamming ou utilização de vogais.</li>
			</ul>

			<details>
				<summary><h3> Escala maior</h3> </summary>

				<h4> Lento</h4>
				<audio controls src={escalaMaiorLento} type="audio/mp3"></audio>

				<h4> Normal</h4>
				<audio controls src={escalaMaiorNormal} type="audio/mp3"></audio>

				<h4> Rápido</h4>
				<audio controls src={escalaMaiorRapido} type="audio/mp3"></audio>
			</details>
		</div>
	);
}

export default Aquecimentos;