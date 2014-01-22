

// ------------------
// firstController.js
// ------------------
// First Controller for Practice 4 on AngularJS
// By ET & RJ


//angular.module('practiceApp', []);	//Without this nothing works!

// Implicit np-app name controller
angular.module('practiceApp').controller('firstController',function($scope,someModelA)
	{	
		$scope.data=someModelA.someString;
	}
	
	);

//firstController.$inject = [];