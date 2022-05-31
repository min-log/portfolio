$(function() {
	//비주얼 이미지 바꿈
	if($('h2>img')){
		switch($('h2>img').prop('alt')){
			case '임업서비스':
				$('#visual').text('Kofpi for U 고객과 함께하는 임업파트너! 임업서비스 전문기관 한국임업진흥원');
				$('#visual').addClass('service');
				break;
			case '임업정보':
				$('#visual').text('Kofpi for U 고객과 함께하는 임업파트너! 임업서비스 전문기관 한국임업진흥원');
				$('#visual').addClass('info');
				break;
			case '정책':
				$('#visual').text('Kofpi for U 고객과 함께하는 임업파트너! 임업서비스 전문기관 한국임업진흥원');
				$('#visual').addClass('policy');
				break;
			case '정보공개':
				$('#visual').text('Kofpi for U 고객과 함께하는 임업파트너! 임업서비스 전문기관 한국임업진흥원');
				$('#visual').addClass('public');
				break;
			case '알림/홍보':
				$('#visual').text('Kofpi for U 고객과 함께하는 임업파트너! 임업서비스 전문기관 한국임업진흥원');
				$('#visual').addClass('notice');
				break;
			case '고객마당':
				$('#visual').text('Kofpi for U 고객과 함께하는 임업파트너! 임업서비스 전문기관 한국임업진흥원');
				$('#visual').addClass('customer');
				break;
			case '진흥원 소개':
				$('#visual').text('Kofpi for U 고객과 함께하는 임업파트너! 임업서비스 전문기관 한국임업진흥원');
				$('#visual').addClass('intro');
				break;
			case '회원정보':
				$('#visual').text('Kofpi for U 고객과 함께하는 임업파트너! 임업서비스 전문기관 한국임업진흥원');
				$('#visual').addClass('member');
				break;
			case '마이페이지':
				$('#visual').text('Kofpi for U 고객과 함께하는 임업파트너! 임업서비스 전문기관 한국임업진흥원');
				$('#visual').addClass('mypage');
				break;
			case '통합검색':
				$('#visual').text('Kofpi for U 고객과 함께하는 임업파트너! 임업서비스 전문기관 한국임업진흥원');
				$('#visual').addClass('total_search');
				break;
		}
	}

	//lnb메뉴 하일라잇
	$(".lnb > ul.depth2 .tit").bind("mouseover focusin",function(){
		$(".lnb > ul.depth2 li").removeClass("on");
		$(this).parent().addClass("on");
		$(this).next(".depth3").show();
	});

	$(".gnbMenu ul li .depth2").bind("mouseenter focusin",function(){
		$(".gnbMenu ul li .depth2").removeClass("on");
		$(this).children("li").addClass("on");
		$(this).addClass("on");
	});
	$(".gnbMenu ul li .depth2").bind("mouseleave focusout",function(){
		$(".gnbMenu ul li .depth2 li").removeClass("on");	});
		$(this).removeClass("on");

	//gnb 메뉴열림
	$(".gnb .depth01").bind("mouseenter focusin", function(){
		$(".depth02").hide();
		$(this).next(".depth02").show();
		$(this).children("img").attr("src",($(this).children("img")).attr("src").replace("_off.gif","_on.gif"));
	});

	$(".gnb>li").bind("mouseleave", function(){
		$(".depth02").hide();
		$(this).children('.depth01').children("img").attr("src",($(this).children('.depth01').children("img")).attr("src").replace("_on.gif","_off.gif"));
	});

	$(".gnb>li .depth01").bind("focusout", function(){
		$(this).children("img").attr("src",($(this).children("img")).attr("src").replace("_on.gif","_off.gif"));
	});

	$(".gnbout").bind("focusout", function(){
		$(".depth02").hide();
	});

});

function setDatePicker(){
	//기간 달력
	var dates = $(".fcal, .tcal").datepicker({
		defaultDate: "+0w",
		dateFormat:"yy-mm-dd",
		regional:"kr",
		onSelect: function( selectedDate ) {
			var option = $(this).attr("class").indexOf("fcal") >= 0 ? "minDate" : "maxDate",
				instance = $( this ).data( "datepicker" ),
				date = $.datepicker.parseDate(
					instance.settings.dateFormat ||
					$.datepicker._defaults.dateFormat,
					selectedDate, instance.settings );
			dates.not(this).datepicker( "option", option, date );
		}
	});

	//싱글 달력
	$(".ncal").datepicker({
		defaultDate: "+0w",
		dateFormat:"yy-mm-dd",
		regional:"kr"
	});

	//월별 달력
	$(".mcal").datepicker({
		defaultDate: "+0w",
		dateFormat:"yy-mm",
		regional:"kr"
	});

	//주간달력
	$(".wcal").datepicker({
		showWeek: true,
		dateFormat:"yy-mm-dd",
		calculateWeek: this.iso8601Week,
		firstDay: 1,
		onSelect: function(dateText){
			$("#week").val($.datepicker.iso8601Week(new Date(dateText)));
		}
	});
}

//textarea글자수 제한
function IsObj(oObj) { return ((typeof(oObj) != 'undefined') && (oObj != null)); }
function ta_cls(oObj) {alert(oObj.dirty); if (oObj.dirty == 'n') { oObj.dirty = 'y'; oObj.value = ''; } }
function is_empty(pVal) { return !(/\S+/.test(pVal)); }

function onkeyup_ps(texta,wlen)
{
	if (!IsObj(texta))
	{ return false; }

	ta_textarea_check_len(texta, 'tacnt', true,wlen);
}

function ta_textarea_check_len(otxt, id, is_alert,wlen)
{
	if (otxt.dirty == 'n')
	{ return; }
	var maxbyte = wlen;
	var textbyte = len_byte(otxt.value);
	var sp = document.getElementById(id);
	if (IsObj(sp)) {
		sp.innerHTML = textbyte;
	}
	if (is_alert && (textbyte > maxbyte)) {
		alert('내용을 한글' + (maxbyte / 2) + '자(' + maxbyte + 'byte) 이내로 작성 해주세요.');
	}
}



function left_byte(pVal, pLen) {
	var i, nLen = pVal.length, nByte;
	var ret = '';
	var ret_len = 0;
	for (i = 0; i < nLen; i++) {
		nByte = 1;
		if (pVal.charCodeAt(i) > 127) { nByte++; }
		if (pLen < (ret_len + nByte)) { break; }
		ret += pVal.charAt(i);
		ret_len += nByte;
	}
	return ret;
}

function len_byte(pVal)
{
	var i, nLen = pVal.length, nDByte = 0;
	for (i = 0; i < nLen; i++) { if (pVal.charCodeAt(i) > 127) { nDByte++; } }
	return (nLen + nDByte);
}


//유효성체크(Null)
function fnNullCheck(obj, msg){
	if(obj.val() == ""){
		alert(msg);
		obj.focus();
		return true;
	}
	return false;
}

//숫자만
function fnIsNumber(){
	if(((event.keyCode < 96) || (106 < event.keyCode)) && ((event.keyCode < 48) || (57 < event.keyCode)) && 45 != event.keyCode && 8 != event.keyCode){
		alert("숫자만 입력가능합니다");
		if(event.preventDefault)
			event.preventDefault();
		else
			event.returnValue=false;
	}
}

//주소검색 - 2013.12.13 김석중
function fn_egov_ZipSearch(org) {
	url = "/juso/road.do?type="+org;
	window.open(url, "result1122", "resizable=no, status=no, scrollbars=yes, toolbar=no, menubar=no, width=440, height=420");
};

//openapi 주소검색 2014.10.07
function fn_new_ZipSearch(org) {
	url = "/juso.do?type="+org;
	window.open(url, "result", "resizable=yes, status=no, scrollbars=yes, toolbar=no, menubar=no, width=660, height=600");
};


//한글입력 금지
function fnCheckNotKorean(koreanStr){
    for(var i=0;i<koreanStr.length;i++){
        var koreanChar = koreanStr.charCodeAt(i);
        if( !( 0xAC00 <= koreanChar && koreanChar <= 0xD7A3 ) && !( 0x3131 <= koreanChar && koreanChar <= 0x318E ) ) {
        }else{
            //hangul finding....
            return false;
        }
    }
    return true;
}

//maxlength 만큼 옮기면 다음으로 이동하기....
function nextFocus(sFormName,sNow,sNext)
{
	var sForm = 'document.'+ sFormName +'.';
	var oNow = eval(sForm + sNow);

	if (typeof oNow == 'object')
	{
		if ( oNow.value.length == oNow.maxLength)
		{
			var oNext = eval(sForm + sNext);

			if ((typeof oNext) == 'object')
				oNext.focus();
		}
	}
};

//팝업 - 팝업창 화면중앙 오픈 ##################################################
function openPopupCenter(theURL, winName, width, height, remFeatures) {

	var left = (screen.width/2) - (width/2);
	var top = (screen.availHeight/2) - (height/2);
	var features = "left="+left+",top="+top+",width="+width+",height="+height+",scrollbars=yes";
	if (remFeatures)
		features += ","+remFeatures;

	MM_openBrWindow(theURL, winName, features);
}
//팝업 ##################################################
function MM_openBrWindow(theURL, winName, features) { //v2.0
	if (features && features.indexOf("status") < 0)
		features += ",status=yes";
	var popup = window.open(theURL, winName, features);
	popup.focus();
}


//다운로드##################################################
function fnDownload(seq){
	$("#fileSeq").val(seq);
	$("#form").attr("action", "/attach/download.do");
	$("#form").attr("target", "_self");
	$("#form").submit();
}

//NOTITYPE 게시판 파일 다운로드###################################
function fnNotiDownload(seq){
	$("#fileSeq").val(seq);
	$("#form").attr("action", "/noti/download.do");
	$("#form").attr("target", "_self");
	$("#form").submit();
}

//NOTITYPE 게시판 파일 다운로드###################################
function fnEduDownload(seq){
	$("#fileSeq").val(seq);
	$("#form").attr("action", "/service/download.do");
	$("#form").attr("target", "_self");
	$("#form").submit();
}

//NOTITYPE 게시판 PDF 파일 다운로드###################################
function fnNotiPdfDownload(seq){
	$("#fileSeq").val(seq);
	$("#form").attr("action", "/noti/pdfDownload.do");
	$("#form").attr("target", "_self");
	$("#form").submit();
}

//NOTITYPE 게시판 PDF 파일 다운로드###################################
function fnCommPdfDownload(seq){
	$("#fileSeq").val(seq);
	$("#form").attr("action", "/attach/pdfDownload.do");
	$("#form").attr("target", "_self");
	$("#form").submit();
}

//CUSTOMERTYPE 게시판 파일 다운로드###################################
function fnCustomDownload(seq){
	$("#fileSeq").val(seq);
	$("#form").attr("action", "/customer/download.do");
	$("#form").attr("target", "_self");
	$("#form").submit();
}

function leftHigh(d1, d2, d3, d4){
	d1--; d2--; d3--; d4--;

	$('.gnb>.gnb1').eq(d1).addClass("ton");
	//$('.gnb>.gnb1').eq(d1).find('img').attr('src',$('.gnb>.gnb1').eq(d1).find('img').attr('src').replace("_off.gif","_on.gif"));
	$('.lnb>.depth2>li').eq(d2).addClass("ton");
	$('.lnb>.depth2>li').eq(d2).children('.depth3').children('li').eq(d3).children('a').addClass("on").next().find('a').eq(d4).addClass("on");
}

function fnfixDownload(dis,src){
	$("#dis").val(dis);
	$("#src").val(src);
	$("#fixform").attr("action", "/attach/fixdownload.do");
	$("#fixform").attr("target", "_self");
	$("#fixform").submit();
}

//페이지
function searchPage(cPage) {
	location.href = location.pathname + "?cPage=" + cPage;
}

//퀵 탑버튼
$(window).scroll(function() {
	if ($(window).scrollTop() > 423){
		$("#btn_gotop").show;
		var position = $(window).scrollTop();
		$("#btn_gotop").stop().animate({"top":position+$(window).height()-320+"px"},1000);
	} else if ($(window).scrollTop() < 300){
		$("#btn_gotop").css("top", "777px");
	}
});




//퀵
/*$(window).scroll(function()
{
    $('#quick').animate({top:$(window).scrollTop()+"px" },{queue: false, duration: 350});
});

$('#quick').click(function()
{

    $('#quick').animate({ top:"+=15px",opacity:0 }, "slow");
});

*/



	$(function(){

	var top_y_limit = 0 ;  //오른쪽 이동 레이어 값 정의
	var fix_top = 80 ;        //상단에서 어느정도 떨어질것인지 정의
	var move_speed = 800;  // 이동 감지 시간 0.8초(너무 짧으면 민감함)
	var id_value = 'quick';  //아이디 값 정의
	jQuery(document).ready(function(){
	//----------------------------------
	//이동 레이어 정의
	var offset = jQuery("#"+id_value);  //레이어 위치 정의
	top_y_limit = offset.offset().top - fix_top;    //항상 상단보다 fix_top 아래에서
	var rightmenu_t = setInterval(rightmenu_move,move_speed); //오른쪽 위아래이동 적용
	//----------------------------------
	});
	//----------------------------------
	//오른쪽 이동 함수를 정의
	function rightmenu_move()
	{
	var scrolltop = jQuery(window).scrollTop();
	if(scrolltop > top_y_limit){ jQuery("#"+id_value).animate({"top": (parseInt(scrolltop)-parseInt(top_y_limit))+"px"},"slow");}
	else {jQuery("#"+id_value).animate({"top": "0"},"slow"); }
	}

	});









$(window).scroll(function() {
	if ($(window).scrollTop() > 423){
		$(".totals #btn_gotop").show;
		var position = $(window).scrollTop();
		$(".totals #btn_gotop").stop().animate({"top":position+$(window).height()-320+"px"},1000);
	} else if ($(window).scrollTop() < 300){
		$(".totals #btn_gotop").css("top", "777px");
	}
});




$("#btn_gotop a").click(function(){
	$("#btn_gotop").css("top", "777px");
});
$(".totals #btn_gotop a").click(function(){
	$("#btn_gotop").css("top", "777px");
});


function topFavorite(query){
	var fnm = document.topSearch;
	fnm.query.value=query;
	fnm.submit();
	return false;
}

//20150126추가
$(document).ready(function() {
	$("select[name='select_v']").change(function() {
		if($(this).val() == "v_1") {
		$('.change01').css('display','block');
		$('.change02').css('display','none');
		$('.change03').css('display','none');
		$('.change04').css('display','none');
		} else if($(this).val() == "v_2")  {
		$('.change01').css('display','none');
		$('.change02').css('display','block');
		$('.change03').css('display','none');
		$('.change04').css('display','none');
		}else if($(this).val() == "v_3")  {
		$('.change01').css('display','none');
		$('.change02').css('display','none');
		$('.change03').css('display','block');
		$('.change04').css('display','none');
		}else  {
		$('.change01').css('display','none');
		$('.change02').css('display','none');
		$('.change03').css('display','none');
		$('.change04').css('display','block');
		}
	});
});


/* 160120 추가 */

/* $(document).ready(function(){
		$('.norticeSlider').bxSlider({
			slideWidth: 660,
			speed : 1000,
			auto: true,
			pager: true,
			pause: 10000
		});
	});
*/


/*
setTimeout(function() {
   var startTime = (new Date()).getTime();
   draw0(startTime);
   draw(startTime);
   draw2(startTime);
   draw3(startTime);
}, 1000);

*/



/* 160212 추가 */

$(function(){
	$('.openView2').click(function() {
		$(this).toggleClass('on');
		$(this).parent('li').children('ul').slideToggle(200);
	});
});


/* 교육게시판 탭 메뉴 on off */

$(function(){
	$('.iNtab li a').click(function() {
		$('.iNtab li').removeClass('on');
		$(this).parent('li').addClass('on');
	});
	$('.001').click(function() {
		$('.show_001').css('display','block');
		$('.show_002').css('display','none');
		$('.show_003').css('display','none');
	});
	$('.002').click(function() {
		$('.show_001').css('display','none');
		$('.show_002').css('display','block');
		$('.show_003').css('display','none');
	});
	$('.003').click(function() {
		$('.show_001').css('display','none');
		$('.show_002').css('display','none');
		$('.show_003').css('display','block');
	});
});

/* 170228 추가 */
$(function(){
	var inBtn = $(".introduceInfo_ul li a");
	var inBox = $(".introduceInfo_box");
	inBtn.on("click", introBox);
	function introBox(e){
		var boxIndex = $(e.currentTarget).parent("li").index();
		inBox.removeClass("on");
		inBox.eq(boxIndex).addClass("on");
	}
});


/* 180226 추가 */
$(function(){
	var cusTabInpage = function(e){
		var cusTabIdx = $(this).parent('li').index();
		console.log(cusTabIdx);
		$(this).parent('li').siblings().removeClass('on');
		$(this).parent('li').addClass('on');
		$('.cusTabInpageCon').removeClass('on');
		$('.cusTabInpageCon').eq(cusTabIdx).addClass('on');
	}
	$('.cusTabInpage ul li a').bind('click',cusTabInpage);
});



/*20181101 메인 리뉴얼*/
$(function(){
	/*네비게이션*/
    $('.gnb_1>li').bind('mouseenter focusin',function(e){
    	var newtypeTarget1 = $(this).index();
    	var gnb_new_type_bg_bodyh = $("body").height();
		gnb_new_type_bg_bodyh = gnb_new_type_bg_bodyh-246;
		var newtypeTarget1h = $(".gnb_1>li").eq(newtypeTarget1).find(".gnb_2_newtype").height();
		$(".gnb_new_type_bg02").removeClass('on');
    	$(".gnb_new_type_bg").removeClass('on');

		$(".gnb_new_type_bg02").css({height:gnb_new_type_bg_bodyh});
		$(".gnb_new_type_bg02").addClass('on');
		$(".gnb_new_type_bg").css({height:newtypeTarget1h});
    	$(".gnb_new_type_bg").addClass('on');

		var gnb2height2018 = $("#gnb .new_gnb_1 > li").eq(newtypeTarget1).find(".gnb_2_newtype").height();
		var gnbBgHeight2018 = gnb2height2018;
		gnb2height2018 = gnb2height2018-43;
		$("#gnb .new_gnb_1 > li").eq(newtypeTarget1).find(".gnb_2_newtype_tit").css({height:gnb2height2018});
		$("#gnb .new_gnb_1 > li").eq(newtypeTarget1).find(".gnb_2_newtype_tit").find("p").css({height:gnb2height2018});

        //$('.gnb_2').stop().animate({height:'555px'},300);
        //$('.gnb_bg').stop().animate({height:'555px'},300);
        /*2탭스 효과*/
        $('.gnb_1>li').removeClass('on');
        $(this).addClass('on');
    }).mouseleave(function(e){
    	//var newtypeTarget2 = $(this).index();
    	//$(".gnb_new_type_bg02").removeClass('on');
    	//$(".gnb_new_type_bg").removeClass('on');
        //$('.gnb_2').stop().animate({height:'0'},300);
        //$('.gnb_bg').stop().animate({height:'0'},300);
        /*2탭스 효과*/
        //$('.gnb_1>li').removeClass('on');
    });
    $("#gnb").bind("mouseleave",function(){
    	$(".gnb_new_type_bg02").removeClass('on');
    	$(".gnb_new_type_bg").removeClass('on');
    	$('.gnb_1>li').removeClass('on');
    });
    /*포커스*/
    $('.gnb_1>li').focusout(function(){
        //$('.gnb_2').stop().animate({height:'0'},300);
        //$('.gnb_bg').stop().animate({height:'0'},300);
        /*2탭스 효과*/
       //$('.gnb_1>li').removeClass('on');
    });

    /*3댑스 포커스효과*/
    $(".gnb_3_newtype li a").bind("mouseenter focusin",function(){
    	$(this).parent().addClass("on");
    });
    $(".gnb_3_newtype li a").bind("mouseleave focusout",function(){
    	$(this).parent().removeClass("on");
    });
    $(".gnb_1>li").last().find('.gnb_2_newtype').find('ul').find('li').last().find('a').bind("focusout",function(){
    	$(".gnb_new_type_bg02").removeClass('on');
    	$(".gnb_new_type_bg").removeClass('on');
    	$('.gnb_1>li').removeClass('on');
    });

	
		$("#gnb .new_gnb_07 .gnb_2_newtype ul li").eq(5).bind("focusout",function(){
    	$(".gnb_new_type_bg02").removeClass('on');
    	$(".gnb_new_type_bg").removeClass('on');
    	$('.gnb_1>li').removeClass('on');
    });




});

/*20181101 메인 리뉴얼 jquery 종료*/
