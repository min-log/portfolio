$(document).ready(function(){
	//GNB
	

	$(".menuall").bind("mouseenter	focusin", function(){
		$(".submenu").removeClass("show");
		$(".bg_smenu").hide();
	});
	$(".menuall a").click(function(){
		if ($(this).is(".allopen") == true) {
			$(this).removeClass("allopen");
			$(".menuall_list").hide();
			$(".menuall a").focus();
			$(".menuall a").children("img").attr("src",($(".menuall a").children("img")).attr("src").replace("_on.gif","_off.gif"));
			return false;
		}  else {
			$(this).addClass("allopen");
			$(".menuall_list").show();
			$(this).children("img").attr("src",($(this).children("img")).attr("src").replace("_off.gif","_on.gif"));
			return false;
		};
	});
	$(".close001 a").click(function(){
		$(".allopen").removeClass("allopen");
		$(".menuall_list").hide();
		$(".menuall a").focus();
		$(".menuall a").children("img").attr("src",($(".menuall a").children("img")).attr("src").replace("_on.gif","_off.gif"));
	});


	//LNB
	$(".lnb .depth2 .tit").bind("mouseenter focusin",function(){
		$(".lnb .depth2 li").removeClass("on");
		$(".lnb .depth3").hide();
		$(".lnb .ton .depth3").show();
		$(this).parent().addClass("on")
		$(this).next(".depth3").show()
	});

	$(".lnb").mouseleave(function(){
		$(".lnb .depth2 li").removeClass("on");
		$(".lnb .depth3").hide();
		$(".lnb .ton .depth3").show();
	});
})