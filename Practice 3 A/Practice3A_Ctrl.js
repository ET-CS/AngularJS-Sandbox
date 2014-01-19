// ------------------
// Practice3A_Ctrl.js
// ------------------
// Controller for Practice 3 on AngularJS
// By ET & RJ


angular.module('practice', []);	//Without this nothing works!

// Implicit np-app name controller
angular.module('practice').controller('someCtrl',function($scope,someModel)
	{
		$scope.someStringFromScope = "Hi! I'm a string from the Scope defined in the controller";
		$scope.someStringFromModel=someModel.someString;
	});
