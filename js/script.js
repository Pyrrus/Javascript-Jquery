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
    	"5":"",
    	"java": "Java can be uses in any form of systerm like mobile, web, and desktop application. Java was made in 1995. Java made in OOP (Object-oriented programming) in mind unlike C. Unlike other programming language like C++. Java main idea is once build, and it will work on any Systerm. Lastly, Java have many library to anything to getting information from PDF file and Xbox Kinect.",
		"php": "PHP is most common backend language for the web. With php you can make high level web application to SaaS (Software as a Service) for your customer. Also, PHP have very good Framework and CMS (content management system) like Codeigniter, Laravel, and Wordpress. PHP have very good library like making QR Code, and getting information from excel file.",
		"css": "Design have many name under it. The must common name is UX (User Experience). The user experience is subfield of program developer. the main job of UX is to make user good idea on application without using any outside source like asking for help or user have no idea how to start it. In this field you need do research in both users and make phototyping. With phototyping you can give the user get feedback. With feedback you can make any edits to phototyping like colors and removing/add some feature or redesign." 
    };

// to test the string have a data.
var formV = function (input) {
	if (input) {
		return true;
	} else {
		return false;
	}
}

var startPoint = function () {

	if (data["1"] === "php") {
		return 5;
	} else if (data["1"] === "css") {
		return 1;
	} else {
		return 9;
	}
}

var surveyPoints = function() {
	var information = 0;

	if (data["2"] === "front") {
		information = -2
	} else if (data["2"] === "back") {
		information = 2;
	} else {
		information = 0;
	}

	if (data["3"] === "no") {
		information += 2;
	} else {
		information += -2;
	}

	if (data["4"] === "user") {
		information += -2;
	} else {
		information += 2;
	}

	if (data["5"] === "pic") {
		information += -2;
	} else {
		information += 2;
	}

	return information;

}

var suggestion = function() {
	var survey = startPoint();

	survey += surveyPoints();

	if (survey <= 4) {
		$("#topic").text("CSS and DESIGN");
		$("#text").text(data["css"]);
	} else if (survey >= 5 && survey <= 8) {
		$("#topic").text("PHP");
		$("#text").text(data["php"]);
	} else {
		$("#topic").text("JAVA");
		$("#text").text(data["java"]);
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
	    	console.log($(this).val())
	    	if ($(this).val() === "5") {
	    		suggestion();
	    	}
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