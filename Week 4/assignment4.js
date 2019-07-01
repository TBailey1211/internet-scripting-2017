$(document).ready(function() {
	$('#area1').offset({ top: 200, left: 350, });	
	$('#area2').offset({ top: 210, left: 500 });
	$('#area3').offset({ top: 280, left: 450 });
	$('#area4').offset({ top: 330, left: 870 });
	$('#area5').offset({ top: 360, left: 870 });
	$('#area6').offset({ top: 470, left: 870 });

	$('#moveUp').css({ "font-size":"16px", "color":"white", "background-color":"blue" });
	$('#moveDown').css({ "font-size":"16px", "color":"white", "background-color":"blue" });
	$('#changeText').css({ "font-size":"16px", "color":"white", "background-color":"blue" });

	$('#changeText').click(function() {
		$('#area3').toggleClass('newFont');
	});

	var scrolled = 0;

	$('#moveDown').click(function() {
		scrolled = scrolled + 50;
		$('#area3').scrollTop(scrolled);
	});

	$('#moveUp').click(function() {
		scrolled = scrolled - 50;
		$('#area3').scrollTop(scrolled);
});

});

