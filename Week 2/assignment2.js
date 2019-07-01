function area(height, width)
{
	var result = height * width;
	return result;
}

//Alphabet Array
var alphabet = [];
for (var i = 0; i != 26; ++i) alphabet += String.fromCharCode(i + 65);
console.log(alphabet);


$(document).ready(function() {
	$('#letters').addClass("Christmas");
	$('#calculation').addClass("Easter");
});