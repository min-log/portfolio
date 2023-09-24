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
        <form:form action="/admin/boardRegister" method="post"  modelAttribute="pro" id="boardFrom">
            <table>
                <colgroup>
                    <col style="width:150px"/>
                    <col style="width:auto"/>
                </colgroup>
                <tbody>
                    <tr>
                        <th style="vertical-align:middle">타입</th>
                        <td>
                            <c:forEach var="type" items="${types}" varStatus="status">
                               <span class="mr10">
                                    <input name="proType" id="proType_${status.index}" type="checkbox" value="${type}" />
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
                            <form:input path="proTitle" name="proTitle" id="proTitle" type="text" placeholder="프로젝트 제목" />
                            <form:errors path="proTitle" cssClass="err_txt"/>
                        </td>
                    </tr>
                    <tr>
                        <th style="vertical-align:middle">설명</th>
                        <td>
                            <form:textarea path="proInfo" name="proInfo" id="proInfo" type="text" placeholder="회사 또는 설명 내용" ></form:textarea>
                            <form:errors path="proInfo" cssClass="err_txt"/>
                        </td>
                    </tr>
                    <tr>
                        <th style="vertical-align:middle">작업일</th>
                        <td>
                            <form:input path="proDateStart" id="proDateStart" name="proDateStart" type="date" class="mr10" /> -
                            <form:input path="proDateEnd" id="proDateEnd" name="proDateEnd" type="date" class="ml10" />
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
                            <img id="preview" alt="썸네일 이미지" />
                            <form:input path="proImg" id="proImg" name="proImg" type="file" accept="image/*" multiple="multiple" />
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


                        let file = document.querySelector('#proImg');
                        let fileList = null;


                        file.onchange = function () {
                            fileList = file.files ;
                            // 읽기
                            var reader = new FileReader();
                            reader.readAsDataURL(fileList[0]);
                            //로드 한 후
                            reader.onload = function  () {
                                document.querySelector('#preview').src = reader.result ;
                            };
                        };


                        $(document).ready(function() {
                            //여기 아래 부분
                            $('#summernote').summernote({
                                height: 300,
                                minHeight: 300,
                                maxHeight: 800,
                                focus: false,
                                lang: "ko-KR",
                                placeholder: '포트폴리오 이미지 및 내용 작성',
                                callbacks: {
                                    onImageUpload: function (files, editor, welEditable) {
                                        // 파일 업로드 (다중 업로드를 위해 반복문 사용)
                                        for (var i = files.length - 1; i >= 0; i--) {
                                            var fileName = files[i].name
                                            // 이미지 alt 속성 삽일을 위한 설정
                                            var caption = prompt('이미지 설명 :', fileName)
                                            if (caption == '') {
                                                caption = '이미지'
                                            }
                                            summernoteImageFile(files[i], this, caption)
                                        }
                                    },
                                }
                            });


                            function summernoteImageFile(file, el, caption) {
                                let formData = new FormData();
                                formData.append('file', file)
                                console.log(formData);
                                $.ajax({
                                    type: 'post',
                                    data: formData,
                                    url: "/apiBoard/contentImg",
                                    dataType: 'json',
                                    contentType: false,
                                    enctype: 'multipart/form-data',
                                    processData: false,
                                    async: true, //동기, 비동기 여부
                                    cache :false, // 캐시 여부
                                    focus: true,
                                    success: function (data) {
                                        console.log(data.url)
                                        $(el).summernote('insertImage', '/apiBoard/getImg?url='+data.url, function($image) {
                                            $image.css('width', "100%");
                                            $image.attr('alt', caption)
                                        });
                                    },
                                    error:function (data){
                                        console.log(data)
                                    }
                                });
                            }
                        });

                        function getProTypeValue()  {
                            // 선택된 목록 가져오기
                            const querylist = 'input[name="proType"]:checked';
                            const selectedEls =
                                document.querySelectorAll(querylist);

                            // 선택된 목록에서 value 찾기
                            let result = [];
                            selectedEls.forEach((el) => {
                                result.push(el.value);
                            });
                            // 출력
                            return result;
                        }


                        function getProStackValue()  {
                            // 선택된 목록 가져오기
                            const querylist = 'input[name="proStack"]:checked';
                            const selectedEls =
                                document.querySelectorAll(querylist);

                            // 선택된 목록에서 value 찾기
                            let result = [];
                            selectedEls.forEach((el) => {
                                result.push(el.value);
                            });
                            // 출력
                           return result;
                        }




                        // 게시판 저장
                        function submitPost(){

                            let proTitle = document.getElementById("proTitle").value;
                            let dateStart = document.getElementById("proDateStart").value;
                            let dateEnd = document.getElementById("proDateEnd").value;
                            let proLink = document.getElementById("proLink").value;
                            let proGit = document.getElementById("proGit").value;
                            let proInfo = document.getElementById("proInfo").value;
                            let content = $('#summernote').summernote('code');
                            let proStack = null;
                            let proType = null;
                            if(getProStackValue().length != 0) proStack = getProStackValue();
                            if(getProTypeValue().length != 0) proType = getProTypeValue();

                            console.log(proStack);
                            let dataFrom = {
                                "proTitle" : proTitle,
                                "proDateStart" : dateStart,
                                "proDateEnd" : dateEnd,
                                "proLink" : proLink,
                                "proGit" : proGit,
                                "proType" :proType,
                                "proStack" : proStack,
                                "proContent" : content,
                                "proInfo" :proInfo
                            };

                            //json 형태 데이터 전달
                            let formData = new FormData;
                            formData.append("dto", new Blob([JSON.stringify(dataFrom)] , {type: "application/json"}));
                            //formData.append("content", content); // 컨텐츠 내용 전달
                            if(fileList != null) formData.append("proImg",fileList[0]);

                            $.ajax({
                                type: 'post',
                                data: formData,
                                url: "/apiBoard/boardRegister",
                                dataType: 'json',
                                contentType: false,
                                enctype: 'multipart/form-data',
                                processData: false,
                                async: true, //동기, 비동기 여부
                                cache :false, // 캐시 여부
                                success:function (data) {
                                    console.log(data)
                                    if(data == null) {
                                        alert("저장이 실패했습니다.");
                                    }else{

                                        if (window.confirm('저장이 성공했습니다. 페이지 확인을 하시겠습니까?'))
                                        {
                                            // They clicked Yes
                                            window.location.replace("/board/view/" + data);
                                        }
                                        else
                                        {
                                            // They clicked no
                                            document.getElementById('boardFrom').reset();
                                        }


                                    }
                                },
                                error:function (data) {
                                    console.log(data.responseJSON);
                                    let errData = data.responseJSON;
                                    let err="";
                                    errData.forEach(function (item) {
                                        err += "/ "+ item + " ";
                                    });
                                    alert("저장이 실패했습니다.\n아래 내용을 확인해주세요. \n "+ err );
                                }
                            });
                        }

                </script>
            </div>
            <div class="text_center mt30">
                <button class="btn btn-green" onclick="submitPost()" type="button">저장</button>
                <button class="btn btn-gray" type="reset" >다시 작성</button>
            </div>
        </form:form>
    </div>
</div>
<c:import url="../inc/footer.jsp"/>
