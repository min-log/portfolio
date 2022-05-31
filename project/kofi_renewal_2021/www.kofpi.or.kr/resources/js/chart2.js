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
   if ($(this).scrollTop() > 1500 && $(this).scrollTop() < 1700 ) {
      var startTime = (new Date()).getTime();
      draw4(startTime);
      draw5(startTime);
   }
});     



/*setTimeout(function() {
	var startTime = (new Date()).getTime();
	draw4(startTime);
	draw5(startTime);
}, 1000);

*/