

(function(){

	var content_key = 'games_1970';
	var content = {};

	content = {

		'decade': '1970',
		'games': [
			{
				'type': 'game', // game or console
				'name': 'Pong',
				'authors': ['Allan Alcorn'],
				'company': ['Atari'],  
				'year': '1972',
				'date': '1972',
				'headline': 'First Game about space',
				'resume': [
					'Um dos primeiros videogames chamava-se Pong e representava um jogo de tênis a duas ',
					'dimensões e a preto e branco. O objetivo do jogo era derrotar os adversários obtendo uma ',
					'pontuação superior a eles. '
				 ].join(''),
				'full_text': [
				  	'Lançado em 1972 pela Atari, este foi sem dúvida o jogo que mais contribuiu para a explosão, ',
					'da indústria dos videogames e foi também o primeiro jogo lucrativo da história dos ',
					'games. Foi criado por Allan Alcorn. ',
					'Alcorn conseguiu criar características inovadoras no Pong, tais como a variação do ângulo da ',
					'bola dependendo da parte com esta era devolvida, o aumento gradual da velocidade do jogo e ',
					'as variantes de sons do jogo.'
				 ].join(''),
				'thumbnail': '',
		        'main_img': 'pong_img_1.png', 
				'images': ['pong_img_1.png'],
				'video_gameplay': [],
				'demos': [],
				'references': ['http://origemdascoisas.com/a-origem-do-pong']
			},
			{
				'type': 'game',
				'name': 'Lunar Lander',
				'authors': ['Atari Inc'],
				'company': ['Atari'],
				'year': '1979',
				'date': '1979',
				'headline': 'First Game about space',
				'resume': [
					'Em 1969 Lunar Lander começou como um jogo de computador baseado em texto para o PDP-8, ',
					'Já em 1973 o jogo era executado para o GT40 que tinha como design o Jack Burness, ',
					'Na Versao da ATARI é usado um monitor de vetor para exibir gráficos vetorias, ',
					'apresentou dois conceitos inovadores em jogos de arcade:, ',
					'Um controle de aceleração proporcional que permitiu sincronismo de defesa de combustivel, ',
					'Um sistema de "combustível para o seu dinheiro", que permitiu o jogador gastar dinheiro , ',
					'para continuar o seu jogo e comprar mais combustível no jogo., ',
				].join(''),
				'full_text': [
					'Lançado em 1979 pela Atari, Lunar Lander é o primeiro jogo com gráficos vetoriais,',
					'o jogador controla um módulo lunar e deve pousar na superfície do satélite.Para isso,',
					'precisa equilibrar o consumo de combustível, empuxo, gravidade e impacto com o solo.',
					'O terreno é muito irregular e tem apenas algumas áreas planas apropriadas para o pouso.',
					'Estas áreas são destacadas com um multiplicador de bônus a piscar,',
					'o que é mais elevado para áreas menores.',
					'Se o jogador aterra com sucesso do módulo ele ou ela é premiado com pontos baseado',
					'na eficiência do pouso e a dificuldade do local de pouso.Se ele ou ela cai,',
					'os pontos são concedidos com base na gravidade do acidente e,por vezes,',
					'o jogador recebe uma penalidade de combustível.Em ambos os casos, o jogo começa outra rodada,',
					'com um conjunto diferente de terreno e combustível restante do jogador.',
					'O jogo termina quando o jogador fica sem combustível ou erra ao posar na superfície da lua.',
					'Para pilotar o lander, o jogador deve contrariar a gravidade usando propulsores de popa da sonda,',
					'para retardar sua descida.O jogador usa um regulador de pressão proporcional,',
					'para ajustar a força dos propulsores,um novo recurso no momento do lançamento do jogo.',
					'Cada ação consome combustível limitada do ofício,e quando o combustível se esgota,',
					' o lander pára de responder às ações do jogador.O jogador pode,opcionalmente,comprar mais combustível,',
					'a versão caseira de Lunar Lander foi lançado pela International Adventure em 1981.',
					'Pouco depois, Commodore lançou o muito semelhante Jupiter Lander para o computador VIC-20.',
				].join(''),
				'thumbnail': '',
				'main_img': 'Lunar_Lander.png',
				'images': [],
				'video_gameplay': [],
				'demos': [],
				'references': ["http://en.wikipedia.org/wiki/Lunar_Lander_%28video_game_series%29", "http://www.iluminerds.com.br/"]
		
			}
		]
	}

	if (!window._content) {
		_content = {};
	}

	window._content[content_key] = content;


})()

