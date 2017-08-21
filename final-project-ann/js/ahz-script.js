

// overlay photos
$("#bldg-img-wrapper").mouseenter(function() { 
  $("#bldg-overlay").show();  
   });
$("#bldg-img-wrapper").mouseleave(function() { 
   $("#bldg-overlay").hide(); 
 }); 


// Get modal, autfill password

$(document).ready(function(){
	var modal = document.getElementById("#login");	
  	$(".secret-login").click(function(){
    var modal=$(this).attr("#login");
    alert(modal);
//     $("#psw").click(function() {
//   		$("#psw").autofill("Allow us...");
//   	});
	});

});