<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn"  uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<c:set var="contextPath" value="${pageContext.request.contextPath}" />
<c:import url="inc/headerScript.jsp"/>
<c:import url="inc/header.jsp"/>
<link rel="stylesheet" href="${contextPath}/resource/css/pages/sub.css" />
<link rel="stylesheet" href="${contextPath}/resource/css/pages/sub_media.css">

<section class="subpage">
  <div class="subpage_header">
    <h2 class="tit">Co-work</h2>
    <p class="tit_sub_txt">나와 함께 했던 사람들의 이야기</p>
  </div>
  <div class="contact_wrap">
    <form id="coForm" method="post" action="/coWork/register">
      <input type="hidden" value="${dto.coId}" />
      <table>
        <caption>
          <p class="ally-hidden">전하고 싶은 이야기</p>
        </caption>
        <colgroup>
          <col style="width:20%;min-width:90px;">
          <col style="width:auto">
        </colgroup>
        <tbody>
        <tr>
          <th><label for="coName">이름</label></th>
          <td><input id="coName" name="coName" type="text" data-txt="이름" placeholder="이름을 적어주세요." value="${dto.coName}"></td>
        </tr>
        <tr>
          <th><label for="coCompany">회사 / 기타</label></th>
          <td>
            <select name="coCompany" id="coCompany" data-txt="회사">
              <option>회사/기타 선택해주세요.</option>
              <option>멀티캠퍼스</option>
              <option>CMA</option>
              <option>오상테크놀로지</option>
              <option>스칼라티움</option>
            </select>
          </td>
        </tr>
        <tr>
          <th><label for="coDepartment" >부서 / 팀명</label></th>
          <td>
            <input name="coDepartment" id="coDepartment" type="text" data-txt="부서" placeholder="부서를 적어주세요. ex) 개발, 디자인" value="${dto.coDepartment}"/>
          </td>
        </tr>
        <tr>
          <th><label for="coPosition" >직책</label></th>
          <td>
            <input name="coPosition" id="coPosition" type="text" data-txt="직책" placeholder="직책을 적어주세요. ex) 과장" value="${dto.coPosition}"/>
          </td>
        </tr>
        <tr>
          <th><label for="coContent">하고싶은 말</label></th>
          <td>
            <textarea class="textBox" name="coContent" id="coContent" data-txt="하고싶은 말" placeholder="함께 일하며 알게된 지민은 어떤 사람인가요?">${dto.coContent}</textarea>
            <p class="mt10">
              100자 이상 200자 내외로 내용을 입력하세요.
              <span style="float:right"><b id="textCount" class="color_main">0</b> 글자 수</span>
            </p>
          </td>
        </tr>
        <tr <c:if test="${dto  != null}">style="display:none;"</c:if> >
          <th><label for="coPassword">비밀번호</label></th>
          <td>
            <input id="coPassword" name="coPassword" type="password"
              <c:if test="${dto  != null}"> value="${dto.coPassword}" readonly </c:if>
              placeholder="비밀번호 4자리 이상 적어주세요." data-txt="비밀번호" >

            <p class="mt10">수정 및 삭제 시 필요해요.</p>
          </td>
        </tr>
        <tr <c:if test="${dto  != null}"> style="display:none;" </c:if>>
          <th><label for="coLock">암호</label></th>
          <td>
            <p>게시글을 작성하시려면 암호를 맞춰주세요.</p>
            <p>지민님의 핸드폰 번호는? (- 빼고 적어주세요.) </p>
            <input id="coLock" name="coLock"  class="mt10" type="password" placeholder="010********"
                    <c:if test="${dto  != null}"> value="01038967340" </c:if>
                   data-txt="암호" />
          </td>
        </tr>
        </tbody>
      </table>
      <div class="btn-wrap mt10">
      <c:choose>
          <c:when test="${dto  != null}">
            <button type="button" onclick="coWorkForm()" class="btn btn-green">수정하기</button>
          </c:when>
          <c:otherwise>
            <button type="button" onclick="coWorkForm()" class="btn btn-green btn-active">보내기 <em class="xi-send ml5"></em></button>
          </c:otherwise>
      </c:choose>
      </div>
    </form>
  </div>


  <script type="text/javascript">
    textBoxContLimit(200);


    function coWorkForm(){

      let is_empty = false;
      let is_txt = "";
      $('#coForm').find('input[type!="hidden"]').each(function(){
        if(!$(this).val()) {
          is_empty = true;
          is_txt += $(this).data("txt") + ", ";
        }

      });

      if(is_empty) {
        document.getElementById("ModalMsg").classList.remove("fade");
        document.querySelector(".modal-msg").innerHTML = "내용을 모두 입력해주세요.";
        return false;
      }
      $("#coForm").submit();



    }
  </script>
</section>
<c:import url="inc/footer.jsp"/>
