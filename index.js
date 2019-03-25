jQuery(function($){
	$.scrollTo(0);
			
	$('#link1').click(function() { $.scrollTo($('.about'), 700); return false});
	$('#link2').click(function() { $.scrollTo($('.gallery'), 700); return false});
	$('#link3').click(function() { $.scrollTo($('.services'), 700); return false});
	$('#link4').click(function() { $.scrollTo($('.contact'), 700); return false});
	
	$('.scrollUp').click(function() { $.scrollTo($('body'), 1000); return false});
}
);
		
$(window).scroll(function(){
	if($(this).scrollTop()>300) $(".scrollUp").fadeIn();
	else $(".scrollUp").fadeOut();		
}
);


