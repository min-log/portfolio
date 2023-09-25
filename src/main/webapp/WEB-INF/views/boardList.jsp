<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn"  uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<c:set var="contextPath" value="${pageContext.request.contextPath}" />


<c:import url="./inc/headerScript.jsp"/>
<c:import url="./inc/header.jsp"/>
<link rel="stylesheet" href="${contextPath}/resource/css/pages/sub.css" />
<div class="subpage">
    <div class="subpage_header text_center">
        <h2 class="tit">${tit}</h2>
        <p class="tit_sub_txt">
            ${titSub}
        </p>

    </div>

    <ul id="proList">

            <li>

            </li>
    </ul>
</div>

<c:import url="./inc/footer.jsp"/>
