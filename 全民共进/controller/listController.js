

app.controller('listController',['$scope','$http',function($scope,$http){
     $scope.arr1=['全部','微电影','电影','电视剧','戏曲','话剧','书画','相声','戏剧','音乐剧','其他'];
     $scope.arr2=['筹资中','即将结束','已成功'];
     $scope.arr3=['最新','热门','结束时间'];
     $scope.arr4=['1','2','3','4','5','6','>','尾页'];
     $scope.showIndex1=0;
     $scope.showIndex2=2;
     $scope.showIndex3=0;
     $scope.showIndex4=0;
     $scope.myfun1=function(index){
        $scope.showIndex1=index;
     }
     $scope.myfun2=function(index){
        $scope.showIndex2=index;
     }
     $scope.myfun3=function(index){
        $scope.showIndex3=index;
     }
     $scope.myfun4=function(index){
        $scope.showIndex4=index;
     }

     $http({
        url:'json/list.json',
        method:'get',

     }).success(function(res){
        $scope.list=res;
        console.log($scope.list)
     });
}])