<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn"  uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<c:set var="contextPath" value="${pageContext.request.contextPath}"/>

<body>
<!-- #wrap -->
<div id="wrap">
	<!-- #skipNav -->
	<div id="skipNav">
		<a href="#container">본문 바로가기</a>
		<a href="#header">글로벌 네비게이션 바로가기</a>
	</div>
	<div id="loddingModal">
		<img src="${contextPath}/resource/images/common/logo.png" alt="minlog site">
		<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
	</div>
	<header id="header">
		<a href="/" class="logo"><img src="${contextPath}/resource/images/common/logo.png" alt="minlog site"><span class="ally-hidden">메인페이지 이동</span></a>
		<a href="javascript:(0);" onclick="btnMenu()" class="btn_menu"><em></em><span class="ally-hidden">메뉴 열기</span></a>
	</header>
	<!--header-->
	<div class="menu_wrap">
		<div class="inner">
			<ul>
				<li style="--i:0.8s;">
					<a href="/board/list/BackEnd">
						01.BackEnd Site
					</a>
					<p></p>
				</li>
				<li style="--i:1.0s;">
					<a  href="/board/list/FrontEnd">
						02. FrontEnd SIte
					</a>
					<p></p>
				</li>
				<li style="--i:1.2s;">
					<a href="/board/list/Marketing">
						03. marketing
					</a>
					<p></p>
				</li>
			</ul>
			<div class="bottom" style="--i:1.4s;">
				<a href="javascript:void(0)">카카오톡 ID : minlog.0430</a>
				<a href="mailto:minlog.0430@gmail.com" type="email" target="_blank">Email </a>
				<a href="https://jimin-log.tistory.com/" target="_blank">Blog </a>
				<a href="https://github.com/min-log" target="_blank">Git </a>
				<c:choose>
					<c:when test="${sessionScope.admin eq null}">
						<a href="/admin">관리자 로그인</a>
					</c:when>
					<c:otherwise>
						<a href="/user/boardWrite">게시판 작성</a>
						<a href="/admin/logout">로그아웃</a>
					</c:otherwise>
				</c:choose>
			</div>
		</div>
	</div>
	<!-- menu_wrap -->


	<!-- start :container-->
	<div id="container" class="">
		<em class="scroll"><b class="icon"></b><b class="arrow">scroll down</b></em>
