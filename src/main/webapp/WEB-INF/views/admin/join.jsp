<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn"  uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<c:set var="contextPath" value="${pageContext.request.contextPath}" />


<c:import url="../inc/headerScript.jsp"/>
<c:import url="../inc/header.jsp"/>
<link rel="stylesheet" href="${contextPath}/resource/css/pages/sub.css" />
<link rel="stylesheet" href="${contextPath}/resource/css/pages/sub_media.css">

<div class="subpage">
  <div class="subpage_header">
    <h2 class="tit">회원가입</h2>
    <p class="tit_sub_txt">관리자 회원가입</p>
  </div>
  <div class="contact_wrap">
    <form:form action="/admin/join" method="post" id="joinFrom" modelAttribute="adminDTO">
        <input type="hidden" id="emailCheckValue" value="false">
        <table>
          <colgroup>
            <col style="width:100px"/>
            <col style="width:auto"/>
          </colgroup>
          <tbody>
          <tr>
            <th style="vertical-align:middle">이름</th>
            <td>
                <form:input path="adminName" name="adminName" id="adminName" type="text" placeholder="이름" />
                <form:errors path="adminName" cssClass="err_txt"/>
            </td>
          </tr>
            <tr>
              <th style="vertical-align:middle">아이디</th>
              <td>
                  <form:input path="adminId" name="adminId" id="adminId" type="text" placeholder="아이디를 입력해주세요." />
                  <form:errors path="adminId" cssClass="err_txt"/>
              </td>
            </tr>
            <tr>
              <th style="vertical-align:middle">비밀번호</th>
              <td>
                  <form:input path="adminPw" name="adminPw" id="adminPw" type="password" placeholder="비밀번호를 입력해주세요." />
                  <form:errors path="adminPw" cssClass="err_txt"/>
              </td>
            </tr>
            <tr>
              <th style="vertical-align:middle">인증번호</th>
              <td>
                <p>
                  <button class="btn-gray btn-sm" id="mailBtn" type="button">이메일 전송</button>
                  지민님의 이메일로 인증번호가 전달됩니다.
                </p>
                <div class="mail-check-box mt10">
                  <p style="display: flex">
                    <input class="form-control mail-check-input" placeholder="인증번호 8자리를 입력해주세요!" disabled="disabled" maxlength="8">
                    <button id="mail-check" class="btn-gray btn-sm ml10" type="button">확인</button>
                  </p>
                  <p id="timerUp">
                    <span id="timer" class="point-color"></span><i class='bi bi-clock point-color'></i>
                  </p>
                  <p class="mail-result-msg"></p>
                </div>

              </td>
            </tr>

          </tbody>
        </table>
        <div class="text_center mt30">
          <button class="btn btn-green" id="userCheckBtn" type="button" onclick="joinForm()">회원가입</button>
        </div>
    </form:form>
  </div>
</div>

<script>
    const formSubmit = $('#userCheckBtn'); //확인 버튼
    const emailValue = $('#userEmail'); // 이메일
    let checkInput = $('.mail-check-input'); // 인증번호 입력하는곳
    let checkSing = $('#emailCheckValue');// 확인 완료값
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
          // 모달 메시지 작성
          msg  += "<div class='text-center'>";
          msg  += "<p class='point-color info'>1분 이내로 입력해주세요.</p>";
          msg  += "<p>인증번호가 이메일로 전송되었습니다.</p>";
          msg  += "</div>";

          //인증번호 메일 전달 모달
          checkInput.attr('disabled',false);
          sendAuthNum(); // 타이머 함수 실행

        }
      }); // end ajax
    }
    $(function(){
        $('#mailBtn').click(function() {
              if (isRunning){
                msg = "";
                emailSendNot();
              }else{
                msg = "";
                emailSend();
              }
        }); // end send eamil

        $("#mail-check").click(function () {
            let checkInputVal = document.querySelector(".mail-check-input").value;
            if(checkInputVal === code){
                $(".mail-result-msg").html('인증번호 인증이 성공했습니다.');
                $(".mail-result-msg").css('color','blue');
                $("#timerUp,#mailBtn").hide();
                checkInput.attr('disabled',true);
                checkSing.val(true);
            }else{
                $(".mail-result-msg").html('인증번호가 불일치 합니다. 다시 확인해주세요!.');
                $(".mail-result-msg").css('color','red');
                checkSing.val(false);
            }
        });



    });
    function joinForm(){
        let is_empty;
        $('#joinFrom').find('input[type!="hidden"]').each(function(){
            if(!$(this).val()) {
                is_empty = true;
            }

        });
        if(is_empty) {
            alert('내용을 모두 입력해주세요.');
            return false;
        }


        console.log(checkSing.val)
        if (document.getElementById("emailCheckValue").value == 'true'){
          $("#joinFrom").submit();
        }else{
            alert("인증을 완료해주세요.");
            return false;
        }
    }
</script>

<c:import url="../inc/footer.jsp"/>
