/*푸터 사이트맵 스크립트 */
$(function(){
	var ContH = $( '#container' ).height();
	var HeaderH_C = $( '#header' ).height();
	var FooterH_C = $( '#footer' ).height();
	//var FooterHT =$( '#footer' ).offset().top;
	var FooterH = ContH - FooterH_C - HeaderH_C;
	$(window).scroll(function(){
		var TopNow =$(document).scrollTop();

	   if( TopNow > FooterH){
		   $('.floating_bottom').removeClass('fixed');
	   }else{
		    $('.floating_bottom').addClass('fixed');
	   }

 	});
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
var quickSlider = "";
$(function(){
	quickSlider = $('.quickSlider').bxSlider({
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
    		$('.quickSlider').find('.li').not('.bx-clone').eq( currentIndex ).find('a').attr('tabindex', 0);

		},
		onSlideBefore: function($slideElement, oldIndex, newIndex){

				$('.quickSlider').find('.bx-clone a').attr('tabindex', -1);
				$('.quickSlider').find('li').not('.bx-clone').eq( newIndex ).find('a').attr('tabindex', 0);

		}
	});
	$( ".quickSlider li" ).keyup(function() {

		var currentNum = $(this).index();
	console.log(currentNum);
		quickSlider.goToSlide(currentNum)

	});
	sliderTemp = false;
	$('body').keydown(function() {

		if(!sliderTemp){
		//quickSlider.destroySlider()
		quickSlider.reloadSlider({
			infiniteLoop : false,
			auto: false,
			autoControls: true,
			pause: 7000,
			pager: false,
			displaySlideQty: 6,
			moveSlideQty: 1,
			minSlides: 1,
			maxSlides: 6,
			moveSlides: 1,
			autoControlsSelector:'.quick_pause_play',
			prevSelector: '.quick_control',
			nextSelector: '.quick_control',
			startText: '메인배너 자동넘김 시작',
			stopText: '메인배너 자동넘김 정지',
			preloadImages: 'all'
		})

		quickSlider.goToSlide(0)
		sliderTemp = true;
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


/* 메인리뉴얼 핫이슈 */
$(function(){
/*	$('.hotSlider').bxSlider({
	  auto: true,
	  autoControls: true,
	  pager: true,



	});*/

	var hotSlider = $('.hotSlider').bxSlider({
		auto: true,
		pager: true,
		moveSlides: 1,
		autoControls: true,
		/*autoControlsCombine: true,*/
		infiniteLoop: true,
		autoControlsSelector: '.visual_pause_play',
		startText: '메인배너 자동넘김 시작',
		stopText: '메인배너 자동넘김 정지',
		pagerSelector: '.visual_pager',
		preloadImages: 'all',
		onSliderLoad: function(currentIndex){
		    var itemSize = $('.hotSlider li').not('.bx-clone').length;
		   /*	 var autoControlsPosition = itemSize * 31;
	    if( itemSize > 1 ) {
	        $('.visual_pause_play').css('marginLeft', '-'+(autoControlsPosition+30)+'px');
	    } else {
	        $('.visual_pause_play').hide();
	        $('.visual_pager').hide();
	    }*/
		    $('.hotSlider').find('a').attr('tabindex', -1);
		    $('.hotSlider').find('li').not('.bx-clone').eq( currentIndex ).find('a').attr('tabindex', 0);
		},
		onSlideBefore: function($slideElement, oldIndex, newIndex){
		    $('.hotSlider').find('a').attr('tabindex', -1);
		    $('.hotSlider').find('li').not('.bx-clone').eq( newIndex ).find('a').attr('tabindex', 0);
		}
	});




});

/* 메인리뉴얼 주요사업 */
$(function(){
/*	$('.majorSlider').bxSlider({
	  auto: false,
	  autoControls: false,
	  pager: false,
	  moveSlideQty: 1,
	  minSlides: 1,
	  maxSlides: 9,
	  slideMargin: 5,
	  moveSlides: 1
	});
*/

	var majorSlider = $('.majorSlider').bxSlider({
		auto: false,
		autoControls: false,
		pager: false,
		moveSlideQty: 1,
		minSlides: 1,
		maxSlides: 9,
		slideMargin: 5,
		moveSlides: 1,
		prevSelector: '.visual_control2',
		nextSelector: '.visual_control2',
		startText: '메인배너 자동넘김 시작',
		stopText: '메인배너 자동넘김 정지',
		preloadImages: 'all',
		onSliderLoad: function(currentIndex){
		    var itemSize = $('.majorSlider li').not('.bx-clone').length;
		   /*	 var autoControlsPosition = itemSize * 31;
	    if( itemSize > 1 ) {
	        $('.visual_pause_play').css('marginLeft', '-'+(autoControlsPosition+30)+'px');
	    } else {
	        $('.visual_pause_play').hide();
	        $('.visual_pager').hide();
	    }*/
		    $('.majorSlider').find('.bx-clone a').attr('tabindex', -1);
		    $('.majorSlider').find('li').not('.bx-clone').eq( currentIndex ).find('a').attr('tabindex', 0);
		},
		onSlideBefore: function($slideElement, oldIndex, newIndex){
		    $('.majorSlider').find('.bx-clone a').attr('tabindex', -1);
		    $('.majorSlider').find('li').not('.bx-clone').eq( newIndex ).find('a').attr('tabindex', 0);
		}
	});

});
/* 임업서비스hot임업진흥원의 주요 서비스 */
$(function(){
/*	$('.majorhotSlider').bxSlider({
	  auto: false,
	  autoControls: false,
	  pager: false,
	  slideMargin: 18,
	  moveSlides: 1
	});
*/
	var majorhotSlider = $('.majorhotSlider').bxSlider({
		auto: false,
		autoControls: false,
		pager: false,

/*		moveSlideQty: 1,
		slideMargin: 5,
		moveSlides: 1,	*/

		moveSlideQty: 1,
		minSlides: 1,
		maxSlides: 20,
		slideMargin: 5,
		moveSlides: 1,


		prevSelector: '.visual_control3',
		nextSelector: '.visual_control3',
		startText: '메인배너 자동넘김 시작',
		stopText: '메인배너 자동넘김 정지',
		preloadImages: 'all',
		onSliderLoad: function(currentIndex){
		    var itemSize = $('.majorhotSlider li').not('.bx-clone').length;
		   /*	 var autoControlsPosition = itemSize * 31;
	    if( itemSize > 1 ) {
	        $('.visual_pause_play').css('marginLeft', '-'+(autoControlsPosition+30)+'px');
	    } else {
	        $('.visual_pause_play').hide();
	        $('.visual_pager').hide();
	    }*/
		    $('.majorhotSlider').find('.bx-clone a').attr('tabindex', -1);
		    $('.majorhotSlider').find('li').not('.bx-clone').eq( currentIndex ).find('a').attr('tabindex', 0);
		},
		onSlideBefore: function($slideElement, oldIndex, newIndex){
		    $('.majorhotSlider').find('.bx-clone a').attr('tabindex', -1);
		    $('.majorhotSlider').find('li').not('.bx-clone').eq( newIndex ).find('a').attr('tabindex', 0);
		}
	});

});

/*$(function(){
	$(".majorSlide li").bind("mouseenter focusin", function(){
		$(this).children('.majorShow').css('display','block');
	});
	$(".majorSlide li").bind("mouseleave focusout", function(){
		$(this).children('.majorShow').css('display','none');
	});
});*/

$(function(){
	$(".majorSlide li").bind("mouseenter", function(){
		$(this).children('.majorShow').css('display','block');
	});
	$(".majorSlide li").bind("mouseleave", function(){
		$(this).children('.majorShow').css('display','none');
	});
});

$(function(){
   $('.majorTxt').bind('focusin', function() {
      $(this).parent().find('.majorShow').show().parent().siblings().find('.majorShow').hide();
   });
});

/* 대국민 임업인 임업서비스 탭메뉴 */
$(function () {
    $(".tab_content").hide();
    $(".tab_content:first").show();

    $("ul.tabs li").click(function () {
    	var tab1idx = $(this).index();
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();
        $(".tab_content").eq(tab1idx).fadeIn();
        //var activeTab = $(this).attr("rel");
        //$("#" + activeTab).fadeIn()
    });
});

$(function () {

	var mainTabs2Sts = 0; // 로딩시 0 한번의 클릭이라도 받게되면 1
    var mainTabs2Sts2 = 0 ; // 초기 0 클릭이 됬을때 1
    var mainTabs2Idx = 0;
    var mainTabs2leng = $("ul.tabs2 li").length;
    $(".tab_content2").hide();
    $(".tab_content2:first").show();

    $("ul.tabs2 li").click(function () {
    	var tab2idx = $(this).index();
        mainTabs2Idx = tab2idx;
        $("ul.tabs2 li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content2").hide();
        $(".tab_content2").eq(tab2idx).fadeIn();
        //var activeTab = $(this).attr("rel");
        //$("#" + activeTab).fadeIn()
        mainTabs2Sts2 = 1;

    });

     $("ul.tabs2 li a").bind("focusout",function () {
    	var stsTarget = $(this).parent("li").index();
    	console.log(stsTarget);
    	//로딩시 포커스이동
        if (mainTabs2Sts==0){
            $(".tab_content2").eq(0).find("table tr td .moreDe").focus();
        }
        //클릭했을때
        if(mainTabs2Sts2==1){
        	if($(".tab_content2").eq(stsTarget).find("table tr td a").hasClass("moreDe")){
        		$(".tab_content2").eq(stsTarget).find("table tr td .moreDe").focus();
	        }
	        else{
	        	$(".tab_content2").eq(stsTarget).find("table tr td .imgThumb a").focus();
	        }
        }
        //마지막 컨텐츠 빠져나올 수 있게
        if(mainTabs2Sts2==0 && stsTarget==4){
        	$(".popZone .popup_pause_play .bx-stop").focus();
        }
    });

    $(".tab_content2 .golist").bind("focusout",function(){
    	if(mainTabs2Sts==0){
    		mainTabs2Sts = 1;
    	}
    	mainTabs2Sts2 = 0;

	    mainTabs2Idx = mainTabs2Idx + 1;
    	if(mainTabs2Idx < mainTabs2leng){
    		$("ul.tabs2 li").eq(mainTabs2Idx).find("a").focus();
    	}
    });
});


$(function(){
	$('.tab_content ul li').click(function() {
		$(".tab_content ul li").removeClass("active");
		$(this).addClass("active");
	});
});

$(function(){
	$('.tab_content2 ul li').click(function() {
		$(".tab_content2 ul li").removeClass("active");
		$(this).addClass("active");
	});
});

/* 팝업존 */

$(function(){
/*	$('.popupSlider').bxSlider({
	  auto: true,
	  autoControls: true,
	  pager: false,
	  displaySlideQty: 1,
	  moveSlideQty: 1,
	  minSlides: 1,
	  maxSlides: 12,
	  slideMargin: 18,
	  moveSlides: 1
	});
*/
	var popupSlider = $('.popupSlider').bxSlider({
		auto: true,
		autoControls: true,
		pause: 7000,
		pager: false,
		displaySlideQty: 1,
		moveSlideQty: 1,
		minSlides: 1,
		maxSlides: 12,
		slideMargin: 18,
		autoControlsSelector:'.popup_pause_play',
		moveSlides: 1,
		prevSelector: '.popup_control',
		nextSelector: '.popup_control',
		startText: '메인배너 자동넘김 시작',
		stopText: '메인배너 자동넘김 정지',
		preloadImages: 'all',
		onSliderLoad: function(currentIndex){
		    var itemSize = $('.popupSlider li').not('.bx-clone').length;
		    $('.popupSlider').find('a').attr('tabindex', -1);
		    $('.popupSlider').find('li').not('.bx-clone').eq( currentIndex ).find('a').attr('tabindex', 0);
		},
		onSlideBefore: function($slideElement, oldIndex, newIndex){
		    $('.popupSlider').find('a').attr('tabindex', -1);
		    $('.popupSlider').find('li').not('.bx-clone').eq( newIndex ).find('a').attr('tabindex', 0);
		}
	});
});

/* snsToggle */
$(function(){
	$('.toggleBtn').click(function() {
		$(this).toggleClass('on');
		$('.mainBlock_03').slideToggle(200);
	});
});

$(function(){
	$(".snsBlock ul li").bind("mouseenter", function(){
		$(this).children('.snsOrange').css('display','block');
	});
	$(".snsBlock ul li").bind("mouseleave", function(){
		$(this).children('.snsOrange').css('display','none');
	});
});

/*$(function(){
	$(".snsBlock ul li a").focusin(function() {
		$(this).children('.snsOrange').css('display','block');
	});
	$(".snsBlock ul li a").focusout(function() {
		$(this).children('.snsOrange').css('display','none');
	});
});*/

$(function(){
	$(".majorhotSlider li .mjBlock a").focusin(function() {
		$(this).parent().parent('li').addClass("coco");
	});
	$(".majorhotSlider li .mjBlock a").focusout(function() {
		$(this).parent().parent('li').removeClass("coco");
	});
});

$(function(){
	$(".blink_a").focusin(function() {
		  $(".majorTxt_1").focus();
	});
});




/*20181101 메인 리뉴얼*/
$(function(){
    /*메인슬라이드*/
    var renewalMajorSlider = $('.visaul_box').bxSlider({
		auto: true,
		pager: true,
        moveSlides: 1,
        autoControls: false,
        infiniteLoop: true,
		prevSelector: '.visual .prev',
		nextSelector: '.visual .next',
        pagerSelector: '.visual .built_box .built',
		startText: '메인배너 자동넘김 시작',
		stopText: '메인배너 자동넘김 정지',
		preloadImages: 'all',
		onSliderLoad: function(currentIndex){
		    var itemSize = $('.visaul_box div').not('.bx-clone').length;
		   /*	 var autoControlsPosition = itemSize * 31;
	    if( itemSize > 1 ) {
	        $('.visual_pause_play').css('marginLeft', '-'+(autoControlsPosition+30)+'px');
	    } else {
	        $('.visual_pause_play').hide();
	        $('.visual_pager').hide();
	    }*/
		    $('.visaul_box').find('.bx-clone a').attr('tabindex', -1);
		    $('.visaul_box').find('li').not('.bx-clone').eq( currentIndex ).find('a').attr('tabindex', 0);
		},
		onSlideBefore: function($slideElement, oldIndex, newIndex){
		    $('.majorSlider').find('.bx-clone a').attr('tabindex', -1);
		    $('.majorSlider').find('li').not('.bx-clone').eq( newIndex ).find('a').attr('tabindex', 0);
		}
	});

    /*주요사업*/
    var renewalMajorSlider1 = $('.book_list_box').bxSlider({
		auto: false,
		autoControls: false,
		pager: false,
		infiniteLoop: true,
		moveSlideQty: 1,
		minSlides: 1,
		maxSlides: 9,
		slideMargin: 30,
		moveSlides: 1,
		prevSelector: '.book .prev',
		nextSelector: '.book .next',
		startText: '메인배너 자동넘김 시작',
		stopText: '메인배너 자동넘김 정지',
		preloadImages: 'all',
		onSliderLoad: function(currentIndex){
		    var itemSize = $('.book_list_box div').not('.bx-clone').length;
		   /*	 var autoControlsPosition = itemSize * 31;
	    if( itemSize > 1 ) {
	        $('.visual_pause_play').css('marginLeft', '-'+(autoControlsPosition+30)+'px');
	    } else {
	        $('.visual_pause_play').hide();
	        $('.visual_pager').hide();
	    }*/
            $('.book_list_box').find('.book_list').attr('tabindex', -1);
            $('.book_list_box').find('.book_list').not('.bx-clone').attr('tabindex', 0);
		    $('.book_list_box').find('.bx-clone a').attr('tabindex', -1);
		    $('.book_list_box').find('.book_list').not('.bx-clone').eq( currentIndex ).find('a').attr('tabindex', 0);

            /*book슬라이드 오버&포커스 .on*/
            $('.book_list').bind("mouseenter focusin",function(){
                $('.book_list').removeClass('on');
                $(this).addClass('on');
            }).mouseleave(function(){
                $('.book_list').removeClass('on');
            });
            /*더보기에서 나왔을때 focusout*/
            $('.book_list>a.book_link').focusout(function(){
                 $('.book_list').removeClass('on');
            });
		},
		onSlideBefore: function($slideElement, oldIndex, newIndex){
            $('.book_list_box').find('.book_list').attr('tabindex', -1);
            $('.book_list_box').find('.book_list').not('.bx-clone').attr('tabindex', 0);
		    $('.book_list_box').find('.bx-clone a').attr('tabindex', -1);
		    $('.book_list_box').find('.book_list').not('.bx-clone').eq( newIndex ).find('a').attr('tabindex', 0);
		}
	});



    $(function(){
	    var masterSlider = $('.hot_box').bxSlider({
	        auto: false,
			autoControls: false,
	        pager: false,
	        infiniteLoop: true,
	        minSlides:4,
	        maxSlides: 4,
	        moveSlides:4,
	        slideWidth: 278,
	        prevSelector: '.sect05_top .prev',
			nextSelector: '.sect05_top .next',
			onSliderLoad: function(currentIndex){
			    var itemSize = $('.hot_box div').not('.bx-clone').length;
			   /*	 var autoControlsPosition = itemSize * 31;
			  if( itemSize > 1 ) {
			      $('.visual_pause_play').css('marginLeft', '-'+(autoControlsPosition+30)+'px');
			  } else {
			      $('.visual_pause_play').hide();
			      $('.visual_pager').hide();
			  }*/
		      $('.hot_box').find('.hot_list').find('a').attr('tabindex', -1);
			    $('.hot_box').find('.hot_list').not('.bx-clone').find('a').attr('tabindex', 0);
			    $('.hot_box').find('.bx-clone a').attr('tabindex', -1);
			    $('.hot_box').find('.hot_list').not('.bx-clone').eq( currentIndex ).find('a').attr('tabindex', 0);

			},
			onSlideBefore: function($slideElement, oldIndex, newIndex){
			   	$('.hot_box').find('.hot_list').find('a').attr('tabindex', -1);
			    $('.hot_box').find('.hot_list').not('.bx-clone').find('a').attr('tabindex', 0);
			    $('.hot_box').find('.bx-clone a').attr('tabindex', -1);
			    $('.hot_box').find('.hot_list').not('.bx-clone').eq( newIndex ).find('a').attr('tabindex', 0);
			}
		});
		    $('.hot_box').on('click', 'div', gotoSlide);

		function gotoSlide(){
		    var idx = (parseInt($(this).data('slide')) + masterSlider.getSlideCount() - 2) % masterSlider.getSlideCount();
		    masterSlider.goToSlide(idx);
		};

		/*hot 슬라이드 오버&포커스 .on*/
	    $('.hot_list').bind("mouseenter focusin", function(){
	        $('.hot_list').removeClass('on');
	        $(this).addClass('on');
	    }).bind("mouseleave focusout", function(){
	         $('.hot_list').removeClass('on');
	    });
    });

    /*탭클릭*/
    $('.tap_box>div>ul>li>a').bind("click",function(e){
        var target = $(e.currentTarget);
        cusMouseenterEvent(target);
    });

    function cusMouseenterEvent(e) {
		e.parent().siblings().removeClass('tap_on');
		e.parent().addClass('tap_on');
	}
	function cusMouseleaveEvent(e) {
		e.parent().removeClass('tap_on');
	}

    /*sect03_tap 탭 클릭*/
    $('.sect03_tap>ul>li>a').bind("click",function(e){
        var target = $(e.currentTarget);
        cusMouseenterEvent(target);
    });

    /* 팝업존 */
    var renewalPopupSlider = $('.popup_slider').bxSlider({
        auto: true,
        //autoControls: true,
        moveSlides: 1,
        pause: 7000,
        pager: false,
        displaySlideQty: 1,
        moveSlideQty: 1,
        //minSlides: 1,
        //maxSlides: 12,
        //slideMargin: 18,
        //autoControlsSelector:'.popup_pause_play',
        moveSlides: 1,
        prevSelector: '.popup_control',
        nextSelector: '.popup_control',
        startText: '메인배너 자동넘김 시작',
        stopText: '메인배너 자동넘김 정지',
        preloadImages: 'all',
        onSliderLoad: function(currentIndex){
            var itemSize = $('.popup_slider li').not('.bx-clone').length;
            $('.popup_slider').find('a').attr('tabindex', -1);
            $('.popup_slider').find('li').not('.bx-clone').eq( currentIndex ).find('a').attr('tabindex', 0);
        },
        onSlideBefore: function($slideElement, oldIndex, newIndex){
            $('.popup_slider').find('a').attr('tabindex', -1);
            $('.popup_slider').find('li').not('.bx-clone').eq( newIndex ).find('a').attr('tabindex', 0);
        }
    });

    /* 팝업존 재생 정지버튼 */
    $(".pop_zone .bx-controls-auto .bx-controls-auto-item a").click(function(){
        $(".pop_zone .bx-controls-auto .bx-controls-auto-item a").parent().removeClass('on');
        $(this).parent().siblings().addClass('on');
        if($(this).hasClass("bx-start")){
           renewalPopupSlider.startAuto();
        }
        else{
           renewalPopupSlider.stopAuto();
        }
    });


    /*메인퀵메뉴-------------------*/
    var c=0; //각 콘텐츠 순서번호
    $('.pullpage_scroll ul li').eq(c).addClass('on'); /*블릿버튼 처음스타일*/

    /*버튼 클릭*/
    $('.pullpage_scroll ul li').click(function(){
        c = $(this).index(); /*클릭한 li가 몇번째인지 알려주기*/
        var h_top = $('.content>div').eq(c).offset().top;

        /*화면 기준 높이 구하기(.offset()) top-50은 패딩 주었던것 빼주기 */

        if($(this).index()==0){
            h_top=0;
        }

        /*화면 이동을 하려면 스크롤바를 위에서 구한 높이로 바꿔주기*/
        $('html, body').animate({
            scrollTop : h_top
        	}, 800, function(){
        		$('.content>div').eq(c).find('a').eq(0).focus(); //이동한 컨텐츠에 포커스 보내기
        	});
    });

    /*높이에 따른 탭*/
    var offset =700;

    /*윈도우 창, 스크롤이 이동할때마다 검사를 하게*/
    $(window).scroll(function(){
        var st = $(this).scrollTop(); /*창의 이동값*/
        if(st<offset){
            $('.pullpage_scroll ul').addClass('color').fadeIn(800);/*시간0.5*/

        }else{
             $('.pullpage_scroll ul').removeClass('color').fadeIn(800);/*시간0.5*/
        }

        /*블릿버튼 스타일*/
        $('.content> div').each(function(){
            /*스크롤의 높이*/
            var renewalScrollIdx = $(this).index();
            if(renewalScrollIdx>1){
            	renewalScrollIdx=renewalScrollIdx-1;
            }

            if($(this).offset().top-246<=st){
                /*블릿버튼*/
                $('.pullpage_scroll ul li').removeClass('on');
                $('.pullpage_scroll ul li').eq(renewalScrollIdx).addClass('on');
            }
        });
    });//scroll버튼 보여주기 끝

    /*메인슬라이드영역 마우스 이미지 스크롤 스윙*/
    function swing() {
        $('.scroll > span > span > span > span').animate({'top':'7px'},700).animate({'top':'26px'},700, swing); /*$('.scroll>ul>li>p').animate({'bottom':'-15px'},600).animate({'bottom':'-20spx'},600, swing);*/
    }
    swing();

     /*메인퀵메뉴 화면 사이즈에 따른 조정*/
    var quick_on; // mb0,pc1

    $(window).width(function(){
            if(window.innerWidth<=1500){
               $('.pullpage_scroll').css('display','none');
                quick_on = 0 ;

            }else if(window.innerWidth>1500){
                $('.pullpage_scroll').css('display','block');
                quick_on = 1 ;
            }
      });

    $(window).resize(function(){

            if(window.innerWidth<=1500 && quick_on == 1){
               $('.pullpage_scroll').css('display','none');
                quick_on = 0 ;
            }else if(window.innerWidth>1500 && quick_on == 0){
                $('.pullpage_scroll').css('display','block');
                quick_on = 1 ;
            }
      });

    /*탭인덱스*/
    $('.tab_idx').attr('tabindex','0');
});

/*20181101 메인 리뉴얼 js 끝*/
//20201106 sns
$(function(){
	$('.sns_new li').bind("mouseenter focusin",function(){
		 $('.sns_new li').removeClass('on');
		 $(this).addClass('on');
	});
	$('.sns_new li').bind("mouseleave focusout",function(){
		 $('.sns_new li').removeClass('on');
	});

});
