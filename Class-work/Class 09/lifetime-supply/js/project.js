var calculation = 0;

$("#click-me").click(function(){
	calculation = $("#max-age").val - ("#age").val();
	calcualtion = calculation * 365;
	calculation = calculation * $("#num-per-day").val();
	console.log(calculation);
})