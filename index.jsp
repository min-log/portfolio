<!DOCTYPE html>
<html lang="ko">
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="format-detection" content="telephone=no" />
		<meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale=2.0, user-scalable=yes" />
		<link href="css/com/jquery.mCustomScrollbar.css" rel="stylesheet" type="text/css"/>
		<link href="css/fonts/font.css" rel="stylesheet" type="text/css"/>
		<link href="css/com/reset.css" rel="stylesheet" type="text/css"/>
		<link href="css/com/common.css" rel="stylesheet" type="text/css"/>

		<link href="css/main/main.css" rel="stylesheet" type="text/css"/>
		<script src="js/jquery/jquery-1.10.2.min.js" type="text/javascript"></script>
		<script src="js/jquery_ui/jquery-ui-1.10.3.custom.min.js" type="text/javascript"></script>
		<script src="js/jquery_ui/jquery.mCustomScrollbar.concat.min.js" type="text/javascript"></script>
		<script src="js/jquery_ui/slick.min.js" type="text/javascript"></script>
		<script src="js/com/common.js" type="text/javascript"></script>
		<script src="js/main/main.js" type="text/javascript"></script>
		<title>타이틀</title>

	
		<script type="text/javascript">

			$(function(){
             /*스크롤바*/
	            $(window).on("load",function(){
	                    $("#content-l").mCustomScrollbar({
	                            axis:"x",
	                            advanced:{autoExpandHorizontalScroll:true},
	                            theme:"light-thick"
	                        });
	                    $(".content-ltk").mCustomScrollbar({theme:"light-thick"});
	                });
	            });

            	



		</script>
	</head>
	<body>
		<!-- #wrap -->
		<div id="wrap">
			<!-- #skipNav -->
			<div id="skipNav">
				<a href="#contentWrap">본문 바로가기</a>
				<a href="#header">글로벌 네비게이션 바로가기</a>
			</div>
			<!-- // #skipNav -->
			<!-- .header_wrap -->
			<div class="header_wrap">
				<!-- #header -->
				<div id="header">
					<h1 class="logo"><a href="index.html"><img src="images/com/logo_pc.jpg" alt="로고" /></a></h1>
					
					<!-- .gnb_wrap -->
					<div class="gnb_wrap">
						<h2 id="gnbAnchor">글로벌 네비게이션 영역</h2>
						<p class="ham_btn"><a href="javascript:void(0);" title="네비게이션 열기"></a></p>
						<!-- #gnb -->
						<div id="gnb">
							<ul class="gnb_1depth">
								<li><h3><a href="">Web</a></h3></li>
								<li><h3><a href="">Desing</a></h3></li>
								<li><h3><a href="">Marketing</a></h3></li>
							</ul>
						</div>
						<!-- // #gnb -->
					</div>
					<!-- // .gnb_wrap -->
					<!-- .gnb_etc -->
					<div class="gnb_etc">
						<li><h3><a href="">About me</a></h3></li>
					</div>
					<!-- // .gnb_etc -->
				</div>
				<!-- // #header -->
				
				
			</div>
			<!-- // .header_wrap -->
		
			
			<!-- #contentWrap -->
	
			<div id="contentWrap" class="main">
				<h2 id="contentAnchor">콘텐츠 영역</h2>
				<div id="main_content_01" class="sect">
					<!-- 영상 -->
					<div class="main_slide">
						<div class="main_slide_list">
							<p>Web</p>
							<span>Web Site Creation and Maintenance
								웹 사이트 제작 및 유지보수
							</span>
						</div><!-- Web -->
						<div class="main_slide_list">
							<p>Desing</p>
							<span>
								Planning events and producing various promotional designs such as posters and banners.
								이벤트 기획 및 디자인 포스터, 베너 등 다양한 홍보용 디자인물 제작
							</span>
						</div><!-- Desing -->
						<div class="main_slide_list">
							<p>Marketing</p>
							<span>
								Operate the company's SNS and plan advertising materials, prepare press releases, prepare and operate events, and operate supporters
								자사 SNS 운영 및 광고물 기획, 보도자료 작성, 행사 준비 및 운영, 서포터즈 운영
							</span>
						</div><!-- Marketing -->
					</div>
					<!-- main_slide -->
					<div class="scroll">
		            	<span>
		                    스크롤
		                </span>
			        </div>
			        <!-- scroll -->
				</div>
				<!-- main_content_01 -->
				<div id="main_content_02" class="sect main_content_02 about_box">
					<ul class="about_box_list">
						<li class="on"><a href="">About Me</a></li><!-- 학력/경력 -->
						<li><a href="">Skill</a></li><!-- 자격증및 프로그램운영 -->
						<li><a href="">Project List</a></li><!-- 프로젝트리스트 년도별  리스트를 텍스트로 마지막엔 프로젝트 자세히보기로 이동 가능하게 -->
					</ul>
					<div class="about_box_con">
						<div>
							<p>About Me</p>
						</div>
						<div>
							<p>Education</p>
							<ul>
								<li>
									<span class="year">2012 - 2016</span>
									<p>호서대학교</p>
									<span>경영학과</span>
								</li>
								<li>
									<span class="year">2018.02.20 - 2018.07.31</span>
									<p>웹퍼블리셔(디지털 앱, 웹디자인) 양성과정</p>
									<span></span>
								</li>
							</ul>
						</div>
						<div>
							<p>Work Experience</p>
							<ul>
								<li>
									<span class="year">2016.01 - 2017.11</span>
									<p>(주)무궁</p>
									<span>
										<em><a href="http://scalatium.com" target="blank">스칼라티움</a></em>
										<em><a href="http://cruise378.com" target="blank">크루즈378</a></em>
										<em><a href="http://nybridal.co.kr" target="blank">NY브라이덜</a></em>
										<em><a href="http://nybridal.co.kr" target="blank">헤리티크뉴욕</a></em>
										<br />
										온라인마케팅본부
									</span>
								</li>
								<li>
									<span class="year">2018.09.01 - </span>
									<p><a href="http://www.osangtech.co.kr/index.jsp">오상테크놀로지</a></p>
									<span>UI개발팀</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<!-- main_content_02 -->
				<div id="main_content_03" class="sect main_content_03 about_box">
					<!-- about_box_con -->
					<div class="about_box_con">
						<div>
							<p>Project List</p>
							<div>
								<p>2019</p>
								<span></span>
								<ul>
									<li></li>
									<li>고트럭몰</li>
									<li>진료협력센터</li>
									<li>중앙의료원</li>
								</ul>
							</div>
							<div>
								<p>2018</p>
								<span></span>
								<ul>
									<li>빅데이터</li>
									<li>한국임업진흥원메인페이지리뉴얼</li>
									<li></li>
								</ul>
							</div>
							<div>
								<p>2017</p>
								<span></span>
								<ul>
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
							<div>
								<p>2016</p>
								<span></span>
								<ul>
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
							<div><a href="">Project Details</a></div>
						</div>
					</div>
					<!-- about_box_con -->
				</div>
			</div>
			<!-- // #contentWrap -->

			<!-- #footer -->
			<div id="footer" class="">
				<div></div>
				
			</div>
			<!-- // #footer -->

		</div>
		<!-- // #wrap -->
		<!-- <a class="top_button_wrap" href="#" title="최상단으로"><img src="images/btn/top_button.jpg" alt="top_button"></a> -->
	</body>
</html>