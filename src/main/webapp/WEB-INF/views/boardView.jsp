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
        <p>
            <c:forEach var="type" items="${pro.proType}" varStatus="status">
               <span class="mr10">
                            ${type}
                </span>
            </c:forEach>
        </p>
        <p>

            <c:forEach var="stack" items="${pro.proStack}" varStatus="status">
                <span class="mr10">
                        ${stack}
                </span>
            </c:forEach>
        </p>
        <h2 class="tit">${pro.proTitle}</h2>
        <p> ${pro.proDateStart} - ${pro.proDateEnd} </p>
        <p>
            설명
            ${pro.proInfo}
        </p>
        <p>
            운영링크 : <a href="${pro.proLink}" target="_blank">${pro.proLink}</a>
        </p>
        <p>
            git : <a href="${pro.proGit}" target="_blank">${pro.proGit}</a>
        </p>
    </div>
    <div id="proView">
        <div class="pro_img">
            <img id="preview" src="/apiBoard/getImg?url=/${pro.proImg}" alt="썸네일 이미지" />
        </div>
        <div class="pro_content">
            ${pro.proContent}
        </div>
    </div>
</div>

<c:import url="./inc/footer.jsp"/>
