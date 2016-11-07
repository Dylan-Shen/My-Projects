

app.controller('homeController',['$scope','$interval','$http',function($scope,$interval,$http){
    $scope.arr1=[
      {
      	img:'img/banner1.png',
      	name:'《晚秋》再现舞台',
      	detail:'汤唯 玄彬继电影后，首次在话剧舞台合作，重现美国西雅图两名男女身在异国他乡的爱情故事',
      	page:'detail',
      
      },

      {
      	img:'img/banner2.jpg',
      	name:'《鬼吹灯》微电影',
      	detail:'一次惊心动魄的旅行，摸金校尉再次带领团队，深入地下数米，探寻千年前的神秘古墓',
      	page:'detail',
        
      }
    ]
     
    $scope.showIndex=0;
    var timer=$interval(myfun,2000);
	  function myfun(){
		$scope.showIndex++;
		if($scope.showIndex==$scope.arr1.length){
			 $scope.showIndex=0;
		}
	}
    $scope.overFn=function(index){
       $scope.showIndex=index;
       $interval.cancel(timer)
           }
    $scope.outFn= function(index){
       $scope.showIndex=index;
       timer=$interval(myfun,2000)
          }
   

     

     $http({
        url:'json/list.json',
        method:'get',

     }).success(function(res){
        $scope.list=res;
        // console.log($scope.list)
     });
}])