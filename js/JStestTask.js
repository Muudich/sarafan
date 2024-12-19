$(document).ready(function() {
	//slider
	$('.slider').slick({
		slidesToShow:3,
	});
	// hamburger
	$('.hamburger').on('click', function(){
		$('.mobile-header').addClass('is-active');
	});

	$('.mobile-header-close').on('click', function(){
		$('.mobile-header').removeClass('is-active');
	});


});