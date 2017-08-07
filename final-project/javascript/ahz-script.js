// index.html

on mouseenter
	play Carnival-of-Venice.mp3

on rollover  
		<img src="images/a-z_bldg.png" id="bldg-img">
	replace img with
		<img src="imagesacme-zenith_ background.png">
	play 64544__benboncan__tawny-owls-2.wav

on click 
	<img src="images/a-z_bldg.png" id="bldg-img">
	display username and password popup placeholder text = "Sign in"
		play 64544__benboncan__tawny-owls-2.wav soundfile
		on text entry
			sequence
				fill "password" box with "**********"
				transition to ahz-index.html

on click 
	<a href="" id="secret-login">Your Account</a>
	display username and password popup placeholder text = "Sign in"
		on text entry
			sequence
				fill "password" box with "**********"
				transition to ahz-index.html

on click 
	<a href="" id="secret-login">Your Account</a>
	display username and password popup placeholder text = "Sign in"
		on text entry
			sequence
				fill "password" box with "**********"
				transition to ahz-index.html

// ahz-index.html

on mouseenter
	play play 87289__spleencast__tree-leaves-rustling.aif

// $("#speak").mouseenter(function(){
// 	$("<audio></audio>").attr({ 
// 		'src':'audio/'+Math.ceil(Math.random() * 5)+'.mp3', 
// 		'volume':0.4,
// 		'autoplay':'autoplay'
// 	}).appendTo("body");
// });