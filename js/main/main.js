$(function(){
	var MainSlideFullH =$(window).height();
	$('.main_slide >div').height(MainSlideFullH - '80'); //헤더 80px 빼주기;
	$('.main_content_02').height(MainSlideFullH); 
	$('.main_content_03').height(MainSlideFullH); //푸터높이빼주기

	$(window).resize(function(){
		var MainSlideFullH =$(window).height();
		$('.main_slide >div').height(MainSlideFullH - '80'); //헤더 80px 빼주기;
		$('.main_content_02').height(MainSlideFullH); 
		$('.main_content_03').height(MainSlideFullH); //푸터높이빼주기
	});
	
	

	$('.main_slide').slick({
		infinite: true,
		dots: true,
		arrows:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 300,
		//autoplay:true,
		//autoplaySpeed:2500,

	});


	





});