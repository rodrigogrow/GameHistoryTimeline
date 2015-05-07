
(function(){

	function TimeLine (parentId, content) {
		this.parentId = parentId || '';
		this.content = content || '';
		this.parentElem = (this.parentId) ? document.getElementById(parentId) : null;
	}

	/**
	 * Create HTML of timeline.
	 */
	TimeLine.prototype.createHTML = function () {

		var html = '';

		html += this.createButton();

		if (this.content) {
			//Create all blocks (decades 1950, 1960, 1970...)
			for (var i = 0, amount = this.content.length; i < amount; i++) {
				html += this.createBlock(this.content[i]);
			}
		}

		html += this.createButton();

		if (this.parentElem) {
			this.parentElem.innerHTML = html;
		}
	}

	/**
	 * Create button of timeline (ExpandAll/ColapseAll).
	 */
	TimeLine.prototype.createButton = function() {

		var html = '';
		var buttonText = '+ expand all';

		html += '<button class="timeline-toggle">'+buttonText+'</button>';
		html +=	'<br class="clear">';

		return html;

	}

	/**
	 * Create a block of events.
	 *
	 * @block {Object} block content.
	 */
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

	/**
	 * Create an event (item) on block, in this case decade.
	 *
	 * @item {Object} game/console item.
	 */
	TimeLine.prototype.createBlockItem = function(item) {

		var html = '';
		var nameLowerTrimmed = ''; // lowercase without spaces

		if (!item) {
			return '';
		}

		html += '<span class="tick tick-before"></span>';
		
		if (item.name) {

			nameLowerTrimmed = item.name.replace(/ /g,'').toLowerCase();

			html += '<dt id="'+nameLowerTrimmed+'"><a>'+ item.year +' - '+ item.name+'</a></dt>';
		}
		
		html += '<span class="tick tick-after"></span>';
		html += '<dd class="timeline-event-content" id="'+nameLowerTrimmed+'EX" style="display: none;">';
		html += '<div class="media">';

		// add main image
		html += this.addImages(item);

		html += '</div>';
		
		// add year
		//html += '<p><b>Ano:</b> ' + item.year + '</p>';

		// adding authors
		html += this.addAuthors(item);

		// adding company
		html += this.addCompany(item);

		// adding resume
		if (item.resume) {
			html += '<p>' + item.resume + '</p>';
		}

		// adding video
		html += this.addVideos(item);

		// adding demos
		html += this.addDemos(item);

		// adding references
		html += this.addReferences(item);

		html += '<br class="clear">';
		html += '</dd>';

		return html;
	}

	/**
	 * Create HTML for all images of item.
	 *
	 * @item {Object} game/console item
	 */
	TimeLine.prototype.addImages = function (item) {

		var html = '';
		var image_name = ''; // full image name
		var image_item = null; // image object aux, to iterate in loop


		if (!item.main_img) {
			return '';
		}

		if (item.main_img) {
			image_name = this.getBaseImagePath(item) + item['main_img'].name;
			html += '<a class="venobox" title="'+item['main_img'].caption+'" data-gall="'+item.name+'" href="'+image_name+'"><img src="'+image_name+'" /></a>';
		}

		if (item.images && item.images.length > 0) {
			for (var i=0, amount=item.images.length; i < amount; i++) {

				image_item = item.images[i];

				image_name = this.getBaseImagePath(item) + image_item.name;
				html += '<a style="display:none;" class="venobox" title="'+image_item.caption+'" data-gall="'+item.name+'" href="'+image_name+'"><img src="'+image_name+'" /></a>';
			}
		}

		return html;
	}

	/**
	 * Create HTML for all authors of specific event.
	 *
	 * @item {Object} game/console item
	 */
	TimeLine.prototype.addAuthors = function (item) {

		var html = '';

		if (!item.authors) {
			return '';
		}

		if (item.authors.length > 0) {
			html += '<p><b>Criador:</b> ' + item.authors.join(', ') + '</p>';
		}

		return html;
	}

	/**
	 * Create HTML for all authors of specific event.
	 *
	 * @item {Object} game/console item
	 */
	TimeLine.prototype.addCompany = function (item) {

		var html = '';

		if (!item.company) {
			return '';
		}

		if (item.company.length > 0) {

			html += '<p><b>Empresa:</b> ';
			html += item.company.join(', ');
			html += '</p>';
		}

		return html;
	}

	/**
	 * Create HTML for all videos of specific event.
	 *
	 * @item {Object} game/console item
	 */
	TimeLine.prototype.addVideos = function (item) {

		var html = '';

		if (!item.video_gameplay) {
			return '';
		}

		if (item.video_gameplay.length > 0) {
			if (item.video_gameplay[0].url) { // get only first item
				html += '<p>'+'<b>';
				html += '<i class="fa fa-youtube-play">';
				html += '<a href="'+item.video_gameplay[0].url+'" class="venobox_custom" data-type="youtube" data-overlay="rgba(0,0,0,0.5)">Gameplay Video</a>';
				//html += '<a href="'+item.video_gameplay[0].url+'" class="venobox_custom" data-type="youtube" data-overlay="rgba(0,0,0,0.5)">Gameplay Video</a>';
				html += '</i>';
				html += '</b>'+'</p>';
			}
		}

		return html;
	}

	/**
	 * Create HTML for all Demos of specific event.
	 *
	 * @item {Object} game/console item
	 */
	TimeLine.prototype.addDemos = function (item) {

		var html = '';

		if (!item.demos) {
			return '';
		}

		if (item.demos.length > 0) {
			html += '<p><b>'+ 'Demos:' +'</b></p>';
			html += '<ol>';
			for (var i=0, amount=item.demos.length; i < amount; i++) {
				if (item.demos[i].url && item.demos[i].caption) {
					html += '<li>';
					html += '<i class="fa fa-gamepad">';
					html += '<a target="_blank" href="'+item.demos[i].url+'">' + Utils.capitalizeFirstLetter(item.demos[i].caption) + '</a>';
					html += '</i>';
					html += '</li>';
				}
			}
			html += '</ol>';
		}

		return html;
	}

	/**
	 * Create HTML for all References of specific event.
	 *
	 * @item {Object} game/console item
	 */
	TimeLine.prototype.addReferences = function (item) {

		var html = '';

		if (!item.references) {
			return '';
		}

		if (item.references.length > 0) {
			html += '<p><b>'+ 'Referências:' +'</b></p>';
			html += '<ol>';
			for (var i=0, amount=item.references.length; i < amount; i++) {
				if (item.references[i].url && item.references[i].caption) {
					html += '<li>'; 
					if (item.references[i].type === 'slides') {
						html += '<i class="fa fa-slideshare">';
					} else {
						html += '<i class="fa fa-link">';
					}
					html += '<a target="_blank" href="'+item.references[i].url+'">' + Utils.capitalizeFirstLetter(item.references[i].caption) + '</a>'; 
					html += '</i>';
					html += '</li>';
				}
			}
			html += '</ol>';
		}

		return html;
	}

	/**
	 * Get base image path.
	 *
	 * @item {Object} game/console item
	 */
	TimeLine.prototype.getBaseImagePath = function(item) {

		var path = '';
		var name_dir = '';

		if (!item) {
			return '';
		}

		if (item.image_dir) {
			name_dir = item.image_dir;
		} else {
			name_dir = item.name.replace(/ /g,'').toLowerCase();
		}

		path = 'images/' + item.type + '/' + item.year +'/'+ name_dir + '/';

		console.log("path: " + path);

		return path;

	}


	// make it global
	if (!window.TimeLine) {
		window.TimeLine = TimeLine;	
	}
	

})();


