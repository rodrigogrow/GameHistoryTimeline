

(function(){

	var content_key = 'games_1950';
	var content = {};

	content = {

		'decade': '1950',
		'games': [
			{
		        'type': 'game', // game or console
		        'name': 'NIMROD',
		        'authors': ['Edward Uhler Condon'],
		        'company': ['Ferranti'],  
		        'year': '1951',
		        'date': '05-05-1951', // Day, Month, Year
		        'headline': 'First Electronic Game',
		        'resume': [
		            'Usando um painel de luzes para a sua exibição, ',
					'ele foi projetado exclusivamente para jogar o jogo de Nim. ',
					'Este foi o primeiro exemplo de um computador digital projetado ',
					'especificamente para jogar um jogo. ',
					'O criador do NIMATRON foi Edward Uhler Condon.'
		        ].join(''),
		        'full_text': [
		            'Em 5 de maio de 1951, o computador NIMROD, criado pela Ferranti, ',
					'foi apresentado no Festival da Grã-Bretanha. ',
		            'A empresa era focada em segurança eletrônica e em seu tempo livre',
		            'Edward Uhler Condon utilizou a ferramentas disponíveis e criou ',
		            'o NIMATRON cujo foco era simular o jogo antigo NIM, antes jogado com pedras. ',
		            'As pedras foram trocadas por um painel com luzes e o controle era um totem. ',
		            'O objetivo do jogo era deixar o adversário, nesse caso o computador, ', 
					'com a última peça. O jogador poderia remover quantas peças quisesse ',
					'de uma linha, por vez. Só que em 90% das vezes o computador vencia.'
		        ].join(''),
		        'main_img': 'main.png',
		        'images': ['img1.png', 'img2.png', 'img3.png'],
				'video_gameplay': [],
				'demos': [],
		        'references': [
		        			'http://en.wikipedia.org/wiki/Nimrod_(computing)', 
		        			'http://www.wired.com/2010/06/replay/', 
		        			'http://www.historyofinformation.com/expanded.php?id=4471']
			},
			{
		        'name': 'OxO - Naughts and Crosses',
		        'authors': ['S. Douglas', 'Alexander'],
		        'year': '1952',
		        'headline': 'OxO - O primeiro video game.',
		        'resume': [
		            'Foi em 1952 que surgiu o primeiro vídeo game, do jeito que deve ser, ',
		            'gráficos digitais exibidos em um monitor de tubo de raios catódicos., ',
		            'OXO, Noughts and Crosses foi desenvolvido por Alexander S. Douglas, ',
		            'como parte da sua tese de doutorado Interação Homem-Computador, ',
		            'O jogo tinha como controles um telefone analógico, onde cada número',
		            'discado representava o quadro onde seria feito o movimento.'
		        ].join(''),
		        'full_text': [
		            'Lorem ipsum dolor sit amet, ut viverra vestibulum odio, ',
		            'aliquam in massa, velit rutrum pede ipsum mauris duis, ',
		            'congue massa sem elit, integer risus. Faucibus in lacus, ',
		            'ligula ornare nibh, elit suspendisse tortor sed volutpat, ',
		            'etiam tempus wisi semper montes odio, lorem vitae vel eu ',
		            'convallis. Volutpat blandit egestas et libero eu per, venenatis ',
		            'aenean, proin quis aliquam viverra potenti vestibulum auctor, ',
		            'non amet tellus sodales. In ullamco tellus risus nisl morbi amet. ',
		            'Vel quisque nunc in placerat. Vitae id urna, nulla suspendisse, ',
		            'molestie sodales ac nisl nulla, tempus occaecati. Sodales lectus, ',
		            'mauris dis lectus amet, nascetur ipsum, hac suspendisse blandit eros.'
		        ].join(''),
		        'thumbnail': '',
		        'main_img': '',
		        'images': [],
		        'video_gameplay': [],
		        'demos': [],
		        'references': []
			},
			{
				'type': 'game',
				'name': 'Tennis for Two',
				'authors': ['William Higinbotham'],
				'company': [],  
				'year': '1958',
				'date': '18-10-1958',
				'headline': '',
				'resume': [
					'Criado para entreter os visitantes da feira anual de 1958, ',
					'mas já tinha em mente agregar valor a comunidade cientifica ',
					'através do entretenimento pessoal. Rodava em um Donner 30, ',
					'computador focado em simular vetores e sofrer com a ação do ',
					'vento e da gravidade. Em sua primeira versão, continua um ',
					'osciloscópio como tela de 12,7x12,7 cm, além de 4 computadores',
					'adicionais que amplificavam os seis sensores imbutidos, afim de ',
					'simulara a moção da bola. A jogabilidade era feita através de dois ',
					'controles, os controles eram iniciados a partir do momento em que ',
					'bola entrava em seus respectivos campos da quadra.'
				].join(''),
				'full_text': '',
				'thumbnail': '',
				'main_img': '',
				'images': [],
				'video_gameplay': [],
				'demos': [],
				'references': []
			}
		]
	}

	if (!window._content) {
		_content = {};
	}

	window._content[content_key] = content;


})()

