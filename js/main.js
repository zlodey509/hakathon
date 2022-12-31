$(function () {
    console.log($('.faq li'))
    $('.faq__answer').toggle();
    $('.rotate_div').toggle();
    $( ".faq__answer" ).click(function() {
    	return false;
    });
    $( ".faq li" ).click(function() {
    	$(this).children('.faq__answer').toggle();
    	$(this).children('.faq__question-rotate').children('.rotate_div').toggle();
    	$(this).children('.faq__question-rotate').children('.non_rotate_div').toggle();
    });
});

$(function (){
	if($('body').width() <= 767){
    		$('header .menu__items').hide();
    	}
	$(window).resize(function() {
		console.log($('body').width());
    	if($('body').width() <= 767){
    		$('header .menu__items').hide();
    	}
    	else{
    		$('header .menu__items').show();
    	}
	});

	// $('header .menu__items').hide();
	$('.menu__burger img').click(function(){
		$('header .menu__items').toggle();
	});
});

$(function (){
	$('#cube1').hide();
	$('#cube2').hide();
	$('#cube3').hide();
	$('.mini-cube').hide();
	var blockPosition = $('.cubes').offset().top; 
	windowScrollPosition = $(window).scrollTop();
	cube = blockPosition - windowScrollPosition - 500;
	if( cube < 0 && cube > -500) {
		$('#cube1').show();
	    $('#cube1').addClass('animate__animated animate__fadeInBottomLeft');
	    $('#cube2').show();
	    $('#cube2').addClass('animate__animated animate__fadeInBottomLeft');
	    $('#cube3').show();
	    $('#cube3').addClass('animate__animated animate__fadeInBottomLeft');
	    $('.mini-cube').show();
	    $('.mini-cube').addClass('animate__animated animate__fadeInBottomLeft');
	}
	$(window).on('scroll', () => {
		var blockPosition = $('.cubes').offset().top; 
		windowScrollPosition = $(window).scrollTop();
		cube = blockPosition - windowScrollPosition - 500;
	    if( cube < 0 && cube > -500) {
	    	$('#cube1').show();
	        $('#cube1').addClass('animate__animated animate__fadeInBottomLeft');
	        $('#cube2').show();
	        $('#cube2').addClass('animate__animated animate__fadeInBottomLeft');
	        $('#cube3').show();
	        $('#cube3').addClass('animate__animated animate__fadeInBottomLeft');
	        $('.mini-cube').show();
	        $('.mini-cube').addClass('animate__animated animate__fadeInBottomLeft');
	    }
	});
});

$(function(){
	$('.quote__top').hide();
	$('.quote__bottom').hide();
	var blockPosition = $('.quote__text').offset().top; 
	windowScrollPosition = $(window).scrollTop();
	cube = blockPosition - windowScrollPosition - 500;
	if( cube < 0 && cube > -500) {
		console.log('sfgsdg');
		$('.quote__top').show();
	    $('.quote__top').addClass('animate__animated animate__bounceInDown');
	    $('.quote__bottom').show();
	    $('.quote__bottom').addClass('animate__animated animate__bounceInUp');
	}
	$(window).on('scroll', () => {
		var blockPosition = $('.quote__text').offset().top; 
		windowScrollPosition = $(window).scrollTop();
		cube = blockPosition - windowScrollPosition - 500;
		console.log(cube);
		if( cube < 0 && cube > -500) {
			$('.quote__top').show();
		    $('.quote__top').addClass('animate__animated animate__bounceInDown');
		    $('.quote__bottom').show();
		    $('.quote__bottom').addClass('animate__animated animate__bounceInUp');
		}
	});
});

$(function(){
	$('#cube4').hide();
	var blockPosition = $('.participants').offset().top; 
	windowScrollPosition = $(window).scrollTop();
	cube = blockPosition - windowScrollPosition - 500;
	if( cube < 0 && cube > -500) {
		$('#cube4').show();
	    $('#cube4').addClass('animate__animated animate__fadeInBottomLeft');
	}
	$(window).on('scroll', () => {
		var blockPosition = $('.participants').offset().top; 
			windowScrollPosition = $(window).scrollTop();
			cube = blockPosition - windowScrollPosition - 500;
			if( cube < 0 && cube > -500) {
				$('#cube4').show();
			    $('#cube4').addClass('animate__animated animate__fadeInBottomLeft');
			}
	});
});

$(function(){
	$('.one').hide();
	var blockPosition = $('.million_dollar_div').offset().top; 
	windowScrollPosition = $(window).scrollTop();
	cube = blockPosition - windowScrollPosition - 500;
	if( cube < 0 && cube > -500) {
		$('.one').show();
	    $('.one').addClass('animate__animated animate__rotateIn');
	}
	$(window).on('scroll', () => {
		var blockPosition = $('.million_dollar_div').offset().top; 
			windowScrollPosition = $(window).scrollTop();
			cube = blockPosition - windowScrollPosition - 500;
			if( cube < 0 && cube > -500) {
				$('.one').show();
			    $('.one').addClass('animate__animated animate__rotateIn');
			}
	});
});

$(function(){
	$('.introduction__item1').hide();
	$('.introduction__item2').hide();
	var blockPosition = $('.introduction').offset().top; 
	windowScrollPosition = $(window).scrollTop();
	cube = blockPosition - windowScrollPosition - 500;
	if( cube < 0 && cube > -500) {
		$('.introduction__item1').show();
	    $('.introduction__item1').addClass('animate__animated animate__zoomInLeft');
	    $('.introduction__item2').show();
	    $('.introduction__item2').addClass('animate__animated animate__zoomIn');
	}
	$(window).on('scroll', () => {
		var blockPosition = $('.introduction').offset().top; 
		windowScrollPosition = $(window).scrollTop();
		cube = blockPosition - windowScrollPosition - 500;
		if( cube < 0 && cube > -500) {
			$('.introduction__item1').show();
		    $('.introduction__item1').addClass('animate__animated animate__zoomInLeft');
		    $('.introduction__item2').show();
		    $('.introduction__item2').addClass('animate__animated animate__zoomIn');
		}
	});
});



