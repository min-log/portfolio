
/*========================================================
header
========================================================*/

function btnMenu(){
	console.log('full')
	if($('.btn_menu').hasClass('active') == false){
		$('.btn_menu').addClass('active');
		$('.menu_wrap').addClass('active');
	}else{
		$('.btn_menu').removeClass('active');
		$('.menu_wrap').removeClass('active');
	}
	
}


// textarea
function textBoxContLimit(event){
	let textCountLimit = event;
	$('.textBox').keyup(function() {
		// 텍스트영역의 길이를 체크
		let textLength = $(this).val().length;
		// 입력된 텍스트 길이를 #textCount 에 업데이트 해줌
		$('#textCount').text(textLength);

		// 제한된 길이보다 입력된 길이가 큰 경우 제한 길이만큼만 자르고 텍스트영역에 넣음
		if (textLength > textCountLimit) {
			$(this).val($(this).val().substr(0, textCountLimit));
		}
	});
}


/*========================================================
footer
========================================================*/




/*========================================================
popup
========================================================*/

