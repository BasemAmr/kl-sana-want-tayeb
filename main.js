
// Toggle Celebrate Section On Button Click

var btn = $("#doIt");
var audio = new Audio('trumbet.wav');
btn.click(()=>{
	$("section span").fadeIn('400');
	btn.delay(1000).fadeOut('0');
	audio.play();
	if($(window).width() <= 768){
		$("section").delay(3000).fadeIn('slow', ()=>{
			btn.addClass('active');
			$("section span").fadeIn('400');
		});
	}else{
		$("section").delay(2000).fadeIn('slow', ()=>{
			btn.addClass('active');
		});
	}
	
});

// Adjust "wrapper" Height

$(".wrapper").height($(window).height());

$(window).resize(function(){
	$(".wrapper").height($(window).height());
});