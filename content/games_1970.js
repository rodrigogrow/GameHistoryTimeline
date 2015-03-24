

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
			    'date': '01-11-1972', // Day, Month, Year
			    'headline': 'Primeiro videogame lucrativo da História',
			    'resume': [
			        'Um dos primeiros videogames chamava-se Pong e representava um jogo',
			        'de tênis para dois jogadores em uma televisão preto e branco. O objetivo ',
			        'era derrotar os adversários obtendo uma pontuação superior a eles.',
			    ].join(''),
			    'full_text': [
			        'Lançado em 1972 pela Atari, este foi sem dúvida o jogo que mais contribuiu',
			        'para a explosão da indústria dos videogames e foi também o primeiro',
			        'jogo lucrativo da história dos games. A sua criação deve-se a Allan',
			        'Alcorn. Allan desenvolveu características inovadoras para o Pong,',
			        'tais como a variação do ângulo da bola dependendo da parte como esta',
			        'era devolvida; O aumento gradual da velocidade do jogo e as variações',
			        'de sons. Para construir o protótipo e como necessitava de espaço para',
			        'os componentes, Alcorn comprou uma televisão Hitachi preto e branco ',
			        'e construiu uma cabine de madeira com um 1,20 mt de altura onde inseriu',
			        'a televisão os restantes circuitos integrados necessários ao ',
			        'funcionamento do jogo.'
			    ].join(''),
			    'thumbnail': 'http://ts3.mm.bing.net/th?id=HN.608005174475620362&pid=1.7',
			    'main_img': {'name': 'pong_img_1' , 'caption': "Pong for Atari"},
			    'images': [
			        {'name': 'http://origemdascoisas.com/wp-content/uploads/2012/03/Maquina-de-Pong-1972-Pong-Machine-1972.jpg', 'caption': "Máquina de Pong em 1972"},
			        {'name': 'http://ts1.mm.bing.net/th?id=HN.608054072673043784&pid=1.7', 'caption': "Versão doméstica do Pong"},
			        {'name': 'picture3.png', 'caption': "description3"}
			    ],
			    'video_gameplay': [
			        {'url': 'http://www.youtu.be/RKF-yoX3V4k', 'caption': "Jogabilidade do clássico Pong", 'type': "youtube"} // type: youtube or vimeo
			    ],
			    'demos': [
			        {'url': 'https://atari.com/arcade#!/arcade/pong/play', 'caption': "Jogue agora!"}
			    ],
			    'references': [
			        {'url': 'http://origemdascoisas.com/a-origem-do-pong/', 'caption': "A Origem das Coisas: A Origem do Pong"},
			        {'url': 'http://pt.wikipedia.org/wiki/Pong', 'caption': "Pong"},
			    ]
			},
			{
			    'type': 'game', // Atari
			    'name': 'Lunar Lander',
			    'authors': ['Atari inc'],
			    'company': ['Atari.inc'],
			    'year': '1979',
			    'date': '', // 1979
			    'headline': 'Primeiro jogo comercial com graficos vetorias.',
			    'resume': [
			        'Jogo inspirado na década de 60 pela ida do homem a lua.,',
			        'A primeira versão foi feita por Jim Storer,mas foi pela a Atari, ',
			        'que o jogo teve mais notariedade.Pelo fato de ser o primeiro jogo , ',
			        'comercial com gráficos vetorias.,',
			    ].join(''),
			    'full_text': [
			        'Lunar Lander é um jogo de arcade lançado pela Atari.inc em 1979 e é o, ',
			        ' primeiro com gráficos vetorias,apesar de não ser particularmente bem sucedido,',
			        'o vetor-gerador de gráficos do jogo de arcade foi o impulso para o sucesso de,',
			        'Asteroids.O jogador controla um nave e deve pousar na superfície da lua.O Terreno',
			        'é muito irregular e tem apenas algumas áreas planas apropriadas para o pouso.Estas',
			        'áreas são destacadas com um multiplicador de bônus a piscar,o que é mais elevado',
			        'áreas menores.Se o jogador aterra com sucesso no módulo ele é premiado com pontos baseado',
			        'no sucesso do pouso,se ele cai é penalizado por pontos e perda de combustível,e o',
			        'jogador pode comprar combustível,em qualquer momento no jogo,depositando moedas adicionais. ',
			        'Perdendo ou ganhando, o jogo começa outra rodada com um conjunto diferente de terreno,',
			        'e o restante combustível do jogador.O jogo termina quando o jogador ficar sem combustível',
			        'e falha ao aterrizar na lua.A versão caseira de Lunar Lander foi lançado em 1981.',
			        'No final de março de 2010, Lunar Lander foi oferecido como um título disponível para ',
			        'Microsoft Game Room.',
			    ].join(''),
			    'thumbnail': 'thumbnail_example.png',
			    'main_img': {'name': 'Lunar_Lander.png', 'caption': "description"},
			    'images': [
			        {'name': 'picture1.png', 'caption': "description1"},
			        {'name': 'picture2.png', 'caption': "description2"},
			        {'name': 'picture3.png', 'caption': "description3"}
			    ],
			    'video_gameplay': [
			        {'url': 'http://www.youtu.be/McAhSoAEbhM', 'caption': "gameplay Lunar Lander", 'type': "youtube"} // type: youtube or vimeo
			    ],
			    'demos': [
			       {'url': 'http://moonlander.seb.ly/', 'caption': "demo Lunar Lander"}
			    ],
			    'references': [
			        {'url': 'http://en.wikipedia.org/wiki/Lunar_Lander_(1979_video_game)&prev=search', 'caption': "wikipedia"},
			        {'url': 'http://www.arcade-museum.com/game_detail.php?game_id=8465', 'caption': "arcade museum"},
			    ]
			} 
		]
	}

	if (!window._content) {
		_content = {};
	}

	window._content[content_key] = content;


})()

