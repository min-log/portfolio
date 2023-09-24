<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn"  uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<c:set var="contextPath" value="${pageContext.request.contextPath}" />


<c:import url="../inc/headerScript.jsp"/>
<c:import url="../inc/header.jsp"/>
<link rel="stylesheet" href="${contextPath}/resource/css/pages/sub.css" />
<div class="subpage">
    <div class="subpage_header">
        <h2 class="tit">게시글</h2>
        <p class="tit_sub_txt">포트폴리오 내용작성 14</p>
    </div>
    <div class="contact_wrap">
        <form action="/admin/boardUpdate" method="post" id="proView">
            <table>
                <colgroup>
                    <col style="width:150px"/>
                    <col style="width:auto"/>
                </colgroup>
                <tbody>
                    <tr>
                        <th style="vertical-align:middle">타입</th>
                        <td>
                            <c:forEach var="type" items="${pro.proType}" varStatus="status">
                                   <span class="mr10">
                                        <input name="proType" id="proType_${status.index}" type="checkbox" value="${type}" checked disabled/>
                                        <label for="proType_${status.index}">
                                                ${type}
                                        </label>
                                    </span>
                            </c:forEach>
                        </td>
                    </tr>
                    <tr>
                        <th style="vertical-align:middle">프로젝트</th>
                        <td>
                            <input value="${pro.proTitle}" disabled>
                        </td>
                    </tr>
                    <tr>
                        <th style="vertical-align:middle">작업일</th>
                        <td>
                            <input id="proDateStart" name="proDateStart" value="${pro.proDateStart}" type="date" class="mr10" /> -
                            <input id="proDateEnd" name="proDateEnd" value="${pro.proDateEnd}" type="date" class="ml10" />
                        </td>
                    </tr>
                    <tr>
                        <th>기술</th>
                        <td>
                            <div>
                                <div class="checkbox_wrap">
                                    <c:forEach var="stack" items="${pro.proStack}" varStatus="status">
                                        <span class="mr10">
                                                ${stack}
                                        </span>
                                    </c:forEach>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th style="vertical-align:middle">깃</th>
                        <td>
                            <input path="proGit" name="proGit" id="proGit" type="text" value="${pro.proGit}" placeholder="깃 허브 URL" />
                        </td>
                    </tr>
                    <tr>
                        <th style="vertical-align:middle">운영링크</th>
                        <td>
                            <input path="proLink" name="proLink" id="proLink" type="text" value="${pro.proLink}" placeholder="실제 프로젝트 도메인" />
                        </td>
                    </tr>
                    <tr>
                        <th style="vertical-align:middle">썸네일</th>
                        <td>
                            <img id="preview" src="/apiBoard/getImg?url=/${pro.proImg}" alt="썸네일 이미지" />
                        </td>
                    </tr>
                </tbody>
            </table>

            <div>
                ${pro.proContent}
            </div>
        </form>
    </div>
</div>

<c:import url="../inc/footer.jsp"/>
