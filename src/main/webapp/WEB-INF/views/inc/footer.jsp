<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn"  uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>



<!-- Modal -->
<div class="modal fade" id="ModalMsg" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-wrap">
		<div class="modal-header">
			메시지
			<a href="javascript:modalClose()" class="modal-close" title="닫기">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
					<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
				</svg>
			</a>
		</div>
		<div class="modal-content" role="document">
			<div class="modal-msg"></div>
		</div>
	</div>
</div>
<script type="text/javascript">
	function modalClose(){
		document.getElementById("ModalMsg").classList.add("fade");
		return false;
	}
	let msgPop = "";
	msgPop +=  '<c:out value="${msg}" />';

	if(msgPop  != ""){
		document.getElementById("ModalMsg").classList.remove("fade");
		document.querySelector(".modal-msg").innerHTML = msgPop;
	}


</script>
<!--end : Modal -->
				</div>
				<!-- end :container-->
				<footer class="footer">
					<div class="info_con">
						<h2>Site *</h2>
						<ul>
							<li><a href="https://github.com/min-log" target="_blank"><em class="xi-github"></em><span>github | min-log</span></a></li>
							<li><a href="https://min-log.notion.site/e049dc9061da4993ae4e7d24a51761fe?v=4828781b72684103a2f35eda99294e1b" target="_blank"><em class="xi-book"></em><span>notion | min-log</span></a></li>
						</ul>
					</div>
					<div class="info_contact"> 
						<h2>Contact *</h2>
						<ul>
							<li><a href=""><em class="xi-naver-square"></em><span>jimin-log@naver.com</span></a></li>
							<li><a href=""><em class="xi-kakaotalk"></em><span>@jimin-lee</span></a></li>
							<li><a href=""><em class="xi-mobile"></em><span>010-3896-7340</span></a></li>
						</ul>
					</div>
				</footer>
				
			</div>
			<!-- #wrap-->
		</body>
</html>
		