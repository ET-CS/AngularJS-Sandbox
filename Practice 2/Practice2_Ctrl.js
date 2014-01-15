// ------------------
// Practice2_Ctrl.js
// ------------------
// Controller for Practice 2 on AngularJS
// By Rotem Yaakoby & Etay Cohen-Solal


angular.module('practice', []);	//Without this definition nothing works!

// Implicit np-app name controller
angular.module('practice').controller('NoviceCtrl', 
['$scope',function($scope) {
	$scope.ctrlSays = "TO BE!!";
	$scope.lessons = 
		[
		 	{text:'learn how to call a module with implicit name'},
		];
	}
]);