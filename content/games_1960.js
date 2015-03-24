

(function(){

	var content_key = 'games_1960';
	var content = {};

	content = {

		'decade': '1960',
		'games': [
			{
		        'type': 'game', // game or console
		        'name': 'Space war',
		        'authors': ['Steve Russel', 'e um grupo de estudantes'],
		        'company': ['MIT'],  
		        'year': '1961',
		        'date': '20-06-1951', // 20, 06, 1951
		        'headline': 'First Game about space',
		        'resume': [
		            'Começou sendo um desafio para rusell, querendo fazer algo que ninguém , ',
		            'tinha feito naquela época, transmitir a ficção científica da literatura, ',
		            'para outra mídia., ',
		            'Começaram desenvolvendopara o TX-0, chamado de tixo mas quando o novo computador, ', 
		            'adquirido pela universidade ',
		            'PDP-1 que era mais rapido que o tx-0'
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
		        'thumbnail': 'thumbnail_example.png',
		        'main_img': '025p.jpg', 
		        'images': ['026p.jpg'],
		        'video_gameplay': [],
		        'demos': ['demo_url1'],
		        'references': ['reference_url1', 'reference_url2', 'reference_url3']
			}
		]
	}

	if (!window._content) {
		_content = {};
	}

	window._content[content_key] = content;


})()

