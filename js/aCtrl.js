/*
 * angularjs 控制器
 * wf
 * under the WTFPL license:
 */
import { obj } from './public.js';
var app = require('./aApp');
app.filter('trustHtml', ["$sce",function ($sce) {  //禁止html转义
	return function (input) {
	    return $sce.trustAsHtml(input);
	}
}]);

app.controller('qaa', ['$scope','$http',function($scope, $http) {  //常见问题
    $http.jsonp("http://h5.ctyuemo.com/data/qaadata.js?callback=JSON_CALLBACK").success(
    	function(data){
    		try{
    			$scope.title = data[obj].title;
    			$scope.phone = data[obj].phone;
    			$scope.det = data[obj].det;
    		}catch(err){
    			console.log('进入了无法识别的页面。错误信息：'+err);
    		}
    		
    	}).error(
    		function(data,state){
    			if(state==404){
    				$("#warpper").addClass('wrong');
    				$(".nowloading").addClass('right').html("<p class='warning'>网络出现问题,请<a href='javascript:void(0);' onclick='history.go(0)'>刷新</a>重试！</p>");
    			}
    		}
    	);
    
		$scope.toggle = function(event) {
			angular.element(".show").removeClass('show');
			angular.element(".active").removeClass('active');
			if($(event.target).hasClass('active')){
				$(event.target).removeClass('active').siblings("div").removeClass('show');
			}else{
				$(event.target).addClass('active').siblings("div").addClass('show');
			}
    	}
}]);
app.controller('process', ['$scope','$http',function($scope, $http) {  //贷款流程
					
    $http.jsonp("http://h5.ctyuemo.com/data/processdata.js?callback=JSON_CALLBACK").success(
    	function(data){
    		
    		try{
    			$scope.title = data[obj].title;
    			$scope.det = data[obj].det;
    		}catch(err){
    			console.log('进入了无法识别的页面。错误信息：'+err);
    		}
    		
    	}).error(
    		function(data,state){
    			if(state==404){
    				$("#warpper").addClass('wrong');
    				$(".nowloading").addClass('right').html("<p class='warning'>网络出现问题 请<a href='javascript:void(0);' onclick='history.go(0)'>刷新</a>重试！</p>");
    			}
    			//console.log(state);
    		}
    	);
}]);
app.controller('news', ['$scope','$http',function($scope, $http) {  //贷款流程
					
    $http.jsonp("http://h5.ctyuemo.com/data/news.js?callback=JSON_CALLBACK").success(
    	function(data){
    		try{
    			$scope.title = data[obj].title;
    			$scope.description = data[obj].description;
    			$scope.det = data[obj].det;
    		}catch(err){
    			console.log('进入了无法识别的页面。错误信息：'+err);
    		}
    		
    	}).error(
    		function(data,state){
    			if(state==404){
    				$("#warpper").addClass('wrong');
    				$(".nowloading").addClass('right').html("<p class='warning'>网络出现问题 请<a href='javascript:void(0);' onclick='history.go(0)'>刷新</a>重试！</p>");
    			}
    			//console.log(state);
    		}
    	);
    	
    	$scope.back = function(event) {
			history.go(-1);
    	}
}]);