$( document ).ready(function() {
	console.log( "ready!" );
	var s = skrollr.init();
		
	function draw() {
		var greet = document.getElementById('greet');
		greet.width  = window.innerWidth;
		greet.height = 200;
	}
	
	draw();
	
	
});
