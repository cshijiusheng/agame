$(function(){
	$("#tail").load("tail.html",function(){	
		var link=document.createElement("link");
		link.rel="stylesheet";
		link.href="css/tail.css";
		document.head.appendChild(link);		
    })   	   
});  
	   
