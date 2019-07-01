$(document).ready(function() {
	$('#area1').offset({ top: 50, left: 500, });	
	$('#area2').offset({ top: -200, left: 570 });
	$('#area3').offset({ top: -170, left: 550 });
	$('#area4').offset({ top: -180, left: 530 });
	$('#area5').offset({ top: -205, left: 730 });
	$('#area6').offset({ top: -230, left: 930 });
	$('#showButton').offset({ top: 200, left: 600 });
	$('#hideButton').offset({ top: 200, left: 800 });

	$('#starryNight').offset({ top: -200, left: 500 });

	$('#david').offset({ top: -200, left: 600 });

	$('#picassopic').offset({ top: -200, left: 550 });

	$('#goghInfo').offset({ top: -200, left: 400});

	$('#michelangeloInfo').offset({ top: -200, left: 400});

	$('#picassoInfo').offset({ top: -200, left: 400});

//Toplevel areas
	$('#area2').fadeIn();
	$('#area3').fadeIn();
	
	$('#showButton').click(function() {
		$('#area4').slideDown();
		$('#area5').slideDown();
		$('#area6').slideDown();
	});

	$('#hideButton').click(function() {
		$('#area4').slideUp();
		$('#area5').slideUp();
		$('#area6').slideUp();
	});

	//$('#area2').hover(function(){
	//	$('#area2').slideUp();
	//});

//GOGH
	$('#vanGogh').click(function() {
	$('#starryNight').fadeToggle(500, function(){
		alert("The info has been toggled.");
	});
	$('#goghInfo').fadeToggle(500);

	$('#starryNight').hover(function(){
		$('#starryNight').animate({left: '250px'});
	});

	$('#goghInfo').hover(function() {
		$('#goghInfo').animate({
			left: '570px'
		});

	});

});

//MICHELANGELO
	$('#michelangelo').click(function() {
		$('#david').fadeToggle(500, function(){
			alert("The info has been toggled.");
		});
	$('#michelangeloInfo').fadeToggle(500);

	$('#david').hover(function(){
		$('#david').animate({left: '250px'});
	});

	$('#michelangeloInfo').hover(function(){
		$('#michelangeloInfo').animate({left: '570px'});
	});

	});

//PICASSO

	$('#picasso').click(function() {
		$('#picassopic').fadeToggle(500, function(){
			alert("The info has been toggled.");
		});
	$('#picassoInfo').fadeToggle(500);

	$('#picassopic').hover(function(){
		$('#picassopic').animate({left: '250px'});
	});

	$('#picassoInfo').hover(function(){
		$('#picassoInfo').animate({left: '570px'});
	});	
	});

//END DOCUMENT READY
});
