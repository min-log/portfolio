var mFdmsFireWarningWidget = {
    view : {
        elementId : null
    },
    staticParam : {
        systemPath: "https://map.forest.go.kr/portalo"
    }
};

var fireWarningWidgetCnt = 0;
var fireWidgetInteval = null;
var fireWarningWidgetUrl = mFdmsFireWarningWidget.staticParam.systemPath+"/FireWarning.do";
var moveBannerValue = false;
var fireWarningWidgetTempDate = null;
var fireBannerPause = false;
function fn_fireWarningWidgetData(){
	if(moveBannerValue){
		moveBannerValue = false;
		return ;
	}

	if(fireBannerPause){
		return;
	}

	    $.ajax({
	        url: fireWarningWidgetUrl,
	        dataType: "jsonp",
	        error: function (xhr, status, error) {
	            alert(xhr);
	            alert(error);
	        },
	        success: function (data) {
	        	if(data.list.length > 0){
	        		if(fireWarningWidgetCnt >= data.list.length){
	        			fireWarningWidgetCnt = 0;
	        		}
	        		fireWarningWidgetTempDate = data.list;
					showFireWarningWidget(data.list);
				}else{
					showFireWarningWidget(null);
					$("#fireWarningWidgetDiv").empty();
				}

	        }
	    });
}
function fn_FdmsFireWarningWidgetStart(interval) {
	var refreshInterval = 3000;
	if(typeof(interval) != "undefined"){
		refreshInterval = interval * 1000;
	}
	fn_fireWarningWidgetData();
    fireWidgetInteval = setInterval(fn_fireWarningWidgetData,(refreshInterval));
}
function showFireWarningWidget(fireWarningWidgetData) {

    var div = $("#" + mFdmsFireWarningWidget.view.elementId);
    div.empty();

	if(fireWarningWidgetData == null){
		return ;
	}
	var lgdngNm = fireWarningWidgetData[fireWarningWidgetCnt].lgdngCd;
	if(lgdngNm == "제주특별자치도"){
		lgdngNm = "제주";
	}else if(lgdngNm == "세종특별자치시"){
		lgdngNm = "세종";
	}

	lgdngNm = lgdngNm.replace("특별시","").replace("광역시","");


	var date= fn_fireWarningDate(fireWarningWidgetData[fireWarningWidgetCnt].frfrWrnngIssuDtm);

	var fcClassName = "";
	var weatherClassName = "";
	var grade = fireWarningWidgetData[fireWarningWidgetCnt].frfrWrnngStepCd;
	switch (grade) {
	case "관심":
		fcClassName = "fcgre";
		weatherClassName ="ffgrade1";
		break;
	case "주의":
		fcClassName = "fcyel";
		weatherClassName ="ffgrade2";
		break;
	case "경계":
		fcClassName = "fcorg";
		weatherClassName ="ffgrade3";
		break;
	case "심각":
		fcClassName = "fcred";
		weatherClassName ="ffgrade4";
		break;
	}

	div.empty();
	var innerDiv = "";
	var clickPrev = "fn_moveBanner('prev')";
	var clickNext = "fn_moveBanner('next')";
	innerDiv += '<div class="frfrWarningDiv">';
	innerDiv += '<div class="bannerFFissue">';
	innerDiv += '<div class="title"><span class="fcred2">산불경보</span>발령</div>';
	innerDiv += '<div class="txt">';
	innerDiv += '<p>산불경보 : <span class="'+fcClassName+' tdu">'+grade+'</span> 단계   ('+lgdngNm+')</p>';
	innerDiv += '<p>발령일시 : </br><span class="fcblc">'+date[0]+','+date[1]+'</span></p></div>';
	innerDiv += '<div class="frfrControll">';
	innerDiv += '<div class="frfrBackDiv" onclick="'+clickPrev+';"></div>';
	innerDiv += '<div id="PauseAndPlay" class="frfrPauseDiv" onclick="fn_PauseAndPlayBanner();"></div>';
	innerDiv += '<div class="frfrForwardDiv" onclick="'+clickNext+';"></div>';
	innerDiv += '<a>'+(fireWarningWidgetCnt+1)+"/"+fireWarningWidgetData.length+'</a>';
	innerDiv += '</div>';
	innerDiv += '<div class="'+weatherClassName+'" >산불경보수준:경계</div>';
	innerDiv += '</div>';
	innerDiv += '</div>';

	div.append(innerDiv);
	fireWarningWidgetCnt += 1;

	if(fireWarningWidgetData.length == fireWarningWidgetCnt){
		fireWarningWidgetCnt = 0;
	}

}

//날짜 및 요일 , 시간을 나누어서 리턴
function fn_fireWarningDate(originDate){
	var date =  originDate.split(" ");
	var week = ['일', '월', '화', '수', '목', '금', '토'];
	var dayOfWeek = week[new Date(date[0]).getDay()];
	var resultDate = [date[0].substr(5).replace("-",".") + '(' +dayOfWeek +')',date[1]];
	return resultDate;
}

//배너 앞뒤로 이동
function fn_moveBanner(state){
	moveBannerValue = true;
	fireBannerPause = false;
	if(state == "prev"){
		if(fireWarningWidgetCnt >= 2){//일반적인 경우
			fireWarningWidgetCnt -= 2;
		}else if(fireWarningWidgetCnt == 0){//리스트의 끝일 경우
			fireWarningWidgetCnt = fireWarningWidgetTempDate.length - 2;
		}else if(fireWarningWidgetCnt == 1){//리스트의 시작일 경우
			fireWarningWidgetCnt = fireWarningWidgetTempDate.length - 1;
		}
		showFireWarningWidget(fireWarningWidgetTempDate);
	}else if(state == "next"){
		if(fireWarningWidgetTempDate.length == fireWarningWidgetCnt){
			fireWarningWidgetCnt = 0;
		}
		showFireWarningWidget(fireWarningWidgetTempDate);
	}
}

function fn_PauseAndPlayBanner(){
	var className = $("#PauseAndPlay")[0].className;
	if("frfrPauseDiv" == className){
		fireBannerPause = true;
		$("#PauseAndPlay").toggleClass("frfrPauseDiv frfrPlayDiv");
	}else{
		fireBannerPause = false;
		$("#PauseAndPlay").toggleClass("frfrPlayDiv frfrPauseDiv");
	}
}
