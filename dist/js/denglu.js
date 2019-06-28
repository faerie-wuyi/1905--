$(function(){
	
//点击登录按钮弹出登录窗口并实现验证进行登录
	$("#deng").on("click",function(e){
		$(".loginer").css({"display":"block"});
		$(".login-main").css({"display":"block"});
		$(".login-top span:last").css({"color":"#f00"});
		$(".login-top span:first").css({"color":"#000"});
		$(".login-bottom").show();
		$(".login1-bottom").hide();
		e.stopPropagation();
		//console.log($(document));
	
	})
	
		$(".login-main").click(function(e){			
			e.stopPropagation()
			$(".loginer").css({"display":"none"});
			$(".login-main").css({"display":"none"});
			 $('.onError').empty()
           	 $('.onSuccess').empty()
			 $("#a-account").val('');
			 $("#b-account").val('');
			 $("#a-mima").val('');
			 $("#b-mima").val('');
			 
		//console.log($(this));
	})	
	
	$(".login").click(function(e){
			e.stopPropagation()
	})		

//	
    $(".login-top span:first").click(function(){
    	 $(".login-top span:first").css({"color":"#f00"});
    	 $(".login-top span:last").css({"color":"none"});
    	  Code();
    	 $(".login1-bottom").show();
    	 $(".login-bottom").hide();
    })
	
	
	 $(".login-top span:last").click(function(){
    	 $(".login-top span:last").css({"color":"#f00"});
    	  $(".login-top span:first").css({"color":"none"});
    	 $(".login-bottom").show();
    	 $(".login1-bottom").hide();
    })
	
	

	
//正则判断封装函数并调用
$("#a-account").blur(function(){
		istrue('#a-account')
})	


$("#b-account").blur(function(){
		istrue('#b-account')
})	


$("#c-conner").blur(function(){
		istrue('#c-conner')
})	



$("#a-mima").blur(function(){
		coded('#a-mima')
})	
	
	
/*$("#b-mima").blur(function(){
		coded('#b-mima')
})	*/


$("#d-conner").blur(function(){
		coded('#d-conner')
})	
	
	

//结束，下面是点击注册弹出注册框，进行注册操作并做验证
$("#zhuce").on("click",function(e){
	e.stopPropagation();
	$(".loginer1").css({"display":"block"});
		$(".register-main").css({"display":"block"});	
		  Code();
		$(".register-top span:first").css({"color":"#f00"});
		$(".register-top span:last").css({"color":"#000"});
		$(".login-top span:last").css({"color":"#f00"});
		
	})

$(".register-main").click(function(e){			
				
			$(".loginer1").css({"display":"none"});
			$(".register-main").css({"display":"none"});
			e.stopPropagation();
			
	})	

$(".regist").click(function(e){
			e.stopPropagation();
	})	


$(".register-top span:first").click(function(){
    	
    	  $(".register-top span:first").css({"color":"#f00"});
    	  $(".register-top span:last").css({"color":"none"});
    	   
    	
    })



 $(".register-top span:last").click(function(){
    	$(".register-top span:last").css({"color":"#f00"});
    	$(".register-top span:first").css({"color":"none"}); 	
    	$(".register-main").hide();
    	$(".login-main").show();
    	
    	
    })




$("#login-bottom-center1").click(function(){//点击登录
	$.post("http://47.104.244.134:8080/userlogin.do",{name:$("#a-account").val(),password:$("#a-mima").val()}).done(data=>{
	console.log(data)
	if(data.code==0){
		location.href="index.html"
		$(".login-main").hide();
		$(".loginer").hide();
		localStorage.setItem("username",$("#a-account").val() )
		localStorage.setItem("token",data.data.token)
	}
	//}
})
})

$(".register-bottom-center").click(function(){//点击注册
	console.log(11111)
	$.post("http://47.104.244.134:8080/usersave.do",{
				username:$("#c-conner").val(),
				password:$("#d-conner").val(),
				email:$("#e-conner").val(),
				sex:$("#f-conner").val()
			}).done(data=>{
				console.log(data);
				if(data.code==0){
					alert("注册成功")
				}
			})
})



})	
   

//用于随机验证码验证   并且验证验证码是否输入正确
function  Code(){
	  var code = "";
			while(code.length < 4){
				var num = Math.floor(Math.random()*43)+48;
				if(num>=48&&num<=57 || num>=65&&num<=90){
					code += String.fromCharCode(num);
				}
			}
		$(".wangji11").html(code)
			//console.log(code);
		var arr="";
		var str="";
	    $(".register-bottom-center").click(function(){ //点击注册的时候如果验证码和输入框值一直才通过
        if ($(".zhanghao111").val() == code) {  
        	arr="已验证"
           $(".register-mima").append("<span claa='zhuijia'>"+arr+"</span>");
         //  $(".zhuijia").css({"font-size":"12px","color":"green"})
          
        } else {  
        	str="验证码错误"
            $(".register-mima").append("<span claa='cuowu'>"+str+"</span>");
             console.log("aa")
        }  
    }); 
    
        var arr1="";
		var str1="";
	    $(".login-bottom-center").click(function(){ //点击手机号的时候如果验证码和输入框值一直才通过
        if ($("#b-mima").val() == code) {  
        	arr1="已验证"
           $(".login-mima").append("<span claa='zhuijia'>"+arr1+"</span>");
         //  $(".zhuijia").css({"font-size":"12px","color":"green"})
          
        } else {  
        	str1="验证码错误"
            $(".login-mima").append("<span claa='cuowu'>"+str1+"</span>");
             console.log("aa")
        }  
    }); 

}



         
$("#wangji11").click(function(e){
	e.stopPropagation();
	Code();
})
			
			
//


//掉数据接口  验证注册
/*$.post("http://47.104.244.134:8080/usersave.do",{username:"18621971004",password:"wu1228262263",email:"1228262263@qq.com",sex:"男"}).done(data=>{
	console.log(data)
	
})*/



//正则判断封装函数并调用
function istrue(id){
        var $parent = $(id).parent();
		//console.log($parent)//账号这个id
		var reg1=/^1(3|4|5|7|8|9)\d{9}$/;
		var val = $(id).val();
		var errorMsg ="";
		 var okMsg="";
           if(reg1.test(val)){ 
           	    $('.onError').empty()
           	    $('.onSuccess').empty()
                errorMsg = "√";
               $parent.append("<span class='onError'>" + errorMsg + "</span>");
              
               $(".onError").css({"color":"green","position": "relative","top":"-30px","left":"300px"});
             
           }
           else{
           	 $('.onSuccess').empty()
           	  $('.onError').empty()
                okMsg="请重新输入";
              $parent.find(".high").remove();
               $parent.append("<span class='onSuccess'>"+okMsg+ "</span>");
               $(".onSuccess").css({"color":"red","position": "relative","top":"-30px","left":"214px","font-size":"12px"});
           }
		
}



function 
coded(id){
	var $parent = $(id).parent();
		var reg1=/^[a-zA-Z_]\w{5,13}$/
		var val = $(id).val();
		
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


