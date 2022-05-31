
$(function(){
	MainNewTopBanner = $('.main_top_banner ul').bxSlider({
	  auto: true,
	  autoControls: false,
	  pager: false,
	  moveSlides: 1
	});
});
/*푸터 사이트맵 스크립트 */
$(function(){
	$('.footer_site_btn').on('click',function(){
		$('.footer_site_conrent').slideToggle()
	});
});
/* 메인 상단 배너 스크립트 */
$(function(){
	openTop();

	$( ".tBanner a.closeBtn" ).click(function() {
		if($('.ondayCls:checked').length > 0){
			setCookie("topCookie", "no" , 1);
		}
		$( ".tBannerwrap" ).slideUp();
	});
});

function setCookie( name, value, expiredays ){
var todayDate = new Date();
todayDate.setDate( todayDate.getDate() + expiredays );
document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}

function getCookie(name) {
	var Found = false;
	var start, end;
	var i = 0;

	while(i <= document.cookie.length){
		start = i;
		end = start + name.length;
//		name과 동일한 문자가 있다면
		if(document.cookie.substring(start, end) == name){
			Found = true;
			break;
		}
		i++;
	}
//	name 문자열을 cookie에서 찾았다면
	if(Found == true) {
		start = end + 1;
		end = document.cookie.indexOf(";", start);
//		마지막 부분이라 는 것을 의미(마지막에는 ";"가 없다)
		if(end < start)
			end = document.cookie.length;
//			name에 해당하는 value값을 추출하여 리턴한다.
		return document.cookie.substring(start, end);
	}
//	찾지 못했다면
	return "";
}
function openTop()
{
	var eventCookie=getCookie("topCookie");
	if (eventCookie != "no")
		$('.tBannerwrap').show();
}

/* gnb 스크립트 */
$(function(){
	$(".gnbMenu > ul > li > .depth2").hide();
	$(".gnbBg").hide();
	$(".gnbMenu > ul > li").bind("mouseenter focusin", function(){

		$(".gnbMenu > ul > li > .depth2").show();
		$(".gnbBg").show();
	});

	$(".gnbMenu > ul > li").on("mouseleave ", function(){

		$(".gnbMenu > ul > li > .depth2").hide();
		$(".gnbBg").hide();
	});
/*	$('.GnbcloseBtn').click(function(){
		$(".gnbMenu > ul > li > .depth2").hide();
		$(".gnbBg").hide();
	});*/
	$(".gnbMenu > ul > li a.last").on("focusout", function(){
		$(".gnbMenu > ul > li > .depth2").hide();
		$(".gnbBg").hide();
		$(".gnbMenu > ul > li > .depth2").css("background", "#ffffff");
	});
});

$(function(){
   $(".gnbMenu > ul > li > a").on("focusin", function(){
      $(".gnbMenu > ul > li > ul").css("background", "#ffffff");
      $(this).siblings("ul").find("li").addClass("on");
      $(this).siblings("ul").css("background", "#44a28a");
   });
   $(".gnbMenu > ul > li > .depth2").on("mouseenter", function(){
      $(".gnbMenu > ul > li > ul").css("background", "#ffffff");
      $(this).find("li").addClass("on");
      $(this).css("background", "#44a28a");
   });
   $(".gnbMenu > ul > li > .depth2").on("mouseleave ", function(){
   	  $(this).css("background", "#ffffff");
   });
});
/* 포토갤러리 슬라이드 스크립트 */
$(function(){
	$('.linkbanner').bxSlider({
		auto: false,
		autoControls: false,
		controls: false,
		pager: false,
		displaySlideQty: 3,
		moveSlideQty: 1,
		minSlides: 1,
		moveSlides: 1,
		pause: 5000
	});
});

/* 메인 가운데 큰 탭 스크립트 */
$(function(){
	$('.tTab li a').click(function() {
		$('.tTab li').removeClass('on');
		$(this).parent('li').addClass('on');
	});
});

// $(function(){
// 	var yn='#tTab01';
//     $(".nvi").click(function(event){
//     		if(this.hash != yn){
// 	    		yn = this.hash;
// 				event.preventDefault();
// 	            $('.mainVisual').animate({scrollTop:$(this.hash).offset().top}, 1200);
// 			}
// 		return false;

//     });
// });

$(function(){
var yn='#tTab02';
    $(".nvi3").click(function(event){
		var t;
		if ($(this.hash).offset().top < 440){
			t=194;
		}else{
			t=0;
		}

		if(this.hash != yn){
			yn = this.hash;
			event.preventDefault();
			$('.menu02').animate({scrollTop:t}, 300);
			$('.menu01').animate({scrollTop:t}, 300);
		}
		return false;
    });
});

$(function(){
	$('.tTab01 a').click(function() {
		$('.menu03Wrap').children('.tab1_menu').css('display','block');
		$('.menu03Wrap').children('.tab2_menu').css('display','none');
	});
	$('.tTab02 a').click(function() {
		$('.menu03Wrap').children('.tab1_menu').css('display','none');
		$('.menu03Wrap').children('.tab2_menu').css('display','block');
	});
});

/* 팝업존 슬라이드 스크립트 */
function pRollStart(){
	$('.popList').bxSlider({
		mode: 'fade',
		auto: true,
		autoControls: true,
		pager: false
	});
}

setTimeout(pRollStart, 1000);

/* 공지사항,행사정보,입찰정보, 임업소식 탭 스크립트 */
$(function(){
	$(".tabTitle li").eq(0).find("a").addClass("on");
	$(".tabConAll .tab").eq(0).show();
	$(".tabTitle li").click(function(){
		var _tab = $(this).find("a").attr("href");
	$(".tabConAll .tab" + _tab).show().siblings().hide();
	$(this).find("a").addClass("on");
	$(this).siblings().find("a").removeClass("on");
	});
});

/* 포토갤러리, 사보다드림, 브리핑룸 탭 스크립트 */
$(function(){
	$(".tabTitle10 li").eq(0).find("a").addClass("on");
	$(".tabConAll10 .tab10").eq(0).show();
	$(".tabTitle10 li").click(function(){
		var _tab = $(this).find("a").attr("href");
	$(".tabConAll10 .tab10" + _tab).show().siblings().hide();
	$(this).find("a").addClass("on");
	$(this).siblings().find("a").removeClass("on");
	});
});

/* 포토갤러리 슬라이드 스크립트 */
$(function(){
	$('.photoGall').bxSlider({
	  auto: false,
	  autoControls: true,
	  pager: false,
	  displaySlideQty: 2,
	  moveSlideQty: 1,
	  minSlides: 1,
	  maxSlides: 2,
	  moveSlides: 1
	});
});

/* facebook, tweeter, tistory 탭 스크립트 */
$(function(){
	$(".tabTitle20 li").eq(0).find("a").addClass("on");
	$(".tabConAll20 .tab20").eq(0).show();
	$(".tabTitle20 li").click(function(){
		var _tab = $(this).find("a").attr("href");
	$(".tabConAll20 .tab20" + _tab).show().siblings().hide();
	$(this).find("a").addClass("on");
	$(this).siblings().find("a").removeClass("on");
	});
});


/* 하단 퀵 슬라이드 스크립트 */
$(function(){


	var quickSlider = $('.quickSlider').bxSlider({
		auto: true,
		autoControls: true,
		pause: 7000,
		pager: false,
		displaySlideQty: 9,
		moveSlideQty: 1,
		minSlides: 1,
		maxSlides: 9,
		moveSlides: 1,
		autoControlsSelector:'.quick_pause_play',
		prevSelector: '.quick_control',
		nextSelector: '.quick_control',
		startText: '메인배너 자동넘김 시작',
		stopText: '메인배너 자동넘김 정지',
		preloadImages: 'all',
		onSliderLoad: function(currentIndex){
		    var itemSize = $('.quickSlider li').not('.bx-clone').length;
		    $('.quickSlider').find('.bx-clone a').attr('tabindex', -1);
		    $('.quickSlider').find('li').not('.bx-clone').eq( currentIndex ).find('a').attr('tabindex', 0);
		},
		onSlideBefore: function($slideElement, oldIndex, newIndex){
		    $('.quickSlider').find('.bx-clone a').attr('tabindex', -1);
		    $('.quickSlider').find('li').not('.bx-clone').eq( newIndex ).find('a').attr('tabindex', 0);
		}
	});

});


/* 중간 배너 슬라이드 */
$(function(){
	$('.quickSlider2').bxSlider({
	  auto: true,
	  autoControls: true,
	  pager: false
	});
});

/* 메인 제일큰 */
$(function(){
	$('.quickSliderMain').bxSlider({
	  auto: true,
	  autoControls: true,
	  pager: true,

	});
});
