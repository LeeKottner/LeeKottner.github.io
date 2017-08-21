

// overlay photos

$("#bldg-img-wrapper").mouseenter(function() { 
  $("#bldg-overlay").show();  
   });
$("#bldg-img-wrapper").mouseleave(function() { 
   $("#bldg-overlay").hide(); 
 }); 


// Get modal, autofill password

$(document).ready(function(){
	var modal = $("#login");	
  	$(".secret-login").click(function(){
    modal.show();
    // var filler = {
    // 	"name": "Allow us..."
    // }
    // $("#psw").click(function(){
  		// $("#psw").autofill(function(filler);
  	// });
	});

});



// $(document).ready(function(){
// 	var modal = document.getElementById('login');
// 	// Get the button that opens the modal
// 	var open = document.getElementByClass("secret-login");
// 	// When the user clicks on the button, open the modal 
// 	open.onclick = function() {
//     	modal.style.display = "block";
// }})
