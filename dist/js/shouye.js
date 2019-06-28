
//实现2个tab切换效果
$(function(){
	$('#zhuliang-remen li').each(function(index){
		
		$(this).hover(function(){
			//console.log(111,index)
			$(this).siblings().removeClass("border-bot")//移除所有li的样式
			$(this).addClass("border-bot"); //给当前的li加上这个class 
			$("#zhuliang .shopping-center-right").hide(); //所有可见的 ul 都隐藏
            $("#zhuliang .shopping-center-right:eq(" + index + ")").show(); //eq 遍历 ul 根据 index的索引显示
		})
	})

})

$(function(){
	$('#zhushi-remen li').each(function(index){		
		$(this).hover(function(){
			//console.log($(this))
			//console.log(222,index)
			$(this).siblings().removeClass("border-bot")//移除所有li的样式
			$(this).addClass("border-bot"); //给当前的li加上这个class 
			$("#zhushi .shopping-center-right").hide(); //所有可见的 ul 都隐藏
            $("#zhushi .shopping-center-right:eq(" + index + ")").show(); //eq 遍历 ul 根据 index的索引显示
		})
	})
})
//完成


//鼠标滑过显示下拉菜单
	$(document).ready(function(){
		$("#wode").mouseover(function(){
			$(this).find(".wodechong").slideDown(500);
		})
		//console.log("aa")
		$("#wode").mouseleave(function(){
		$(this).find(".wodechong").slideToggle(500);
				
		})
		
		
		//鼠标经过改变li背景颜色
		$(".hot-bottom li").bind("mouseover",function(){
		$(this).css("background-color","#f00");
		});
		$(".hot-bottom li").bind("mouseout",function(){
			$(this).css("background-color","#fff");
		});
      //闹钟

		setInterval(function () {
		
        var data = new Date();
		//console.log("aaa")
		var day =data.getDate();
		var hour = data.getHours();
		var mint = data.getMinutes();
		var miao = data.getSeconds()
		$(".time").html(hour+":"+mint+":"+miao)
}, 1000);
	
	
		
		
		//鼠标经过显示一级和二级菜单
		$(".cart-menus").mouseover(function(){
			
			$(".shopping-menus").show();
			$(".carsouel-left").hide();
			
			
		})
		
		
		$(".dog-dog").mouseover(function(){
			$(".shopping-menus").hide();
			$(".carsouel-left").show();
		})
		
		$(".shopping-menus li").hover(function(){
			$(this).children().show();
			//console.log($(this))
		})
		
	})
	

//轮播
$(function(){
	var count = 0;				
				setInterval(function(){
					count++;
					if(count==$(".pic li").length){
						count = 0;
					}
					$(".pic li").eq(count).fadeIn().siblings().fadeOut();
					$("#nav li").eq(count).addClass("nav1").siblings().removeClass("nav1");
					
				},4000)
 
})
//            	
		
function jump(id){
	console.log(1111,id)
	//跳转页面并且把id传过去
	window.location.href='./xqy.html?id='+id;
}
$.ajax({
	type: 'GET',
	url: 'http://47.104.244.134:8080/goodsbytid.do',
	data:{tid:'13',page:2,limit:6},
	success: function(data, status, xhr){
		//获取六条数据把真实数据渲染到页面上
		data.data.map((item,index)=>{
			//div上加上点击事件跳转链接
			var templete =` <div class="bottom-left" style='height:237px' onclick='jump(${item.id})'>

			<div class="bottom-left1">
				<p class="zixin">${item.name}</p>
				<p class="qu"> ${item.info}</p>
			</div>
			<img src=${item.picurl} />
		</div>`
		//追加真实数据到.right-bottom这个class里面
		$('.right-bottom').append(templete)
		})
	      
	
	},
	error: function(xhr, type){
		
	}
});


 //获取商品列表
 $.get("http://47.104.244.134:8080/goodstypelist.do",{l:1}).done(data=>{
 	//console.log(data)
 	var str="";
 	for(var i=0;i<data.length;i++){
 		str+=`
		<li>${data[i].name}
		<ul id="erji">
		</ul>
		</li>
 		`
 	}
 	$(".shopping-menus").html(str);
 })
 

//获取二级菜单
$.get("http://47.104.244.134:8080/goodstypelist.do",{l:2}).done(data=>{
 	//console.log(data)
 	var str1="";
 	for(var i=0;i<data.length;i++){
 		
 	str1+=`
 	<li class="erji1">${data[i].name}</li>`	
 	}
 	$("#erji").html(str1);
 		
 		
 })





