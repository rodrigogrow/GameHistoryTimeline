

(function(){

	var content_key = 'games_1960';
	var content = {};

	content = {

		'decade': '1960',
		'games': [
			{
		        'type': 'game', // game or console
		        'name': 'Space War',
		        'authors': ['Steve Russel', 'Dan Edwards','Alan Kotok','Peter Sampson','Wayne Wiitanen Graetz'],
		        'company': [' Massachusetts Institute of Technology(MIT)'],  
		        'year': '1961',
		        'date': '30-07-1961', // Day, Month, Year
		        'headline': 'First Game about space',
		        'resume': [
		            'Tendo o grosso de seu programa feito por Steve "Slug" (Lesma) Russell1 2 , com o auxílio de seus colegas Dan Edwards, Alan  ',
		            ' Kotok, Peter Sampson, Wayne Wiitanen e Martin Graetz3 , eles se inspiraram nos livros do autor E. E. "Doc" Smith para criar seu',
		            'jogo de tiro, uma batalha espacial.',
		            'O programa foi inteiramente desenvolvido no DEC PDP-1, um computador que ocupava uma mesa inteira. Nessa época não  ',
		            'existiam computadores caseiros, e os criadores de Spacewar! não pensavam em ganhar dinheiro com a invenção. '
		        ].join(''),
		        'full_text': [
		            'Tudo começou como um desafio para Russell: com o novo computador dotado de transistores ao invés de válvulas e uma tela  ',
		            '(peças de luxo na época), o TX-0, conhecido como Tixo, eles decidiram fazer',
		            'o que ninguém mais fez por eles: transpor a ficção científica da literatura para uma outra mídia. ',
		            'É verdade que o que eles queriam mesmo era um filme, mas isso é outra história. Infelizmente, eles não tinham  ',
		            'acesso à enorme máquina.',
		            ' O TX-0 e igualmente programável, ele era o sonho dos garotos. E poderia ser ligado ',
					' instantâneamente, ao contrário de seu predecessor,, que precisava de uma manhã inteira para aquecimento  ',
		            'interno. Eles queriam criar algum tipo de demonstração, e por isso criaram algumas regras que seu programa deveria seguir: ',
		            '1.Deveria demonstrar as capacidades do computador, usando quase todo seu potencial;',
		            '2.Deveria ser interessante e interativo (diferente toda vez que rodado);',
					'3.Deveria envolver o usuário de maneira atrativa e prazerosa - ou seja, deveria ser um jogo.',
					'Os jovens então criaram duas naves, uma rotina para simular inércia  ',
					'e um campo estelar aleatório para ajudar a controlar o movimento. Elesqueriam também adicionar um "botão de pânico para emergências",',
					' e assim nasceu a tecla Hiper-Espaço. O último toque seria a estrela no meio do campo de batalha, que gerava um campo gravitacional ',
					' que poderia tanto atrapalhar ou ajudar, dependendo da astúcia do jogador.',
					'Spacewar! só estaria oficialmente finalizado em 1962, ocupando míseros 2KB…Russell jamais ganharia um dólar pelo jogo ',
					'- mas isso não quer dizer que outros não lucrariam com ele.'
		        ].join(''),
		        'thumbnail': 'thumbnail_example.png',
		        'main_img': {'name': '025p.jpg', 'caption': "description"},
		        'images': [
		            {'name': '026p.jpg', 'caption': "description1"}
		        ],
		        'video_gameplay': [
		            {'url': 'http://www.youtu.be/UP2OaKHaDxM', 'caption': "video gameplay old classic retro game", 'type': "youtube"} // type: youtube or vimeo
		        ],
		        'demos': [
		            {'url': 'http://www.masswerk.at/spacewar/', 'caption': "Space war online"}
		        ],
		        'references': [
		            {'url': 'http://pt.wikipedia.org/wiki/Spacewar!', 'caption': "Wikipedia"},
		            {'url': 'http://www.computerhistory.org/revolution/computer-games/16/189/2213', 'caption': "Detalhes sobre space war"},
		            {'url': 'http://pdp-1.computerhistory.org/pdp-1/index.php?f=theme&s=4&ss=3', 'caption': "Mais sobre o projeto space war"}
		        ]
			}
		]
	}

	if (!window._content) {
		_content = {};
	}

	window._content[content_key] = content;


})()

