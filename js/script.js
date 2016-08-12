// global json for all my data form the user input
var data = {
  "name": "",
  "phone": "",
  "email": "",
  "1": "",
  "2": "",
  "3": "",
  "4": "",
  "5": "",
  "java": "Java can be uses in any form of systerm like mobile, web, and desktop application. Java was made in 1995. Java made in OOP (Object-oriented programming) in mind unlike C. Unlike other programming language like C++. It main idea is once build, and it will work on any systerms. Lastly, Java have many libraries to anything to getting information from PDF file and Xbox Kinect.",
  "php": "PHP is most common backend language for the web. With php you can make high level SaaS (Software as a Service) web application for your customer. Also, PHP have very good Framework and CMS (content management system) like Codeigniter, Laravel, and Wordpress. PHP have very good libraries like making QR Code, and getting information from excel file.",
  "css": "Design have many name under it. The must common name is UX (User Experience). The UX is subfield of program developer. the main job of UX is to make user good idea on application without using any outside source like asking for help or user have no idea how to start it. In this field you need do research in both users and make phototyping. With phototyping you can give the user get feedback. With feedback you can make any edits to phototyping like colors and removing/add some feature or redesign."
};

// very sample form validation to 
// test the input have it or 
// nothing at all
var formV = function(input) {
  if (input) {
    return true;
  } else {
    return false;
  }
}

// make starting point for which value 
// they pick at the start of the 
// survey question
var startPoint = function() {
  if (data["1"] === "php") {
    return 5;
  } else if (data["1"] === "css") {
    return 1;
  } else {
    return 9;
  }
}

// This will do all math to get the data
var surveyPoints = function() {
  var information = 0;

  // survey 2
  if (data["2"] === "front") {
    information = -2
  } else if (data["2"] === "back") {
    information = 2;
  } else {
    information = 0;
  }

  // survey 3
  if (data["3"] === "no") {
    information += 2;
  } else {
    information += -2;
  }

  // survey 4
  if (data["4"] === "user") {
    information += -2;
  } else {
    information += 2;
  }

  // survey 5
  if (data["5"] === "pic") {
    information += -2;
  } else {
    information += 2;
  }

  return information;
}

// This will get both startpoint 
// and surveypoint. Then do some 
// if/else to show which suggestion
// they get by the questions.
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

  $("#pEmail").text(data["email"]);
  $("#pPhone").text(data["phone"]);
  $("#pName").text(data["name"]);
}

// Jquery ready
$(document).ready(function() {

  // make a start buttion to call formV 
  // function to test the input have data or not.
  // if have it will hide the start class and show survey one.
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

  // this .next button will work all buttion have .next.
  // Within .next button have value where I set up my code
  // to do the edits like check the radio is checked. if not
  // buttion will be disabled. if checked it will using the value
  // to go on the next survey question. if the buttion value is 5 
  // it will call the suggestion() to show which suggestion you have
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

  // This will call all radio to have click. 
  // this will remove disabled buttion. I use
  // the class of the radio and using the 
  // buttion id to remvoe the disabled.
  $("input:radio").click(function() {
    if (this.checked) {
      var myClass = $(this).attr("class");
      $("#" + myClass).attr("disabled", false);
    }
  });

  // This will set click on .pre button.
  // using the value on the button when click.
  // add math to know which one to hide and show.
  $(".pre").click(function() {
    var value = parseInt($(this).val());
    var past = value + 1;
    var current = value + 2;
    $(".survey" + past.toString()).slideToggle();
    $(".survey" + current.toString()).slideToggle();
  });
});