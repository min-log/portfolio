<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn"  uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<c:set var="contextPath" value="${pageContext.request.contextPath}" />


<c:import url="inc/headerScript.jsp"/>
<c:import url="inc/header.jsp"/>
<link rel="stylesheet" href="${contextPath}/resource/css/pages/main.css">
<link rel="stylesheet" href="${contextPath}/resource/css/pages/main_media.css">

<!-- #container -->
<em class="fullbg"></em>
<em class="scroll"><b class="icon"></b><b class="arrow">scroll down</b></em>

<div class="main">
  <div class="section-group-1 section-group section-group-horizontal-left">
    <section class="main_greetings_wrap section sec_active">
      <h2 class="sec_tit">Welcome, let me introduce Lee Jimin's portfolio.</h2>
      <div class="circle">
        <div class="con">
          <em class="leaf_img"><img src="resource/images/main/leaf_bg.png" alt="나뭇잎 이미지"></em>
          <div class="txt">web publisher / ui & markup developer / marketer /</div>
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
        <li>
          <h3 class="tit">UI Development <em class="wave_line"></em></h3>
          <div  class="con">
            <p>HTML ,CSS,JS를 이해하며 다룹니다. 유지보수를 고려한 컴포넌트 단위 마크업 작성이 가능하며, 퍼블리싱 가이드 제작, 마크업 고도화 작업경험이 있습니다.
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
        <li class="last">
          <h3 class="tit">Skills <em class="wave_line"></em></h3>
          <div class="con">
            <h4>UI(User Interface)</h4>
            <p>
              <em class="xi-html5">
                <b class="ally-hidden">html</b>
              </em>
              <em class="xi-css3">
                <b class="ally-hidden">css</b>
              </em>
              <em class="xi-javascript">
                <b class="ally-hidden">javascript</b>
              </em>
              <em class="xi-plus-square">
                <b class="ally-hidden">jqury</b>
              </em>
            </p>
            <p>ui animation 및 인터렉션에 관심이 많고 더 낳은 코드와 시각적인 모션을 보여주기위해 배우며 적용합니다.
            </p>
            <h4>개발환경</h4>
            <p>
              Configuration Management Tool (svn / git)
              eclipse
            </p>

            <h4>Hosting</h4>
            <p>
              빌더 쇼핑몰 활용한 작업이 가능합니다. <br />카페24 , 고도몰, 닷홈 등 운영 경험이 있습니다.
            </p>

            <h4>UX(User Experience)</h4>
            <p>
              <em class="xi-photoshop">
                <b class="ally-hidden">포토샵</b>
              </em>
              <em class="xi-illustrator">
                <b class="ally-hidden">일러스트</b>
              </em>
            </p>
            <p>
              포스터, 카드뉴스, 현수막, 명함 등 디자인 경험이 있으며, <br />웹퍼블리셔 과정을 진행하며 홈페이지 디자인도 배웠습니다.
            </p>

            <h4>Content Marketing</h4>
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
      <h2 class="sec_tit">
        <span>Recent <em class="icon_arrow"></em></span>
        <span>Project</span>
      </h2>
      <p class="img"><img src="" alt=""></p>
    </section>

  </div>

  <div class="section-group-2-1 section-group" >
    <section class="main_project_back section">
      <div class="project_wrap">
        <h2 class="sec_tit">BackAnd</h2>
        <p class="sec_subtxt">Pick ! <br>Web Project
          <img src="resource/images/main/emoticon_hand.png" alt="">
        </p>
        <ul>
          <li>

            <p></p>
            <p></p>
            <p></p>
          </li>
        </ul>

      </div>
    </section>
  </div>

  <div class="section-group-2-2 section-group" >
    <section class="main_prosect_list section">
      <div class="project_wrap">
        <h2 class="sec_tit">List 06</h2>
        <p class="sec_subtxt">Pick ! <br>Web Project
          <img src="resource/images/main/emoticon_hand.png" alt="">
        </p>
        <div class="prosect_info">
          <div class="modul_tablet">
            <p class="img" style='background-image:url("https://assets.codepen.io/756881/amys-1.jpg")'></p>
          </div>
          <div class="modul_phone">
            <p class="img" style='background-image:url("https://assets.codepen.io/756881/amys-1.jpg")'></p>
          </div>
          <a class="btn_more" href="">+ More</a></p>
        </div>
        <ul  class=" wheel">

          <li class="wheel__card">
            <img src="https://assets.codepen.io/756881/amys-1.jpg" />
          </li>
          <li class="wheel__card">
            <img src="https://assets.codepen.io/756881/amys-2.jpg" />
          </li>
          <li class="wheel__card">
            <img src="https://assets.codepen.io/756881/amys-3.jpg" />
          </li>
          <li class="wheel__card">
            <img src="https://assets.codepen.io/756881/amys-4.jpg" />
          </li>
          <li class="wheel__card">
            <img src="https://assets.codepen.io/756881/amys-5.jpg" />
          </li>
          <li class="wheel__card">
            <img src="https://assets.codepen.io/756881/amys-6.jpg" />
          </li>



          <li class="wheel__card">
            <img src="https://assets.codepen.io/756881/amys-1.jpg" />
          </li>
          <li class="wheel__card">
            <img src="https://assets.codepen.io/756881/amys-2.jpg" />
          </li>
          <li class="wheel__card">
            <img src="https://assets.codepen.io/756881/amys-3.jpg" />
          </li>
          <li class="wheel__card">
            <img src="https://assets.codepen.io/756881/amys-4.jpg" />
          </li>
          <li class="wheel__card">
            <img src="https://assets.codepen.io/756881/amys-5.jpg" />
          </li>
          <li class="wheel__card">
            <img src="https://assets.codepen.io/756881/amys-6.jpg" />
          </li>


          <li class="wheel__card">
            <img src="https://assets.codepen.io/756881/amys-1.jpg" />
          </li>
          <li class="wheel__card">
            <img src="https://assets.codepen.io/756881/amys-2.jpg" />
          </li>
          <li class="wheel__card">
            <img src="https://assets.codepen.io/756881/amys-3.jpg" />
          </li>
          <li class="wheel__card">
            <img src="https://assets.codepen.io/756881/amys-4.jpg" />
          </li>
          <li class="wheel__card">
            <img src="https://assets.codepen.io/756881/amys-5.jpg" />
          </li>
          <li class="wheel__card">
            <img src="https://assets.codepen.io/756881/amys-6.jpg" />
          </li>

          <li class="wheel__card">
            <img src="https://assets.codepen.io/756881/amys-1.jpg" />
          </li>
          <li class="wheel__card">
            <img src="https://assets.codepen.io/756881/amys-2.jpg" />
          </li>
          <li class="wheel__card">
            <img src="https://assets.codepen.io/756881/amys-3.jpg" />
          </li>
          <li class="wheel__card">
            <img src="https://assets.codepen.io/756881/amys-4.jpg" />
          </li>
          <li class="wheel__card">
            <img src="https://assets.codepen.io/756881/amys-5.jpg" />
          </li>
          <li class="wheel__card">
            <img src="https://assets.codepen.io/756881/amys-6.jpg" />
          </li>

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
            <p class="date">2022</p>
            <h3>개발</h3>
            <p class="position"></p>
          </li>
          <li>
            <p class="date">2018~2022</p>
            <h3>오상테크놀로지</h3>
            <p class="position">UI개발팀 (대리)</p>
            <p class="subtxt">신규 홈페이지 구축 및 유지보수</p>
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
            <p class="date">2017</p>
            <h3>그린아트컴퓨터학원</h3>
            <p class="position">0000과정 이수</p>
          </li>
          <li>
            <p class="date">2016~2017</p>
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
        <p class="profile_img"><img src="" alt=""></p>
      </div>

    </section>

  </div>
  <!-- end: section-group-3 -->
  <div class="section-group-4 section-group" >
    <section class="main_co_work_wrap section">
      <h2 class="sec_tit">Co-work</h2>
      <p class="sec_subtxt">나와 함께 했던 사람들의 이야기</p>
      <a href="javascript:void(0);" class="btn-green">메시지 남기기 <em class="xi-send ml5"></em></a>
      <ul class="co_work">
        <li>
          <p class="tit">이*영 대리 <span>팀</span></p>
          <p>오상테크놀로지</p>
          <div class="con">
            테스트
          </div>
        </li>
      </ul>
    </section>
    <section class="main_contact_wrap section section-10">
      <h2 class="sec_tit">inquiry</h2>
      <p class="sec_subtxt">궁금한점을 남겨주세요!</p>
      <form id="inquiryForm" method="post">
        <div class="contact_wrap">
          <table>
            <caption>
              <p class="ally-hidden">문의 내용 입력 테이블</p>
            </caption>
            <colgroup>
              <col style="width:20%;min-width:90px;">
              <col style="width:auto">
            </colgroup>
            <tbody>
            <tr>
              <th><label for="inquiry_title">제목</label></th>
              <td><input id="inquiry_title" name="inquiry_title" type="text"></td>
            </tr>
            <tr>
              <th><label for="inquiry_name">이름</label></th>
              <td><input id="inquiry_name" name="inquiry_name" type="text"></td>
            </tr>
            <tr>
              <th><label >연락처</label></th>
              <td>
                <div class="phone_con">
                  <select id="inquiry_tel_1" name="inquiry_tel_1">
                    <option value="010">010</option>
                    <option value="011">011</option>
                    <option value="031">031</option>
                    <option value="031">031</option>
                  </select>
                  <span>-</span>
                  <input id="inquiry_tel_2" name="inquiry_tel_2" type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"  maxlength="4" >
                  <span>-</span>
                  <input id="inquiry_tel_3" name="inquiry_tel_3"  type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"  maxlength="4" >
                </div>
              </td>
            </tr>
            <tr>
              <th><label for="inquiry_email" >이메일</label></th>
              <td>
                  <input id="inquiry_email" name="inquiry_email" type="email">
              </td>
            </tr>
            <tr>
              <th><label for="inquiry_content">내용</label></th>
              <td>
                <textarea name="inquiry_content" id="inquiry_content" cols="30" rows="10"></textarea>
                <p>500글자 내외로 내용을 입력하세요.</p>
              </td>
            </tr>
            </tbody>
          </table>
          <a href="javascript:inquirySave();" class="btn-green">보내기 <em class="xi-send ml5"></em></a>
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




  function inquirySave(){
    const inquiryTitle = $('#inquiry_title').val();
    const inquiryContent = $('#inquiry_content').val();
    const inquiryTel = $('#inquiry_tel_1').val()+"-"+$('#inquiry_tel_2').val()+"-"+$('#inquiry_tel_3').val();
    const inquiryEmail = $('#inquiry_email').val();
    const inquiryName = $('#inquiry_name').val();
    if (inquiryTitle === ""){
      alert("타이틀을 입력해주세요.");
      return false;
    }else if(inquiryContent === ""){
      alert("내용을 입력해주세요.");
      return false;
    }else if(inquiryName === ""){
      alert("이름을 입력해주세요.");
      return false;
    }else if(inquiryEmail === ""){
      alert("이메일을 입력해주세요.");
      return false;
    }else if($("#inquiry_tel_1").val() === "" || $("#inquiry_tel_2").val() === "" || $("#inquiry_tel_3").val() === ""){
      alert("연락처를 올바르게 입력해주세요.");
      return false;
    }

    let obj=JSON.stringify({
        inquiry_title : inquiryTitle,
        inquiry_content : inquiryContent,
        inquiry_tel : inquiryTel,
        inquiry_email : inquiryEmail,
        inquiry_name : inquiryName
    });
    console.log("클릭" + obj);
    $.ajax({
      type : 'POST',
      url : "/apiInquiry/register",
      cache: false,
      data : obj,
      dataType:'json',
      contentType: 'application/json; charset=utf-8',
      success: function (data) {
        console.log(data);
      },
      error: function (data) {

        console.log(data);
      }

    });
  }
</script>



<c:import url="inc/footer.jsp"/>
