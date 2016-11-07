app.controller('paySuccessController',['$scope',function($scope){
   
          $scope.showActive=0;
   $scope.myfun=function(index){
          $scope.showActive=index;
     }
}])