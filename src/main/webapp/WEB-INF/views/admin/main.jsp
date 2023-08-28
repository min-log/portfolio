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
    <h2 class="tit">admin login</h2>
    <p class="tit_sub_txt">관리자 페이지 입니다.</p>
  </div>

  <div class="contact_wrap">
    <form action="/admin/login" method="post">
      <table>
        <colgroup>
          <col style="width:100px"/>
          <col style="width:auto"/>
        </colgroup>
        <tbody>
          <tr>
            <th style="vertical-align:middle">아이디</th>
            <td><input name="adminId" id="adminId" type="text" placeholder="아이디를 입력해주세요."></td>
          </tr>
          <tr>
            <th style="vertical-align:middle">비밀번호</th>
            <td><input name="adminPw" id="adminPw" type="password" placeholder="비밀번호를 입력해주세요."></td>
          </tr>
        </tbody>
      </table>
      <div class="mt30 text_center">
        <button type="submit" class="btn btn-green ">로그인</button>
        <a href="/admin/joinFrom" class="btn btn-gray ml10">회원가입</a>
      </div>

    </form>
  </div>
</div>



<c:import url="../inc/footer.jsp"/>
