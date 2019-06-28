$(function(){
	 list()
	$('#all').click(function(){
		if(this.checked == true) {
			$("input[name='subBox']").each(function() {
				this.checked = true;
			})
		}
		
		if(this.checked == false){
			$('input[name="subBox"]').each(function(){
				this.checked = false;
					
			})
		}
	})
})

function add(gid,id){
   console.log(gid,id)
   $.ajax({
	type: 'GET',
	url: 'http://47.104.244.134:8080/cartupdate.do',
	data:{id:id,token:localStorage.getItem("token"),gid:gid,num:1},
	success: function(data, status, xhr){
		console.log('新增成功',data)
		list()
	}
   })
}
function reduce(gid,id){
	$.ajax({
		type: 'GET',
		url: 'http://47.104.244.134:8080/cartupdate.do',
		data:{id:id,token:localStorage.getItem("token"),gid:gid,num:-1},
		success: function(data, status, xhr){
			console.log('减少成功',data)
			list()
		}
	   })
}
function remove(gid,id){
	$.ajax({
		type: 'GET',
		url: 'http://47.104.244.134:8080/cartupdate.do',
		data:{id:id,token:localStorage.getItem("token"),gid:gid,num:0},
		success: function(data, status, xhr){
			console.log('减少成功',data)
			list()
		}
	   })
}
function list(){
    $.ajax({
        type: 'GET',
        url: 'http://47.104.244.134:8080/cartlist.do',
       
        data:{token:localStorage.getItem("token")},
        success: function(data, status, xhr){
			console.log(3333,data)
			$('.cart-cen').empty()
			
			var allprice=0
            data.map((item,index)=>{
            	console.log(item)
            	$('.cart-cen').append(`<div class="cart-shopping-z">
            		<div class="cart-shopping"><input class="input-1" type="checkbox" name='subBox' />
		<div class="cart-img"><img src=${item.goods.picurl} ></div>
		<p class="wenzi"><span>[不可空运]</span>${item.goods.name}</p>
		<div class="shuliang-1">
			<button class='reduce'  onclick='reduce(${item.gid},${item.id})'>-</button>
			<input type="text" value=${item.count} >
			<button class='add' onclick='add(${item.gid},${item.id})'>+</button>
		</div>
		<div class="price-z">
			<span class="price-z-top">￥${item.goods.price*item.count}</span>
			<span>￥${item.goods.price}/件</span>
		</div>
		
		<div class="buttom-z">
			<button onclick='remove(${item.gid},${item.id})'>[删除]</button>
			<button>[收藏]</button>
		</div></div>
		</div>`)
		  allprice +=  Number(item.goods.price)*Number(item.count)
		
            })
    
        $('.color-red').html(allprice)
        
        },

        error: function(xhr, type){
            
        }
	});
	
}