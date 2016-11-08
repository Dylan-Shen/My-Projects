 

var app = angular.module('qmgj',['ui.router']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	//官网首页
	$urlRouterProvider.otherwise('/home');
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'view/home.html',
		controller:'homeController'
	})
	.state('login',{
		url:'/login',
		templateUrl:'view/login.html',
		controller:'loginController'
	})
	.state('reg',{
		url:'/reg',
		templateUrl:'view/reg.html',
		controller:'regController'
	})
	.state('detail',{
		url:'/detail/:name',
		templateUrl:'view/detail.html',
		controller:'detailController'
	})
	.state('detail.history',{
		url:'/history',
		templateUrl:'view/detailHistory.html',
		
	})
	.state('detail.chat',{
		url:'/chat',
		templateUrl:'view/detailChat.html',
		
	})
	.state('list',{
		url:'/list',
		templateUrl:'view/list.html',
		controller:'listController'
	})
	.state('circle',{
		url:'/circle',
		templateUrl:'view/circle.html'
	})
	.state('column',{
		url:'/column',
		templateUrl:'view/column.html'
	})
	.state('support',{
		url:'/support',
		templateUrl:'view/support.html'
	})
	.state('pay',{
		url:'/pay',
		templateUrl:'view/pay.html',
		controller:'payController'
	})
	.state('paySuccess',{
		url:'/paySuccess',
		templateUrl:'view/paySuccess.html',
		controller:'paySuccessController'
	})
	.state('user',{
		url:'/user',
		templateUrl:'view/user.html',
		controller:'userController'
	})
	.state('user.userhome',{
		url:'/userhome',
		templateUrl:'view/userhome.html',
		// controller:'userController'
	})
	.state('user.info',{
		url:'/info',
		templateUrl:'view/info.html',
		
	})
	.state('user.softSet',{
		url:'/softSet',
		templateUrl:'view/softSet.html',
		controller:'softSetController'
		
	})
	.state('user.softSet.trueName',{
		url:'/trueName',
		templateUrl:'view/trueName.html',
		
	})
	.state('user.softSet.mail',{
		url:'/mail',
		templateUrl:'view/mail.html',
		
	})
	.state('user.buyHistory',{
		url:'/buyHistory',
		templateUrl:'view/buyHistory.html',
		controller:'buyHistoryController'
		
	})
}]);

app.controller('index1Controller',['$scope',function($scope){
     $scope.arr1=[
       {page:'home',
        name:'首页'},
        {page:'column',
        name:'节目专栏'},
        {page:'circle',
        name:'圈子'},
    ]
     $scope.showIndex=0;
       $scope.myfun=function(index){
       $scope.showIndex=index;
       }
}])



