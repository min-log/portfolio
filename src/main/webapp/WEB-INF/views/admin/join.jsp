<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn"  uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<c:set var="contextPath" value="${pageContext.request.contextPath}" />


<c:import url="../inc/headerScript.jsp"/>
<c:import url="../inc/header.jsp"/>
<link rel="stylesheet" href="${contextPath}/resource/css/pages/sub.css" />
<div class="subpage">
  <div class="subpage_header">
    <h2 class="tit">회원가입</h2>
    <p class="tit_sub_txt">관리자 회원가입</p>
  </div>
  <div class="contact_wrap">
    <form active="/admin/login" method="post">
      <table>
        <colgroup>
          <col style="width:100px"/>
          <col style="width:auto"/>
        </colgroup>
        <tbody>
        <tr>
          <th style="vertical-align:middle">이름</th>
          <td><input name="adminName" id="adminName" type="text" placeholder="이름"></td>
        </tr>
          <tr>
            <th style="vertical-align:middle">아이디</th>
            <td><input name="adminId" id="adminId" type="text" placeholder="아이디를 입력해주세요."></td>
          </tr>
          <tr>
            <th style="vertical-align:middle">비밀번호</th>
            <td><input name="adminPw" id="adminPw" type="password" placeholder="비밀번호를 입력해주세요."></td>
          </tr>
          <tr>
            <th style="vertical-align:middle">인증번호</th>
            <td>
              <p>
                <button class="btn-gray btn-sm" id="mail-Check-Btn" type="button">이메일 전송</button>
                지민님의 이메일로 인증번호가 전달됩니다.
              </p>
              <div class="mail-check-box mt10">
                <p style="display: flex">
                  <input class="form-control mail-check-input" placeholder="인증번호 8자리를 입력해주세요!" disabled="disabled" maxlength="8">
                  <button class="btn-gray btn-sm ml10 ">확인</button>
                </p>
                <p id="timerUp">
                  <span id="timer" class="point-color"></span><i class='bi bi-clock point-color'></i>
                </p>
              </div>

            </td>
          </tr>

        </tbody>
      </table>
      <div class="text_center mt30">
        <a href="" class="btn btn-green">회원가입</a>
      </div>
    </form>
  </div>
</div>

<script>
    const formSubmit = $('#userCheckBtn'); //확인 버튼
    const emailValue = $('#userEmail'); // 이메일
    let checkInput = $('.mail-check-input') // 인증번호 입력하는곳
    let msg = "";

    // 인증코드 유효시간 카운트다운 및 화면 출력
    let timer; //카운트 다운
    let isRunning = false; //인증 코드 유효


    // 타이머 함수 실행
    function sendAuthNum(){
    // 남은 시간(초)
    let leftSec = 60,
    display = document.querySelector('#timer');
    // 이미 타이머가 작동중이면 중지
    if (isRunning){
    clearInterval(timer);
  }
    startTimer(leftSec, display);
  }

    function startTimer(count, display) {
    let minutes, seconds;
    timer = setInterval(function () {
    minutes = parseInt(count / 60, 10);
    seconds = parseInt(count % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    // 타이머 종료
    if (--count < 0) {
    clearInterval(timer);
    display.textContent = "";
    code = null;
    isRunning = false;
  }
  }, 1000);
    isRunning = true;
  }

  function emailSendNot(){

    msg  += "<div class='text-center'>";
    msg  += "<p>이미 인증번호가 이메일로 전송되었습니다.</p>";
    msg  += "</div>";


  }

    function emailSend(){
    $.ajax({
      type : 'get',
      url : '/apiAdmin/mailCheck',
      success : function (data) {
        code = data;
        console.log("data : " +  code);
        // 모달 메시지 작성
        msg  += "<div class='text-center'>";
        msg  += "<p class='point-color info'>1분 이내로 입력해주세요.</p>";
        msg  += "<p>인증번호가 이메일로 전송되었습니다.</p>";
        msg  += "</div>";

        //인증번호 메일 전달 모달
        checkInput.attr('disabled',false);
        formSubmit.removeClass('disabled');
        sendAuthNum(); // 타이머 함수 실행
      }
    }); // end ajax
  }

    $(function(){
    $('#mail-Check-Btn').click(function() {
      if (isRunning){
        msg = "";
        emailSendNot();
      }else{
        msg = "";
        emailSend();
      }
    }); // end send eamil

    // 인증번호 비교 및 아이디 찾기 폼 전송
    formSubmit.click(function () {
    let checkInputVal = checkInput.val(); // 인증번호 값
    const $resultMsg = $('#mail-check-warn');
    //console.log("checkInputVal : "+checkInputVal);

    if(checkInputVal === code){
    $("#idForm").submit();
  }else{
    $resultMsg.html('인증번호가 불일치 합니다. 다시 확인해주세요!.');
    $resultMsg.css('color','red');
  }
  });
  });
</script>

<c:import url="../inc/footer.jsp"/>
