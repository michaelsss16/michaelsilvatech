import ClipBoard from "../components/ClipBoard.js"

function PowerShell() {
	return (
		<article>
			<h1>PowerShell: utilização com o leitor de tela NVDA</h1>
			<p>Neste artigo, você aprenderá sobre o que é o PowerShell, como utilizá-lo com o leitor de tela NVDA, de forma
				totalmente acessível, além dos seus primeiros comandos para dominar essa ferramenta.</p>

			<div>
				<h2 id="playlist-title">Conteúdo disponível em vídeo</h2>
				<p>Você pode acessar o conteúdo desta página também através da playlist abaixo, disponível no YouTube.</p>
				<iframe
					width="280"
					height="160"
					src="https://www.youtube.com/embed/videoseries?si=ZPTfoh4JazyNbOR3&amp;controls=0&amp;list=PLUUzL2T6zbBaL-Galmk4p16v4WqzJvhmn"
					title="Tutoriais Power Shell"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
					aria-labelledby="playlist-title">
				</iframe>
			</div>

			<h2>Introdução</h2>
			<p>Segundo a definição da própria <a href="https://learn.microsoft.com/pt-br/powershell/scripting/overview?view=powershell-7.3">Microsoft</a>,
				o PowerShell é “uma solução de automação de tarefas multiplataforma que consiste em um shell de linha de
				comando, em uma linguagem de script e uma estrutura de gerenciamento de configuração.” </p>
			<p>E você deve estar se perguntando agora: o que é um Shell, no final das contas?</p>
			<p>“Em computação, um shell (em português, casca ou concha) é uma interface de usuário para acessar os serviços
				de um sistema operacional”. <a href="https://pt.wikipedia.org/wiki/Shell_(computa%C3%A7%C3%A3o)#:~:text=Na%20inform%C3%A1tica%20o%20Shell%2C%20de,o%20sistema%20operacional%20(kernel).">Wikipedia</a></p>
			<p>Com o PowerShell, é possível realizar todas as tarefas comumente realizadas em um CLI (Command Line
				Interface), que são os shells de texto, como navegação e manipulação de diretórios, definição de
				configurações e execução de scripts, bem como quaisquer outras manipulações do sistema operacional.</p>
			<p>Com o CLI desenvolvido pela Microsoft, temos diversas funcionalidades como armazenamento de histórico de
				comandos, autocomplete e, além de tudo, acessibilidade para usuários de leitores de tela, como o NVDA.</p>
			<p>O Windows PowerShell não precisa ser instalado no computador, uma vez que faz parte dos aplicativos
				instalados juntamente com o Windows 10. Adicionalmente, pode ser instalado o Windows Terminal, que adiciona
				algumas funcionalidades durante o uso do PowerShell, ponto que será melhor abordado em um capítulo
				posterior. Além disso, não se limita ao Windows, pois pode ser instalado nos sistemas operacionais Mac e
				Linux.</p>

			<h2>A interface</h2>
			<p>Para inicializar o PowerShell, basta pressionar a tecla Windows, ou as teclas Ctrl+Esc, e digitar as
				iniciais do programa. Assim que a lista de correspondências for carregada, basta clicar no referente ao
				desejado.</p>
			<p>Assim que o programa é iniciado, uma janela será aberta, indicando as informações iniciais, além do diretório
				padrão, que é referente à pasta do usuário atual.</p>
			<p>Observação: utilizarei aqui as palavras pasta e diretório como sinônimos.</p>
			<p>Os diretórios nada mais são que os locais onde agrupamos os arquivos, de modo a deixá-los organizados na
				memória do computador.</p>
			<p>De modo ilustrativo, o PowerShell é uma janela de fundo preto com a lista de comandos executados em
				tonalidade branca, por padrão. Como todo aplicativo do Windows, possui a barra de sistema, acessada pelo
				atalho Alt + espaço, contendo as opções de minimizar, ampliar e fechar a janela, além de algumas adicionais,
				apresentando propriedades específicas do programa.</p>
			<p>Dica: manter a janela ampliada pode facilitar a leitura do histórico de comandos, já que haverá um menor
				número de quebras de linhas e, consequentemente, menor número de interrupções na leitura ou necessidade de
				interação na navegação.</p>
			<p>Ao se abrir o PowerShell, as seguintes informações serão lidas:</p>
			<code>
				Windows PowerShell
				Copyright (C) Microsoft Corporation. Todos os direitos reservados.

				Experimente a nova plataforma cruzada PowerShell https://aka.ms/pscore6

				Aviso: o PowerShell detectou que você talvez esteja usando um leitor de tela e tenha desabilitado o
				PSReadLine para fins de compatibilidade. Se desejar reabilitá-lo, execute 'Import-Module PSReadLine'.
				<br />
				PS C:\Users\Windows10&gt;
			</code>

			<p>O primeiro bloco de texto apresenta as informações de inicialização do programa e, em especial, a última
				linha lida se refere ao diretório atual, que é o padrão para o usuário ativo no Windows.</p>
			<p>Para obter todos os detalhes, é imprescindível, na maioria dos casos, o uso dos sinais de pontuação,
				utilizados para delimitar as pastas, textos e métodos. Para isso, é possível utilizar o comando NVDA + p,
				alternando a granularidade da leitura de pontuações.</p>
			<p>Toda ação executada se limita à linha de comando, que pode ser lida pressionando a tecla seta para baixo. O
				diretório atual será lido, seguido pelo texto que se encontra na linha de comando. A partir daqui, a
				manipulação do texto segue os princípios básicos definidos pelo leitor de tela.</p>
			<p>Dica: Ao utilizar o comando de deleção, por uso do Backspace ou Delete, juntamente com a tecla Ctrl, para atingir
				palavras, espaços serão considerados como palavras individuais. Ou seja, ao escrever uma palavra seguida de
				um espaço, para excluí-la será necessário realizar o comando Ctrl + Backspace duas vezes.</p>

			<h2>Histórico de comandos</h2>
			<p>Como mencionado anteriormente, quando pressionada a tecla direcional para baixo, o leitor apresentará as
				informações contidas na linha de comando. Com as setas laterais, direita e esquerda, será possível navegar
				pelo texto inserido. Todavia, uma vez pressionada a seta direcional para cima, obteremos acesso a todo
				histórico de comandos utilizados durante a execução do programa.</p>
			<p>A cada novo pressionamento de tecla “seta para cima”, selecionaremos a entrada anterior utilizada e, com a
				“seta para baixo” selecionamos a entrada posterior. É preciso notar, entretanto, que uma vez pressionada a
				tecla para acesso ao histórico, mesmo pressionando a tecla para baixo até o final da lista, não
				conseguiremos retornar para o estado da linha de comando vazia. Ou seja, para escrever um novo comando desde
				o início, será preciso deletar o texto correspondente ao apresentado pelo histórico.</p>
			<p>É permitido, ademais, o reaproveitamento dos comandos do histórico, realizando alterações no texto. Para
				tanto, basta navegar com as setas direcionais até o comando em que é necessário fazer alguma modificação e
				utilizar a edição tradicional de texto para modificar o conteúdo necessário.</p>

			<h2>Navegando por diretórios</h2>
			<p>O primeiro comando apresentado no artigo e que, provavelmente, será o mais utilizado por você durante o uso
				do PowerShell, é o “cd”, ou change directory (alterar diretório).</p>
			<p>O nome do comando é autoexplicativo. O “cd” é utilizado para acessar um diretório mediante inserção de seu
				caminho ou nome, a partir do diretório atual.</p>
			<p>Como exemplo, se eu estiver no diretório do meu usuário:</p>
			<pre>PS C:\Users\Windows10&gt;</pre>
			<p>E utilizar o comando “cd documentos”, acessarei a minha pasta de documentos. O meu caminho atual será, então:</p>
			<pre>PS C:\Users\Windows10\documentos&gt;</pre>
			<p>A partir desse ponto, qualquer comando inserido será atuante na pasta em que estou localizado, ou seja, na
				pasta de documentos do meu usuário.</p>
			<p>É preciso, entretanto, utilizar a nomenclatura correta da pasta em que quero me locomover. Caso contrário, um
				erro será lido, informando que o diretório não foi encontrado. É importante dizer que existem certas regras
				para a adição do nome da pasta:</p>
			<ul>
				<li>Letras maiúsculas e minúsculas são consideradas;</li>
				<li>Acentos ortográficos, se presentes, devem ser adicionados;</li>
				<li>Se a pasta de destino conter espaços, deve ser inserida entre aspas duplas, ou seja, a pasta (Textos
					Faculdade) deve ser acessada com o comando (cd “Textos Faculdade”).</li>
			</ul>
			<p>Para ajudar com a tarefa de escrever os nomes da forma correta, é possível utilizar o autocomplete, que
				completa a escrita, se uma correspondência for encontrada para o texto iniciado. Para tanto, basta utilizar a
				tecla Tab, localizada acima da tecla Caps Lock/NVDA.</p>
			<p>Com o pressionar da tecla “Tab” vamos para a próxima sugestão e, com o pressionar do comando “Shift + Tab”,
				retornamos para a sugestão anterior.</p>

			<h2>Acessando informações do console</h2>
			<p>Para obtermos as informações de retorno dos comandos executados, é preciso utilizar a navegação por
				exploração de texto. Para tanto, para os usuários de teclado desktop, basta utilizar o teclado numérico para
				revisar as linhas presentes na interface.</p>
			<p>De modo geral, com o NumLock desativado, as teclas 7, 8 e 9 atuam sobre as linhas, 4, 5 e 6 nas palavras e,
				por fim, 1, 2 e 3 sob as letras do texto. Na ordem que são citadas, a leitura é feita do elemento anterior,
				atual e posterior.</p>
			<p>Para complementar o estudo, e para os usuários de teclado de notebook, é possível revisar todos os comandos
				listados na seção 5.5 do guia de referência do NVDA. Para acessá-lo, entre no menu no NVDA (NVDA + N),
				expanda o menu “Ajuda” e selecione a opção “Guia do usuário”. A seção 5.5 é referente à navegação de
				exploração de texto e pode ser acessada mais rapidamente com a tecla de atalho ‘H’, para navegar entre os
				títulos da página, ou por meio da linha numérica, acessando o título de nível 2, referente ao quinto
				capítulo, e, posteriormente, a quinta seção, de título de nível 3.</p>

			<h3>Copiando informações</h3>
			<p>Dada a necessidade do uso do método de exploração de texto para acessar as informações apresentadas pelo
				PowerShell, não é possível selecionar o texto com a tecla shift, com posterior comando CTRL + C, para
				copiar as informações, como realizado em outros editores de texto tradicionais. Para tanto, será preciso
				realizar a seleção e cópia por meio do método de exploração.</p>
			<p>O procedimento é bem simples. Para selecionar o texto, é preciso se locomover até o início do texto ao qual
				queremos copiar, pressionar a tecla NVDA junto com a tecla de função F9. O NVDA informará que o início da
				selecção foi marcado.</p>
			<p>Nos locomovemos para o final da seleção desejada e pressionamos o comando NVDA + F9, sendo que a tecla F9
				para o término da seleção pode ser reconfigurada de acordo com as preferências do usuário.</p>

			<h2>Comando winget</h2>
			<p>O <strong>winget</strong> é uma ferramenta de linha de comando do Windows que permite instalar, atualizar e gerenciar pacotes de aplicativos diretamente do terminal.</p>

			<h3 id="verificar-instalacao">Como verificar se o winget está instalado ou fazer a instalação</h3>
			<p>Para verificar se o <strong>winget</strong> está instalado no seu sistema, execute o seguinte comando:</p>
			<pre><ClipBoard>winget --version</ClipBoard></pre>
			<p>Se o comando retornar a versão do <strong>winget</strong>, significa que ele está instalado. Caso contrário, você pode instalá-lo através da Microsoft Store, atualizando o <strong>App Installer</strong>.</p>

			<h3 id="instalar-programa">Como instalar um novo programa com o winget</h3>
			<p>Para instalar um novo programa, utilize o seguinte comando:</p>
			<pre><ClipBoard>winget install nome-do-programa</ClipBoard></pre>
			<p>Substitua <em>nome-do-programa</em> pelo nome do aplicativo desejado. Por exemplo, para instalar o navegador Firefox:</p>
			<pre>winget install Mozilla.Firefox</pre>
			<p>Se você não souber o nome exato do programa, pode usar o comando <strong>winget search</strong> para procurar o nome ou o ID do aplicativo. Exemplo:</p>
			<pre><ClipBoard>winget search Firefox</ClipBoard></pre>
			<p>O comando acima vai listar as opções disponíveis, incluindo o nome e o ID. Ambos podem ser usados para a instalação, como:</p>
			<pre>winget install Mozilla.Firefox</pre>
			<p>Ou, se preferir usar o ID encontrado:</p>
			<pre><ClipBoard>winget install &#123;ID-do-programa&#125;</ClipBoard></pre>

			<p>O <strong>winget</strong> buscará automaticamente a versão mais recente disponível e instalará o aplicativo.</p>

			<h3 id="atualizar-aplicativos">Como atualizar todos os aplicativos com o winget</h3>
			<p>Para atualizar todos os aplicativos instalados via <strong>winget</strong>, basta executar o comando:</p>
			<pre><ClipBoard>winget upgrade --all</ClipBoard></pre>
			<p>Isso verificará se há atualizações disponíveis para os aplicativos gerenciados pelo <strong>winget</strong> e as aplicará automaticamente.</p>
			<p>Para não precisar de aceitar cada nova atualização, basta executar o PowerShell em modo administrador. Basta buscar pelo aplicativo, clicar no botão de menu de opções no teclado e selecionar executar como administrador. </p>

			<h2>Conclusão</h2>
			<p>Ao longo desse capítulo, vimos os passos essenciais para a utilização do PowerShell com NVDA. Muitos outros
				comandos e funcionalidades do programa estão à disposição do usuário e serão apresentados em um segundo
				artigo.</p>
		</article>
	);
}

export default PowerShell;