$(document).ready(function() {
	 $("#state").focus(function(){
    	$("#stateHint").append("Use a two-letter abbreviation!");
    }).blur(function(){
    	$("#stateHint").empty();
    });

    $("#zip_code").focus(function(){
    	$("#zipHint").append("Use a 5 digit Zip Code!");
    }).blur(function(){
    	$("#zipHint").empty();
    });

    $("#phone").focus(function(){
    	$("#phoneHint").append("Numbers Only - No Spaces or Dashes");
    }).blur(function(){
    	$("#phoneHint").empty();
    });

    $("#email").focus(function(){
    	$("#emailHint").append("Example - john@doe.com");
    }).blur(function(){
    	$("#emailHint").empty();
    });

    $("#credit").focus(function(){
    	$("#creditHint").append("Numbers Only - No Spaces or Dashes");
    }).blur(function(){
    	$("#creditHint").empty();
    });

    //REGULAR EXPRESSION VALIDATORS

    //FIRST NAME (Must contain only letters and spaces between 2 and 20 characters!)
    $("#custForm").submit(function(event) {
    	var firstPattern = /^[a-zA-Z0-9 ]{2,20}$/;
    	var streetPattern = /^[a-zA-Z0-9 _.-]{2,20}$/;
    	var statePattern = /^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/;
    	var zipPattern = /^\d{1,5}$/;
    	var phonePattern = /^[0-9]{10}$/;
    	var emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    	var creditPattern = /^[0-9]{13,16}$/;
    	var errors = 0;
    	if (!firstPattern.test($("#first_name").val())) {
    		$("#first_name").css("background-color", "#FDD");
    		$("#err-first").append("Required: Must contain only letters and spaces between 2 and 20 characters!");
    		errors += 1;
    	}
    	//LAST NAME
    	if (!firstPattern.test($("#last_name").val())) {
    		$("#last_name").css("background-color", "#FDD");
    		$("#err-last").append("Required: Must contain only letters and spaces between 2 and 20 characters!");
    		errors += 1;
    	}
    	//CITY
    	if (!firstPattern.test($("#city").val())) {
    		$("#city").css("background-color", "#FDD");
    		$("#err-city").append("Required: Must contain only letters and spaces between 2 and 20 characters!");
    		errors += 1;
    	}
    	//STREET ADDRESS 1
    	if (!streetPattern.test($("#street_address1").val())) {
    		$("#street_address1").css("background-color", "#FDD");
    		$("#err-street1").append("Must contain only letters, numbers and spaces between 2 and 20 characters!");
    		errors += 1;
    	}
    	//STREET ADDRESS 2
    	if (!streetPattern.test($("#street_address2").val())) {
    		$("#street_address2").css("background-color", "#FDD");
    		$("#err-street2").append("Must contain only letters, numbers and spaces between 2 and 20 characters!");
    		errors += 1;
    	}
    	//STATE
    	if (!statePattern.test($("#state").val())) {
    		$("#state").css("background-color", "#FDD");
    		$("#err-state").append("Must contain a two-letter State abbreviation!");
    		errors += 1;
    	}
    	//ZIPCODE
    	if (!zipPattern.test($("#zip_code").val())) {
    		$("#zip_code").css("background-color", "#FDD");
    		$("#err-zip").append("Required: Must contain a 5 number zip code!");
    		errors += 1;
    	}
    	//PHONE
    	if (!phonePattern.test($("#phone").val())) {
    		$("#phone").css("background-color", "#FDD");
    		$("#err-phone").append("Must contain a 10 digit number with no spaces or dashes!");
    		errors += 1;
    	}
    	//EMAIL
    	if (!emailPattern.test($("#email").val())) {
    		$("#email").css("background-color", "#FDD");
    		$("#err-email").append("Required: Must be a valid e-mail address!");
    		errors += 1;
    	}
    	//CREDIT CARD
    	if ( ! $("#none").is(':checked') )
    	{
    	if (!creditPattern.test($("#credit").val())) {
    		$("#credit").css("background-color", "#FDD");
    		$("#err-credit").append("Must contain a 13-16 digit number with no spaces or dashes!");
    		errors += 1;
    	}
    	if ($("#expmonth").val() == '' || $("#expyear").val() == ''){
			$("#err-expyear").append("Must select a Month and a Year!");
			errors += 1;
		}
   	    } //end of check validation

    	if (errors > 0) {
    		$("#custForm").prepend("Please edit the marked fields below to fix errors!");
    		event.preventDefault();
    	}
    });

//END OF DOCUMENT READY
});