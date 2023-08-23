  /* section 1  round hover */
  const circleWrap = document.querySelector('.main_greetings_wrap');
  const circleMove = document.querySelector('.con');
  const circleImg = document.querySelector('.img');
  const mouseCoords = circleWrap.getBoundingClientRect();

  circleWrap.addEventListener('mousemove', function(e) {
    const mouseX = e.pageX - circleWrap.offsetLeft;
    const mouseY = e.pageY - circleWrap.offsetTop;

    TweenMax.to(circleMove, 0.5, {
      x: (mouseX - mouseCoords.width / 2) / mouseCoords.width * 50,
      y: (mouseY - mouseCoords.height / 2) / mouseCoords.width * 50,
      ease:"easeOutCirc",
    })
  });

  circleWrap.addEventListener('mousemove', function(e) {
    const mouseX = e.pageX - circleWrap.offsetLeft;
    const mouseY = e.pageY - circleWrap.offsetTop;

    TweenMax.to(circleImg, 0.3, {
      x: (mouseX - mouseCoords.width / 2) / mouseCoords.width * 25,
      y: (mouseY - mouseCoords.height / 2) / mouseCoords.width * 25,
      ease:"easeOutCirc",
    })
  });

  circleWrap.addEventListener('mouseenter', function(e) {
    TweenMax.to(circleMove, 0.3, {
      scale: 0.9
    })
  });

  circleWrap.addEventListener('mouseleave', function(e) {
    TweenMax.to(circleMove, 0.3, {
      x: 0,
      y: 0,
      scale: 1
    })
    TweenMax.to(circleImg, 0.3, {
      x: 0,
      y: 0,
      scale: 1
    })

  });


  /*==========================================================================
  스크롤 트리거 플러그인 활성화
  ==========================================================================*/

  gsap.registerPlugin(ScrollTrigger);


  function SectionGroup__init(){
    console.log('strat')
    let $fullBg = $('.fullbg');
    let $leafImg = $('.leaf_img');
    let $windowHeight = $(window).height();



    $('.section-group').each(function(index, node) {

      let $group = $(this);
      let $section = $group.find(' .section');
      let $con = $group.find(' > .section > .con');

      // 컨텐츠 전체 높이
      let $sectionLeng =$section.length;
      let $groupHeight =($sectionLeng * $windowHeight) + 'px';  // 그룹 높이 = 윈도우 창 높이 * 섹션 개수

      //group 1
      let $group1 = $('.section-group-1');
      let $sec01 =$('.main_greetings_wrap');
      let $sectit = $group1.find('.sec_tit');
      let $circleP = $('.circle');

      let $sec02 =$('.main_introduction_wrap');



      //group 2
      let $group2 = $('.section-group-2');
      let $sec03 =$('.main_prosect_list');
      let $sec03Con = document.querySelector(".prosect_wrap");
      let $sec03wheel = document.querySelector(".wheel");
      let $sec03images = gsap.utils.toArray(".wheel__card");


      //group 3
      let $group3 = $('.section-group-3');

      // 각 섹션 section active
      let $allSection = gsap.utils.toArray(".section-group");
      $allSection.forEach((title) => {
        gsap.to(title, {
          scrollTrigger: {
            trigger: title,
            start: "top top",
            end: "bottom 0",
            toggleClass:  "sec_active",
          }
        })
      });





      /*==================================================
      ***각섹션 별 동작******

      section group 01
      ===================================================*/

      if($group.hasClass('section-group-1')){



            //section move left
            let sectionLeft = gsap.timeline({
              scrollTrigger: {
                trigger: $group1,
                start:"top top",
                end:"bottom top",
                scrub:true,
                pin :true,
                ease:'easeOutQuart',
                duration:1,
              }
            });

            sectionLeft.to($section, {
              xPercent: -100 * ($section.length - 1),
              ease:'easeOutQuart'
            },0.1).to($sectit,{
              x: '100%',	stagger:10
            },0.1).to($circleP,{
              scale:'2.5',
              x: '-200%',
              opacity:0,
              stagger:10,

            },0.1)

      }



      /*===================================================
      section group 02
      ===================================================*/

      if($group.hasClass('section-group-2')){


            let section2Left = gsap.timeline({
              scrollTrigger: {
                trigger: $('.section-group-2 '),
                start:"top top",
                end:"top 100vh",
                scrub:true,
                pin :true,
                ease:'easeOutQuart',
                duration:3
              }
            });

            section2Left.to($('.main_introduction_wrap'),{
              x:'-100%',
              marginLeft:'0'
            },1.5)
            .to($('.main_prosect_wrap ,.main_project_back'),{
                marginLeft:'0'
            },1.5).to($fullBg,{
              x:'-60%',
              y:-100 * ($section.length - 1),
            },1.5);


//        let $group2top = $('.main_prosect_wrap');
//        let group2Start = gsap.timeline({
//          scrollTrigger: {
//            trigger: $group2top,
//            start:"top bottom",
//            //	end:"bottom bottom",
//            scrub:true,
//            pin :false,
//            duration:1,
//            ease:'easeOutQuart',
//            markers:true,
//            //repeatDelay:1,
//            //delaty:0.2,
//          }
//        });
//
//        group2Start.to($group2top,{
//          x:'-60%'
//        },1.5).to($sec03,{
//          x:'0'
//        },1.5).to($fullBg,{
//          x:'-60%',
//          y:-100 * ($section.length - 1),
//        },1.5);
//
//
//        //wheel position
//        let $radius = $sec03wheel.offsetWidth / 2;
//        let $center = $sec03wheel.offsetWidth / 2;
//        let $total = $sec03images.length;
//        let $totalNum = $sec03images.length / 4 ;
//        let slice = (2 * Math.PI) / $total;
//
//        // group and section height
//        let $group2Height= $windowHeight * $total / 6;
//        $group2.height($group2Height+  $windowHeight + "px"); //section 2 개
//        $sec03.height($group2Height + "px");
//
//        $sec03images.forEach((item, i) => {
//          let angle = i * slice;
//          let x = $center + $radius * Math.sin(angle);
//          let y = $center - $radius * Math.cos(angle);
//
//          gsap.set(item, {
//            rotation: angle + "_rad",
//            xPercent: -50,
//            yPercent: -50,
//            x: x,
//            y: y
//          });
//        });
//        console.log($section.length)
//        //section content fixed center
//
//        let group2Move = gsap.timeline({
//          scrollTrigger: {
//            trigger: $sec03,
//            start:"top top",
//            end:"bottom bottom",
//            scrub:true,
//            ease:'easeOutQuart',
//            pin:true,
//            //markers:true,
//            //onLeave: self => section3Leave()
//          }
//        });
//        let $pickshow =$sec03.find('.sec_subtxt');
//        group2Move.from($pickshow,{
//          opacity:'0'
//        },0.2).to($sec03Con,{},2)
//
//
//
//
//
//        //section content wheel move
//        gsap.to($sec03wheel, {
//          rotate: () => -360,
//          duration: $totalNum,
//          scrollTrigger: {
//            trigger: $sec03,
//            start:"top +=500",
//            end:"bottom bottom",
//            scrub:true,
//            ease:'easeOutQuart',
//            //markers:true,
//            pin:false,
//            scrub: 1,
//            snap: 1 / $totalNum,
//            invalidateOnRefresh: true,
//            //repeatDelay:2,
//            //delay:2
//
//          }
//        },1.5)
//
//
//
//
//        //section content wheel action
//        $('.wheel__card').on('click',function(){
//          let wheelImg = $(this).find('img').attr('src');
//          $('.wheel__card').removeClass('active');
//          $(this).addClass('active');
//          console.log(wheelImg)
//          setTimeout(function(){
//            $('.modul_tablet .img , .modul_phone .img').attr('style', 'background-image:url("'+ wheelImg+ '")')
//
//          },400);
//
//
//        });


      }





      /*===================================================
        section project 1
      ===================================================*/

        if($group.hasClass('.section-group-2-1')){
            let project1 = gsap.timeline({
              scrollTrigger: {
                trigger: $('.section-group-2-1'),
                start:"top center",
                end:"bottom bottom",
                scrub:true,
                ease:'easeOutQuart',
                duration:3,
                markers:true
              }
            });
            project1.to($('.main_prosect_wrap , .main_project_back'),{
                x:'0'
            },0.5)
        }

      /*===================================================
      section group 03
      ===================================================*/

//      if($group.hasClass('section-group-3')){
//            //section position
//            $group3.height($groupHeight);
//            $group3.find('.section').each(function(index){
//              let $group03Mtop = 'margin-top:' + $windowHeight * index + 'px; height:'+$windowHeight + 'px';
//              $(this).attr('style',$group03Mtop )
//            });
//
//            //section move right
//            let sectionRight = gsap.timeline({
//              scrollTrigger: {
//                trigger: $group3,
//                start:"top top",
//                end:"+=" + ($section.length - 1) + "00%",
//                scrub:true,
//                duration:1,
//                ease:"easeOutQuart",
//              }
//            });
//            sectionRight.to($section, {
//              xPercent: 100 * ($section.length - 1),
//
//            },0.5).to($fullBg,{
//              x:-100 * ($section.length - 1),
//              y:'0',
//            },0.5)
//
//
//
//
//        ///end
//
//      }
    });




  };






  /* END : 스크롤 트리거 플러그인 ========================================================*/


  /*===========================================================================

  /* END : 플루팅 및 리사이징 이벤트  =======================================================*/

  $(document).ready(function () {
    SectionGroup__init(); //gsap


    // 윈도우창 너비 변화시 스크롤 이벤트 리셋 필요
    //let re_size = window.outerHeight;
    //$('section').css({'height':re_size})





  });



  //기기 확인
  function isMobile(){
    var UserAgent = navigator.userAgent;

    if (UserAgent.match(/iPhone|iPad|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null)

    {
      return true;
    }else{
      return false;
    }
  }



  $(function () {

    if (isMobile()) {
      // 모바일이면 실행될 코드 들어가는 곳

    } else {
      // 모바일이 아니면 실행될 코드 들어가는 곳
      console.log('pc')
      window.addEventListener("resize", SectionGroup__init);//gsap
    }


  });


