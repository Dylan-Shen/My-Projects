app.controller('buyHistoryController', ['$scope', function($scope){
		var dataArr = [{
                "oid": "6",
                "rprice": "1",
                "fname": "万娱引力",
                "name": "触电来袭：互动演出鬼吹灯",
                "img": "img/myimg.png",
                "pay":"已支付",
                "pay2":"支付完成",
                "pay3":"paySuccess"
            },
            {
                "oid": "7",
                "rprice": "79",
                "fname": "人人娱乐",
                "name": "史上最高颜值天团等你来加油",
                "img": "img/myimg.png",
                "pay":"已支付",
                "pay2":"支付完成",
                "pay3":"paySuccess"
            },
            {
                "oid": "8",
                "rprice": "1",
                "fname": "万娱引力",
                "name": "触电来袭：互动演出鬼吹灯",
                "img": "img/myimg.png",
                "pay":"待支付",
                "pay2":"立即支付",
                "pay3":"pay"
            },
            {
                "oid": "9",
                "rprice": "99",
                "fname": "上海传媒",
                "name": "《未来十年》电影众筹",
                "img": "img/myimg.png",
                "pay":"已支付",
                "pay2":"支付完成",
                "pay3":"paySuccess"
            }
        ];

        var dataArr1 = [{
                "oid": "6",
                "rprice": "1",
                "fname": "万娱引力",
                "name": "触电来袭：互动演出鬼吹灯",
                "img": "img/myimg.png",
                "pay2":"支付完成",
                "pay3":"paySuccess"
            },
            {
                "oid": "7",
                "rprice": "79",
                "fname": "人人娱乐",
                "name": "史上最高颜值天团等你来加油",
                "img": "img/myimg.png",
                "pay2":"支付完成",
                "pay3":"paySuccess"

            },
            {
                "oid": "8",
                "rprice": "1",
                "fname": "万娱引力",
                "name": "触电来袭：互动演出鬼吹灯",
                "img": "img/myimg.png",
                "pay2":"支付完成",
                "pay3":"paySuccess"
            }
        ];
        var dataArr2 = [
            {
                "oid": "8",
                "rprice": "1",
                "fname": "万娱引力",
                "name": "触电来袭：互动演出鬼吹灯",
                "img": "img/myimg.png",
                "pay":"待支付",
                "pay2":"立即支付",
                "pay3":"pay"
            }
        ];
        var allDataArr = [dataArr,dataArr1,dataArr2];
        $scope.dataArr = dataArr;
        $scope.showActive = 0;
        $scope.checkContent = function(i){
        	$scope.dataArr = allDataArr[i];
        	$scope.showActive = i;
        }

   
	}])