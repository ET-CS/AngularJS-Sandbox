// ------------------
// Practice3B_Ctrl.js
// ------------------
// Controller for Practice 3 on AngularJS
// By ET & RJ


angular.module('practice', []);	//Without this nothing works!

// Implicit np-app name controller
angular.module('practice').controller('someCtrl',function($scope,someModel)
	{		
		    
        $scope.peoplesData=someModel.someData;  
	    $scope.peoplesOperations=someModel.someFunction();
	}
	
	);

