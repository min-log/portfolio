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
        <h2 class="tit">게시글 작성</h2>
        <p class="tit_sub_txt">포트폴리오 내용작성</p>
    </div>
    <div class="contact_wrap">
        <form:form action="/admin/boardRegister" method="post"  modelAttribute="pro">
            <table>
                <colgroup>
                    <col style="width:150px"/>
                    <col style="width:auto"/>
                </colgroup>
                <tbody>
                    <tr>
                        <th style="vertical-align:middle">타입</th>
                        <td>
                            <select>
                                <option>타입을 선택하세요.</option>
                                <c:forEach var="type" items="${types}" varStatus="status">
                                    <option value="${type}">
                                            ${type}
                                    </option>
                                </c:forEach>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th style="vertical-align:middle">프로젝트</th>
                        <td>
                            <form:input path="proTitle" name="proTitle" id="proTitle" type="text" placeholder="프로젝트 제목" />
                            <form:errors path="proTitle" cssClass="err_txt"/>
                        </td>
                    </tr>
                    <tr>
                        <th style="vertical-align:middle">작업일</th>
                        <td>
                            <form:input path="dateStart" type="date" class="mr10" /> -
                            <form:input path="dateEnd" type="date" class="ml10" />
                        </td>
                    </tr>
                    <tr>
                        <th>기술</th>
                        <td>
                            <div>
                                <p class="mr10">Back</p>
                                <div class="checkbox_wrap">
                                    <c:forEach var="stack" items="${stacksBack}" varStatus="status">
                                        <span class="mr10">
                                            <input name="proStack" id="stackB_${status.index}" type="checkbox" value="${stack}" />
                                            <label for="stackB_${status.index}">
                                                ${stack}
                                            </label>
                                        </span>
                                    </c:forEach>
                                </div>
                            </div>
                            <div class="mt10">
                                <p class="mr10">DataBase</p>
                                <div class="checkbox_wrap">
                                    <c:forEach var="stack" items="${stacksDb}" varStatus="status">
                                        <span class="mr10">
                                            <input name="proStack" id="stackD_${status.index}" type="checkbox" value="${stack}">
                                            <label for="stackD_${status.index}">
                                                    ${stack}
                                            </label>
                                        </span>
                                    </c:forEach>
                                </div>
                            </div>
                            <div class="mt10">
                                <p class="mr10">FrontEnd</p>
                                <div class="checkbox_wrap">
                                    <c:forEach var="stack" items="${stackFront}" varStatus="status">
                                        <span class="mr10">
                                            <input name="proStack" id="stackF_${status.index}" type="checkbox" value="${stack}">
                                            <label for="stackF_${status.index}">
                                                    ${stack}
                                            </label>
                                        </span>
                                    </c:forEach>
                                </div>
                            </div>

                        </td>
                    </tr>
                    <tr>
                        <th style="vertical-align:middle">깃</th>
                        <td>
                            <form:input path="proGit" name="proGit" id="proGit" type="text" placeholder="깃 허브 URL" />
                            <form:errors path="proGit" cssClass="err_txt"/>
                        </td>
                    </tr>
                    <tr>
                        <th style="vertical-align:middle">운영링크</th>
                        <td>
                            <form:input path="proLink" name="proLink" id="proLink" type="text" placeholder="실제 프로젝트 도메인" />
                            <form:errors path="proLink" cssClass="err_txt"/>
                        </td>
                    </tr>
                    <tr>
                        <th style="vertical-align:middle">썸네일</th>
                        <td>
                            <form:input path="proImg" name="proLink" id="proLink" type="text" placeholder="실제 프로젝트 도메인" />
                            <form:errors path="proImg" cssClass="err_txt"/>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div>
                <textarea id="summernote" name=""></textarea>

                <!-- include summernote css/js-->
                <script src="${contextPath}/resource/summernote/summernote-lite.js"></script>
                <script src="${contextPath}/resource/summernote/summernote-ko-KR.js"></script>

                <link rel="stylesheet" href="${contextPath}/resource/summernote/summernote-lite.css">

                <script type="text/javascript">
                    $(document).ready(function() {
                        //여기 아래 부분
                        $('#summernote').summernote({
                            height: 300,
                            minHeight: 300,
                            maxHeight: 800,
                            focus: false,
                            lang: "ko-KR",
                            placeholder: '포트폴리오 이미지 및 내용 작성'

                        });
                    });
                </script>

            </div>
            <div class="text_center mt30">
                <button class="btn btn-green" type="submit" >저장</button>
                <button class="btn btn-gray" type="reset" >다시 작성</button>
            </div>
        </form:form>
    </div>
</div>
<c:import url="../inc/footer.jsp"/>
