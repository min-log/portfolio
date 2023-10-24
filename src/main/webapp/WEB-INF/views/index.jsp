<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn"  uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<c:set var="contextPath" value="${pageContext.request.contextPath}" />


<c:import url="inc/headerScript.jsp"/>
<c:import url="inc/header.jsp"/>

<link rel="stylesheet" href="${contextPath}/resource/css/pages/main.css">
<link rel="stylesheet" href="${contextPath}/resource/css/pages/main_media.css">


<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<script  src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>


<!-- #container -->
<em class="fullbg"></em>

<div class="main">
  <div class="section-group-1 section-group section-group-horizontal-left">
    <section class="main_greetings_wrap section sec_active">
      <h2 class="sec_tit">Welcome, let me introduce Lee Jimin's portfolio.</h2>
      <div class="circle">
        <div class="con">
          <em class="leaf_img"><img src="resource/images/main/leaf_bg.png" alt="나뭇잎 이미지"></em>
          <div class="txt">Web Developer / ui & markup developer / marketer /
          </div>
          <div class="img"></div>
        </div>
      </div>
      <script>
        $(document).ready(function(){
          let circleText = document.querySelector('.circle .txt');
          let circleTextHtml = circleText.innerText.split('');
          circleText.innerText= null;

          const circleRotate = 360 / circleTextHtml.length;
          //console.log(circleTextHtml.length);

          circleTextHtml.forEach(function(char,i){
            //텍스트 나눠 넣어주기
            const charElement =document.createElement('span');
            charElement.innerText = char;
            circleText.appendChild(charElement);

            // 텍스트 기울기
            charElement.style.transform = "rotate("+ i * circleRotate+"deg)";

          });
        });
      </script>

    </section>
    <section class="main_introduction_wrap section">
      <ul class="Introduction">
        <li class="last">
          <h3 class="tit">Skills <em class="wave_line"></em></h3>
          <div class="con">
            <h4>Back End : Tech Stack</h4>
            <p class="icon-stack-wrap">
              <c:forEach items="${stackBack}" var="stack">
                <span class="icon-stack">${stack}</span>
              </c:forEach>
            </p>
            <p>
              JAVA 기초를 공부하고 객체 지향적인 코드개발 능력을 훈련하고 있습니다.
              <br />
              REST API 활용, Security Oauth를 사용한 구글,네이버,카카오 로그인을 구현한 경험이 있습니다.
              <br />
              다양한 프로그래밍 언어를 공부하려고 하며, 정보처리기사 실기를 준비 중입니다.
            </p>
            <h4>Front End : UI(User Interface) / UX(User Experience)</h4>
            <p class="icon-stack-wrap">
              <c:forEach items="${stackFront}" var="stack">
                <span class="icon-stack">${stack}</span>
              </c:forEach>
            </p>
            <p>ui animation 및 인터렉션에 관심이 많고 더 낳은 코드와 시각적인 모션을 보여주기위해 배우며 적용합니다.
            </p>
            <h4>개발환경</h4>
            <p>
              Configuration Management Tool : SVN, FTP, GIT
              <br/>
              Idea : Eclipse, IntelliJ, Visual Studio Code
            </p>

            <h4>Hosting</h4>
            <p>
              AWS (EC2) , NCP <br />
              빌더 쇼핑몰 작업 가능: 카페24 , 고도몰, 닷홈
            </p>

          </div>
        </li>
        <li>
          <h3 class="tit">UI Development <em class="wave_line"></em></h3>
          <div  class="con">
            <p>HTML ,CSS,JS를 이해하며 다룹니다. <br />
              유지보수를 고려한 컴포넌트 단위 마크업 작성이 가능하며, 퍼블리싱 가이드 제작, 마크업 고도화 작업경험이 있습니다.
            </p>
          </div>
        </li>
        <li>
          <h3 class="tit">Markup <em class="wave_line"></em></h3>
          <div class="con">
            <p>
              웹표준을 바탕으로 시멘틱 마크업을 작성하여 크로스브라우징이 가능합니다.<br />
              웹 접근성 마크 취득한 경험이 있으며 검색엔진 최적화(SEO)가 가능합니다.
              많은 사용자가 홈페이지에 접근 할 수있도록 하며, 모두에게 동일한 내용을 전달 할 수 있도록합니다.
            </p>
          </div>
        </li>
        <li>
          <h3 class="tit">Content Marketing <em class="wave_line"></em></h3>
          <div class="con">
            <p>SNS체널 운영, 언론보도 작성 및 배포가 가능합니다.<br />
            카드뉴스 &middot; 블로그 &middot; 영상 콘텐츠 &middot; 이벤트의 기획 및 제작, 행사 모집 및 운영 경험이 있습니다.</p>
          </div>
        </li>
      </ul>
    </section>
  </div>
  <!-- end: section-group-1 -->
  <div class="section-group-2 section-group ">
    <section class="main_prosect_wrap section">
      <h2 class="sec_tit on">
        <span>Recent <em class="icon_arrow"></em></span><br/>
        <span class="round">Project</span><br/>
        <span>
            BackAnd
            <a href="/board/list/BackEnd" class="btn_more">+ More</a>
        </span>
      </h2>
      <p class="img"><img src="/resource/images/main/main_port_01.jpg" alt="포트폴리오 사이트 이미지"></p>
    </section>

  </div>

  <div class="section-group-2-1 section-group" >
    <section class="main_project_back section mt50">
      <p class="pro_img">
        <img src="resource/images/common/modul_pc.png" alt="">
      </p>
      <ul class="project_wrap">
        <c:forEach items="${proBack.proList}" var="proItem">
        <li>
          <p class="img">
            <img src="/apiBoard/getImg?url=/${proItem.proImg}" alt="">
          </p>
          <a class="pro_img" href="/board/view/${proItem.proId}">
            <h3>${proItem.proTitle}</h3>
            <p>${proItem.proDateStart} - ${proItem.proDateEnd}</p>
            <p>${proItem.proStack}</p>
          </a>
        </li>
        </c:forEach>
      </ul>




    </section>
  </div>

  <div class="section-group-2-2 section-group" >
    <section class="main_prosect_list ">
      <div class="project_wrap">
        <h2 class="sec_tit on">
          <span class="">RECENT</span><br/>
          <span class="round">FRONTEND</span><br/>
          <span><em class="mo_none">List 03</em>
            <a href="/board/list/FrontEnd" class="btn_more">+ More</a>
          </span>
        </h2>
        <p class="sec_subtxt">Pick ! <br>Web Project
          <img src="resource/images/main/emoticon_hand.png" alt="">
        </p>
        <div class="prosect_info">
          <div class="modul_tablet">
            <p class="img" style=''>
              <img src="/apiBoard/getImg?url=/contentImg/6e9acc1a-f071-4b7a-bcb2-3af574330707_screencapture-kia-auton-kr-index-main-2023-10-09-00_48_23.png" alt="기아 홈페이지 PC">
            </p>
          </div>
          <div class="modul_phone">
            <p class="img" style=''>
              <img src="/apiBoard/getImg?url=/contentThum/kiamo.png" alt="기아 홈페이지 Mo">
            </p>
          </div>
        </div>
        <ul  id="proList">
            <c:forEach items="${proFront.proList}" var="proItem" varStatus="status">
              <li>
                <a class="pro_img" href="/board/view/${proItem.proId}">
                  <img src="/apiBoard/getImg?url=/${proItem.proImg}" alt="">
                </a>
                <p class="icon-stack-wrap-type">
                  <c:forEach var="type" items="${proItem.proType}">
                            <span class="icon-stack">
                                ${type}
                            </span>
                  </c:forEach>
                </p>
                <p class="pro_tit">${proItem.proTitle}</p>
                <p class="pro_date">
                    ${proItem.proDateStart} - ${proItem.proDateEnd}
                </p>
              </li>

            </c:forEach>
        </ul>
      </div>
    </section>
  </div>
  <!-- end: section-group-2 -->
  <div class="section-group-3 section-group section-group-horizontal-right" >
    <section class="main_about_wrap section">
      <em class="line line_move"></em>
      <h2 class="sec_tit">About me</h2>
      <div class="profile_info">
        I am <em class="icon_round">Lee Jimin</em> and I am 30 years old.
        I like to show people visually and make a homepage that highlights the value of the brand.
        When I work, I am <em class="icon_round">systematic</em> and responsible.
        I study tirelessly and deal with my work patiently.
        <em class="icon_arrow"></em>
      </div>
    </section>
    <section class="main_profile_01 section " >
      <em class="line line_move"></em>
      <em class="line2 line_move"></em>
      <!--Profile-->
      <div class="profile_con">
        <ul>
            <li>
                <p class="date">2022.06.05 - 2023.10.19</p>
                <h3>백엔드 개발자 취업캠프(Java) </h3>
                <p class="position">
                    멀티잇 / 14회차 과정 수료
                </p>
                <p class="subtxt">팀 프로젝트 우수상</p>
            </li>
          <li>
            <p class="date">2022.12.20 - 2023.05.16</p>
            <h3>클라우드 네이티브 애플리케이션(CNA)개발 전문가양성과정</h3>
            <p class="position">
                한국소프트웨어기술진흥협회
            </p>
              <p class="subtxt">국가인적자원개발컨소시엄 과정을 수료</p>
          </li>
        </ul>
      </div>
      <p class="profile_img"><img src="" alt=""></p>
    </section>
    <section class="main_profile_02 section " >
      <em class="line line_move"></em>
      <div class="profile_con">
        <ul>
            <li>
                <p class="date">2018.09.03 ~ 2022.10.31</p>
                <h3>오상테크놀로지</h3>
                <p class="position">UI개발팀 (대리)</p>
                <p class="subtxt">신규 홈페이지 구축 및 유지보수</p>
            </li>
          <li>
            <p class="date">2018.02.20 - 2018.07.31</p>
            <h3>웹퍼블리셔 교육</h3>
            <p class="position">그린아트컴퓨터학원</p>
            <p class="subtxt">디지털 앱,웹디자인 양성과정 수료</p>
          </li>
          <li>
            <p class="date">2016.01~2017.11</p>
            <h3>(주)무궁</h3>
            <p class="position">마케팅팀 (사원)</p>
            <p class="subtxt">웨딩홀사업부 6개, 드레스사업부 2개 지점<br />온라인 및 오프라인 홍보<br />행사 관리 및 지원</p>
          </li>
          <li>
            <p class="date">2012~2016</p>
            <h3>호서대학교</h3>
            <p class="position">경영학과</p>
          </li>
        </ul>
        <p class="profile_img"><img src="/resource/images/main/main_port_02.jpg" alt="코드 이미지"></p>
      </div>

    </section>

  </div>
  <!-- end: section-group-3 -->
  <div class="section-group-4 section-group" >
    <section id="coWork" class="main_co_work_wrap section">
      <a id="setCo" href="#coWork" hidden="">위치 이동시킬 버튼</a>
      <h2 class="sec_tit">Co-work</h2>
      <p class="sec_subtxt">나와 함께 했던 사람들의 이야기</p>
      <div class="text_center mt40">
        <a href="${contextPath}/coWork/form" class="btn btn-green btn-active mg_auto">메시지 남기기 <em class="xi-send ml5"></em></a>
      </div>
      <p class="mt40"></p>
      <div class="arrow-wrap">
        <button class="prevArrow arrow"><em class="icon_arrow"></em><span>이전</span></button>
        <button class="nextArrow arrow"><em class="icon_arrow"></em><span>다음</span></button>
      </div>
      <ul class="co_work">
        <c:forEach var="item" items="${list}" varStatus="status" >
          <li class="item">
            <p class="co_work_company">${item.coCompany}</p>
            <p class="tit">${item.coName} <span class="co_work_position">${item.coPosition}</span> <span class="co_work_department">${item.coDepartment}팀</span></p>
            <div class="con">
                ${item.coContent}
            </div>
            <div class="btn_wrap">
              <a href="javascript:coAction('modify',${item.coId})" title="수정">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
              </a>
              <a href="javascript:coAction('remove', ${item.coId})" title="삭제">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                </svg>
              </a>
              <p class="pw_wrap pw_wrap_${item.coId}" style="display: none">
                <input type="password" placeholder="비밀번호">
                <a href="#">확인</a>
              </p>
            </div>
          </li>
        </c:forEach>
      </ul>

    </section>
    <section class="main_contact_wrap section section-10">
      <h2 class="sec_tit">inquiry</h2>
      <p class="sec_subtxt">궁금한점을 남겨주세요!</p>
      <form id="inquiryForm" method="post">
        <div class="contact_wrap mt50">
          <table>
            <caption>
              <p class="ally-hidden">문의 내용 입력 테이블</p>
            </caption>
            <colgroup>
              <col style="width:22%;">
              <col style="width:auto">
            </colgroup>
            <tbody>
            <tr>
              <th><label for="inquiryTitle">제목</label></th>
              <td><input id="inquiryTitle" name="inquiryTitle" type="text"></td>
            </tr>
            <tr>
              <th><label for="inquiryName">이름</label></th>
              <td><input id="inquiryName" name="inquiryName" type="text"></td>
            </tr>
            <tr>
              <th><label >연락처</label></th>
              <td>
                <div class="phone_con">
                  <select id="inquiryTel_1" name="inquiryTel_1">
                    <option value="010">010</option>
                    <option value="011">011</option>
                    <option value="031">031</option>
                  </select>
                  <span>-</span>
                  <input id="inquiryTel_2" name="inquiryTel_2" type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"  maxlength="4" >
                  <span>-</span>
                  <input id="inquiryTel_3" name="inquiryTel_3"  type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"  maxlength="4" >
                </div>
              </td>
            </tr>
            <tr>
              <th><label for="inquiryEmail" >이메일</label></th>
              <td>
                  <input path="inquiryEmail" id="inquiryEmail" name="inquiryEmail" type="email" />
              </td>
            </tr>
            <tr>
              <th><label for="inquiryContent">내용</label></th>
              <td>
                <textarea class="textBox" name="inquiryContent" id="inquiryContent" cols="30" rows="10"></textarea>
                <p> 100자 이상 500자 내외로 내용을 입력하세요.
                  <span style="float:right"><b id="textCount" class="color_main">0</b> 글자 수</span>
                </p>
              </td>
            </tr>
            </tbody>
          </table>
          <p class="text_center">지민님의 이메일로 문의 내용이 전송됩니다, 답변은 잠시 기다려주세요.</p>
          <a href="javascript:inquirySave();" class="btn btn-green btn-active mg_auto mt30" style="display:block">보내기 <em class="xi-send ml5"></em></a>
        </div>
      </form>
    </section>
  </div>
  <!-- end: section-group-4 -->
</div>
<script src="${contextPath}/resource/js/jquery/gsap.min.js"></script>
<script src="${contextPath}/resource/js/jquery/ScrollTrigger.min.js"></script>
<script src="${contextPath}/resource/js/pages/main.js"></script>
<script type="text/javascript">


  textBoxContLimit(500);

  $('.co_work').slick({
    slidesToShow: 2,
    centerMode: true,
    variableWidth: true,
    //slidesToScroll: 2,
    touchMove: true,
    swiper:true,
    autoplay: true,
    //vertical: true,
    //verticalSwiping: true,
    autoplaySpeed: 6000,
    prevArrow : $('.main_co_work_wrap .arrow-wrap .prevArrow'),
    nextArrow : $('.main_co_work_wrap .arrow-wrap .nextArrow'),
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow:1
        }
      }
    ]
  });
</script>
<script type="text/javascript">
  function coAction(type,e){
    let pw = ".pw_wrap_" + e;
    $(pw).css({display: "inline-block"});

    if(type == "modify"){
      $(pw).find("a").attr("href","javascript:coPw('"+type+"',"+e+")");
    }else{
      $(pw).find("a").attr("href","javascript:coPw('"+type+"',"+e+")");
    }
  }

  function coPw(type,e){

    let pw = ".pw_wrap_" + e;
    let pwVal = $(pw).find("input").val();
    console.log(pwVal);

    let data =JSON.stringify({
      coId : e,
      coPassword : pwVal
    });

    console.log(data);
    $.ajax({
      url:'/apiCoWork/password',
      type:"POST",
      data: data,
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      cache: false,
      success: function (data){
        if (data){
          console.log(data);
          location.href = "/coWork/" + type + "?no=" + e;
        }else{
          console.log(data);
          document.getElementById("ModalMsg").classList.remove("fade");
          document.querySelector(".modal-msg").innerText = "비밀번호가 틀렸습니다.";
        }

      },
      error:function (data){
        document.getElementById("ModalMsg").classList.remove("fade");
        document.querySelector(".modal-msg").innerText = "비밀번호를 입력해주세요.";
        console.log(data);
      }
    })
  }


</script>
<script type="text/javascript">
  window.onload = function(){
    let secPosition = "";
    secPosition +=  '<c:out value="${position}" />';
    if(secPosition  != ""){
      document.getElementById("setCo").click()
    }
  }
</script>

<script type="text/javascript">

  function inquirySave(){
    const inquiryTitle = $('#inquiryTitle').val();
    const inquiryContent = $('#inquiryContent').val();
    const inquiryTel = $('#inquiryTel_1').val()+"-"+$('#inquiryTel_2').val()+"-"+$('#inquiryTel_3').val();
    const inquiryEmail = $('#inquiryEmail').val();
    const inquiryName = $('#inquiryName').val();
    let inquiryMsg;
    if (inquiryTitle === ""){
      //alert("타이틀을 입력해주세요.");
      inquiryMsg ="타이틀을 입력해주세요.";
      document.getElementById("ModalMsg").classList.remove("fade");
      document.querySelector(".modal-msg").innerHTML = inquiryMsg;
      return false;
    }else if(inquiryContent === ""){
      //alert("내용을 입력해주세요.");
      inquiryMsg ="내용을 입력해주세요.";
      document.getElementById("ModalMsg").classList.remove("fade");
      document.querySelector(".modal-msg").innerHTML = inquiryMsg;
      return false;
    }else if(inquiryName === ""){
      //alert("이름을 입력해주세요.");
      inquiryMsg ="이름을 입력해주세요.";
      document.getElementById("ModalMsg").classList.remove("fade");
      document.querySelector(".modal-msg").innerHTML = inquiryMsg;
      return false;
    }else if(inquiryEmail === ""){
      //alert("이메일을 입력해주세요.");
      inquiryMsg ="이메일을 입력해주세요.";
      document.getElementById("ModalMsg").classList.remove("fade");
      document.querySelector(".modal-msg").innerHTML = inquiryMsg;
      return false;
    }else if($("#inquiryTel_1").val() === "" || $("#inquiryTel_2").val() === "" || $("#inquiryTel_3").val() === ""){
      //alert("연락처를 올바르게 입력해주세요.");
      inquiryMsg ="연락처를 올바르게 입력해주세요.";
      document.getElementById("ModalMsg").classList.remove("fade");
      document.querySelector(".modal-msg").innerHTML = inquiryMsg;
      return false;
    }

    let obj=JSON.stringify({
        inquiryTitle : inquiryTitle,
        inquiryContent : inquiryContent,
        inquiryTel : inquiryTel,
        inquiryEmail : inquiryEmail,
        inquiryName : inquiryName
    });

    $.ajax({
      type : 'POST',
      url : "/apiInquiry/register",
      cache: false,
      data : obj,
      dataType:'json',
      contentType: 'application/json; charset=utf-8',
      success: function (data) {
        console.log(data);
        let okMsg = "등록되었습니다.";
        document.getElementById("ModalMsg").classList.remove("fade");
        document.querySelector(".modal-msg").innerHTML = okMsg;
      },
      error: function (data) {
        console.log(data);
        let errs = data.responseJSON;
        let errMsg = '';
        for(let i = 0; i < errs.length;i++){
          errMsg += errs[i].defaultMessage;
          errMsg += "<br />";
        }
        document.getElementById("ModalMsg").classList.remove("fade");
        document.querySelector(".modal-msg").innerHTML = errMsg;

      }

    });
  }
</script>



<c:import url="inc/footer.jsp"/>
