

// when page was load all resources.
$(document).ready(function(){

	// startup timeliner
	$.timeliner({timelineContainer:'#timeline'});
	$('.venobox').venobox();

	// array of content
	var content = [_content['games_1950'], _content['games_1960'], _content['games_1970']];

	var timeline = new TimeLine('timeline', content);

	timeline.createHTML();

});
