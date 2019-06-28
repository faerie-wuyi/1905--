$(function(){
    //获取到id
    var Id = getUrlParam("id")
    //获取数据
    $.ajax({
        type: 'GET',
        url: 'http://47.104.244.134:8080/goodsbyid.do',
        data:{id:Id},
        success: function(data, status, xhr){
           // console.log(1111,data)
        $('.xq-left-top').html( `<div class="midArea">
                    <img src=${data.picurl}>
                    <div class="tuodong"></div>
                </div>
                <div class="fangda">
                    <img src=${data.picurl}>
                </div>
            </div>
            
            <div class="xq-left-center">
                <div class="xq-left-center-1">
                    <img src=${data.picurl}>
                </div>
                <div class="xq-left-center-2">
                    <img src=${data.picurl}>
                </div>`)
        $('.xq-info').html(`<h1 class="duola">${data.name}</h1>
            <p class="shayu">${data.info}</p>
            <div class="price">
                <div class="price-top">
                    <span>市场价</span>
                    <del>￥138</del>
                </div>
                <div class="price-bottom"
                    <span>E宠价</span>
                    <span class="jiaqian">￥${data.price}</span>
                </div>
            </div>`)
        
        
         $(".midArea").mouseover(function(){
    	$(".tuodong").css({"display":"block"});
    	$(".fangda").css({"display":"block"});
    	$(".fangda img").css({"display":"block"});
    	
    	$(".xq-right").hide();})
         
         
          $(".midArea").mouseout(function(){
    	$(".tuodong").css({"display":"none"});
    	$(".fangda").css({"display":"none"});
    	$(".xq-right").show();})
         
         
          $(".midArea").mousemove(function(e){
          	
          	  var $x = e.clientX;//鼠标与浏览器X轴的距离
                var $y = e.clientY; 
                var $l = $(".xq-left-top").offset().left;
                var $t = $(".xq-left-top").offset().top; 

                 console.log( $x,$y,$l,$t) 
          	
          	
                var $w = $(".tuodong").width()/2;               
                var $h = $(".tuodong").height()/2;
                var $left = $x - $l - $w; 
                var $top = $y - $t - $h;  
               
console.log($w,$h,$left,$top)

          	  $(".tuodong").css({left:$left,top:$top});
                
                var $yd_w = $(".tuodong").width() - $w * 2; 
                var $yd_h = $(".tuodong").height() - $h * 2;

          	console.log( $yd_w,$yd_h)
          	
          	
                var $yd_wbl = $left / $yd_w; 
                
                var $yd_hbl = $top / $yd_h;
                
                var $big_left = ($(".fangda img").width() - $(".midArea img").width()) * $yd_wbl; 
                var $big_top = ($(".fangda img").height() - $(".midArea img").height()) * $yd_hbl; 
               
                
                $(".fangda img").css({left:-$big_left,top:-$big_top});

          	
       
                 


          })
         
        
        },

        error: function(xhr, type){
            
        }
    });

    $('.tianjia').click(function(){
    console.log(11111)
     
     $.ajax({
        type: 'GET',
        url: 'http://47.104.244.134:8080/cartsave.do',
        data:{gid:Id,token:localStorage.getItem("token")},
        success: function(data, status, xhr){
            console.log(2222,data)
            alert('添加购物车成功')
             window.location.href='./cart.html';
        },

        error: function(xhr, type){
            
        }
    });
})
    


    
    
   
    
    
    
 //下拉菜单显示   
    $(".dogg").bind("mouseover",function(){
		$(".zhanshi").show();
		});
   $(".dogg").bind("mouseout",function(){
			$(".zhanshi").hide();
		});
    
    
     $(".dogg1").bind("mouseover",function(){
		$(".zhanshi1").show();
		});
   $(".dogg1").bind("mouseout",function(){
			$(".zhanshi1").hide();
		});
		
		 $(".dogg2").bind("mouseover",function(){
		$(".zhanshi2").show();
		});
   $(".dogg2").bind("mouseout",function(){
			$(".zhanshi2").hide();
		});
 //   
    
    
    
    
    
    
    
    
    
    
})


    




function getUrlParam(name) {

    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    
    if (r != null) return unescape(r[2]);
    
    return null; //返回参数值
    
    }
    
     