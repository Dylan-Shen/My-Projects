app.controller('regController',['$scope','$interval',function($scope,$interval){
       $scope.count=60;
       $interval(function(){
       	$scope.count--;
       	if($scope.count<0){
       		return $scope.count='请从新发送';
       	}

       },1000)
}])