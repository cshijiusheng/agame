$(function(){
	$(".zhe_2").click(function(){
		$(".zhe").hide();
	})
});
$(function(){
	var rig=$('.cbl').css('right');
	$(".cbe1").click(function(){
		if(rig==="0px"){
		$(".cbl").animate({
			right:'-252px'
		},200)
			setTimeout(function(){$(".cbe1").html("打开<");},200)
			var c=$(".cbl").css("right");
		if(c==="-252px"){
			$(".cbl").animate({
			right:'0px'
		},200)
			setTimeout(function(){$(".cbe1").html("收起>");},200)
			
		}
		}
	})
});
