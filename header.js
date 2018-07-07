$(function(){
	$("#header").load("header.html",function(){	
		var link=document.createElement("link");
		link.rel="stylesheet";
		link.href="css/header.css";
		document.head.appendChild(link);		
    })   	   
  
	$.ajax({
		type:"get",
		url:"data/yanzheng/islogin.php",
		dataType:"json",
		success:function(data){
			if(data.ok==0){
				
			}else{
				$("#loginList").hide();
				var rrr=data.rootname;
				var html="";
				html+=`欢迎光临:${rrr} <button id="btny"  style="background:#000;color:#fff;cursor:pointer;">退出</button>`;
				$("#login").html(html);			
			}
				$("#btny").click(function(){
					$.ajax({
						type:"get",
						url:"data/yanzheng/signout.php",
						success:function(data){	
							location.reload(true);

						}
					})

				})
		}  

	});


});
