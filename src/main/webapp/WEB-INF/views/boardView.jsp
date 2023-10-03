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
        <h2 class="tit">${pro.proTitle}</h2>
        <ul class="view-wrap mt50">
            <li class="view-info">
                ${pro.proInfo}
            </li>
            <li class="view-date">
                ${pro.proDateStart} - ${pro.proDateEnd}
            </li>
            <li class="view-link">
                <i class="xi-github"></i>
                <a href="${pro.proGit}" target="_blank">${pro.proGit}</a>
            </li>
            <li class="view-link">
                <i class="xi-link"></i>
                <a href="${pro.proLink}" target="_blank">${pro.proLink}</a>
            </li>
        </ul>

        <p class="icon-stack-wrap-type mt50">
            <c:forEach var="type" items="${pro.proType}" varStatus="status">
               <span class="icon-stack">
                       ${type}
               </span>
            </c:forEach>
        </p>
        <p class="icon-stack-wrap mt10">

            <c:forEach var="stack" items="${pro.proStack}" varStatus="status">
                <span class="icon-stack">
                        ${stack}
                </span>
            </c:forEach>
        </p>


    </div>
    <c:if test="${sessionScope.admin ne null}">
        <p class="btn-wrap text_center mb50 mt50">
            <a href="/user/boardWrite/${pro.proId}" class="btn btn- " style="width:auto">수정</a>
            <a href="/user/boardShowNone/${pro.proId}" class="btn btn- " style="width:auto">숨김</a>
            <a href="/user/boardRemove/${pro.proId}" class="btn btn- " style="width:auto">삭제</a>
        </p>
    </c:if>

    <div id="proThumImg" class="mt50">
        <img src="../../resource/images/common/modul_pc.png" alt="">
        <div class="pro_img">
            <img id="preview" src="/apiBoard/getImg?url=/${pro.proImg}" alt="썸네일 이미지" />
        </div>
    </div>
    <div id="proView">
        <div class="pro_content">
            ${pro.proContent}
        </div>
    </div>
</div>

<c:import url="./inc/footer.jsp"/>