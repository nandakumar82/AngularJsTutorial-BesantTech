//angular creating object and injecting
angular.module('services',[]).service('calcservice',function (){
	this.add = function(a,b){
		return a+b;
	};
	this.subtract = function(a,b){
		return a-b;
	};
	this.multiply = function(a,b){
		return a*b;
	};
	this.divide = function(a,b){
		return a/b;
	};

});
//return in our control, perform some business logic and return
//or wrap a logic arounf the return, eg to Authenticate or error handling
//Syntax little tricky than services.
angular.module('services').
factory('calcfactory',function(){
	return {
		add: function(a,b){
			return a+b;	
		},
		subtract: function(a,b){
			return a-b;
		},
		multiply: function(a,b){
			return a*b;
		},
		divide: function(a,b){
			return a/b;
		}
	};
});