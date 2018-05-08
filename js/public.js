/*!
 *
 * wufeng v0.0.1
 * Copyright 2015
 * under the WTFPL license:
 *
 */

var pageInits = {
	obj:'',
	init:function(){
		if(isag){
			var obj;
			if(this.getUrlParam("qaaid")){
				this.obj = this.getUrlParam('qaaid');
			}else if(this.getUrlParam("processid")){
				this.obj = this.getUrlParam('processid');
			}else if(this.getUrlParam("newsid")){
				this.obj = this.getUrlParam('newsid');
			}else{
				$("#warpper").addClass('wrong');
				$(".nowloading").addClass('right').html("<p class='warning'>非法页面 请<a href='javascript:void(0);' onclick='history.go(-1)'>回退</a>至首页！</p>");
			}
		}
		$('.nowloading').css('height',window.screen.height);
		if(window.document.readyState){
			if(window.document.readyState == "complete"){
				this.doLoad();
			}else{
				setTimeout(this.init(),10);
			}
		}else{
			window.addEventListener("DOMContentLoaded",function(){
				this.doLoad();
			},false)
		}
	},
	doLoad:function(){
		$('#warpper').css('display','block');
   		$('.nowloading').css('display','none');
	},
	getUrlParam:function(name){
		//构造一个含有目标参数的正则表达式对象
		  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		  //匹配目标参数
		  var r = window.location.search.substr(1).match(reg);
		  //返回参数值
		  if (r!=null) return unescape(r[2]);
		  return null;
	},
	showmenu:function(clielm,detelm){
		$('.'+clielm).on('click',function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$(this).siblings('.'+detelm).css('display','none');
			}else{
				$(this).addClass('active');
				$(this).siblings('.'+detelm).css('display','block');
			}
		})
	}
}
window.onload = function(){
	pageInits.init();
}
module.exports = pageInits;