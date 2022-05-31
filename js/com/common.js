$(function(){

    //헤더
    var offset =10;
    /*윈도우 창, 스크롤이 이동할때마다 검사를 하게*/
    $(window).scroll(function(){
        var st = $(this).scrollTop(); /*창의 이동값*/
        if(st>offset){
            $('#header').addClass('fix').fadeIn(800);/*시간0.5*/
        }
        if(st == 0){
             $('#header').removeClass('fix').fadeIn(800);/*시간0.5*/
             $('.gnb_wrap').removeClass('on');
        }
    });//scroll버튼 보여주기 끝
    $('.ham_btn').click(function(){
        if($(this).parent('.gnb_wrap').hasClass('on') == true){
            $(this).parent('.gnb_wrap').removeClass('on');
           
        }else{
            $(this).parent('.gnb_wrap').addClass('on');

        }
    });




 });