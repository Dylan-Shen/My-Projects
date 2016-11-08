app.controller('detailController',['$scope','$stateParams','$http',function($scope,$stateParams,$http){
	 $scope.name = $stateParams.name;
     $http({
     	url:'json/'+$scope.name+'.json',
     	method:'get',
     }).success(function(res){
     	$scope.info=res;
     	
     })
     $scope.showActive=0;
     $scope.myfun=function(index){
     	$scope.showActive=index;
     }
}])