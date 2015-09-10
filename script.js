$(document).ready(function(){
	$('td').mouseenter(function(){
		$(this).animate({
			height: '+=10px'
		});
	});
	$('td').mouseleave(function(){
		$(this).animate({
			height: '-+10px'
		});
	});
});
