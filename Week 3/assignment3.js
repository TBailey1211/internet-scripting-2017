$(document).ready(function() {
$('#button1').click(function() {
	$('.headers').addClass("header");
	$('.altrows').addClass("altrow");
});
$('#button2').click(function() {
	$('#myImage').append("<img src=jquery_cover.jpg>");
});
$('#button3').click(function() {
	$('#myList').addClass("enclose");
	$('#myTable').addClass("enclose");
	$('#myActions').addClass("enclose");
	$('#myImage').addClass("enclose");
});

});