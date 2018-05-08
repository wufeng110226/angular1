/*!
 *
 * wufeng v0.0.1
 * Copyright 2015
 * under the WTFPL license:
 *
 */

function wechat(){
	var h = $(window).height();
	$(".wechat").css("height",h);
	$(".wechat").show();
}


function openlink(obj){
	if(obj.getAttribute('class') == 'ios'){
		obj.href = ios;
		obj.click();
	}else{
		obj.href = android;
		obj.click();
	}
}

$(function(){
	var u = navigator.userAgent.toLowerCase();
	if(u.indexOf('android') > -1 || u.indexOf('linux') > -1){
	    
//			    	a = setTimeout("window.top.location.href = android",4000);
//			        b = setTimeout("window.top.location.href = android",15000);
//			        c = setTimeout("window.top.location.href = android",20000);
//			        d = setTimeout("window.top.location.href = android",40000);
//			        e = setTimeout("window.top.location.href = android",60000);
	
	    if(u.indexOf('micromessenger') > -1){
	      wechat();
//				      clearTimeout(a);clearTimeout(b);clearTimeout(c);clearTimeout(d);clearTimeout(e);
	    }
	 }else if(u.indexOf('iphone') > -1 || u.indexOf('ipad') > -1) {
	 	$('.wechat img').attr('src','img/live_weixin_iphone.png');
	
//			        f = setTimeout("window.top.location.href = ios",4000);
//			        j = setTimeout("window.top.location.href = ios",15000);
//			        h = setTimeout("window.top.location.href = ios",20000);
//			        i = setTimeout("window.top.location.href = ios",40000);
//			        g = setTimeout("window.top.location.href = ios",60000);
	
	    if(u.indexOf('micromessenger') > -1){
	      wechat();
//				      clearTimeout(f);clearTimeout(j);clearTimeout(h);clearTimeout(i);clearTimeout(g);
	    }
	  }
})