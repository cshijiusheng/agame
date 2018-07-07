$(function(){
	$(".cle1").click(function(){
		var _li=$(this).index();
	$(".cle1").children().removeClass("xing1").addClass("xin1");
	$(".cle2").children().removeClass().addClass("xing2");
	$(".cle3").children().removeClass().addClass("xing3");
	})	
	$(".cle2").click(function(){
		var _li=$(this).index();
	$(".cle2").children().removeClass("xing2").addClass("xin2");
	$(".cle1").children().removeClass().addClass("xing1");
	$(".cle3").children().removeClass().addClass("xing3");
	})	
	$(".cle3").click(function(){
		var _li=$(this).index();
	$(".cle3").children().removeClass("xing3").addClass("xin3");
	$(".cle2").children().removeClass().addClass("xing2");
	$(".cle1").children().removeClass().addClass("xing1");
	})	
});

var num=0;
	$(".cvb1").focus(function(){
		$(".wrapi1").css("display","block").html("请输入用户名");
	})
	$(".cvb1").blur(function(){
		$(".wrapi1").css("display","none");
	});
	$(".cvb2").focus(function(){
		$(".wrapi2").css("display","block").html("除空格，逗号，单双引号，长度为6-20位");
	})
	$(".cvb2").blur(function(){
		$(".wrapi2").css("display","none");
	});
	$(".cvb3").focus(function(){
		$(".wrapi3").css("display","block").html("除空格，逗号，单双引号，长度为6-20位");
	})
	$(".cvb3").blur(function(){
		$(".wrapi3").css("display","none");
	});
	$("#card").focus(function(){
		$(".wrapi4").css("display","block").html("请输入身份证号");
	})
	$("#card").blur(function(){
		$(".wrapi4").css("display","none");
	});

	$(".cvb1").blur(function(){
		var uname=$("#uname").val();	
		if(uname==""){
			$(".wrapi1").css("display","block").html("呦！还没有输入用户名呢");	
		}else{
			$.ajax({
				type:"GET",
				url:"data/yanzheng/zhuceyanzheng.php",
				data:{uname},
				success:function(data){
						if(data==true){
							$(".wrapi1").css("display","block").html("用户名可用");
							 num+=1;
						}else{
							$(".wrapi1").css("display","block").html("用户名不可用");	
						}
				}
			})
		}

	$(".cvb2").blur(function(){
			var upwd=$("#upwd").val();
			var reg=/^[a-zA-Z0-9]{6,20}$/;
			if(upwd==""){
				$(".wrapi2").css("display","block").html("呦！还没有输入密码呢");	
			}else if(!reg.test(upwd)){
				$(".wrapi2").css("display","block").html("密码格式不正确");	
			}else{
				$(".wrapi2").css("display","block").html("通过");
				 num+=1;

			}	
			
	})
	$(".cvb3").blur(function(){
			var upwd=$("#upwd").val();
			var upwd1=$("#upwd1").val();
			if(upwd==upwd1&&upwd1!==""){
				$(".wrapi3").css("display","block").html("通过");
				 num+=1;
			}else{
				$(".wrapi3").css("display","block").html("两次密码不一致");
			}
	})
		
	$("#card").blur(function(){
		var card=$("#card").val();
		var reg=/(^d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		if(card==""){
			$(".wrapi4").css("display","block").html("呦！还没有输入身份证号呢");	
		}else if(!reg.test(card)){
			$(".wrapi4").css("display","block").html("身份证号格式不正确");	
		}else{
			$(".wrapi4").css("display","block").html("通过");
			 num+=1;
		}	
	})
$("#wrap4").prop("checked",false);
	$("#wrap3").prop("disabled",true);
	$("#wrap4").click(function(){
		if($(this).is(":checked")){
			$("#wrap3").prop("disabled",false).css("cursor","pointer");	
		}else{
			$("#wrap3").prop("disabled","disabled").css("cursor","default");
		}
	});
$("#wrap3").click(function(){
	if(num==4){
		var gamename=$("#ggii").val();   
		var uname=$("#uname").val();
		var upwd=$("#upwd").val();
		var zname=$("#zname").val();
		var card=$("#card").val();
		$.ajax({
				type:"POST",
				url:"data/yanzheng/tijiao.php",
				data:{gamename,uname,upwd,zname,card},
				success:function(data){		
					alert(data);					
				}
			})
	}else{
		alert("注册信息有误");
	}
 });
		 
})		 

