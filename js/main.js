

// when page was load all resources.
$(document).ready(function(){

	// array of content
	var content = [_content['games_1950']];

	var timeline = new TimeLine('timeline', content);

	timeline.createHTML();

});
