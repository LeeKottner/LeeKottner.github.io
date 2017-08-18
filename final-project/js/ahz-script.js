// index.html

// overlay photos

$("#bldg-img-wrapper").mouseenter(function() {
        $("#bldg-overlay").show();
    }).mouseleave(function() {
        $("#bldg-overlay").hide()
    });

// div.animate({ top: '-=100px' }, 600, 'easeInElastic', function () { … })

// Call popup login
   $("#bldg-overlay").onclick(function() {
    if (event.target == modal) {
        modal.style.display = "";
    }

// prefill form
    $( document ).ready(function() {
        // after the page elements are all loaded, then run the script
        // Set the input field with unique ID #email to a value

        $("#email").val('someone@test.com');

        // Set the input field with unique ID #name

        $("#name").val('John Doe');
        
        });

}

// on rollover  
// 		<img src="images/a-z_bldg.png" id="bldg-img">
// 	replace img with
// 		<img src="images/acme-zenith-overlay.png">
// 	play 64544__benboncan__tawny-owls-2.wav

// on click 
// 	<img src="images/a-z_bldg.png" id="bldg-img">
// 	display username and password popup placeholder text = "Sign in"
// 		play 64544__benboncan__tawny-owls-2.wav soundfile
// 		on text entry
// 			sequence
// 				fill "password" box with "**********"
// 				transition to ahz-index.html

// on click 
// 	<a href="" id="secret-login">Your Account</a>
// 	display username and password popup placeholder text = "Sign in"
// 		on text entry
// 			sequence
// 				fill "password" box with "**********"
// 				transition to ahz-index.html

// on click 
// 	<a href="" id="secret-login">Your Account</a>
// 	display username and password popup placeholder text = "Sign in"
// 		on text entry
// 			sequence
// 				fill "password" box with "**********"
// 				transition to ahz-index.html

