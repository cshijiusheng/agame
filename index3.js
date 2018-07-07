  /****下拉****/
$(function(){
	$(document).ready(function(){
        $(".main").hover(function(){
            $(this).find("ul").stop(true).slideDown()
        },function(){
            $(this).find("ul").stop(true).slideUp()
        })
    })
});
/*******渐变轮播*******/
$(function(){
	$.ajax({
		type:"get",
		url:"data/carousel_one.php",
		dataType:"json",
		success:function(data){
			html="";
			html+=`<a href="${0}" class="show"><img src="${data[0].pic}"></a>`;
			for( var i=1;i<data.length;i++){
					var {href,pic}=data[i];
					html+=`<a href="${i}"><img src="${pic}"></a>`;	
			}
				 $("#first2").html(html);				
		}
	})
	var	first2=$("#first2");
	first2.onmouseover=function(){
		clearInterval(timer);
		timer=null;
	}
	first2.onmouseout=function(){
		timer=setInterval(task,3000);
	}
	function task(){
		var show=document.getElementsByClassName("show")[0];
		var $number=$(".number");
		show.className="";
		
		if(show.nextElementSibling!=null)
			var next=show.nextElementSibling;	
		else  
			var next=show.parentNode.firstElementChild;
		var text=next.getAttribute("href");
		$number.children(":eq("+text+")").css("background-color","red").siblings().css("background-color","white");
		next.className="show";
	}
	var timer=setInterval(task,3000);
	$(".number").on("click","li",function(){
		var index=$(this).index();
		 clearInterval(timer);
		 $("#first2").children(":eq("+index+")").addClass("show").siblings().removeClass("show");
		 timer=setInterval(task,3000);
		 $(this).css("background-color","red").siblings().css("background-color","white");	
	});
 
});


/****************选项卡1*******************/

$(function(){
	$.ajax({
		type:"get",
		url:"data/whole.php",
		dataType:"json",
		success:function(data){
			html="";
			for(var p1 of data){
			var {href,pic,text,em}=p1
			html+=`
			<a href="${href}">
			<li>
			<span>
				<img src="${pic}">&nbsp;${text}
				<em>${em}</em>
			</span>	
			</li>	
			</a>`;	
			}
				 $(".all1").html(html);
		}
	})
		$.ajax({
		type:"get",
		url:"data/news.php",
		dataType:"json",
		success:function(data){
			html="";
			for(var p2 of data){
			var {href,pic,text,em}=p2
			html+=`
			<a href="${href}">
			<li>
			<span>
				<img src="${pic}">&nbsp;${text}
				<em>${em}</em>
			</span>	
			</li>	
			</a>`;	
			}
				 $(".all2").html(html);
		}
	})
		$.ajax({
		type:"get",
		url:"data/notice.php",
		dataType:"json",
		success:function(data){
			html="";
			for(var p3 of data){
			var {href,pic,text,em}=p3
			html+=`
			<a href="${href}">
			<li>
			<span>
				<img src="${pic}">&nbsp;${text}
				<em>${em}</em>
			</span>	
			</li>	
			</a>`;	
			}
				 $(".all3").html(html);
		}
	})
		$.ajax({
		type:"get",
		url:"data/activity.php",
		dataType:"json",
		success:function(data){
 			html="";
			for(var p4 of data){
			var {href,pic,text,em}=p4
			html+=`
			<a href="${href}">
			<li>
			<span>
				<img src="${pic}">&nbsp;${text}
				<em>${em}</em>
			</span>	
			</li>	
			</a>`;	
			}
				 $(".all4").html(html);
		}
	})

	$().ready(function(){
		$(".cnews1 span b").click(function(){
		//通过 .index()方法获取元素下标，从0开始，赋值给某个变量
			var _index = $(this).index();
		//让内容框的第 _index 个显示出来，其他的被隐藏
			$(".cnew>div").eq(_index).show().siblings().hide();
		//改变选中时候的选项框的样式，移除其他几个选项的样式
		 $(this).addClass("change").siblings().removeClass("change");
		});
		
	});
});



/****************选项卡3*******************/
$(function() {
	$.ajax({
		type:"get",
		url:"data/strategy.php",
		dataType:"json",
		success:function(data){
			html="";
			for(var p5 of data){
			var {href,pic,text,em}=p5
			html+=`
			<a href="${href}">
			<li>
			<span>
				<img src="${pic}">&nbsp;${text}
				<em>${em}</em>
			</span>	
			</li>	
			</a>`;	
			}
				 $(".all5").html(html);
		}
	})
	$.ajax({
		type:"get",
		url:"data/media.php",
		dataType:"json",
		success:function(data){
			html="";
			for(var p6 of data){
			var {href,pic,text,em}=p6
			html+=`
			<a href="${href}">
			<li>
			<span>
				<img src="${pic}">&nbsp;${text}
				<em>${em}</em>
			</span>	
			</li>	
			</a>`;	
			}
				 $(".all6").html(html);
		}
	})
	$().ready(function(){
		$(".tab1 b").click(function(){
		//通过 .index()方法获取元素下标，从0开始，赋值给某个变量
			var _index = $(this).index();
		//让内容框的第 _index 个显示出来，其他的被隐藏
			$(".hou>div").eq(_index).show().siblings().hide();
		//改变选中时候的选项框的样式，移除其他几个选项的样式
		 $(this).addClass("val").siblings().removeClass("val");
		});
		
	});
});


/*****箭头轮播******/
$(function(){	
	$.ajax({
		type:"get",
		url:"data/carousel_two.php",
		dataType:"json",
		success:function(data){
			html="";
			for(var l of data){
			var {href,pic}=l
			html+=`
				<li><a href="${href}">
				<img src="${pic}">
				</a></li>`;
			
			}
				 $(".imgq").html(html);	
				 var firstimg=$('.imgq>li').first().clone(); //复制第一张图片  
				  $('.imgq').width(1550).append(firstimg).width($('.imgq li').length*($('.imgq img')));
		}
	})
  var i=0;
  var timer=null; 
 
  //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
  // 下一个按钮
  $('.next').click(function(){
   i++;
  
   if (i==$('.imgq li').length) {
    i=1; //这里不是i=0
    $('.imgq').css({left:0}); //保证无缝轮播，设置left值
   };
   $('.imgq').stop().animate({left:-i*310},280);     
  })
  // 上一个按钮
  $('.prev').click(function(){
   i--;
   if (i==-1) {
    i=$('.imgq li').length-2;
    $('.imgq').css({left:-($('.imgq li').length-1)*310});
   }
   $('.imgq').stop().animate({left:-i*310},280);
  })
  
  //设置按钮的显示和隐藏

  $('.thi1').hover(function(){
   $('.btn').fadeIn();
  },function(){
   $('.btn').fadeOut();
  })	
  //定时器自动播放
  timer=setInterval(function(){
   i++;
   if (i==$('.imgq li').length) {
    i=0;
    $('.imgq').css({left:0});

   };
   $('.imgq').stop().animate({left:-i*310},280);
  },4000)
  
  //鼠标移入，暂停自动播放，移出，开始自动播放
  $('.thi1').hover(function(){ 
   clearInterval(timer);
  },function(){
   timer=setInterval(function(){
   i++;
   if (i==$('.imgq li').length) {
    i=1;
    $('.imgq').css({left:0});
   };
   $('.imgq').stop().animate({left:-i*310},280);
  },4000)
  })	

});

/**********流水线轮播****************/
$(function(){
	/* $.ajax({
		type:"get",
		url:"data/carousel_three.php",
		dataType:"json",
		success:function(data){
			html="";
			for(var t of data){
			var {href,pic}=t
			html+=` 
				<li>
				<a href="${href}"><img src="${pic}" alt="" /></a>
				</li>
				`;	
			}
				 $(".scr1").html(html);
		}
	})	*/
	        
	
                    $(document).ready(function () {
                        $(".scr1").imgscroll({
                            speed: 40,    //图片滚动速度
                            amount: 0,    //图片滚动过渡时间
                            width: 1,     //图片滚动步数
                            dir: "left"   // "left" 或 "up" 向左或向上滚动
                        });
                    });
	
                    //图片滚动 调用方法 imgscroll({speed: 30,amount: 1,dir: "up"});
                    $.fn.imgscroll = function (o) {
                        var defaults = {
                            speed: 40,
                            amount: 0,
                            width: 1,
                            dir: "left"
                        };
                        o = $.extend(defaults, o);
                        return this.each(function () {
                            var _li = $("li", this);
                            _li.parent().parent().css({overflow: "hidden", position: "relative"}); //div
                            _li.parent().css({
                                margin: "0",
                                padding: "0",
                                overflow: "hidden",
                                position: "relative",
                                "list-style": "none"
                            }); //ul
                            _li.css({position: "relative", overflow: "hidden"}); //li
                            if (o.dir == "left") _li.css({float: "left"});

                            //初始大小
                            var _li_size = 0;
                            for (var i = 0; i < _li.size(); i++)
                                _li_size += o.dir == "left" ? _li.eq(i).outerWidth(true) : _li.eq(i).outerHeight(true);

                            //循环所需要的元素
                            if (o.dir == "left") _li.parent().css({width: (_li_size * 3) + "px"});
                            _li.parent().empty().append(_li.clone()).append(_li.clone()).append(_li.clone());
                            _li = $("li", this);

                            //滚动
                            var _li_scroll = 0;

                            function goto() {
                                _li_scroll += o.width;
                                if (_li_scroll > _li_size) {
                                    _li_scroll = 0;
                                    _li.parent().css(o.dir == "left" ? {left: -_li_scroll} : {top: -_li_scroll});
                                    _li_scroll += o.width;
                                }
                                _li.parent().animate(o.dir == "left" ? {left: -_li_scroll} : {top: -_li_scroll}, o.amount);
                            }

                            //开始
                            var move = setInterval(function () {
                                goto();
                            }, o.speed);
                            _li.parent().hover(function () {
                                clearInterval(move);
                            }, function () {
                                clearInterval(move);
                                move = setInterval(function () {
                                    goto();
                                }, o.speed);
                            });
                        });
                    };
                
  

});        


/***********联系方式***************/

$(function(){
	$(".article .wx").hover(function () {
		$(this).find(".wx_tc").stop(true,true).slideDown()
	}, function () {
		$(this).find(".wx_tc").stop(true,true).slideUp()
	})
	$(".article .yy").hover(function () {
		$(this).find(".yy_tc").stop(true, true).slideDown()
	}, function () {
		$(this).find(".yy_tc").stop(true, true).slideUp()
	})
	$(".article .wb").hover(function () {
		$(this).find(".wb_tc").stop(true, true).slideDown()
	}, function () {
		$(this).find(".wb_tc").stop(true, true).slideUp()
	})
	$(".article .qq").hover(function () {
		$(this).find(".qq_tc").stop(true, true).slideDown()
	}, function () {
		$(this).find(".qq_tc").stop(true, true).slideUp()
	})
	$(".article .tb").hover(function () {
		$(this).find(".tb_tc").stop(true, true).slideDown()
	}, function () {
		$(this).find(".tb_tc").stop(true, true).slideUp()
	})
	$(".article .lt").hover(function () {
		$(this).find(".lt_tc").stop(true, true).slideDown()
	}, function () {
		$(this).find(".lt_tc").stop(true, true).slideUp()
	})
})
            




/****************选项卡2*******************/
$(function(){
	$().ready(function(){
		$(".pli li").mouseover(function(){
		//通过 .index()方法获取元素下标，从0开始，赋值给某个变量
			var _index = $(this).index();
		//让内容框的第 _index 个显示出来，其他的被隐藏
			$(".gh>div").eq(_index).show().siblings().hide();
			$(".zy_szb>img").eq(_index).show().siblings().hide();
			$("#tab_con>div img").eq(_index).show().siblings().hide();
		//改变选中时候的选项框的样式，移除其他几个选项的样式
		 $(this).addClass("thiw").siblings().removeClass("thiw");
		});
		
	});

});








/**************媒体礼包*******************/

$(function(){
	$(".lastw a").hover(function(){
	 var _index = $(this).index();
	 $(".lastw p").eq(_index).show();
 },function(){
	 var _index = $(this).index();
	 $(".lastw p").eq(_index).hide();
 });
});


















