<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn"  uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<c:set var="contextPath" value="${pageContext.request.contextPath}" />


<c:import url="./inc/headerScript.jsp"/>
<c:import url="./inc/header.jsp"/>
<link rel="stylesheet" href="${contextPath}/resource/css/pages/sub.css" />
<link rel="stylesheet" href="${contextPath}/resource/css/pages/sub_media.css">

<div class="subpage">
    <div class="page_full">
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

    </div>
    <div class="inner">
        <ul id="proList">
            <c:forEach var="proItem" items="${proPage.proList}"  varStatus="status">
                <li>
                    <a class="pro_img" href="/board/view/${proItem.proId}">
                        <c:if  test="${! proItem.proImg.equals('null')}">
                            <img src="/apiBoard/getImg?url=/${proItem.proImg}" alt="">
                        </c:if>
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
        <div id="lodding" class="lds-ellipsis" style="display: none"><div></div><div></div><div></div><div></div></div>
    </div>
</div>



<script src="${contextPath}/resource/js/jquery/gsap.min.js"></script>
<script src="${contextPath}/resource/js/jquery/ScrollTrigger.min.js"></script>
<script type="text/javascript">
    //스크롤 이벤트

    //     gsap.registerPlugin(ScrollTrigger);
    // window.addEventListener("resize", ScrollTrigger.update);
    //     let $allList = gsap.utils.toArray("#proList li");
    //     $allList.forEach((title) => {
    //         gsap.to(title, {
    //             scrollTrigger: {
    //                 trigger: title,
    //                 start: "top bottom",
    //                 end: "bottom bottom",
    //                 toggleClass:  "active",
    //                 markers: true,
    //                 duration:3,
    //                 scrub:true,
    //                 pin :false,
    //                 ease:'easeOutQuart',
    //                 repeatDelay:1,
    //                 delaty:1,
    //             },
    //             y :-200,
    //             opacity :1,
    //         });
    //     });




    // 페이징
    let proType = "${proPage.proType}";
    let pageAll = ${proPage.proAll};
    let pageEnd = ${proPage.proEnd};
    let pageStart = ${proPage.proStart};
    let scrollBoolean = false;

    $(document).scroll(function() {
        //console.log(scrollBoolean);
        if (pageAll != pageEnd) {
            var WindowH = $(window).innerHeight(); // 윈도우  높이
            let proListPageing = $(".footer").offset().top;
            let scrollPoint = $(window).scrollTop() + WindowH; // 현제 스크롤 위치 // 현제 스크롤 높이 + 전체 컨텐츠
            if (proListPageing + 100 >= scrollPoint && scrollPoint >= proListPageing) {
                if(scrollBoolean == false){
                    $("#lodding").show()
                    setTimeout(function () {
                       $("#lodding").hide();
                        pageingGet();
                    },1000);
                }
                scrollBoolean = true;

            }
        }
    });


    function pageingGet(){
        if(pageAll != pageEnd){
            let con = {
                "proType" : proType,
                "pageStart" : pageEnd,
            }
             $.ajax({
                url:'/apiBoard/boardPageing',
                type :'post',
                data: JSON.stringify(con),
                dataType: 'json',
                contentType: 'application/json',
                success:function (data) {
                    //console.log(data);
                    pageEnd = data.proEnd;
                    pageStart = data.proStart;
                    // console.log(pageStart +" /"+ pageEnd);
                    data.proList.forEach(item=>{
                        let content = document.createElement("li");
                            content.innerHTML += "<a class='pro_img' href='/board/view/" + item.proId + "' >"
                                + "<img src='/apiBoard/getImg?url=/" + item.proImg + "' /></a>"
                                + "<p id='pro_item" + item.proId + "' class='icon-stack-wrap-type'></p>"
                                + "<p class='pro_tit'>" +item.proTitle +"</p>"
                                + "<p class='pro_date'>" +item.proDateStart + "-" +item.proDateEnd +"</p>";

                        document.getElementById("proList").append(content);
                        for(let i =0; i <item.proType.length ; i++){
                            let id = "pro_item"+item.proId;
                            let type = document.createElement("span");
                            type.innerHTML =  "<span class='icon-stack'>" + item.proType[i] + "</span>";
                            document.getElementById(id).append(type);
                        }
                    });
                    if(data.proEnd >= data.proAll) {
                        scrollBoolean = true;
                    }else {
                        scrollBoolean = false;
                    }
                },
                error:function(){
                    alert('실패');
                    scrollBoolean = true;
                }
            });

        }

    }


</script>

<c:import url="./inc/footer.jsp"/>
