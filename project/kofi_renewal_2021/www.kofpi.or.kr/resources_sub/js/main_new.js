$(function(){
	//main banner;
	MainNewTopBanner = $('.main_top_banner ul').bxSlider({
	  auto: true,
	  autoControls: false,
	  pager: false,
	  moveSlides: 1
	});

	MainNewVisual = $('.visual ul').bxSlider({
	  auto: true,
	  autoControls: true,
	  controls: false,
	  pager: true,
	  moveSlides: 1
	});

	$('.tap_box > ul > li > a').on('click',function(){
		$(this).parents('ul').find('li').removeClass('tap_on');
		$(this).parents('li').addClass('tap_on');

	});





});
