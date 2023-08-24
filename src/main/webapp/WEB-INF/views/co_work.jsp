<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn"  uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<c:set var="contextPath" value="${pageContext.request.contextPath}" />
<c:import url="inc/headerScript.jsp"/>
<c:import url="inc/header.jsp"/>
<link rel="stylesheet" href="${contextPath}/resource/css/pages/sub.css" />

<section class="subpage">
  <div class="subpage_header">
    <h2 class="tit">Co-work</h2>
    <p class="tit_sub_txt">나와 함께 했던 사람들의 이야기</p>
  </div>
  <div class="contact_wrap">
    <form id="coForm" method="post" action="/coWork/register">
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
          <th><label for="co_name">이름</label></th>
          <td><input id="co_name" name="co_name" type="text" data-txt="이름"></td>
        </tr>
        <tr>
          <th><label for="co_company">회사 / 기타</label></th>
          <td>
            <select name="co_company" id="co_company" data-txt="회사">
              <option>회사/기타 선택해주세요.</option>
              <option>CMA</option>
              <option>CMA</option>
              <option>오상테크놀로지</option>
              <option>스칼라티움</option>
            </select>
          </td>
        </tr>
        <tr>
          <th><label for="co_department" >부서</label></th>
          <td>
            <input name="co_department" id="co_department" type="text" data-txt="부서" />
          </td>
        </tr>
        <tr>
          <th><label for="co_position" >직위</label></th>
          <td>
            <input name="co_position" id="co_position" type="text" data-txt="직위" />
          </td>
        </tr>
        <tr>
          <th><label for="co_content">하고싶은 말</label></th>
          <td>
            <textarea name="co_content" id="co_content" data-txt="하고싶은 말" ></textarea>
            <p>500글자 내외로 내용을 입력하세요.</p>
          </td>
        </tr>
        <tr>
          <th><label for="co_password">비밀번호</label></th>
          <td>
            <input id="co_password" name="co_password" type="password" placeholder="비밀번호 4자리 이상 적어주세요." data-txt="비밀번호">
            <p>수정 및 삭제 시 필요해요.</p>
          </td>
        </tr>
        <tr>
          <th><label for="co_lock">암호</label></th>
          <td>
            <p>게시글을 작성하시려면 암호를 맞춰주세요.</p>
            <p>지민님의 핸드폰 번호는? (- 빼고 적어주세요.)</p>
            <input id="co_lock" name="co_lock" type="password" placeholder="010********"  data-txt="암호">
          </td>
        </tr>
        </tbody>
      </table>
      <button type="button" onclick="coWorkForm()" class="btn-green">보내기 <em class="xi-send ml5"></em></button>
    </form>
  </div>
  <script type="text/javascript">
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

        alert(is_txt + ' : 내용을 모두 입력해주세요.');
        return false;
      }
      $("#coForm").submit();




    }
  </script>
</section>
<c:import url="inc/footer.jsp"/>
