$(".log_p4>input").click(function(){
		$(".logdiv").show();
		$(".loga").show();
	})
$("#logb1").click(function(){
	var upwd=$("#upwd").val();
	var uname=$("#uname").val();
	if(uname!=""||upwd!=""){
			$.ajax({
				type:"POST",
				url:"data/yanzheng/denglu.php",
				data:{uname,upwd},
				success:function(data){
					if(data==="登录成功!"){
					location.href="index3.html";
					}else{
					alert(data);
					}
				}
			})
		}else{
		alert("用户名或密码不能为空！");
	}	
})
