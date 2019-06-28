$(function(){
	$("#deng").on("click",function(e){
		$(".loginer").css({"display":"block"});
		$(".login-main").css({"display":"block"});
		$(".login-top span:last").css({"color":"#f00"});
		$(".login-top span:first").css({"color":"#000"});
		$(".login-bottom").show();
		$(".login1-bottom").hide();
		e.stopPropagation();
		
	
	})
	$(".login-main").click(function(){
			$(".loginer").css({"display":"none"});
			$(".login-main").css({"display":"none"});
			$(".onError").empty();
           	$(".onSuccess").empty();
           	$(".Error").empty();
           	$(".Success").empty();
           	$(".zhanghao").val('');
           	$(".zhanghao1").val('');
		console.log($(this));
	})		
	
	$(".login").click(function(e){
	 	e.stopPropagation();
	 })
	

//	
    $(".login-top span:first").click(function(){
    	 $(".login-top span:first").css({"color":"#f00"});
    	 $(".login-top span:last").css({"color":"none"});
    	 $(".login1-bottom").show();
    	 $(".login-bottom").hide();
    })
	
	
	 $("#login-top span:last").click(function(){
    	 $(".login-top span:last").css({"color":"#f00"});
    	  $(".login-top span:first").css({"color":"none"});
    	 $(".login-bottom").show();
    	 $(".login1-bottom").hide();
    })
//实现点击切换登录方式	
	
//正则判断	手机号
$("#zhanghao").blur(function(){
          accounta ('#zhanghao');
		})


$("#zhanghao1").blur(function(){
		coded ('#zhanghao1');
})
























//账号
function accounta (id){

	var $parent = $(id).parent();
		//console.log($parent)//账号这个id
		var reg1=/^1(3|4|5|7|8|9)\d{9}$/;
		var val = $("#zhanghao").val();
		
           if(reg1.test(val)){
           	 $(".onError").empty();
           	 $(".onSuccess").empty();
                errorMsg = "√";
               $parent.append("<span class='onError'>" + errorMsg + "</span>");
              
               $(".onError").css({"color":"green","position": "relative","top":"-30px","left":"250px"});
             
           }
           else{
           	 $(".onSuccess").empty();
           	 $(".onError").empty();
           	
                okMsg="请重新输入";
              $parent.find(".high").remove();
               $parent.append("<span class='onSuccess'>"+okMsg+ "</span>");
               $(".onSuccess").css({"color":"red","position": "relative","top":"-30px","left":"214px"});
           }
         
		}


//密码
function 
coded(id){
	var $parent = $(id).parent();
		var reg1=/^[a-zA-Z_]\w{5,10}$/
		var val = $("#zhanghao1").val();
		
           if(reg1.test(val)){
           	 $(".Error").empty();
           	 $(".Success").empty();
                errorMsg = "√";
               $parent.append("<span class='Error'>" + errorMsg + "</span>");
              
               $(".Error").css({"color":"green","position": "relative","top":"-30px","left":"300px"});
             
           }
           else{
           	 $(".Success").empty();
           	 $(".Error").empty();
           	
                okMsg="请重新输入";
              $parent.find(".high").remove();
               $parent.append("<span class='Success'>"+okMsg+ "</span>");
               $(".Success").css({"font-size":"12px","color":"red","position": "relative","top":"0","left":"214px"});
           }
 
}



})
       