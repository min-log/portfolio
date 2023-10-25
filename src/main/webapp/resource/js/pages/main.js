

window.addEventListener("DOMContentLoaded", (event) => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  window.addEventListener("resize", reportWindowSize);

  function reportWindowSize() {
    width = window.innerWidth;
    height = window.innerHeight;
    console.log(width);
  }

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  window.addEventListener("resize", () => {

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });










  /*==========================================================================
  스크롤 트리거 플러그인 활성화
  ==========================================================================*/

  function scrollTriggerSet() {

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



    let $fullBg = $('.fullbg');
    let $windowHeight = $(window).height();






    $('.section-group').each(function(index, node) {
      let $group = $(this);
      let $section = $group.find(' .section');



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
                end:"bottom 180% bottom",
                pin :true,
                ease:'easeOutQuart',
                scrub:'0.2',
                duration:'0.2',

              }
            });
            sectionLeft.to($circleP,{
              scale:'2.5',
              duration:'2.5',
              x: '-200%',
              opacity:0,
              stagger:10,
            },0.5)
            .to($section, {
              xPercent: -100 * ($section.length - 1),
              ease:'easeOutQuart',
              stagger:10
            },0.1).to($sectit,{
              x: '100%',
              stagger:10
            },0.1)

      }



      /*===================================================
      section group 02
      ===================================================*/

      if($group.hasClass('section-group-2')){

            let section2Left = gsap.timeline({
              scrollTrigger: {
                trigger: $('.section-group-2'),
                start:"top top",
                end:"top 100vh",
                scrub:'0.2',
                duration:'0.2',
                pin :true,
                ease:'easeOutQuart',
              }
            });

            section2Left.to($fullBg,{
              x:'-60%',
              y:-100 * ($section.length - 1),
              stagger:1
            }, '-=0.2')
            .to($('.main_introduction_wrap'),{
              x:'-100%',
              marginLeft:'0',
              duration: 0.2,
              stagger:1
            }, '-=0.2')
            .to($('.main_prosect_wrap'),{
              x:'0',
              marginLeft:'0',
              duration: 0.2,
              stagger:1
            }, '-=0.2').to($('.main_project_back'),{
              marginLeft:'0',
              duration: 0.2,
              stagger:1
            }, '-=0.2')



      }

      if($group.hasClass('section-group-2-1')){
        let section2Pro1 = gsap.timeline({
          scrollTrigger: {
            trigger: $('.section-group-2-1'),
            start:"top 50%",
            end:"top 52%",
            pin :true,
            ease:'easeOutQuart',
            scrub:'0.2',
            duration:'0.2',
          }
        });


        section2Pro1.to($('.main_project_back'),{
          x:'0',
          duration: 0.2,
          stagger:1
        }, '-=0.2')
            .to($('.section-group-2'),{
              x: '-60%',
              duration: 0.2,
              stagger:1
            }, '-=0.2')

      }

      // if($group.hasClass('section-group-2-2')){
      //
      //  //wheel position
      //  let $radius = $sec03wheel.offsetWidth / 2;
      //  let $center = $sec03wheel.offsetWidth / 2;
      //  let $total = $sec03images.length;
      //  let $totalNum = $total / 18 ;
      //  let slice = (2 * Math.PI) / $total;
      //
      //  // group and section height
      //  let $group2Height= $windowHeight * $totalNum;
      // // $group2.height($group2Height+  $windowHeight + "px"); //section 2 개
      //  $sec03.height($group2Height + "px");
      //
      //  $sec03images.forEach((item, i) => {
      //    let angle = i * slice;
      //    let x = $center + $radius * Math.sin(angle);
      //    let y = $center - $radius * Math.cos(angle);
      //
      //    gsap.set(item, {
      //      rotation: angle + "_rad",
      //      xPercent: -50,
      //      yPercent: -50,
      //      x: x,
      //      y: y,
      //      stagger:1
      //    });
      //  });
      //  //section content fixed center
      //  //section content wheel move
      //  let group2Move = gsap.to($sec03wheel, {
      //    rotate: () => -100,
      //    duration: $totalNum,
      //    scrollTrigger: {
      //      trigger: $sec03,
      //      start:"top top",
      //      end:"bottom +=500",
      //      ease:'easeOutQuart',
      //      //markers:true,
      //      pin:true,
      //      snap: $totalNum,
      //      invalidateOnRefresh: true,
      //      scrub:true,
      //      duration:true,
      //      stagger:15
      //    }
      //  })
      //
      //  $('.wheel__card').on('click',function(){
      //    let wheelImg = $(this).find('img').attr('src');
      //    $('.wheel__card').removeClass('active');
      //    $(this).addClass('active');
      //    console.log(wheelImg)
      //    setTimeout(function(){
      //      $('.modul_tablet .img , .modul_phone .img').attr('style', 'background-image:url("'+ wheelImg+ '")')
      //    },400);
      //
      //
      //  });
      //
      //
      //
      // }


      /*===================================================
      section group 03
      ===================================================*/

     if($group.hasClass('section-group-3')){
           //section position

           $group3.find('.section').each(function(index){
             let $group03Mtop = 'margin-top:' + $windowHeight * index + 'px; height:'+$windowHeight + 'px';
             $(this).attr('style',$group03Mtop )
           });

           //section move right
           let sectionRight = gsap.timeline({
             scrollTrigger: {
               trigger: $group3,
               start:"30% top",
               end : "bottom bottom",
               //end:"+=" + ($section.length - 1) + "00%",
               scrub:true,
               scrub:'1',
               duration:'0.2',
               ease:"easeOutQuart",
               //markers: true
             }
           });
           sectionRight.to($section, {
             xPercent: 100 * ($section.length - 1),
             duration: 0.2,
           }, '-=0.2')
           .to($fullBg,{
             x:-100 * ($section.length - 1),
             y:'0',
              duration: 0.2,
           }, '-=0.2')



       ///end

     }
    });
  }



  function scrollTriggerSetMo() {
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


    let $windowHeight = $(window).height();


    $('.section-group').each(function(index, node) {
      let $group = $(this);
      let $section = $group.find(' .section');


      //group 1
      let $group1 = $('.section-group-1');
      let $sec01 =$('.main_greetings_wrap');
      let $sectit = $group1.find('.sec_tit');
      let $circleP = $('.circle');

      //group 2
      let $group2 = $('.section-group-2');
      let $sec03 =$('.main_prosect_list');
      let $sec03wheel = document.querySelector(".wheel");
      let $sec03images = gsap.utils.toArray(".wheel__card");


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
            end:"bottom 180% bottom",
            pin :true,
            ease:'easeOutQuart',
            scrub:'0.2',
            duration:'0.2',

          }
        });
        sectionLeft.to($circleP,{
          scale:'2.5',
          duration:'2.5',
          x: '-200%',
          opacity:0,
          stagger:10,
        },0.5)
        .to($section, {
          xPercent: -100 * ($section.length - 1),
          ease:'easeOutQuart',
          stagger:10
        },0.1).to($sectit,{
          x: '100%',
          stagger:10
        },0.1)

      }



      /*===================================================
      section group 02
      ===================================================*/

      // if($group.hasClass('section-group-2-2')){
      //
      //   //wheel position
      //   let $total = $sec03images.length;
      //   let $totalNum = $total / 18 ;
      //
      //   // group and section height
      //   let $group2Height= $windowHeight * $totalNum;
      //   $sec03.height($group2Height + "px");
      //
      //   //section content fixed center
      //   //section content wheel move
      //   let group2Move = gsap.to($sec03wheel, {
      //    // rotate: () => -100,
      //     duration: $totalNum,
      //     scrollTrigger: {
      //       trigger: $sec03,
      //       start:"top top",
      //       end:"bottom +=500",
      //       ease:'easeOutQuart',
      //       //markers:true,
      //      // pin:true,
      //       snap: $totalNum,
      //       invalidateOnRefresh: true,
      //       scrub:true,
      //       duration:true,
      //       stagger:2
      //     }
      //   })
      //
      // }


      if($group.hasClass('section-group-3')){
        let $workList = gsap.utils.toArray(".profile_con li");

        $workList.forEach((item) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              end: "bottom +=500",
              ease:'easeOutQuart',
              //markers : true,
              scrub:'0.2',
              duration:'0.2',
            },
            y: '100%',
            opacity: 0,
            stagger:10,
            duration: 0.2,
            scale:0.9,

          }, '-=0.2')
        });

      }

    });
  }


  /* END : 스크롤 트리거 플러그인 ========================================================*/





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


  gsap.registerPlugin(ScrollTrigger);
  window.addEventListener("resize", ScrollTrigger.update);
  ScrollTrigger.saveStyles(".profile_con li,.main_project_back");
  //section content wheel action
  let wheelImg = $("#wheelPro1 img").attr("src");
  $(".prosect_info .img").attr("style",'background-image:url("' + wheelImg + '")');


  ScrollTrigger.matchMedia({
    "(min-width: 750px)": function() {

      scrollTriggerSet();
    },
    "(max-width: 749px)": function() {
      scrollTriggerSetMo();
    },
    "all": function() {


    }
  });


    //
    // if (isMobile()) {
    //   // 모바일이면 실행될 코드 들어가는 곳
    //
    // } else {
    //   // 모바일이 아니면 실행될 코드 들어가는 곳
    //   console.log('pc')
    //   scrollTriggerSet();
    // }


});


