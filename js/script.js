// make json for all my data
var data = 
    {
    	"name":"", 
    	"phone":"", 
    	"email":"", 
    	"1":"", 
    	"2":"", 
    	"3":"", 
    	"4":"",  
    	"5":""
    };

// to test the string have a data.
var formV = function(input) {
	if (input) {
		return true;
	} else {
		return false;
	}
}

$(document).ready(function() {
	// Make a button to call form validation. Also, once pass to will go to the first survey.
    $("#start").click(function() {
    	if (formV($("#name").val()) && formV($("#phone").val()) && formV($("#email").val())) {
    		$(".start").slideToggle();
    		$(".survey1").slideToggle();
    		data["name"] = $("#name").val();
    		data["phone"] = $("#phone").val();
    		data["email"] = $("#email").val();
    	} else {
    		$(".error").addClass("has-error");
    	}
	});

	// this will set the data from the survey and test the radio 
    // is checked. 
	$(".next").click(function() {
		var value = $(this).val();
		holder = parseInt(value);
		var next = holder + 1;
		next = next.toString();
		if ($("input:radio[name=Sur" + value + "]:checked").val()) {
	    	$(".survey" + value).slideToggle();
	    	$(".survey" + next).slideToggle();
	    	data[value] = $("input:radio[name=Sur" + value + "]:checked").val();
	    	console.log(data);
	    } else {
	    	$(this).attr("disabled", true);
	    }
	});

	// set the button on survry to be click
	$("input:radio").click(function() {
		if(this.checked) {
			var myClass = $(this).attr("class");
			$("#" + myClass).attr("disabled", false);
		}
	});

	// set the previous button
	$(".pre").click(function() {
		var value = parseInt($(this).val());
		var past = value + 1;
		var cur = value + 2;
    	$(".survey" + past.toString()).slideToggle();
    	$(".survey" + cur.toString()).slideToggle();
	});
});