// var calculation = 0;
// var age = $("#age").val();
// var max-age = $("#max-age").val();

// console.log(age)

// $("#click-me").click(function(){
// 	calculation = $("max-age").val() - ("age").val();
// 	calcualtion = calculation * 365;
// 	calculation = calculation * $("#num-per-day").val();
// 	console.log(calculation);
// })

$("#click-me").click(clickMe);

	function clickMe () {
	  var maxAge = $("#max-age").val();
	  var age = $("#age").val();
	  var drink = $("#item").val();
	  var calculation = 0;

	  calculation = maxAge - age;
	  calculation = calculation * 365;
	  calculation = calculation * $("#num-per-day").val();

	  $("#output").html("You will drink " + calculation + " more " + drink "in your lifetime.");
	   }