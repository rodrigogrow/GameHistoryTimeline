
(function(){

	function TimeLine (parentId, content) {
		this.parentId = parentId || '';
		this.content = content || '';
		this.parentElem = (this.parentId) ? document.getElementById(parentId) : null;
	}

	TimeLine.prototype.createHTML = function () {

		var html = '';

		html += this.createButton();

		if (this.content) {
			for (var i = 0, amount = this.content.length; i < amount; i++) {
				html += this.createBlock(this.content[i]);
			}
		}

		html += this.createButton();

		if (this.parentElem) {
			this.parentElem.innerHTML = html;
		}


	}

	TimeLine.prototype.createButton = function(type) {

		var html = '';
		var buttonText = '+ expand all';

		html += '<button class="timeline-toggle">'+buttonText+'</button>';
		html +=	'<br class="clear">';

		return html;

	}

	TimeLine.prototype.createBlock = function(block) {

		var html = '';

		if (!block) {
			return '';
		}

		html += ['<div class="timeline-wrapper">',
				 '<h2 class="timeline-time"><span>'+block.decade+'</span></h2>',
				 '<dl class="timeline-series">'].join('');

		if (block['games']) {
			for (var i = 0, amount = block['games'].length; i < amount; i++) {
				html += this.createBlockItem(block['games'][i]);
			}	
		}

		html += ['</dl>', '</div>'].join('');


		return html;

	}

	TimeLine.prototype.createBlockItem = function(item) {

		var html = '';

		if (!item) {
			return '';
		}

		html += '<span class="tick tick-before"></span>';
		
		if (item.name) {
			html += '<dt id="'+item.name.replace(/ /g,'')+'"><a>'+item.name+'</a></dt>';	
		}
		
		html += '<span class="tick tick-after"></span>';
		html += '<dd class="timeline-event-content" id="'+item.name.replace(/ /g,'')+'EX" style="display: none;">';
		html += '<div class="media">';
		html += '<img src="images/temp/event-singularity.jpg" alt="">';	
		html += '</div>';	
		
		html += '<p><b>Ano:</b> ' + item.year + '</p>';
		html += '<p><b>Criador:</b> ' + item.authors[0] + '</p>';

		if (item.resume) {
			html += '<p>' + item.resume + '</p>';
		}

		html += '<br class="clear">';
		html += '</dd>';

		return html;

	}


	// make it global
	if (!window.TimeLine) {
		window.TimeLine = TimeLine;	
	}
	

})();


