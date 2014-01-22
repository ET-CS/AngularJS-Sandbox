

// ------------------
// secondController.js
// ------------------
// Second Controller for Practice 4 on AngularJS
// By ET & RJ


//angular.module('practiceApp', []);	//Without this nothing works!

// Implicit np-app name controller
angular.module('practiceApp').controller('secondController',function($scope,someModelB)
	{	
		$scope.data=someModelB.someString;
	}
	
	);

//secondController.$inject = [];
