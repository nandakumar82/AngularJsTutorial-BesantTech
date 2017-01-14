angular.module('main',[])
.controller('directiveEX',function($scope){
			$scope.name = 'NandaKumar';
			$scope.age = '25';
			$scope.email = 'nandakumar@gmail.com';

	$scope.user = {
		name : 'Nanda',
		age : '25',
		email : 'nandakumar@gmail.com'
	};

	$scope.user1 = {
		name : 'kumar',
		age : '26',
		email : 'kumar@gmail.com'
	};

	$scope.update = function(){
		console.log('Hello');
	};

	}
).directive('personInfo',function(){
	return {
		scope:{
			mydata:'=',
			copyright:'@',
			onupdate :'&'
		},
	restrict:'EACM',
		replace:true,
	templateUrl : 'views/person.html',
		link: function(scope,element,attrs){
			console.log(scope);
			console.log(element);
			console.log(attrs);
			element.bind('click', function(){
				console.log(scope.mydata);
				console.log(element[0].querySelector('#abc').textContent);
				/*console.log(element[0].querySelector("[name='button1']").textContent);*/
				scope.$apply(function () {
					scope.mydata.name='susein'

				});
			});
			/*element.bind('mouseover', function(){
				console.log(scope.mydata);
			});*/


		}

	};
})