app.controller('userController',['$scope','$http','$state',function($scope,$http,$state){

     $scope.arr1=[{name:'个人主页',view:'user.userhome'},
                  {name:'个人信息',view:'user.info'},
                  {name:'安全设置',view:'user.softSet'},
                  {name:'关注圈子',view:'circle'},
                  {name:'购买记录',view:'user.buyHistory'},]
   
     $http({
     	url:'json/user.json',
     	method:'get',
     }).success(function(res){
        $scope.user=res;
       
     })
}])