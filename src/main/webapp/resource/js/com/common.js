class Scrooth {
	constructor({element = window, strength=10, acceleration = 1.2,deceleration = 0.975}={}) {
		this.element = element;
		this.distance = strength;
		this.acceleration = acceleration;
		this.deceleration = deceleration;
		this.running = false;

		this.element.addEventListener('wheel', this.scrollHandler.bind(this), {passive: false});
		this.element.addEventListener('mousewheel', this.scrollHandler.bind(this), {passive: false});
		this.scroll = this.scroll.bind(this);
	}

	scrollHandler(e) {
		e.preventDefault();

		if (!this.running) {
			this.top = this.element.pageYOffset || this.element.scrollTop || 0;
			this.running = true;
			this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
			this.isDistanceAsc = true;
			this.scroll();
		} else {
			this.isDistanceAsc = false;
			this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
		}
	}

	scroll() {
		if (this.running) {
			this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
			Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false ? this.running = false : 1;
			Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;

			this.top += this.currentDistance;
			this.element.scrollTo(0, this.top);

			requestAnimationFrame(this.scroll);
		}
	}
}

const scroll = new Scrooth({
	element: window,
	strength: 25,
	acceleration: 1,
	deceleration: 0.930,
});
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

