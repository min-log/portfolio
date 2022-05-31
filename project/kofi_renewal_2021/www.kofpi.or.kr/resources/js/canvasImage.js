  window.requestAnimFrame = (function(callback) {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
  
	function(callback) {
	  window.setTimeout(callback, 1000 );
	};
  })();

//콤마찍기
function commaSplit(n) {// 콤마 나누는 부분
      var reg = /(^[+-]?\d+)(\d{3})/;   // 정규식
  n += '';                          // 숫자를 문자열로 변환

  while (reg.test(n))
    n = n.replace(reg, '$1' + ',' + '$2');

  return n;
}



//최대값 데이터 key가 obj로 받는다.
function getMax(data, obj){
	var max=0;
	for( var i =0; i< data.length; i++ ){
		for(key in data[i]){
			if(key == obj){
				if ( Number(max) < Number(data[i][key]) ){
					max = data[i][key];
				}
			}
			
		}
	}

	return max;
}	
function draw0(startTime){
	
	var canvas = document.getElementById("CanvasExam0"); // canvas DOM 객체 생성
	var context = canvas.getContext("2d"); // 컨텍스트 생성


	
	var time = (new Date()).getTime() - startTime;
	var linearSpeed = 1000;
	// pixels / second 
	var newY = linearSpeed * time / 3000;
    newY = newY > 100 ? 100 : newY;

	context.clearRect(0, 0, canvas.width, canvas.height);//지우기

	// 작업시작
	var RectHeight = [ { "name" : "1999", "grade" : "16166" },
					{ "name" : "2001", "grade" : "5596" },
					{ "name" : "2003", "grade" : "15563" },
					{ "name" : "2004", "grade" : "15345" },
					{ "name" : "2006", "grade" : "27382" },
					{ "name" : "2008", "grade" : "7975" },
					{ "name" : "2010", "grade" : "5905" }
					
					];//데이터


	var maxData = Number(getMax(RectHeight,'grade'));
	var onePoint = 75/maxData;
	var canvasWidth = document.getElementById("CanvasExam0").offsetWidth;
	var barWidth = canvasWidth / (RectHeight.length *2 + 1) ;

 var image = new Image();

	image.src = "/resources/images/info/treeImg3.gif";	
	for(i=0; i<RectHeight.length; i++){
	
		context.font = " bold 12px 나눔고딕";
		context.fillStyle = "rgb(130, 168, 59)";

		context.fillText(RectHeight[i].name, barWidth + barWidth*i*2+25, 215);//텍스트위치
		context.fillText( commaSplit(RectHeight[i].grade) , barWidth + barWidth*i*2+20, 10 + 100 - RectHeight[i].grade *onePoint * (newY/100)+50);//수치위치
		context.fillStyle = "rgb(91, 77, 60)";

		context.drawImage(
			image
			, barWidth + barWidth*i*2+26
			, 100+100 - RectHeight[i].grade *onePoint * (newY/100) - image.height
			, 22
			, 38
			); //이미지
		
		context.fillRect(
			barWidth + barWidth*i*2+20,							//X좌표
			100 + 100 - RectHeight[i].grade * onePoint * (newY/100),			//Y
			barWidth+15,											//가로
			RectHeight[i].grade * onePoint * (newY/100)						//세로
		);
	}

	if(newY >= 100) return;	


	// request new frame
	requestAnimFrame(function() {
	  draw0(startTime);
	});

}
function draw(startTime){
	
	var canvas = document.getElementById("CanvasExam"); // canvas DOM 객체 생성
	var context = canvas.getContext("2d"); // 컨텍스트 생성


	
	var time = (new Date()).getTime() - startTime;
	var linearSpeed = 1000;
	// pixels / second 
	var newY = linearSpeed * time / 3000;
    newY = newY > 100 ? 100 : newY;

	context.clearRect(0, 0, canvas.width, canvas.height);//지우기

	// 작업시작
	var RectHeight = [ { "name" : "5년", "grade" : "1171" },
					{ "name" : "10년", "grade" : "307.5" },
					{ "name" : "15년", "grade" : "829.8" },
					{ "name" : "20년", "grade" : "1323" },
					{ "name" : "25년", "grade" : "1803" },
					{ "name" : "30년", "grade" : "2262" }
					
					];//데이터
	var barColor = [ "rgb(91, 77, 60)"]//선색
	var fontColor = ["rgb(91, 77, 60)"]//글색
	var maxData = Number(getMax(RectHeight,'grade'));
	var onePoint = 100/maxData;
	var canvasWidth = document.getElementById("CanvasExam").offsetWidth;
	var barWidth = canvasWidth / (RectHeight.length *2 + 1) ;

 var image = new Image();

	image.src = "/resources/images/info/treeImg2.png";	
	for(i=0; i<RectHeight.length; i++){
	
		context.font = " bold 12px 나눔고딕";
		context.fillStyle = fontColor[i];

		context.fillText(RectHeight[i].name, barWidth + barWidth*i*2, 215);//텍스트위치
		context.fillText( commaSplit(RectHeight[i].grade) , barWidth + barWidth*i*2, 10 + 100 - RectHeight[i].grade *onePoint * (newY/100)+50);//수치위치
		context.fillStyle = barColor[i];

		context.drawImage(
			image
			, barWidth + barWidth*i*2+3
			, 100+100 - RectHeight[i].grade *onePoint * (newY/100) - image.height
			, 16
			, 20
			); //이미지
		
		context.fillRect(
			barWidth + barWidth*i*2,							//X좌표
			100 + 100 - RectHeight[i].grade * onePoint * (newY/100),			//Y
			barWidth,											//가로
			RectHeight[i].grade * onePoint * (newY/100)						//세로
		);
	}

	if(newY >= 100) return;	


	// request new frame
	requestAnimFrame(function() {
	  draw(startTime);
	});

}


//두번째
function draw2(startTime){
	
	var canvas = document.getElementById("CanvasExam2"); // canvas DOM 객체 생성
	var context = canvas.getContext("2d"); // 컨텍스트 생성


	
	var time = (new Date()).getTime() - startTime;
	var linearSpeed = 1000;
	// pixels / second 
	var newY = linearSpeed * time / 3000;
    newY = newY > 100 ? 100 : newY;

	context.clearRect(0, 0, canvas.width, canvas.height);//지우기

	// 작업시작
	var RectHeight = [ { "name" : "조립사업 ha당 수익", "grade" : "802.7" },
					{ "name" : "17.5만 ha 조립시", "grade" : "140500" },

					
					];//데이터

    
	var maxData = Number(getMax(RectHeight,'grade'));
	var onePoint = 75/maxData;
	var canvasWidth = document.getElementById("CanvasExam2").offsetWidth;
	var barWidth = canvasWidth / (RectHeight.length *2 + 1) ;
	var image = new Image();


	

	image.src = "/resources/images/info/dollar.png";	
	for(i=0; i<RectHeight.length; i++){

		context.font = " bold 11px 나눔고딕";
		context.fillStyle = "rgb(74, 63, 49)" ;
		context.fillText(RectHeight[i].name, barWidth + barWidth*i*2, 225);//텍스트위치
		context.fillStyle = "rgb(54, 153, 106)";
		
		if(RectHeight[i].grade == "802.7"){
			var h = 20000;
			context.fillStyle = "rgb(74, 63, 49)" ;
			context.fillText(commaSplit(RectHeight[i].grade), barWidth + barWidth*i*2+30, 10 + 100 - h *onePoint * (newY/100)+70);//수치위치
			context.fillStyle = "rgb(54, 153, 106)";

		
			context.drawImage(
				image
				, barWidth + barWidth*i*2+20
				, 100+100 - h *onePoint * (newY/100) - image.height
				, 45
				, 13
				); //이미지
			
			context.fillRect(
				barWidth + barWidth*i*2+20,					//X좌표
				100 + 100 - h * onePoint * (newY/100),			//Y
				45,											//가로
				h * onePoint * (newY/100)						//세로
			);
		}else{

			context.fillStyle = "rgb(74, 63, 49)" ;
			context.fillText(commaSplit(RectHeight[i].grade), barWidth + barWidth*i*2+25, 10 + 100 - RectHeight[i].grade *onePoint * (newY/100)+70);//수치위치
			context.fillStyle = "rgb(54, 153, 106)";
			context.drawImage(
				image
				, barWidth + barWidth*i*2+20
				, 100+100 - RectHeight[i].grade *onePoint * (newY/100) - image.height
				, 45
				, 13
				); //이미지
			
			context.fillRect(
				barWidth + barWidth*i*2+20,							//X좌표
				100 + 100 - RectHeight[i].grade * onePoint * (newY/100),	//Y
				45,													//가로
				RectHeight[i].grade * onePoint * (newY/100)				//세로
			);
		}
	}

	if(newY >= 100) return;	


	// request new frame
	requestAnimFrame(function() {
	  draw2(startTime);
	});

}

//세번째
function draw3(startTime){
	
	var canvas = document.getElementById("CanvasExam3"); // canvas DOM 객체 생성
	var context = canvas.getContext("2d"); // 컨텍스트 생성


	
	var time = (new Date()).getTime() - startTime;
	var linearSpeed = 1000;
	// pixels / second 
	var newY = linearSpeed * time / 3000;
    newY = newY > 100 ? 100 : newY;

	context.clearRect(0, 0, canvas.width, canvas.height);//지우기

	// 작업시작
	var RectHeight = [ { "name" : "조립사업 ha당 수익", "grade" : "6155.4" },
					{ "name" : "17.5만 ha 조립시", "grade" : "1077200" },

					
					];//데이터
	var barColor = [ 
					"rgb(54, 153, 106)"
				]//선색
	var maxData = Number(getMax(RectHeight,'grade'));
	var onePoint = 75/maxData;
	var canvasWidth = document.getElementById("CanvasExam3").offsetWidth;
	var barWidth = canvasWidth / (RectHeight.length *2 + 1) ;

 var image = new Image();

	image.src = "/resources/images/info/dollar.png";	
	for(i=0; i<RectHeight.length; i++){

		context.font = " bold 11px 나눔고딕";
		context.fillStyle = "rgb(74, 63, 49)" ;
		context.fillText(RectHeight[i].name, barWidth + barWidth*i*2, 225);//텍스트위치
		context.fillStyle = "rgb(54, 153, 106)";

		if(RectHeight[i].grade == "6155.4"){
			
			var h = 238000;
			context.fillStyle = "rgb(74, 63, 49)" ;
			context.fillText(commaSplit(RectHeight[i].grade), barWidth + barWidth*i*2+30, 10 + 100 - h *onePoint * (newY/100)+70);//수치위치
			context.fillStyle = "rgb(54, 153, 106)";

			context.drawImage(
				image
				, barWidth + barWidth*i*2+20
				, 100+100 - h *onePoint * (newY/100) - image.height
				, 45
				, 13
				); //이미지
			
			context.fillRect(
				barWidth + barWidth*i*2+20,							//X좌표
				100 + 100 - h * onePoint * (newY/100),			//Y
				45,											//가로
				h * onePoint * (newY/100)						//세로
			);
		}else{
			context.fillStyle = "rgb(74, 63, 49)" ;
			context.fillText(commaSplit(RectHeight[i].grade), barWidth + barWidth*i*2+25, 10 + 100 - RectHeight[i].grade *onePoint * (newY/100)+70);//수치위치
			context.fillStyle = "rgb(54, 153, 106)";
			context.drawImage(
				image
				, barWidth + barWidth*i*2+20
				, 100+100 - RectHeight[i].grade *onePoint * (newY/100) - image.height
				, 45
				, 13
				); //이미지
			
			context.fillRect(
				barWidth + barWidth*i*2+20,							//X좌표
				100 + 100 - RectHeight[i].grade * onePoint * (newY/100),	//Y
				45,													//가로
				RectHeight[i].grade * onePoint * (newY/100)				//세로
			);
		}
	}

	if(newY >= 100) return;	


	// request new frame
	requestAnimFrame(function() {
	  draw3(startTime);
	});

} 

function draw4(startTime){
	
	var canvas = document.getElementById("CanvasExam4"); // canvas DOM 객체 생성
	var context = canvas.getContext("2d"); // 컨텍스트 생성


	
	var time = (new Date()).getTime() - startTime;
	var linearSpeed = 1000;
	// pixels / second 
	var newY = linearSpeed * time / 3000;
    newY = newY > 100 ? 100 : newY;

	context.clearRect(0, 0, canvas.width, canvas.height);//지우기

	// 작업시작
	var RectHeight = [ { "name" : "국고", "grade" : "20" },
					{ "name" : "지방비", "grade" : "20" },
					{ "name" : "융자", "grade" : "20" },
					{ "name" : "자부담", "grade" : "40" },
					
					];//데이터
	var barColor = [ "rgb(44, 75, 95)","rgb(124, 177, 43)","rgb(240, 85, 99)","rgb(166, 93, 3)"]//선색
	var fontColor = ["rgb(33, 33, 33)"]//글색
	var maxData = Number(getMax(RectHeight,'grade'));
	var onePoint = 100/maxData;
	var canvasWidth = document.getElementById("CanvasExam4").offsetWidth;
	var barWidth = canvasWidth / (RectHeight.length *2 + 1) ;

 var image = new Image();

	for(i=0; i<RectHeight.length; i++){
	
		context.font = " bold 12px 나눔고딕";
		context.fillStyle = barColor[i];
		context.fillStyle = fontColor[i];

		context.fillText(RectHeight[i].name, barWidth + barWidth*i*1.5, 215);//텍스트위치
		context.fillText( commaSplit(RectHeight[i].grade)+"%" , barWidth + barWidth*i*1.5, 10 + 100 - RectHeight[i].grade *onePoint * (newY/100)+85);//수치위치

		
		context.fillRect(
			barWidth + barWidth*i*1.5,							//X좌표
			100 + 100 - RectHeight[i].grade * onePoint * (newY/100),			//Y
			barWidth,											//가로
			RectHeight[i].grade * onePoint * (newY/100)						//세로
		);
	}

	if(newY >= 100) return;	


	// request new frame
	requestAnimFrame(function() {
	  draw4(startTime);
	});

}

function draw5(startTime){
	
	var canvas = document.getElementById("CanvasExam5"); // canvas DOM 객체 생성
	var context = canvas.getContext("2d"); // 컨텍스트 생성


	
	var time = (new Date()).getTime() - startTime;
	var linearSpeed = 1000;
	// pixels / second 
	var newY = linearSpeed * time / 3000;
    newY = newY > 100 ? 100 : newY;

	context.clearRect(0, 0, canvas.width, canvas.height);//지우기

	// 작업시작
	var RectHeight = [ { "name" : "국고", "grade" : "20" },
					{ "name" : "지방비", "grade" : "20" },
					{ "name" : "융자", "grade" : "20" },
					{ "name" : "자부담", "grade" : "40" },
					
					];//데이터
	var barColor = [ "rgb(44, 75, 95)","rgb(124, 177, 43)","rgb(240, 85, 99)","rgb(166, 93, 3)"]//선색
	var fontColor = ["rgb(33, 33, 33)"]//글색
	var maxData = Number(getMax(RectHeight,'grade'));
	var onePoint = 100/maxData;
	var canvasWidth = document.getElementById("CanvasExam5").offsetWidth;
	var barWidth = canvasWidth / (RectHeight.length *2 + 1) ;

 var image = new Image();

	for(i=0; i<RectHeight.length; i++){
	
		context.font = " bold 12px 나눔고딕";
		context.fillStyle = barColor[i];
		context.fillStyle = fontColor[i];

		context.fillText(RectHeight[i].name, barWidth + barWidth*i*1.5, 215);//텍스트위치
		context.fillText( commaSplit(RectHeight[i].grade)+"%" , barWidth + barWidth*i*1.5, 10 + 100 - RectHeight[i].grade *onePoint * (newY/100)+85);//수치위치

		
		context.fillRect(
			barWidth + barWidth*i*1.5,							//X좌표
			100 + 100 - RectHeight[i].grade * onePoint * (newY/100),			//Y
			barWidth,											//가로
			RectHeight[i].grade * onePoint * (newY/100)						//세로
		);
	}

	if(newY >= 100) return;	


	// request new frame
	requestAnimFrame(function() {
	  draw5(startTime);
	});

}


$(window).scroll(function () {
   var tlocation = $(document).scrollTop()
   console.log(tlocation)

   if ($(this).scrollTop() >= 2103 && $(this).scrollTop() <= 2300) {
      var startTime = (new Date()).getTime();
      draw(startTime);
      draw2(startTime);
      draw3(startTime); 
   } 
});
$(window).scroll(function () {
   if ($(this).scrollTop() > 550 && $(this).scrollTop() < 700 ) {
      var startTime = (new Date()).getTime();
      draw0(startTime);
   }
});  



/*setTimeout(function() {

	var startTime = (new Date()).getTime();
	draw0(startTime);
	draw(startTime);
	draw2(startTime); 
	draw3(startTime);
	draw4(startTime); 
	draw5(startTime);	  

}, 1000);
*/
