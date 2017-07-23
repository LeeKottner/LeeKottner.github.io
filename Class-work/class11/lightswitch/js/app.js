$(document).ready(function () {

	var lights = 'on';

	
	If (lights == "on") {
		$("#lightswitch").click(function(console.log("lights");
		$("body").css("background", "black");	
		$("#lightswitch").css("background", "white");
		$("#lightswitch").css("color", "black");
		$("#lightswitch").text("ON"):

		lights = "off";
		} else {
		$("body").css("background", "white");	
		$("#lightswitch").css("background", "black");
		$("#lightswitch").css("color", "white");
		$("#lightswitch").text("OFF");
		lights = "on";
		}
	}
})


// When the lights are on:

// give the #lightswitch element a background-color of black and a text color of white
// give the body a background color of white

// When the lights are off:

// give the #lightswitch element a background-color of white and a text color of black
// give the body a background color of black;