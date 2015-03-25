

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
					'O criador do NIMATRON foi Edward Uhler Condon.',
					'A ideia do jogo era simples e já existia fora do mundo',
					'tecnológico. O NIMROD usava painéis de luzes para simular',
					'as peças usadas no já conhecido jogo Nim'
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
					'de uma linha, por vez. Só que em 90% das vezes o computador vencia.',
					'O jogo fez um sucesso enorme nas feiras em que foi exposto, fazendo',
					'com que muitas pessoas se aventurassem a jogá-lo. Em algumas exposições,',
					'até pessoas importantes como embaixadores jogaram o jogo.',
					'Em Berlim, as pessoas esquecerma da cerveja que estava sendo distribuída',
					'gratuitamente no local para concentrar a atenção na exposição do jogo'
        ].join(''),
        'thumbnail': 'thumbnail_example.png',
        'main_img': {'name': 'main.png', 'caption': "description"},
        'images': [
            {'name': 'img1.png', 'caption': "Máquina completa"},
            {'name': 'img2.png', 'caption': "Apresentação do jogo feita no Festival da Grã-Bretanha"},
            {'name': 'img3.png', 'caption': "Painel de jogo"}
        ],
        'video_gameplay': [
            {'url': 'http://www.youtu.be/yJZlozoQ4jI', 'caption': "Gameplay Nimrod", 'type': "youtube"} // type: youtube or vimeo
        ],
        'demos': [
            {'url': 'http://www.archimedes-lab.org/game_nim/play_nim_game.html', 'caption': "Jogar agora"}
        ],
        'references': [
            {'url': 'http://en.wikipedia.org/wiki/Nimrod_(computing)', 'caption': "Wikipédia"},
            {'url': 'http://www.wired.com/2010/06/replay/', 'caption': "Wired"},
            {'url': 'http://www.historyofinformation.com/expanded.php?id=4471', 'caption': "History of Information"}
        ]
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

