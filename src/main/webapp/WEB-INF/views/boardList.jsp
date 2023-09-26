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
        <p class="icon-stack-wrap mt20">
            <c:forEach var="stack" items="${titSub}">
                <span class="icon-stack">
                ${stack}
                </span>
            </c:forEach>
        </p>

    </div>
    <div class="inner">
        <ul id="proList">
            <c:forEach var="proItem" items="${proList}"  varStatus="status">
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
</div>

<c:import url="./inc/footer.jsp"/>
